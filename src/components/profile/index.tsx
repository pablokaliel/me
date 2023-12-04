import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import * as S from "./styles";
import { useEffect, useState } from "react";

function SwapperProfile() {
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

  return (
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
          <S.DivImg />

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
        <a> <EnvelopeSimple /> </a>
      </S.Right>
    </S.Profile>
  );
}

export default SwapperProfile;
