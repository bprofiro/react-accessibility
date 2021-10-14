import { createContext, PropsWithChildren, useState } from 'react';

import { TRANSACTIONS } from '@constants';

type TransactionProps = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string | Date;
};

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

type TransactionsContextData = {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({ children }: PropsWithChildren<unknown>) {
  const [transactions, setTransactions] =
    useState<TransactionProps[]>(TRANSACTIONS);

  async function createTransaction(transaction: TransactionInput) {
    const newTransaction = {
      ...transaction,
      createdAt: new Date(),
      id: transactions.length + 1,
    };

    setTransactions([...transactions, newTransaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
