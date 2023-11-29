import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function SwapperFooter() {
  return (
    <>
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
    </>
  );
}

export default SwapperFooter;
