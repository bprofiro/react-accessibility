import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';

import { api } from '../services/api';

type TransactionProps = {
  id?: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt?: string | Date;
};

type ResponseGetTransactions = {
  transactions: TransactionProps[];
};

type ResponsePostTransactions = {
  transaction: TransactionProps;
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
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    async function getTransations() {
      const response = await api.get<ResponseGetTransactions>('transactions');

      setTransactions(response.data.transactions);
    }
    getTransations();
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response: AxiosResponse<ResponsePostTransactions> = await api.post(
      '/transactions',
      {
        ...transaction,
        createdAt: new Date(),
      },
    );

    setTransactions([...transactions, response.data.transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
