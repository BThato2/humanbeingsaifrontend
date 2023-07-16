import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useQuestionSwitcher = create((set) => ({
  questionNumber: 1,
}))

export default useQuestionSwitcher
