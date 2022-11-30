import React from 'react';
import { Container, InputField, InputFieldContainer } from '../constants';

type InputProps = {
  title: string
};

const GenericInput: React.FC<InputProps> = ({ title }) => (
  <Container>
    <h3>{title}</h3>
    <InputFieldContainer>
      <InputField />
    </InputFieldContainer>
  </Container>
);

export default GenericInput;
