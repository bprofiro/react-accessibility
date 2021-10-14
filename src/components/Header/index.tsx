import { Button } from 'reakit/Button';
import { DialogDisclosure } from 'reakit/Dialog';
import { motion } from 'framer-motion';
import { MdOutlineWbSunny } from 'react-icons/md';
import { RiMoonLine } from 'react-icons/ri';
import { LogoIcon } from '@assets';
import { useModal, useAppTheme, useAuth } from '@hooks';
import { CONTAINER_ANIMATION } from '@constants';

import { CHILDREN_VARIANTS } from './animations';
import { Container, Content, ButtonsContainer } from './styles';

export const Header = () => {
  const { dialog } = useModal();
  const { currentTheme, toggleTheme } = useAppTheme();
  const { signOut } = useAuth();

  return (
    <Container role="banner">
      <Content>
        <h1>
          <img src={LogoIcon} alt="dt money" />
        </h1>

        <ButtonsContainer
          variants={CONTAINER_ANIMATION}
          initial="hidden"
          animate="visible"
        >
          <Button
            onClick={toggleTheme}
            as={motion.button}
            variants={CHILDREN_VARIANTS}
          >
            {currentTheme === 'dark' ? (
              <>
                <MdOutlineWbSunny size={16} />
                Mudar tema
              </>
            ) : (
              <>
                <RiMoonLine size={16} />
                Mudar tema
              </>
            )}
          </Button>

          <DialogDisclosure
            as={motion.button}
            variants={CHILDREN_VARIANTS}
            {...dialog}
          >
            Nova transação
          </DialogDisclosure>

          <Button
            onClick={signOut}
            as={motion.button}
            variants={CHILDREN_VARIANTS}
          >
            Sair
          </Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};
