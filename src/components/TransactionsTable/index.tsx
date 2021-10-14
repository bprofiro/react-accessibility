import { motion } from 'framer-motion';
import { useTransactions } from '@hooks';
import { CONTAINER_ANIMATION } from '@constants';

import { CHILDREN_VARIANTS } from './animations';
import { Container } from './styles';

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <motion.tbody
          variants={CONTAINER_ANIMATION}
          initial="hidden"
          animate="visible"
        >
          {transactions.map(transaction => (
            <motion.tr variants={CHILDREN_VARIANTS} key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt || ''),
                )}
              </td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </Container>
  );
};
