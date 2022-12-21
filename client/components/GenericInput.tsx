import React from 'react';
import { Container, InputField, InputFieldContainer } from '../constants';

interface InputProps {
  title: string;
  handleChange: React.ChangeEventHandler;
}

const GenericInput: React.FC<InputProps> = ({ title, handleChange }) => (
  <Container>
    <h3>{title}</h3>
    <InputFieldContainer>
      <InputField type="text" onChange={handleChange} />
    </InputFieldContainer>
  </Container>
);

export default GenericInput;
