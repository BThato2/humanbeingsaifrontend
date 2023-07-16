import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import AddAvatarButton from '../../../../../assets/vectors/addAvatarButton'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'
import { motion } from 'framer-motion'

export default function TitleCardDiscoverAvatars() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <PrimaryCard>
      <ContentHStack>
        <TextHStack>
          <RedText>Elon Musk</RedText>
          <LineDivider />
          <WhiteText>CEO of Tesla</WhiteText>
        </TextHStack>
        <CursorPointerDiv
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            useCurrentExperienceSwitcher.setState({
              currentExperienceIs: 'discoveravatars',
            })
          }}
        >
          {isHovered ? (
            <RelativePositioner>
              <AddAvatarButton opacity="1" />
              <AbsolutePositioner>
                <motion.nav
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: 'spring',
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
                    duration: 0.75,
                    delay: 0.15,
                  }}
                >
                  <SettingsPopUpBackground>
                    <SettingsPopUpText>Avatars</SettingsPopUpText>
                  </SettingsPopUpBackground>
                </motion.nav>
              </AbsolutePositioner>
            </RelativePositioner>
          ) : (
            <AddAvatarButton opacity="0.8" />
          )}
        </CursorPointerDiv>
      </ContentHStack>
    </PrimaryCard>
  )
}

//

const RelativePositioner = styled.div`
  position: relative;
`

const AbsolutePositioner = styled.div`
  position: absolute;
  top: 40px;
`

const SettingsPopUpBackground = styled.div`
  width: 90px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(31, 32, 35, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

const SettingsPopUpText = styled.div`
  color: #b4b9be;
  font-size: 20px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

//

const CursorPointerDiv = styled.div`
  cursor: pointer;
`

const PrimaryCard = styled.div`
  width: 429px;
  height: 71px;
  flex-shrink: 0;
  border-radius: 19.116px;
  background: #151517;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 82%;
`

const TextHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const LineDivider = styled.div`
  width: 3px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #fff;
`

const RedText = styled.div`
  color: #ff346f;
  text-align: center;
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const WhiteText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
