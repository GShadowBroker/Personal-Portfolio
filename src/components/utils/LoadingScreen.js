import React from "react"
import styled from "styled-components"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import colors from "../../constants/colors"

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
`

const Icon = styled.div`
  margin: auto;
  display: flex;
  font-size: 1.5em;
  color: ${colors.secondary};

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation-name: loading;
  animation-iteration-count: infinite;
  animation-duration: 0.5s;
  animation-timing-function: linear;
`

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <Icon>
        <AiOutlineLoading3Quarters />
      </Icon>
    </LoadingContainer>
  )
}

export default LoadingScreen
