import styled from "styled-components"
import colors from "../../constants/colors"

export const ContactWrapper = styled.section``

export const SectionTitle = styled.div`
  font-size: 2.2em;
  font-weight: 500;
  margin: auto;
  padding-bottom: 0.5rem;

  position: relative;
  width: fit-content;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background: ${props => colors[props.theme].color};
    height: 3px;
    width: 50%;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`
export const FormTitle = styled.div`
  flex: 1;
  max-width: 50%;

  padding-right: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    max-width: 80vw;
    padding: 0;
    margin-bottom: 4rem;
  }
`

export const Title = styled.div`
  font-size: 2.2em;
  font-weight: 600;
  margin-bottom: 2rem;
`

export const FormContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media only screen and (max-width: 1000px) {
    max-width: 80vw;
    min-width: 80vw;
  }
`

export const Form = styled.form`
  position: relative;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`
export const Label = styled.label`
  padding: 0.5rem 0;
  color: ${colors.secondary};
  font-weight: 500;
`
export const Input = styled.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  min-height: 35px;
  width: 100%;
  padding: 0.2rem 0.6rem;
  background-color: ${props => colors[props.theme].shadow};
  color: ${props => colors[props.theme].inputText};
  transition: all 0.3s linear;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${colors.secondary};
  }
`
export const TextArea = styled.textarea`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  width: 100%;
  min-height: 200px;
  resize: vertical;
  padding: 0.5rem 0.6rem;

  background-color: ${props => colors[props.theme].shadow};
  color: ${props => colors[props.theme].inputText};
  transition: all 0.3s linear;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${colors.secondary};
  }
`

export const ActionGroup = styled.div`
  margin-top: 2.5rem;
`
export const ErrorMessage = styled.div`
  color: ${colors.error};
  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  span {
    margin-left: 0.4rem;
  }
`
