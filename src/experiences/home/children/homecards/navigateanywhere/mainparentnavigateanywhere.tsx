import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import SearchBoxToAnywhere from './components/searchBoxToAnywhere'
import ButtonNavigation from './components/buttonNavigation'
// Navigate Anywhere

export default function MainParentNavigateAnywhere() {
  return (
    <PrimaryCard>
      <InsideCardWrapper>
        <TopBottomWrapper>
          <FirstTwoWrapper>
            <WhiteMainText>Navigate Anywhere</WhiteMainText>
            <SearchBoxToAnywhere />
          </FirstTwoWrapper>
          <ButtonNavigation />
        </TopBottomWrapper>
      </InsideCardWrapper>
    </PrimaryCard>
  )
}

const PrimaryCard = styled.div`
  width: 429px;
  height: 351px;
  flex-shrink: 0;
  border-radius: 19.116px;
  background: rgba(31, 32, 35, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const InsideCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TopBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 40px;
`

const FirstTwoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 25px;
`

// Main White Text

const WhiteMainText = styled.div`
  color: #fff;
  font-size: 32px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
`
