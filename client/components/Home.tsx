import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getCards from '../api/api';
import { toggleColour } from '../helpers';
import {
  InputType, FormData, Colours, Condition,
} from '../types';
import Color from './Colour';
import GenericInput from './GenericInput';

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

  const [formData, setFormData] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (e: EventType, param: InputType) => {
    if (e.target.id === 'colour-condition' && param === 'colour') formData.colour.condition = e.target.value as Condition;
    if (e.target.id !== 'colour-condition' && param === 'colour') formData.colour.colours = toggleColour(formData.colour.colours, e.target.value as Colours);
    if (param !== 'colour') formData[param] = e.target.value;

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
          condition={formData.colour.condition}
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
