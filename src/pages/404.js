import React from "react"
import styled from "styled-components"
import colors from "../constants/colors"
import { Link } from "gatsby"

const ErrorContainer = styled.div`
  width: 85vw;
  margin: auto;
  color: ${colors.darkGray};

  a {
    color: cyan;
    &:hover {
      color: blue;
    }
  }
`

const NotFound = () => {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <h2>Oooops! Parece que você se perdeu.</h2>
      <Link to="/">Voltar para página principal</Link>
    </ErrorContainer>
  )
}

export default NotFound
