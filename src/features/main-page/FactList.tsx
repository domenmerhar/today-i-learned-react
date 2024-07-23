import styled from "styled-components";
import { FactCard } from "./FactCard";

const StyledFactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FactList = () => {
  return (
    <StyledFactList>
      <FactCard />
      <FactCard />
      <FactCard />
      <FactCard />
    </StyledFactList>
  );
};
