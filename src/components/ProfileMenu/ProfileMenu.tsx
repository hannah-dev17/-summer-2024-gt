import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icons/bookmark.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as AlertCircleIcon } from '../../assets/icons/alert-circle.svg';
import { Spacing } from '../Spacing';
import { Text } from '../Text';

export function ProfileMenu() {
  return (
    <Wrapper>
      <Spacing height={20} />
      <MenuItem>
        <UserIcon stroke={colors.grey900} />
        <Spacing width={20} />
        <Text color={colors.grey900} fontSize={16} fontWeight={700} lineHeight={24}>
          프로필
        </Text>
      </MenuItem>
      <Spacing height={8} />
      <MenuItem>
        <BookmarkIcon width={24} height={24} stroke={colors.grey900} />
        <Spacing width={20} />
        <Text color={colors.grey900} fontSize={16} fontWeight={700} lineHeight={24}>
          저장됨
        </Text>
      </MenuItem>
      <Spacing height={8} />
      <MenuItem>
        <SettingsIcon width={24} height={24} stroke={colors.grey900} />
        <Spacing width={20} />
        <Text color={colors.grey900} fontSize={16} fontWeight={700} lineHeight={24}>
          설정
        </Text>
      </MenuItem>
      <Spacing height={8} />
      <MenuItem>
        <AlertCircleIcon width={24} height={24} stroke={colors.grey900} />
        <Spacing width={20} />
        <Text color={colors.grey900} fontSize={16} fontWeight={700} lineHeight={24}>
          문제 신고
        </Text>
      </MenuItem>
      <Spacing height={8} />
      <MenuItem>
        <SettingsIcon width={24} height={24} stroke={colors.grey900} />
        <Spacing width={20} />
        <Text color={colors.grey900} fontSize={16} fontWeight={700} lineHeight={24}>
          로그아웃
        </Text>
      </MenuItem>
      <Spacing height={20} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;
  height: 312px;
  background: ${colors.white};
  border: 1px solid ${colors.grey200};
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 8px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 48px;
  margin: 0 20px;
`;
