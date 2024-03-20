import React, { useState } from 'react';
import { DefaultLayout } from '../../layout';
import styled from 'styled-components';
import homeMockUp from '../../assets/images/home-mockup.png';
import { AppDownloadBadges, Spacing, Text } from '../../components';
import { colors } from '../../styles';
import { BasicInfo, BirthDate, LinkText, Terms } from './components';
import { SubPage } from './types';
import { useNavigate } from 'react-router-dom';
import { loginPath } from '../../constants';

export function SignUp() {
  const navigate = useNavigate();
  const [subPage, setSubPage] = useState<SubPage>('basic');

  const showSubPage = (value: SubPage) => {
    setSubPage(value);
  };

  const handleLoginClick = () => {
    navigate(loginPath);
  };

  return (
    <DefaultLayout>
      <Wrapper>
        <MockUpImage src={homeMockUp} alt='mockup' />
        <Spacing width={72} />
        <RightSideWrapper>
          {subPage === 'basic' && <BasicInfo showSubPage={showSubPage} />}
          {subPage === 'birthDate' && <BirthDate showSubPage={showSubPage} />}
          {subPage === 'terms' && <Terms showSubPage={showSubPage} />}
          <Spacing height={10} />
          <SignUpGuideBox>
            <Text fontWeight={600} fontSize={16} lineHeight={24} color={colors.grey500}>
              계정이 있으신가요?
            </Text>
            <Spacing width={5} />
            <LinkText onClick={handleLoginClick}>
              <Text fontWeight={600} fontSize={16} lineHeight={24} color={colors.blue500}>
                로그인
              </Text>
            </LinkText>
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
