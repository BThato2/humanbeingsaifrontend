//###################################//
//###################################//
//###################################//
// This represents the parent for the learn and create anything experience
//###################################//
//###################################//
//###################################//
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import InsideCardLearnAndCreate from '../children/content/insideCardLearnAndCreate'
import SearchBoxLearnAndCreate from '../children/search/searchboxLearnAndCreate'
export default function MainParentLearnAndCreateAnything() {
  return (
    <PrimaryCard>
      <InsideCardWrapper>
        <ParentContentWrapper>
          <WhiteMainText>Learn and Create Anything</WhiteMainText>
          <TopPortionContentWrapper>
            <InsideCardLearnAndCreate />
          </TopPortionContentWrapper>
          <SearchBoxLearnAndCreate />
        </ParentContentWrapper>
      </InsideCardWrapper>
    </PrimaryCard>
  )
}

const ParentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  gap: 50px;
  margin-top: 20px;
  margin-left: 30px;
`

const TopPortionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 25px;
`

const PrimaryCard = styled.div`
  width: 865px;
  height: 1030px;
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

const WhiteMainText = styled.div`
  color: #fff;
  font-size: 32px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
