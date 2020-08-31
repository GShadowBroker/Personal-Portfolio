import React from "react"
import styled from "styled-components"

const Link = styled.a`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;

    height: 0.4rem;
    background-color: rgba(255, 99, 72, 0.4);
    transition: all 0.2s linear;
  }
  &:hover::after {
    background-color: rgba(255, 99, 72, 0.7);
    left: 0;
    width: 100%;
  }
`

const ExternalLink = ({ children, href, target }) => {
  return (
    <Link href={href} target={target} rel="noopener">
      {children}
    </Link>
  )
}

export default ExternalLink
