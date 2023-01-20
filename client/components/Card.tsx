import React from 'react';
import styled from 'styled-components';
import { CardDTO } from '../types';

interface CardProps {
  data: CardDTO
}

const Card: React.FC<CardProps> = ({ data }) => (
  <CardContainer>
    <CardImage src={data.image_uris.small} alt="Card Artwork" />
    <TextContainer>
      <CardName>{data.name}</CardName>
      <CardDetails>{data.rarity}</CardDetails>
      <CardDetails>{data.oracle_text}</CardDetails>
      <CardDetails>{data.set_name}</CardDetails>
    </TextContainer>
  </CardContainer>
);

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 32px;
`;

const TextContainer = styled.div`
  flex-direction: column;
  padding: 0px 8px 8px 8px;
  justify-content: space-between;
`;

const CardName = styled.div`
  font-weight: bold;
  font-size: 1rem;
  padding-bottom: 16px;
`;

const CardDetails = styled.div`
  padding-bottom: 16px;
`;

const CardImage = styled.img`
  width: 146px;
  height: 204px;
  margin: 0px 16px 16px 16px;
`;

export default Card;
