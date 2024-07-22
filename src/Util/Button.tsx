import React from "react";
import styled from "styled-components";
import { BackgroundColorType } from "../types";

interface StyledButtonProps {
  $backgroudColor: BackgroundColorType;
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  backgroundColor: BackgroundColorType;
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  padding: 1.5rem 2.25rem;
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

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  return (
    <StyledButton $backgroudColor={backgroundColor} {...props}>
      {children}
    </StyledButton>
  );
};
