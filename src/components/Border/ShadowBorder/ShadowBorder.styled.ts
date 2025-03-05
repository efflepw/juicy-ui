import styled, { css, keyframes } from "styled-components";

export const StyledDiv = styled.div<{
  $keyframesString: string;
  $borderRadius: number;
  $showOnHover?: boolean;
}>`
  border-radius: ${({ $borderRadius }) => $borderRadius}px;

  ${({ $keyframesString, $showOnHover }) => {
    const pulseAnimation = keyframes`${$keyframesString}`;

    if ($showOnHover) {
      return css`
        box-shadow: none;
        transition: box-shadow 0.3s ease;

        &:hover {
          animation: ${pulseAnimation} 2s ease-in infinite;
        }
      `;
    } else {
      return css`
        animation: ${pulseAnimation} 2s ease-in infinite;
      `;
    }
  }}
`;
