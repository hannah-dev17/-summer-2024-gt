import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import { Path, RegisterOptions, useFormContext } from 'react-hook-form';
import { Spacing } from '../Spacing';

type InputFieldProps<IFormValues> = {
  leftIconComponent: React.ReactNode;
  placeholder: string;
  rightComponent?: React.ReactNode;
  label: Path<IFormValues>;
  type: React.HTMLInputTypeAttribute;
  validation: RegisterOptions;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export function InputField<IFormValues>({
  leftIconComponent,
  placeholder,
  rightComponent,
  label,
  type,
  validation,
  value,
  onChange,
}: InputFieldProps<IFormValues>) {
  const formMethods = useFormContext();

  return (
    <InputWrapper>
      <LeftSideWrapper>
        <Spacing width={20} />
        {leftIconComponent}
        <Spacing width={8} />
        <Input
          type={type}
          placeholder={placeholder}
          {...formMethods.register(label, { ...validation, onChange })}
          value={value}
        />
      </LeftSideWrapper>
      {rightComponent && (
        <SideWrapper>
          {rightComponent}
          <Spacing width={20} />
        </SideWrapper>
      )}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.grey200};
  border-radius: 30px;
  width: 320px;
  height: 44px;
  align-items: center;
`;

const LeftSideWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const SideWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: none;
  outline: 0;
  width: 100%;
  margin-right: 20px;
`;
