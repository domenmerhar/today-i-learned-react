import styled from "styled-components";
import { Icon } from "./Icon";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const LogoText = styled.span`
  text-transform: uppercase;
  font-size: 3.2rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.93);
`;

export const Logo = () => {
  return (
    <StyledLogo>
      <Icon />
      <LogoText>Today I Learned</LogoText>
    </StyledLogo>
  );
};
