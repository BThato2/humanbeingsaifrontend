import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import SoundIcon from '../../../../../../assets/vectors/soundIcon.svg'
import useStudyAnythingSwitcher from 'statemanagers/studyanytopic/studyAnythingManager'
import useSound from 'use-sound'
//@ts-ignore

export default function Question3() {
  const [isCard1Pressed, setIsCard1Pressed] = useState(false)
  const [isCard2Pressed, setIsCard2Pressed] = useState(false)
  const [isCard3Pressed, setIsCard3Pressed] = useState(false)
  const [isCard4Pressed, setIsCard4Pressed] = useState(false)
  //
  const [play] = useSound('/audio/question3.mp3')
  const [counter, setCounter] = useState(0)
  return (
    <ContentVStack
      onMouseOver={() => {
        if (counter == 0) {
          play()
          setCounter(counter + 1)
          //
          //
        }
      }}
    >
      <LargeWhiteTextCopy>
        Can you select the exact character for “go”?
      </LargeWhiteTextCopy>
      <LeftRightParentHStack>
        <CardHStack>
          <RelativePositioner>
            <AbsolutePositioner>
              <ThinBlackCardNumberBox isCardPressed={isCard1Pressed}>
                <ThinBlackCardInsideNumber>1</ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
            </AbsolutePositioner>
            <PrimaryBlackCard
              onClick={() => {
                setIsCard2Pressed(false)
                setIsCard3Pressed(false)
                setIsCard4Pressed(false)
                setIsCard1Pressed(true)
              }}
              isCardPressed={isCard1Pressed}
            >
              <KoreanLetter>오</KoreanLetter>
            </PrimaryBlackCard>
          </RelativePositioner>
          <RelativePositioner>
            <AbsolutePositioner>
              <ThinBlackCardNumberBox isCardPressed={isCard2Pressed}>
                <ThinBlackCardInsideNumber>2</ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
            </AbsolutePositioner>
            <PrimaryBlackCard
              onClick={() => {
                setIsCard2Pressed(true)
                setIsCard3Pressed(false)
                setIsCard1Pressed(false)
                setIsCard4Pressed(false)
              }}
              isCardPressed={isCard2Pressed}
            >
              <KoreanLetter>가</KoreanLetter>
            </PrimaryBlackCard>
          </RelativePositioner>
          <RelativePositioner>
            <AbsolutePositioner>
              <ThinBlackCardNumberBox isCardPressed={isCard3Pressed}>
                <ThinBlackCardInsideNumber>3</ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
            </AbsolutePositioner>
            <PrimaryBlackCard
              onClick={() => {
                setIsCard2Pressed(false)
                setIsCard3Pressed(true)
                setIsCard1Pressed(false)
                setIsCard4Pressed(false)
              }}
              isCardPressed={isCard3Pressed}
            >
              <KoreanLetter>ㅗ</KoreanLetter>
            </PrimaryBlackCard>
          </RelativePositioner>
          <RelativePositioner>
            <AbsolutePositioner>
              <ThinBlackCardNumberBox isCardPressed={isCard4Pressed}>
                <ThinBlackCardInsideNumber>4</ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
            </AbsolutePositioner>
            <PrimaryBlackCard
              onClick={() => {
                setIsCard2Pressed(false)
                setIsCard3Pressed(false)
                setIsCard1Pressed(false)
                setIsCard4Pressed(true)
              }}
              isCardPressed={isCard4Pressed}
            >
              <KoreanLetter>어</KoreanLetter>
            </PrimaryBlackCard>
          </RelativePositioner>
        </CardHStack>
      </LeftRightParentHStack>
      <CheckAnswerButtonBase
        isCard1Pressed={isCard1Pressed}
        isCard2Pressed={isCard2Pressed}
        isCard3Pressed={isCard3Pressed}
        isCard4Pressed={isCard4Pressed}
        onClick={() => {
          if (isCard1Pressed == true) {
            useStudyAnythingSwitcher.setState({
              showWrongAnswer: true,
            })
          }
          if (isCard2Pressed == true) {
            useStudyAnythingSwitcher.setState({
              showWrongAnswer: true,
            })
          }
          if (isCard3Pressed == true) {
            useStudyAnythingSwitcher.setState({
              showWrongAnswer: true,
            })
          }
          if (isCard4Pressed == true) {
            useStudyAnythingSwitcher.setState({
              showRightAnswer: true,
            })
          }
        }}
      >
        <CheckAnswerButtonText
          isCard1Pressed={isCard1Pressed}
          isCard2Pressed={isCard2Pressed}
          isCard3Pressed={isCard3Pressed}
          isCard4Pressed={isCard4Pressed}
        >
          Check Answer
        </CheckAnswerButtonText>
      </CheckAnswerButtonBase>
    </ContentVStack>
  )
}

const CardHStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const ContentVStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 50px;
`

const LeftRightParentHStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const LargeWhiteTextCopy = styled.div`
  color: #fff;
  font-size: 32px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

// Main Card Start

const PrimaryBlackCard = styled.div<{ isCardPressed: Boolean }>`
  width: 180px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 16.909px;
  background: ${(props) =>
    props.isCardPressed == true ? '#A346E9;' : '#141414'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const KoreanLetter = styled.div`
  color: #fff;
  font-size: 100px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const AbsolutePositioner = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const RelativePositioner = styled.div`
  position: relative;
`

// Main Card End

// Right Side Cards Start

const ThinBlackCardNumberBox = styled.div<{ isCardPressed: Boolean }>`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #fff;
  background: ${(props) =>
    props.isCardPressed == true ? '#A346E9' : '#27272b'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`

const ThinBlackCardInsideNumber = styled.div`
  color: #fff;
  font-size: 20px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 1px;
`

// Right Side Cards End

// Check Answer Button Start

const CheckAnswerButtonText = styled.div<{
  isCard1Pressed: Boolean
  isCard2Pressed: Boolean
  isCard3Pressed: Boolean
  isCard4Pressed: Boolean
}>`
  color: ${(props) =>
    props.isCard1Pressed == true ||
    props.isCard2Pressed == true ||
    props.isCard3Pressed == true ||
    props.isCard4Pressed == true
      ? 'white'
      : 'rgba(255, 255, 255, 0.30)'};
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 600;
`

const CheckAnswerButtonBase = styled.div<{
  isCard1Pressed: Boolean
  isCard2Pressed: Boolean
  isCard3Pressed: Boolean
  isCard4Pressed: Boolean
}>`
  width: 252.98px;
  height: 51.491px;
  flex-shrink: 0;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.isCard1Pressed == true ||
    props.isCard2Pressed == true ||
    props.isCard3Pressed == true ||
    props.isCard4Pressed == true
      ? 'linear-gradient(135deg, #FF3880 0%, #8E49FF 100%)'
      : 'linear-gradient(135deg,rgba(255, 56, 128, 0.3) 0%, rgba(142, 73, 255, 0.3) 100%)'};
`

// Check Answer Button End
