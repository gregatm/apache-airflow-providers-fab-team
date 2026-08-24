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
import { Button, Heading, useDisclosure } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdAdd } from "react-icons/md";
import { Dialog } from "src/components/Dialog";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateUser, useGetUsersKey, useUpdateUser } from "openapi/queries";
import type { UserResponse, UserBody } from "openapi/requests/types.gen";

import { UserForm }from "./UserForm";

export const AddUserButton = () => {
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<{ conf?: string }>({});

  const { t: translate } = useTranslation("admin");

  const { onClose, onOpen, open } = useDisclosure();

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [useGetUsersKey]
    });
    onClose();
  }

  const initialUserValue: UserBody = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    roles: []
  };

  const { mutate, error, isPending, setError } = useCreateUser(undefined, {
    onSuccessConfirm: onSuccess,
  });

  const handleClose = () => {
    setError(undefined);
    onClose();
  };


  const mockAddUser = (user: UserBody) => {
    mutate({ body: user });
  }

  return (
    <>
      <Button size="sm" onClick={onOpen}>
        <MdAdd /> {translate("users.add")}
      </Button>
      <Dialog.Root size="xl" lazyMount onOpenChange={onClose} open={open} unmountOnExit>
        <Dialog.Content backdrop>
          <Dialog.Header>
            <Heading size="xl">{translate("users.add")}</Heading>
          </Dialog.Header>

          <Dialog.CloseTrigger />

          <Dialog.Body>
            <UserForm
              error={error}
              initialUser={initialUserValue}
              isEditMode
              isPending={isPending}
              mutateUser={mockAddUser}
              setError={setErrors}
            />
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
