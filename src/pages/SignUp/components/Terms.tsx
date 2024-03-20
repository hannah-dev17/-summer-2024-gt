import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';
import { Button, Spacing, Text } from '../../../components';
import CheckIcon from '../../../assets/icons/check.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  isAllAgreedState,
  isDataPolicyAgreedState,
  isLocationAgreedState,
  isTermAgreedState,
  signUpState,
} from '../../../recoil';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginPath } from '../../../constants';
import { SubPage } from '../types';
import { LinkText } from './LinkText';
import { useKakaoSignUp, useSignUp } from '../../../quries';

type TermsProps = {
  showSubPage: (value: SubPage) => void;
};

export function Terms({ showSubPage }: TermsProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const signUpQuery = useSignUp();
  const kakaoSignUpQuery = useKakaoSignUp();
  const signUpInfo = useRecoilValue(signUpState);

  const [isAllAgreed, setIsAllAgreed] = useRecoilState(isAllAgreedState);
  const [isTermAgreed, setIsTermAgreed] = useRecoilState(isTermAgreedState);
  const [isDataPolicyAgreed, setIsDataPolicyAgreed] = useRecoilState(isDataPolicyAgreedState);
  const [isLocationAgreed, setIsLocationAgreed] = useRecoilState(isLocationAgreedState);

  const isNextButtonDisabled = !isAllAgreed;

  const signUp = () => {
    signUpQuery.mutate(signUpInfo, {
      onSuccess: () => {
        navigate(loginPath);
      },
      onError: error => {
        // eslint-disable-next-line no-console
        console.error(error);
      },
    });
  };

  const signUpByKakao = () => {
    if (!location.state?.code) {
      return;
    }

    kakaoSignUpQuery.mutate(
      { ...signUpInfo, code: location.state.code },
      {
        onSuccess: () => {
          navigate(loginPath);
        },
        onError: error => {
          // eslint-disable-next-line no-console
          console.error(error);
        },
      },
    );
  };

  const handleNextButtonClick = () => {
    if (location.state?.signInType === 'kakao') {
      signUpByKakao();
    } else {
      signUp();
    }
  };

  const handleAllCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setIsAllAgreed(true);
      setIsTermAgreed(true);
      setIsDataPolicyAgreed(true);
      setIsLocationAgreed(true);
      return;
    }

    if (!event.target.checked) {
      setIsAllAgreed(false);
      setIsTermAgreed(false);
      setIsDataPolicyAgreed(false);
      setIsLocationAgreed(false);
    }
  };

  useEffect(() => {
    if (isTermAgreed && isDataPolicyAgreed && isLocationAgreed) {
      setIsAllAgreed(true);
    } else {
      setIsAllAgreed(false);
    }
  }, [isTermAgreed, isDataPolicyAgreed, isLocationAgreed, setIsAllAgreed]);

  return (
    <Box>
      <Spacing height={60} />
      <Text color={colors.grey900} fontSize={18} fontWeight={600} lineHeight={28}>
        이용 약관에 동의
      </Text>
      <Spacing height={15} />
      <TextWrapper>
        <Text color={colors.grey500} fontSize={14} fontWeight={400} lineHeight={22}>
          Tnovel은 회원님의 개인정보를 안전하게 보호합니다. 새 계정을 만드려면 모든 약관에 동의하세요.
        </Text>
      </TextWrapper>
      <Spacing height={19} />
      <TermWrapper>
        <Text color={colors.grey900} fontWeight={500} fontSize={16} lineHeight={24}>
          이용약관 3개에 모두 동의
        </Text>
        <Label>
          <Checkbox type='checkbox' checked={isAllAgreed} onChange={handleAllCheckboxChange} />
        </Label>
      </TermWrapper>
      <Divider />
      <Spacing height={6} />
      <TermWrapper>
        <LeftSide>
          <Text color={colors.grey900} fontWeight={500} fontSize={16} lineHeight={24}>
            이용약관 (필수)
          </Text>
          <Text color={colors.blue500} fontWeight={500} fontSize={16} lineHeight={24}>
            더 알아보기
          </Text>
        </LeftSide>
        <Label>
          <Checkbox type='checkbox' checked={isTermAgreed} onChange={() => setIsTermAgreed(prev => !prev)} />
        </Label>
      </TermWrapper>
      <Spacing height={10} />
      <TermWrapper>
        <LeftSide>
          <Text color={colors.grey900} fontWeight={500} fontSize={16} lineHeight={24}>
            데이터 정책 (필수)
          </Text>
          <Text color={colors.blue500} fontWeight={500} fontSize={16} lineHeight={24}>
            더 알아보기
          </Text>
        </LeftSide>
        <Label>
          <Checkbox
            type='checkbox'
            checked={isDataPolicyAgreed}
            onChange={() => setIsDataPolicyAgreed(prev => !prev)}
          />
        </Label>
      </TermWrapper>
      <Spacing height={10} />
      <TermWrapper>
        <LeftSide>
          <Text color={colors.grey900} fontWeight={500} fontSize={16} lineHeight={24}>
            위치 기반 기능 (필수)
          </Text>
          <Text color={colors.blue500} fontWeight={500} fontSize={16} lineHeight={24}>
            더 알아보기
          </Text>
        </LeftSide>
        <Label>
          <Checkbox type='checkbox' checked={isLocationAgreed} onChange={() => setIsLocationAgreed(prev => !prev)} />
        </Label>
      </TermWrapper>
      <Spacing height={34} />
      <Button type='button' disabled={isNextButtonDisabled} onClick={handleNextButtonClick}>
        다음
      </Button>
      <Spacing height={10} />
      <LinkText onClick={() => showSubPage('birthDate')}>
        <Text color={colors.blue500} fontWeight={600} fontSize={16} lineHeight={24}>
          돌아가기
        </Text>
      </LinkText>
    </Box>
  );
}

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Divider = styled.div`
  width: 356px;
  height: 1px;
  background-color: ${colors.grey100};
`;

const TextWrapper = styled.div`
  width: 297px;
  height: 44px;
`;

const Box = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 416px;
  height: 544px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey200};
  align-items: center;
`;

const TermWrapper = styled.div`
  display: flex;
  width: 356px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: ${colors.grey50};
  border: 1px solid ${colors.grey100};
  border-radius: 6px;
  cursor: pointer;

  :checked {
    border-color: ${colors.blue500};
    background-color: ${colors.blue50};
    background-image: url(${CheckIcon});
    background-size: 80% 80%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;
