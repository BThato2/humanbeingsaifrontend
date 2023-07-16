import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useAvatarAudioSwitcher = create((set) => ({
  currentAudioUrl: '',
}))

export default useAvatarAudioSwitcher
