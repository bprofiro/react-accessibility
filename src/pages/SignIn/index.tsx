import { FormEvent, useState } from 'react';

import { useAuth } from '@hooks';
import { DtMoneyIcon } from '@assets';

import { Container } from './styles';

export const SignIn = () => {
  const { signIn } = useAuth();

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (event: FormEvent): void => {
    event.preventDefault();

    if (!name) {
      return setError('Digite um name válido para entrar');
    }

    signIn(name);
  };

  return (
    <Container>
      <form onSubmit={handleSignIn}>
        <h2>
          <figure>
            <img src={DtMoneyIcon} alt="dt money" />
          </figure>
          Faça seu login
        </h2>
        <input
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {error && <span>{error}</span>}

        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
};
