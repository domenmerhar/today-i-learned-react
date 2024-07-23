export type BackgroundColorType =
  | "blue"
  | "green"
  | "red"
  | "yellow"
  | "pink"
  | "teal"
  | "orange"
  | "purple"
  | "gradient";

export type BadgeType =
  | "technology"
  | "science"
  | "finance"
  | "society"
  | "entertainment"
  | "health"
  | "history"
  | "news"
  | "disputed";

export type CategoryType =
  | "technology"
  | "science"
  | "finance"
  | "society"
  | "entertainment"
  | "health"
  | "history"
  | "news"
  | "all";

export type ApiVoteType = "likes" | "mindblownVotes" | "falseVotes";

export type ButtonsCategoryType = CategoryType;

export interface FactInterface {
  id: string;
  category: Omit<CategoryType, "all">;
  description: string;
  likes: number;
  mindblownVotes: number;
  falseVotes: number;
  source: string;
}
