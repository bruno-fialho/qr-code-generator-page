import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: ButtonProps): JSX.Element {
  return (
    <Container type="submit" form="qr-form" {...rest}>
      {children}
    </Container>
  );
}

export { Button };
