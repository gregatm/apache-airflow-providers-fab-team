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
import { Box, Button, Field, HStack, Input, Spacer, Spinner, Stack, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FiSave } from "react-icons/fi";
import { ErrorAlert } from "src/components/ErrorAlert";
import { RoleResponse, UserBody } from "openapi/requests/types.gen";
import { useGetRoles } from "openapi/queries";

type UserFormProps = {
  readonly error: unknown;
  readonly initialUser: UserBody;
  readonly isEditMode: boolean;
  readonly isPending: boolean;
  readonly mutateUser: (requestBody: UserBody) => void;
  readonly setError: (error: unknown) => void;
};

type RoleGroupType = {
  [key: string]: {
    label: string,
    options: Array<RoleResponse>
  },
  global: {
    label: string,
    options: Array<RoleResponse>
  },
};

export const UserForm = ({
    error,
    initialUser,
    isEditMode = false,
    isPending,
    mutateUser,
    setError
  }: UserFormProps) => {
  const { t: translate } = useTranslation(["admin"]);

  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<UserBody>({
    defaultValues: initialUser,
    mode: "onChange",
  });

  const handleReset = () => {
    setError(undefined);
    reset();
  };

  const { data: roles, errorLoadingRoles, isRolesLoading, isRolesFetching } = useGetRoles({
      query: {
        order_by: "name"
      }
    }, undefined);

  const options = useMemo(
      () => {
        const groups: Array<GroupType> = (roles?.roles ?? [])
          .reduce((groups: RoleGroupType, role: RoleResponse) => {
            if (!role.team_name) {
              groups.global.options.push(role)
            } else if (!(role.team_name in groups)) {
              groups[role.team_name] = { label: role.team_name, options: [role]};
            } else {
              groups[role.team_name]?.options.push(role);
            }
            return groups;
          }, {global: {label: translate("roles.global"), options: []}})
          const options = []
          for (var group in groups) {
            options.push(groups[group])
          }
          return options
        },
        [roles]
    );

  const formatOptionLabel = (option: RoleResponse, meta) => {
    if (meta.context === "value")
      return (<>{option.name+ " (" + (option.team_name ?? translate("global.roles")) + ")"}</>);
    return (<>{option.name}</>)
  };

  return (
    <>
      <VStack>
        <Controller
          control={control}
          name="username"
          render={({ field, fieldState }) => (
            <Field.Root invalid={Boolean(fieldState.error)} required>
              <Field.Label>{translate("columns.username")}</Field.Label>
              {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
              <Input disabled={Boolean(initialUser.username)} autoFocus variant="subtle" {...field} />
            </Field.Root>
          )}
          rules={{ required: true }}
        />

        <Controller
          control={control}
          name="roles"
          render={({ field, fieldState}) => (
            <Field.Root invalid={Boolean(fieldState.error)}>
              <Field.Label fontSize="md">
                {translate("columns.roles")}
              </Field.Label>
              <Stack width="100%">
                {isRolesLoading ? (
                  <Spinner size="sm" style={{ left: "60%", position: "absolute", top: "20%" }} />
                ) : undefined}
                <Select
                  {...Field}
                  data-testid="roles-selector"
                  isClearable
                  showGroupWheel
                  isDisabled={isRolesLoading}
                  isMulti
                  closeMenuOnSelect={false}
                  onChange={(val) => field.onChange(val ?? null)}
                  options={options}
                  placeholder={translate("roles.selector.placeHolder")}
                  formatGroupLabel={(group) => (<strong>{group.label}</strong>)}
                  formatOptionLabel={formatOptionLabel}
                  getOptionValue={(opt) => opt.name}
                  value={field.value || []}
                />
              </Stack>
            </Field.Root>
          )}
        />


        <ErrorAlert error={error} />
      </VStack>

      <Box as="footer" display="flex" justifyContent="flex-end" mt={8}>
        <HStack w="full">
          {isDirty ? (
            <Button onClick={handleReset} variant="outline">
              {translate("common:reset")}
            </Button>
          ) : undefined}
          <Spacer />
          <Button disabled={!isValid || isPending} onClick={() => void handleSubmit(mutateUser)()}>
            <FiSave /> {translate("formActions.save")}
          </Button>
        </HStack>
      </Box>
    </>
  );
};
