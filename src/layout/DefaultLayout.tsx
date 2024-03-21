import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Root>
      <Box>{children}</Box>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  width: 1440px;
  height: 1024px;
  background-color: ${colors.grey50};
`;
