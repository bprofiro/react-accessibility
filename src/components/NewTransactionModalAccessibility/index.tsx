import { useState, FormEvent, useRef, useEffect } from 'react';

import { Dialog, DialogBackdrop } from 'reakit/Dialog';
import { Button } from 'reakit/Button';
import { Input } from 'reakit/Input';
import { IncomeIcon, CloseIcon, OutcomeIcon } from '@assets';
import { useModal, useTransactions } from '@hooks';

import { Container, TransactionTypeContainer, TypeButton } from './styles';

export const NewTransactionModalAccessibility = () => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const { dialog } = useModal();

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      amount,
      category,
      type,
    };

    await createTransaction(data);

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    dialog.setVisible(false);
  }

  useEffect(() => {
    if (dialog.visible) {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }
  }, [dialog.visible]);

  return (
    <DialogBackdrop {...dialog} className="react-modal-overlay">
      <Dialog
        {...dialog}
        aria-label="Cadastrar transação"
        className="react-modal-content"
      >
        <Button
          ref={closeButtonRef}
          className="react-modal-close"
          as="button"
          onClick={() => dialog.setVisible(false)}
        >
          <img src={CloseIcon} alt="Fechar modal" />
        </Button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <Input
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <Input
            placeholder="Valor"
            type="number"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />

          <TransactionTypeContainer>
            <TypeButton
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={IncomeIcon} alt="Entrada" />
              <span>Entrada</span>
            </TypeButton>

            <TypeButton
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={OutcomeIcon} alt="Saída" />
              <span>Saída</span>
            </TypeButton>
          </TransactionTypeContainer>

          <Input
            placeholder="Categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />

          <Button type="submit">Cadastre</Button>
        </Container>
      </Dialog>
    </DialogBackdrop>
  );
};
