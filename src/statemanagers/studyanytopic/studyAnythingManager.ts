import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useStudyAnythingSwitcher = create((set) => ({
  showRightAnswer: false,
  showWrongAnswer: false,
}))

export default useStudyAnythingSwitcher
