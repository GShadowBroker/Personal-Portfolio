import React from "react"
import styled from "styled-components"

const SText = styled.div`
  line-height: 1.6;
  margin-bottom: ${props => props.marginBottom}rem;
`

const Text = ({ marginBottom, children }) => {
  return <SText marginBottom={marginBottom}>{children}</SText>
}

export default Text
