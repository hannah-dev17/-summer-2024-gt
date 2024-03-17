import React from 'react';
import styled from 'styled-components';
import googlePlayStoreBadge from '../../assets/images/google-play-badge.png';
import appStoreBadge from '../../assets/images/app-store-badge.png';
import { Spacing } from '../Spacing';

export function AppDownloadBadges() {
  return (
    <BadgeWrapper>
      <BadgeImage src={googlePlayStoreBadge} alt='googlePlayStore' width={135} />
      <Spacing width={10} />
      <BadgeImage src={appStoreBadge} alt='appStore' width={120} />
    </BadgeWrapper>
  );
}

const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BadgeImage = styled.img<{ width: number }>`
  width: ${props => `${props.width}px`};
  height: 40px;
`;
