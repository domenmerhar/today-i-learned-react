import React, { useState } from "react";
import styled from "styled-components";
import { useVote } from "../hooks/useVote";
import { ApiVoteType, CategoryType } from "../types";

interface VoteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: ApiVoteType;
  id: string;
  count: number;
  category: Omit<CategoryType, "all">;
}

const StyledVoteButton = styled.button<{ $active: boolean }>`
  border: none;
  color: white;
  background-color: var(
    ${(props) => (props.$active ? "--zinc-400" : "--zinc-500")}
  );

  min-width: 6.4rem;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 99999px;
  padding: 0.75rem 1.5rem;
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  gap: 4px;
  align-items: center;

  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: var(--zinc-400);
  }

  & > span:first-child {
    font-size: 1.6rem;
    transform: translateY(-2px);
  }
`;

export const VoteButton: React.FC<VoteButtonProps> = ({
  type,
  count,
  id,
  category,
  ...rest
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { mutate: mutateAdd } = useVote(id, type, true, category);
  const { mutate: mutateRemove } = useVote(id, type, false, category);

  const toggleClick = () =>
    setIsClicked((prev) => {
      if (prev) mutateRemove();
      else mutateAdd();

      return !prev;
    });

  count = isClicked ? count + 1 : count;

  return (
    <StyledVoteButton
      $active={isClicked}
      {...rest}
      onClick={(e) => {
        if (rest.onClick) {
          rest.onClick(e);
        }

        toggleClick();
      }}
    >
      {type === "likes" && (
        <>
          <span>👍</span>
          <span>{count}</span>
        </>
      )}

      {type === "mindblownVotes" && (
        <>
          <span>😲</span>
          <span>{count}</span>
        </>
      )}

      {type === "falseVotes" && (
        <>
          <span>⛔</span>
          <span>{count}</span>
        </>
      )}
    </StyledVoteButton>
  );
};
