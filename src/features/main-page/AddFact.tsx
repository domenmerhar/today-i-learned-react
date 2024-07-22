import styled from "styled-components";
import { Button } from "../../Util/Button";
import { useForm } from "react-hook-form";

const StyledAddFact = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;

  background-color: var(--zinc-600);
  border-radius: 16px;
  padding: 1rem 1.5rem;

  grid-column: 1 / -1;

  & > :nth-child(1) {
    flex: 1;
  }
`;

const FactInput = styled.input`
  background-color: var(--zinc-500);
  border: none;
  border-radius: 9999px;
  font-size: 1.6rem;
  padding: 1.3rem 1.6rem;
  color: var(--zinc-100);

  &::placeholder {
    color: var(--zinc-100);
  }
`;

const WordCounter = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
`;

const Select = styled.select`
  color: white;
  background-color: var(--zinc-500);

  border-radius: 9999px;
  border: none;

  padding: 1.3rem 1.6rem;
  font-size: 1.6rem;
  color: var(--zinc-100);
`;

const SourceInput = styled(FactInput)``;

export const AddFact = () => {
  const { register, handleSubmit, getValues } = useForm();

  return (
    <StyledAddFact onSubmit={handleSubmit(() => console.log(getValues()))}>
      <FactInput
        maxLength={255}
        placeholder="Share a fact ..."
        {...register("fact")}
      />
      <WordCounter>255</WordCounter>
      <SourceInput placeholder="Valid source" {...register("source")} />
      <Select {...register("category")}>
        <option value="">Choose category</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="finance">Finance</option>
        <option value="societey">Society</option>
        <option value="enterainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="history">History</option>
        <option value="news">News</option>
      </Select>
      <Button backgroundColor="gradient">Post</Button>
    </StyledAddFact>
  );
};
