import React from 'react';
import styled from 'styled-components';
import homeMockUp from '../../assets/images/home-mockup.png';
import mainLogo from '../../assets/images/mainlogo.png';
import googlePlayStoreBadge from '../../assets/images/google-play-badge.png';
import appStoreBadge from '../../assets/images/app-store-badge.png';
import { DefaultLayout } from '../../layout';
import { colors } from '../../styles';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as KakaoIcon } from '../../assets/icons/kakao.svg';

type InputFieldProps = {
  leftIconComponent: React.ReactNode;
  placeholder: string;
  rightText?: string;
};

function InputField({ leftIconComponent, placeholder, rightText }: InputFieldProps) {
  return (
    <InputWrapper>
      <Spacing width={20} />
      {leftIconComponent}
      <Spacing width={8} />
      <Input placeholder={placeholder} />
      {rightText && <p>{rightText}</p>}
      <Spacing width={12} />
    </InputWrapper>
  );
}

export function Login() {
  return (
    <DefaultLayout>
      <Wrapper>
        <MockUpImage src={homeMockUp} alt='mockup' />
        <Spacing width={72} />
        <RightSideWrapper>
          <LoginBox>
            <Spacing height={70} />
            <LogoImage src={mainLogo} alt='logo' />
            <Spacing height={57} />
            <InputField
              leftIconComponent={<MailIcon stroke={colors.grey500} />}
              placeholder='전화번호, 사용자 이름 또는 이메일'
            />
            <Spacing height={10} />
            <InputField leftIconComponent={<LockIcon stroke={colors.grey500} />} placeholder='비밀번호' />
            <Spacing height={20} />
            <Button type='button'>로그인</Button>
            <Spacing height={10} />
            <Text fontWeight={400} fontSize={16} lineHeight={24} color={colors.grey500}>
              or
            </Text>
            <Spacing height={10} />
            <KakaoLoginButton>
              <KakaoIcon />
              <Spacing width={1} />
              카카오 로그인
            </KakaoLoginButton>
            <Spacing height={30} />
            <Text fontWeight={400} fontSize={14} lineHeight={20} color={colors.grey500}>
              비밀번호를 잊으셨나요?
            </Text>
            <Spacing height={40} />
          </LoginBox>
          <Spacing height={10} />
          <SignUpGuideBox>
            <Text fontWeight={600} fontSize={16} lineHeight={24} color={colors.grey500}>
              계정이 없으신가요?
            </Text>
            <Spacing width={5} />
            <Text fontWeight={600} fontSize={16} lineHeight={24} color={colors.blue500}>
              가입하기
            </Text>
          </SignUpGuideBox>
          <Spacing height={20} />
          <Text fontWeight={500} fontSize={16} lineHeight={24} color={colors.grey500}>
            앱을 다운로드하세요.
          </Text>
          <Spacing height={10} />
          <BadgeWrapper>
            <BadgeImage src={googlePlayStoreBadge} alt='googlePlayStore' width={135} />
            <Spacing width={10} />
            <BadgeImage src={appStoreBadge} alt='appStore' width={120} />
          </BadgeWrapper>
        </RightSideWrapper>
      </Wrapper>
    </DefaultLayout>
  );
}

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BadgeImage = styled.img<{ width: number }>`
  width: ${props => `${props.width}px`};
  height: 40px;
`;

const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpGuideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 416px;
  height: 86px;
  background: ${colors.white};
  border: 1px solid ${colors.grey200};
`;

const Text = styled.p<{ fontWeight: number; fontSize: number; lineHeight: number; color: string }>`
  font-weight: ${props => `${props.fontWeight}`};
  font-size: ${props => `${props.fontSize}px`};
  line-height: ${props => `${props.lineHeight}px`};
  text-align: center;
  color: ${props => `${props.color}`};
  margin: 0;
`;

const Button = styled.button`
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: ${colors.blue200};
  outline: 0;
  border: none;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  color: ${colors.white};
  cursor: pointer;
`;

const KakaoLoginButton = styled.button`
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

const Wrapper = styled.div`
  display: flex;
  margin-left: 216px;
  margin-right: 216px;
  margin-top: 96px;
  margin-bottom: 148px;
`;

const MockUpImage = styled.img`
  width: 520px;
  height: 780px;
`;

const LogoImage = styled.img`
  width: 217px;
  height: 80;
`;

const Spacing = styled.div<{ width?: number; height?: number }>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`;

const InputWrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.grey200};
  border-radius: 30px;
  width: 320px;
  height: 44px;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: 0;
  width: 100%;
`;

const LoginBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 416px;
  height: 559px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey200};
  align-items: center;
`;
