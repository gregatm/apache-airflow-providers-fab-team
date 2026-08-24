import { useState } from "react";
import { useGetProviders as useGetProvidersMutation } from "openapi/queries";
import type { ProvidersResponse } from "openapi/requests/types.gen";

export const useGetProviders = ({ onSuccess }: { onSuccess: (data: ProvidersResponse) => void }) => {

const [error, setError] = useState<unknown>(undefined);

  const onError = (_error: unknown) => {
    setError(_error);
  };

  const { isPending, mutate } = useGetProvidersMutation(undefined, {
    onError,
    onSuccess: (response) => {
      onSuccess(response.data as ProvidersResponse);
    },
  });

  const getProviders = () => {
    mutate();
  };

  return { getProviders, error, isPending, setError };
};
