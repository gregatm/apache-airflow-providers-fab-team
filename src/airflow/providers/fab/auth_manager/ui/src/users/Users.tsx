/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Flex, HStack, Spacer, useDisclosure, VStack } from "@chakra-ui/react"
import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";

import { ExpandCollapseButtons } from "src/components/ExpandCollapseButtons";

import {
  SelectionHeaderCheckbox,
  SelectionProvider,
  SelectionRowCheckbox,
  useRowSelection,
  type GetColumnsParams,
} from "src/components/DataTable/useRowSelection";

import { ActionBar } from "src/components/ui/ActionBar";
import { useState } from "react";
import { useTableURLState } from "src/components/DataTable/useTableUrlState";
import { DataTable } from "src/components/DataTable";
import { useGetUsers } from "openapi/queries";
import { EditUserButton } from "./EditUserButton";
import { DeleteUserButton } from "./DeleteUserButton";
import { Tooltip } from "src/components/ui";
import { SearchBar } from "src/components/SearchBar";
import { useAdvancedSearch } from "src/hooks/useAdvancedSearch";
import { useSearchParams } from "react-router-dom";
import { SearchParamsKeys, type SearchParamsKeysType } from "src/constants/searchParams";

import { ErrorAlert } from "src/components/ErrorAlert";
import { UserResponse } from "openapi/requests/types.gen";
import { DeleteUsersButton } from "./DeleteUsersButton";
import { AddUserButton } from "./AddUserButton";
export const Users = () => {
  const { t: translate } = useTranslation(["admin"]);

  const { setTableURLState, tableURLState } = useTableURLState({
    pagination: { pageIndex: 0, pageSize: 50 },
    sorting: [{id: "username"}]
  }); // To make multiselection smooth

  const { NAME_PATTERN, OFFSET }: SearchParamsKeysType = SearchParamsKeys;

  const [searchParams, setSearchParams] = useSearchParams();
  const [userKeyPattern, setUserKeyPattern] = useState(searchParams.get(NAME_PATTERN) ?? undefined);
  const { onClose, onOpen, open } = useDisclosure();
  const advancedSearch = useAdvancedSearch("users");
  const { pagination, sorting } = tableURLState;
  const [sort] = sorting;
  const orderBy = sort ? `${sort.desc ? "-" : ""}${sort.id === "value" ? "_val" : sort.id}` : "username";

  const { data, error, isLoading, isFetching } = useGetUsers({
    query: {
      limit: pagination.pageSize,
      offset: pagination.pageSize * pagination.pageIndex,
      order_by: orderBy,
      ...(advancedSearch.enabled
      ? { usernamePattern: userKeyPattern ?? undefined }
      : { usernamePrefixPattern: userKeyPattern ?? undefined })
    }
  }, undefined);

  const { allRowsSelected, clearSelections, handleRowSelect, handleSelectAll, selectedRows } =
      useRowSelection({
        data: data?.users,
        getKey: (user: UserResponse) => user.username,
      });

  const columns : Array<ColumnDef<UserResponse>> = [
    {
      accessorKey: "select",
      cell: ({ row }) => <SelectionRowCheckbox rowKey={row.original.username} />,
      enableHiding: false,
      enableSorting: false,
      enableColumnFilter: false,
      header: () => <SelectionHeaderCheckbox />,
      meta: {
        skeletonWidth: 10,
      },
    },
    {
      accessorKey: "username",
      enableColumnFilter: false,
      header: translate("columns.username"),
    },
    {
      accessorKey: "email",
      enableSorting: false,
      enableColumnFilter: false,
      header: translate("columns.email"),
    },
    {
      header: translate("columns.roles"),
      enableSorting: false,
      enableColumnFilter: false,
      accessorKey: "roles",
      cell: ({ row: { original: { roles } } }) => {
        const roleStr = roles.map(r => r.name).join(", ");
        return (
          <span>{roleStr}</span>
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
          <EditUserButton disabled={false} user={original} />
          <DeleteUserButton user={original} />
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
    setUserKeyPattern(value);
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
                  defaultValue={userKeyPattern ?? ""}
                  onChange={handleSearchChange}
                  placeholder={translate("users.searchPlaceholder")}
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
                  <AddUserButton disabled={selectedRows.size > 0} />
                </HStack>
              </VStack>
              <DataTable
                columns={columns}
                data={data?.users ?? []}
                enableColumnFilters={true}
                initialState={{...tableURLState}}
                isLoading={isLoading}
                isFetching={isFetching}
                errorMessage={<ErrorAlert error={error} />}
                modelName="admin:users.user"
                total={data?.total_entries ?? 0}
                onStateChange={onStateChange}
              />
              <ActionBar.Root closeOnInteractOutside={false} open={Boolean(selectedRows.size)}>
              <ActionBar.Content>
                <ActionBar.SelectionTrigger>
                  {selectedRows.size} {translate("deleteActions.selected")}
                </ActionBar.SelectionTrigger>
                <ActionBar.Separator />
                <Tooltip content={translate("users.delete.tooltip")}>
                  <DeleteUsersButton clearSelections={clearSelections} deleteKeys={[...selectedRows.keys()]} />
                </Tooltip>
                <ActionBar.CloseTrigger onClick={clearSelections} />
              </ActionBar.Content>
            </ActionBar.Root>
            </SelectionProvider>
    </>
  );
};
