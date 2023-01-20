import { Colours, FormData } from './types';

export const toggleColour = (selectedColours: Colours[], colour: Colours) => {
  if (selectedColours.includes(colour)) return selectedColours.filter((item) => item !== colour);
  selectedColours.push(colour);
  return selectedColours;
};

export const paramGenerator = (searchParams: FormData): string => {
  let paramString = '';

  if (searchParams.name !== '') paramString = `search?q=${encodeURIComponent(searchParams.name.toLowerCase())}`;
  // if (searchParams.text !== '') paramString = `search?`
  return paramString;
};

// to remove cards from mtg arena format 'Alchemy'
export const checkForAlchemy = (name: string): boolean => {
  const characterArr = name.split('');
  return (characterArr[0] === 'A' && characterArr[1] === '-');
};

export const checkDoubleSided = (name: string) : boolean => {
  const wordArr = name.split(' ');
  return wordArr.includes('//');
};
