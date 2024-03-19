import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';
import { Button, InputField, KakaoLoginButton, Spacing, Text } from '../../../components';
import { FormProvider, RegisterOptions, useForm } from 'react-hook-form';
import mainLogo from '../../../assets/images/mainlogo.png';
import { PasswordInput } from './PasswordInput';
import { ID_LENGTH, PASSWORD_LENGTH, PHONE_LENGTH, REAL_NAME_LENGTH } from '../../../constants';
import { ReactComponent as MailIcon } from '../../../assets/icons/mail.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/settings.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as XCircleIcon } from '../../../assets/icons/x-circle.svg';
import { ReactComponent as CheckCircleIcon } from '../../../assets/icons/check-circle.svg';
import { SubPage } from '../types';

type ISignUpFormValues = {
  phone: string;
  realName: string;
  loginId: string;
  password: string;
};

type IFormValidation = Record<keyof ISignUpFormValues, RegisterOptions>;

type BasicInfoProps = {
  showSubPage: (value: SubPage) => void;
};

export function BasicInfo({ showSubPage }: BasicInfoProps) {
  const formMethods = useForm<ISignUpFormValues>({
    mode: 'onChange',
    defaultValues: {
      phone: '',
      realName: '',
      loginId: '',
      password: '',
    },
  });
  const {
    formState: { errors },
  } = formMethods;

  const hasPhoneMaxLengthError = errors.phone?.type === 'maxLength';
  const hasPhonePatternError = errors.phone?.type === 'pattern';
  const hasRealNameMaxLengthError = errors.realName?.type === 'maxLength';
  const hasLoginIdMaxLengthError = errors.loginId?.type === 'maxLength';
  const hasLoginIdPatternError = errors.loginId?.type === 'pattern';
  const hasPasswordMaxLengthError = errors.password?.type === 'maxLength';
  const hasPasswordPatternError = errors.password?.type === 'pattern';
  const hasPasswordMinLengthError = errors.password?.type === 'minLength';

  const isButtonDisabled = Object.keys(errors).length !== 0;

  const [phone, setPhone] = useState<string>('');
  const [realName, setRealName] = useState<string>('');
  const [loginId, setLoginId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
    password: {
      required: true,
      minLength: 7,
      maxLength: 20,
      pattern: /^[a-z0-9]+$/,
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

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length > PASSWORD_LENGTH.MAX) {
      return;
    }

    setPassword(value);
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

  const showPasswordValidationIcon = () => {
    if (hasPasswordMinLengthError) {
      return <XCircleIcon stroke={colors.red500} />;
    }

    if (password && !hasPasswordMaxLengthError) {
      if (hasPasswordPatternError) {
        return <XCircleIcon stroke={colors.red500} />;
      }

      return <CheckCircleIcon stroke={colors.grey500} />;
    }

    return <></>;
  };

  const handleSignUpButtonClick = (data: ISignUpFormValues) => {
    // eslint-disable-next-line no-console
    console.log('data', data);
    showSubPage('birthDate');
  };

  return (
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
            validation={formValidation.password}
            value={password}
            onChange={handlePasswordChange}
            rightIcon={showPasswordValidationIcon()}
          />
          <Spacing height={20} />
          <Button type='button' disabled={isButtonDisabled} onClick={formMethods.handleSubmit(handleSignUpButtonClick)}>
            가입
          </Button>
        </Form>
      </FormProvider>
      <Spacing height={57} />
    </SignUpBox>
  );
}

const Form = styled.form``;

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
  height: 80px;
`;
