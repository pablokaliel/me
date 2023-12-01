import ContentSwipper from "./Swipper";
import * as S from "./styles";

function SwapperContact() {
  return (
    <S.FormContact>
      <S.CardContact>
     <ContentSwipper/>
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
  );
}

export default SwapperContact;
