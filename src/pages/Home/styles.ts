import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  border: 2px solid #202124;
  border-radius: 100px;

  @media (min-width: 720px) {
    height: 100vh;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 12vh;
  padding: 1.5rem 3rem;

  display: flex;
  justify-content: center;
`;

export const Title = styled.h2``;

export const FormContent = styled.div`
  width: 100%;
  /* height: 45%; */
  /* background: blue; */
  padding: 0.5rem 1rem;

  display: flex;
  justify-items: center;

  /* flex: 1; */

  form {
    /* background: green; */
    width: 100%;
    /* max-width: 360px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    /* flex-wrap: wrap; */
  }

  @media (min-width: 720px) {
    height: 25vh;
    padding: 0.5rem 1rem;

    justify-content: center;

    form {
      flex-direction: row;
      max-width: 900px;
      justify-content: space-between;
    }
  }
`;

export const FormGroupOne = styled.div`
  display: flex;
  width: 100%;
  max-width: 375px;
  flex-direction: column;

  @media (min-width: 720px) {
    width: 50%;
    max-width: 400px;
  }
`;

export const FormGroupTwo = styled.div`
  display: flex;
  width: 100%;
  max-width: 375px;
  flex-direction: column;

  @media (min-width: 720px) {
    width: 50%;
    max-width: 400px;
  }
`;

export const ButtonContent = styled.div`
  width: 100%;
  height: 8vh;
  padding: 0.5rem 3rem;
  /* background: red; */

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QRCodeContent = styled.div`
  width: 100%;
  height: 50vh;
  padding: 2rem 3rem;

  display: flex;
  /* align-items: center; */
  justify-content: center;

  #qrcode {
    max-width: 225px;
    height: auto;
    max-height: 225px;

    svg {
      max-width: 100%;
    }
  }

  @media (min-width: 410px) {
    #qrcode {
      max-width: 250px;
      height: auto;
      max-height: 250px;
    }
  }

  @media (min-width: 720px) {
    #qrcode {
      max-width: 300px;
      height: auto;
      max-height: 300px;
    }
  }
`;
