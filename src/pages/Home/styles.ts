import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  border: 1px solid #202124;
  border-radius: 100px;

  display: flex;
  flex-direction: column;

  @media (min-width: 720px) {
    height: 100vh;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  padding: 1.5rem 3rem;

  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 1.2rem;

  @media (min-width: 410px) {
    font-size: 1.5rem;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;
  justify-items: center;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 720px) {
    height: 35vh;
    padding: 0.5rem 1rem;

    justify-content: center;

    form {
      flex-direction: row;
      max-width: 820px;
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
    max-width: 350px;
  }
`;

export const FormGroupTwo = styled.div`
  display: flex;
  width: 100%;
  max-width: 375px;
  flex-direction: column;

  @media (min-width: 720px) {
    width: 50%;
    max-width: 350px;
  }
`;

export const ButtonContent = styled.div`
  width: 100%;
  height: 6vh;
  padding: 0.5rem 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QRCodeContent = styled.div`
  width: 100%;
  height: 40vh;
  padding: 2rem 3rem;

  display: flex;
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
