import {
  Container,
  Content,
  ContentProjects,
  ContentMe,
  AboutMe,
  Profile,
  Left,
  Center,
  Right,
  Me,
  DivImage,
  DivImg,
  Infos,
  Typing,
  Buttons,
  Button,
  ButtonContact,
  DivTitleAbout,
  CardTechnologies,
  PortifolioContainer,
  Article,
  ArticleImage,
  ArticleText,
} from "./styles";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { PiSignIn } from "react-icons/pi";

import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import { optionsParticles } from "../../components/optionsParticles";
import { Navbar } from "../../components/header";
import {
  EnvelopeSimple,
  File,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  // outras propriedades necessárias
}

export function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const words = ["Tailwind", "React", "Styled-Components"];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const delay = 2000;

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const currentText = isDeleting
        ? currentWord.substring(0, typingText.length - 1)
        : currentWord.substring(0, typingText.length + 1);

      setTypingText(currentText);
      if (
        (!isDeleting && typingText === currentWord) ||
        (isDeleting && typingText === "")
      ) {
        setTimeout(() => {
          setIsDeleting(!isDeleting);
          if (!isDeleting) {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }, delay);
      }
    };
    const typeTimer = setTimeout(type, isDeleting ? 50 : 200);

    return () => clearTimeout(typeTimer);
  }, [typingText, isDeleting, wordIndex, words, delay]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const [repos, setRepos] = useState<Repo[]>([]);
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [reposToShow, setReposToShow] = useState<Repo[]>([]);

  const toggleShowRepos = () => {
    setShowAllRepos(!showAllRepos);
  };

  useEffect(() => {
    if (showAllRepos) {
      setReposToShow(repos);
    } else {
      setReposToShow(repos.slice(0, 6));
    }
  }, [showAllRepos, repos]);

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch(
          "https://api.github.com/users/pablokaliel/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data: Repo[] = await response.json(); // Define o tipo de dados recebidos como um array de Repo

        const projects = data.filter((repo) => {
          return repo.topics && repo.topics.includes("react");
        });

        setRepos(projects);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }

    setTimeout(() => {
      getUserInfo();
    }, 3000);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Container>
      <Navbar />
      <Content id="home">
        <Profile>
          <Left>
            <a href="#">
              <GithubLogo size={18} />
            </a>
            <a href="#">
              <LinkedinLogo size={18} />
            </a>
            <a href="#">
              <InstagramLogo size={18} />
            </a>
          </Left>
          <Center>
            <DivImage>
              <DivImg></DivImg>
              <Infos>
                <h2>Olá, eu sou</h2>
                <h3>Pablo Kaliel</h3>
                <Typing>{typingText} </Typing>
              </Infos>
            </DivImage>

            <Buttons>
              <Button>GitHub</Button>
              <ButtonContact>Fale Comigo</ButtonContact>
            </Buttons>
          </Center>
          <Right>
            <a>
              <EnvelopeSimple />
            </a>
          </Right>
        </Profile>
      </Content>
      <ContentMe id="about">
        <Me>
          <DivTitleAbout>
            <h5>Saiba mais </h5>
            <h1>Sobre Mim</h1>
          </DivTitleAbout>
          <AboutMe>
            <p>
              👨‍💻 Olá, seja bem-vindo(a)!👋🏻
              <br />
              Me chamo Pablo Kaliel, tenho 22 anos e sou apaixonado por Análise
              e Desenvolvimento de Sistemas, formado pela Claretiano - Batatais.
              <br />
              Ao longo da minha jornada acadêmica, explorei diversas tecnologias
              web, como HTML, CSS, JavaScript, e também mergulhei no universo
              mobile, trabalhando com Ionic Framework e C#. Além disso, adquiri
              conhecimento em Back-end, utilizando Firebase e MySql.
              <br />
              Embora minha experiência prática ainda esteja em desenvolvimento,
              tenho me dedicado arduamente ao estudo contínuo, especialmente
              focado em aprimorar minhas habilidades em ReactJS, HTML, CSS e
              Tailwind para a criação de páginas e landing pages.
              Complementarmente, explorei o uso de Firebase e localstorage para
              implementar soluções de Back-end em algumas aplicações.
              <p>
                Você pode conferir meu <a href="#">portfólio</a> para conhecer
                um pouco mais do meu trabalho.
              </p>
              <p style={{ marginTop: "1.6rem" }}>
                Veja ao lado algumas tecnologias que tenho trabalhado
                recentemente:
              </p>
            </p>

            <CardTechnologies>
              <h4>Tecnologias</h4>
              <div>
                <a target="_blank" href="https://react.dev/">
                  <FaReact size={22} /> <p>ReactJS</p>
                </a>
                <a target="_blank" href="https://firebase.google.com/?hl=pt">
                  <IoLogoFirebase size={22} />
                  <p>FireBase</p>
                </a>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                >
                  <SiStyledcomponents size={35} />
                  <p>Styled-Components</p>
                </a>
                <a target="_blank" href="https://tailwindcss.com/">
                  <SiTailwindcss size={22} /> <p>TailwindCSS</p>
                </a>
              </div>
            </CardTechnologies>
          </AboutMe>
        </Me>
      </ContentMe>

      <ContentProjects id="projects">
        <DivTitleAbout>
          <h5>Meus </h5>
          <h1>Projetos</h1>
        </DivTitleAbout>

        <PortifolioContainer>
    {reposToShow.length > 0 ? (
            reposToShow.map((repo, i) => (
              <Article key={i}>
                <ArticleImage>
                  <File size={40}/>
                  <a target="_blank" href={repo.html_url}><PiSignIn size={20} /></a>
                </ArticleImage>
                <ArticleText>
                  <h3>{repo.name}</h3>
                  <div>
                    <p>{repo.description}</p>
                  </div>
                  <small>{repo.topics.join(", ")}</small>
                </ArticleText>
              </Article>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </PortifolioContainer>
        {repos.length > 6 && (
          <Button style={{marginTop:"1.6rem"}} onClick={toggleShowRepos}>
            {showAllRepos ? "Ver Menos" : "Ver Mais"}
          </Button>
        )}
       
      </ContentProjects>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles}
      />
    </Container>
  );
}
