import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import ResetButton from '../../../../../../../assets/vectors/resetButton'
import useCategoryCardSwitcher from 'statemanagers/categoryCardManager'
import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'

export default function GrayBottomText() {
  //
  const [isHoveredCategory1, setIsHoveredCategory1] = useState(false)
  const [isHoveredCategory2, setIsHoveredCategory2] = useState(false)
  const [isHoveredCategory3, setIsHoveredCategory3] = useState(false)
  const [isHoveredCategory4, setIsHoveredCategory4] = useState(false)
  //

  const cardStatement = useCategoryCardSwitcher(
    (state: any) => state.cardStatement,
  )
  const currentCategory = useCategoryCardSwitcher(
    (state: any) => state.currentCategory,
  )
  //
  //
  ////////###############FUNCTION FOR RESETTING THE TEXTBOX##################///////////
  function Reset() {
    useCategoryCardSwitcher.setState({
      cardStatement: 'Select a prompt category',
    }),
      useCategoryCardSwitcher.setState({
        currentCategory: null,
      }),
      useLearnAndCreateSwitcher.setState({
        conversationDataRolePlay: [
          {
            name: 'Avatar',
            response_white: [
              'Hey Friend, it’s Elon. I’m taking a little break from launching rockets into space.',
              'What can I do for you?',
            ],
            response_gradient: [
              'Draft a design brief for my community bookstore’s new logo',
              'Tell me about the code within the React Github repo',
              'What are some ways to make noodles more delicious?',
            ],
            image: [''],
            video: [''],
          },
        ],
      })
  }
  return (
    <div>
      {currentCategory == null &&
      cardStatement == 'Select a prompt category' ? (
        <BelowTextWrapper>
          <SmallGrayTextUnderSearchBox1>
            Warning: You might have fun
          </SmallGrayTextUnderSearchBox1>
          <ResetButton stroke="#0E0F10" />
        </BelowTextWrapper>
      ) : currentCategory == null && cardStatement == '/' ? (
        <BelowTextWrapper
          onMouseEnter={() => setIsHoveredCategory1(true)}
          onMouseLeave={() => setIsHoveredCategory1(false)}
          onClick={() => {
            Reset()
          }}
        >
          <SmallGrayTextUnderSearchBox2>Reset</SmallGrayTextUnderSearchBox2>
          {isHoveredCategory1 ? (
            <ResetButton stroke="white" />
          ) : (
            <ResetButton stroke="#B9B9B9" />
          )}
        </BelowTextWrapper>
      ) : currentCategory == 'roleplay' ? (
        <BelowTextWrapper
          onMouseEnter={() => setIsHoveredCategory1(true)}
          onMouseLeave={() => setIsHoveredCategory1(false)}
          onClick={() => {
            Reset()
          }}
        >
          <SmallGrayTextUnderSearchBox2>
            Reset Roleplay Chat
          </SmallGrayTextUnderSearchBox2>
          {isHoveredCategory1 ? (
            <ResetButton stroke="white" />
          ) : (
            <ResetButton stroke="#B9B9B9" />
          )}
        </BelowTextWrapper>
      ) : currentCategory == 'information' ? (
        <BelowTextWrapper
          onMouseEnter={() => setIsHoveredCategory2(true)}
          onMouseLeave={() => setIsHoveredCategory2(false)}
          onClick={() => {
            Reset()
          }}
        >
          <SmallGrayTextUnderSearchBox2>
            Reset Conversation Chat
          </SmallGrayTextUnderSearchBox2>
          {isHoveredCategory2 ? (
            <ResetButton stroke="white" />
          ) : (
            <ResetButton stroke="#B9B9B9" />
          )}
        </BelowTextWrapper>
      ) : currentCategory == 'image' ? (
        <BelowTextWrapper
          onMouseEnter={() => setIsHoveredCategory3(true)}
          onMouseLeave={() => setIsHoveredCategory3(false)}
          onClick={() => {
            Reset()
          }}
        >
          <SmallGrayTextUnderSearchBox2>
            Reset Image Chat
          </SmallGrayTextUnderSearchBox2>
          {isHoveredCategory3 ? (
            <ResetButton stroke="white" />
          ) : (
            <ResetButton stroke="#B9B9B9" />
          )}
        </BelowTextWrapper>
      ) : currentCategory == 'video' ? (
        <BelowTextWrapper
          onMouseEnter={() => setIsHoveredCategory4(true)}
          onMouseLeave={() => setIsHoveredCategory4(false)}
          onClick={() => {
            Reset()
          }}
        >
          <SmallGrayTextUnderSearchBox2>
            Reset Video Chat
          </SmallGrayTextUnderSearchBox2>
          {isHoveredCategory4 ? (
            <ResetButton stroke="white" />
          ) : (
            <ResetButton stroke="#B9B9B9" />
          )}
        </BelowTextWrapper>
      ) : null}
    </div>
  )
}

const BelowTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const SmallGrayTextUnderSearchBox1 = styled.div`
  color: #b4b9be;
  font-size: 16px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const SmallGrayTextUnderSearchBox2 = styled.div`
  color: #b4b9be;
  font-size: 16px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  :hover {
    color: #ffffff;
  }
`
