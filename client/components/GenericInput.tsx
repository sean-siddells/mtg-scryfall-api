import React from 'react';
import { Container, InputField, InputFieldContainer } from '../constants';
import { EventType } from '../types';

interface InputProps {
  title: string;
  handleChange: (e: EventType) => void;
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
