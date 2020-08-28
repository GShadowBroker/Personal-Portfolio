import React, { useContext } from "react"
import ContactForm from "./ContactForm"
import {
  ContactWrapper,
  SectionTitle,
  ContactContainer,
  FormTitle,
  Title,
  FormContainer,
} from "./styles"
import Text from "../utils/Text"
import { themeContext } from "../../utils/ThemeContext"

const Contact = () => {
  const { theme } = useContext(themeContext)
  return (
    <ContactWrapper>
      <SectionTitle id="contact" theme={theme}>
        CONTATO
      </SectionTitle>
      <ContactContainer>
        <FormTitle>
          <Title>Vamos conversar?</Title>
          <Text>
            Deseja discutir um projeto, tem alguma dúvida ou só quer bater um
            papo? Manda ai uma mensagem!
          </Text>
        </FormTitle>
        <FormContainer>
          <ContactForm />
        </FormContainer>
      </ContactContainer>
    </ContactWrapper>
  )
}

export default Contact
