import { BadgeType, FactInterface } from "../types";

export const getFacts = async (
  category: BadgeType | null
): Promise<FactInterface[]> => {
  const categoryQuery = category ? `?category=${category}` : "";

  const response = await fetch(
    `http://localhost:3000/api/facts${categoryQuery}`
  );
  const data = response.json();
  return data;
};
