import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  width: 100%;
  /* width: 450px; */

  display: flex;
  flex-direction: column;
  align-content: center;

  label {
    font-weight: 400;
    padding: 0 0 0.25rem 0;
  }

  input {
    /* width: 330px; */
    width: 100%;
    /* max-width: 250px; */
    height: 2.8rem;
    /* margin: 0.5rem 0; */
    /* margin-bottom: 0.8rem; */
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    border: 2px solid #dfe1e5;
    font-size: 0.9rem;
    color: #202124;
    transition: border-color 0.2s;
  }

  @media (min-width: 410px) {
    flex-direction: row;
    justify-content: space-between;

    input {
      margin-left: 1rem;
      max-width: 250px;
    }
    label {
      padding: 0.6rem 0 0 0;
    }
  }

  @media (min-width: 720px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    input {
      margin-left: 1rem;
    }
    label {
      padding: 0.6rem 0 0 0;
    }
  }
`;
