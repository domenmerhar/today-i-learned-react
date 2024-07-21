import React, { useState } from "react";
import styled from "styled-components";

interface VoteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: "like" | "mindblown" | "disagree";
}

const StyledVoteButton = styled.button<{ $active: boolean }>`
  border: none;
  color: white;
  background-color: var(
    ${(props) => (props.$active ? "--zinc-400" : "--zinc-500")}
  );

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

export const VoteButton: React.FC<VoteButtonProps> = ({ type, ...rest }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const toggleClick = () => setIsClicked((prev) => !prev);

  return (
    <StyledVoteButton $active={isClicked} onClick={toggleClick} {...rest}>
      {type === "like" && (
        <>
          <span>👍</span>
          <span>22</span>
        </>
      )}

      {type === "mindblown" && (
        <>
          <span>😲</span>
          <span>22</span>
        </>
      )}

      {type === "disagree" && (
        <>
          <span>⛔</span>
          <span>22</span>
        </>
      )}
    </StyledVoteButton>
  );
};
