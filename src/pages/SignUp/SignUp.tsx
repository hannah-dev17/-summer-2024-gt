import React, { useState } from 'react';
import { DefaultLayout } from '../../layout';
import styled from 'styled-components';
import homeMockUp from '../../assets/images/home-mockup.png';
import mainLogo from '../../assets/images/mainlogo.png';
import { AppDownloadBadges, Button, InputField, KakaoLoginButton, Spacing, Text } from '../../components';
import { colors } from '../../styles';
import { FormProvider, RegisterOptions, useForm } from 'react-hook-form';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as XCircleIcon } from '../../assets/icons/x-circle.svg';
import { ReactComponent as CheckCircleIcon } from '../../assets/icons/check-circle.svg';
import { PasswordInput } from './components';
import { ID_LENGTH, PHONE_LENGTH, REAL_NAME_LENGTH } from '../../constants';

type ISignUpFormValues = {
  phone: string;
  realName: string;
  loginId: string;
};

type IFormValidation = Record<keyof ISignUpFormValues, RegisterOptions>;

export function SignUp() {
  const formMethods = useForm<ISignUpFormValues>({ mode: 'onChange' });
  const {
    formState: { errors },
  } = formMethods;

  const hasPhoneMaxLengthError = errors.phone?.type === 'maxLength';
  const hasPhonePatternError = errors.phone?.type === 'pattern';
  const hasRealNameMaxLengthError = errors.realName?.type === 'maxLength';
  const hasLoginIdMaxLengthError = errors.loginId?.type === 'maxLength';
  const hasLoginIdPatternError = errors.loginId?.type === 'pattern';

  const [phone, setPhone] = useState<string>('');
  const [realName, setRealName] = useState<string>('');
  const [loginId, setLoginId] = useState<string>('');

  const formValidation: IFormValidation = {
    phone: {
      required: true,
      maxLength: 20,
      pattern: /^\d{3}-\d{3,4}-\d{4}$/,
    },
    realName: {
      required: true,
      maxLength: 20,
    },
    loginId: {
      required: true,
      maxLength: 20,
      pattern: /^[a-z0-9_.]+$/,
    },
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > PHONE_LENGTH.MAX) {
      return;
    }

    setPhone(value);
  };

  const handleRealNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > REAL_NAME_LENGTH.MAX) {
      return;
    }

    setRealName(value);
  };

  const handleLoginIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > ID_LENGTH.MAX) {
      return;
    }

    setLoginId(value);
  };

  const showPhoneValidationIcon = () => {
    if (phone && !hasPhoneMaxLengthError) {
      if (hasPhonePatternError) {
        return <XCircleIcon stroke={colors.red500} />;
      }

      return <CheckCircleIcon stroke={colors.grey500} />;
    }

    if (hasPhoneMaxLengthError) {
      return <XCircleIcon stroke={colors.red500} />;
    }

    return <></>;
  };

  const showRealNameValidationIcon = () => {
    if (realName && !hasRealNameMaxLengthError) {
      return <CheckCircleIcon stroke={colors.grey500} />;
    }

    return <></>;
  };

  const showLoginIdValidationIcon = () => {
    if (loginId && !hasLoginIdMaxLengthError) {
      if (hasLoginIdPatternError) {
        return <XCircleIcon stroke={colors.red500} />;
      }

      return <CheckCircleIcon stroke={colors.grey500} />;
    }

    return <></>;
  };

  return (
    <DefaultLayout>
      <Wrapper>
        <MockUpImage src={homeMockUp} alt='mockup' />
        <Spacing width={72} />
        <RightSideWrapper>
          <SignUpBox>
            <Spacing height={70} />
            <LogoImage src={mainLogo} alt='logo' />
            <Spacing height={10} />
            <Text color={colors.grey500} fontWeight={700} fontSize={16} lineHeight={24}>
              친구들과 함께 여행 이야기를 공유하고 보세요.
            </Text>
            <Spacing height={30} />
            <KakaoLoginButton />
            <Spacing height={10} />
            <Text fontWeight={400} fontSize={16} lineHeight={24} color={colors.grey500}>
              or
            </Text>
            <Spacing height={10} />
            <FormProvider {...formMethods}>
              <Form>
                <InputField
                  type='tel'
                  label='phone'
                  leftIconComponent={<MailIcon stroke={colors.grey500} />}
                  placeholder='전화번호, 사용자 이름 또는 이메일'
                  validation={formValidation.phone}
                  onChange={handlePhoneChange}
                  value={phone}
                  rightComponent={showPhoneValidationIcon()}
                />
                <Spacing height={10} />
                <InputField
                  type='text'
                  label='realName'
                  leftIconComponent={<UserIcon stroke={colors.grey500} />}
                  placeholder='성명'
                  validation={formValidation.realName}
                  onChange={handleRealNameChange}
                  value={realName}
                  rightComponent={showRealNameValidationIcon()}
                />
                <Spacing height={10} />
                <InputField
                  type='text'
                  label='loginId'
                  leftIconComponent={<SettingsIcon stroke={colors.grey500} />}
                  placeholder='사용자 이름'
                  validation={formValidation.loginId}
                  onChange={handleLoginIdChange}
                  value={loginId}
                  rightComponent={showLoginIdValidationIcon()}
                />
                <Spacing height={10} />
                <PasswordInput
                  validation={{}}
                  value={''}
                  onChange={() => {
                    // eslint-disable-next-line no-console
                    console.log('password');
                  }}
                />
                <Spacing height={20} />
                <Button
                  type='button'
                  disabled={false}
                  onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('submit');
                  }}
                >
                  가입
                </Button>
              </Form>
            </FormProvider>
            <Spacing height={57} />
          </SignUpBox>
          <Spacing height={10} />
          <SignUpGuideBox>
            <Text fontWeight={600} fontSize={16} lineHeight={24} color={colors.grey500}>
              계정이 있으신가요?
            </Text>
            <Spacing width={5} />
            <Text fontWeight={600} fontSize={16} lineHeight={24} color={colors.blue500}>
              로그인
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

const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 416px;
  height: 615px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey200};
  align-items: center;
`;

const LogoImage = styled.img`
  width: 217px;
  height: 80;
`;
