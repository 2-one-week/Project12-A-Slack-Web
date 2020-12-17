import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
`

const Circle = styled.div`
  width: 5%;
  height: 5%;
  border-radius: 50%;
  background-color: #ffffff;
  animation: ${bounce} 1s infinite;
`

const Loading = () => {
  return <Circle />
}

export default Loading
