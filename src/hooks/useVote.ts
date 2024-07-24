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
      console.log("Vote changed");
      queryClient.invalidateQueries(["facts"] as InvalidateQueryFilters);
      queryClient.invalidateQueries([
        "facts",
        category,
      ] as InvalidateQueryFilters);
    },
  });

  return { data, error, mutate };
};
