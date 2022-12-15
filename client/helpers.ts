import { Colours } from './types';

const toggleColour = (array: Colours[], colour: Colours) => {
  if (array.includes(colour)) return array.filter((item) => item !== colour);
  array.push(colour);
  return array;
};

export default toggleColour;
