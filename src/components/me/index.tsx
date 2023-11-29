import * as S from "./styles";

import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

function SwapperMe() {
  return (
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
          Back-end com Firebase e MySql. Atualmente, estou focado em aprimorar
          minhas habilidades em ReactJS, HTML, CSS e Tailwind para criar páginas
          e landing pages. Meu <a href="#projects">portfólio</a> mostra mais do
          meu trabalho.
          <p style={{ marginTop: "1.6rem" }}>
            Veja ao lado algumas tecnologias que tenho trabalhado recentemente:
          </p>
        </p>

        <S.CardTechnologies>
          <h4>Tecnologias</h4>

          <S.Card>
            <S.Technologies>
              <a target="_blank" href="https://react.dev/">
                <FaReact size={22} color="#e0aaff" />
                <p>ReactJS</p>
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
  );
}

export default SwapperMe;
