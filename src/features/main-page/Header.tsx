import styled from "styled-components";
import { Logo } from "../../Util/Logo";
import { Button } from "../../Util/Button";
import { AddFact } from "./AddFact";
import { useState } from "react";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column: 1 / -1;
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <>
      <StyledHeader>
        <Logo />
        <Button backgroundColor="gradient" onClick={handleClick}>
          {isOpen ? "Close" : "Share a fact"}
        </Button>
      </StyledHeader>
      {isOpen && <AddFact />}
    </>
  );
};
