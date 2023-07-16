import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useCharacterVoiceSwitcher = create((set) => ({
  audioOn: true,
}))

export default useCharacterVoiceSwitcher
