import request from 'superagent';
import { paramGenerator } from '../helpers';
import { FormData } from '../types';

const getCards = (params: FormData) => request
  .get(`https://api.scryfall.com/cards/${paramGenerator(params)}`)
  .set('Accept', 'application/json')
  .then((res) => {
    console.log(res.body);
    return res.body;
  })
  .catch((err) => console.error('could not fetch data', err));

export default getCards;
