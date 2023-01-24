import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../constants';
import { checkForAlchemy } from '../helpers';
import { CardDTO } from '../types';
import Card from './Card';

const Results: React.FC = () => {
  const { state } = useLocation();

  return (
    <Container>
      {state != null
        ? state.data.map((item: CardDTO) => (
          checkForAlchemy(item.name) || item.layout === 'transform'
            ? null
            : (
              <Card data={item} />
            )
        ))
        : <div>woops, no results matched your search parameters</div>}
    </Container>
  );
};

export default Results;
