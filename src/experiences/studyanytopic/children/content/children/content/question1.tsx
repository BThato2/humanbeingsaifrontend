// Will have 6 total sounds

import styled from 'styled-components'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import SoundIcon from '../../../../../../assets/vectors/soundIcon.svg'
//
import useSound from 'use-sound'
//@ts-ignore
import useStudyAnythingSwitcher from 'statemanagers/studyanytopic/studyAnythingManager'
//@ts-ignore

export default function Question1() {
  const [isCard1Pressed, setIsCard1Pressed] = useState(false)
  const [isCard2Pressed, setIsCard2Pressed] = useState(false)
  const [isCard3Pressed, setIsCard3Pressed] = useState(false)
  const [counter, setCounter] = useState(0)

  const [play] = useSound('/audio/question1.mp3')

  return (
    <ContentVStack
      onMouseOver={() => {
        if (counter == 0) {
          play()
          setCounter(counter + 1)
        }
      }}
    >
      <LargeWhiteTextCopy>
        What sound does this character make?
      </LargeWhiteTextCopy>
      <LeftRightParentHStack>
        <RelativePositioner>
          <PrimaryBlackCard>
            <KoreanLetter>오</KoreanLetter>
          </PrimaryBlackCard>
        </RelativePositioner>
        <ThinBlackCardVStack>
          <ThinBlackCardBase
            onClick={() => {
              setIsCard2Pressed(false)
              setIsCard3Pressed(false)
              setIsCard1Pressed(true)
            }}
            isCardPressed={isCard1Pressed}
          >
            <ThinBlackCardNumberBox isCardPressed={isCard1Pressed}>
              <ThinBlackCardInsideNumber>1</ThinBlackCardInsideNumber>
            </ThinBlackCardNumberBox>
            <ThinBlackCardWhiteText>na</ThinBlackCardWhiteText>
          </ThinBlackCardBase>
          <ThinBlackCardBase
            onClick={() => {
              setIsCard3Pressed(false)
              setIsCard1Pressed(false)
              setIsCard2Pressed(true)
            }}
            isCardPressed={isCard2Pressed}
          >
            <ThinBlackCardNumberBox isCardPressed={isCard2Pressed}>
              <ThinBlackCardInsideNumber>2</ThinBlackCardInsideNumber>
            </ThinBlackCardNumberBox>
            <ThinBlackCardWhiteText>o</ThinBlackCardWhiteText>
          </ThinBlackCardBase>
          <ThinBlackCardBase
            onClick={() => {
              setIsCard1Pressed(false)
              setIsCard2Pressed(false)
              setIsCard3Pressed(true)
            }}
            isCardPressed={isCard3Pressed}
          >
            <ThinBlackCardNumberBox isCardPressed={isCard3Pressed}>
              <ThinBlackCardInsideNumber>3</ThinBlackCardInsideNumber>
            </ThinBlackCardNumberBox>
            <ThinBlackCardWhiteText>ga</ThinBlackCardWhiteText>
          </ThinBlackCardBase>
        </ThinBlackCardVStack>
      </LeftRightParentHStack>
      <CheckAnswerButtonBase
        isCard1Pressed={isCard1Pressed}
        isCard2Pressed={isCard2Pressed}
        isCard3Pressed={isCard3Pressed}
        onClick={() => {
          if (isCard1Pressed == true) {
            useStudyAnythingSwitcher.setState({
              showWrongAnswer: true,
            })
          }
          if (isCard2Pressed == true) {
            useStudyAnythingSwitcher.setState({
              showRightAnswer: true,
            })
          }
          if (isCard3Pressed == true) {
            useStudyAnythingSwitcher.setState({
              showWrongAnswer: true,
            })
          }
        }}
      >
        <CheckAnswerButtonText
          isCard1Pressed={isCard1Pressed}
          isCard2Pressed={isCard2Pressed}
          isCard3Pressed={isCard3Pressed}
        >
          Check Answer
        </CheckAnswerButtonText>
      </CheckAnswerButtonBase>
    </ContentVStack>
  )
}

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

const PrimaryBlackCard = styled.div`
  width: 252.98px;
  height: 280.964px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #141414;
  display: flex;
  justify-content: center;
  align-items: center;
`

const KoreanLetter = styled.div`
  color: #fff;
  font-size: 100px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const SoundButtonBase = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #8e49fe;
  box-shadow: 0px 3.230769395828247px 5.384615898132324px 2.153846263885498px
    rgba(28, 28, 31, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`

const AbsolutePositioner = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

const RelativePositioner = styled.div`
  position: relative;
`

// Main Card End

// Right Side Cards Start

const ThinBlackCardVStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 20px;
`

const ThinBlackCardBase = styled.div<{ isCardPressed: Boolean }>`
  width: 424.245px;
  height: 78.357px;
  flex-shrink: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: ${(props) =>
    props.isCardPressed == true ? '#A346E9;' : '#141414'};
  gap: 130px;
  cursor: pointer;
`

const ThinBlackCardWhiteText = styled.div`
  color: #fff;
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const ThinBlackCardNumberBox = styled.div<{ isCardPressed: Boolean }>`
  width: 38.059px;
  height: 38.059px;
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
  font-size: 22px;
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
}>`
  color: ${(props) =>
    props.isCard1Pressed == true ||
    props.isCard2Pressed == true ||
    props.isCard3Pressed == true
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
    props.isCard3Pressed == true
      ? 'linear-gradient(135deg, #FF3880 0%, #8E49FF 100%)'
      : 'linear-gradient(135deg,rgba(255, 56, 128, 0.3) 0%, rgba(142, 73, 255, 0.3) 100%)'};
`

// Check Answer Button End
