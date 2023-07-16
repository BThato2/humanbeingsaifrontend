import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useLearnAndCreateSwitcher = create(() => ({
  conversationDataRolePlay: [
    {
      name: 'Avatar',
      response_white: [
        'Hey Friend, it’s Elon. I’m taking a little break from launching rockets into space.',
        'What can I do for you?',
      ],
      response_gradient: [
        'Draft a design brief for my community bookstore’s new logo',
        'Tell me about the code within the React Github repo',
        'What are some ways to make noodles more delicious?',
      ],
      image: [''],
      video: [''],
    },
  ],
  conversationDataInformation: [
    {
      name: 'Avatar',
      response_white: [
        'Hey Friend, it’s Elon. I’m taking a little break from launching rockets into space.',
        'What can I do for you?',
      ],
      response_gradient: [
        'Draft a design brief for my community bookstore’s new logo',
        'Tell me about the code within the React Github repo',
        'What are some ways to make noodles more delicious?',
      ],
      image: [''],
      video: [''],
    },
  ],
  conversationDataImage: [
    {
      name: 'Avatar',
      response_white: [
        'Hey Friend, it’s Elon. I’m taking a little break from launching rockets into space.',
        'What can I do for you?',
      ],
      response_gradient: [
        'Draft a design brief for my community bookstore’s new logo',
        'Tell me about the code within the React Github repo',
        'What are some ways to make noodles more delicious?',
      ],
      image: [''],
      video: [''],
    },
  ],
  conversationDataVideo: [
    {
      name: 'Avatar',
      response_white: [
        'Hey Friend, it’s Elon. I’m taking a little break from launching rockets into space.',
        'What can I do for you?',
      ],
      response_gradient: [
        'Draft a design brief for my community bookstore’s new logo',
        'Tell me about the code within the React Github repo',
        'What are some ways to make noodles more delicious?',
      ],
      image: [''],
      video: [''],
    },
  ],
}))

export default useLearnAndCreateSwitcher
