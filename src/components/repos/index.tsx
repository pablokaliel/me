import { Star } from "@phosphor-icons/react";
import * as S from "./styles";

interface SwapperReposProps {
  repos: Repo[];
  reposToShow: Repo[];
  showAllRepos: boolean;
  formatDate: (dateString: string) => string;
}

interface Repo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  created_at: string;
  images: string[];
}

function SwapperRepos({ reposToShow, formatDate }: SwapperReposProps) {
  return (
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
  );
}

export default SwapperRepos;
