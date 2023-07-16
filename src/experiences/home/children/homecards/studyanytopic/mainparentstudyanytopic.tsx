import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'

export default function MainParentStudyAnyTopic() {
  return (
    <PrimaryCard>
      <InsideCardWrapper>
        <TopBottomWrapper>
          <WhiteMainText>Study Any Topic</WhiteMainText>
          <ContentWrapper>
            <CardBackground
              onClick={() => {
                useCurrentExperienceSwitcher.setState({
                  currentExperienceIs: 'studyanytopic',
                })
              }}
            >
              <LinearGradientTile>
                <TileText>🇰🇷</TileText>
              </LinearGradientTile>
              <RightSideCardVStack>
                <SmallWhiteText>Korean</SmallWhiteText>
                <SmallerGrayText>50% Complete</SmallerGrayText>
              </RightSideCardVStack>
            </CardBackground>
            <CardBackground
              onClick={() => {
                alert('TOPIC UNDER CONSTRUCTION 🚧 - TRY KOREAN')
              }}
            >
              <LinearGradientTile>
                <TileText>🔬</TileText>
              </LinearGradientTile>
              <RightSideCardVStack>
                <SmallWhiteText>Biology</SmallWhiteText>
                <SmallerGrayText>35% Complete</SmallerGrayText>
              </RightSideCardVStack>
            </CardBackground>
            <CardBackground
              onClick={() => {
                alert('TOPIC UNDER CONSTRUCTION 🚧 - TRY KOREAN')
              }}
            >
              <LinearGradientTile>
                <TileText>🧬</TileText>
              </LinearGradientTile>
              <RightSideCardVStack>
                <SmallWhiteText>Chemistry</SmallWhiteText>
                <SmallerGrayText>4% Complete</SmallerGrayText>
              </RightSideCardVStack>
            </CardBackground>
            <CardBackground
              onClick={() => {
                alert('TOPIC UNDER CONSTRUCTION 🚧 - TRY KOREAN')
              }}
            >
              <LinearGradientTile>
                <TileText>🇨🇳</TileText>
              </LinearGradientTile>
              <RightSideCardVStack>
                <SmallWhiteText>Mandarin</SmallWhiteText>
                <SmallerGrayText>0% Complete</SmallerGrayText>
              </RightSideCardVStack>
            </CardBackground>
            <CardBackground
              onClick={() => {
                alert('TOPIC UNDER CONSTRUCTION 🚧 - TRY KOREAN')
              }}
            >
              <LinearGradientTile>
                <TileText>🌏</TileText>
              </LinearGradientTile>
              <RightSideCardVStack>
                <SmallWhiteText>World History</SmallWhiteText>
                <SmallerGrayText>0% Complete</SmallerGrayText>
              </RightSideCardVStack>
            </CardBackground>
          </ContentWrapper>
        </TopBottomWrapper>
      </InsideCardWrapper>
    </PrimaryCard>
  )
}

// Top Portion and Main Card

const PrimaryCard = styled.div`
  width: 429px;
  height: 639px;
  flex-shrink: 0;
  border-radius: 19.116px;
  background: rgba(31, 32, 35, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const InsideCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const WhiteMainText = styled.div`
  color: #fff;
  font-size: 32px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

// Primary Lower Portion

const TopBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 30px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

const CardBackground = styled.div`
  width: 365px;
  height: 82px;
  flex-shrink: 0;
  background: rgba(31, 32, 35, 0.5);
  display: flex;
  gap: 30px;
  border-radius: 18px;
  cursor: pointer;
  :hover {
    box-shadow: 0px -4px 15px 0px rgba(215, 48, 111, 0.75),
      0px 4px 15px 0px rgba(142, 73, 255, 0.75);
  }
`

const LinearGradientTile = styled.div`
  width: 122px;
  height: 82px;
  flex-shrink: 0;
  border-radius: 20px;
  background: linear-gradient(135deg, #d73070 0%, #7b3ed7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const TileText = styled.div`
  font-size: 60px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

// Right side of bottom portion cards

const SmallWhiteText = styled.div`
  color: #fff;
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const SmallerGrayText = styled.div`
  color: #b9b9b9;
  font-size: 18px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const RightSideCardVStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 7px;
  padding-top: 18px;
`
