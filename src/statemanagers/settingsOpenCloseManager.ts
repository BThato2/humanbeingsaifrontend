import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useSettingsOpenCloseSwitcher = create((set) => ({
  settingsIsOpen: true,
}))

export default useSettingsOpenCloseSwitcher
