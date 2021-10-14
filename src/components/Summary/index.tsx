import { motion } from 'framer-motion';
import { IncomeIcon, OutcomeIcon, TotalIcon } from '@assets';
import { useTransactions } from '@hooks';
import { CONTAINER_ANIMATION } from '@constants';

import { CHILDREN_VARIANTS } from './animations';
import { Container } from './styles';

export const Summary = () => {
  const { transactions = [] } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.widthdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    { deposit: 0, widthdraws: 0, total: 0 },
  );

  return (
    <Container
      variants={CONTAINER_ANIMATION}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={CHILDREN_VARIANTS}>
        <header>
          <p>Entradas</p>
          <img src={IncomeIcon} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposit)}
        </strong>
      </motion.section>

      <motion.section variants={CHILDREN_VARIANTS}>
        <header>
          <p>Saídas</p>
          <img src={OutcomeIcon} alt="Saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.widthdraws)}
        </strong>
      </motion.section>

      <motion.section
        className="highlight-background"
        variants={CHILDREN_VARIANTS}
      >
        <header>
          <p>Total</p>
          <img src={TotalIcon} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </motion.section>
    </Container>
  );
};
