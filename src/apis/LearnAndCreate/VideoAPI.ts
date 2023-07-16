import useAPIRouteSwitcher from 'statemanagers/apiRouteManager'
import useAvatarAudioSwitcher from 'statemanagers/discoveravatars/avatarAudio'
import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'
import usePromptTextSwitcher from 'statemanagers/learnandcreate/promptTextManager'

export function VideoAPI(userMessageData: string) {
  var newData = useLearnAndCreateSwitcher.getState().conversationDataVideo
  //@ts-ignore
  var apiURL = useAPIRouteSwitcher.getState().apiURL
  //
  fetch(`${apiURL}/category-video`, {
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
      newData.push({
        name: 'Avatar',
        response_white: ['Of course! Here is that video:'],
        response_gradient: [],
        image: [''],
        video: [String(data.avatarVideo)],
      })

      useLearnAndCreateSwitcher.setState({
        conversationDataVideo: newData,
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

import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'

export function VideoAPI() {
  var newData = useLearnAndCreateSwitcher.getState().conversationDataVideo

  var selector = Math.floor(Math.random() * 10)

  if (selector === 0) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      ],
    })
  } else if (selector === 1) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      ],
    })
  } else if (selector === 2) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      ],
    })
  } else if (selector === 3) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      ],
    })
  } else if (selector === 4) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      ],
    })
  } else if (selector === 5) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      ],
    })
  } else if (selector === 6) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      ],
    })
  } else if (selector === 7) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      ],
    })
  } else if (selector === 8) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      ],
    })
  } else if (selector === 9) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that video:'],
      response_gradient: [],
      image: [],
      video: [
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      ],
    })
  }

  useLearnAndCreateSwitcher.setState({
    conversationDataVideo: newData,
  })
}

*/
