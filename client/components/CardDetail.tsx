import React from 'react';
import styled from 'styled-components';
import { capitalise } from '../helpers';
import { Detail } from '../types';

interface CardDetailsProps {
  subtitle: Detail
  value: string[]
}

const CardDetail: React.FC<CardDetailsProps> = ({ subtitle, value }) => (subtitle === ('formats' || 'text')
  ? (
    <dl>
      <Bold>{`${capitalise(subtitle)}: `}</Bold>
      {value.map((el:string) => <dd>{el}</dd>)}
    </dl>
  )
  : (<SingleLine>{`${capitalise(subtitle)}: ${value[0]}`}</SingleLine>)
);

const SingleLine = styled.div`
  flex-direction: row;
  padding-bottom: 8px;
`;

const Bold = styled.dt`
  font-weight: bold;
`;

export default CardDetail;
