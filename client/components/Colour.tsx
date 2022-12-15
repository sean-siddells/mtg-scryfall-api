import React from 'react';
import styled from 'styled-components';
import black from '../../src/assets/black.png';
import white from '../../src/assets/white.png';
import colorless from '../../src/assets/colorless.png';
import blue from '../../src/assets/blue.png';
import red from '../../src/assets/red.png';
import green from '../../src/assets/green.png';
import { Container } from '../constants';
import { EventType } from '../types';

type ColourProps = {
  title: string;
  handleChange: (e: EventType) => void;
}
const Colour: React.FC<ColourProps> = ({ title, handleChange }) => (
  <Container>
    <h3>{title}</h3>
    <CheckBoxContainer>
      <input value="black" type="checkbox" onChange={handleChange} />
      <ColourIcon src={black} alt="swamp" />
      <input value="white" type="checkbox" onChange={handleChange} />
      <ColourIcon src={white} alt="plains" />
      <input value="blue" type="checkbox" onChange={handleChange} />
      <ColourIcon src={blue} alt="island" />
      <input value="green" type="checkbox" onChange={handleChange} />
      <ColourIcon src={green} alt="forest" />
      <input value="red" type="checkbox" onChange={handleChange} />
      <ColourIcon src={red} alt="mountain" />
      <input value="colorless" type="checkbox" onChange={handleChange} />
      <ColourIcon src={colorless} alt="colorless" />
    </CheckBoxContainer>
  </Container>
);

const CheckBoxContainer = styled.div`
  padding: 2vh 10vw;
  display: flex;
  flex-direction: row;
`;

const ColourIcon = styled.img`
  width: 24px;
  height: 24px;
  padding-left: 10px;
  padding-right: 32px;
`;

export default Colour;
