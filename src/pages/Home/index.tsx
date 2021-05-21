// import { Scope } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import QRCode from 'qrcode.react';
import * as Yup from 'yup';
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
import getValidationErrors from '../../utils/getValidationErrors';

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

  const handleSubmit: SubmitHandler<FormData> = async ({
    cnpj,
    produto,
    lote,
    empresa,
    telefone,
    peso,
  }: FormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        cnpj: Yup.string()
          .required('CNPJ obrigatório')
          .length(14, 'Digite um CNPJ válido'),
        produto: Yup.string().required('Produto obrigatório'),
        lote: Yup.string().required('Lote obrigatório'),
        empresa: Yup.string().required('Empresa obrigatória'),
        telefone: Yup.string()
          .required('Telefone obrigatório')
          .min(8, 'Digite um telefone válido'),
        peso: Yup.number()
          .typeError('Peso deve ser um número')
          .required('Peso obrigatório')
          .positive('O peso não pode ser negativo')
          .min(1, 'Digite um peso maior que 1 (Kg)'),
      });

      await schema.validate(
        { cnpj, produto, lote, empresa, telefone, peso },
        {
          abortEarly: false,
        },
      );

      const pesoString = peso.toString();

      setValue(
        `http://localhost:3000/data?cnjp=${cnpj}&produto=${produto}&lote=${lote}&empresa=${empresa}&telefone=${telefone}&peso=${pesoString}`,
      );
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Gerador de QR CODE</Title>
      </Header>
      <FormContent>
        <Form id="qr-form" ref={formRef} onSubmit={handleSubmit}>
          <FormGroupOne>
            <Input
              name="cnpj"
              label="CNPJ"
              placeholder="CNPJ (somente números)"
            />

            <Input
              name="produto"
              label="Produto"
              placeholder="Nome do Produto"
            />

            <Input name="lote" label="Lote" placeholder="Código do Lote" />
          </FormGroupOne>

          <FormGroupTwo>
            <Input
              name="empresa"
              label="Empresa"
              placeholder="Nome da Empresa"
            />

            <Input
              name="telefone"
              label="Telefone"
              placeholder="Número do Telefone"
            />

            <Input
              name="peso"
              label="Peso"
              placeholder="Peso do Produto em Kg"
            />
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
              fgColor="#000"
              bgColor="#fff"
              key="level-L"
            />
          )}
        </div>
      </QRCodeContent>
    </Container>
  );
}

export default Home;
