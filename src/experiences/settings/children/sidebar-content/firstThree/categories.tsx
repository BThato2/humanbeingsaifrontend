import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

export default function Categories() {
  return (
    <TopBottomWrapper>
      <WhiteBoldTitle>Categories</WhiteBoldTitle>
      <GroupWrapper>
        <ConnectionsContentWrapper>
          <PinkPurpleButton>
            <InsideButtonWhiteText>Native</InsideButtonWhiteText>
          </PinkPurpleButton>
          <CurrentConnectionsFlexParent>
            <CurrentConnectionsFlexChild>
              <SemiBoldWhiteText>Conversation</SemiBoldWhiteText>
              <SemiBoldWhiteText></SemiBoldWhiteText>
            </CurrentConnectionsFlexChild>
            <CurrentConnectionsFlexChild>
              <SemiBoldWhiteText>Image</SemiBoldWhiteText>
              <SemiBoldWhiteText>Video</SemiBoldWhiteText>
            </CurrentConnectionsFlexChild>
          </CurrentConnectionsFlexParent>
        </ConnectionsContentWrapper>
      </GroupWrapper>
      <GroupWrapper>
        <ConnectionsContentWrapper>
          <OrangePurpleButton>
            <InsideButtonWhiteText>Partner</InsideButtonWhiteText>
          </OrangePurpleButton>
          <CurrentConnectionsFlexParent>
            <CurrentConnectionsFlexChild>
              <SemiBoldWhiteText>Cruise</SemiBoldWhiteText>
              <SemiBoldWhiteText>DoorDash</SemiBoldWhiteText>
            </CurrentConnectionsFlexChild>
            <CurrentConnectionsFlexChild>
              <SemiBoldWhiteText>Airbnb</SemiBoldWhiteText>
              <SemiBoldWhiteText>Fiverr</SemiBoldWhiteText>
            </CurrentConnectionsFlexChild>
          </CurrentConnectionsFlexParent>
        </ConnectionsContentWrapper>
      </GroupWrapper>
    </TopBottomWrapper>
  )
}

const TopBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 35px;
  margin-left: 10px;
`

const WhiteBoldTitle = styled.div`
  color: #fff;
  font-family: Proxima Soft;
  font-size: 42px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

// Button Start

const PinkPurpleButton = styled.div`
  width: 101.088px;
  height: 34.088px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(
    --prod-linear,
    linear-gradient(135deg, #d7306f 0%, #7b3ed6 100%)
  );
`

const OrangePurpleButton = styled.div`
  width: 101.088px;
  height: 34.088px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: linear-gradient(135deg, #e03626 0%, #db30c0 100%);
`

const InsideButtonWhiteText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Proxima Soft;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

// Button End

const GroupWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  gap: 10px;
  flex-direction: column;
`

const ConnectionsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CurrentConnectionsFlexChild = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: left;
  align-items: left;
`

const CurrentConnectionsFlexParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: left;
  align-items: left;
`
const SemiBoldWhiteText = styled.div`
  color: #fff;
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  width: 90px;
`
