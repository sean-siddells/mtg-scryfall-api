import React from 'react';
import styled from 'styled-components';
import { CardDTO, Formats } from '../types';
import CardDetail from './CardDetail';

interface CardProps {
  data: CardDTO
}

const Card: React.FC<CardProps> = ({ data }) => {
  const legalFormats = (Object.keys(data.legalities) as (keyof Formats)[]).filter((key) => data.legalities[key] === 'legal');
  return (
    <CardContainer>
      <CardImage src={data.image_uris.normal} alt="Card Artwork" />
      <TextContainer>
        <CardName>{data.name}</CardName>
        <CardDetail subtitle="artist" value={[data.artist]} />
        <CardDetail subtitle="rarity" value={[data.rarity]} />
        <CardDetail subtitle="text" value={[data.oracle_text]} />
        <CardDetail subtitle="set" value={[data.set_name]} />
        <CardDetail subtitle="formats" value={legalFormats} />
      </TextContainer>
    </CardContainer>
  );
};

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
  padding-bottom: 8px;
`;

const CardImage = styled.img`
  width: 244px;
  height: 340px;
  margin: 0px 16px 16px 16px;
`;

export default Card;
