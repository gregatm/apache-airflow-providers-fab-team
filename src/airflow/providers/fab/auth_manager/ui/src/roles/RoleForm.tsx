import { Box, Button, Field, HStack, Input, Spacer, Spinner, Stack, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import type { GroupType } from "chakra-react-select";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useConfig } from "src/queries/useConfig.tsx";
import { useTranslation } from "react-i18next";
import { FiSave } from "react-icons/fi";
import { ActionResource, PermissionCollectionResponse, RoleBody } from "openapi/requests/types.gen";
import { TeamSelector } from "src/components/TeamSelector";
import { ErrorAlert } from "src/components/ErrorAlert";
import { useGetPermissions } from "openapi/queries";

type RoleFormProps = {
  readonly error: unknown;
  readonly initialRole: RoleBody;
  readonly isEditMode?: boolean;
  readonly isPending: boolean;
  readonly mutateRole: (requestBody: RoleBody) => void;
  readonly setError: (error: unknown) => void;
};

type ActionGroupType = {
  [key: string]: {
    label: string,
    options: Array<ActionResource>
  }
};

export const RoleForm = ({
  error,
  initialRole,
  isEditMode = false,
  isPending,
  mutateRole,
  setError,
} : RoleFormProps) => {
  const { t: translate } = useTranslation(["admin"]);
  const { data, isLoading } = useGetPermissions({}, undefined);
  const multiTeamEnabled = Boolean(useConfig("multi_team"));
  const options = useMemo(
    () => {
      const groups: Array<GroupType> = (data?.actions ?? [])
        .reduce((groups: ActionGroupType, action: ActionResource) => {
          if (!(action.resource.name in groups)) {
            groups[action.resource.name] = { label: action.resource.name, options: [action]};
          } else {
            groups[action.resource.name]?.options.push(action);
          }
          return groups;
        }, {})
        const options = []
        for (var group in groups) {
          options.push(groups[group])
        }
        return options
      },
      [data]
  );

  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<RoleBody>({
    defaultValues: () => (Promise.resolve(initialRole)),
    mode: "onChange",
  });

  const handleReset = () => {
    setError(undefined);
    reset();
  };

  const formatOptionLabel = (option, meta) => {
    if (meta.context === "value")
      return (<>{option.action.name+ " (" + option.resource.name + ")"}</>);
    return (<>{option.action.name}</>)
  };

  return (
    <>
      <VStack>
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <Field.Root invalid={Boolean(fieldState.error)} required>
              <Field.Label fontSize="md">
                {translate("columns.name")} <Field.RequiredIndicator />
              </Field.Label>
              <Input {...field} disabled={Boolean(initialRole.name)} required size="sm" value={field.value || ""} />
              {fieldState.error ? <Field.ErrorText>{fieldState.error.message}</Field.ErrorText> : undefined}
            </Field.Root>
          )}
          rules={{
            required: translate("roles.form.keyRequired"),
            validate: (_value) => _value.length <= 250 || translate("roles.form.keyMaxLength"),
          }}
        />

        <Controller
          control={control}
          name="actions"
          render={({ field, fieldState}) => (
            <Field.Root invalid={Boolean(fieldState.error)}>
              <Field.Label fontSize="md">
                {translate("columns.permissions")}
              </Field.Label>
              <Stack width="100%">
                {isLoading ? (
                  <Spinner size="sm" style={{ left: "60%", position: "absolute", top: "20%" }} />
                ) : undefined}
                <Select
                  {...Field}
                  data-testid="permission-selector"
                  isClearable
                  showGroupWheel
                  isDisabled={isLoading}
                  isMulti
                  closeMenuOnSelect={false}
                  onChange={(val) => field.onChange(val ?? null)}
                  options={options}
                  placeholder={translate("permissions.selector.placeHolder")}
                  formatGroupLabel={(group) => (<strong>{group.label}</strong>)}
                  formatOptionLabel={formatOptionLabel}
                  getOptionValue={(opt) => opt.action.name + opt.resource.name}
                  value={field.value || []}
                />
              </Stack>
            </Field.Root>
          )}
          rules={{

          }}
        />

        { multiTeamEnabled ? <TeamSelector control={control}/> : undefined }

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
          <Button disabled={!isValid || isPending} onClick={() => void handleSubmit(mutateRole)()}>
            <FiSave /> {translate("formActions.save")}
          </Button>
        </HStack>
      </Box>
    </>
  )
};
