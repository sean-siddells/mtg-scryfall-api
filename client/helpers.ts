// import * as Scry from 'scryfall-sdk';
import {
  Colours, FormData,
} from './types';

// removes selected colour from state if it is already checked
export const toggleColour = (selectedColours: Colours[], colour: Colours) => {
  if (selectedColours.includes(colour)) return selectedColours.filter((item) => item !== colour);
  selectedColours.push(colour);
  return selectedColours;
};

export const paramGenerator = (searchParams: FormData): string => {
  let paramString = '';

  if (searchParams.name !== '') paramString = `search?q=${encodeURIComponent(searchParams.name.toLowerCase())}`;
  if (searchParams.text !== '') paramString = 'search?';
  return paramString;
};

// to remove cards from mtg arena format 'Alchemy'
export const checkForAlchemy = (name: string): boolean => {
  const characterArr = name.split('');
  return (characterArr[0] === 'A' && characterArr[1] === '-');
};

export const capitalise = (word: string): string => word.split('')[0].toUpperCase() + word.slice(1, word.length);

// export const getCardsByName = async (name:string) => Scry.Cards.byName(name);
// export const getCardsByText = async (text:string) => Scry.Cards.
// export const getCardsByName = async (cmc:string) => Scry.Cards.byName(cmc);
// export const getCardsByName = async (colorIdentity: string) => Scry.Cards.byName(colorIdentity);
// export const getCardsByText = async

// export const autoCompleteName = async (text:string) => Scry.Cards.autoCompleteName(text);
