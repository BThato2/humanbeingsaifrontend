import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
//@ts-ignore

import { motion } from 'framer-motion'
import elonMuskPictureCubeRegular from '../../../../../assets/images/elonMuskPictureCube.png'
import elonMuskPictureCubePlay from '../../../../../assets/images/elonMuskPictureCubePlay.png'

// sound
//@ts-ignore
import useSound from 'use-sound'
import ReactPlayer from 'react-player'
import TitleCardDiscoverAvatars from './titlecarddiscoveravatars'

export default function MainParentDiscoverAvatars() {
  const [elonCard, setElonCard] = useState(1)

  useEffect(() => {
    if (elonCard == 2) {
      setElonCard(2)
    }
  }, [elonCard])

  return (
    <FlexWrapperVertical
      onClick={() => {
        setElonCard(2)
      }}
    >
      <PrimaryCard elonCard={elonCard}>
        {elonCard == 2 ? (
          <div>
            {/* <AbsolutePositioner>
              <WhiteBackground />
            </AbsolutePositioner> */}
            <RelativePositioner>
              <ReactPlayer
                width={'400px'}
                url="/mp4/deepfake.mp4"
                playing={true}
                height="100%"
                // ;lets try running audio in the background tomorrow
                onEnded={() => setElonCard(3)}
              />
            </RelativePositioner>
          </div>
        ) : elonCard == 3 ? (
          <Image src={elonMuskPictureCubeRegular} width="410%" height="295%" />
        ) : (
          <CursorPointer>
            <Image src={elonMuskPictureCubePlay} width="410%" height="295%" />
          </CursorPointer>
        )}
      </PrimaryCard>
      <TitleCardDiscoverAvatars />
    </FlexWrapperVertical>
  )
}

const CursorPointer = styled.div`
  cursor: pointer;
`

/*

*/

const RelativePositioner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AbsolutePositioner = styled.div`
  position: absolute;
  z-index: 2000;
`

const PrimaryCard = styled.div<{
  elonCard: number
}>`
  width: 429px;
  height: 312px;
  flex-shrink: 0;
  border-radius: 19.116px;
  background: #151517;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${(props) =>
    props.elonCard == 2
      ? '0px -4px 30px 2px rgba(215, 48, 111, 0.75), 0px 4px 30px 2px rgba(142, 73, 255, 0.75)'
      : 'none'};
`

const FlexWrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const WhiteBackground = styled.div`
  width: 415px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 10px solid #151517;
`
