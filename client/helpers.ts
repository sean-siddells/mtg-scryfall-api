import { Colours, FormData } from './types';

export const toggleColour = (array: Colours[], colour: Colours) => {
  if (array.includes(colour)) return array.filter((item) => item !== colour);
  array.push(colour);
  return array;
};

export const paramGenerator = (searchParams: FormData): string => {
  let paramString = '';

  console.log('encoded string', encodeURIComponent(searchParams.name));
  if (searchParams.name !== '') paramString = `search?q=${encodeURIComponent(searchParams.name.toLowerCase())}`;
  // if (searchParams.text !== '') paramString = `search?`
  return paramString;
};
