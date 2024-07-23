import { BASE_API_LINK } from "../constants";
import { ApiVoteType, FactInterface } from "../types";

export const changeVote = async (
  id: string,
  vote: ApiVoteType,
  add: boolean
): Promise<FactInterface> => {
  const voteOperation = add ? "add" : "remove";
  const url = `${BASE_API_LINK}/facts/${id}/${voteOperation}-vote`;

  const body = new URLSearchParams({ vote: `${vote}` });

  const data = await fetch(url, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    method: "PATCH",
  });

  const dataJson = await data.json();

  console.log({ dataJson, url, vote, body });

  return data.json();
};
