import * as S from "./styles";

import { useEffect, useState } from "react";
import SwapperContact from "../contact";
import SwapperFooter from "../footer";
import SwapperRepos from "../repos";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  created_at: string;
  images: string[];
}

function SwapperProjects() {
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
    <S.ContentProjects id="projects">
      <S.DivTitleAbout>
        <h5>Meus </h5>
        <h1>Projetos</h1>
      </S.DivTitleAbout>

      <SwapperRepos
        repos={repos}
        reposToShow={reposToShow}
        showAllRepos={showAllRepos}
        formatDate={formatDate}
      />
      <S.Button style={{ marginTop: "1.6rem" }} onClick={() => {
  toggleShowRepos();
  if (showAllRepos) {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}}>
  {showAllRepos ? "Ver Menos" : "Ver Mais"}
</S.Button>


      <S.ContentContact id="contact">
        <S.DivTitleAbout>
          <h5>Entre em </h5>
          <h1>Contato</h1>
        </S.DivTitleAbout>
        <SwapperContact />
      </S.ContentContact>

      <S.ContentFooter>
        <SwapperFooter />
      </S.ContentFooter>
    </S.ContentProjects>
  );
}

export default SwapperProjects;
