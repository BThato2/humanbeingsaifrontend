import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import switchAvatarButton from '../../../assets/vectors/switchAvatarButton.svg'
import marioCardChangeAvatar from '../../../assets/images/avatarChangeCards/marioCardChangeAvatar.png'
import baesuzyCardChangeAvatar from '../../../assets/images/avatarChangeCards/baesuzyCardChangeAvatar.png'
import ashketchumCardChangeAvatar from '../../../assets/images/avatarChangeCards/ashketchumCardChangeAvatar.png'
import aangCardChangeAvatar from '../../../assets/images/avatarChangeCards/aangCardChangeAvatar.png'
import randymarshCardChangeAvatar from '../../../assets/images/avatarChangeCards/randymarshCardChangeAvatar.png'
import tonystarkCardChangeAvatar from '../../../assets/images/avatarChangeCards/tonystarkCardChangeAvatar.png'
import joeroganCardChangeAvatar from '../../../assets/images/avatarChangeCards/joeroganCardChangeAvatar.png'
import jeffbezosCardChangeAvatar from '../../../assets/images/avatarChangeCards/jeffbezosCardChangeAvatar.png'
import natfriedmanCardChangeAvatar from '../../../assets/images/avatarChangeCards/natfriedmanCardChangeAvatar.png'
import santaclausCardChangeAvatar from '../../../assets/images/avatarChangeCards/santaclausCardChangeAvatar.png'
import { motion } from 'framer-motion'

// sound
//@ts-ignore
import useSound from 'use-sound'
import ReactPlayer from 'react-player'

export default function InsideContentDiscoverNewAvatars() {
  const [isHovered1, setIsHovered1] = useState('#979797')
  const [isHovered2, setIsHovered2] = useState('#979797')
  const [isHovered3, setIsHovered3] = useState('#979797')
  const [isHovered4, setIsHovered4] = useState('#979797')
  const [isHovered5, setIsHovered5] = useState('#979797')
  //
  // mario
  //
  const [isMarioHover, setIsMarioHover] = useState(false)
  const [playMario, stopMario] = useSound('/audio/discoveravatars/mario.mp3')
  //
  // baesuzy
  //
  const [isBaeSuzyHover, setIsBaeSuzyHover] = useState(false)
  const [playBaeSuzy, stopBaeSuzy] = useSound(
    '/audio/discoveravatars/baesuzy.mp3',
  )
  //
  // ashketchum
  //
  const [isAshKetchumHover, setIsAshKetchumHover] = useState(false)
  const [playAshKetchum, stopAshKetchum] = useSound(
    '/audio/discoveravatars/ashketchum.mp3',
  )
  //
  // aang
  //
  const [isAangHover, setIsAangHover] = useState(false)
  const [playAang, stopAang] = useSound('/audio/discoveravatars/aang.mp3')
  //
  // randymarsh
  //
  const [isRandyMarshHover, setIsRandyMarshHover] = useState(false)
  const [playRandyMarsh, stopRandyMarsh] = useSound(
    '/audio/discoveravatars/randymarsh.mp3',
  )
  //
  // tonystark
  //
  const [isTonyStarkHover, setIsTonyStarkHover] = useState(false)
  const [playTonyStark, stopTonyStark] = useSound(
    '/audio/discoveravatars/tonystark.mp3',
  )
  //
  // joerogan
  //
  const [isJoeRoganHover, setIsJoeRoganHover] = useState(false)
  const [playJoeRogan, stopJoeRogan] = useSound(
    '/audio/discoveravatars/joerogan.mp3',
  )
  //
  // jeffbezos
  //
  const [isJeffBezosHover, setIsJeffBezosHover] = useState(false)
  const [playJeffBezos, stopJeffBezos] = useSound(
    '/audio/discoveravatars/jeffbezos.mp3',
  )
  // natfriedman
  //
  const [isNatFriedmanHover, setIsNatFriedmanHover] = useState(false)
  const [playNatFriedman, stopNatFriedman] = useSound(
    '/audio/discoveravatars/natfriedman.mp3',
  )
  //
  // santaclaus
  //
  const [isSantaClausHover, setIsSantaClausHover] = useState(false)
  const [playSantaClaus, stopSantaClaus] = useSound(
    '/audio/discoveravatars/santaclaus.mp3',
  )

  return (
    <ContentWrapper>
      <TopWrapper>
        <BoldWhiteText>Discover & Select New Avatars</BoldWhiteText>
        <ButtonWrapper>
          <ButtonLinear>
            <ButtonWhiteText>Featured</ButtonWhiteText>
          </ButtonLinear>
          <ButtonGray
            onMouseEnter={() => setIsHovered1('#fff')}
            onMouseLeave={() => setIsHovered1('#979797')}
            color={isHovered1}
            onClick={() => {
              alert('FEATURE UNDER CONSTRUCTION 🚧')
            }}
          >
            <ButtonGrayText color={isHovered1}>Famous People</ButtonGrayText>
          </ButtonGray>
          <ButtonGray
            onMouseEnter={() => setIsHovered2('#fff')}
            onMouseLeave={() => setIsHovered2('#979797')}
            color={isHovered2}
            onClick={() => {
              alert('FEATURE UNDER CONSTRUCTION 🚧')
            }}
          >
            <ButtonGrayText color={isHovered2}>Game Characters</ButtonGrayText>
          </ButtonGray>
          <ButtonGray
            onMouseEnter={() => setIsHovered3('#fff')}
            onMouseLeave={() => setIsHovered3('#979797')}
            color={isHovered3}
            onClick={() => {
              alert('FEATURE UNDER CONSTRUCTION 🚧')
            }}
          >
            <ButtonGrayText color={isHovered3}>Twitch Streamers</ButtonGrayText>
          </ButtonGray>
          <ButtonGray
            onMouseEnter={() => setIsHovered4('#fff')}
            onMouseLeave={() => setIsHovered4('#979797')}
            color={isHovered4}
            onClick={() => {
              alert('FEATURE UNDER CONSTRUCTION 🚧')
            }}
          >
            <ButtonGrayText color={isHovered4}>Movie Characters</ButtonGrayText>
          </ButtonGray>
          <ButtonGray
            onMouseEnter={() => setIsHovered5('#fff')}
            onMouseLeave={() => setIsHovered5('#979797')}
            color={isHovered5}
            onClick={() => {
              alert('FEATURE UNDER CONSTRUCTION 🚧')
            }}
          >
            <ButtonGrayText color={isHovered5}>Politicians</ButtonGrayText>
          </ButtonGray>
        </ButtonWrapper>
      </TopWrapper>

      <CardVWrapper>
        <CardHWrapper>
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
              onMouseEnter={() => {
                setIsMarioHover(true), playMario()
              }}
              onMouseLeave={() => {
                setIsMarioHover(false), stopMario.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>

              <LinearGradientAvatarCard>
                {isMarioHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/mario.mp4"
                      playing={true}
                      width="270%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={marioCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
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
              onMouseEnter={() => {
                setIsBaeSuzyHover(true), playBaeSuzy()
              }}
              onMouseLeave={() => {
                setIsBaeSuzyHover(false), stopBaeSuzy.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isBaeSuzyHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/baesuzy.mp4"
                      playing={true}
                      width="270%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={baesuzyCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
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
              onMouseEnter={() => {
                setIsAshKetchumHover(true), playAshKetchum()
              }}
              onMouseLeave={() => {
                setIsAshKetchumHover(false), stopAshKetchum.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isAshKetchumHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/ashketchum.mp4"
                      playing={true}
                      width="270%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={ashketchumCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
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
              onMouseEnter={() => {
                setIsAangHover(true), playAang()
              }}
              onMouseLeave={() => {
                setIsAangHover(false), stopAang.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isAangHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/aang.mp4"
                      playing={true}
                      width="200%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={aangCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
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
              onMouseEnter={() => {
                setIsRandyMarshHover(true), playRandyMarsh()
              }}
              onMouseLeave={() => {
                setIsRandyMarshHover(false), stopRandyMarsh.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isRandyMarshHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/randymarsh.mp4"
                      playing={true}
                      width="270%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={randymarshCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
            </RelativePositioner>
          </motion.nav>
        </CardHWrapper>
        <CardHWrapper>
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
              onMouseEnter={() => {
                setIsTonyStarkHover(true), playTonyStark()
              }}
              onMouseLeave={() => {
                setIsTonyStarkHover(false), stopTonyStark.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isTonyStarkHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/tonystark.mp4"
                      playing={true}
                      width="270%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={tonystarkCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
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
              onMouseEnter={() => {
                setIsJoeRoganHover(true), playJoeRogan()
              }}
              onMouseLeave={() => {
                setIsJoeRoganHover(false), stopJoeRogan.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isJoeRoganHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/joerogan.mp4"
                      playing={true}
                      width="270%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={joeroganCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
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
              onMouseEnter={() => {
                setIsJeffBezosHover(true), playJeffBezos()
              }}
              onMouseLeave={() => {
                setIsJeffBezosHover(false), stopJeffBezos.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isJeffBezosHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/jeffbezos.mp4"
                      playing={true}
                      width="270%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={jeffbezosCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
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
              onMouseEnter={() => {
                setIsNatFriedmanHover(true), playNatFriedman()
              }}
              onMouseLeave={() => {
                setIsNatFriedmanHover(false), stopNatFriedman.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isNatFriedmanHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/natfriedman.mp4"
                      playing={true}
                      width="200%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={natfriedmanCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
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
              onMouseEnter={() => {
                setIsSantaClausHover(true), playSantaClaus()
              }}
              onMouseLeave={() => {
                setIsSantaClausHover(false), stopSantaClaus.stop()
              }}
            >
              <AbsolutePositioner>
                <LinearGradientButton>
                  <Image src={switchAvatarButton} width="18%" height="18%" />
                </LinearGradientButton>
              </AbsolutePositioner>
              <LinearGradientAvatarCard>
                {isSantaClausHover ? (
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      marginLeft: '4.5px',
                      marginRight: '5px',
                      marginTop: '0px',
                    }}
                  >
                    <ReactPlayer
                      url="/mp4/santaclaus.mp4"
                      playing={true}
                      width="270%"
                      objectFit="cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={santaclausCardChangeAvatar}
                    width="166%"
                    height="245%"
                  />
                )}
              </LinearGradientAvatarCard>
            </RelativePositioner>
          </motion.nav>
        </CardHWrapper>
      </CardVWrapper>
    </ContentWrapper>
  )
}

const WhiteBackground = styled.div`
  width: 174px;
  height: 253px;
  border-radius: 20px;
  border: 5px solid #fff;
  box-shadow: 0px 4px 200px 80px #000;
`

//
const RelativePositioner2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AbsolutePositioner2 = styled.div`
  position: absolute;
  z-index: 3000;
`

///
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: left;
  align-items: left;
`

// TOP PORTION W/ TITLE & BUTTONS

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: left;
  align-items: left;
`

const BoldWhiteText = styled.div`
  display: flex;
  width: 500px;
  height: 36px;
  flex-direction: column;
  color: #fff;
  font-size: 32px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 23px;
  justify-content: left;
  align-items: left;
`

const ButtonLinear = styled.div`
  height: 41.632px;
  border-radius: 20px;
  background: linear-gradient(135deg, #ff377f 0%, #8e48ff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWhiteText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 21.534px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 18px;
  margin-right: 18px;
`
// HERE

const ButtonGray = styled.div<{ color: String }>`
  height: 41.632px;
  border-radius: 20px;
  border: 3px solid #979797;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${(props) =>
    props.color == '#fff' ? '3px solid #fff;' : '3px solid #979797;'};
`

const ButtonGrayText = styled.div<{ color: String }>`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 21.534px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 18px;
  margin-right: 18px;
`

// AVATAR CARDS

const CardVWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: left;
  align-items: left;
`

const CardHWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 75px;
  justify-content: left;
  align-items: left;
`

const LinearGradientAvatarCard = styled.div`
  width: 174px;
  height: 253px;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(135deg, #d73070 0%, #7b3ed7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    filter: drop-shadow(0px -4px 10px rgba(215, 48, 111, 0.4))
      drop-shadow(0px 4px 10px rgba(142, 73, 255, 0.4));
  }
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
