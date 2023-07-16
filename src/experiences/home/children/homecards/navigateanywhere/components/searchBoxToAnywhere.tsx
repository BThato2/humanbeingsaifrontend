import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
//@ts-ignore
import MicrophoneButton from '../../../../../../assets/vectors/microphoneButton'
//@ts-ignore
import useInput from 'customhooks/useInput'
//@ts-ignore
import SearchButtonMicroscope from '../../../../../../assets/vectors/searchButtonMicroscope'

export default function SearchBoxToAnywhere() {
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [prompt1, onChangePrompt1, setPrompt1] = useInput('')
  const [searchBoxColor, setSearchBoxColor] = useState('gray')

  //// IN CHARGE OF MAKING ENTER/RETURN A TRIGGER KEY
  useEffect(() => {
    if (prompt1.length > 3) {
      console.log('I RANNNN 2')
      const listener = (event: any) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          console.log('Enter key was pressed. Run your function.')
          event.preventDefault()
          console.log({ prompt1 })
          window.open('https://www.google.com/search?q=' + prompt1, '_blank')
          setPrompt1('')
        }
      }
      document.addEventListener('keydown', listener)
      return () => {
        document.removeEventListener('keydown', listener)
      }
    }
  }, [prompt1])

  return (
    <BoxPlusButtonWrapper>
      <SearchBox
        onMouseOver={() => {
          if (searchBoxColor != 'gradient') {
            setSearchBoxColor('white')
          }
        }}
        onMouseLeave={() => {
          if (searchBoxColor != 'gradient') {
            setSearchBoxColor('gray')
          }
        }}
        onClick={() => {
          setSearchBoxColor('gradient')
        }}
        searchBoxColor={searchBoxColor}
      >
        <MarginWrapper>
          <InputText
            placeholder="Enter your search here"
            value={prompt1}
            onChange={onChangePrompt1}
          />
        </MarginWrapper>
      </SearchBox>
      <CursorPointerWrapper
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        {isHovered2 ? (
          <div
            onClick={() => {
              window.open(
                'https://www.google.com/search?q=' + prompt1,
                '_blank',
              )
            }}
          >
            <SearchButtonMicroscope stroke="white" />
          </div>
        ) : (
          <SearchButtonMicroscope stroke="#B9B9B9" />
        )}
      </CursorPointerWrapper>
    </BoxPlusButtonWrapper>
  )
}

const SearchBox = styled.div<{ searchBoxColor: String }>`
  width: 349px;
  height: 59px;
  flex-shrink: 0;

  background: ${(props) =>
    props.searchBoxColor == 'gray'
      ? 'linear-gradient(#0e0f10, #0e0f10) padding-box,linear-gradient(135deg, #b4b9be 0%, #b4b9be 100%) border-box'
      : props.searchBoxColor == 'white'
      ? 'linear-gradient(#0e0f10, #0e0f10) padding-box,linear-gradient(135deg, #fff 0%, #fff 100%) border-box'
      : 'linear-gradient(#0e0f10, #0e0f10) padding-box,linear-gradient(135deg, #ff377f 0%, #8e48ff 100%) border-box'};

  border-radius: 50em;
  border: 3px solid transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
// Navigation Typing Experience

const CursorPointerWrapper = styled.div`
  cursor: pointer;
`

// Navigation Typing Experience

const BoxPlusButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const MarginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  width: 100%;
`

// INPUT
const InputText = styled.input`
  margin-left: 10px;
  margin-top: 2px;
  border: none;
  color: #b4b9be;
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: transparent;
  width: 90%;
  caret-color: #8e48ff;
  cursor: pointer;
  ::placeholder {
    font-family: Proxima Soft;
    font-weight: 400;
    color: #b4b9be;
  }
  :focus {
    outline: none;
    color: #ffffff;
    cursor: default;
  }
`
