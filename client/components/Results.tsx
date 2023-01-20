import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../constants';
import { checkForAlchemy } from '../helpers';

const Results: React.FC = () => {
  const { state } = useLocation();

  console.log('results', state);

  return (
    <Container>
      {state != null
        ? state.data.map((item: any) => (
          checkForAlchemy(item.name)
            ? null
            : (
              <>
                <div>{item.name}</div>
                <img src={item.image_uris.small} alt="Card Artwork" />
              </>

            )
        ))
        : <div>woops, no results matched your search parameters</div>}
    </Container>
  );
};

export default Results;
