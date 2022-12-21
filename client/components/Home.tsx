import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getCards from '../api/api';
import { toggleColour } from '../helpers';
import {
  EventType, InputType, FormData, Colours,
} from '../types';
import Color from './Colour';
import GenericInput from './GenericInput';

const Home: React.FC = () => {
  const initialForm: FormData = {
    name: '',
    text: '',
    colour: [],
  };

  const [formData, setFormData] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (e: EventType, param: InputType) => {
    if (param === 'colour') formData.colour = toggleColour(formData.colour, e.target.value as Colours);
    else formData[param] = e.target.value;
    setFormData(formData);
    console.log(formData);
  };

  const handleSubmit = async () => {
    const data = await getCards(formData);
    navigate('/results', {
      state: { data },
    });
  };

  return (
    <>
      <TitleContainer> Find cards for your new deck!</TitleContainer>
      <form>
        <GenericInput
          title="Card Name:"
          handleChange={(e: EventType) => handleChange(e, 'name')}
        />
        <GenericInput
          title="Card Text:"
          handleChange={(e: EventType) => handleChange(e, 'text')}
        />
        <Color
          title="Colour Identity:"
          handleChange={(e: EventType) => handleChange(e, 'colour')}
        />
        <SubmitButton
          type="button"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
};

const SubmitButton = styled.input`
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  &:hover {
    cursor: pointer;
  };
`;

const TitleContainer = styled.h1`
  padding: 5vh;
  text-align: center;
`;
export default Home;
