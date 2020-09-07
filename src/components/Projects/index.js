import React, { useContext } from "react"
import { themeContext } from "../../utils/ThemeContext"
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaBootstrap,
  FaChevronLeft,
  FaChevronRight,
  FaLink,
  FaGithub,
} from "react-icons/fa"
import {
  SiStyledComponents,
  SiApollographql,
  SiGraphql,
  SiPostgresql,
  SiGatsby,
} from "react-icons/si"
import ExternalLink from "../utils/ExternalLink"
import useImage from "../utils/useImage"
import {
  ProjectsContainer,
  Title,
  ProjectsWrapper,
  Project,
  ProjectDetailsContainer,
  ProjectTitle,
  ProjectLinks,
  LinkContainer,
  ProjectDescription,
  Technologies,
  Icon,
  Overlay,
  ChevronLeft,
  ChevronRight,
  Controls,
  ImageCount,
} from "./styles"

const Projects = () => {
  const { theme } = useContext(themeContext)
  const orkut = useImage(4)
  const shop = useImage(4)
  const chess = useImage(2)

  return (
    <ProjectsContainer id="projects">
      <Title theme={theme} className="section__title">
        PROJETOS
      </Title>
      <ProjectsWrapper left>
        <Project path={require(`../../assets/orkut_${orkut.value.index}.png`)}>
          <Overlay>
            <ChevronLeft onClick={orkut.prevImage}>
              <FaChevronLeft />
            </ChevronLeft>
            <ChevronRight onClick={orkut.nextImage}>
              <FaChevronRight />
            </ChevronRight>
            <Controls>
              {Array.from(Array(orkut.value.total).keys()).map((i, index) => (
                <ImageCount
                  key={index}
                  onClick={() => orkut.jumpToImage(index + 1)}
                  filled={orkut.value.index === index + 1}
                />
              ))}
            </Controls>
          </Overlay>
        </Project>
        <ProjectDetailsContainer left>
          <ProjectTitle>Clone do Orkut</ProjectTitle>
          <ProjectLinks>
            <LinkContainer>
              <FaLink />
              <ExternalLink
                href="https://orkutnostalgia.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                visitar
              </ExternalLink>
            </LinkContainer>
            <LinkContainer>
              <FaGithub />
              <ExternalLink
                href="https://github.com/GShadowBroker/orkut-clone-server"
                target="_blank"
                rel="noreferrer"
              >
                backend
              </ExternalLink>
            </LinkContainer>
            <LinkContainer>
              <FaGithub />
              <ExternalLink
                href="https://github.com/GShadowBroker/orkut-clone-client"
                target="_blank"
                rel="noreferrer"
              >
                front-end
              </ExternalLink>
            </LinkContainer>
          </ProjectLinks>
          <ProjectDescription>
            Um clone full-stack da rede social que emula várias funcionalidades
            do site antigo, como scraps, depoimentos, criação de comunidades,
            linha do tempo, álbum de fotos etc.
          </ProjectDescription>
          <ProjectDescription>
            Trabalhar neste projeto foi uma experiência extremamente rica, pois
            me permitiu aprofundar conhecimentos em várias tecnologias. Em
            particular, aprendi muito sobre o uso de GraphQL e Apollo.
          </ProjectDescription>
          <Technologies>
            <Icon>
              <FaReact title="ReactJS" />
            </Icon>
            <Icon>
              <SiStyledComponents title="Styled Components" />
            </Icon>
            <Icon>
              <SiApollographql title="Apollo" />
            </Icon>
            <Icon>
              <FaNodeJs title="NodeJS" />
            </Icon>
            <Icon>
              <SiGraphql title="GraphQL" />
            </Icon>
            <Icon>
              <SiPostgresql title="PostgreSQL" />
            </Icon>
          </Technologies>
        </ProjectDetailsContainer>
      </ProjectsWrapper>
      <ProjectsWrapper right>
        <ProjectDetailsContainer right>
          <ProjectTitle>Plataforma de e-commerce</ProjectTitle>
          <ProjectLinks>
            <LinkContainer>
              <FaLink />
              <ExternalLink
                href="https://minhalojadecelulares.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                visitar
              </ExternalLink>
            </LinkContainer>
            <LinkContainer>
              <FaGithub />
              <ExternalLink
                href="https://github.com/GShadowBroker/minhaloja"
                target="_blank"
                rel="noreferrer"
              >
                ver código
              </ExternalLink>
            </LinkContainer>
          </ProjectLinks>
          <ProjectDescription>
            Esta é uma loja virtual fictícia construída com NodeJS, Express e
            Pug (Jade). É uma loja totalmente funcional, integrada com o{" "}
            <ExternalLink
              href="https://pagseguro.uol.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              PagSeguro
            </ExternalLink>
            , que permite adicionar itens ao carrinho de compras, finalizar a
            compra e redirecionar o usuário ao sandbox do PagSeguro como se
            fosse uma operação real.
          </ProjectDescription>
          <ProjectDescription>
            Quando trabalhei neste aplicativo, aprendi muito sobre o Express,
            sobre segurança de dados, sobre PostgreSQL e Sequelize ORM.
          </ProjectDescription>
          <Technologies>
            <Icon>
              <FaNodeJs title="NodeJS" />
            </Icon>
            <Icon
              title="Express"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingBottom: 10,
                letterSpacing: -1,
                marginRight: 10,
              }}
            >
              <span style={{ fontSize: ".5em" }}>EXPRESS</span>
            </Icon>
            <Icon
              title="Pug"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                paddingBottom: 15,
                letterSpacing: -1,
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <span style={{ fontSize: ".7em" }}>pug</span>
            </Icon>
            <Icon>
              <SiPostgresql title="PostgreSQL" />
            </Icon>
            <Icon title="Bootstrap">
              <FaBootstrap />
            </Icon>
            <Icon title="SASS">
              <FaSass />
            </Icon>
          </Technologies>
        </ProjectDetailsContainer>
        <Project path={require(`../../assets/loja_${shop.value.index}.png`)}>
          <Overlay>
            <ChevronLeft onClick={shop.prevImage} light>
              <FaChevronLeft />
            </ChevronLeft>
            <ChevronRight onClick={shop.nextImage} light>
              <FaChevronRight />
            </ChevronRight>
            <Controls>
              {Array.from(Array(shop.value.total).keys()).map((i, index) => (
                <ImageCount
                  key={index}
                  onClick={() => shop.jumpToImage(index + 1)}
                  filled={shop.value.index === index + 1}
                />
              ))}
            </Controls>
          </Overlay>
        </Project>
      </ProjectsWrapper>
      <ProjectsWrapper left>
        <Project path={require(`../../assets/chess_${chess.value.index}.png`)}>
          <Overlay>
            <ChevronLeft onClick={chess.prevImage}>
              <FaChevronLeft />
            </ChevronLeft>
            <ChevronRight onClick={chess.nextImage}>
              <FaChevronRight />
            </ChevronRight>
            <Controls>
              {Array.from(Array(chess.value.total).keys()).map((i, index) => (
                <ImageCount
                  key={index}
                  onClick={() => chess.jumpToImage(index + 1)}
                  filled={chess.value.index === index + 1}
                />
              ))}
            </Controls>
          </Overlay>
        </Project>
        <ProjectDetailsContainer left>
          <ProjectTitle>Temporizador de xadrez</ProjectTitle>
          <ProjectLinks>
            <LinkContainer>
              <FaLink />
              <ExternalLink
                href="https://onlinechessclock.netlify.app/"
                target="_blank"
              >
                visitar
              </ExternalLink>
            </LinkContainer>
            <LinkContainer>
              <FaGithub />
              <ExternalLink
                href="https://github.com/GShadowBroker/Chess-Clock-React-App"
                target="_blank"
                rel="noreferrer"
              >
                ver código
              </ExternalLink>
            </LinkContainer>
          </ProjectLinks>
          <ProjectDescription>
            Um temporizador de xadrez online que permite customizar o timer e o
            incremento de cada jogada. Construído inteiramente no React e em CSS
            vanilla.
          </ProjectDescription>
          <ProjectDescription>
            Neste projeto, aprendi lições valiosas sobre componentes de classe
            no React e suas nuances comparado a componentes funcionais com
            hooks.
          </ProjectDescription>
          <Technologies>
            <Icon>
              <FaReact title="ReactJS" />
            </Icon>
          </Technologies>
        </ProjectDetailsContainer>
      </ProjectsWrapper>
      <ProjectsWrapper right>
        <ProjectDetailsContainer right>
          <ProjectTitle>Meu portfólio</ProjectTitle>
          <ProjectLinks>
            <LinkContainer>
              <FaGithub />
              <ExternalLink
                href="https://github.com/GShadowBroker/Personal-Portfolio"
                target="_blank"
                rel="noreferrer"
              >
                ver código
              </ExternalLink>
            </LinkContainer>
          </ProjectLinks>

          <ProjectDescription>
            Este humilde portfólio foi feito com React, Styled Components e
            Gatsby. Mesmo tendo sido meu primeiro contato com Gatsby, minha
            experiência com ele foi maravilhosa. Aprendi coisas novas sobre SEO,
            detecção de idioma e internacionalização.
          </ProjectDescription>

          <Technologies>
            <Icon>
              <FaReact title="ReactJS" />
            </Icon>
            <Icon>
              <SiGatsby title="Gatsby" />
            </Icon>
            <Icon>
              <SiStyledComponents title="Styled Components" />
            </Icon>
          </Technologies>
        </ProjectDetailsContainer>
        <Project path={require("../../assets/portfolio_1.png")}></Project>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
