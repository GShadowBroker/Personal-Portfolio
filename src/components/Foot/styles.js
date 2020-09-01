import styled from "styled-components"
import colors from "../../constants/colors"

export const FooterContainer = styled.footer`
  background: ${props => colors[props.theme].footer};
  margin-top: 10rem;
  height: 160px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    margin: 1rem 0.8rem;
  }
`
export const Text = styled.div`
  font-size: 0.9em;
`

export const Social = styled.div`
  display: flex;
  & > div:last-of-type {
    margin-right: 0;
  }
  & > div {
    margin: 0 0.5rem;
  }
`
export const Icon = styled.div`
  & > a {
    display: flex;
  }

  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: ${props => (props.hover ? props.hover : "inherit")};
  }
`
