import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  /* top: 50%; */

  width: 100vw;
  margin-left: -50vw;
  /* width: 80vw; */
  /* height: 90vh; */
  /* margin-left: -40vw;
  margin-top: -45vh; */
  border: 2px solid #202124;
  border-radius: 100px;
  /* padding: 5vh 5vw; */

  @media (min-width: 720px) {
    top: 50%;
    height: 100vh;
    margin-top: -50vh;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 12vh;
  padding: 1.5rem 3rem;
  /* background: red; */

  display: flex;
  justify-content: center;
`;

export const Title = styled.h2``;

export const FormContent = styled.div`
  width: 100%;
  /* height: 45%; */
  background: blue;
  padding: 0.5rem 3rem;

  display: flex;
  justify-content: center;

  /* flex: 1; */

  form {
    background: green;
    width: 100%;
    max-width: 360px;

    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
  }

  @media (min-width: 720px) {
    height: 25vh;
    padding: 0.5rem 1rem;

    justify-content: space-between;

    form {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;

export const ButtonContent = styled.div`
  width: 100%;
  height: 8vh;
  padding: 0.5rem 3rem;
  background: red;

  display: flex;
  align-content: center;
  justify-content: center;
`;

export const QRCodeContent = styled.div`
  width: 100%;
  height: 55vh;
  padding: 2rem 3rem;

  display: flex;
  align-content: center;
  justify-content: center;

  img {
    max-width: 225px;
    height: auto;
    max-height: 225px;
  }

  @media (min-width: 410px) {
    img {
      max-width: 250px;
      height: auto;
      max-height: 250px;
    }
  }

  @media (min-width: 720px) {
    img {
      max-width: 300px;
      height: auto;
      max-height: 300px;
    }
  }
`;
