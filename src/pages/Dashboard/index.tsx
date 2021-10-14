import {
  Header,
  NewTransactionModalAccessibility,
  Summary,
  TransactionsTable,
} from '@components';

import { Container } from './styles';

export function Dashboard() {
  return (
    <>
      <Header />

      <Container role="main">
        <Summary />
        <TransactionsTable />
      </Container>

      <NewTransactionModalAccessibility />
    </>
  );
}
