import { useQueryClient } from "./QueryClientProvider";

export const createQuery = () => {
  // IT WILL THROW AN ERROR HERE
  const queryClient = useQueryClient();
  const count = queryClient.getCount();
  return count;
};
