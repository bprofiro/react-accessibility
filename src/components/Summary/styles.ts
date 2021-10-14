import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.article)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin-top: -16rem;

  section {
    background: ${({ theme }) => theme.colors.shape};
    padding: 2.4rem 3.2rem;
    border-radius: ${({ theme }) => theme.radii.default};
    color: ${({ theme }) => theme.colors.textTitle};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: ${({ theme }) => theme.fontSizes.default};
        line-height: 2.4rem;
      }
    }

    strong {
      display: block;
      margin-top: 1.6rem;
      font-size: ${({ theme }) => theme.fontSizes.extraLarge};
      font-weight: 500;
      line-height: 4.8rem;
    }
  }

  .highlight-background {
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.shape};
  }
`;
