type TransactionProps = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string | Date;
};

export const TRANSACTIONS: TransactionProps[] = [
  {
    id: 1,
    title: 'Freelance de website',
    type: 'deposit',
    amount: 6000,
    category: 'Dev',
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Salário',
    type: 'deposit',
    amount: 10000,
    category: 'Dev',
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Aluguel',
    type: 'withdraw',
    amount: 3000,
    category: 'Casa',
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Conta de luz',
    type: 'withdraw',
    amount: 100,
    category: 'Casa',
    createdAt: new Date(),
  },
];
