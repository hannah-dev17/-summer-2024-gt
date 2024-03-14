import React, { useState } from 'react';
import styled from 'styled-components';
import homeMockUp from '../../assets/images/home-mockup.png';
import mainLogo from '../../assets/images/mainlogo.png';
import googlePlayStoreBadge from '../../assets/images/google-play-badge.png';
import appStoreBadge from '../../assets/images/app-store-badge.png';
import { DefaultLayout } from '../../layout';
import { colors } from '../../styles';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as KakaoIcon } from '../../assets/icons/kakao.svg';
import { FormProvider, RegisterOptions, useForm } from 'react-hook-form';
import { ID_LENGTH, PASSWORD_LENGTH } from '../../constants';
import { InputField, Spacing } from '../../components';
import { PasswordInput } from './components';

type ILoginFormValues = {
  id: string;
  password: string;
};

type IFormValidation = Record<keyof ILoginFormValues, RegisterOptions>;

export function Login() {
  const formMethods = useForm<ILoginFormValues>({ defaultValues: { id: '', password: '' }, mode: 'onChange' });

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > ID_LENGTH.MAX) {
      return;
    }

    setId(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > PASSWORD_LENGTH.MAX) {
      return;
    }

    setPassword(value);
  };

  const formValidation: IFormValidation = {
    id: {
      required: true,
      minLength: ID_LENGTH.MIN,
      maxLength: ID_LENGTH.MAX,
    },
    password: {
      required: true,
      minLength: PASSWORD_LENGTH.MIN,
      maxLength: PASSWORD_LENGTH.MAX,
    },
  };

  const isButtonDisabled =
    id.length < ID_LENGTH.MIN ||
    id.length > ID_LENGTH.MAX ||
    password.length < PASSWORD_LENGTH.MIN ||
    password.length > PASSWORD_LENGTH.MAX;

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
            <FormProvider {...formMethods}>
              <Form>
                <InputField<ILoginFormValues>
                  type='text'
                  label='id'
                  leftIconComponent={<MailIcon stroke={colors.grey500} />}
                  placeholder='전화번호, 사용자 이름 또는 이메일'
                  validation={formValidation.id}
                  onChange={handleIdChange}
                  value={id}
                />
                <Spacing height={10} />
                <PasswordInput validation={formValidation.password} value={password} onChange={handlePasswordChange} />
                <Spacing height={20} />
                <Button type='button' disabled={isButtonDisabled}>
                  로그인
                </Button>
              </Form>
            </FormProvider>
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

const Form = styled.form``;

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

const Button = styled.button<{ disabled: boolean }>`
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
