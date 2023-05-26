import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import getCards from '../api/api';
import {
  FormData, EventType,
} from '../types';
import GenericInput from './GenericInput';
import Results from './Results';
import UseHandleFormDataChange from '../hooks';

const Home: React.FC = () => {
  const initialForm: FormData = {
    name: '',
    text: '',
    colour: {
      filterParam: 'includes',
      selectedColours: [],
    },
  };

  const [results, setResults] = useState();
  const [formData, setFormData] = useState(initialForm);

  setFormData(formData);
  console.log('state', formData);

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
            handleChange={(e: EventType) => {
              UseHandleFormDataChange(formData, e, 'name');
            }}
          />
          <GenericInput
            title="Card Text"
            handleChange={(e: EventType) => UseHandleFormDataChange(formData, e, 'text')}
          />
          {/* <Color
            title="Colour Identity"
            handleChange={(e: EventType) => UseHandleFormDataChange(formData, e, 'colour')}
            condition={formData.colour.condition}
          /> */}
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
