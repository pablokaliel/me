import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const PortifolioContainer = styled.div`
  width: 74%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    gap: 1.2rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
    grid-template-columns: 1fr;
    width: 85%;
  }
`;

export const SkeletonArticle = styled.a`
  width: 345px;
  height: 415px;
  
  position: relative;
  padding: 2rem 1.5rem;

  background-color: #0d0022c4;
  color: #eeeeee;

  border-radius: 8px;
  border: 1px solid #3f197d75;
  box-shadow: 8px 8px 8px rgb(0 0 0 / 33%);

  text-decoration: none;
  /* animação do skeleton */
  background-image: linear-gradient( to right, #0d0022c4 0%, #3f197d75 20%, #0d0022c4 40%, #0d0022c4 100% );
  background-size: 1000px 100%;

  animation: ${shimmer} 2s infinite linear;

  transition: all 0.3s;
`;

export const SkeletonArticleText = styled.div`
  height: 30%;
  margin-top: 0.7rem;

  .tags {
    height: 25px;
    border-radius: 5px;
    margin-top: 15px;
    background-color: #7a2cbf22;
  }

  .infodata {
    width: 100%;
    height: 100%;
    background-color: #7a2cbf22;
    flex: 1;
    border-radius: 5px;
    margin-top: 15px;
  }

  .nameanddata {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

    .name {
      width: 35%;
      height: 25px;
      border-radius: 5px;
      background-color: #7a2cbf22;
    }

    .data {
      border-radius: 5px;
      background-color: #7a2cbf22;
      width: 30%;
      height: 25px;
    }
  }
`;

export const SkeletonDivImageRepo = styled.div`
  width: 100%;
  height: 162px;
  position: relative;

  div {
    width: 100%;
    height: 100%;
    background-color: #7a2cbf22;
  }

  img {
    width: 100%;
    height: 100%;

    position: relative;

    aspect-ratio: 16/9;
    z-index: 1;
  }

  &::after {
    width: 100%;
    height: 100%;
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 2;
    pointer-events: none;
  }
`;

export const SkeletonDivStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 3px;
  right: 32px;

  gap: 4px;

  span {
    font-size: 0.8rem;
  }
`;

export const Article = styled.a`
  position: relative;

  background-color: #0d0022c4;
  color: #eeeeee;
  border-radius: 8px;
  border: 1px solid #3f197d75;
  box-shadow: 8px 8px 8px rgb(0 0 0 / 33%);

  text-decoration: none;
  padding: 2rem 1.5rem;

  transition: all 0.3s;

  &:hover {
    border-color: #7b2cbf;
    transform: translateY(-10px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const ArticleText = styled.div`
  margin-top: 0.7rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 12px;
      margin-bottom: 1rem;
    }
  }

  h3 {
    margin-top: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #9888a0;
  }

  small {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;

    color: #e0aaff;
    font-size: 0.8rem;
    text-align: left;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DivImageRepo = styled.div`
  width: 100%;
  position: relative;

  div {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;

    position: relative;

    aspect-ratio: 16/9;
    z-index: 1;
  }

  &::after {
    width: 100%;
    height: 100%;
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 2;
    pointer-events: none;
  }
`;

export const DivStar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 3px;
  right: 32px;

  gap: 4px;

  span {
    font-size: 0.8rem;
  }
`;
