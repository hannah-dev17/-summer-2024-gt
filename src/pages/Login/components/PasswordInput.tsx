import React, { useState } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { InputField } from '../../../components';
import { ReactComponent as LockIcon } from '../../../assets/icons/lock.svg';
import { colors } from '../../../styles';
import styled from 'styled-components';

type PasswordInputProps = {
  validation: RegisterOptions;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onKeyUp: (event: React.KeyboardEvent<HTMLElement>) => void;
};

export function PasswordInput({ validation, onChange, value, onKeyUp }: PasswordInputProps) {
  const [passwordInputType, setPasswordInputType] = useState<'password' | 'text'>('password');

  const handleRightLabelClick = () => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
    } else {
      setPasswordInputType('password');
    }
  };

  return (
    <InputField
      type={passwordInputType}
      label='password'
      leftIconComponent={<LockIcon stroke={colors.grey500} />}
      placeholder='비밀번호'
      validation={validation}
      onChange={onChange}
      value={value}
      rightComponent={
        value.length !== 0 && (
          <RightLabel onClick={handleRightLabelClick}>
            {passwordInputType === 'password' ? '비밀번호 표시' : '숨기기'}
          </RightLabel>
        )
      }
      onKeyUp={onKeyUp}
    />
  );
}

const RightLabel = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.grey900};
  cursor: pointer;
`;
