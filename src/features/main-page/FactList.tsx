import styled from "styled-components";
import { FactCard } from "./FactCard";
import { useSearchParams } from "react-router-dom";
import { useFacts } from "../../hooks/useFacts";
import { BadgeType } from "../../types";

const StyledFactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FactList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") as BadgeType | null;
  const { data, isLoading, error } = useFacts(category);

  if (isLoading || !data) {
    <div>loading</div>;
  }

  return (
    <StyledFactList>
      {data?.map((fact) => (
        <>
          <FactCard key={fact.id} {...fact}>
            {fact.description}
          </FactCard>
        </>
      ))}
    </StyledFactList>
  );
};
