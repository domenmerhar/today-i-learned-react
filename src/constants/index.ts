import { BackgroundColorType, ButtonsCategoryType } from "../types";

export const BASE_API_LINK = "http://localhost:3000/api";

interface ButtonObject {
  backgroundColor: BackgroundColorType;
  text: ButtonsCategoryType;
}

export const BUTTONS_OBJ: ButtonObject[] = [
  {
    backgroundColor: "gradient",
    text: "all",
  },
  {
    backgroundColor: "blue",
    text: "technology",
  },
  {
    backgroundColor: "green",
    text: "science",
  },
  {
    backgroundColor: "red",
    text: "finance",
  },
  {
    backgroundColor: "yellow",
    text: "society",
  },
  {
    backgroundColor: "pink",
    text: "entertainment",
  },
  {
    backgroundColor: "teal",
    text: "health",
  },
  {
    backgroundColor: "orange",
    text: "history",
  },
  {
    backgroundColor: "purple",
    text: "news",
  },
];
