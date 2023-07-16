import useAPIRouteSwitcher from 'statemanagers/apiRouteManager'
import useAvatarAudioSwitcher from 'statemanagers/discoveravatars/avatarAudio'
import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'
import usePromptTextSwitcher from 'statemanagers/learnandcreate/promptTextManager'

export function ImageAPI(userMessageData: string) {
  var newData = useLearnAndCreateSwitcher.getState().conversationDataImage
  //@ts-ignore
  var apiURL = useAPIRouteSwitcher.getState().apiURL
  //
  console.log('apiURL')
  console.log(apiURL)
  fetch(`${apiURL}/category-image`, {
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
        response_white: ['Of course! Here is that image:'],
        response_gradient: [],
        image: [String(data.avatarImage)],
        video: [''],
      })

      useLearnAndCreateSwitcher.setState({
        conversationDataImage: newData,
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

export function ImageAPI() {
  var newData = useLearnAndCreateSwitcher.getState().conversationDataImage

  var selector = Math.floor(Math.random() * 10)

  if (selector === 0) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: ['https://picsum.photos/200/300'],
      video: [''],
    })
  } else if (selector === 1) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: [
        'https://images.unsplash.com/photo-1687360440886-f220f137a16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      ],
      video: [''],
    })
  } else if (selector === 2) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: [
        'https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      ],
      video: [''],
    })
  } else if (selector === 3) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: [
        'https://images.unsplash.com/photo-1688298581902-ba6247224555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      ],
      video: [''],
    })
  } else if (selector === 4) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: ['https://picsum.photos/200/300'],
      video: [''],
    })
  } else if (selector === 5) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: ['https://picsum.photos/200/300'],
      video: [''],
    })
  } else if (selector === 6) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: ['https://picsum.photos/200/300'],
      video: [''],
    })
  } else if (selector === 7) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: ['https://picsum.photos/200/300'],
      video: [''],
    })
  } else if (selector === 8) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: ['https://picsum.photos/200/300'],
      video: [''],
    })
  } else if (selector === 9) {
    newData.push({
      name: 'Avatar',
      response_white: ['Of course! Here is that image:'],
      response_gradient: [],
      image: [
        'https://images.unsplash.com/photo-1688362379203-9cdf13041d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      ],
      video: [''],
    })
  }

  useLearnAndCreateSwitcher.setState({
    conversationDataImage: newData,
  })
}

*/
