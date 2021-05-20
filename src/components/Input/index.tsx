import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface Props {
  name: string;
  label: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

function Input({ name, label, ...rest }: InputProps): JSX.Element {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>

      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </Container>
  );
}

export { Input };
