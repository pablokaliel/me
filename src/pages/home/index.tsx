import { Container, Content, ContentMe, Profile, Left, Center, Right, Me, DivImage, DivImg, Infos, Typing, Buttons, Button, ButtonContact, DivTitleAbout } from "./styles";

import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import { optionsParticles } from "../../components/optionsParticles";
import { Navbar } from "../../components/header";
import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const words = ["HTML", "React", "CSS"];
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
      <Content>
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
                <Typing>{typingText}</Typing>
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
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
          <h1>lorem*10</h1>
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
