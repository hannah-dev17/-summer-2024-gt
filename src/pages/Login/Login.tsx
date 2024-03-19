import React, { useState } from 'react';
import styled from 'styled-components';
import homeMockUp from '../../assets/images/home-mockup.png';
import mainLogo from '../../assets/images/mainlogo.png';
import { DefaultLayout } from '../../layout';
import { colors } from '../../styles';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { FormProvider, RegisterOptions, useForm } from 'react-hook-form';
import { ID_LENGTH, PASSWORD_LENGTH, boardPath } from '../../constants';
import { InputField, Spacing, Text, Button, KakaoLoginButton, AppDownloadBadges } from '../../components';
import { PasswordInput } from './components';
import { useSetRecoilState } from 'recoil';
import { authState } from '../../recoil';
import { JWT_KEY } from '../../config/constant';
import { ErrorResponse } from '../../types';
import axios from 'axios';
import { useSignIn } from '../../quries';
import { useNavigate } from 'react-router-dom';

type ILoginFormValues = {
  id: string;
  password: string;
};

type IFormValidation = Record<keyof ILoginFormValues, RegisterOptions>;

export function Login() {
  const navigate = useNavigate();
  const signInQuery = useSignIn();
  const formMethods = useForm<ILoginFormValues>({ defaultValues: { id: '', password: '' }, mode: 'onChange' });

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const setAuthState = useSetRecoilState(authState);

  const signIn = async (loginId: string, password: string) => {
    signInQuery.mutate(
      { loginId, password },
      {
        onSuccess: response => {
          setAuthState(response.result);
          localStorage.setItem(JWT_KEY, response.result.jwt);

          if (errorMessage) {
            setErrorMessage('');
          }

          navigate(boardPath);
        },
        onError: error => {
          if (axios.isAxiosError<ErrorResponse>(error) && error.response) {
            const { statusCode, message } = error.response.data;

            if (statusCode === 404) {
              setErrorMessage(message[0]);
            }
          }

          // eslint-disable-next-line no-console
          console.log('error', error);
        },
      },
    );
  };

  const onSubmit = (data: ILoginFormValues) => {
    signIn(data.id, data.password);
  };

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
                <Button type='button' disabled={isButtonDisabled} onClick={formMethods.handleSubmit(onSubmit)}>
                  로그인
                </Button>
              </Form>
            </FormProvider>
            <Spacing height={10} />
            <Text fontWeight={400} fontSize={16} lineHeight={24} color={colors.grey500}>
              or
            </Text>
            <Spacing height={10} />
            <KakaoLoginButton />
            <Spacing height={30} />
            <Text fontWeight={600} fontSize={14} lineHeight={20} color={colors.red500}>
              {errorMessage}
            </Text>
            <Spacing height={10} />
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
          <AppDownloadBadges />
        </RightSideWrapper>
      </Wrapper>
    </DefaultLayout>
  );
}

const Form = styled.form``;

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
