import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { changeVote } from "../api/changeVote";
import { ApiVoteType, CategoryType } from "../types";

export const useVote = (
  id: string,
  vote: ApiVoteType,
  add: boolean,
  category: Omit<CategoryType, "all">
) => {
  const queryClient = useQueryClient();

  const { data, error, mutate } = useMutation({
    mutationKey: ["vote", id, vote, add],
    mutationFn: () => changeVote(id, vote, add),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["facts", "all"],
        refetchType: "inactive",
      });
      queryClient.invalidateQueries({
        queryKey: ["facts", category],
        refetchType: "inactive",
      });
    },
  });

  return { data, error, mutate };
};
