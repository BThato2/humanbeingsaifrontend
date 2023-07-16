import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const usePromptTextSwitcher = create((set) => ({
  audioTranscriptionOn: false,
  audioMessage: '',
  // API Related
  waitingForMessage: false,
}))

export default usePromptTextSwitcher
