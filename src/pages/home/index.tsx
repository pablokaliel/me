import {
  Container,
  Content,
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
} from "./styles";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import { optionsParticles } from "../../components/optionsParticles";
import { Navbar } from "../../components/header";
import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

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
              Meu nome é Pablo Kaliel, tenho 22 anos e fui estudante de Analise
              e Desenvolvimento de Sistemas na Claretiano - Batatais.
              <br />
              Durante a faculdade aprendi um pouco sobre algumas tecnologias web
              como: Html,Css,JavaScript e também vi algumas coisas mobile
              como:IonicFramework, c## e por ultimo vi também sobre Back-end
              como: Firebase e MySql.
              <br />
              Ainda não possuo uma grande experiencias com as tecnologias
              ultimamente porém venho estudando ReactJS,html,css e tailwind para
              criar paginas e landingpages. Também utilizei um pouco também de
              firebase e localstorage para fazer o Back-end de algumas
              aplicações .
              <br />
              Não posso dizer que tenho experiencia ainda, mas acredito eu que
              com esforço e decidação conseguirei habilidades e experiencias em
              ReactJS e outras tecnologias.
              <br />
              <p>
                Veja meu <a href="#">portfólio</a> .
              </p>
              <p style={{ marginTop: "2.6rem" }}>
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
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles}
      />
    </Container>
  );
}
