import { Colours, FormData } from './types';

export const toggleColour = (array: Colours[], colour: Colours) => {
  if (array.includes(colour)) return array.filter((item) => item !== colour);
  array.push(colour);
  return array;
};

const insertPlusIntoString = (sentence: string): string => sentence.split(' ').join('+').toLowerCase();

export const paramGenerator = (searchParams: FormData): string => {
  let paramString = '';

  if (searchParams.name !== '') paramString = `named?fuzzy=${insertPlusIntoString(searchParams.name)}`;
  return paramString;
};
