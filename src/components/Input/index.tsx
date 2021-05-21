import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container, InputSpanContainer } from './styles';

interface Props {
  name: string;
  label: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

function Input({ name, label, ...rest }: InputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

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

      <InputSpanContainer>
        <input
          ref={inputRef}
          id={fieldName}
          autoComplete="off"
          defaultValue={defaultValue}
          className={error ? 'has-error' : ''}
          {...rest}
        />

        {error ? <span style={{ color: '#f00' }}>{error}</span> : <span />}
      </InputSpanContainer>
    </Container>
  );
}

export { Input };
