import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.2rem;
    width: 100%;
    max-width: 40rem;
    background: ${({ theme }) => theme.colors.shape};
    border-radius: ${({ theme }) => theme.radii.default};
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    color: ${({ theme }) => theme.colors.textTitle};
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: 3.2rem;
  }

  span {
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.colors.red};
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 2.4rem;
    height: 5rem;
    background: ${({ theme }) => theme.colors.green};
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.7rem;
    font-weight: 600;
    margin-top: 2.4rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
