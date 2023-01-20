import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../constants';

const Results: React.FC = () => {
  const { state } = useLocation();

  console.log('results', state);

  return (
    <Container>
      {state != null
        ? state.data.map((item: any) => (
          <>
            <div>{item.name}</div>
            <img src={item.image_uris.normal} alt="Card Artwork" />
          </>
        ))
        : <div>woops, no results matched your search parameters</div>}
    </Container>
  );
};

export default Results;
