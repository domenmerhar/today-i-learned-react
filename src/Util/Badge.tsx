import React from "react";
import styled from "styled-components";

type BadgeType =
  | "technology"
  | "science"
  | "finance"
  | "society"
  | "entertainment"
  | "health"
  | "history"
  | "news";

interface BadgeProps {
  type: BadgeType;
}

interface StyledBadgeProps {
  $type: BadgeType;
}

const StyledBadge = styled.button<StyledBadgeProps>`
  border: none;
  padding: 0.5rem 1.1rem;
  background: ${(props) => {
    switch (props.$type) {
      case "technology":
        return "var(--blue)";
      case "science":
        return "var(--green)";
      case "finance":
        return "var(--red)";
      case "society":
        return "var(--yellow)";
      case "entertainment":
        return "var(--pink)";
      case "health":
        return "var(--teal)";
      case "history":
        return "var(--orange)";
      case "news":
        return "var(--purple)";
    }
  }};

  border-radius: 99999px;

  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transition: all 200ms;
`;

export const Badge: React.FC<BadgeProps> = ({ type }) => {
  return <StyledBadge $type={type}>{type}</StyledBadge>;
};
