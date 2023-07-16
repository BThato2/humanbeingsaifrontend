// 1. Trigger Goes off within the component that calls an API Related Function
// 2. Function in this file then makes the mock api call
// 3. We then update the api data to the zustand conversationDataRolePlay state manager
// --4 // For the mock version of this, we'll keep appending new data every time it's called upon

import useLearnAndCreateSwitcher from 'statemanagers/learnandcreate/learnAndCreateManager'
import usePromptTextSwitcher from 'statemanagers/learnandcreate/promptTextManager'
import useAvatarAudioSwitcher from 'statemanagers/discoveravatars/avatarAudio'
import useAPIRouteSwitcher from 'statemanagers/apiRouteManager'

export function RolePlayAPI(
  userMessageData: string,
  messageNumberData: number,
  messageFormatData: string,
) {
  var newData = useLearnAndCreateSwitcher.getState().conversationDataRolePlay
  //@ts-ignore
  var apiURL = useAPIRouteSwitcher.getState().apiURL
  //
  fetch(`${apiURL}/category-roleplay`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userMessage: userMessageData,
      messageNumber: messageNumberData,
      messageFormat: messageFormatData,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data)
      newData.push({
        name: 'Avatar',
        response_white: [data.avatarMessage],
        response_gradient: [],
        image: [],
        video: [''],
      })

      useLearnAndCreateSwitcher.setState({
        conversationDataRolePlay: newData,
      })

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

  /*

  
  var newData = useLearnAndCreateSwitcher.getState().conversationDataRolePlay

  var selector = Math.floor(Math.random() * 10)

  if (selector === 0) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "It's the big man Elon how are you doing today. I like cars and rainbows and a few other things",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 1) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "Zoom Zoom, I'm heading off in my model S, why are you disturbing me today",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 2) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "Have you talked with Jeff Bezos lately, that man is crazy. He thinks he can simply copy me and like what, I'm not going to fight back",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 3) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "I think I might be up to 9 kids, umm, I can't really remember. My life is a bit of a mess, but I'm still amazing, cause I am Elon",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 4) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "I'm deciding between moving back to San Francisco or staying in Austin. I mean my office is in SF becuase of Twitter",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 5) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "I'm figuring out how to get to Mars. I think I'm going to need to build a new rocket. I'm thinking of calling it the Falcon 10",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 6) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "Well, we're trying to get to Mars, but I'm not sure if we'll make it. I'm not sure if I'll make it. I'm not sure if you'll make it. I'm not sure if anyone will make it",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 7) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "Hmm this sounds like a good idea, but maybe it's really not",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 8) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "We're getting very close to the singularity. I'm not sure if I'll be alive when it happens, but I'm sure it will happen",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  } else if (selector === 9) {
    newData.push({
      name: 'Avatar',
      response_white: [
        "Is life really just one giant simulation, I'm trying to figure that out for myself. I'm not sure if I'll ever figure it out, but I'm trying",
      ],
      response_gradient: [],
      image: [],
      video: [''],
    })
  }

  useLearnAndCreateSwitcher.setState({
    conversationDataRolePlay: newData,
  })

*/
}

/*
{
      name: 'User',
      response_white: [
        'Hello there rocket man, can you create an image for me of a boat sailing through the ocean in black and white?',
      ],
      response_gradient: [],
    },
    {
      name: 'Avatar',
      response_white: ['How does this look?'],
      response_gradient: [],
    },
*/

// we need to first append the user response
// then we need to append the avatar response
