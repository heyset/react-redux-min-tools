import { describe, it, expect } from '@jest/globals';
import stateClone from '../lib/stateClone';

describe('With an ARRAY consisting of ONLY primitive values:', () => {
  let originalArray;
  const untouchedOriginalArray = [10, 'kill the king', null, undefined, true, BigInt(1000)];

  beforeEach(() => {
    originalArray = [10, 'kill the king', null, undefined, true, BigInt(1000)];
  });

  it('returns an array that looks identical', () => {
    const clone = stateClone(originalArray);
    expect(clone).toEqual(originalArray);
  });

  it('but is not a reference to the same array', () => {
    const clone = stateClone(originalArray);
    clone[0] = 100;
    clone[1] = 'burn the castle';
    clone[4] = false;
    clone[5] = BigInt(800);

    const expectedOutcome = [100, 'burn the castle', null, undefined, false, BigInt(800)];

    expect(clone).toEqual(expectedOutcome);
    expect(clone).not.toBe(originalArray);
    expect(originalArray).toEqual(untouchedOriginalArray);
  });
});

describe('With NESTED ARRAYS:', () => {
  let originalArray;
  const untouchedOriginalArray = [10, ['kill', 'the', 'queen']];

  beforeEach(() => {
    originalArray = [10, ['kill', 'the', 'queen']];
  });

  it('returns an array that looks identical', () => {
    const clone = stateClone(originalArray);
    expect(clone).toEqual(originalArray);
  });

  it('but is not a reference to the same array', () => {
    const clone = stateClone(originalArray);

    clone[0] = 100;
    clone[1][0] = 'smile';
    clone[1][1] = 'laugh';
    clone[1][2] = 'cry';

    const expectedOutcome = [100, ['smile', 'laugh', 'cry']];

    expect(clone).toEqual(expectedOutcome);
    expect(clone).not.toBe(originalArray);
    expect(originalArray).toEqual(untouchedOriginalArray);
  });
});

describe('With an OBJECT consisting of ONLY primitive values:', () => {
  let originalObject;
  const untouchedOriginalObject = { 
    yearsInPrison: 100,
    favoritePlace: 'hell',
    shouldBeFree: true,
    lovedOnes: null,
    leastFavoritePlace: undefined,
    kills: BigInt(10000),
  };

  beforeEach(() => {
    originalObject = { 
      yearsInPrison: 100,
      favoritePlace: 'hell',
      shouldBeFree: true,
      lovedOnes: null,
      leastFavoritePlace: undefined,
      kills: BigInt(10000),
    };
  });

  it('returns an object that looks identical', () => {
    const clone = stateClone(originalObject);

    expect(clone).toEqual(originalObject);
  });

  it('but is not a reference to the same object', () => {
    const clone = stateClone(originalObject);

    clone.yearsInPrison = 200;
    clone.favoritePlace = 'heaven';
    clone.shouldBeFree = false;
    clone.kills = BigInt(2000);

    const expectedOutcome = {
      yearsInPrison: 200,
      favoritePlace: 'heaven',
      shouldBeFree: false,
      lovedOnes: null,
      leastFavoritePlace: undefined,
      kills: BigInt(2000),
    }

    expect(clone).toEqual(expectedOutcome);
    expect(clone).not.toBe(originalObject);
    expect(originalObject).toEqual(untouchedOriginalObject);
  });
});

describe('With NESTED OBJECTS:', () => {
  let originalObject;
  const untouchedOriginalObject = {
    name: {
      first: 'joao',
      last: 'corça',
    },
    age: 24,
  };

  beforeEach(() => {
    originalObject = {
      name: {
        first: 'joao',
        last: 'corça',
      },
      age: 24,
    };
  });

  it('returns an object that looks identical', () => {
    const clone = stateClone(originalObject);

    expect(clone).toEqual(originalObject);
  });

  it('but is not a reference to the same object', () => {
    const clone = stateClone(originalObject);

    clone.name.first = 'janete';
    clone.age = 42;

    const expectedOutcome = {
      name: {
        first: 'janete',
        last: 'corça',
      },
      age: 42,
    };

    expect(clone).toEqual(expectedOutcome);
    expect(clone).not.toBe(originalObject);
    expect(originalObject).toEqual(untouchedOriginalObject);
  });
})

describe('With an ARRAY consisting of primitive values, other ARRAYS and OBJECTS:', () => {
  let originalArray;
  const untouchedOriginalArray = [10, ['kill', 'the', 'queen'], { isSmiling: true, favoritePlace: 'prison' }];

  beforeEach(() => {
    originalArray = [10, ['kill', 'the', 'queen'], { isSmiling: true, favoritePlace: 'prison' }];
  });

  it('returns an array that looks identical', () => {
    const clone = stateClone(originalArray);
    expect(clone).toEqual(originalArray);
  });

  it('but is not a reference to the same array', () => {
    const clone = stateClone(originalArray);

    clone[0] = 100;
    clone[1][0] = 'smile';
    clone[1][1] = 'laugh';
    clone[1][2] = 'cry';
    clone[2].isSmiling = false;
    clone[2].favoritePlace = 'free falling';

    const expectedOutcome = [100, ['smile', 'laugh', 'cry'], { isSmiling: false, favoritePlace: 'free falling' }];

    expect(clone).toEqual(expectedOutcome);
    expect(clone).not.toBe(originalArray);
    expect(originalArray).toEqual(untouchedOriginalArray);
  });
});
