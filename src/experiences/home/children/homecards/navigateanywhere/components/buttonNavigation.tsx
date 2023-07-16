import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import TeslaLogo from '../../../../../../assets/vectors/navigate/teslaLogo'
//@ts-ignore
import AppleLogo from '../../../../../../assets/vectors/navigate/appleLogo'
//@ts-ignore
import UniqloLogo from '../../../../../../assets/vectors/navigate/uniqloLogo'
//@ts-ignore
import NikeLogo from '../../../../../../assets/vectors/navigate/nikeLogo'

export default function ButtonNavigation() {
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isHovered3, setIsHovered3] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)
  return (
    <BottomWrapper>
      <SmallTextHeader>Common</SmallTextHeader>
      <TwobyTwoGridWrapper>
        <InsideCard
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
          onClick={() => {
            window.open('https://www.tesla.com', '_blank')
          }}
        >
          <LinkGroupWrapper>
            {isHovered1 ? (
              <TeslaLogo fill="white" />
            ) : (
              <TeslaLogo fill="#B9B9B9" />
            )}
            <WhiteTextDivider1 isHovered1={isHovered1} />
            <SmallTextCopy1 isHovered1={isHovered1}>Tesla.com</SmallTextCopy1>
          </LinkGroupWrapper>
        </InsideCard>
        <InsideCard
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          onClick={() => {
            window.open('https://www.uniqlo.com', '_blank')
          }}
        >
          <LinkGroupWrapper>
            {isHovered2 ? (
              <UniqloLogo fill="white" />
            ) : (
              <UniqloLogo fill="#B9B9B9" />
            )}
            <WhiteTextDivider2 isHovered2={isHovered2} />
            <SmallTextCopy2 isHovered2={isHovered2}>Uniqlo.com</SmallTextCopy2>
          </LinkGroupWrapper>
        </InsideCard>
        <InsideCard
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          onClick={() => {
            window.open('https://www.apple.com', '_blank')
          }}
        >
          <LinkGroupWrapper>
            {isHovered3 ? (
              <AppleLogo fill="white" />
            ) : (
              <AppleLogo fill="#B9B9B9" />
            )}
            <WhiteTextDivider3 isHovered3={isHovered3} />
            <SmallTextCopy3 isHovered3={isHovered3}>Apple.com</SmallTextCopy3>
          </LinkGroupWrapper>
        </InsideCard>
        <InsideCard
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
          onClick={() => {
            window.open('https://www.nike.com', '_blank')
          }}
        >
          <LinkGroupWrapper>
            {isHovered4 ? (
              <NikeLogo fill="white" />
            ) : (
              <NikeLogo fill="#B9B9B9" />
            )}
            <WhiteTextDivider4 isHovered4={isHovered4} />
            <SmallTextCopy4 isHovered4={isHovered4}>Nike.com</SmallTextCopy4>
          </LinkGroupWrapper>
        </InsideCard>
      </TwobyTwoGridWrapper>
    </BottomWrapper>
  )
}

const InsideCard = styled.div`
  width: 180px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 10px;
  background: transparent;
  display: flex;
  justify-content: left;
  align-items: left;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      139deg,
      rgba(252, 57, 133, 0.5) 0%,
      #1f2023 19.79%,
      #1f2023 76.04%,
      rgba(147, 73, 250, 0.5) 100%
    );
  }
`

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  gap: 10px;
`

// Select a Quick Link

const TwobyTwoGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
`

const LinkGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-left: 5px;
`

const SmallTextHeader = styled.div`
  color: white;
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const SmallTextCopy1 = styled.div<{ isHovered1: Boolean }>`
  color: ${(props) => (props.isHovered1 == true ? 'white' : '#B4B9BE;')};
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const WhiteTextDivider1 = styled.div<{ isHovered1: Boolean }>`
  width: 3px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${(props) => (props.isHovered1 == true ? 'white' : '#B4B9BE;')};
`

const SmallTextCopy2 = styled.div<{ isHovered2: Boolean }>`
  color: ${(props) => (props.isHovered2 == true ? 'white' : '#B4B9BE;')};
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const WhiteTextDivider2 = styled.div<{ isHovered2: Boolean }>`
  width: 3px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${(props) => (props.isHovered2 == true ? 'white' : '#B4B9BE;')};
`

const SmallTextCopy3 = styled.div<{ isHovered3: Boolean }>`
  color: ${(props) => (props.isHovered3 == true ? 'white' : '#B4B9BE;')};
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const WhiteTextDivider3 = styled.div<{ isHovered3: Boolean }>`
  width: 3px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${(props) => (props.isHovered3 == true ? 'white' : '#B4B9BE;')};
`

const SmallTextCopy4 = styled.div<{ isHovered4: Boolean }>`
  color: ${(props) => (props.isHovered4 == true ? 'white' : '#B4B9BE;')};
  font-size: 26px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const WhiteTextDivider4 = styled.div<{ isHovered4: Boolean }>`
  width: 3px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${(props) => (props.isHovered4 == true ? 'white' : '#B4B9BE;')};
`
