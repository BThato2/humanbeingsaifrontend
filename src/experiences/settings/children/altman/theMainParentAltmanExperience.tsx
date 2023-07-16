import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import AltmanVideo from './children/video'
import AltmanAnimation from './children/animation'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'

export default function TheMainParentAltmanExperience() {
  useEffect(() => {
    var delayInMilliseconds = 18000 // 18 seconds
    setTimeout(function () {
      useCurrentExperienceSwitcher.setState({
        currentExperienceIs: 'settings',
      })
    }, delayInMilliseconds)
  }, [])
  //
  return (
    <div>
      <AltmanAnimation />
    </div>
  )
}
