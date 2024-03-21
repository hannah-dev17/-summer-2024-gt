import React from 'react';
import styled from 'styled-components';

type LinkTextProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export function LinkText({ children, onClick }: LinkTextProps) {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  cursor: pointer;
`;
