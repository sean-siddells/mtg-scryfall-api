import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../constants';

const Results: React.FC = () => {
  const { state } = useLocation();
  console.log(state.data);
  return (
    <Container>
      <div>{JSON.stringify(state.data)}</div>
    </Container>
  );
};
export default Results;
