import React from 'react';
import styled from 'styled-components';
import Color from './Color';

const Home: React.FC = () => (
  <>
    <TitleContainer> Find cards for your new deck!</TitleContainer>
    <Color />
  </>
);

const TitleContainer = styled.h1`
  padding: 5vh;
  text-align: center;
`;
export default Home;
