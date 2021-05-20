// import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import QRCode from 'qrcode.react';
import {
  Container,
  Header,
  Title,
  FormContent,
  FormGroupOne,
  FormGroupTwo,
  QRCodeContent,
  ButtonContent,
} from './styles';
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
  const [value, setValue] = useState<string>('');
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = ({
    cnpj,
    produto,
    lote,
    empresa,
    telefone,
    peso,
  }: FormData) => {
    const pesoString = peso.toString();
    setValue(
      `http://localhost:3000/data?cnjp=${cnpj}&produto=${produto}&lote=${lote}&empresa=${empresa}&telefone=${telefone}&peso=${pesoString}`,
    );
    // console.log({
    //   cnpj,
    //   produto,
    //   lote,
    //   empresa,
    //   telefone,
    //   peso,
    // });
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
        <Form id="qr-form" ref={formRef} onSubmit={handleSubmit}>
          <FormGroupOne>
            <Input name="cnpj" label="CNPJ" />

            <Input name="produto" label="Produto" />

            <Input name="lote" label="Lote" />
          </FormGroupOne>

          <FormGroupTwo>
            <Input name="empresa" label="Empresa" />

            <Input name="telefone" label="Telefone" />

            <Input name="peso" label="Peso" />
          </FormGroupTwo>
        </Form>
      </FormContent>
      <ButtonContent>
        <Button>Gerar QR Code</Button>
      </ButtonContent>
      <QRCodeContent>
        <div id="qrcode">
          {value && (
            <QRCode
              value={value}
              renderAs="svg"
              level="L"
              size={300}
              fgColor="#202124"
              bgColor="#f1f3f4"
              key="level-L"
            />
          )}
        </div>
      </QRCodeContent>
    </Container>
  );
}

export default Home;
