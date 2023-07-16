import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

//@ts-ignore
import expediaLogo from '../../../../../assets/images/connectionsLogos/expediaLogo.png'
//@ts-ignore
import zapierLogo from '../../../../../assets/images/connectionsLogos/zapierLogo.png'
//@ts-ignore
import spotifyLogo from '../../../../../assets/images/connectionsLogos/spotifyLogo.png'
//@ts-ignore
import instacartLogo from '../../../../../assets/images/connectionsLogos/instacartLogo.png'
//@ts-ignore
import notionLogo from '../../../../../assets/images/connectionsLogos/notionLogo.png'
//@ts-ignore
import beeperLogo from '../../../../../assets/images/connectionsLogos/beeperLogo.png'
//@ts-ignore
import klarnaLogo from '../../../../../assets/images/connectionsLogos/klarnaLogo.png'
//@ts-ignore
import figmaLogo from '../../../../../assets/images/connectionsLogos/figmaLogo.png'
//@ts-ignore
import opentableLogo from '../../../../../assets/images/connectionsLogos/opentableLogo.png'
//@ts-ignore
import switchAvatarButton from '../../../../../assets/vectors/switchAvatarButton.svg'
import { motion } from 'framer-motion'

export default function InsideContentCategoriesSettings() {
  return (
    <ContentWrapper>
      <WhiteTitleText>Add New Partner Categories</WhiteTitleText>
      <VStackWrapper>
        <HStackWrapper>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <BackgroundRectangle>
                <LinearGradientBorderRadiusSquare>
                  <Image src={expediaLogo} width="75%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>Expedia</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    Bring your trip plans to life with hotels, flights & more
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <BackgroundRectangle>
                <AbsolutePositioner>
                  <LinearGradientButton>
                    <Image src={switchAvatarButton} width="18%" height="18%" />
                  </LinearGradientButton>
                </AbsolutePositioner>
                <LinearGradientBorderRadiusSquare>
                  <Image src={zapierLogo} width="70%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>Zapier</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    Connect to 5,000+ apps like Gmail & HubSpot
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <BackgroundRectangle>
                <AbsolutePositioner>
                  <LinearGradientButton>
                    <Image src={switchAvatarButton} width="18%" height="18%" />
                  </LinearGradientButton>
                </AbsolutePositioner>
                <LinearGradientBorderRadiusSquare>
                  <Image src={spotifyLogo} width="70%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>Spotify</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    Have your music & podcasts always ready
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
        </HStackWrapper>
        <HStackWrapper>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <BackgroundRectangle>
                <AbsolutePositioner>
                  <LinearGradientButton>
                    <Image src={switchAvatarButton} width="18%" height="18%" />
                  </LinearGradientButton>
                </AbsolutePositioner>
                <LinearGradientBorderRadiusSquare>
                  <Image src={instacartLogo} width="70%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>Instacart</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    Order from your favorite local grocery stores
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <BackgroundRectangle>
                <AbsolutePositioner>
                  <LinearGradientButton>
                    <Image src={switchAvatarButton} width="18%" height="18%" />
                  </LinearGradientButton>
                </AbsolutePositioner>
                <LinearGradientBorderRadiusSquare>
                  <Image src={notionLogo} width="70%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>Notion</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    Find & store your most important documents
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <BackgroundRectangle>
                <AbsolutePositioner>
                  <LinearGradientButton>
                    <Image src={switchAvatarButton} width="18%" height="18%" />
                  </LinearGradientButton>
                </AbsolutePositioner>
                <LinearGradientBorderRadiusSquare>
                  <Image src={beeperLogo} width="70%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>Beeper</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    All your messaging apps inside of a single platform
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
        </HStackWrapper>
        <HStackWrapper>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <BackgroundRectangle>
                <AbsolutePositioner>
                  <LinearGradientButton>
                    <Image src={switchAvatarButton} width="18%" height="18%" />
                  </LinearGradientButton>
                </AbsolutePositioner>
                <LinearGradientBorderRadiusSquare>
                  <Image src={klarnaLogo} width="70%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>Klarna</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    Search & compare prices from tons of online shops
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <BackgroundRectangle>
                <AbsolutePositioner>
                  <LinearGradientButton>
                    <Image src={switchAvatarButton} width="18%" height="18%" />
                  </LinearGradientButton>
                </AbsolutePositioner>
                <LinearGradientBorderRadiusSquare>
                  <Image src={figmaLogo} width="50%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>Figma</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    Bring your creations with a new design tool
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
          <motion.nav
            whileHover={{
              scale: 1.02,
              transition: { type: 'ease-in-out', duration: 0.2 },
            }}
          >
            <RelativePositioner
              onClick={() => {
                alert('FEATURE UNDER CONSTRUCTION 🚧')
              }}
            >
              <BackgroundRectangle>
                <AbsolutePositioner>
                  <LinearGradientButton>
                    <Image src={switchAvatarButton} width="18%" height="18%" />
                  </LinearGradientButton>
                </AbsolutePositioner>
                <LinearGradientBorderRadiusSquare>
                  <Image src={opentableLogo} width="80%" height="70%" />
                </LinearGradientBorderRadiusSquare>
                <TextWrapper>
                  <AllCardTitleCopy>OpenTable</AllCardTitleCopy>
                  <AllCardGrayTextCopy>
                    Provides a direct link to book top spots near you
                  </AllCardGrayTextCopy>
                </TextWrapper>
              </BackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
        </HStackWrapper>
      </VStackWrapper>
    </ContentWrapper>
  )
}

const LinearGradientButton = styled.div`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 28px;
  background: var(
    --custom-linear,
    linear-gradient(135deg, #ff3880 0%, #8e49ff 100%)
  );
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const RelativePositioner = styled.div`
  position: relative;
  cursor: pointer;
`

const AbsolutePositioner = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1002;
`

const WhiteTitleText = styled.div`
  color: #fff;
  font-size: 32px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

// TOP PORTION

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 60px;
`

// CARD WRAPPERS (VStack and HStack)
const VStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
`

const HStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

// CARDS

const BackgroundRectangle = styled.div`
  width: 352px;
  height: 106px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(31, 32, 35, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 20px;
  :hover {
    box-shadow: 0px -4px 15px 0px rgba(215, 48, 111, 0.75),
      0px 4px 15px 0px rgba(142, 73, 255, 0.75);
  }
`

const LinearGradientBorderRadiusSquare = styled.div`
  width: 106px;
  height: 106px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #ff3880 0%, #8e49ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 9px;
`

const AllCardTitleCopy = styled.div`
  font-size: 28px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fff;
`

const AllCardGrayTextCopy = styled.div`
  color: #b9b9b9;
  font-size: 18px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`
