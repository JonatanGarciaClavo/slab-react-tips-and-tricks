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

export function generateListItem() {
  return {
    id: ID(),
    text: chance.first(),
  };
}

// Generate a persona item with added description text and emoji reactions
export function generateItemsPersonas(length = 100) {
  const items = generateListItems(length);
  const extendedItems = items.map(item => {
    return {
      ...item,
      description: generateLoremIpsumDescription(),
      reactions: generateRandomReactions(),
    };
  });
  return extendedItems;
}

// Generates a random lorem ipsum text
// For more info about the lorem-ipsum library 👉 https://github.com/knicklabs/lorem-ipsum.js
export function generateLoremIpsumDescription() {
  return loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 4,
    sentenceUpperBound: 8,
  });
}

// Generates between 0 and 10 random emoji reactions
export function generateRandomReactions() {
  const numberOfReactions = Math.floor(Math.random() * 11);
  const reactions = [];
  for (let index = 1; index <= numberOfReactions; index++) {
    reactions.push(REACTIONS[Math.floor(Math.random() * REACTIONS.length + 1)]);
  }
  return reactions;
}

export function randomAvatarConfig() {
  return {
    style: { width: '60px', height: '60px' },
    avatarStyle: 'Circle',
    topType: 'LongHairMiaWallace',
    accessoriesType: 'Prescription02',
    hairColor: 'BrownDark',
    facialHairType: 'Blank',
    clotheType: 'Hoodie',
    clotheColor: 'PastelBlue',
    eyeType: 'Happy',
    eyebrowType: 'Default',
    mouthType: 'Smile',
    skinColor: 'Light',
  };
}
