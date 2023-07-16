import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import useSettingsOpenCloseSwitcher from 'statemanagers/settingsOpenCloseManager'
import { motion } from 'framer-motion'
import Profile from '../children/sidebar-content/firstThree/profile'
import Categories from '../children/sidebar-content/firstThree/categories'
import Actions from '../children/sidebar-content/firstThree/actions'
import BottomInfo from '../children/sidebar-content/bottominfo'
import Image from 'next/image'
//@ts-ignore
import BackgroundSettingsGradient from '../../../assets/images/backgroundSettingsGradient.png'

export default function TheMainParentSettings() {
  const settingsIsOpen = useSettingsOpenCloseSwitcher(
    (state: any) => state.settingsIsOpen,
  )
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    if (isHover == false) {
      useSettingsOpenCloseSwitcher.setState({
        settingsIsOpen: false,
      })
    }
  }, [isHover])

  return (
    <div>
      {settingsIsOpen == true ? (
        <motion.nav
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.12 }}
        >
          <CardAndShadowWrapper>
            <RelativeDiv>
              <AbsoluteDiv>
                <PrimaryCardContentWrapper>
                  <Profile />
                  <WhiteLineBreak />
                  <Categories />
                  <WhiteLineBreak />
                  <Actions />
                  <BottomInfo />
                </PrimaryCardContentWrapper>
              </AbsoluteDiv>
              <Image
                src={BackgroundSettingsGradient}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                width="565%"
                height="6000%"
              />
            </RelativeDiv>
            <LinearGradientShadow />
          </CardAndShadowWrapper>
        </motion.nav>
      ) : null}
    </div>
  )
}

const AbsoluteDiv = styled.div`
  position: absolute;
  z-index: 1000;
`

const RelativeDiv = styled.div`
  display: inline-block;
  position: relative;
`

const WhiteLineBreak = styled.div`
  width: 459px;
  height: 1px;
  flex-shrink: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  background: #fff;
  margin-left: 10px;
`

const CardAndShadowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const PrimaryCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin-left: 40px;
  margin-top: 55px;
  gap: 65px;
`

const LinearGradientShadow = styled.div`
  width: 200px;
  height: 250vw;
  flex-shrink: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`
