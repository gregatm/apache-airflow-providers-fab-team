import { Heading, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit } from "react-icons/fi";
import { Dialog } from "src/components/Dialog";
import { IconButton } from "src/components/ui/IconButton";
import { RoleForm } from "./RoleForm";
import { RoleBody, RoleResponse } from "openapi/requests/types.gen";
import { useGetRolesKey, usePatchRole } from "openapi/queries";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  readonly disabled: boolean;
  readonly role: RoleResponse;
};

export const EditRoleButton = ({disabled, role}: Props) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<{ conf?: string }>({});

  const initialRoleValue: RoleBody = {
    name: role.name,
    team_name: role.team_name,
    actions: role.actions,
  };

  const { t: translate } = useTranslation(["admin"]);

  const { onClose, onOpen, open } = useDisclosure();

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [useGetRolesKey]
    });
    onClose();
  }

  const { mutate, isPending } = usePatchRole(undefined, {
    onSuccess: onSuccess,
  });

  const mockEditRole = (role: RoleBody) => {
    mutate({ body: role, path: { name: role.name }});
  }

  const handleClose = () => {
    setErrors(undefined);
    onClose();
  };

  const setError = () => {

  };

  return (
    <>
      <IconButton size="xs" onClick={onOpen}>
        <FiEdit />
      </IconButton>
      <Dialog.Root size="xl" lazyMount onOpenChange={handleClose} open={open} unmountOnExit>
        <Dialog.Content backdrop>
          <Dialog.Header>
            <Heading size="xl">{translate("roles.edit")}</Heading>
          </Dialog.Header>

          <Dialog.CloseTrigger />

          <Dialog.Body>
            <RoleForm
              error={errors}
              initialRole={initialRoleValue}
              isEditMode={true}
              isPending={isPending}
              mutateRole={mockEditRole}
              setError={setError}
            />
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
