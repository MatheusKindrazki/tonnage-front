import React from 'react';
import { Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function InputTheme({
  id,
  type,
  placeholder,
  name,
  label,
  ...rest
}) {
  return (
    <Container>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <Input
          name={name}
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </Container>
  );
}
