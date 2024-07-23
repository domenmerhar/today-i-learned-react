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

  & > :nth-child(1) {
    flex: 1 1 30rem;
  }

  & > :nth-child(3) {
    grid-column: 1 / -1;
  }

  @media (max-width: 55em) {
    flex-direction: column;

    & > :nth-child(1) {
      flex: 0;
    }
  }
`;

const ButtonsHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;

  justify-self: end;
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
      <Badge type={category as BadgeType} />
      <ButtonsHolder>
        <VoteButton type="like" count={likes} />
        <VoteButton type="mindblown" count={mindblownVotes} />
        <VoteButton type="disagree" count={falseVotes} />
      </ButtonsHolder>
    </CardHolder>
  );
};
