import React, { useContext } from "react"
import { themeContext } from "../../utils/ThemeContext"
import Button from "../utils/Button"
import Text from "../utils/Text"
import {
  HeroContainer,
  HeroLeftPane,
  HeroImageContainer,
  Image,
  Headline,
  SubHeadline,
  Header,
} from "./styles"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { graphql, useStaticQuery } from "gatsby"

const Hero = () => {
  const { theme } = useContext(themeContext)

  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              hero_description
            }
          }
        }
      }
    }
  `)

  const heroDescription = data?.allMarkdownRemark.edges.filter(
    e => !!e.node.frontmatter.hero_description
  )[0]?.node.frontmatter.hero_description

  return (
    <HeroContainer>
      <HeroLeftPane>
        <Header>
          <Headline>Olá!</Headline>
          <Headline style={{ marginBottom: "1rem" }}>
            Sou <strong>Gledyson,</strong>
          </Headline>
          <SubHeadline style={{ marginBottom: "2rem" }}>
            desenvolvedor web.
          </SubHeadline>
          <Text marginBottom={3}>{heroDescription || "undefined"}</Text>
          <Button
            text="ME CONTRATE"
            handleClick={() => {
              document.querySelector("#contact").scrollIntoView()
              trackCustomEvent({
                category: "Custom Button",
                action: "Click",
                label: "Botão me contrate",
              })
            }}
          />
        </Header>
      </HeroLeftPane>
      <HeroImageContainer theme={theme}>
        <Image />
      </HeroImageContainer>
    </HeroContainer>
  )
}

export default Hero
