import React from 'react';
import styled from 'styled-components';
import Color from './Color';
import GenericInput from './GenericInput';

const Home: React.FC = () => (
  <>
    <TitleContainer> Find cards for your new deck!</TitleContainer>
    <GenericInput title="Card Name:" />
    <GenericInput title="Card Text:" />
    <Color title="Colour Identity:" />
  </>
);

const TitleContainer = styled.h1`
  padding: 5vh;
  text-align: center;
`;
export default Home;
