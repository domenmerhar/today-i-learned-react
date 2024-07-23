import { useMutation } from "@tanstack/react-query";
import { changeVote } from "../api/changeVote";
import { ApiVoteType } from "../types";

export const useVote = (id: string, vote: ApiVoteType, add: boolean) => {
  const { data, error, mutate } = useMutation({
    mutationKey: ["vote", id, vote, add],
    mutationFn: () => changeVote(id, vote, add),
  });

  return { data, error, mutate };
};
