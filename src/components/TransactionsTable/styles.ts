import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6.4rem;

  table {
    width: 100%;
    border-spacing: 0 0.8rem;
    font-size: ${({ theme }) => theme.fontSizes.default};
    line-height: 2.4rem;

    th {
      color: ${({ theme }) => theme.colors.textBody};
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      text-align: left;
      line-height: 2.4rem;
    }

    td {
      padding: 1.6rem 3.2rem;
      border: 0;
      background: ${({ theme }) => theme.colors.shape};
      color: ${({ theme }) => theme.colors.textBody};

      &:first-child {
        color: ${({ theme }) => theme.colors.textTitle};
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }

      &.deposit {
        color: ${({ theme }) => theme.colors.green};
      }

      &.withdraw {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;
