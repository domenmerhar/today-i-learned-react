import styled from "styled-components";

interface ButtonProps {
  //color: string;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 1.5rem 2.25rem;
  background-color: var(--blue);
  border-radius: 99999px;

  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 1px;

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  cursor: pointer;

  transition: all 200ms;

  &:hover {
    transform: scale(1.1) rotate(-2deg);
  }
`;

export const Button = () => {
  return <StyledButton>Technology</StyledButton>;
};
