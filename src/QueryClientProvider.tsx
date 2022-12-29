import type { QueryClient } from "./queryClient";
import type { JSX } from "solid-js";
import { createContext, useContext } from "solid-js";

export const DefaultContext = createContext<QueryClient | undefined>(undefined);

export const useQueryClient = () => {
  const queryClient = useContext(DefaultContext);

  // Will always have queryClient as undefined
  if (!queryClient) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }

  return queryClient;
};

type QueryClientProviderProps = {
  client: QueryClient;
  children?: JSX.Element;
};

export const QueryClientProvider = (props: QueryClientProviderProps): JSX.Element => {
  return <DefaultContext.Provider value={props.client}>{props.children}</DefaultContext.Provider>;
};
