import * as S from "./styles";

import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import { DiscordLogo, EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";

function ContentSwipper() {
  return ( 

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
   );
}

export default ContentSwipper;