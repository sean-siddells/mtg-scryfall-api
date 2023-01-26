export interface FormData {
  name: string
  text: string
  colour: {
    condition: Condition,
    colours: Colours[]
  }
}

export interface CardDTO {
  name: string
  color_identity: string[]
  set_name: string
  rarity: Rarity
  legalities: Formats
  oracle_text: string
  image_uris: ImageURIs
  layout: string
  artist: string
}

export interface Formats {
  alchemy: Legality
  brawl: Legality
  commander: Legality
  duel: Legality
  explorer: Legality
  future: Legality
  gladiator: Legality
  historic: Legality
  historicbrawl: Legality
  legacy: Legality
  modern: Legality
  oldschool: Legality
  pauper: Legality
  paupercommander: Legality
  penny: Legality
  pioneer: Legality
  premodern: Legality
  standard: Legality
  vintage: Legality
}

export interface ImageURIs {
  art_crop: string
  border_crop: string
  large: string
  normal: string
  png: string
  small: string
}

export type InputType = 'name'| 'text'| 'colour'
export type Condition = 'includes' | 'exactly' | 'excludes'
export type Colours = 'black' | 'white' | 'blue' | 'green' | 'red' | 'colorless'
export type Rarity = 'common' | 'uncommon' | 'rare' | 'mythic'
export type Legality = 'legal' | 'not_legal'

export type Detail = 'rarity' | 'name' | 'formats' | 'text' | 'set' | 'artist'
