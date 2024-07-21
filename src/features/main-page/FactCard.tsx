import styled from "styled-components";
import { Badge } from "../../Util/Badge";

const CardHolder = styled.div`
  background-color: var(--zinc-600);

  display: grid;
  grid-template-columns: minmax(30rem, 7fr) minmax(min-content, 1fr) minmax(
      min-content,
      2fr
    );
  padding: 1.5rem 2.25rem;
  font-size: 1.6rem;
  font-weight: 500;
  align-items: center;
  border-radius: 16px;
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
      <div>buttons</div>
    </CardHolder>
  );
};
