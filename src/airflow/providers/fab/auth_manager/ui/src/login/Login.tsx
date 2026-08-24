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
import { Button, Container, Heading, Span, Text, Box, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { MdKey } from "react-icons/md";
import { useCookies } from "react-cookie";
import { useSearchParams } from "react-router-dom";

import type { LoginResponse, ProvidersResponse, ProviderResource } from "openapi/requests/types.gen";
import { AirflowPin } from "src/AirflowPin";
import { useCreateToken } from "src/queries/useCreateToken";
import { useGetProviders1 } from "openapi/queries";

// Derive the cookie path from the <base> tag so the _token cookie is scoped
// to the Airflow subpath (e.g. "/team-a/") instead of "/".
const cookiePath = new URL(
  document.querySelector("head>base")?.getAttribute("href") ?? "/",
  globalThis.location.origin,
).pathname;

export type LoginBody = {
  password: string;
  username: string;
};

const isSafeUrl = (targetUrl: string): boolean => {
  try {
    const base = new URL(globalThis.location.origin);
    const target = new URL(targetUrl, base);

    return (target.protocol === "http:" || target.protocol === "https:") && target.origin === base.origin;
  } catch {
    return false;
  }
};

const LOCAL_STORAGE_DISABLE_BANNER_KEY = "disable-sam-banner";

export const Login = () => {
  const { data, isLoading } = useGetProviders1();
  const [searchParams] = useSearchParams();
  const [, setCookie, removeCookie] = useCookies(["_token"]);
  const [isBannerDisabled, setIsBannerDisabled] = useState(
    localStorage.getItem(LOCAL_STORAGE_DISABLE_BANNER_KEY),
  );

  const onSuccess = (data: LoginResponse) => {
    // Fall back to the Airflow base path (e.g. "/team-a/") so that
    // logins without a "next" parameter (e.g. after logout) redirect
    // to the correct subpath instead of the server root "/".
    const fallback = cookiePath;

    // Redirect to appropriate page with the token
    const next = searchParams.get("next") ?? fallback;

    // Remove any stale _token cookie at root path to prevent duplicate
    // cookies.  When two _token cookies exist (one at "/" and one at the
    // subpath), the server's SimpleCookie parser picks the last one which
    // may be the stale value, causing authentication failures.
    if (cookiePath !== "/") {
      removeCookie("_token", { path: "/" });
    }

    setCookie("_token", data.access_token, {
      path: cookiePath,
      secure: globalThis.location.protocol !== "http:",
    });

    const redirectTarget = isSafeUrl(next) ? next : fallback;

    globalThis.location.replace(redirectTarget);
  };
  const { createToken, error, isPending, setError } = useCreateToken({
    onSuccess,
  });

  const onLogin = (data: LoginBody) => {
    setError(undefined);
    createToken(data);
  };

  return (
    <Box
      _dark={{
        bg: "gray.900",
      }}
      alignItems="center"
      bg="gray.50"
      display="flex"
      justifyContent="center"
      minH="100vh"
      p={4}
    >
      <Container
        _dark={{
          bg: "gray.800",
        }}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        maxW="md"
        p={8}
      >

        <VStack align="stretch">
        <HStack alignSelf="center" gap={3} mb={6}>
          <AirflowPin height="35px" width="35px" />
          <Heading _dark={{ color: "white" }} color="gray.800" fontWeight="normal" size="xl">
            Sign into Airflow
          </Heading>
        </HStack>

          {!isLoading && data.providers.map((p: ProviderResource) => (
          <Button asChild>
            <a href={"/auth/fab/login/" + p.name + "?next=" + encodeURIComponent(searchParams.get("next") ?? "/")}><HStack><MdKey /> {p.name}</HStack></a>
          </Button>
          ))}

        </VStack>

      </Container>
    </Box>
  );
};
