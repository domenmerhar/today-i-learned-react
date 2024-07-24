import styled from "styled-components";
import { Badge } from "../../Util/Badge";
import { VoteButton } from "../../Util/VoteButton";
import { BadgeType, FactInterface } from "../../types";

const CardHolder = styled.div`
  background-color: var(--zinc-600);

  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  padding: 1.5rem 2.25rem;
  font-size: 1.6rem;
  font-weight: 500;
  align-items: center;
  border-radius: 16px;

  min-width: 373px;

  & > :nth-child(1) {
    flex: 1 1 30rem;
  }
`;

const ButtonsHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;

  justify-self: end;

  @media (max-width: 59em) {
    margin-left: auto;
  }
`;

const Source = styled.a`
  display: inline-block;
  padding-left: 1rem;
  color: var(--zinc-400);
  text-decoration: none;

  cursor: pointer;
`;

interface FactCardProps extends Omit<FactInterface, "description"> {
  children: string;
}

export const FactCard: React.FC<FactCardProps> = ({
  id,
  children,
  source,
  category,
  likes,
  mindblownVotes,
  falseVotes,
}) => {
  return (
    <CardHolder>
      <div>
        {children}
        <Source href={source}>( Source )</Source>
      </div>
      <Badge type={falseVotes > likes ? "disputed" : (category as BadgeType)} />
      <ButtonsHolder>
        <VoteButton type="likes" id={id} count={likes} category={category} />
        <VoteButton
          type="mindblownVotes"
          id={id}
          count={mindblownVotes}
          category={category}
        />
        <VoteButton
          type="falseVotes"
          id={id}
          count={falseVotes}
          category={category}
        />
      </ButtonsHolder>
    </CardHolder>
  );
};
