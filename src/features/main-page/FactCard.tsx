import styled from "styled-components";
import { Badge } from "../../Util/Badge";
import { VoteButton } from "../../Util/VoteButton";

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

  justify-self: end;
`;

const Source = styled.a`
  display: inline-block;
  padding-left: 1rem;
  color: var(--zinc-400);
  text-decoration: none;

  cursor: pointer;
`;

export const FactCard = () => {
  return (
    <CardHolder>
      <div>
        React is being developed by Meta (formerly Facebook)
        <Source href="https://reactjs.org/">( Source )</Source>
      </div>
      <Badge type="technology" />
      <ButtonsHolder>
        <VoteButton type="like" />
        <VoteButton type="mindblown" />
        <VoteButton type="disagree" />
      </ButtonsHolder>
    </CardHolder>
  );
};
