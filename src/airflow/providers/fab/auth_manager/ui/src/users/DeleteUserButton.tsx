import { Button, Code, Flex, Heading, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Dialog } from "src/components/Dialog";
import { useTranslation } from "react-i18next";
import { IconButton } from "src/components/ui/IconButton"
import { FiTrash2 } from "react-icons/fi";
import { useDeleteUser, useGetUsersKey } from "openapi/queries";
import { useQueryClient } from "@tanstack/react-query";
import { UserBody } from "openapi/requests/types.gen";

type Props = {
  user: UserBody
};

export const DeleteUserButton = ({user}: Props) => {
  const queryClient = useQueryClient();
  const { t: translate } = useTranslation("admin");
  const { onClose, onOpen, open } = useDisclosure();

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [useGetUsersKey]
    });
    onClose()
  }

  const { mutate, isPending} = useDeleteUser(undefined, {onSuccess});

  const handleClick = () => {
    mutate({path: { username: user.username}})
  };

  return (
    <>
      <IconButton
        size="xs"
        colorPalette="danger"
        label="Delete this"
        onClick={onOpen}
      >
        <FiTrash2 />
      </IconButton>
      <Dialog.Root onOpenChange={onClose} open={open}>
        <Dialog.Content backdrop>
          <Dialog.Header>
            <VStack align="start" gap={4}>
              <Heading size="xl">{translate("users.delete.title", { count: 1 })}</Heading>
            </VStack>
          </Dialog.Header>

          <Dialog.CloseTrigger />

          <Dialog.Body width="full">
            <Text color="fg" fontSize="md" fontWeight="semibold" mb={4}>
              {translate("users.delete.firstConfirmMessage")}
              <br />
              <Code mb={2} mt={2} p={4}>
                {user.username}
              </Code>
              <br />
              {translate("deleteActions.modal.secondConfirmMessage")}
              <strong>{translate("deleteActions.modal.thirdConfirmMessage")}</strong>
            </Text>
            <Flex justifyContent="end" mt={3}>
              <Button
                colorPalette="danger"
                loading={isPending}
                onClick={handleClick}
              >
                <FiTrash2 /> <Text fontWeight="bold">{translate("deleteActions.modal.confirmButton")}</Text>
              </Button>
            </Flex>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
