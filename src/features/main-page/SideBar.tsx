import styled from "styled-components";
import { BackgroundColorType, BadgeType } from "../../types";
import { Button } from "../../Util/Button";

interface ButtonObject {
  backgroundColor: BackgroundColorType;
  text: BadgeType | "all";
}

const buttons: ButtonObject[] = [
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

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const SideBar = () => {
  return (
    <StyledSideBar>
      {buttons.map((button) => (
        <>
          <Button key={button.text} backgroundColor={button.backgroundColor}>
            {button.text}
          </Button>
        </>
      ))}
    </StyledSideBar>
  );
};
