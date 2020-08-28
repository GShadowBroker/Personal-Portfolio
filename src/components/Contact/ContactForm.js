import React, { useContext } from "react"
import Buttom from "../utils/Button"
import { themeContext } from "../../utils/ThemeContext"
import {
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  ActionGroup,
  ErrorMessage,
} from "./styles"
import { useForm } from "react-hook-form"
import { BiError } from "react-icons/bi"

const ContactForm = () => {
  const { theme } = useContext(themeContext)
  const { register, handleSubmit, errors, reset } = useForm()

  const onSubmit = (data, e) => {
    const { email, name, content } = data
    if (!email || !name || !content) return
    console.table(data)
    reset()
    alert("Formulário enviado! Obrigado por entrar em contato.")
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      name="Portfolio Contact"
      method="POST"
      data-netlify="true"
    >
      <InputGroup>
        <Label htmlFor="name">nome</Label>
        <Input
          theme={theme}
          id="name"
          name="name"
          type="text"
          ref={register({ required: true, maxLength: 100 })}
        />
        {errors.name && errors.name.type === "required" && (
          <ErrorMessage>
            <BiError />
            <span> O nome é obrigatório</span>
          </ErrorMessage>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <ErrorMessage>
            <BiError />
            <span>
              {" "}
              O nome fornecido é longo demais (máximo 100 caractéres)
            </span>
          </ErrorMessage>
        )}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="email">e-mail</Label>
        <Input
          id="email"
          name="email"
          theme={theme}
          type="email"
          ref={register({
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            maxLength: 254,
          })}
        />
        {errors.email && errors.email.type === "required" && (
          <ErrorMessage>
            <BiError />
            <span> O e-mail é obrigatório</span>
          </ErrorMessage>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <ErrorMessage>
            <BiError />
            <span> O e-mail fornecido é inválido</span>
          </ErrorMessage>
        )}
        {errors.email && errors.email.type === "maxLength" && (
          <ErrorMessage>
            <BiError />
            <span> O e-mail é longo demais (máximo 254 caractéres)</span>
          </ErrorMessage>
        )}
      </InputGroup>

      <InputGroup>
        <Label htmlFor="content">mensagem</Label>
        <TextArea
          id="content"
          name="content"
          theme={theme}
          ref={register({ required: true, maxLength: 2048 })}
        />
        {errors.content && errors.content.type === "required" && (
          <ErrorMessage>
            <BiError />
            <span> O campo de mensagem não pode estar vazio</span>
          </ErrorMessage>
        )}
        {errors.content && errors.content.type === "maxLength" && (
          <ErrorMessage>
            <BiError />
            <span> A mensagem é longa demais (máximo 2048 caractéres)</span>
          </ErrorMessage>
        )}
      </InputGroup>
      <ActionGroup>
        <Buttom
          type="submit"
          text="ENVIAR"
          handleClick={handleSubmit(onSubmit)}
        />
      </ActionGroup>
    </Form>
  )
}

export default ContactForm