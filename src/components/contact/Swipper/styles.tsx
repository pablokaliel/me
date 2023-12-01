import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContactsA = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem 1rem;
  text-align: center;

  background-color: #0d0022;
  border-radius: 1.2rem;
  border: 1px solid #aa0bffba;
`;

export const CardInfos = styled.div`
  margin-bottom: 0.6rem;

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 13.58px;
  }

  a {
    font-size: 16px;
  }
`;