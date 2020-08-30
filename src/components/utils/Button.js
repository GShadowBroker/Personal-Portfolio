import React, { useContext } from "react"
import styled from "styled-components"
import { themeContext } from "../../utils/ThemeContext"
import colors from "../../constants/colors"

const SButton = styled.a`
  display: block;
  border: none;
  position: relative;
  margin-top: 1.5rem;
  background-color: ${props => colors[props.theme].shadow};

  height: 4rem;
  width: 12rem;

  cursor: pointer;
  outline: none;

  &::after {
    content: '${props => props.text}';
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 100;
    height: 100%;
    width: 100%;
    background-color: ${colors.secondary};
    color: #ffff;
    font-family: inherit;
    font-size: 1em;
    font-weight: 800;

    position: absolute;
    top: 0;
    left: 0;
    transform: translate(12px, -12px);
    transition: all 0.1s linear;
  }

  &:hover::after {
    transform: translate(5px, -5px);
  }
  &:focus::after {
    outline: 2px solid black;
  }
`

const Button = ({ text, href, handleClick }) => {
  const { theme } = useContext(themeContext)
  return (
    <SButton
      text={text}
      theme={theme}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      href={href}
    />
  )
}

export default Button
