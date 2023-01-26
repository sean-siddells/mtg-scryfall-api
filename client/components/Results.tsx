import React from 'react';
import { Container } from '../constants';
import { checkForAlchemy } from '../helpers';
import { CardDTO } from '../types';
import Card from './Card';

interface ResultsProps {
  results: {
    data: CardDTO[]
  }
}

const Results: React.FC<ResultsProps> = ({ results }) => (
  <Container>
    {results != null
      ? results.data.map((item) => (
        checkForAlchemy(item.name) || item.layout === 'transform'
          ? null
          : (
            <Card data={item} />
          )
      ))
      : <div>woops, no results matched your search parameters</div>}
  </Container>
);

export default Results;
