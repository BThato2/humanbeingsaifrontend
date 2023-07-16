import styled, { keyframes } from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
//@ts-ignore
// import MoneyVideo from '../../../../../assets/videos/money.mp4'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'

export default function AltmanVideo() {
  return (
    <BlurWrapper>
      <RelativePositioner>
        <AbsolutePositioner>
          <WhiteBackground />
        </AbsolutePositioner>
      </RelativePositioner>
    </BlurWrapper>
  )
}

/*


<ReactPlayer
          width={'10000px'}
          url={MoneyVideo}
          playing={true}
          onEnded={() =>
            useCurrentExperienceSwitcher.setState({
              currentExperienceIs: 'settings',
            })
          }
        />
        */

const BlurWrapper = styled.div`
  background: rgba(18, 18, 18, 0.6);
  backdrop-filter: blur(7.5px);
  height: 100vh;
  width: 100vw;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

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

const WhiteBackground = styled.div`
  width: 980px;
  height: 360px;
  border-radius: 20px;
  border: 5px solid #fff;
  box-shadow: 0px 4px 200px 80px #000;
`
