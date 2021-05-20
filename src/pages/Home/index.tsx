// import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import {
  Container,
  Header,
  Title,
  FormContent,
  QRCodeContent,
  ButtonContent,
} from './styles';
import qrCodeExample from '../../assets/qr-example.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

interface FormData {
  cnpj: string;
  produto: string;
  lote: string;
  empresa: string;
  telefone: string;
  peso: number;
}

function Home(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = ({
    cnpj,
    produto,
    lote,
    empresa,
    telefone,
    peso,
  }: FormData) => {
    console.log({
      cnpj,
      produto,
      lote,
      empresa,
      telefone,
      peso,
    });
  };

  // const clearForm: SubmitHandler<FormData> = () => {
  //   formRef.current.clearField('cnpj');
  // };

  return (
    <Container>
      <Header>
        <Title>Gerador de QR CODE</Title>
      </Header>
      <FormContent>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="cnpj" label="CNPJ" />

          <Input name="produto" label="Produto" />

          <Input name="lote" label="Lote" />

          <Input name="empresa" label="Empresa" />

          <Input name="telefone" label="Telefone" />

          <Input name="peso" label="Peso" />
        </Form>
      </FormContent>
      <ButtonContent>
        <Button>Gerar QR Code</Button>
      </ButtonContent>
      <QRCodeContent>
        <img src={qrCodeExample} alt="Example" />
      </QRCodeContent>
    </Container>
  );
}

export default Home;
