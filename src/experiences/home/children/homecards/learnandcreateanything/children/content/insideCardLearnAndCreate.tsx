//###################################//
//###################################//
//###################################//
// This represents the child that represents the content in the learn & create conversation experience
//###################################//
//###################################//
//###################################//
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
//@ts-ignore
import elonCircleProfilePicture from '../../../../../../../assets/images/elonCircleProfilePicture.png'
import gracehopperCircleProfilePicture from '../../../../../../../assets/images/gracehopperCircleProfilePicture.png'
import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'
import LoadingAnimationLearnAndCreate from '../../../../../../../assets/vectors/animation/loadingAnimationLearnAndCreate.svg'
import useCategoryCardSwitcher from 'statemanagers/categoryCardManager'
import usePromptTextSwitcher from 'statemanagers/learnandcreate/promptTextManager'

export default function InsideCardLearnAndCreate() {
  // VERY IMPORTANT FOR UPDATING THE STATE
  const state = useLearnAndCreateSwitcher()

  const currentCategory = useCategoryCardSwitcher(
    (state: any) => state.currentCategory,
  )

  const waitingForMessage = usePromptTextSwitcher(
    (state: any) => state.waitingForMessage,
  )

  ///START//// IN CHARGE OF AUTOSCROLL TO THE BOTTOM AFTER EACH MESSAGE///////
  useEffect(() => {
    // Scroll to the bottom of the scrollable element when the messages change.
    const scrollableElement = document.querySelector('.scrollable-element')
    //@ts-ignore
    scrollableElement.scrollTop = scrollableElement.scrollHeight
  }, [state])
  ///END//// IN CHARGE OF AUTOSCROLL TO THE BOTTOM AFTER EACH MESSAGE///////

  ///START//// IN CHARGE OF SETTING A MOCK DELAY FOR THE SPINNER EFFECT ///////

  const [SpinnerEffectOn, setSpinnerEffectOn] = useState(false)
  useEffect(() => {
    console.log('IT DID RUN')
    setSpinnerEffectOn(true)
    //
    var delayInMilliseconds = 3000 //1 second
    setTimeout(function () {
      //
      setSpinnerEffectOn(false)
      //
    }, delayInMilliseconds)
  }, [useLearnAndCreateSwitcher()])

  ///END//// IN CHARGE OF SETTING A MOCK DELAY FOR THE SPINNER EFFECT ///////
  //
  //
  //
  ///START//// IN CHARGE OF SELECTING THE CATEGORY OF TOPIC TO DISPLAY ///////
  const [dataName, setDataName] = useState(state.conversationDataRolePlay)
  useEffect(() => {
    if (currentCategory == 'roleplay') {
      setDataName(state.conversationDataRolePlay)
    }
    if (currentCategory == 'information') {
      console.log('state.conversationDataInformation')
      console.log(state.conversationDataInformation)
      setDataName(state.conversationDataInformation)
    }
    if (currentCategory == 'image') {
      setDataName(state.conversationDataImage)
    }
    if (currentCategory == 'video') {
      setDataName(state.conversationDataVideo)
    }
  }, [currentCategory])
  ///END//// IN CHARGE OF SELECTING THE CATEGORY OF TOPIC TO DISPLAY ///////

  return (
    <ScrollWrapper className="scrollable-element">
      {/* WILL BE A CLUSTER. NEED TO REPLACE FAST */}
      {currentCategory == 'roleplay' ||
      currentCategory == 'information' ||
      currentCategory == 'image' ||
      currentCategory == 'video' ? (
        <CardWrapper>
          {dataName.map((data: any, index: any) => (
            <div key={index}>
              <InsideCard name={data.name}>
                {data.name == 'Avatar' &&
                index + 1 == dataName.length &&
                index != 0 &&
                SpinnerEffectOn == true ? (
                  <AnimationStack>
                    <Image
                      src={LoadingAnimationLearnAndCreate}
                      width="90%"
                      height="90%"
                    />
                  </AnimationStack>
                ) : (
                  <ContentHStack>
                    <LinearCircle gracehopperpadding={data.name}>
                      {data.name == 'Avatar' ? (
                        <Image
                          src={elonCircleProfilePicture}
                          width="55%"
                          height="55%"
                        />
                      ) : (
                        <Image
                          src={gracehopperCircleProfilePicture}
                          width="55%"
                          height="55%"
                        />
                      )}
                    </LinearCircle>
                    <ContentVStack>
                      <TextDiv>
                        {data.response_white.map((data: any, index: any) => (
                          <div key={index}>
                            {data.length > 60 ? (
                              <WhiteTextCopy margin={true}>
                                {data}
                              </WhiteTextCopy>
                            ) : (
                              <WhiteTextCopy margin={false}>
                                {data}
                              </WhiteTextCopy>
                            )}
                          </div>
                        ))}
                      </TextDiv>
                      <div>
                        {data.response_gradient === null ||
                        data.response_gradient.length === 0 ? null : (
                          <TextDiv2>
                            {data.response_gradient.map(
                              (data: any, index: any) => (
                                <div key={index}>
                                  <LinearTextCopy>{data}</LinearTextCopy>
                                </div>
                              ),
                            )}
                          </TextDiv2>
                        )}
                      </div>
                      <VideoAndImgDiv>
                        {data.video == '' ? null : (
                          <InsideVideo
                            controls
                            src={data.video}
                            width="55%"
                            height="55%"
                          />
                        )}
                        {data.image == '' ? null : (
                          <InsideIMG src={data.image} />
                        )}
                      </VideoAndImgDiv>
                    </ContentVStack>
                  </ContentHStack>
                )}
              </InsideCard>
            </div>
          ))}
          {waitingForMessage == true ? (
            <InsideCard name="Avatar">
              <AnimationStack>
                <Image
                  src={LoadingAnimationLearnAndCreate}
                  width="90%"
                  height="90%"
                />
              </AnimationStack>
            </InsideCard>
          ) : null}
        </CardWrapper>
      ) : (
        <CardWrapper>
          {/* Portion when screen starts up (default) */}
          {state.conversationDataRolePlay.map((data: any, index: any) => (
            <div key={index}>
              <InsideCard name={data.name}>
                <ContentHStack>
                  <LinearCircle gracehopperpadding={data.name}>
                    {data.name == 'Avatar' ? (
                      <Image
                        src={elonCircleProfilePicture}
                        width="55%"
                        height="55%"
                      />
                    ) : (
                      <Image
                        src={gracehopperCircleProfilePicture}
                        width="55%"
                        height="55%"
                      />
                    )}
                  </LinearCircle>
                  <ContentVStack>
                    <TextDiv>
                      {data.response_white.map((data: any, index: any) => (
                        <div key={index}>
                          {data.length > 60 ? (
                            <WhiteTextCopy margin={true}>{data}</WhiteTextCopy>
                          ) : (
                            <WhiteTextCopy margin={false}>{data}</WhiteTextCopy>
                          )}
                        </div>
                      ))}
                    </TextDiv>
                    <div>
                      {data.response_gradient === null ||
                      data.response_gradient.length === 0 ? null : (
                        <TextDiv2>
                          {data.response_gradient.map(
                            (data: any, index: any) => (
                              <div key={index}>
                                <LinearTextCopy>{data}</LinearTextCopy>
                              </div>
                            ),
                          )}
                        </TextDiv2>
                      )}
                    </div>
                  </ContentVStack>
                </ContentHStack>
              </InsideCard>
            </div>
          ))}
        </CardWrapper>
      )}
    </ScrollWrapper>
  )
}

const InsideIMG = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
`

const InsideVideo = styled.video`
  width: 400px;
  height: 400px;
  border-radius: 10px;
`

const AnimationStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  gap: 20px;
  width: 840px;
`

const ScrollWrapper = styled.div`
  width: 820px;
  overflow: scroll;
  height: 750px;
  gap: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #151517;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  /* Only show scrollbar on y-axis */
  ::-webkit-scrollbar-horizontal {
    display: none;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: top;
`

const ContentVStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`

const InsideCard = styled.div<{ name: String }>`
  width: 789px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 60px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: ${(props) =>
    props.name == 'Avatar' ? '#151517' : 'rgba(31, 32, 35, 0.0)'};
`

const ContentHStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  gap: 20px;
  width: 820px;
`

// Profile Picture

const LinearCircle = styled.div<{ gracehopperpadding: String }>`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: var(
    --custom-linear,
    linear-gradient(135deg, #ff3880 0%, #8e49ff 100%)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) =>
    props.gracehopperpadding == 'Avatar' ? '0px' : '20px'};
`

// Copy and Text

const WhiteTextCopy = styled.div<{ margin: Boolean }>`
  // We might deprecate the margin - leaving just in case
  color: #fff;
  font-size: 24px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  width: 650px;
  margin-top: ${(props) => (props.margin == true ? '0px' : '0px')};
`

const LinearTextCopy = styled.div`
  font-size: 24px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: -webkit-linear-gradient(135deg, #8e49ff 0%, #ff3880 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const TextDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: left;
  justify-content: left;
`

const TextDiv2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: left;
  justify-content: left;
  margin-top: 20px;
  margin-bottom: 20px;
`

const VideoAndImgDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: left;
  justify-content: left;
  margin-top: 20px;
`
