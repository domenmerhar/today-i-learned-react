import { Header } from "../features/main-page/Header";
import styled from "styled-components";
import { SideBar } from "../features/main-page/SideBar";
import { FactList } from "../features/main-page/FactList";

const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: 21rem minmax(50rem, 1fr);
  align-items: start;
  gap: 1.6rem;

  width: 75vw;
  max-width: 1440px;
  padding: 3.2rem 0;
`;

export const MainPage = () => {
  return (
    <StyledMainPage>
      <Header />
      <SideBar />
      <FactList />
    </StyledMainPage>
  );
};
