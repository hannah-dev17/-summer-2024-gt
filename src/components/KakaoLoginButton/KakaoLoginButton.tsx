import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import { ReactComponent as KakaoIcon } from '../../assets/icons/kakao.svg';
import { Spacing } from '../Spacing';
import { KAKAO_AUTH_URL } from '../../constants';

export function KakaoLoginButton() {
  const handleKakaoLoginClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Button onClick={handleKakaoLoginClick}>
      <KakaoIcon />
      <Spacing width={1} />
      카카오 로그인
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 44px;
  background-color: ${colors.yellow500};
  border-radius: 30px;
  outline: 0;
  border: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
`;
