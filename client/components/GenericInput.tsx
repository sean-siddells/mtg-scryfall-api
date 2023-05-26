import React from 'react';
import styled from 'styled-components';
import { Container, InputField, InputFieldContainer } from '../constants';

interface InputProps {
  title: string;
  handleChange: React.ChangeEventHandler;
  value?: string;
}

const GenericInput: React.FC<InputProps> = ({ title, handleChange, value = '' }) => (
  <Container>
    <Row>
      <h3>{`${title}:`}</h3>
      {title === 'Card Name' && <MinimiseButton>X</MinimiseButton>}
    </Row>
    <InputFieldContainer>
      <InputField type="text" onChange={handleChange}>
        {value}
      </InputField>
    </InputFieldContainer>
  </Container>
);

const MinimiseButton = styled.div`
  padding-left: 80%;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  };
`;
const Row = styled.div`
  display: flex;
  flex-direction:row;
`;

export default GenericInput;
