import { Flex, HStack, Spacer, Collapsible, useDisclosure, VStack } from "@chakra-ui/react"

import {
  SelectionHeaderCheckbox,
  SelectionProvider,
  SelectionRowCheckbox,
  useRowSelection,
  type GetColumnsParams,
} from "src/components/DataTable/useRowSelection";

import { useState } from "react";
import { LuChevronRight } from "react-icons/lu"
import { ActionBar } from "src/components/ui/ActionBar";
import type { ColumnDef } from "@tanstack/react-table";

import { useTranslation } from "react-i18next";

import { useTableURLState } from "src/components/DataTable/useTableUrlState";
import { DataTable } from "src/components/DataTable";
import { useConfig } from "src/queries/useConfig.tsx";
import { useGetRoles, useListTeams } from "openapi/queries";
import { RoleResponse } from "openapi/requests/types.gen";
import { EditRoleButton } from "./EditRoleButton";
import { DeleteRoleButton } from "./DeleteRoleButton";
import { AddRoleButton } from "./AddRoleButton";
import { DeleteRolesButton } from "./DeleteRolesButton";
import { Tooltip } from "src/components/ui";
import { SearchBar } from "src/components/SearchBar";
import { useAdvancedSearch } from "src/hooks/useAdvancedSearch";
import { useSearchParams } from "react-router-dom";

import { SearchParamsKeys, type SearchParamsKeysType } from "src/constants/searchParams";
import { ExpandCollapseButtons } from "src/components/ExpandCollapseButtons";
import { ErrorAlert } from "src/components/ErrorAlert";
import { CopyRoleButton } from "./CopyRoleButton";
import { RoleFilterBar } from "./RoleFilterBar";
import { MergeRolesButton } from "./MergeRolesButton";

export const Roles = () => {

  const { t: translate } = useTranslation(["admin"]);

  const { setTableURLState, tableURLState } = useTableURLState({
    pagination: { pageIndex: 0, pageSize: 50 },
    sorting: [{id: "name"}]
  }); // To make multiselection smooth

  const { NAME_PATTERN, OFFSET, TEAMS }: SearchParamsKeysType = SearchParamsKeys;

  const [searchParams, setSearchParams] = useSearchParams();
  const [roleKeyPattern, setRoleKeyPattern] = useState(searchParams.get(NAME_PATTERN) ?? undefined);
  const { onClose, onOpen, open } = useDisclosure();
  const advancedSearch = useAdvancedSearch("roles");
  const teamKey = searchParams.get(TEAMS);
  const { pagination, sorting } = tableURLState;
  const [sort] = sorting;
  const orderBy = sort ? `${sort.desc ? "-" : ""}${sort.id === "value" ? "_val" : sort.id}` : "name";

  const { data, error, isLoading, isFetching } = useGetRoles({
    query: {
      limit: pagination.pageSize,
      offset: pagination.pageSize * pagination.pageIndex,
      order_by: orderBy,
      ...(advancedSearch.enabled
      ? { roleNamePattern: roleKeyPattern ?? undefined }
      : { roleNamePrefixPattern: roleKeyPattern ?? undefined }),
      team_name: teamKey
    }
  }, undefined);

  const { allRowsSelected, clearSelections, handleRowSelect, handleSelectAll, selectedRows } =
    useRowSelection({
      data: data?.roles,
      getKey: (role) => role.name,
    });
  const multiTeamEnabled = Boolean(useConfig("multi_team"));

  const selectedRoles = data?.roles.filter((r: RoleResponse) => selectedRows.get(r.name))

  const columns : Array<ColumnDef<RoleResponse>> = [
    {
      accessorKey: "select",
      cell: ({ row }) => <SelectionRowCheckbox rowKey={row.original.name} />,
      enableHiding: false,
      enableSorting: false,
      enableColumnFilter: false,
      header: () => <SelectionHeaderCheckbox />,
      meta: {
        skeletonWidth: 10,
      },
    },
    {
      accessorKey: "name",
      header: translate("roles.name"),
      enableColumnFilter: false,
    },
    ...(multiTeamEnabled ? [{
      accessorKey: "team_name",
      header: translate("columns.team"),
      filterFn: "equalsString",
      enableColumnFilter: true,
    }] : []),
    {
      accessorKey: "roles",
      enableSorting: false,
      enableColumnFilter: false,
      header: translate("columns.permissions"),
      cell: ({row }) => {
        return (
          <Collapsible.Root defaultOpen={open}>
            <Collapsible.Trigger
              paddingY="3"
              display="flex"
              gap="2"
              alignItems="center"
            >
              <Collapsible.Indicator
                transition="transform 0.2s"
               _open={{ transform: "rotate(90deg)" }}
              >
                <LuChevronRight />
              </Collapsible.Indicator>
              Roles (expand)
            </Collapsible.Trigger>
            <Collapsible.Content>
              {row.original.actions?.map(action => action.action.name + " (" + action.resource.name + ")").join(", ")}
            </Collapsible.Content>
          </Collapsible.Root>
        )
      }
    },
    {
      accessorKey: "actions",
      enableSorting: false,
      enableColumnFilter: false,
      header: "",
      cell: ({ row: { original } }) => {
        return (
        <Flex justifyContent="end">
          <EditRoleButton disabled={false} role={original} />
          <CopyRoleButton disabled={false} role={original} />
          <DeleteRoleButton role={original} />
        </Flex>);
      },
      meta: {
        skeletonWidth: 10,
      }
    }
  ];

  const handleSearchChange = (value: string) => {
    if (value) {
      searchParams.set(NAME_PATTERN, value);
    } else {
      searchParams.delete(NAME_PATTERN);
    }
    setTableURLState({
      pagination: { ...pagination, pageIndex: 0 },
      sorting,
    });
    searchParams.delete(OFFSET);
    setSearchParams(searchParams);
    setRoleKeyPattern(value);
  };

  const onStateChange = (state) => {
    if (state.columnFilters)
      searchParams.set(TEAMS, state.columnFilters)
    else
      searchParams.delete(TEAMS)
    setSearchParams(searchParams)
    setTableURLState(state);
  }

  return (
    <>
      <SelectionProvider
        allRowsSelected={allRowsSelected}
        onRowSelect={handleRowSelect}
        onSelectAll={handleSelectAll}
        selectedRows={selectedRows}
      >
        <VStack alignItems="none">
          <SearchBar
            advancedSearch={advancedSearch}
            defaultValue={roleKeyPattern ?? ""}
            onChange={handleSearchChange}
            placeholder={translate("roles.searchPlaceholder")}
          />
          <HStack gap={4} mt={2}>
            <ExpandCollapseButtons
              collapseLabel={translate("common:expand.collapse")}
              expandLabel={translate("common:expand.expand")}
              isExpanded={open}
              onCollapse={onClose}
              onExpand={onOpen}
            />
            <RoleFilterBar />
            <Spacer />
            <AddRoleButton disabled={selectedRows.size > 0} />
          </HStack>
        </VStack>
        <DataTable
          columns={columns}
          data={data?.roles ?? []}
          enableColumnFilters={true}
          initialState={{...tableURLState, columnFilters: teamKey}}
          isLoading={isLoading}
          isFetching={isFetching}
          errorMessage={<ErrorAlert error={error} />}
          modelName="admin:roles.role"
          total={data?.total_entries ?? 0}
          onStateChange={onStateChange}
        />
        <ActionBar.Root closeOnInteractOutside={false} open={Boolean(selectedRows.size)}>
        <ActionBar.Content>
          <ActionBar.SelectionTrigger>
            {selectedRows.size} {translate("deleteActions.selected")}
          </ActionBar.SelectionTrigger>
          <ActionBar.Separator />
          <Tooltip content={translate("roles.delete.tooltip")}>
            <DeleteRolesButton clearSelections={clearSelections} deleteKeys={[...selectedRows.keys()]} />
          </Tooltip>
          <Tooltip content={translate("roles.copy.tooltip")}>
            <MergeRolesButton disabled={false} roles={selectedRoles}/>
          </Tooltip>
          <ActionBar.CloseTrigger onClick={clearSelections} />
        </ActionBar.Content>
      </ActionBar.Root>
      </SelectionProvider>
    </>
  );

};
