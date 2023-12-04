import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

import * as S from "./styles";


interface CardProps {
  icon: React.ReactNode;
  link: string;
  title: string;
}

function SwapperCard({ icon, link, title }: CardProps) {
  return (
    <S.Technologies>
      <a target="_blank" href={link}>
        {icon}
        <p>{title}</p>
      </a>
    </S.Technologies>
  );
}


function SwapperCards() {
  const cardInfo = [
    {
      icon: <FaReact size={22} color="#e0aaff" />,
      link: "https://react.dev/",
      title: "ReactJS",
    },
    {
      icon: <IoLogoFirebase size={22} color="#e0aaff" />,
      link: "https://firebase.google.com/?hl=pt",
      title: "FireBase",
    },
    {
      icon: <SiTypescript size={22} color="#e0aaff" />,
      link: "https://www.typescriptlang.org",
      title: "Typescript",
    },
    {
      icon: <SiStyledcomponents size={22} color="#e0aaff" />,
      link: "https://styled-components.com",
      title: "Styled-Components",
    },
  ];

  return (
    <S.Card>
      {cardInfo.map((card, index) => (
        <SwapperCard
          key={index}
          icon={card.icon}
          link={card.link}
          title={card.title}
        />
      ))}
    </S.Card>
  );
}

export default SwapperCards;