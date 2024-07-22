import { Header } from "../features/main-page/Header";
import { FactCard } from "../features/main-page/FactCard";
import styled from "styled-components";
import { SideBar } from "../features/main-page/SideBar";

const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: 21rem minmax(50rem, 1fr);
  align-items: start;

  width: 80vw;
  padding: 3.2rem 0;
`;

export const MainPage = () => {
  return (
    <StyledMainPage>
      <Header />
      <SideBar />
      <FactCard />
    </StyledMainPage>
  );
};
