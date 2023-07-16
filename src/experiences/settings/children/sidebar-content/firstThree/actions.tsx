import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import ButtonAddWhite from '../../../../../assets/vectors/settingsidebar/buttonAddWhite.svg'
//@ts-ignore
import ButtonThunderWhite from '../../../../../assets/vectors/settingsidebar/buttonThunderWhite.svg'
//@ts-ignore
import ButtonUnlockWhite from '../../../../../assets/vectors/settingsidebar/buttonUnlockWhite.svg'
//@ts-ignore
import ButtonHeartWhite from '../../../../../assets/vectors/settingsidebar/buttonHeartWhite.svg'
//
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'

export default function Actions() {
  return (
    <TopBottomWrapper>
      <WhiteBoldTitle>Actions</WhiteBoldTitle>
      <ButtonMainVStackWrapper>
        <Background>
          <ButtonHStackWrapper
            onClick={() => {
              useCurrentExperienceSwitcher.setState({
                currentExperienceIs: 'connections',
              })
            }}
          >
            <MarginLeft>
              <Image src={ButtonAddWhite} width="20%" height="20%" />
            </MarginLeft>
            <WhiteButtonText>Add Partner Categories</WhiteButtonText>
          </ButtonHStackWrapper>
        </Background>
        {/*
<Background>
          <ButtonHStackWrapper
            onClick={() => {
              useCurrentExperienceSwitcher.setState({
                currentExperienceIs: 'altman',
              })
            }}
          >
            <MarginLeft>
              <Image src={ButtonHeartWhite} width="20%" height="20%" />
            </MarginLeft>
            <WhiteButtonText>Altman Capital LP Login</WhiteButtonText>
          </ButtonHStackWrapper>
        </Background>
*/}

        <Background>
          <ButtonHStackWrapper
            onClick={() => {
              window.open('mailto:colin@colinsnyder.com', '_blank')
            }}
          >
            <MarginLeft>
              <Image src={ButtonThunderWhite} width="20%" height="20%" />
            </MarginLeft>
            <WhiteButtonText>Contact Team</WhiteButtonText>
          </ButtonHStackWrapper>
        </Background>

        <Background>
          <ButtonHStackWrapper
            onClick={() => {
              window.open('https://arxiv.org/pdf/1706.03762.pdf', '_blank')
            }}
          >
            <MarginLeft>
              <Image src={ButtonUnlockWhite} width="20%" height="20%" />
            </MarginLeft>
            <WhiteButtonText>Log Out</WhiteButtonText>
          </ButtonHStackWrapper>
        </Background>
      </ButtonMainVStackWrapper>
    </TopBottomWrapper>
  )
}

const TopBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 30px;
  margin-right: 100px;
`

const WhiteBoldTitle = styled.div`
  color: #fff;
  font-family: Proxima Soft;
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 10px;
`

// Main

const ButtonMainVStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ButtonHStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: left;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border-radius: 6px;
  height: 40px;
  :hover {
    background: linear-gradient(
      139deg,
      rgba(252, 57, 133, 0.5) 0%,
      #1f2023 19.79%,
      #1f2023 76.04%,
      rgba(147, 73, 250, 0.5) 100%
    );
  }
`

const WhiteButtonText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Proxima Soft;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 10px;
`

const MarginLeft = styled.div`
  margin-left: 10px;
`

const Background = styled.div`
  width: 200;
  height: 38px;
  display: flex;
  justify-content: left;
  align-items: center;
`
