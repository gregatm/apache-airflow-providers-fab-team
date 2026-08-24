import { Button, Heading, useDisclosure } from "@chakra-ui/react";
import { TeamResponse } from "openapi/requests/types.gen";
import { useTranslation } from "react-i18next";
import { MdAdd } from "react-icons/md";
import { Dialog } from "src/components/Dialog";
import { useQueryClient } from "@tanstack/react-query";
import { TeamForm } from "./TeamForm";
import { useCreateTeam, useListTeamsKey } from "openapi/queries";

export const AddTeamButton = () => {
  const queryClient = useQueryClient();
  const { t: translate } = useTranslation("admin");
  const { onClose, onOpen, open } = useDisclosure();
  const initialTeamValue: TeamResponse = {
    name: ""
  };

  const error = undefined;
  const isPending = false;

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [useListTeamsKey]
    });
    onClose();
  }

  const { mutate } = useCreateTeam(undefined, { onSuccess });
  const mutateTeam = (team: TeamResponse) => mutate({body:  team });

  const setError = () => {}
  return (
    <>
      <Button size="sm" onClick={onOpen}>
        <MdAdd /> {translate("teams.add")}
      </Button>
      <Dialog.Root size="xl" lazyMount onOpenChange={onClose} open={open} unmountOnExit>
        <Dialog.Content backdrop>
          <Dialog.Header>
            <Heading size="xl">{translate("teams.add")}</Heading>
          </Dialog.Header>

          <Dialog.CloseTrigger />

          <Dialog.Body>
            <TeamForm
              error={error}
              initialTeam={initialTeamValue}
              isPending={isPending}
              mutateRole={mutateTeam}
              setError={setError}
            />
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>

  );
};
