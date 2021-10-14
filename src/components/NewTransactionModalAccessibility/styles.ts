import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

type TypeButtonProps = {
  isActive: boolean;
  activeColor: 'green' | 'red';
};

const colors = {
  green: '#33CC95',
  red: '#e52e40',
};

export const Container = styled.form`
  h2 {
    color: ${({ theme }) => theme.colors.textTitle};
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-bottom: 3.2rem;
  }

  input {
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;
    border-radius: ${({ theme }) => theme.radii.default};

    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.default};

    &::placeholder {
      color: ${({ theme }) => theme.colors.textBody};
    }

    & + input {
      margin-top: 1.6rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;
    background: ${({ theme }) => theme.colors.green};
    color: #fff;
    border-radius: ${({ theme }) => theme.radii.default};
    border: 0;
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: 600;
    margin-top: 2.4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

export const TypeButton = styled.button<TypeButtonProps>`
  height: 6.4rem;
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.25rem;

  background: ${props =>
    props.isActive
      ? transparentize(0.7, colors[props.activeColor])
      : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => lighten(0.2, theme.colors.borderColor)};
  }

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    display: inline-block;
    margin-left: 1.6rem;
    font-size: ${({ theme }) => theme.fontSizes.default};
    color: ${({ theme }) => theme.colors.textBody};
  }
`;
