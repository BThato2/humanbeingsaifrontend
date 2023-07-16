//###################################//
//###################################//
//###################################//
// This stores all the experience modals and feeds directly into the home page
//###################################//
//###################################//
//###################################//

import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
// FULL EXPERIENCE BELOW
import TheMainParentSettings from 'experiences/settings/parent/themainparentsettingssidebar'
import TheMainParentDiscoverAvatars from 'experiences/discovernewavatars/parent/themainparentdiscoveravatars'
import useCurrentExperienceSwitcher from 'statemanagers/currentExperienceManager'
import TheMainParentFriendsAvatars from 'experiences/friendsavatars/parent/themainparentfriendsavatars'
import TheMainParentStudyAnyTopic from 'experiences/studyanytopic/parent/TheMainParentStudyAnyTopic'
import TheMainParentConnectionsSettings from 'experiences/settings/children/modal/theMainParentConnectionsSettings'
import TheMainParentAltmanExperience from 'experiences/settings/children/altman/theMainParentAltmanExperience'

export default function ModalParent() {
  const currentExperienceIs = useCurrentExperienceSwitcher(
    (state: any) => state.currentExperienceIs,
  )

  return (
    <AbsoluteDiv2>
      {currentExperienceIs === 'settings' ? <TheMainParentSettings /> : null}
      {currentExperienceIs === 'discoveravatars' ? (
        <TheMainParentDiscoverAvatars />
      ) : null}
      {currentExperienceIs === 'friendsavatars' ? (
        <TheMainParentFriendsAvatars />
      ) : null}
      {currentExperienceIs === 'studyanytopic' ? (
        <TheMainParentStudyAnyTopic />
      ) : null}
      {currentExperienceIs === 'connections' ? (
        <TheMainParentConnectionsSettings />
      ) : null}
      {currentExperienceIs === 'altman' ? (
        <TheMainParentAltmanExperience />
      ) : null}
    </AbsoluteDiv2>
  )
}

const AbsoluteDiv2 = styled.div`
  position: absolute;
  z-index: 1000;
`
