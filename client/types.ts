import React from 'react';

export type EventType = React.ChangeEvent<HTMLInputElement>

export interface FormData {
  name: string
  text: string
  colour: Colours[]
}

export type InputType = 'name'| 'text'| 'colour'

export type Colours = 'black' | 'white' | 'blue' | 'green' | 'red' | 'colorless'
