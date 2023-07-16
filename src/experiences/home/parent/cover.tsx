//###################################//
//###################################//
//###################################//
// This represents the parent component for the home page for the application
//###################################//
//###################################//
//###################################//

import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import NavBar from '../children/navbar'
// Main Components for the Home Screen Below
import MainParentNavigateAnywhere from '../children/homecards/navigateanywhere/mainparentnavigateanywhere'
import MainParentStudyAnyTopic from '../children/homecards/studyanytopic/mainparentstudyanytopic'
import MainParentLearnAndCreateAnything from '../children/homecards/learnandcreateanything/parent/mainparentlearnandcreateanything'
import MainParentFriendsAvatars from '../children/homecards/friendsavatars/mainparentfriendsavatars'
import MainParentDiscoverAvatars from '../children/homecards/discoveravatars/mainparentdiscoveravatar'
// Main Parent Should always contain background + all the other elements that come together to make it special
import { motion } from 'framer-motion'
import ModalParent from './modalparent'

//!!!!! IMPORTANT REMINDER TO SET THE SCREEN TO AUTOMATICALLY ADJUST TO 80% !!!!!//
//!!!!! DONT FORGET COLIN !!!!!//

const Cover = () => {
  const Background = () => {
    return (
      <UIWrapper>
        <PurpleBlob />
        <RedBlob />
      </UIWrapper>
    )
  }

  return (
    <RelativeDiv>
      <AbsoluteDiv>
        <Background />
      </AbsoluteDiv>
      <Foreground>
        <ModalParent />
        <ParentWrapper>
          <ContentWrapper>
            {/* Home Content Start */}
            <MarginDiv>
              <motion.nav
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: 'spring',
                  damping: 10,
                  mass: 0.75,
                  stiffness: 100,
                  delay: 0.5,
                }}
              >
                <NavBar />
              </motion.nav>
            </MarginDiv>
            <motion.nav
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 10,
                mass: 0.75,
                stiffness: 100,
                duration: 0.2,
                delay: 0.6,
              }}
            >
              <FlexWrapperHorizontal>
                <FlexWrapperVertical>
                  <MainParentNavigateAnywhere />
                  <MainParentStudyAnyTopic />
                </FlexWrapperVertical>
                <MainParentLearnAndCreateAnything />
                <FlexWrapperVertical>
                  <MainParentFriendsAvatars />
                  <MainParentDiscoverAvatars />
                </FlexWrapperVertical>
              </FlexWrapperHorizontal>
            </motion.nav>
            {/* Home Content End */}
          </ContentWrapper>
        </ParentWrapper>
      </Foreground>
    </RelativeDiv>
  )
}

export default Cover

// Background
const UIWrapper = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;
`

const PurpleBlob = styled.div`
  border-radius: 816px;
  background: #8e48ff;
  filter: blur(100px);
  width: 780px;
  height: 816px;
  flex-shrink: 0;
  position: absolute;
  top: -550px;
  left: -550px;
`

const RedBlob = styled.div`
  width: 780px;
  height: 816px;
  flex-shrink: 0;
  border-radius: 816px;
  background: #ff377f;
  filter: blur(100px);
  position: absolute;
  bottom: -550px;
  right: -550px;
`

// Layers on the foreground

const ParentWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentWrapper = styled.div`
  width: 75vw;
`

const MarginDiv = styled.div`
  margin-bottom: 6vh;
`

const AbsoluteDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`

const RelativeDiv = styled.div`
  position: relative;
`

const FlexWrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const FlexWrapperHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`
