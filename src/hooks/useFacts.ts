import { useQuery } from "@tanstack/react-query";
import { BadgeType } from "../types";
import { getFacts } from "../api/getFacts";

export const useFacts = (category: BadgeType | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["facts", category],
    queryFn: () => getFacts(category),
  });

  return { data, isLoading, error };
};
