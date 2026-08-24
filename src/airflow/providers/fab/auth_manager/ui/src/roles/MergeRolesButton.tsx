import { Heading, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconButton } from "src/components/ui";
import { Dialog } from "src/components/Dialog";
import { LuMerge } from "react-icons/lu";
import { RoleForm } from "./RoleForm";
import { ActionResource, RoleBody, RoleResponse } from "openapi/requests/types.gen";
import { useCreateRole, useGetRolesKey, usePatchRole } from "openapi/queries";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  readonly disabled: boolean;
  readonly roles: RoleResponse[];
};
export const MergeRolesButton = ({disabled , roles}: Props) => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<{ conf?: string }>({});

  const initialRoleValue: RoleBody = {
    name: "",
    team_name: new Set(roles.map(r => r.team_name)).size == 1 ? roles[0]?.team_name : "",
    actions: roles
      .flatMap(r => r.actions ?? [])
      .reduce((left, right) => left.find(a => (right.action.name == a.action.name && right.resource.name == a.resource.name)) ? left : [...left ,right], new Array<ActionResource>())
  };
  const { t: translate } = useTranslation(["admin"]);

  const { onClose, onOpen, open } = useDisclosure();

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [useGetRolesKey]
    });
    onClose();
  }

  const { mutate, isError, isSuccess, isPending } = useCreateRole(undefined, { onSuccess: onSuccess })
  const mutateRole = (role: RoleBody) => mutate({body: role });

  const handleClose = () => {
    setErrors(undefined);
    onClose();
  };


  const setError = () => {

  };

  return (
    <>
      <IconButton onClick={onOpen}>
        <LuMerge />
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
              mutateRole={mutateRole}
              setError={setError}
            />
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
