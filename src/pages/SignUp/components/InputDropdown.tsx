import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles';
import { Text } from '../../../components';
import { ReactComponent as CheckIcon } from '../../../assets/icons/check.svg';
import { ReactComponent as ChevronDownIcon } from '../../../assets/icons/chevron-down.svg';

type InputDropdownProps = {
  valueArray: {
    value: number;
    text: string;
  }[];
  onChange: ({ value, text }: { value: number; text: string }) => void;
  text: string;
  value: number;
};

export function InputDropdown({ valueArray, onChange, text }: InputDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdownClick = () => {
    setIsOpen(true);
  };

  const handleSelectItemClick = (value: number, text: string) => {
    setIsOpen(false);
    onChange({ value, text });
  };

  return (
    <DropdownWrapper>
      <Dropdown onClick={handleDropdownClick}>
        <Text color={colors.grey500} fontWeight={400} fontSize={16} lineHeight={24}>
          {text}
        </Text>
        <ChevronDownIcon />
      </Dropdown>
      {isOpen && (
        <Select>
          {valueArray.map(({ value, text }) => (
            <SelectItem key={value} onClick={() => handleSelectItemClick(value, text)}>
              <Text color='#101828' fontSize={16} fontWeight={500} lineHeight={24}>
                {text}
              </Text>
              <Icon>
                <CheckIcon />
              </Icon>
            </SelectItem>
          ))}
        </Select>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  width: 87px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid ${colors.grey100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  cursor: pointer;
`;

const Select = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 98px;
  max-height: 533px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey100};
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 8px;
  top: -200px;
  overflow: scroll;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  opacity: 0;
`;

const SelectItem = styled.li`
  flex-shrink: 0;
  box-sizing: border-box;
  width: 98px;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background-color: ${colors.grey50};
  }

  &:hover ${Icon} {
    opacity: 1;
  }
`;
