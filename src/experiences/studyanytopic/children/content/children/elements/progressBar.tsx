import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import useQuestionSwitcher from 'statemanagers/studyanytopic/questionManager'

export default function ProgressBar() {
  const questionNumber = useQuestionSwitcher(
    (state: any) => state.questionNumber,
  )

  return (
    <ProgressWrapper>
      <ProgressBarBase>
        {questionNumber == 1 ? (
          <ProgressBarGradient />
        ) : questionNumber == 2 ? (
          <ProgressBarGradient2 />
        ) : (
          <ProgressBarGradient3 />
        )}
      </ProgressBarBase>
      <ProgressBarNumberBox>
        {questionNumber == 1 ? (
          <SmallWhiteProgressBarNumberBoxText>
            50%
          </SmallWhiteProgressBarNumberBoxText>
        ) : questionNumber == 2 ? (
          <SmallWhiteProgressBarNumberBoxText>
            52%
          </SmallWhiteProgressBarNumberBoxText>
        ) : (
          <SmallWhiteProgressBarNumberBoxText>
            54%
          </SmallWhiteProgressBarNumberBoxText>
        )}
      </ProgressBarNumberBox>
    </ProgressWrapper>
  )
}

/// Progress Bar Start

const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const ProgressBarBase = styled.div`
  width: 370px;
  height: 14px;
  flex-shrink: 0;
  border-radius: 9.25px;
  background: #ebebeb;
`

const ProgressBarGradient = styled.div`
  width: 197px;
  height: 14px;
  flex-shrink: 0;
  border-radius: 46.25px;
  background: linear-gradient(172deg, #ff377f 0%, #8e48ff 100%);
  box-shadow: 0px 2.3125px 9.25px 2.3125px rgba(0, 0, 0, 0.1);
`

const ProgressBarGradient2 = styled.div`
  width: 205px;
  height: 14px;
  flex-shrink: 0;
  border-radius: 46.25px;
  background: linear-gradient(172deg, #ff377f 0%, #8e48ff 100%);
  box-shadow: 0px 2.3125px 9.25px 2.3125px rgba(0, 0, 0, 0.1);
`

const ProgressBarGradient3 = styled.div`
  width: 213px;
  height: 14px;
  flex-shrink: 0;
  border-radius: 46.25px;
  background: linear-gradient(172deg, #ff377f 0%, #8e48ff 100%);
  box-shadow: 0px 2.3125px 9.25px 2.3125px rgba(0, 0, 0, 0.1);
`

const ProgressBarNumberBox = styled.div`
  width: 71px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #36373c;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SmallWhiteProgressBarNumberBoxText = styled.div`
  color: #fff;
  font-size: 28px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

/// Progress Bar End
