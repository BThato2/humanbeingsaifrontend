/* istanbul ignore file */
import Main from 'experiences/home/parent/mainparent'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import useAPIRouteSwitcher from 'statemanagers/apiRouteManager'


export default function Home() {
  // NEED TO SET THE API ROUTES - START

  useEffect(() => {
    console.log('Captain')
    console.log(window.location.href)
    if (window.location.href === 'http://localhost:3000/') {
      console.log('Captain1')
      useAPIRouteSwitcher.setState({
        apiURL: 'http://localhost:8000',
      })
    }

    if (window.location.href === 'https://demo.humanbeings.ai/') {
      console.log('Captain2')
      useAPIRouteSwitcher.setState({
        apiURL: 'https://oppa.colinsnyder.com',
      })
    }
  }, [])

  // NEED TO SET THE API ROUTES - END

  return (
    <div>
      <React.Fragment>

        
      <Main />
      </React.Fragment>
     
       
      
    </div>
  )
}

const ScrollBlocker = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`
