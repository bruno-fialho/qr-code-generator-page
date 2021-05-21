import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-weight: 500;
    padding: 0 0 0.25rem 0;
  }

  @media (min-width: 410px) {
    flex-direction: row;
    justify-content: space-between;

    label {
      padding: 0.6rem 0 0 0;
    }
  }

  @media (min-width: 720px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    label {
      padding: 0.6rem 0 0 0;
    }
  }
`;

export const InputSpanContainer = styled.div`
  width: 100%;
  height: 4.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    width: 100%;

    height: 2.8rem;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    border: 2px solid #9c9c9c;
    font-size: 0.9rem;
    color: #000;
    transition: border-color 0.2s;
  }

  span {
    width: 100%;
    height: 1.5rem;
  }

  @media (min-width: 410px) {
    max-width: 290px;
  }

  @media (min-width: 720px) {
    max-width: 250px;
  }
`;
