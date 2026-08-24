import { Box, Button, Field, HStack, Input, Spacer, Spinner, Stack, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import type { GroupType } from "chakra-react-select";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useConfig } from "src/queries/useConfig.tsx";
import { useTranslation } from "react-i18next";
import { FiSave } from "react-icons/fi";
import { ActionResource, PermissionCollectionResponse, RoleBody, TeamResponse } from "openapi/requests/types.gen";
import { TeamSelector } from "src/components/TeamSelector";
import { ErrorAlert } from "src/components/ErrorAlert";
import { useGetPermissions } from "openapi/queries";

type TeamFormProps = {
  readonly error: unknown;
  readonly initialTeam: TeamResponse;
  readonly isEditMode?: boolean;
  readonly isPending: boolean;
  readonly mutateRole: (requestBody: TeamResponse) => void;
  readonly setError: (error: unknown) => void;
};

export const TeamForm = ({
  error,
  initialTeam,
  isEditMode = false,
  isPending,
  mutateRole,
  setError,
} : TeamFormProps) => {
  const { t: translate } = useTranslation(["admin"]);

  const {
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<TeamResponse>({
    defaultValues: () => (Promise.resolve(initialTeam)),
    mode: "onChange",
  });

  const handleReset = () => {
    setError(undefined);
    reset();
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
              <Input {...field} disabled={Boolean(initialTeam.name)} required size="sm" value={field.value || ""} />
              {fieldState.error ? <Field.ErrorText>{fieldState.error.message}</Field.ErrorText> : undefined}
            </Field.Root>
          )}
          rules={{
            required: translate("teams.form.keyRequired"),
            validate: (_value) => _value.length <= 250 || translate("teams.form.keyMaxLength"),
          }}
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
          <Button disabled={!isValid || isPending} onClick={() => void handleSubmit(mutateRole)()}>
            <FiSave /> {translate("formActions.save")}
          </Button>
        </HStack>
      </Box>
    </>
  )
};
