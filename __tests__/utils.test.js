const {
  formatDates,
  makeRefObj,
  formatComments,
} = require('../db/utils/utils');

describe('formatDates', () => {
  test('returns an empty array when passed an empty array', () => {
    expect(formatDates([])).toEqual([])
  });
  test('takes an array of objects and returns a new array', () => {
    const input = [ { testkey : "testvalue"}];
    const actual = formatDates(input);
    expect(actual).not.toBe(input)
  });
  test('does not mutate original array', () => {
    const input = [ { testkey : "testvalue"}];
    const control = formatDates(input);
    expect(input).toBe(control)
  });
  test('converts timestamp at single created_at key to JS date object', () => {
    const input = [{body: 'Lobster pot',
    belongs_to: 'Living in the shadow of a great man',
    created_by: 'icellusedkars',
    votes: 0,
    created_at: 1322138163389
    }];
    const expected = [{body: 'Lobster pot',
    belongs_to: 'Living in the shadow of a great man',
    created_by: 'icellusedkars',
    votes: 0,
    created_at:new Date(1322138163389)
    }]
    expect(formatDates(input)).toEqual(expected)
  });
});

describe('makeRefObj', () => {});

describe('formatComments', () => {});
