import { uniqueId } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { capitalise } from '../helpers';
import { Detail } from '../types';

interface CardDetailsProps {
  subtitle: Detail
  value: string[]
}

const CardDetail: React.FC<CardDetailsProps> = ({ subtitle, value }) => (subtitle === ('formats')
  ? (
    <Container>
      <dl>
        <Bold>{`${capitalise(subtitle)}: `}</Bold>
        {value.map((el:string) => <BulletPoints key={uniqueId('format')}>{el}</BulletPoints>)}
      </dl>
    </Container>
  )
  : (
    <Container>
      <>
        <Bold>
          {`${capitalise(subtitle)}: `}
        </Bold>
        <SingleLine>{value[0]}</SingleLine>
      </>
    </Container>
  )
);

const SingleLine = styled.span`
  flex-direction: row;
  padding-bottom: 8px;
  padding-left: 16px;
`;

const Bold = styled.dt`
  font-weight: bold;
`;

const BulletPoints = styled.dd`
  padding-left: 16px;
`;

const Container = styled.div`
  display: flex;
  font-size: 0.9em;
`;

export default CardDetail;
