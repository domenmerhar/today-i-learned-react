import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import styled from "styled-components";

const StyledIcon = styled.div`
  background: linear-gradient(135deg, var(--red), var(--purple));
  min-width: 6.4rem;
  min-height: 6.4rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = () => {
  return (
    <StyledIcon>
      <HiChatBubbleBottomCenterText size={48} />
    </StyledIcon>
  );
};
