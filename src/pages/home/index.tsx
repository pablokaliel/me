import * as S from "./styles";

import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

import { DiscordLogo, EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, Star } from "@phosphor-icons/react";

import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import { useCallback, useEffect, useState } from "react";

import { optionsParticles } from "../../components/optionsParticles";
import { Navbar } from "../../components/header";

import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

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
  const [typingText, setTypingText] = useState("");
  const words = ["TailwindCSS", "React", "Styled-Components"];
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

  const particlesLoaded = useCallback(async () => {}, []);

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
      const readmeResponse = await fetch( `https://api.github.com/repos/${owner}/${repo}/readme` );
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
        const response = await fetch( "https://api.github.com/users/pablokaliel/repos" );
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

    return `${day < 10 ? "0" + day : day}/${ month < 10 ? "0" + month : month }/${year}`;
  }

  return (
    <S.Container>
      <Navbar />
      <S.Content id="home">
        <S.Profile>
          <S.Left>
            <a href="#">
              <GithubLogo size={18} />
            </a>
            <a href="#">
              <LinkedinLogo size={18} />
            </a>
            <a href="#">
              <InstagramLogo size={18} />
            </a>
          </S.Left>

          <S.Center>
            <S.DivImage>
              <S.DivImg/>
              <S.Infos>
                <h2>Olá, eu sou</h2>
                <h3>Pablo Kaliel</h3>
                <S.Typing>{typingText} </S.Typing>
              </S.Infos>
            </S.DivImage>

            <S.Buttons>
              <S.Button>GitHub</S.Button>
              <S.ButtonContact>Fale Comigo</S.ButtonContact>
            </S.Buttons>
          </S.Center>

          <S.Right>
            <a> <EnvelopeSimple />{" "} </a>
          </S.Right>
        </S.Profile>
      </S.Content>

      <S.ContentMe id="about">
        <S.Me>
          <S.DivTitleAbout>
            <h5>Saiba mais </h5>
            <h1>Sobre Mim</h1>
          </S.DivTitleAbout>

          <S.AboutMe>
            <p>
              👨‍💻 Olá, seja bem-vindo(a)!👋🏻
              <br />
              Me chamo Pablo Kaliel, formado em Análise e Desenvolvimento de
              Sistemas pela Claretiano - Batatais.
              <br />
              Durante meus estudos, explorei tecnologias web como HTML, CSS,
              JavaScript, além de trabalhar com Ionic Framework, C# e conhecer
              Back-end com Firebase e MySql. Atualmente, estou focado em
              aprimorar minhas habilidades em ReactJS, HTML, CSS e Tailwind para
              criar páginas e landing pages. Meu <a href="#projects">portfólio</a>  mostra mais do meu
              trabalho.
              <p style={{ marginTop: "1.6rem" }}>
                Veja ao lado algumas tecnologias que tenho trabalhado
                recentemente:
              </p>
            </p>

            <S.CardTechnologies>
              <h4>Tecnologias</h4>

              <S.Card>
                <S.Technologies>
                  <a target="_blank" href="https://react.dev/">
                    <FaReact size={22} color="#e0aaff" /> <p>ReactJS</p>
                  </a>
                </S.Technologies>
                <S.Technologies>
                  <a target="_blank" href="https://firebase.google.com/?hl=pt">
                    <IoLogoFirebase size={22} color="#e0aaff" />
                    <p>FireBase</p>
                  </a>
                </S.Technologies>
                <S.Technologies>
                  <a
                    target="_blank"
                    href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                  >
                    <SiStyledcomponents size={35} color="#e0aaff" />
                    <p>Styled-Components</p>
                  </a>
                </S.Technologies>
                <S.Technologies>
                  <a target="_blank" href="https://www.typescriptlang.org">
                    <SiTypescript size={22} color="#e0aaff" />
                    <p>Typescript</p>
                  </a>
                </S.Technologies>
              </S.Card>
            </S.CardTechnologies>
          </S.AboutMe>
        </S.Me>
      </S.ContentMe>

      <S.ContentProjects id="projects">
        <S.DivTitleAbout>
          <h5>Meus </h5>
          <h1>Projetos</h1>
        </S.DivTitleAbout>

        <S.PortifolioContainer>
          {reposToShow.length > 0 ? (
            reposToShow.map((repo, i) => (
              <S.Article target="_blank" href={repo.html_url} key={i}>
                {repo.stargazers_count > 0 && (
                  <S.DivStar>
                    <span>{repo.stargazers_count} </span>
                    <Star size={14} weight="fill" color="#ecaf14" />
                  </S.DivStar>
                )}
                <S.DivImageRepo>
                  {repo.images && repo.images.length > 0 && (
                    <S.DivImageRepo>
                      {repo.images.map((imageUrl: string, index: number) => (
                        <div key={index}>
                          <img src={imageUrl} alt={`Imagem ${index + 1}`} />
                        </div>
                      ))}
                    </S.DivImageRepo>
                  )}
                </S.DivImageRepo>

                <S.ArticleText>
                  <div>
                    <h3>{repo.name}</h3>
                    <span>{formatDate(repo.created_at)}</span>
                  </div>
                  <div>
                    <p>{repo.description}</p>
                  </div>
                  <small>{repo.topics.join(", ")}</small>
                </S.ArticleText>
              </S.Article>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </S.PortifolioContainer>

        {repos.length > 6 && (
          <S.Button style={{ marginTop: "1.6rem" }} onClick={toggleShowRepos}>
            {showAllRepos ? "Ver Menos" : "Ver Mais"}
          </S.Button>
        )}
        <S.ContentContact id="contact">
          <S.DivTitleAbout>
            <h5>Entre em </h5>
            <h1>Contato</h1>
          </S.DivTitleAbout>

          <S.FormContact>
            <S.CardContact>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <S.CardContactsA>
                    <div style={{ width: "100%" }}>
                      <GithubLogo size={24} />
                      <S.CardInfos>
                        <h4>GitHub</h4>
                        <h5>PabloKaliel</h5>
                        <a href="#">Conheça meus projetos</a>
                      </S.CardInfos>
                    </div>
                  </S.CardContactsA>
                </SwiperSlide>
                <SwiperSlide>
                  <S.CardContactsA>
                    <div style={{ width: "100%" }}>
                      <EnvelopeSimple size={24} />
                      <S.CardInfos>
                        <h4>Email</h4>
                        <h5>pablo.kalyell.441@gmail.com</h5>
                        <a href="#">Fale Comigo</a>
                      </S.CardInfos>
                    </div>
                  </S.CardContactsA>
                </SwiperSlide>
                <SwiperSlide>
                  <S.CardContactsA>
                    <div style={{ width: "100%" }}>
                      <DiscordLogo size={24} />
                      <S.CardInfos>
                        <h4>Discord</h4>
                        <h5>ShaZzaN</h5>
                        <a href="#">vamos conversar!</a>
                      </S.CardInfos>
                    </div>
                  </S.CardContactsA>
                </SwiperSlide>
              </Swiper>
            </S.CardContact>
            <S.ContactInfo>
              <div>
                <input placeholder="Nome Completo" />
              </div>

              <div>
                <input placeholder="E-mail" />
              </div>
              <div>
                <textarea placeholder="Escreva sua mensagem..." />
              </div>
              <button>Enviar</button>
            </S.ContactInfo>
          </S.FormContact>
        </S.ContentContact>
        <S.ContentFooter>
          <div>
            <span>Portfilio</span>
          </div>
          <div>
            <p>
              <GithubLogo size={24} />
            </p>
            <p>
              <LinkedinLogo size={24} />
            </p>
          </div>
          <div>
            <small>© Pablo Kaliel. Todos direitos reservados.</small>
          </div>
        </S.ContentFooter>
      </S.ContentProjects>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles}
      />
    </S.Container>
  );
}
