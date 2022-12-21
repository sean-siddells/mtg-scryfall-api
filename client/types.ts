export interface FormData {
  name: string
  text: string
  colour: {
    condition: Condition,
    colours: Colours[]
  }
}

export type InputType = 'name'| 'text'| 'colour'
export type Condition = 'includes' | 'exactly' | 'excludes'
export type Colours = 'black' | 'white' | 'blue' | 'green' | 'red' | 'colorless'
