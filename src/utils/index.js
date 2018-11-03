import Chance from 'chance';

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
