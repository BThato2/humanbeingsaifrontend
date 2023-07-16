import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import ElonMuskCircularStudyPicture from '../../../../../../assets/images/elonMuskCircularStudyPicture.png'
import useQuestionSwitcher from 'statemanagers/studyanytopic/questionManager'

export default function AvatarCircle() {
  const questionNumber = useQuestionSwitcher(
    (state: any) => state.questionNumber,
  )
  const [speakingShadowOn, setSpeakingShadowOn] = useState(false)

  useEffect(() => {
    if (questionNumber === 1) {
      setSpeakingShadowOn(true)
      var delayInMilliseconds = 10000 // 10 seconds
      setTimeout(function () {
        setSpeakingShadowOn(false)
      }, delayInMilliseconds)
    }
    if (questionNumber === 2) {
      setSpeakingShadowOn(true)
      var delayInMilliseconds = 4000 // 4 seconds
      setTimeout(function () {
        setSpeakingShadowOn(false)
      }, delayInMilliseconds)
    }
    if (questionNumber === 3) {
      setSpeakingShadowOn(true)
      var delayInMilliseconds = 5000 // 5 seconds
      setTimeout(function () {
        setSpeakingShadowOn(false)
      }, delayInMilliseconds)
    }
  }, [questionNumber])

  return (
    <LinearGradientProfilePictureBackground speakingShadowOn={speakingShadowOn}>
      <Image src={ElonMuskCircularStudyPicture} width="160%" height="160%" />
    </LinearGradientProfilePictureBackground>
  )
}

/// Avatar Profile Picture Start

const LinearGradientProfilePictureBackground = styled.div<{
  speakingShadowOn: Boolean
}>`
  width: 175px;
  height: 175px;
  flex-shrink: 0;
  border-radius: 202.761px;
  background: var(
    --custom-linear,
    linear-gradient(135deg, #ff3880 0%, #8e49ff 100%)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) =>
    props.speakingShadowOn == true
      ? '0px -4px 30px 2px rgba(215, 48, 111, 0.75), 0px 4px 30px 2px rgba(142, 73, 255, 0.75)'
      : 'none'};
`

/// Avatar Profile Picture End
