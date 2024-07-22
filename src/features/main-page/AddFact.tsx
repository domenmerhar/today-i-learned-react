import styled from "styled-components";
import { Button } from "../../Util/Button";

const StyledAddFact = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  background-color: var(--zinc-600);
  border-radius: 16px;
  padding: 1rem 1.5rem;

  & > :nth-child(1) {
    flex: 1;
  }
`;

const FactInput = styled.input`
  background-color: var(--zinc-500);
  border: none;
  border-radius: 9999px;
  font-size: 1.5rem;
  padding: 1.2rem 1.6rem;
  color: white;

  &::placeholder {
    color: var(--zinc-100);
  }
`;

const WordCounter = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const SourceInput = styled(FactInput)``;

export const AddFact = () => {
  return (
    <StyledAddFact>
      <FactInput placeholder="Share a fact ..." />
      <WordCounter>251</WordCounter>
      <SourceInput placeholder="Valid source" />
      <select>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
      </select>
      <Button backgroundColor="gradient">Post</Button>
    </StyledAddFact>
  );
};
