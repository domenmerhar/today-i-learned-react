import styled from "styled-components";
import { FactCard } from "./FactCard";
import { useSearchParams } from "react-router-dom";
import { useFacts } from "../../hooks/useFacts";
import { BadgeType } from "../../types";
import { PuffLoader } from "react-spinners";

const StyledFactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  overflow: hidden;
  height: 75vh;
  overflow-y: scroll;
  padding-right: 1.6rem;
  grid-template-areas: fact-list;
`;

const LoadingBarHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const FactList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") as BadgeType | null;
  const { data, isLoading, error } = useFacts(category);

  if (error) return <div>error</div>;

  if (isLoading || !data)
    return (
      <LoadingBarHolder>
        <PuffLoader color="#d4d4d8" size={128} />
      </LoadingBarHolder>
    );

  return (
    <StyledFactList>
      {data?.map((fact) => (
        <FactCard key={fact.id} {...fact}>
          {fact.description}
        </FactCard>
      ))}
    </StyledFactList>
  );
};
