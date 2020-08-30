import React from "react"
import styled from "styled-components"

const SText = styled.div`
  line-height: 1.6;
  margin-bottom: ${props => props.marginBottom}rem;
  font-size: 1em;
`

const Text = ({ marginBottom, children }) => {
  return <SText marginBottom={marginBottom}>{children}</SText>
}

export default Text
