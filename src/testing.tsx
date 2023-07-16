/* istanbul ignore file */
import Main from 'experiences/home/parent/mainparent'
import styled from 'styled-components'
import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'

export default function TestingHere() {
  const [buttonText, setButtonText] = useState('Start')
  const [messageText, setMessageText] = useState('')
  const [titleText, setTitleText] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const ws = useRef(null)
  const [stopper, setStopper] = useState(false)
  const [stream, setStream] = useState<MediaStream>()

  // set initial state of application variables
  //@ts-ignore

  //@ts-ignore
  //@ts-ignore
  let recorder
  var currentHost = 'http://localhost:8000/voice-input-to-text-transcription'
  //@ts-ignore

  // runs real-time transcription and handles global variables
  const run = async () => {
    if (stopper == true) {
      return
    } else {
      const options = {
        method: 'POST',
      }
      const response = await fetch(currentHost, options) // get temp session token from server.js (backend)
      const data = await response.json()

      if (data.error) {
        alert(data.error)
      }

      const { token } = data

      // establish wss with AssemblyAI (AAI) at 16000 sample rate
      //@ts-ignore
      ws.current = await new WebSocket(
        `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`,
      )
      // ON OPEN
      //
      //
      //
      //
      //@ts-ignore
      ws.current.onopen = () => {
        // once socket is open, begin recording
        //@ts-ignore
        setMessageText('')

        navigator.mediaDevices
          .getUserMedia({ audio: true, video: false })
          .then(function (mediaStream) {
            setStream(mediaStream)
            // Do something with the stream (e.g., play it, record it, etc.)
            //@ts-ignore
            recorder = new RecordRTC(mediaStream, {
              type: 'audio',
              mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
              //@ts-ignore
              recorderType: StereoAudioRecorder,
              timeSlice: 250, // set 250 ms intervals of data that sends to AAI
              desiredSampRate: 16000,
              numberOfAudioChannels: 1, // real-time requires only one channel
              bufferSize: 4096,
              audioBitsPerSecond: 128000,
              //@ts-ignore
              ondataavailable: (blob) => {
                const reader = new FileReader()
                reader.onload = () => {
                  const base64data = reader.result

                  // audio data must be sent as a base64 encoded string
                  //@ts-ignore
                  if (ws.current) {
                    //@ts-ignore
                    ws.current.send(
                      JSON.stringify({
                        //@ts-ignore
                        audio_data: base64data.split('base64,')[1],
                      }),
                    )
                  }
                }
                reader.readAsDataURL(blob)
              },
            })
            recorder.startRecording()
          })
          .catch(function (error) {
            console.error('getUserMedia() error: ', error)
          })
      }
      // ON CLOSE
      //
      //
      //
      //
      //@ts-ignore
      ws.current.onclose = () => {
        function closeMicrophone() {
          //@ts-ignore
          stream.getAudioTracks().forEach(function (track) {
            track.stop()
          })
        }
        closeMicrophone()
      }

      const wsCurrent = ws.current

      if (buttonText === 'Stop') {
        //@ts-ignore
        wsCurrent.close()

        return
      } else {
        // handle incoming messages to display transcription to the DOM
        const texts = {}
        //@ts-ignore
        ws.current.onmessage = (message) => {
          let msg = ''
          const res = JSON.parse(message.data)
          //@ts-ignore
          texts[res.audio_start] = res.text
          const keys = Object.keys(texts)
          //@ts-ignore
          keys.sort((a, b) => a - b)
          for (const key of keys) {
            //@ts-ignore
            if (texts[key]) {
              //@ts-ignore
              msg += ` ${texts[key]}`
            }
          }

          //@ts-ignore
          console.log(msg)
          setMessageText(msg)
        }
      }
      setIsRecording(!isRecording)
      //@ts-ignore
      setButtonText(isRecording ? 'Start' : 'Stop')
      //

      //@ts-ignore
      setTitleText(
        isRecording
          ? 'Click stop to end recording!'
          : 'Click start to begin recording!',
      )
    }
  }

  return (
    <div>
      <Helmet>
        <script src="https://www.WebRTC-Experiment.com/RecordRTC.js" />
      </Helmet>
      <Title>{titleText}</Title>
      <Message>{messageText}</Message>
      <CustomButton
        onClick={() => {
          run()
        }}
      >
        {buttonText}
      </CustomButton>
    </div>
  )
}

const CustomButton = styled.button`
  font-size: 40px;
`

const Title = styled.div`
  color: #000000;
  text-align: center;
  font-size: 50px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Message = styled.div`
  color: #000000;
  text-align: center;
  font-size: 82px;
  font-family: Proxima Soft;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
