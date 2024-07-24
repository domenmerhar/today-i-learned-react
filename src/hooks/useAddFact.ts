import { AddFactInterface } from "../types";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { addFact } from "../api/addFact";

export const useAddFact = () => {
  const queryClient = useQueryClient();

  const { mutate, data, error } = useMutation({
    mutationFn: ({ description, source, category }: AddFactInterface) =>
      addFact({ description, source, category }),

    onSuccess(data) {
      queryClient.invalidateQueries(["facts", "all"] as InvalidateQueryFilters);
      queryClient.invalidateQueries([
        "facts",
        data.category,
      ] as InvalidateQueryFilters);
    },
  });

  return { mutate, data, error };
};
