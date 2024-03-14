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
      <SideWrapper>
        <Spacing width={20} />
        {leftIconComponent}
        <Spacing width={8} />
        <Input
          type={type}
          placeholder={placeholder}
          {...formMethods.register(label, { ...validation, onChange })}
          value={value}
        />
      </SideWrapper>
      <SideWrapper>
        {rightComponent && rightComponent}
        <Spacing width={20} />
      </SideWrapper>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.grey200};
  border-radius: 30px;
  width: 320px;
  height: 44px;
  align-items: center;
`;

const SideWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  border: none;
  outline: 0;
`;
