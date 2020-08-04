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
    const control = [ { testkey : "testvalue"}];
    formatDates(input);
    expect(input).toEqual(control)
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
  test('converts timestamp when passed an array of more than one objects ', () => {
    const expected = [{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "They're not exactly dogs, are they?",
      created_by: 'butter_bridge',
      votes: 16,
      created_at: new Date(1511354163389),
    },
    {
      body:
        'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'butter_bridge',
      votes: 14,
      created_at: new Date(1479818163389),
    },
    {
      body:
        'Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'icellusedkars',
      votes: 100,
      created_at: new Date(1448282163389),
    },
    {
      body: ' I carry a log — yes. Is it funny to you? It is not to me.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'icellusedkars',
      votes: -100,
      created_at: new Date(1416746163389),
    },
    {
      body: 'I hate streaming noses',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'icellusedkars',
      votes: 0,
      created_at: new Date(1385210163389),
    },
    {
      body: 'I hate streaming eyes even more',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'icellusedkars',
      votes: 0,
      created_at: new Date(1353674163389),
    }];
    const input = [{
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "They're not exactly dogs, are they?",
      created_by: 'butter_bridge',
      votes: 16,
      created_at: 1511354163389,
    },
    {
      body:
        'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'butter_bridge',
      votes: 14,
      created_at: 1479818163389,
    },
    {
      body:
        'Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'icellusedkars',
      votes: 100,
      created_at: 1448282163389,
    },
    {
      body: ' I carry a log — yes. Is it funny to you? It is not to me.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'icellusedkars',
      votes: -100,
      created_at: 1416746163389,
    },
    {
      body: 'I hate streaming noses',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'icellusedkars',
      votes: 0,
      created_at: 1385210163389,
    },
    {
      body: 'I hate streaming eyes even more',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'icellusedkars',
      votes: 0,
      created_at: 1353674163389,
    }];
    expect(formatDates(input)).toEqual(expected)
  });
});

describe.only('makeRefObj', () => {
  test('returns empty object when passed empty array', () => {
    const input = [];
    const expected = {};
    expect(makeRefObj(input)).toEqual(expected);
  });
  test('creates a reference object for specified title and id', () => {
    const input = [{ article_id: 1, title: 'A' }];
    const expected = {A:1};
    expect(makeRefObj(input)).toEqual(expected);
  });
  test('creates a reference object for several specified titles and ids', () => {
    const input = [{ article_id: 1, title: 'A' },{ article_id: 2, title: 'B' } ];
    const expected = {A:1, B:2};
    expect(makeRefObj(input)).toEqual(expected);
  });
}); 

describe('formatComments', () => {});
