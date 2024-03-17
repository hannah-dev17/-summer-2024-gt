import styled from 'styled-components';

export const Spacing = styled.div<{ width?: number; height?: number }>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`;
