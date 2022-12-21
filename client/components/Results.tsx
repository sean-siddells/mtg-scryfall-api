import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../constants';

const Results: React.FC = () => {
  const { state } = useLocation();
  console.log(state.data);
  return (
    <Container>
      <div>{state.data.name}</div>
      <img src={state.data.image_uris.small} alt="Card Artwork" />
    </Container>
  );
};
export default Results;
