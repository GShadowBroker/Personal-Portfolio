import React, { useContext } from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import "../../stylesheets/global.css"
import { themeContext } from "../../utils/ThemeContext"

const Global = styled.div`
  background-color: ${props => colors[props.theme].background};
  color: ${props => colors[props.theme].color};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children }) => {
  const { theme } = useContext(themeContext)

  return <Global theme={theme}>{children}</Global>
}

export default Layout
