import {
  Container,
  Content,
  ContentProjects,
  CardInfos,
  Contact,
  CardContactsA,
  CardContactsB,
  CardContactsC,
  ContentMe,
  DivStar,
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
  ArticleText,
  DivImageRepo,
  ContentContact,
  FormContact,
  CardContact,
  ContactInfo,
} from "./styles";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import {
  DiscordLogo,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Star,
} from "@phosphor-icons/react";

import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import { useCallback, useEffect, useState } from "react";

import { optionsParticles } from "../../components/optionsParticles";
import { Navbar } from "../../components/header";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  created_at: string;
  images: string[];
}

export function HeroSection() {
  const [contentA, setContentA] = useState(
    <div style={{ width: "100%" }}>
      <GithubLogo size={24} />
      <CardInfos>
        <h4>GitHub</h4>
        <h5>PabloKaliel</h5>
        <a href="#">Conheça meus projetos</a>
      </CardInfos>
    </div>
  );
  const [contentB, setContentB] = useState(
    <div style={{ width: "100%" }}>
      <EnvelopeSimple size={24}/>
      <CardInfos>
        <h4>Email</h4>
        <h5>pablo.kalyell.441@gmail.com</h5>
        <a href="#">Fale Comigo</a>
      </CardInfos>
    </div>
  );
  const [contentC, setContentC] = useState(
    <div style={{ width: "100%" }}>
      <DiscordLogo size={24}/>
      <CardInfos>
        <h4>Discord</h4>
        <h5>ShaZzaN</h5>
        <a href="#">vamos conversar!</a>
      </CardInfos>
    </div>
  );

  const handleSwapContent = () => {
    // Salvando o conteúdo de A temporariamente
    const tempContentA = contentA;
    // Trocando o conteúdo entre A e B
    setContentA(contentB);
    setContentB(contentC);
    setContentC(tempContentA);
  };

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

  async function fetchReadmeImages(owner: string, repo: string) {
    try {
      const readmeResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/readme`
      );
      if (!readmeResponse.ok) {
        throw new Error("Failed to fetch README.md");
      }
      const readmeData = await readmeResponse.json();
      const readmeContent = atob(readmeData.content);
      const imageRegex = /<img.*?src=["']([^"']+)["']/g;
      const imageUrls: string[] = [];
      let match;

      while ((match = imageRegex.exec(readmeContent)) !== null) {
        imageUrls.push(match[1]);
      }
      console.log("URLs das imagens encontradas:", imageUrls);

      return imageUrls;
    } catch (error) {
      console.error("Erro ao buscar imagens do README.md:", error);
      return [];
    }
  }

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch(
          "https://api.github.com/users/pablokaliel/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();

        const projects = data.filter((repo: { topics: string[] }) => {
          return repo.topics && repo.topics.includes("react");
        });

        const reposWithImages: Repo[] = [];
        for (const repo of projects) {
          const images = await fetchReadmeImages("pablokaliel", repo.name);
          reposWithImages.push({ ...repo, images });
        }
        setRepos(reposWithImages);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }
    setTimeout(() => {
      getUserInfo();
    }, 3000);
  }, []);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  }

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
              {" "}
              <EnvelopeSimple />{" "}
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
                  <FaReact size={22} color="#e0aaff" /> <p>ReactJS</p>
                </a>
                <a target="_blank" href="https://firebase.google.com/?hl=pt">
                  <IoLogoFirebase size={22} color="#e0aaff" />
                  <p>FireBase</p>
                </a>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                >
                  <SiStyledcomponents size={35} color="#e0aaff" />
                  <p>Styled-Components</p>
                </a>
                <a target="_blank" href="https://tailwindcss.com/">
                  <SiTailwindcss size={22} color="#e0aaff" />
                  <p>TailwindCSS</p>
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
              <Article target="_blank" href={repo.html_url} key={i}>
                {repo.stargazers_count > 0 && (
                  <DivStar>
                    <span>{repo.stargazers_count} </span>
                    <Star size={14} weight="fill" color="#ecaf14" />
                  </DivStar>
                )}
                <DivImageRepo>
                  {repo.images && repo.images.length > 0 && (
                    <DivImageRepo>
                      {repo.images.map((imageUrl: string, index: number) => (
                        <div key={index}>
                          <img src={imageUrl} alt={`Imagem ${index + 1}`} />
                        </div>
                      ))}
                    </DivImageRepo>
                  )}
                </DivImageRepo>

                <ArticleText>
                  <div>
                    <h3>{repo.name}</h3>
                    <span>{formatDate(repo.created_at)}</span>
                  </div>
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
          <Button style={{ marginTop: "1.6rem" }} onClick={toggleShowRepos}>
            {showAllRepos ? "Ver Menos" : "Ver Mais"}
          </Button>
        )}
        <ContentContact id="contact">
          <DivTitleAbout>
            <h5>Entre em </h5>
            <h1>Contato</h1>
          </DivTitleAbout>

          <FormContact>
            <CardContact>
              <CardContactsA onClick={handleSwapContent}>
                <Contact>{contentA}</Contact>
              </CardContactsA>
              <CardContactsB onClick={handleSwapContent}>
                <Contact>{contentB}</Contact>
              </CardContactsB>
              <CardContactsC onClick={handleSwapContent}>
                <Contact>{contentC}</Contact>
              </CardContactsC>
            </CardContact>
          </FormContact>
        </ContentContact>
        <ContactInfo>info</ContactInfo>
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
