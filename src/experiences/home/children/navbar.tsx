//###################################//
//###################################//
//###################################//
// This represents the navbar for the home screen
//###################################//
//###################################//
//###################################//
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import hamburgerMenu from '../../../assets/vectors/hamburgerMenu.svg'
import useSettingsOpenCloseSwitcher from 'statemanagers/settingsOpenCloseManager'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'
import { motion } from 'framer-motion'
// Main Parent Should always contain background + all the other elements that come together to make it special

export default function NavBar() {
  const [isHovered1, setIsHovered1] = useState(false)
  return (
    <ParentWrapper>
      <PositionalWrapper>
        <ContentWrapper>
          <CursorPointerDiv
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <RelativePositioner>
              <AbsolutePositioner>
                {isHovered1 ? (
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
                      <SettingsPopUpText>Settings</SettingsPopUpText>
                    </SettingsPopUpBackground>
                  </motion.nav>
                ) : null}
              </AbsolutePositioner>
              <motion.nav
                whileHover={{
                  scale: 1,
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  src={hamburgerMenu}
                  width="38%"
                  height="38%"
                  onClick={() => {
                    useSettingsOpenCloseSwitcher.setState({
                      settingsIsOpen: true,
                    }),
                      useCurrentExperienceSwitcher.setState({
                        currentExperienceIs: 'settings',
                      })
                  }}
                />
              </motion.nav>
            </RelativePositioner>
          </CursorPointerDiv>
          <TextWrapper>
            <PrimaryText>Humanbeings AI</PrimaryText>
            <LineDivider />
            <SecondaryText>A better way to use the internet</SecondaryText>
          </TextWrapper>
        </ContentWrapper>
      </PositionalWrapper>
    </ParentWrapper>
  )
}

const RelativePositioner = styled.div`
  position: relative;
`

const AbsolutePositioner = styled.div`
  position: absolute;
  top: 50px;
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

const HamburgerBackground = styled.div`
  width: 60px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: transparent;
  :hover {
    background: linear-gradient(180deg, #651734 0%, #3a1d65 100%);
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

const CursorPointerDiv = styled.div`
  cursor: pointer;
`

const ParentWrapper = styled.div`
  display: flex;
  width: 100vw;
  padding-top: 40px; // Delete this later July 1st
`

const PositionalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 750px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 675px;
`

const PrimaryText = styled.div`
  color: #fff;
  font-size: 40px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const LineDivider = styled.div`
  width: 46px;
  height: 4px;
  transform: rotate(-90deg);
  flex-shrink: 0;
  border-radius: 2px;
  background: #fff;
`

const SecondaryText = styled.div`
  color: #fff;
  font-size: 24px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
