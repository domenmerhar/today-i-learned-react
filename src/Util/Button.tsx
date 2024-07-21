import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
  $backgroudColor:
    | "blue"
    | "green"
    | "red"
    | "yellow"
    | "pink"
    | "teal"
    | "orange"
    | "purple"
    | "gradient";
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  padding: 1rem 1.75rem;
  background: ${(props) => {
    switch (props.$backgroudColor) {
      case "blue":
        return "var(--blue)";
      case "green":
        return "var(--green)";
      case "red":
        return "var(--red)";
      case "yellow":
        return "var(--yellow)";
      case "pink":
        return "var(--pink)";
      case "teal":
        return "var(--teal)";
      case "orange":
        return "var(--orange)";
      case "purple":
        return "var(--purple)";
      case "gradient":
        return "linear-gradient(135deg, var(--blue), var(--purple), var(--red), var(--yellow))";
    }
  }};

  border-radius: 99999px;

  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 1px;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  cursor: pointer;

  transition: all 200ms;
  &:hover {
    transform: scale(1.1) rotate(-2deg);
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton $backgroudColor="gradient" {...props}>
      {children}
    </StyledButton>
  );
};
