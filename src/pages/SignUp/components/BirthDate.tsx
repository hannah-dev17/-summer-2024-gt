import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';
import { Button, Spacing, Text } from '../../../components';
import cakeImage from '../../../assets/images/cake.png';
import { InputDropdown } from './InputDropdown';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { birthDateState, dayState, monthState, yearState } from '../../../recoil';
import { SubPage } from '../types';
import { LinkText } from './LinkText';

const months = Array.from({ length: 12 }, (_, index) => ({ value: index + 1, text: `${index + 1}월` }));
const days = Array.from({ length: 31 }, (_, index) => ({ value: index + 1, text: `${index + 1}일` }));

const startYear = 1919;
const endYear = 2021;

const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => ({
  value: startYear + index,
  text: `${startYear + index}년`,
}));

type BirthDateProps = {
  showSubPage: (value: SubPage) => void;
};

export function BirthDate({ showSubPage }: BirthDateProps) {
  const yearValue = useRecoilValue(yearState);
  const monthValue = useRecoilValue(monthState);
  const dayValue = useRecoilValue(dayState);

  const setBirthDate = useSetRecoilState(birthDateState);

  const [month, setMonth] = useState<{ value: number; text: string }>(
    monthValue ? { value: Number(monthValue), text: `${Number(monthValue)}월` } : months[0],
  );

  const [day, setDay] = useState<{ value: number; text: string }>(
    dayValue ? { value: Number(dayValue), text: `${Number(dayValue)}일` } : days[0],
  );

  const [year, setYear] = useState<{ value: number; text: string }>(
    yearValue ? { value: Number(yearValue), text: `${Number(yearValue)}년` } : years[0],
  );

  const handleMonthChange = ({ value, text }: { value: number; text: string }) => {
    setMonth({ value, text });
  };

  const handleDayChange = ({ value, text }: { value: number; text: string }) => {
    setDay({ value, text });
  };

  const handleYearChange = ({ value, text }: { value: number; text: string }) => {
    setYear({ value, text });
  };

  const handleNextButtonClick = () => {
    setBirthDate(`${year.value}-${month.value}-${day.value}`);
    showSubPage('terms');
  };

  const isButtonDisabled = year.value > 2015;

  return (
    <Box>
      <Spacing height={60} />
      <LogoImage src={cakeImage} alt='cake' />
      <Spacing height={20} />
      <Text color={colors.grey900} fontWeight={600} fontSize={18} lineHeight={28}>
        생일추가
      </Text>
      <Spacing height={16} />
      <Text color={colors.grey500} fontWeight={500} fontSize={14} lineHeight={20}>
        공개 프로필에 포함되지 않습니다.
      </Text>
      <Spacing height={5} />
      <Text color={colors.blue500} fontWeight={500} fontSize={14} lineHeight={20}>
        왜 생일 정보를 입력해야 하나요?
      </Text>
      <Spacing height={30} />
      <DropdownWrapper>
        <InputDropdown valueArray={months} onChange={handleMonthChange} text={month.text} value={month.value} />
        <Spacing width={10} />
        <InputDropdown valueArray={days} onChange={handleDayChange} text={day.text} value={day.value} />
        <Spacing width={10} />
        <InputDropdown valueArray={years} onChange={handleYearChange} text={year.text} value={year.value} />
      </DropdownWrapper>
      <Spacing height={10} />
      <Text color={colors.grey500} fontWeight={400} fontSize={14} lineHeight={20}>
        태어난 날짜를 입력해야합니다
      </Text>
      <Spacing height={30} />
      <Button type='button' disabled={isButtonDisabled} onClick={handleNextButtonClick}>
        다음
      </Button>
      <Spacing height={10} />
      <LinkText onClick={() => showSubPage('basic')}>
        <Text color={colors.blue500} fontWeight={600} fontSize={16} lineHeight={24}>
          돌아가기
        </Text>
      </LinkText>
    </Box>
  );
}

const DropdownWrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 416px;
  height: 591px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey200};
  align-items: center;
`;

const LogoImage = styled.img`
  width: 238px;
  height: 170px;
`;
