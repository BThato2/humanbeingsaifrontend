import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import RedXMark from '../../../../assets/vectors/redXMark.svg'
import useQuestionSwitcher from 'statemanagers/studyanytopic/questionManager'
import useStudyAnythingSwitcher from 'statemanagers/studyanytopic/studyAnythingManager'
import { motion } from 'framer-motion'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'
//@ts-ignore
import useSound from 'use-sound'

export default function WrongAnswer() {
  const questionNumber = useQuestionSwitcher(
    (state: any) => state.questionNumber,
  )
  const [counter, setCounter] = useState(0)
  const [play] = useSound('/audio/incorrect.mp3')

  return (
    <RedBackground>
      <ContentHWrapper
        onMouseOver={() => {
          if (counter == 0) {
            play()
            setCounter(counter + 1)
          }
        }}
      >
        <MiniHStack>
          <Image src={RedXMark} width="80%" height="80%" />
          <TextVStack>
            <RedText>Incorrect!</RedText>
            {questionNumber === 1 ? (
              <RedTextSmall>correct solution: na</RedTextSmall>
            ) : (
              <RedTextSmall>correct solution: ㅑ</RedTextSmall>
            )}
          </TextVStack>
        </MiniHStack>
        <motion.nav
          whileHover={{
            scale: 1.02,
            transition: { type: 'ease-in-out', duration: 0.25 },
          }}
        >
          <ContinueButtonBase
            onClick={() => {
              if (questionNumber === 1 || questionNumber === 2) {
                useQuestionSwitcher.setState({
                  questionNumber: questionNumber + 1,
                })
              }
              if (questionNumber === 3) {
                alert('ADDITIONAL QUESTIONS ARE UNDER CONSTRUCTION 🚧')
                useCurrentExperienceSwitcher.setState({
                  currentExperienceIs: 'settings',
                })
                useQuestionSwitcher.setState({
                  questionNumber: 1,
                })
              }
              useStudyAnythingSwitcher.setState({
                showWrongAnswer: false,
              })
            }}
          >
            <ContinueButtonText>Continue</ContinueButtonText>
          </ContinueButtonBase>
        </motion.nav>
      </ContentHWrapper>
    </RedBackground>
  )
}

const TextVStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 5px;
`

const ContentHWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  align-items: center;
`

const MiniHStack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const RedBackground = styled.div`
  width: 1347px;
  height: 164px;
  border-radius: 0px 0px 20px 20px;
  background: #ff3b2f;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RedText = styled.div`
  color: #8c1900;
  font-size: 32px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const RedTextSmall = styled.div`
  color: #8c1900;
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ContinueButtonBase = styled.div`
  width: 226px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #8c1900;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ContinueButtonText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
`
