import React, { useContext } from "react"
import { themeContext } from "../../utils/ThemeContext"
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaBootstrap,
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
} from "./styles"
import parseHtml from "../utils/parseHtml"
import isBrowser from "../../utils/isBrowser"
let InfiniteCarousel
if ( isBrowser() ) {
  InfiniteCarousel = require( "react-leaf-carousel" ).default
}

const Projects = () => {
  const { theme } = useContext( themeContext )

  const projects = [
    {
      title: "Clone do Orkut",
      description: `
        <p>Réplica full-stack da rede social. O projeto emula várias
        funcionalidades do site antigo, incluindo scraps, depoimentos,
        criação de comunidades, linha do tempo, álbum de fotos, habilidade
        de adicionar amigos à sua rede etc.</p>
        <p>O app emprega Apollo e GraphQL como linguagem de comunicação da API.
        O backend é construído na linguagem NodeJS utilizando Apollo Server/GraphQL, Cloudinary (hospedagem de
        imagens) e PostgreSQL, com autenticação customizada baseada em JSON
        web tokens. No frontend, foi feito uso de ReactJS, Styled Components, Apollo
        Client/GraphQL, entre outros.</p>
      `,
      links: {
        preview: "https://orkutnostalgia.netlify.app",
        frontend_repo: "https://github.com/GShadowBroker/orkut-clone-client",
        backend_repo: "https://github.com/GShadowBroker/orkut-clone-server",
        single_repo: "",
      },
      images: [ "orkut_1.png", "orkut_2.png", "orkut_3.png", "orkut_4.png" ],
      tags: [
        "ReactJS",
        "StyledComponents",
        "Apollo",
        "NodeJS",
        "GraphQL",
        "PostgreSQL",
      ],
    },

    {
      title: "Jogo Brazilian Cat",
      description: `
        <p>Jogo de plataforma feito em Unity e C#. Controle um gato vagando pela noite
        de uma vizinhança brasileira, evitando as corujas e coletandas bistecas pelo caminho.
        Pixel-art feita por mim e recursos sonoros baixados de fontes livres de copyright na internet.</p>
      `,
      links: {
        preview: "https://pokidrake.itch.io/brazilian-cat",
        frontend_repo: "",
        backend_repo: "",
        single_repo: "",
      },
      images: [ "cat_1.png", "cat_2.png", "cat_3.png", "cat_4.png" ],
      tags: [],
    },

    {
      title: "Temporizador de xadrez",
      description: `
        <p>Um temporizador de xadrez online que permite customizar o timer e o
        incremento de cada jogada. Feito para ser usado no computador ou celular para
        controlar o tempo das jogadas. Construído inteiramente no React e em
        CSS vanilla.</p>
      `,
      links: {
        preview: "https://onlinechessclock.netlify.app/",
        frontend_repo: "",
        backend_repo: "",
        single_repo: "https://github.com/GShadowBroker/Chess-Clock-React-App",
      },
      images: [ "chess_1.png", "chess_2.png" ],
      tags: [ "ReactJS" ],
    },

    {
      title: "RC Advocacia",
      description: `
        <p>Feito com ReactJS, Styled Components,
        Gatsby e Contentful CMS. O site permite ao proprietário editar o conteúdo da página e criar
        postagens no blog utilizando a interface de edição do Contentful. Otimização de imagens com
        Gatsby-Image e integração com Netlify forms.</p>
      `,
      links: {
        preview: "https://advocaciarosangelacaetano.com.br/",
        frontend_repo: "",
        backend_repo: "",
        single_repo: "",
      },
      images: [ "office_1.png", "office_2.png", "office_3.png", "office_4.png" ],
      tags: [ "ReactJS", "Gatsby", "StyledComponents", "Netlify" ],
    },

    {
      title: "Meu portfólio",
      description: `
        <p>Também feito com ReactJS, Styled Components,
        Gatsby e Netlify CMS. O site permite alternar entre os temas claro e escuro usando
        Context API do React. Evento de scroll customizado usando apenas a API Interception Observer.
        Hospedado na Netlify e integrado com Netlify Forms.</p>
      `,
      links: {
        preview: "/",
        frontend_repo: "",
        backend_repo: "",
        single_repo: "https://github.com/GShadowBroker/Personal-Portfolio",
      },
      images: [ "portfolio_light_1.png", "portfolio_dark_1.png" ],
      tags: [ "ReactJS", "Gatsby", "StyledComponents", "Netlify" ],
    },

    {
      title: "Plataforma para cadastro de mediadores",
      description: `
        <p>Protótipo de uma plataforma para cadastro de mediadores e câmaras de
        mediação. O sistema permite cadastro de mediadores e câmaras, autorização e autenticação,
        e visualização dos mediadores cadastrados, sendo possível filtrar a base de dados segundo
        diversos critérios, como área de atuação, avaliação, patamar de preço, entre outros.</p>
        <p>O frontend foi construído com ReactJS utilizando Redux e MaterialUI, e o backend foi feito em NodeJS. O banco de 
        dados usado foi o PostgreSQL.</p>
      `,
      links: {
        preview: "https://relaxed-ride-0c87c4.netlify.app/login",
        frontend_repo: "https://github.com/GShadowBroker/cadastro-de-mediadores-cliente",
        backend_repo: "https://github.com/GShadowBroker/cadastro-de-mediadores-servidor",
        single_repo: "",
      },
      images: [ "cadastro_1.png", "cadastro_2.png", "cadastro_3.png", "cadastro_4.png", "cadastro_5.png" ],
      tags: [ "NodeJS", "Express", "PostgreSQL", "StyledComponents", "ReactJS" ],
    },

    {
      title: "Lojinha fictícia de celulares",
      description: `
        <p>Loja virtual fictícia construída
        com NodeJS, Express e Pug (Jade). O app consome a API do
        <a href="https://pagseguro.uol.com.br/">PagSeguro</a>, que permite adicionar itens ao carrinho de compras, finalizar a
        compra e redirecionar o usuário ao sandbox do PagSeguro, processando
        a compra como se fosse uma operação real.</p>
        <p>O app é renderizado no servidor (SSR) e utiliza Express, PostgreSQL, Sequelize ORM e Pug, entre outras tecnologias.
        Foi um dos meus primeiros apps fullstack, mas não poderia deixar de expô-lo no meu portfólio.</p>
      `,
      links: {
        preview: "https://minhalojadecelulares.herokuapp.com/",
        frontend_repo: "",
        backend_repo: "",
        single_repo: "https://github.com/GShadowBroker/minhaloja",
      },
      images: [ "loja_1.png", "loja_2.png", "loja_3.png", "loja_4.png" ],
      tags: [ "NodeJS", "Express", "pug", "PostgreSQL", "Bootstrap", "Sass" ],
    }
  ]

  const icons = {
    ReactJS: <FaReact title="React JS" />,
    NodeJS: <FaNodeJs title="Node JS" />,
    Sass: <FaSass title="SASS" />,
    Bootstrap: <FaBootstrap title="Bootstrap" />,
    StyledComponents: <SiStyledComponents title="Styled Components" />,
    Apollo: <SiApollographql title="Apollo" />,
    GraphQL: <SiGraphql title="GraphQL" />,
    PostgreSQL: <SiPostgresql title="PostgreSQL" />,
    Gatsby: <SiGatsby title="Gatsby" />,
    Netlify: <SiNetlify title="Netlify" />,
    pug: (
      <span
        style={{ fontSize: ".7em", marginBottom: 4, paddingRight: 10 }}
        title="pug"
      >
        pug
      </span>
    ),
    Express: (
      <span style={{ fontSize: ".5em", paddingRight: 10 }} title="Express">
        EXPRESS
      </span>
    ),
  }

  if ( !InfiniteCarousel ) return <div>Failed loading component</div>
  return (
    <ProjectsContainer id="projects">
      <Title theme={theme} className="section__title">
        PROJETOS
      </Title>
      {projects.map( project => (
        <ProjectsWrapper key={project.title}>
          <Project>
            <InfiniteCarousel
              dots={true}
              showSides={true}
              sidesOpacity={0.5}
              sideSize={0.1}
              slidesToScroll={1}
              slidesToShow={1}
              scrollOnDevice={true}
            >
              {project.images.map( ( image, index ) => (
                <div key={index}>
                  <img alt="" src={require( `../../assets/${image}` )} />
                </div>
              ) )}
            </InfiniteCarousel>
            <Technologies>
              {project.tags.map( ( tag, index ) => (
                <Icon key={index}>{icons[ tag ]}</Icon>
              ) )}
            </Technologies>
          </Project>
          <ProjectDetailsContainer>
            <ProjectTitle>{project.title}</ProjectTitle>

            <ProjectLinks>
              <LinkContainer>
                <FaLink />
                <ExternalLink
                  href={project.links.preview}
                  target="_blank"
                  rel="noreferrer"
                >
                  visitar
                </ExternalLink>
              </LinkContainer>
              {project.links.backend_repo && (
                <LinkContainer>
                  <FaGithub />
                  <ExternalLink
                    href={project.links.backend_repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    backend
                  </ExternalLink>
                </LinkContainer>
              )}
              {project.links.frontend_repo && (
                <LinkContainer>
                  <FaGithub />
                  <ExternalLink
                    href={project.links.frontend_repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    front-end
                  </ExternalLink>
                </LinkContainer>
              )}
              {project.links.single_repo && (
                <LinkContainer>
                  <FaGithub />
                  <ExternalLink
                    href={project.links.single_repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ver código
                  </ExternalLink>
                </LinkContainer>
              )}
            </ProjectLinks>

            <ProjectDescription
              dangerouslySetInnerHTML={{
                __html: parseHtml( project.description ),
              }}
            />
          </ProjectDetailsContainer>
        </ProjectsWrapper>
      ) )}
    </ProjectsContainer>
  )
}

export default Projects
