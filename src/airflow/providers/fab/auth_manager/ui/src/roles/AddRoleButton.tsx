import { Button, Heading, useDisclosure } from "@chakra-ui/react";
import { RoleBody } from "openapi/requests/types.gen";
import { useTranslation } from "react-i18next";
import { MdAdd } from "react-icons/md";
import { Dialog } from "src/components/Dialog";
import { RoleForm } from "./RoleForm";
import { useCreateRole, useGetRolesKey } from "openapi/queries";
import { useQueryClient } from "@tanstack/react-query";

export const AddRoleButton = () => {
  const queryClient = useQueryClient();
  const { t: translate } = useTranslation("admin");
  const { onClose, onOpen, open } = useDisclosure();
  const initialRoleValue: RoleBody = {
    name: ""
  };

  const error = undefined;
  const isPending = false;

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [useGetRolesKey]
    });
    onClose();
  }

  const { mutate, isError, isSuccess } = useCreateRole(undefined, { onSuccess: onSuccess })
  const mutateRole = (role: RoleBody) => mutate({body: role });

  const setError = () => {}
  return (
    <>
      <Button size="sm" onClick={onOpen}>
        <MdAdd /> {translate("roles.add")}
      </Button>
      <Dialog.Root size="xl" lazyMount onOpenChange={onClose} open={open} unmountOnExit>
        <Dialog.Content backdrop>
          <Dialog.Header>
            <Heading size="xl">{translate("roles.add")}</Heading>
          </Dialog.Header>

          <Dialog.CloseTrigger />

          <Dialog.Body>
            <RoleForm
              error={error}
              initialRole={initialRoleValue}
              isPending={isPending}
              mutateRole={mutateRole}
              setError={setError}
            />
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>

  );
};
