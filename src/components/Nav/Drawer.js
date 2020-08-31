import React, { useContext } from "react"
import styled from "styled-components"
import colors from "../../constants/colors"
import { themeContext } from "../../utils/ThemeContext"

const DrawerContainer = styled.div`
  height: 100%;
  width: ${props => (props.active ? 280 : 0)}px;
  opacity: ${props => (props.active ? 1 : 0)};
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  background-color: #111;
  box-shadow: 1px 1px 5px solid ${props => colors[props.theme].shadow};
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.4s;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }

  .closebrn {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
`

const Drawer = ({ toggleDrawer, active }) => {
  const { theme } = useContext(themeContext)

  const handleClick = id => {
    if (!id) return
    document.querySelector(`#${id}`).scrollIntoView()
    toggleDrawer()
  }

  return (
    <DrawerContainer active={active} theme={theme}>
      <a
        href="javascript:void(0)"
        onClick={toggleDrawer}
        role="button"
        aria-label="close drawer menu"
        className="closebtn"
      >
        &times;
      </a>
      <a href="javascript:void(0)" onClick={() => handleClick("about")}>
        Sobre Mim
      </a>
      <a href="javascript:void(0)" onClick={() => handleClick("projects")}>
        Projetos
      </a>
      <a href="javascript:void(0)" onClick={() => handleClick("contact")}>
        Contato
      </a>
    </DrawerContainer>
  )
}

Drawer.defaultProps = {
  active: false,
}

export default Drawer
