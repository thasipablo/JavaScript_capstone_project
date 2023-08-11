import itemsCounter from './counter.js';

describe('Items Counter', () => {
  test('returns the number of items in an array', () => {
    const items = [1, 2, 3, 4, 5];
    expect(itemsCounter(items)).toBe(5);
  });

  test('returns 0 for an empty array', () => {
    const items = [];
    expect(itemsCounter(items)).toBe(0);
  });
});
