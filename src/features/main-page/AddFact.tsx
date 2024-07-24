import styled from "styled-components";
import { Button } from "../../Util/Button";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { useAddFact } from "../../hooks/useAddFact";
import { AddFactInterface } from "../../types";

const StyledAddFact = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

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

  @media (max-width: 57em) {
    padding: 1rem 1.3rem;
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

  @media (max-width: 57em) {
    padding: 1rem 1.3rem;
  }
`;

const SourceInput = styled(FactInput)``;

export const AddFact = () => {
  const {
    register,
    handleSubmit: handleSubmitHook,
    getValues,
    reset,
  } = useForm();
  const [charactersRemaining, setCharactersRemaining] = useState<number>(255);

  const { mutate } = useAddFact();

  const handleSubmit = handleSubmitHook(() => {
    console.log(getValues("category"));
    if (!getValues("category")) return toast.error("Please select a category");

    mutate(getValues() as AddFactInterface);
    reset();
    setCharactersRemaining(255);
  });

  return (
    <StyledAddFact onSubmit={handleSubmit}>
      <FactInput
        maxLength={255}
        required
        placeholder="Share a fact ..."
        {...register("description")}
        onChange={(e) => setCharactersRemaining(255 - e.target.value?.length)}
      />
      <WordCounter>{charactersRemaining}</WordCounter>
      <SourceInput
        required
        placeholder="Valid source"
        {...register("source")}
      />
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
