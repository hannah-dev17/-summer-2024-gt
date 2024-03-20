import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';
import mainLogo from '../../assets/images/mainlogo.png';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import { ReactComponent as PlusSquareIcon } from '../../assets/icons/plus-square.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { Spacing } from '../Spacing';
import { ProfileMenu } from '../ProfileMenu';

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleProfileClick = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <Wrapper>
      <Spacing width={184} />
      <Image src={mainLogo} alt='mainLogo' />
      <Spacing width={308} />
      <Search>
        <SearchIcon width={20} height={20} stroke={colors.grey200} />
      </Search>
      <Spacing width={101} />
      <IconWrapper>
        <HomeIcon width={18} height={20} stroke={'#101828'} />
        <Spacing width={20} />
        <SendIcon width={20} height={20} stroke={colors.grey400} />
        <Spacing width={20} />
        <PlusSquareIcon width={18} height={18} stroke={colors.grey400} />
        <Spacing width={20} />
        <HeartIcon width={20.9} height={18.23} stroke={colors.grey400} />
      </IconWrapper>
      <Spacing width={20} />
      <ProfileImg
        src='https://s3-alpha-sig.figma.com/img/13f1/417e/1a0f246fe75242cd747a45c372a5a002?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNc3VBhbazWCk~NoB-qHTvznFZHlLzT4cOb20fEmHBFl~NvojSDJpyLemFWyoWEtYwYOgUwRJada8tXCfwvxQzHZddV3zryitBpaZ~M-slOLoSVs33ypBwZEfPdfisQmGFKRiBc1O934-vwtUd072rLKQZQT2nHHFQnq8cNV3VDxiHG3CxO9pLLsSzC1aqDfSi9w11sYiPO-7P~P1bz8GX4GoB8z0l~G4X-JDwK7wwErxA3RE4KPaV8i33e5dFeQwD9gsIaXNaxPl40GXEnnVGBPQczpQm5EW5LrOZvFxhBG-Vx9~2c~oDfcxtmTatlm42me45mXU~GsUFreh2squw__'
        alt='profile'
        onClick={handleProfileClick}
      />
      {isOpenMenu && (
        <ProfilemMenuWrapper>
          <ProfileMenu />
        </ProfilemMenuWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey200};
  align-items: center;
`;

const Image = styled.img`
  width: 140px;
  height: 50px;
`;

const Search = styled.div`
  display: flex;
  border: 1px solid ${colors.grey200};
  border-radius: 4px;
  width: 312px;
  height: 44px;
  align-items: center;
  padding-left: 14px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border: 0.5px solid ${colors.white};
  border-radius: 50%;
  cursor: pointer;
`;

const ProfilemMenuWrapper = styled.div`
  position: absolute;
  left: calc(50% - 280px / 2 + 405px);
  top: 210px;
`;
