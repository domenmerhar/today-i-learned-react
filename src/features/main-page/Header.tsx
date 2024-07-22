import styled from "styled-components";
import { Logo } from "../../Util/Logo";
import { Button } from "../../Util/Button";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />

      <Button backgroundColor="gradient">Share a fact</Button>
    </StyledHeader>
  );
};
