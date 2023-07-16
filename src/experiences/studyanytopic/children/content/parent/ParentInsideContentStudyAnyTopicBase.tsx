import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import LeftCard from '../children/elements/leftCard'
import ProgressBar from '../children/elements/progressBar'
import AvatarCircle from '../children/elements/avatarCircle'
//@ts-ignore
import Question1 from '../children/content/question1'
import useQuestionSwitcher from 'statemanagers/studyanytopic/questionManager'
import Question2 from '../children/content/question2'
import Question3 from '../children/content/question3'

export default function ParentInsideContentStudyAnyTopicBase() {
  const questionNumber = useQuestionSwitcher(
    (state: any) => state.questionNumber,
  )

  return (
    <VStackWrapper>
      <ContentWrapper>
        <LeftCard />
        <ProgressBar />
      </ContentWrapper>
      <RelativePositioner>
        <AbsolutePositioner>
          <AvatarCircle />
        </AbsolutePositioner>
        <PrimaryBlackContentBox>
          {questionNumber == 1 ? (
            <Question1 />
          ) : questionNumber == 2 ? (
            <Question2 />
          ) : (
            <Question3 />
          )}
        </PrimaryBlackContentBox>
      </RelativePositioner>
    </VStackWrapper>
  )
}

const RelativePositioner = styled.div`
  position: relative;
`

const AbsolutePositioner = styled.div`
  position: absolute;
  right: 0px;
  top: -80px;
`

const VStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 25px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 160px;
  margin-top: 50px;
`

// TOP PORTION

/// PrimaryBlackContentBox Start

const PrimaryBlackContentBox = styled.div`
  width: 1235px;
  height: 622px;
  border-radius: 8.752px;
  background: rgba(31, 32, 35, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`

/// PrimaryBlackContentBox End
