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
  SiNetlify,
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

const Projects = ({ projects }) => {
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
            Trabalhar neste projeto foi uma experiência extremamente rica que me
            permitiu aprofundar conhecimentos em diversas tecnologias como
            GraphQL e Apollo.
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
            fosse uma operação de compra real.
          </ProjectDescription>
          <ProjectDescription>
            Quando trabalhei neste aplicativo, pude colocar em prática
            conhecimentos sobre o Express, segurança de dados, PostgreSQL e
            Sequelize ORM.
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
            incremento de cada jogada. Use-o no computador ou celular para
            controlar o tempo das jogadas. Construído inteiramente no React e em
            CSS vanilla.
          </ProjectDescription>
          <ProjectDescription>
            Este foi um dos meus primeiros projetos em ReactJS. Nele, busquei
            fazer uso dos componentes de classe e dos novos componentes
            funcionais com hooks. Com isso, pude demonstrar as nuances de ambas
            as abordagens, tanto no que se refere à sintaxe quanto à forma como
            elas tratam o 'estado' da aplicação.
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
            Este é meu humilde portfólio feito com React, Styled Components,
            Gatsby e Netlify CMS. Nele, busquei empregar um design ao mesmo
            tempo minimalista e moderno. O meu objetivo foi construir um site
            estático baseado em javascript que fosse rápido e que pudesse contar
            com boa otimização de SEO, gerenciamento de tema (claro e escuro),
            integração de formulário com a Netlify e habilidade de facilmente
            editar o conteúdo do site com Netlify CMS.
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
            <Icon>
              <SiNetlify title="Netlify e Netlify CMS" />
            </Icon>
          </Technologies>
        </ProjectDetailsContainer>
        <Project
          path={require(`../../assets/portfolio_${
            theme === "dark" ? "light" : "dark"
          }_1.png`)}
        ></Project>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
