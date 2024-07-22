import { Header } from "../features/main-page/Header";
import { FactCard } from "../features/main-page/FactCard";
import styled from "styled-components";

const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 10vw, 1fr);
  width: 90vw;
`;

export const MainPage = () => {
  return (
    <StyledMainPage>
      <Header />
      <FactCard />
    </StyledMainPage>
  );
};
