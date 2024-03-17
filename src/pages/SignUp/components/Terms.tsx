import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';
import { Button, Spacing, Text } from '../../../components';
import CheckIcon from '../../../assets/icons/check.svg';

export function Terms() {
  const handleNextButtonClick = () => {
    // eslint-disable-next-line no-console
    console.log('hello');
  };

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
          <Checkbox type='checkbox' />
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
          <Checkbox type='checkbox' />
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
          <Checkbox type='checkbox' />
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
          <Checkbox type='checkbox' />
        </Label>
      </TermWrapper>
      <Spacing height={34} />
      <Button type='button' disabled={false} onClick={handleNextButtonClick}>
        다음
      </Button>
      <Spacing height={10} />
      <Text color={colors.blue500} fontWeight={600} fontSize={16} lineHeight={24}>
        돌아가기
      </Text>
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
