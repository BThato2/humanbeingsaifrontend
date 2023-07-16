import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import WhiteAvatar from '../../../../../assets/vectors/settingsidebar/whiteAvatar.svg'
//@ts-ignore
import WhiteEmail from '../../../../../assets/vectors/settingsidebar/whiteEmail.svg'
//@ts-ignore
import GraceHopperRoundedRectangle from '../../../../../assets/images/graceHopperRoundedRectangle.png'

export default function Profile() {
  return (
    <div>
      <TopBottomWrapper>
        <WhiteBoldTitle>Profile</WhiteBoldTitle>
        <MainProfileWrapper>
          <WhiteRoundedRectangle>
            <Image src={GraceHopperRoundedRectangle} width="70%" height="70%" />
          </WhiteRoundedRectangle>
          <ThreeTextWrapper>
            <UserNameWhiteText>Grace Hopper</UserNameWhiteText>
            <VectorAndTextWrapper>
              <Image src={WhiteAvatar} width="20%" height="20%" />
              <VerySmallWhiteText>NatfriedmanFanGirl01</VerySmallWhiteText>
            </VectorAndTextWrapper>
            <VectorAndTextWrapper>
              <Image src={WhiteEmail} width="20%" height="20%" />
              <VerySmallWhiteText>Gracehopper@gmail.com</VerySmallWhiteText>
            </VectorAndTextWrapper>
          </ThreeTextWrapper>
        </MainProfileWrapper>
      </TopBottomWrapper>
    </div>
  )
}

const AbsoluteDiv = styled.div`
  position: absolute;
  top: -100;
  left: -100;
  z-index: 1000;
`

const RelativeDiv = styled.div`
  position: relative;
`

const TopBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 30px;
  margin-left: 10px;
`

const WhiteBoldTitle = styled.div`
  color: #fff;
  font-family: Proxima Soft;
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

// Main

const WhiteRoundedRectangle = styled.div`
  width: 78px;
  height: 78px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  gap: 10px;
`

const UserNameWhiteText = styled.div`
  color: #fff;
  font-family: Proxima Soft;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`

const VerySmallWhiteText = styled.div`
  color: #fff;
  font-family: Proxima Soft;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
`

const ThreeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 6.5px;
`

const VectorAndTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  gap: 6px;
`
