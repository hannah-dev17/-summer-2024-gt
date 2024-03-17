import React from 'react';
import { DefaultLayout } from '../../layout';
import styled from 'styled-components';
import homeMockUp from '../../assets/images/home-mockup.png';
import mainLogo from '../../assets/images/mainlogo.png';
import { AppDownloadBadges, Button, InputField, KakaoLoginButton, Spacing, Text } from '../../components';
import { colors } from '../../styles';
import { FormProvider, useForm } from 'react-hook-form';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { PasswordInput } from './components';

export function SignUp() {
  const formMethods = useForm();

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
                  type='text'
                  label='phone'
                  leftIconComponent={<MailIcon stroke={colors.grey500} />}
                  placeholder='전화번호, 사용자 이름 또는 이메일'
                  validation={{}}
                  onChange={() => {
                    // eslint-disable-next-line no-console
                    console.log('change');
                  }}
                  value={''}
                />
                <Spacing height={10} />
                <InputField
                  type='text'
                  label='realName'
                  leftIconComponent={<UserIcon stroke={colors.grey500} />}
                  placeholder='성명'
                  validation={{}}
                  onChange={() => {
                    // eslint-disable-next-line no-console
                    console.log('change');
                  }}
                  value={''}
                />
                <Spacing height={10} />
                <InputField
                  type='text'
                  label='loginId'
                  leftIconComponent={<SettingsIcon stroke={colors.grey500} />}
                  placeholder='사용자 이름'
                  validation={{}}
                  onChange={() => {
                    // eslint-disable-next-line no-console
                    console.log('change');
                  }}
                  value={''}
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
