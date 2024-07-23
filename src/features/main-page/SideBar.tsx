import styled from "styled-components";
import { Button } from "../../Util/Button";
import { useSearchParams } from "react-router-dom";
import { BUTTONS_OBJ } from "../../constants";
import { ButtonsCategoryType } from "../../types";

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const SideBar = () => {
  const [, setCategory] = useSearchParams();

  const handleClick = (category: ButtonsCategoryType) => () =>
    setCategory(category === "all" ? {} : { category });

  return (
    <StyledSideBar>
      {BUTTONS_OBJ.map((button) => (
        <Button
          key={button.text}
          backgroundColor={button.backgroundColor}
          onClick={handleClick(button.text)}
        >
          {button.text}
        </Button>
      ))}
    </StyledSideBar>
  );
};
