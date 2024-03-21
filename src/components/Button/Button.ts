import styled from 'styled-components';
import { colors } from '../../styles';

export const Button = styled.button<{ disabled: boolean }>`
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: ${props => (props.disabled ? colors.blue200 : colors.blue500)};
  outline: 0;
  border: none;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  color: ${colors.white};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
