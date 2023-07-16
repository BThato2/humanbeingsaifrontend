import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

//@ts-ignore
import sethStorlieProfilePicture from '../../../assets/images/sethStorlieProfilePicture.png'
//@ts-ignore
import baesuzySquareRadiusPicture from '../../../assets/images/friendsavatars/baesuzySquareRadiusPicture.png'
//@ts-ignore
import natfriedmanSquareRadiusPicture from '../../../assets/images/friendsavatars/natfriedmanSquareRadiusPicture.png'
//@ts-ignore
import eladgilSquareRadiusPicture from '../../../assets/images/friendsavatars/eladgilSquareRadiusPicture.png'
//@ts-ignore
import danielgrossSquareRadiusPicture from '../../../assets/images/friendsavatars/danielgrossSquareRadiusPicture.png'
//@ts-ignore
import lachygroomSquareRadiusPicture from '../../../assets/images/friendsavatars/lachygroomSquareRadiusPicture.png'
//@ts-ignore
import sarahwangSquareRadiusPicture from '../../../assets/images/friendsavatars/sarahwangSquareRadiusPicture.png'
//@ts-ignore
import ashKetchumSquareRadiusPicture from '../../../assets/images/friendsavatars/ashKetchumSquareRadiusPicture.png'
//@ts-ignore
import sarahguoSquareRadiusPicture from '../../../assets/images/friendsavatars/sarahguoSquareRadiusPicture.png'
//@ts-ignore
import ronconwaySquareRadiusPicture from '../../../assets/images/friendsavatars/ronconwaySquareRadiusPicture.png'
//@ts-ignore
import switchAvatarButton from '../../../assets/vectors/switchAvatarButton.svg'
//@ts-ignore
import tiktokLogo from '../../../assets/images/friendsavatars/tiktokLogo.svg'
import { motion } from 'framer-motion'

export default function InsideContentFriendsAvatars() {
  return (
    <ContentWrapper>
      <MajorHStack>
        <TitleWrapper>
          <LinearGradientCircle>
            <Image src={sethStorlieProfilePicture} width="80%" height="80%" />
          </LinearGradientCircle>
          <BoldWhiteText>Seth Storlie’s Avatar Catalog</BoldWhiteText>
        </TitleWrapper>
        <GrayBackground>
          <GrayBackgroundText>
            Connected <br /> TikTok Friends
          </GrayBackgroundText>
          <Image src={tiktokLogo} width="45%" height="45%" />
        </GrayBackground>
      </MajorHStack>
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
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={baesuzySquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />
                  <TextWrapper>
                    <InactiveCardTitleCopy>Bae Suzy</InactiveCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Active!</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 6 hours
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
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
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={natfriedmanSquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />
                  <TextWrapper>
                    <AllCardTitleCopy>Nat Friedman</AllCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Inactive</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 3 days
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
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
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={eladgilSquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />

                  <TextWrapper>
                    <AllCardTitleCopy>Elad Gil</AllCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Inactive</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 12 hours
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
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
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={danielgrossSquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />
                  <TextWrapper>
                    <AllCardTitleCopy>Daniel Gross</AllCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Inactive</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 4 hours
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
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
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={lachygroomSquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />
                  <TextWrapper>
                    <AllCardTitleCopy>Lachy Groom</AllCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Inactive</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 2 hours
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
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
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={sarahwangSquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />
                  <TextWrapper>
                    <AllCardTitleCopy>Sarah Wang</AllCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Inactive</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 14 days
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
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
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={ashKetchumSquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />

                  <TextWrapper>
                    <AllCardTitleCopy>Ash Ketchum</AllCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Inactive</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 6 days
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
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
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={sarahguoSquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />

                  <TextWrapper>
                    <AllCardTitleCopy>Sarah Guo</AllCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Inactive</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 3 hours
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
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
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <SuperBackgroundRectangle>
                <BackgroundRectangle>
                  <Image
                    src={ronconwaySquareRadiusPicture}
                    width="100%"
                    height="100%"
                  />

                  <TextWrapper>
                    <AllCardTitleCopy>Ron Conway</AllCardTitleCopy>
                    <MiniTextWrapper>
                      <AllCardGrayTextCopy>Inactive</AllCardGrayTextCopy>
                      <AllCardGrayTextCopy>
                        Total Time • 7 hours
                      </AllCardGrayTextCopy>
                    </MiniTextWrapper>
                  </TextWrapper>
                </BackgroundRectangle>
              </SuperBackgroundRectangle>
            </RelativePositioner>
          </motion.nav>
        </HStackWrapper>
      </VStackWrapper>
    </ContentWrapper>
  )
}

const MajorHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  width: 100%;
`

const GrayBackground = styled.div`
  width: 250px;
  height: 75px;
  border-radius: 16.286px;
  background: #36373c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 10px;
`

const GrayBackgroundText = styled.div`
  color: #fff;
  font-family: Proxima Soft;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
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

// TOP PORTION

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 60px;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: left;
  margin-bottom: 20px;
`

const LinearGradientCircle = styled.div`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(
    --custom-linear,
    linear-gradient(135deg, #ff3880 0%, #8e49ff 100%)
  );
  display: flex;
  justify-content: center;
  align-items: center;
`

const BoldWhiteText = styled.div`
  color: #fff;
  font-size: 34px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

// CARD WRAPPERS (VStack and HStack)
const VStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;
`

const HStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

// CARDS

const SuperBackgroundRectangle = styled.div`
  background: linear-gradient(135deg, #ff3880 0%, #8e49ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 355px;
  height: 105px;
  flex-shrink: 0;
  border-radius: 10px;
  :hover {
    box-shadow: 0px -6px 10px 0px rgba(215, 48, 111, 0.4),
      0px 6px 10px 0px rgba(142, 73, 255, 0.4);
  }
`

const BackgroundRectangle = styled.div`
  border-radius: 9px;
  background: rgba(31, 32, 35, 1);
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 20px;
  width: 350px;
  height: 100px;
  flex-shrink: 0;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 10px;
`

const MiniTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  gap: 6px;
`

const InactiveCardTitleCopy = styled.div`
  font-size: 28px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: -webkit-linear-gradient(135deg, #8e49ff 0%, #ff3880 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  color: #fff;
  font-size: 18px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
