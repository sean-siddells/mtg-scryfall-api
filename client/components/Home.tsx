import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import getCards from '../api/api';
import { toggleColour } from '../helpers';
import {
  InputType, FormData, Colours, Condition,
} from '../types';
import Color from './Colour';
import GenericInput from './GenericInput';
import Results from './Results';

type EventType = React.ChangeEvent<HTMLInputElement>

const Home: React.FC = () => {
  const initialForm: FormData = {
    name: '',
    text: '',
    colour: {
      condition: 'includes',
      colours: [],
    },
  };

  const [results, setResults] = useState();
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e: EventType, param: InputType) => {
    if (e.target.id === 'colour-condition' && param === 'colour') formData.colour.condition = e.target.value as Condition;
    if (e.target.id !== 'colour-condition' && param === 'colour') formData.colour.colours = toggleColour(formData.colour.colours, e.target.value as Colours);
    if (param !== 'colour') formData[param] = e.target.value;

    setFormData(formData);
    console.log('state', formData);
  };

  const handleSubmit = async () => {
    const data = await getCards(formData);
    console.log('data', data);
    setResults(data);
  };

  return (
    <>
      <Wrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <TitleContainer> Find cards for your new deck!</TitleContainer>
        <form>
          <GenericInput
            title="Card Name"
            handleChange={(e: EventType) => handleChange(e, 'name')}
          />
          <GenericInput
            title="Card Text"
            handleChange={(e: EventType) => handleChange(e, 'text')}
          />
          <Color
            title="Colour Identity"
            handleChange={(e: EventType) => handleChange(e, 'colour')}
            condition={formData.colour.condition}
          />
          <SubmitButton
            as={motion.button}
            type="button"
            value="Submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSubmit}
          >
            Submit
          </SubmitButton>
        </form>
      </Wrapper>
      {results && <Results results={results} />}
    </>
  );
};

const Wrapper = styled.div`
`;

const SubmitButton = styled.input`
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  &:hover {
    cursor: pointer;
  };
`;

const TitleContainer = styled.h1`
  padding: 5vh;
  text-align: center;
`;
export default Home;
