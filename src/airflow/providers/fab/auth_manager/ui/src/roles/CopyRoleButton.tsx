import { Heading, useDisclosure } from "@chakra-ui/react";
import { RoleBody, RoleResponse } from "openapi/requests/types.gen";
import { useTranslation } from "react-i18next";
import { MdContentCopy  } from "react-icons/md";
import { IconButton } from "src/components/ui/IconButton";
import { Dialog } from "src/components/Dialog";
import { RoleForm } from "./RoleForm";
import { useCreateRole, useGetRolesKey } from "openapi/queries";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  readonly disabled: boolean;
  readonly role: RoleResponse;
};
export const CopyRoleButton = ({disabled, role}: Props) => {
  const queryClient = useQueryClient();
  const { t: translate } = useTranslation("admin");
  const { onClose, onOpen, open } = useDisclosure();
  const initialRoleValue: RoleBody = {
    name: "",
    team_name: role.team_name,
    actions: role.actions,
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
      <IconButton size="sm" onClick={onOpen}>
        <MdContentCopy  />
      </IconButton>
      <Dialog.Root size="xl" lazyMount onOpenChange={onClose} open={open} unmountOnExit>
        <Dialog.Content backdrop>
          <Dialog.Header>
            <Heading size="xl">{translate("roles.copy")}</Heading>
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
