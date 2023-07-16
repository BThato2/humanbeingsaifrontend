import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import InsideCardsFriendsAvatars from './insidecardsfriendsavatars'

export default function MainParentFriendsAvatars() {
  return (
    <PrimaryCard>
      <InsideCardWrapper>
        <WhiteMainText>Friends Avatars</WhiteMainText>
        <InsideCardsFriendsAvatars />
      </InsideCardWrapper>
    </PrimaryCard>
  )
}

const PrimaryCard = styled.div`
  width: 429px;
  height: 575px;
  flex-shrink: 0;
  border-radius: 19.116px;
  background: #151517;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InsideCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 35px;
  width: 85%;
`

const WhiteMainText = styled.div`
  color: #fff;
  font-size: 32px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
