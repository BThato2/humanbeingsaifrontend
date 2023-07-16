import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

//@ts-ignore
import whiteX from '../../../assets/vectors/whiteX.svg'
import ParentInsideContentStudyAnyTopicBase from '../children/content/parent/ParentInsideContentStudyAnyTopicBase'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'
import { motion } from 'framer-motion'
import RightAnswer from '../children/answer-popup/rightAnswer'
import WrongAnswer from '../children/answer-popup/wrongAnswer'
import useStudyAnythingSwitcher from 'statemanagers/studyanytopic/studyAnythingManager'

// Need to Create a popup experience from anywhere inside of the app

export default function TheMainParentStudyAnyTopic() {
  const showRightAnswer = useStudyAnythingSwitcher(
    (state: any) => state.showRightAnswer,
  )

  const showWrongAnswer = useStudyAnythingSwitcher(
    (state: any) => state.showWrongAnswer,
  )

  //@ts-ignore
  //##### ALLOWS US TO CLOSE MODAL ON A CLICK OUTSIDE OF THE MODAL #####//
  const handleParentClick = (event) => {
    event.preventDefault()

    if (event.target === event.currentTarget) {
      useCurrentExperienceSwitcher.setState({
        currentExperienceIs: 'settings',
      })
    }
  }

  return (
    <BlurWrapper onClick={handleParentClick}>
      <motion.nav
        initial={{ scale: 0.95, x: 0 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ type: 'spring', bounce: 0.5, duration: 0.6 }}
      >
        <CardButtonWrapper>
          <ButtonWrapper>
            <motion.nav
              whileHover={{
                scale: 1.1,
                transition: { type: 'ease-in-out', duration: 0.25 },
              }}
            >
              <ButtonBase
                onClick={() => {
                  useCurrentExperienceSwitcher.setState({
                    currentExperienceIs: 'settings',
                  })
                }}
              >
                <Image src={whiteX} width="24%" height="22%" />
              </ButtonBase>
            </motion.nav>
          </ButtonWrapper>
          <RelativePositioner>
            <AbsolutePositioner>
              {showRightAnswer ? <RightAnswer /> : null}
              {showWrongAnswer ? <WrongAnswer /> : null}
            </AbsolutePositioner>
            <CardBase>
              <MarginBottom>
                <ParentInsideContentStudyAnyTopicBase />
              </MarginBottom>
            </CardBase>
          </RelativePositioner>
        </CardButtonWrapper>
      </motion.nav>
    </BlurWrapper>
  )
}

const RelativePositioner = styled.div`
  position: relative;
`

const AbsolutePositioner = styled.div`
  position: absolute;
  z-index: 1006;
  bottom: 0px;
`

// Background
const BlurWrapper = styled.div`
  background: rgba(18, 18, 18, 0.6);
  backdrop-filter: blur(7.5px);
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const CardBase = styled.div`
  width: 1347px;
  height: 782px;
  border-radius: 20px;
  background: #2e2e33;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonBase = styled.div`
  width: 53px;
  height: 53px;
  flex-shrink: 0;
  border-radius: 53px;
  background: #1b1b1b;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: right;
  gap: 10px;
`

const MarginBottom = styled.div`
  margin-bottom: 50px;
`
