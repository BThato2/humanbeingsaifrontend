import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//@ts-ignore
import MicrophoneButton from '../../../../../../../assets/vectors/microphoneButton'
//@ts-ignore
import SearchButtonPointer from '../../../../../../../assets/vectors/searchButtonPointer'
import useInput from '../../../../../../../customhooks/useInput'
import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'
import useCategoryCardSwitcher from 'statemanagers/categoryCardManager'
import { RolePlayAPI } from '../../../../../../../apis/LearnAndCreate/RolePlayAPI'
import { InformationAPI } from '../../../../../../../apis/LearnAndCreate/InformationAPI'
import { VideoAPI } from '../../../../../../../apis/LearnAndCreate/VideoAPI'
import { ImageAPI } from '../../../../../../../apis/LearnAndCreate/ImageAPI'
import CategoryCardNew from './pop-up/categorycardnew'
import GrayBottomText from './grayBottomText'
import usePromptTextSwitcher from 'statemanagers/learnandcreate/promptTextManager'
import AudioMicrophone from 'experiences/globalcomponents/audiomicrophone'
export default function SearchBoxLearnAndCreate() {
  const [messageNumber, setMessageNumber] = useState(1)
  const [prompt, onChangePrompt, setPrompt] = useInput('')
  const [searchBoxColor, setSearchBoxColor] = useState('gray')
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [sendPrompt, setSendPrompt] = useState(false)

  const audioTranscriptionOn = usePromptTextSwitcher(
    (state: any) => state.audioTranscriptionOn,
  )
  const audioMessage = usePromptTextSwitcher((state: any) => state.audioMessage)
  //

  //

  const state = useLearnAndCreateSwitcher()
  const conversationDataRolePlay = useLearnAndCreateSwitcher(
    (state: any) => state.conversationDataRolePlay,
  )
  const conversationDataInformation = useLearnAndCreateSwitcher(
    (state: any) => state.conversationDataInformation,
  )
  const conversationDataImage = useLearnAndCreateSwitcher(
    (state: any) => state.conversationDataImage,
  )
  const conversationDataVideo = useLearnAndCreateSwitcher(
    (state: any) => state.conversationDataVideo,
  )
  const cardStatement = useCategoryCardSwitcher(
    (state: any) => state.cardStatement,
  )
  const currentCategory = useCategoryCardSwitcher(
    (state: any) => state.currentCategory,
  )

  // Chooses the different category for the query

  useEffect(() => {
    console.log('RAN')
    if (currentCategory == 'roleplay') {
      useCategoryCardSwitcher.setState({
        cardStatement: '/Roleplay',
      })
    } else if (currentCategory == 'information') {
      useCategoryCardSwitcher.setState({
        cardStatement: '/Conversation',
      })
    } else if (currentCategory == 'image') {
      useCategoryCardSwitcher.setState({
        cardStatement: '/Image',
      })
    } else if (currentCategory == 'video') {
      useCategoryCardSwitcher.setState({
        cardStatement: '/Video',
      })
    } else {
      null
    }
  }, [currentCategory])

  //// IN CHARGE OF MAKING ENTER/RETURN A TRIGGER KEY
  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        console.log('Enter key was pressed. Run your function.')
        event.preventDefault()
        setSendPrompt(true)
        setPrompt('')
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [prompt])

  //// IN CHARGE OF SENDING NEW DATA TO STATE MANAGER For the ROLEPLAY
  useEffect(() => {
    if (sendPrompt == true && currentCategory == 'roleplay') {
      // 0
      console.log('I MADE THE SWITCH')
      usePromptTextSwitcher.setState({
        waitingForMessage: true,
      })
      // important for character ai authentication
      setMessageNumber(messageNumber + 1)

      // Send prompt to state manager

      // 1 Set the initial/old state
      var newData = state.conversationDataRolePlay

      // 2 Create the updated/new state
      newData.push({
        name: 'User',
        response_white: [prompt],
        response_gradient: [],
        image: [''],
        video: [''],
      })

      // 3 Update the state manager with the new state
      useLearnAndCreateSwitcher.setState({
        conversationDataRolePlay: newData,
      })

      ////////#################################/////////// Start
      // 4 Wait for Avatars Response
      console.log('messageNumber')
      console.log(messageNumber)
      if (audioTranscriptionOn == false && audioMessage != '') {
        console.log('Ran AUDIO VERSION')
        console.log(audioMessage)
        RolePlayAPI(audioMessage, messageNumber, 'audio')
      } else {
        console.log('Ran TEXT VERSION')
        console.log(prompt)
        RolePlayAPI(prompt, messageNumber, 'text')
      }

      // 5 Wait for Avatars Response
      useLearnAndCreateSwitcher.setState({
        conversationDataRolePlay: newData,
      })

      ////////#################################/////////// End

      // Reset State
      setSendPrompt(false)
      setPrompt('')
    } //// IN CHARGE OF SENDING NEW DATA TO STATE MANAGER For the Information
    else if (sendPrompt == true && currentCategory == 'information') {
      // Send prompt to state manager
      // 0
      console.log('I MADE THE SWITCH')
      usePromptTextSwitcher.setState({
        waitingForMessage: true,
      })

      // 1 Set the initial/old state
      var newData = state.conversationDataInformation

      // 2 Create the updated/new state
      newData.push({
        name: 'User',
        response_white: [prompt],
        response_gradient: [],
        image: [''],
        video: [''],
      })

      // 3 Update the state manager with the new state
      useLearnAndCreateSwitcher.setState({
        conversationDataInformation: newData,
      })

      ////////#################################/////////// Start

      // 4 Wait for Avatars Response
      InformationAPI(prompt)

      // 5 Wait for Avatars Response
      useLearnAndCreateSwitcher.setState({
        conversationDataInformation: newData,
      })

      ////////#################################/////////// End

      // Reset State
      setSendPrompt(false)
      setPrompt('')
    } //// IN CHARGE OF SENDING NEW DATA TO STATE MANAGER For the Image
    else if (sendPrompt == true && currentCategory == 'image') {
      // Send prompt to state manager

      // 0
      console.log('I MADE THE SWITCH')
      usePromptTextSwitcher.setState({
        waitingForMessage: true,
      })

      // 1 Set the initial/old state
      var newData = state.conversationDataImage

      // 2 Create the updated/new state
      newData.push({
        name: 'User',
        response_white: [prompt],
        response_gradient: [],
        image: [''],
        video: [''],
      })

      // 3 Update the state manager with the new state
      useLearnAndCreateSwitcher.setState({
        conversationDataImage: newData,
      })

      ////////#################################/////////// Start

      // 4 Wait for Avatars Response
      ImageAPI(prompt)

      // 5 Wait for Avatars Response
      useLearnAndCreateSwitcher.setState({
        conversationDataImage: newData,
      })

      ////////#################################/////////// End

      // Reset State
      setSendPrompt(false)
      setPrompt('')
    } //// IN CHARGE OF SENDING NEW DATA TO STATE MANAGER For the Video
    else if (sendPrompt == true && currentCategory == 'video') {
      // Send prompt to state manager

      // 0
      console.log('I MADE THE SWITCH')
      usePromptTextSwitcher.setState({
        waitingForMessage: true,
      })

      // 1 Set the initial/old state
      var newData = state.conversationDataVideo

      // 2 Create the updated/new state
      newData.push({
        name: 'User',
        response_white: [prompt],
        response_gradient: [],
        image: [''],
        video: [''],
      })
      //

      // 3 Update the state manager with the new state
      useLearnAndCreateSwitcher.setState({
        conversationDataVideo: newData,
      })

      ////////#################################/////////// Start

      // 4 Wait for Avatars Response
      VideoAPI(prompt)

      // 5 Wait for Avatars Response
      useLearnAndCreateSwitcher.setState({
        conversationDataVideo: newData,
      })

      ////////#################################/////////// End

      // Reset State
      setSendPrompt(false)
      setPrompt('')
    }
  }, [sendPrompt])

  ////////###############IN CHARGE OF RESETTING SEARCH BOX##################///////////
  //
  const [isShowingRegularPromptField, setIsShowingRegularPromptField] =
    useState(false)
  //
  useEffect(() => {
    if (
      conversationDataRolePlay.length >= 2 ||
      conversationDataInformation.length >= 2 ||
      conversationDataImage.length >= 2 ||
      conversationDataVideo.length >= 2
    ) {
      setIsShowingRegularPromptField(false)
    }
  }, [useLearnAndCreateSwitcher()])

  //
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  // USER_FACING REACT CODE IS BELOW
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  ////////#################################///////////
  return (
    <ParentContentWrapper>
      <BoxPlusButtonWrapper>
        <RelativePositioner>
          {cardStatement == '/' ? (
            <AbsolutePositioner>
              <CategoryCardNew />
            </AbsolutePositioner>
          ) : null}
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
            {isShowingRegularPromptField == true ? (
              <MarginWrapper>
                <InputText
                  placeholder="Enter a prompt here"
                  value={prompt}
                  onChange={onChangePrompt}
                />
                <CursorPointerWrapper
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                ></CursorPointerWrapper>
              </MarginWrapper>
            ) : (
              <ContentWrapper>
                <GrayToWhiteText
                  categoryText={cardStatement}
                  onClick={() => {
                    useCategoryCardSwitcher.setState({
                      cardStatement: '/',
                    })
                  }}
                >
                  {cardStatement}
                </GrayToWhiteText>
                {/* THIS IS WHERE YOU CAN EDIT THE PROMPT */}
                {currentCategory != null ? (
                  <RelativePositioner2>
                    <WhiteBoxForPrompt>
                      <LinearTextCopy>prompt</LinearTextCopy>
                    </WhiteBoxForPrompt>
                    {audioTranscriptionOn == false ? (
                      <InputTextPromptBox
                        placeholder="type here"
                        value={prompt}
                        onChange={onChangePrompt}
                      />
                    ) : (
                      <AudioText>{audioMessage}</AudioText>
                    )}
                  </RelativePositioner2>
                ) : null}
              </ContentWrapper>
            )}
            {/* THIS IS WHERE YOU CAN EDIT THE MICROPHONE */}
            {/* KILLED MICROPHONE */}
          </SearchBox>
        </RelativePositioner>
        <CursorPointerWrapper
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          onClick={() => {
            setSendPrompt(true)
          }}
        >
          {isHovered2 ? (
            <SearchButtonPointer stroke="white" />
          ) : (
            <SearchButtonPointer stroke="#B9B9B9" />
          )}
        </CursorPointerWrapper>
      </BoxPlusButtonWrapper>
      {/*START - CHANGE THE GRAY BOTTOM TEXT BASED ON THE CATEGORY  */}
      <GrayBottomText />
      {/* END - CHANGE THE GRAY BOTTOM TEXT BASED ON THE CATEGORY */}
    </ParentContentWrapper>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const ParentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

//##########PROMPT BOX START##########

const RelativePositioner2 = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
`

const WhiteBoxForPrompt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 3px solid #fff;
`

const LinearTextCopy = styled.div`
  font-size: 22px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: -webkit-linear-gradient(135deg, #8e49ff 0%, #ff3880 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

// INPUT
const InputTextPromptBox = styled.input`
  margin-left: 10px;
  border: none;
  color: #b4b9be;
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: transparent;
  caret-color: #8e48ff;
  padding: 10px;
  background-color: transparent;
  width: 500px;

  ::placeholder {
    font-family: Proxima Soft;
    font-weight: 400;
    color: #b4b9be;
  }
  :focus {
    outline: none;
    color: #ffffff;
  }
`

//##########PROMPT BOX FINISH##########

// New Experience Start
const RelativePositioner = styled.div`
  position: relative;
`

const AbsolutePositioner = styled.div`
  position: absolute;
  bottom: 100px;
  left: 30px;
  z-index: 1005;
`

const GrayToWhiteText = styled.div<{ categoryText: String }>`
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 30px;
  cursor: pointer;

  color: ${(props) =>
    props.categoryText == 'Select a prompt category' ? '#B4B9BE;' : 'white'};
`
// New Experience End

const CursorPointerWrapper = styled.div`
  cursor: pointer;
`

const CursorPointerWrapper1 = styled.div`
  cursor: pointer;
  margin-right: 20px;
`

// Navigation Typing Experience

const BoxPlusButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const SearchBox = styled.div<{ searchBoxColor: String }>`
  width: 760px;
  height: 68px;
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

  ::placeholder {
    font-family: Proxima Soft;
    font-weight: 400;
    color: #b4b9be;
  }
  :focus {
    outline: none;
    color: #ffffff;
  }
`

// AudioText
const AudioText = styled.text`
  margin-left: 10px;
  font-size: 22px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: transparent;
  padding: 10px;
  width: 500px;
  color: #ffffff;
`
