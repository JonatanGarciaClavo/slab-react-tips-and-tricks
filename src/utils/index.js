import Chance from 'chance';
import loremIpsum from 'lorem-ipsum';
import { REACTIONS } from '../constants';

const chance = new Chance();
// https://gist.github.com/gordonbrander/2230317
function ID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

export function generateListItems(length = 5) {
  const items = Array(length);
  for (var i = 0; i < length; i++) {
    items[i] = generateListItem();
  }
  return items;
}

export function generateName() {
  return chance.first();
}

export function generateListItem() {
  return {
    id: ID(),
    text: generateName(),
  };
}

// Generate a persona item with added description text and emoji reactions
export function generateItemsPersonas(length = 100) {
  const items = generateListItems(length);
  return items.map(item => ({
    ...item,
    description: generateLoremIpsumDescription(),
    longDescription: generateLoremIpsumDescription(30),
    reactions: generateRandomReactions(),
  }));
}

// Generates a random lorem ipsum text
// For more info about the lorem-ipsum library 👉 https://github.com/knicklabs/lorem-ipsum.js
export function generateLoremIpsumDescription(maxWords = 8) {
  return loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 4,
    sentenceUpperBound: maxWords,
  });
}

// Generates between 0 and 10 random emoji reactions
export function generateRandomReactions() {
  const numberOfReactions = Math.floor(Math.random() * 11);
  const reactions = [];
  for (let index = 1; index <= numberOfReactions; index++) {
    const reaction = REACTIONS[Math.floor(Math.random() * REACTIONS.length + 1)];
    reactions.push({
      id: ID(),
      reaction,
    });
  }
  return reactions;
}

/**
 *
 * @param {Number} maximum
 * @param {Number} minimum
 */
export function generateRandomNumber(maximum, minimum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export function generateCart(length = 5) {
  const items = Array(length);
  for (var i = 0; i < length; i++) {
    items[i] = generateCartItem();
  }
  return items;
}

export function generateCartItem() {
  return {
    id: ID(),
    name: generateName(),
    price: chance.floating({ min: 0, max: 100, fixe: 2 }),
    quantity: chance.d10(),
  };
}

export function isFloat(n) {
  // eslint-disable-next-line
  return n === +n && n !== (n | 0);
}

export function buildPriceWithCurrencySymbol(price) {
  const isPositive = price >= 0;
  const positivePrice = isPositive ? price : price * -1;
  if (isFloat(price)) {
    if (isPositive) {
      return `€ ${positivePrice
        .toFixed(2)
        .toString()
        .replace('.', ',')}`;
    }
    return `-€ ${positivePrice
      .toFixed(2)
      .toString()
      .replace('.', ',')}`;
  }
  if (isPositive) {
    return `€ ${positivePrice},-`;
  }
  return `-€ ${positivePrice},-`;
}
