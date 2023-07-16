import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import Roleplay from '../../../../../../../../assets/images/categorycard/roleplay.png'
//@ts-ignore
import Information from '../../../../../../../../assets/images/categorycard/information.png'
//@ts-ignore
import ImageCreation from '../../../../../../../../assets/images/categorycard/imagecreation.png'
//@ts-ignore
import VideoCreation from '../../../../../../../../assets/images/categorycard/videocreation.png'
//@ts-ignore
import Airbnb from '../../../../../../../../assets/images/categorycard/airbnb.png'
//@ts-ignore
import Cruise from '../../../../../../../../assets/images/categorycard/cruise.png'
//@ts-ignore
import Fiverr from '../../../../../../../../assets/images/categorycard/fiverr.png'
//@ts-ignore
import DoorDash from '../../../../../../../../assets/images/categorycard/doordash.png'
import useCategoryCardSwitcher from 'statemanagers/categoryCardManager'
import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'

export default function CategoryCardNew() {
  //// IN CHARGE OF MAKING ENTER/RETURN A TRIGGER KEY
  useEffect(() => {
    const listener = (event: any) => {
      if (event.keyCode === 8 || event.keyCode === 46) {
        console.log('Delete key was pressed. Run your function.')
        event.preventDefault()
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
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  return (
    <PrimaryCard>
      {/* SECTION 1 */}
      <ContentWrapper>
        <GroupWrapper>
          <GrayTitleText>Native Categories</GrayTitleText>
          <CategoryWrapper
            onClick={() => {
              useCategoryCardSwitcher.setState({
                currentCategory: 'information',
              })
            }}
          >
            <Image src={Roleplay} width="70%" height="70%" />
            <TextVStack>
              <WhiteCopyText>Conversation</WhiteCopyText>
              <GrayCopyText>Talk to your avatar</GrayCopyText>
            </TextVStack>
          </CategoryWrapper>
          <CategoryWrapper
            onClick={() => {
              useCategoryCardSwitcher.setState({
                currentCategory: 'image',
              })
            }}
          >
            <Image src={ImageCreation} width="70%" height="70%" />
            <TextVStack>
              <WhiteCopyText>Image Creation</WhiteCopyText>
              <GrayCopyText>Anything from your imagination</GrayCopyText>
            </TextVStack>
          </CategoryWrapper>
          <CategoryWrapper
            onClick={() => {
              useCategoryCardSwitcher.setState({
                currentCategory: 'video',
              })
            }}
          >
            <Image src={VideoCreation} width="70%" height="70%" />
            <TextVStack>
              <WhiteCopyText>Video Creation</WhiteCopyText>
              <GrayCopyText>High-quality and rendered fast</GrayCopyText>
            </TextVStack>
          </CategoryWrapper>
          <SmallGrayLine />
        </GroupWrapper>
        {/* SECTION 2 */}
        <GroupWrapper>
          <GroupWrapper>
            <GrayTitleText>Partner Categories</GrayTitleText>
            <CategoryWrapper
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <Image src={Airbnb} width="70%" height="70%" />
              <TextVStack>
                <WhiteCopyText>Airbnb</WhiteCopyText>
                <GrayCopyText>Book rooms fast & easily</GrayCopyText>
              </TextVStack>
            </CategoryWrapper>
            <CategoryWrapper
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <Image src={Cruise} width="70%" height="70%" />
              <TextVStack>
                <WhiteCopyText>Cruise</WhiteCopyText>
                <GrayCopyText>Get a car super duper quick</GrayCopyText>
              </TextVStack>
            </CategoryWrapper>
            <CategoryWrapper
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <Image src={Fiverr} width="70%" height="70%" />
              <TextVStack>
                <WhiteCopyText>Fiverr</WhiteCopyText>
                <GrayCopyText>Designs made on the fly</GrayCopyText>
              </TextVStack>
            </CategoryWrapper>
            <CategoryWrapper
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <Image src={DoorDash} width="70%" height="70%" />
              <TextVStack>
                <WhiteCopyText>DoorDash</WhiteCopyText>
                <GrayCopyText>Food delivered to your house</GrayCopyText>
              </TextVStack>
            </CategoryWrapper>
            <SmallGrayLine />
          </GroupWrapper>
        </GroupWrapper>
      </ContentWrapper>
    </PrimaryCard>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: left;
  justify-content: left;
  padding-left: 20px;
  padding-top: 20px;
  gap: 20px;
`

const PrimaryCard = styled.div`
  width: 391px;
  height: 485px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #2c2c2c;
  display: flex;
  flex-direction: column;
`

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: left;
  align-items: left;
`

const GrayTitleText = styled.div`
  color: #b9b9b9;
  font-family: Proxima Soft;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`

const SmallGrayLine = styled.div`
  width: 320px;
  height: 1px;
  flex-shrink: 0;
  background: #363636;
`
// Categories

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  width: 98%;
  cursor: pointer;
  :hover {
    border-radius: 8px;
    background: #404040;
  }
`

const TextVStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: left;
  align-items: left;
`

const WhiteCopyText = styled.div`
  color: #fff;
  font-family: Proxima Soft;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const GrayCopyText = styled.div`
  color: #b9b9b9;
  font-family: Proxima Soft;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
