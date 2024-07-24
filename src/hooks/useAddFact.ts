import { AddFactInterface } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFact } from "../api/addFact";

export const useAddFact = () => {
  const queryClient = useQueryClient();

  const { mutate, data, error } = useMutation({
    mutationFn: ({ description, source, category }: AddFactInterface) =>
      addFact({ description, source, category }),

    onSuccess(data) {
      queryClient.invalidateQueries({
        queryKey: ["facts", "all"],
        refetchType: "inactive",
      });
      queryClient.invalidateQueries({
        queryKey: ["facts", data.category],
        refetchType: "inactive",
      });
    },
  });

  return { mutate, data, error };
};
