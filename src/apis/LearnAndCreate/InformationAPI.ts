import useAPIRouteSwitcher from 'statemanagers/apiRouteManager'
import useAvatarAudioSwitcher from 'statemanagers/discoveravatars/avatarAudio'
import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'
import usePromptTextSwitcher from 'statemanagers/learnandcreate/promptTextManager'
import useSound from 'use-sound'

export function InformationAPI(userMessageData: string) {
  var newData = useLearnAndCreateSwitcher.getState().conversationDataInformation
  //@ts-ignore
  var apiURL = useAPIRouteSwitcher.getState().apiURL
  //
  fetch(`${apiURL}/category-information`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userMessage: userMessageData,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log('informationAPIData')
      console.log(data)
      newData.push({
        name: 'Avatar',
        response_white: [data.avatarMessage],
        response_gradient: [],
        image: [],
        video: [''],
      })

      useLearnAndCreateSwitcher.setState({
        conversationDataInformation: newData,
      })

      console.log('newData')
      console.log(newData)

      useAvatarAudioSwitcher.setState({
        currentAudioUrl: String(data.audioURL),
      })

      usePromptTextSwitcher.setState({
        waitingForMessage: false,
      })
    })
    .catch((error) => {
      // Handle any errors
      console.error(error)
    })
}
/*

export function InformationAPI() {
  var newData = useLearnAndCreateSwitcher.getState().conversationDataInformation

  var selector = Math.floor(Math.random() * 10)

  if (selector === 0) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "The sky is blue today and the temparature in San Francisco is 72 degree Fahrenheit. I'm not sure what else to say, but I'm Elon Musk, so I'm going to keep talking",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 1) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "The score of the mariners game versus the giants is 6 to 0 in the 5th inning. I'm don't really like baseball",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 2) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "It will take 7 hours to travel between San Francisco and Los Angeles. I'm not sure if I'll ever go to LA again, but I'm sure I'll go to SF again",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 3) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "Fly from Dubai to Bangkok is 6 hours. I'm not sure if I'll ever go to Dubai, but I'm sure I'll go to Bangkok again",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 4) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "Stephen A Smith is currently the host of ESPN's First Take. I'm not sure if I'll ever be on First Take, but I want to",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 5) {
    newData.push({
      name: 'Avatar',
      response_white: ['Max Kellerman just got fired from ESPN Today'],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 6) {
    newData.push({
      name: 'Avatar',
      response_white: [
        'Character AI raised a Series B at a reported valuation of $1 Billion USD',
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 7) {
    newData.push({
      name: 'Avatar',
      response_white: [
        'Inflection AI just got a major investment from both Microsoft & Nvidia to build the future of AI',
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 8) {
    newData.push({
      name: 'Avatar',
      response_white: [
        'The first person to land on the moon was Neil Armstrong. The second was Buzz Aldrin.',
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 9) {
    newData.push({
      name: 'Avatar',
      response_white: ['The Chiefs won the 2023 Super Bowl over the Eagles'],
      response_gradient: [],
      image: [],
      video: [''],
    })
  }

  useLearnAndCreateSwitcher.setState({
    conversationDataInformation: newData,
  })
}

*/
