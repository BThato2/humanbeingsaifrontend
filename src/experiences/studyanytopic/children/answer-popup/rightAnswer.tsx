import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import GreenCheckMark from '../../../../assets/vectors/greenCheckMark.svg'
import useQuestionSwitcher from 'statemanagers/studyanytopic/questionManager'
import useStudyAnythingSwitcher from 'statemanagers/studyanytopic/studyAnythingManager'
import { motion } from 'framer-motion'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'
//@ts-ignore
//@ts-ignore
import useSound from 'use-sound'

export default function RightAnswer() {
  const questionNumber = useQuestionSwitcher(
    (state: any) => state.questionNumber,
  )
  const [counter, setCounter] = useState(0)
  const [play] = useSound('/audio/correct.mp3')

  return (
    <GreenBackground>
      <ContentHWrapper
        onMouseOver={() => {
          if (counter == 0) {
            play()
            setCounter(counter + 1)
          }
        }}
      >
        <MiniHStack>
          <Image src={GreenCheckMark} width="80%" height="80%" />
          <GreatText>Great!</GreatText>
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
                showRightAnswer: false,
              })
            }}
          >
            <ContinueButtonText>Continue</ContinueButtonText>
          </ContinueButtonBase>
        </motion.nav>
      </ContentHWrapper>
    </GreenBackground>
  )
}

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

const GreenBackground = styled.div`
  width: 1347px;
  height: 164px;
  border-radius: 0px 0px 20px 20px;
  background: #00d25e;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GreatText = styled.div`
  color: #005e49;
  font-size: 36px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const ContinueButtonBase = styled.div`
  width: 226px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #005e49;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ContinueButtonText = styled.div`
  color: #fff;
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
`
