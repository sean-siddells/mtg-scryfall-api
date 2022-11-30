import React from 'react';
import styled from 'styled-components';
import black from '../../src/assets/black.png';
import white from '../../src/assets/white.png';
import colorless from '../../src/assets/colorless.png';
import blue from '../../src/assets/blue.png';
import red from '../../src/assets/red.png';
import green from '../../src/assets/green.png';
import { Container } from '../constants';

type ColorProps = {
  title: string
}
const Color: React.FC<ColorProps> = ({ title }) => (
  <Container>
    <h3>{title}</h3>
    <CheckBoxContainer>
      <input type="checkbox" />
      <ColourIcon src={black} alt="swamp" />
      <input type="checkbox" />
      <ColourIcon src={white} alt="plains" />
      <input type="checkbox" />
      <ColourIcon src={blue} alt="island" />
      <input type="checkbox" />
      <ColourIcon src={green} alt="forest" />
      <input type="checkbox" />
      <ColourIcon src={red} alt="mountain" />
      <input type="checkbox" />
      <ColourIcon src={colorless} alt="colorless" />
    </CheckBoxContainer>
  </Container>
);

const CheckBoxContainer = styled.form`
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

export default Color;
