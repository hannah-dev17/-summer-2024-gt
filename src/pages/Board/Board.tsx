import React from 'react';
import { DefaultLayout } from '../../layout';
import { Header, Spacing } from '../../components';
import styled from 'styled-components';
import { colors } from '../../styles';

export function Board() {
  return (
    <DefaultLayout>
      <Wrapper>
        <Header />
        <Spacing height={30} />
        <Content>
          <Spacing width={288} />
          <LeftSide>
            <StoryWrapper />
            <Spacing height={15} />
            <BoardContent />
          </LeftSide>
          <RightSide />
        </Content>
      </Wrapper>
    </DefaultLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const StoryWrapper = styled.div`
  width: 520px;
  height: 130px;
  background: ${colors.white};
  border: 1px solid ${colors.grey200};
  border-radius: 10px;
`;
const RightSide = styled.div``;
const BoardContent = styled.div`
  width: 520px;
  height: 757px;
  background: ${colors.white};
  border: 1px solid ${colors.grey200};
  border-radius: 10px;
`;
