import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useStudyAnythingSwitcher from 'statemanagers/studyanytopic/studyAnythingManager'
import useSound from 'use-sound'
//@ts-ignore
import Question2Sound from '../../../../../../assets/audio/question2.mp3'

export default function Question2() {
  const [isCard1Pressed, setIsCard1Pressed] = useState(false)
  const [isCard2Pressed, setIsCard2Pressed] = useState(false)
  const [isCard3Pressed, setIsCard3Pressed] = useState(false)
  const [isCard4Pressed, setIsCard4Pressed] = useState(false)
  const [isCard5Pressed, setIsCard5Pressed] = useState(false)
  const [isCard6Pressed, setIsCard6Pressed] = useState(false)
  const [isCard7Pressed, setIsCard7Pressed] = useState(false)
  const [isCard8Pressed, setIsCard8Pressed] = useState(false)
  // MAKE THE CARDS DISAPPEAR AFTER GREEN
  const [isCard1And6Pressed, setIsCard1And6Pressed] = useState(false)
  const [isCard2And7Pressed, setIsCard2And7Pressed] = useState(false)
  const [isCard3And8Pressed, setIsCard3And8Pressed] = useState(false)
  const [isCard4And5Pressed, setIsCard4And5Pressed] = useState(false)

  // HELPS MAKE CARDS DISAPPEAR AFTER GREEN
  useEffect(() => {
    if (isCard1Pressed && isCard6Pressed) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard1And6Pressed(true)
        setIsCard1Pressed(false)
        setIsCard6Pressed(false)
      }, delayInMilliseconds)
    }
    if (isCard2Pressed && isCard7Pressed) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard2And7Pressed(true)
        setIsCard2Pressed(false)
        setIsCard7Pressed(false)
      }, delayInMilliseconds)
    }
    if (isCard3Pressed && isCard8Pressed) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard3And8Pressed(true)
        setIsCard3Pressed(false)
        setIsCard8Pressed(false)
      }, delayInMilliseconds)
    }
    if (isCard4Pressed && isCard5Pressed) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard4And5Pressed(true)
        setIsCard4Pressed(false)
        setIsCard5Pressed(false)
      }, delayInMilliseconds)
    }
    // MOVE ON TO NEXT QUESTION
    if (
      isCard1And6Pressed == true &&
      isCard2And7Pressed == true &&
      isCard3And8Pressed == true &&
      isCard4And5Pressed == true
    ) {
      useStudyAnythingSwitcher.setState({
        showRightAnswer: true,
      })
    }
  }, [
    isCard1Pressed,
    isCard2Pressed,
    isCard3Pressed,
    isCard4Pressed,
    isCard5Pressed,
    isCard6Pressed,
    isCard7Pressed,
    isCard8Pressed,
  ])

  // Turn cards back to normal after red
  useEffect(() => {
    if (
      (isCard1Pressed && isCard5Pressed) ||
      (isCard1Pressed && isCard7Pressed) ||
      (isCard1Pressed && isCard8Pressed)
    ) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard1Pressed(false)
      }, delayInMilliseconds)
    }
    if (
      (isCard2Pressed && isCard5Pressed) ||
      (isCard2Pressed && isCard6Pressed) ||
      (isCard2Pressed && isCard8Pressed)
    ) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard2Pressed(false)
      }, delayInMilliseconds)
    }
    if (
      (isCard3Pressed && isCard5Pressed) ||
      (isCard3Pressed && isCard6Pressed) ||
      (isCard3Pressed && isCard7Pressed)
    ) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard3Pressed(false)
      }, delayInMilliseconds)
    }
    if (
      (isCard4Pressed && isCard6Pressed) ||
      (isCard4Pressed && isCard7Pressed) ||
      (isCard4Pressed && isCard8Pressed)
    ) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard4Pressed(false)
      }, delayInMilliseconds)
    }
    if (
      (isCard5Pressed && isCard1Pressed) ||
      (isCard5Pressed && isCard2Pressed) ||
      (isCard5Pressed && isCard3Pressed)
    ) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard5Pressed(false)
      }, delayInMilliseconds)
    }
    if (
      (isCard6Pressed && isCard2Pressed) ||
      (isCard6Pressed && isCard3Pressed) ||
      (isCard6Pressed && isCard4Pressed)
    ) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard6Pressed(false)
      }, delayInMilliseconds)
    }
    if (
      (isCard7Pressed && isCard1Pressed) ||
      (isCard7Pressed && isCard3Pressed) ||
      (isCard7Pressed && isCard4Pressed)
    ) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard7Pressed(false)
      }, delayInMilliseconds)
    }
    if (
      (isCard8Pressed && isCard1Pressed) ||
      (isCard8Pressed && isCard2Pressed) ||
      (isCard8Pressed && isCard4Pressed)
    ) {
      var delayInMilliseconds = 500 // 0.5 seconds

      setTimeout(function () {
        setIsCard8Pressed(false)
      }, delayInMilliseconds)
    }
  }, [
    isCard1Pressed,
    isCard2Pressed,
    isCard3Pressed,
    isCard4Pressed,
    isCard5Pressed,
    isCard6Pressed,
    isCard7Pressed,
    isCard8Pressed,
  ])

  // if 1 & 6 are clicked == green
  // if 2 & 7 are clicked == green
  // if 3 & 8 are clicked == green
  // if 4 & 5 are clicked == green
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // ACTUAL REACT CODE IS BELOW
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  const [play] = useSound('/audio/question2.mp3')
  const [counter, setCounter] = useState(0)
  //
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
        Can you select the matching pairs?
      </LargeWhiteTextCopy>
      <LeftRightParentHStack>
        <MajorHStack>
          {/* Section 1 */}
          <ThinBlackCardVStack>
            <ThinBlackCardBase
              isCardPressed={isCard1Pressed}
              turnCardGreen={isCard1Pressed && isCard6Pressed}
              turnCardRed={
                (isCard1Pressed && isCard5Pressed) ||
                (isCard1Pressed && isCard7Pressed) ||
                (isCard1Pressed && isCard8Pressed)
              }
              disableCard={isCard1And6Pressed}
              onClick={() => {
                setIsCard1Pressed(true)
                setIsCard2Pressed(false)
                setIsCard3Pressed(false)
                setIsCard4Pressed(false)
              }}
            >
              <ThinBlackCardNumberBox
                isCardPressed={isCard1Pressed}
                disableCard={isCard1And6Pressed}
                turnCardGreen={isCard1Pressed && isCard6Pressed}
                turnCardRed={
                  (isCard1Pressed && isCard5Pressed) ||
                  (isCard1Pressed && isCard7Pressed) ||
                  (isCard1Pressed && isCard8Pressed)
                }
              >
                <ThinBlackCardInsideNumber disableCard={isCard1And6Pressed}>
                  1
                </ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
              <ThinBlackCardWhiteText disableCard={isCard1And6Pressed}>
                na
              </ThinBlackCardWhiteText>
            </ThinBlackCardBase>
            <ThinBlackCardBase
              isCardPressed={isCard2Pressed}
              turnCardGreen={isCard2Pressed && isCard7Pressed}
              turnCardRed={
                (isCard2Pressed && isCard5Pressed) ||
                (isCard2Pressed && isCard6Pressed) ||
                (isCard2Pressed && isCard8Pressed)
              }
              disableCard={isCard2And7Pressed}
              onClick={() => {
                setIsCard1Pressed(false)
                setIsCard2Pressed(true)
                setIsCard3Pressed(false)
                setIsCard4Pressed(false)
              }}
            >
              <ThinBlackCardNumberBox
                isCardPressed={isCard2Pressed}
                disableCard={isCard2And7Pressed}
                turnCardGreen={isCard2Pressed && isCard7Pressed}
                turnCardRed={
                  (isCard2Pressed && isCard5Pressed) ||
                  (isCard2Pressed && isCard6Pressed) ||
                  (isCard2Pressed && isCard8Pressed)
                }
              >
                <ThinBlackCardInsideNumber disableCard={isCard2And7Pressed}>
                  2
                </ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
              <ThinBlackCardWhiteText disableCard={isCard2And7Pressed}>
                o
              </ThinBlackCardWhiteText>
            </ThinBlackCardBase>
            <ThinBlackCardBase
              isCardPressed={isCard3Pressed}
              turnCardGreen={isCard3Pressed && isCard8Pressed}
              turnCardRed={
                (isCard3Pressed && isCard5Pressed) ||
                (isCard3Pressed && isCard6Pressed) ||
                (isCard3Pressed && isCard7Pressed)
              }
              disableCard={isCard3And8Pressed}
              onClick={() => {
                setIsCard1Pressed(false)
                setIsCard2Pressed(false)
                setIsCard3Pressed(true)
                setIsCard4Pressed(false)
              }}
            >
              <ThinBlackCardNumberBox
                isCardPressed={isCard3Pressed}
                disableCard={isCard3And8Pressed}
                turnCardGreen={isCard3Pressed && isCard8Pressed}
                turnCardRed={
                  (isCard3Pressed && isCard5Pressed) ||
                  (isCard3Pressed && isCard6Pressed) ||
                  (isCard3Pressed && isCard7Pressed)
                }
              >
                <ThinBlackCardInsideNumber disableCard={isCard3And8Pressed}>
                  3
                </ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
              <ThinBlackCardWhiteText disableCard={isCard3And8Pressed}>
                ya
              </ThinBlackCardWhiteText>
            </ThinBlackCardBase>
            <ThinBlackCardBase
              isCardPressed={isCard4Pressed}
              turnCardGreen={isCard4Pressed && isCard5Pressed}
              turnCardRed={
                (isCard4Pressed && isCard6Pressed) ||
                (isCard4Pressed && isCard7Pressed) ||
                (isCard4Pressed && isCard8Pressed)
              }
              disableCard={isCard4And5Pressed}
              onClick={() => {
                setIsCard1Pressed(false)
                setIsCard2Pressed(false)
                setIsCard3Pressed(false)
                setIsCard4Pressed(true)
              }}
            >
              <ThinBlackCardNumberBox
                isCardPressed={isCard4Pressed}
                disableCard={isCard4And5Pressed}
                turnCardGreen={isCard4Pressed && isCard5Pressed}
                turnCardRed={
                  (isCard4Pressed && isCard6Pressed) ||
                  (isCard4Pressed && isCard7Pressed) ||
                  (isCard4Pressed && isCard8Pressed)
                }
              >
                <ThinBlackCardInsideNumber disableCard={isCard4And5Pressed}>
                  4
                </ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
              <ThinBlackCardWhiteText disableCard={isCard4And5Pressed}>
                a
              </ThinBlackCardWhiteText>
            </ThinBlackCardBase>
          </ThinBlackCardVStack>
          {/* Section 2 */}
          <ThinBlackCardVStack>
            <ThinBlackCardBase
              isCardPressed={isCard5Pressed}
              turnCardGreen={isCard5Pressed && isCard4Pressed}
              turnCardRed={
                (isCard5Pressed && isCard1Pressed) ||
                (isCard5Pressed && isCard2Pressed) ||
                (isCard5Pressed && isCard3Pressed)
              }
              disableCard={isCard4And5Pressed}
              onClick={() => {
                if (
                  isCard1Pressed == true ||
                  isCard2Pressed == true ||
                  isCard3Pressed == true ||
                  isCard4Pressed == true
                ) {
                  setIsCard5Pressed(true)
                }
              }}
            >
              <ThinBlackCardNumberBox
                isCardPressed={isCard5Pressed}
                disableCard={isCard4And5Pressed}
                turnCardGreen={isCard5Pressed && isCard4Pressed}
                turnCardRed={
                  (isCard5Pressed && isCard1Pressed) ||
                  (isCard5Pressed && isCard2Pressed) ||
                  (isCard5Pressed && isCard3Pressed)
                }
              >
                <ThinBlackCardInsideNumber disableCard={isCard4And5Pressed}>
                  5
                </ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
              <ThinBlackCardWhiteText disableCard={isCard4And5Pressed}>
                나
              </ThinBlackCardWhiteText>
            </ThinBlackCardBase>
            <ThinBlackCardBase
              isCardPressed={isCard6Pressed}
              turnCardGreen={isCard6Pressed && isCard1Pressed}
              turnCardRed={
                (isCard6Pressed && isCard2Pressed) ||
                (isCard6Pressed && isCard3Pressed) ||
                (isCard6Pressed && isCard4Pressed)
              }
              disableCard={isCard1And6Pressed}
              onClick={() => {
                if (
                  isCard1Pressed == true ||
                  isCard2Pressed == true ||
                  isCard3Pressed == true ||
                  isCard4Pressed == true
                ) {
                  setIsCard6Pressed(true)
                }
              }}
            >
              <ThinBlackCardNumberBox
                isCardPressed={isCard6Pressed}
                disableCard={isCard1And6Pressed}
                turnCardGreen={isCard6Pressed && isCard1Pressed}
                turnCardRed={
                  (isCard6Pressed && isCard2Pressed) ||
                  (isCard6Pressed && isCard3Pressed) ||
                  (isCard6Pressed && isCard4Pressed)
                }
              >
                <ThinBlackCardInsideNumber disableCard={isCard1And6Pressed}>
                  6
                </ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
              <ThinBlackCardWhiteText disableCard={isCard1And6Pressed}>
                가
              </ThinBlackCardWhiteText>
            </ThinBlackCardBase>
            <ThinBlackCardBase
              isCardPressed={isCard7Pressed}
              turnCardGreen={isCard7Pressed && isCard2Pressed}
              turnCardRed={
                (isCard7Pressed && isCard1Pressed) ||
                (isCard7Pressed && isCard3Pressed) ||
                (isCard7Pressed && isCard4Pressed)
              }
              disableCard={isCard2And7Pressed}
              onClick={() => {
                if (
                  isCard1Pressed == true ||
                  isCard2Pressed == true ||
                  isCard3Pressed == true ||
                  isCard4Pressed == true
                ) {
                  setIsCard7Pressed(true)
                }
              }}
            >
              <ThinBlackCardNumberBox
                isCardPressed={isCard7Pressed}
                disableCard={isCard2And7Pressed}
                turnCardGreen={isCard7Pressed && isCard2Pressed}
                turnCardRed={
                  (isCard7Pressed && isCard1Pressed) ||
                  (isCard7Pressed && isCard3Pressed) ||
                  (isCard7Pressed && isCard4Pressed)
                }
              >
                <ThinBlackCardInsideNumber disableCard={isCard2And7Pressed}>
                  7
                </ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
              <ThinBlackCardWhiteText disableCard={isCard2And7Pressed}>
                오
              </ThinBlackCardWhiteText>
            </ThinBlackCardBase>
            <ThinBlackCardBase
              isCardPressed={isCard8Pressed}
              turnCardGreen={isCard8Pressed && isCard3Pressed}
              turnCardRed={
                (isCard8Pressed && isCard1Pressed) ||
                (isCard8Pressed && isCard2Pressed) ||
                (isCard8Pressed && isCard4Pressed)
              }
              disableCard={isCard3And8Pressed}
              onClick={() => {
                if (
                  isCard1Pressed == true ||
                  isCard2Pressed == true ||
                  isCard3Pressed == true ||
                  isCard4Pressed == true
                ) {
                  setIsCard8Pressed(true)
                }
              }}
            >
              <ThinBlackCardNumberBox
                isCardPressed={isCard8Pressed}
                disableCard={isCard3And8Pressed}
                turnCardGreen={isCard8Pressed && isCard3Pressed}
                turnCardRed={
                  (isCard8Pressed && isCard1Pressed) ||
                  (isCard8Pressed && isCard2Pressed) ||
                  (isCard8Pressed && isCard4Pressed)
                }
              >
                <ThinBlackCardInsideNumber disableCard={isCard3And8Pressed}>
                  8
                </ThinBlackCardInsideNumber>
              </ThinBlackCardNumberBox>
              <ThinBlackCardWhiteText disableCard={isCard3And8Pressed}>
                ㅑ
              </ThinBlackCardWhiteText>
            </ThinBlackCardBase>
          </ThinBlackCardVStack>
        </MajorHStack>
      </LeftRightParentHStack>
      <CheckAnswerButtonBase>
        <CheckAnswerButtonText>Check Answer</CheckAnswerButtonText>
      </CheckAnswerButtonBase>
    </ContentVStack>
  )
}

const MajorHStack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
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

// Right Side Cards Start

const ThinBlackCardVStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 20px;
`

const ThinBlackCardBase = styled.div<{
  isCardPressed: Boolean
  turnCardGreen: Boolean
  turnCardRed: Boolean
  disableCard: Boolean
}>`
  width: 310.303px;
  height: 60.452px;
  flex-shrink: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${(props) =>
    props.isCardPressed == true &&
    props.turnCardGreen == false &&
    props.turnCardRed == false &&
    props.disableCard == false
      ? '#A346E9;'
      : props.isCardPressed == true &&
        props.turnCardGreen == true &&
        props.turnCardRed == false &&
        props.disableCard == false
      ? '#00D25E'
      : props.isCardPressed == true &&
        props.turnCardGreen == false &&
        props.turnCardRed == true &&
        props.disableCard == false
      ? '#FF3B2F'
      : props.disableCard == true
      ? 'rgba(20, 20, 20, 0.30);'
      : '#141414'};

  gap: 100px;
  cursor: pointer;
`

const ThinBlackCardWhiteText = styled.div<{
  disableCard: Boolean
}>`
  color: ${(props) =>
    props.disableCard ? 'rgba(255, 255, 255, 0.30);' : '#fff'};
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const ThinBlackCardNumberBox = styled.div<{
  disableCard: Boolean
  isCardPressed: Boolean
  turnCardGreen: Boolean
  turnCardRed: Boolean
}>`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 8px;
  border: ${(props) =>
    props.disableCard
      ? '1px solid rgba(255, 255, 255, 0.30);'
      : '1px solid #fff;'};
  background: ${(props) =>
    props.isCardPressed == true &&
    props.turnCardGreen == false &&
    props.turnCardRed == false &&
    props.disableCard == false
      ? '#A346E9;'
      : props.isCardPressed == true &&
        props.turnCardGreen == true &&
        props.turnCardRed == false &&
        props.disableCard == false
      ? '#00D25E'
      : props.isCardPressed == true &&
        props.turnCardGreen == false &&
        props.turnCardRed == true &&
        props.disableCard == false
      ? '#FF3B2F'
      : props.disableCard == true
      ? 'transparent;'
      : '#27272B'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`

const ThinBlackCardInsideNumber = styled.div<{
  disableCard: Boolean
}>`
  color: ${(props) =>
    props.disableCard ? 'rgba(255, 255, 255, 0.30);' : '#fff'};
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-top: 1px;
`

// Right Side Cards End

// Check Answer Button Start

const CheckAnswerButtonText = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 600;
`

const CheckAnswerButtonBase = styled.div`
  width: 252.98px;
  height: 51.491px;
  flex-shrink: 0;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(255, 56, 128, 0.3) 0%,
    rgba(142, 73, 255, 0.3) 100%
  );
`

// Check Answer Button End
