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
import { useListTeams } from "openapi/queries";
import { RoleResponse, TeamResponse } from "openapi/requests/types.gen";
import { Tooltip } from "src/components/ui";
import { SearchBar } from "src/components/SearchBar";
import { useAdvancedSearch } from "src/hooks/useAdvancedSearch";
import { useSearchParams } from "react-router-dom";

import { SearchParamsKeys, type SearchParamsKeysType } from "src/constants/searchParams";
import { ExpandCollapseButtons } from "src/components/ExpandCollapseButtons";
import { ErrorAlert } from "src/components/ErrorAlert";
import { DeleteTeamButton } from "./DeleteTeamButton";
import { AddTeamButton } from "./AddTeamButton";
import { DeleteTeamsButton } from "./DeleteTeamsButton";

export const Teams = () => {

  const { t: translate } = useTranslation(["admin"]);

  const { setTableURLState, tableURLState } = useTableURLState({
    pagination: { pageIndex: 0, pageSize: 50 },
    sorting: [{id: "name"}]
  }); // To make multiselection smooth

  const { NAME_PATTERN, OFFSET }: SearchParamsKeysType = SearchParamsKeys;

  const [searchParams, setSearchParams] = useSearchParams();
  const [teamKeyPattern, setTeamKeyPattern] = useState(searchParams.get(NAME_PATTERN) ?? undefined);
  const { onClose, onOpen, open } = useDisclosure();
  const advancedSearch = useAdvancedSearch("teams");
  const { pagination, sorting } = tableURLState;
  const [sort] = sorting;
  const orderBy = sort ? `${sort.desc ? "-" : ""}${sort.id === "value" ? "_val" : sort.id}` : "name";

  const { data, error, isLoading, isFetching } = useListTeams({
    limit: pagination.pageSize,
    offset: pagination.pageSize * pagination.pageIndex,
    orderBy: [orderBy],
    ...(advancedSearch.enabled
    ? { teamNamePattern: teamKeyPattern ?? undefined }
    : { teamNamePrefixPattern: teamKeyPattern ?? undefined })
  });

  const { allRowsSelected, clearSelections, handleRowSelect, handleSelectAll, selectedRows } =
    useRowSelection({
      data: data?.teams,
      getKey: (team: TeamResponse) => team.name,
    });

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
      header: translate("teams.name"),
      enableColumnFilter: false,
    },
    {
      accessorKey: "actions",
      enableSorting: false,
      enableColumnFilter: false,
      header: "",
      cell: ({ row: { original } }) => {
        return (
        <Flex justifyContent="end">
          <DeleteTeamButton team={original} />
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
    setTeamKeyPattern(value);
  };

  const onStateChange = (state) => {
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
            defaultValue={teamKeyPattern ?? ""}
            onChange={handleSearchChange}
            placeholder={translate("teams.searchPlaceholder")}
          />
          <HStack gap={4} mt={2}>
            <ExpandCollapseButtons
              collapseLabel={translate("common:expand.collapse")}
              expandLabel={translate("common:expand.expand")}
              isExpanded={open}
              onCollapse={onClose}
              onExpand={onOpen}
            />
            <Spacer />
            <AddTeamButton disabled={selectedRows.size > 0} />
          </HStack>
        </VStack>
        <DataTable
          columns={columns}
          data={data?.teams ?? []}
          enableColumnFilters={true}
          initialState={tableURLState}
          isLoading={isLoading}
          isFetching={isFetching}
          errorMessage={<ErrorAlert error={error} />}
          modelName="admin:teams.team"
          total={data?.total_entries ?? 0}
          onStateChange={onStateChange}
        />
        <ActionBar.Root closeOnInteractOutside={false} open={Boolean(selectedRows.size)}>
        <ActionBar.Content>
          <ActionBar.SelectionTrigger>
            {selectedRows.size} {translate("deleteActions.selected")}
          </ActionBar.SelectionTrigger>
          <ActionBar.Separator />
          <Tooltip content={translate("variables.delete.tooltip")}>
            <DeleteTeamsButton clearSelections={clearSelections} deleteKeys={[...selectedRows.keys()]} />
          </Tooltip>
          <ActionBar.CloseTrigger onClick={clearSelections} />
        </ActionBar.Content>
      </ActionBar.Root>
      </SelectionProvider>
    </>
  );

};
