import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'

export default function LeftCard() {
  return (
    <SmallTopicCardBase>
      <SmallTopicCardMainHStackWrapper>
        <TopicSymbol>🇰🇷</TopicSymbol>
        <SmallTopicCardTextVStackWrapper>
          <SmallWhiteTextCopy>Korean</SmallWhiteTextCopy>
          <SmallGrayTextCopy>AI Tutor: Elon Musk</SmallGrayTextCopy>
        </SmallTopicCardTextVStackWrapper>
      </SmallTopicCardMainHStackWrapper>
    </SmallTopicCardBase>
  )
}

/// Small Topic Card Start
const SmallTopicCardBase = styled.div`
  width: 291px;
  height: 74.914px;
  flex-shrink: 0;
  border-radius: 16.286px;
  background: #36373c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`

const SmallTopicCardMainHStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: 20px;
`

const SmallTopicCardTextVStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 5px;
`

const TopicSymbol = styled.div`
  color: #000;
  font-size: 76px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const SmallWhiteTextCopy = styled.div`
  color: #fff;
  font-size: 26.057px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const SmallGrayTextCopy = styled.div`
  color: #b9b9b9;
  font-size: 17.371px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

/// Small Topic Card End
