import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

export default function BottomInfo() {
  return (
    <VeryBottomContentWrapper>
      <VeryBottomGrayText>Created By Colin Snyder</VeryBottomGrayText>
      <VeryBottomGrayText>
        © 2023 Humanbeings AI • Made with 💛 in SF
      </VeryBottomGrayText>
    </VeryBottomContentWrapper>
  )
}

const VeryBottomContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 50px;
  margin-left: 10px;
`

const VeryBottomGrayText = styled.div`
  color: #b4b9be;
  font-size: 17px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
`
