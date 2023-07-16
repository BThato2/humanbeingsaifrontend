import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import sethStorlieProfilePicture from '../../../../../assets/images/sethStorlieProfilePicture.png'
//@ts-ignore
import emilyWangProfilePicture from '../../../../../assets/images/emilyWangProfilePicture.png'
//@ts-ignore
import coltonScottProfilePicture from '../../../../../assets/images/coltonScottProfilePicture.png'
//@ts-ignore
import gavinChuProfilePicture from '../../../../../assets/images/gavinChuProfilePicture.png'
//@ts-ignore
import chloeVuProfilePicture from '../../../../../assets/images/chloeVuProfilePicture.png'

import DoubleRightArrow from '../../../../../assets/vectors/doubleRightArrow'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'

export default function InsideCardsFriendsAvatars() {
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)
  const [isHovered5, setIsHovered5] = useState(false)
  return (
    <CardStack>
      <InsideCard
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        onClick={() => {
          useCurrentExperienceSwitcher.setState({
            currentExperienceIs: 'friendsavatars',
          })
        }}
      >
        <MainContentWrapper>
          <LeftSideContentWrapper>
            <Image src={sethStorlieProfilePicture} width="55%" height="55%" />
            <TextVStack>
              <WhiteText>Seth Storlie</WhiteText>
              <GrayText>Bae Suzy • 6 hours</GrayText>
            </TextVStack>
          </LeftSideContentWrapper>
          {isHovered1 ? (
            <DoubleRightArrow fill="white" />
          ) : (
            <DoubleRightArrow fill="#B9B9B9" />
          )}
        </MainContentWrapper>
      </InsideCard>
      <InsideCard
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        onClick={() => {
          alert('FRIEND UNDER CONSTRUCTION 🚧 - TRY SETH STORLIE')
        }}
      >
        <MainContentWrapper>
          <LeftSideContentWrapper>
            <Image src={emilyWangProfilePicture} width="55%" height="55%" />
            <TextVStack>
              <WhiteText>Emily Wang</WhiteText>
              <GrayText>Joe Rogan • 8 hours</GrayText>
            </TextVStack>
          </LeftSideContentWrapper>
          {isHovered2 ? (
            <DoubleRightArrow fill="white" />
          ) : (
            <DoubleRightArrow fill="#B9B9B9" />
          )}
        </MainContentWrapper>
      </InsideCard>
      <InsideCard
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        onClick={() => {
          alert('FRIEND UNDER CONSTRUCTION 🚧 - TRY SETH STORLIE')
        }}
      >
        <MainContentWrapper>
          <LeftSideContentWrapper>
            <Image src={coltonScottProfilePicture} width="55%" height="55%" />
            <TextVStack>
              <WhiteText>Colton Scott</WhiteText>
              <GrayText>Travis Scott • 2 days</GrayText>
            </TextVStack>
          </LeftSideContentWrapper>
          {isHovered3 ? (
            <DoubleRightArrow fill="white" />
          ) : (
            <DoubleRightArrow fill="#B9B9B9" />
          )}
        </MainContentWrapper>
      </InsideCard>
      <InsideCard
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
        onClick={() => {
          alert('FRIEND UNDER CONSTRUCTION 🚧 - TRY SETH STORLIE')
        }}
      >
        <MainContentWrapper>
          <LeftSideContentWrapper>
            <Image src={gavinChuProfilePicture} width="55%" height="55%" />
            <TextVStack>
              <WhiteText>Gavin Chu</WhiteText>
              <GrayText>Ash Ketchum • 5 days</GrayText>
            </TextVStack>
          </LeftSideContentWrapper>
          {isHovered4 ? (
            <DoubleRightArrow fill="white" />
          ) : (
            <DoubleRightArrow fill="#B9B9B9" />
          )}
        </MainContentWrapper>
      </InsideCard>
      <InsideCard
        onMouseEnter={() => setIsHovered5(true)}
        onMouseLeave={() => setIsHovered5(false)}
        onClick={() => {
          alert('FRIEND UNDER CONSTRUCTION 🚧 - TRY SETH STORLIE')
        }}
      >
        <MainContentWrapper>
          <LeftSideContentWrapper>
            <Image src={chloeVuProfilePicture} width="55%" height="55%" />
            <TextVStack>
              <WhiteText>Chloe Vu</WhiteText>
              <GrayText>Jeff Bezos • 6 days</GrayText>
            </TextVStack>
          </LeftSideContentWrapper>
          {isHovered5 ? (
            <DoubleRightArrow fill="white" />
          ) : (
            <DoubleRightArrow fill="#B9B9B9" />
          )}
        </MainContentWrapper>
      </InsideCard>
    </CardStack>
  )
}

const CardStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`

const InsideCard = styled.div`
  width: 380px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #151517;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      139deg,
      rgba(252, 57, 133, 0.5) 0%,
      #1f2023 19.79%,
      #1f2023 76.04%,
      rgba(147, 73, 250, 0.5) 100%
    );
  }
`

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`

const LeftSideContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 17px;
`

const TextVStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 6px;
`

const WhiteText = styled.div`
  color: #fff;
  font-size: 24px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const GrayText = styled.div`
  color: #b9b9b9;
  font-size: 18px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
