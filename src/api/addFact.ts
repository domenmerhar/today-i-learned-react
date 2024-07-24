import { BASE_API_LINK } from "../constants";
import { AddFactInterface, FactInterface } from "../types";

export const addFact = async ({
  description,
  source,
  category,
}: AddFactInterface): Promise<FactInterface> => {
  const url = `${BASE_API_LINK}/facts`;
  const body = new URLSearchParams({
    description,
    source,
    category,
  } as unknown as URLSearchParams);

  let data;

  try {
    data = await fetch(url, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      method: "POST",
    });
  } catch (e) {
    console.log(e);
    throw new Error("Failed to add fact");
  }

  return data.json();
};
