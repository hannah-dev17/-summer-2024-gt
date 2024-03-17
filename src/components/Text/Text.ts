import styled from 'styled-components';

export const Text = styled.p<{ fontWeight: number; fontSize: number; lineHeight: number; color: string }>`
  font-weight: ${props => `${props.fontWeight}`};
  font-size: ${props => `${props.fontSize}px`};
  line-height: ${props => `${props.lineHeight}px`};
  text-align: center;
  color: ${props => `${props.color}`};
  margin: 0;
`;
