import {  simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: -5, b: -3, action: Action.Add, expected: -8},
  { a: 4, b: 2, action: Action.Subtract, expected: 2 },
  { a: 5, b: 2, action: Action.Subtract, expected: 3 },
  { a: 6, b: 2, action: Action.Subtract, expected: 4 },
  { a: -5, b: -3, action: Action.Subtract, expected: -2},
  { a: 7, b: 2, action: Action.Multiply, expected: 14 },
  { a: 8, b: 2, action: Action.Multiply, expected: 16 },
  { a: 9, b: 2, action: Action.Multiply, expected: 18 },
  { a: -5, b: -3, action: Action.Multiply, expected: 15},
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 11, b: 2, action: Action.Divide, expected: 5.5 },
  { a: 12, b: 2, action: Action.Divide, expected: 6 },
  { a: -5, b: -3, action: Action.Divide, expected: 5/3},  
  { a: 13, b: 2, action: Action.Exponentiate, expected: 169 },
  { a: 14, b: 2, action: Action.Exponentiate, expected: 196 },
  { a: 15, b: 2, action: Action.Exponentiate, expected: 225 },
];

describe.each(testCases)(
  'simpleCalculator',
  ({ a, b, action, expected }) => {
    test(`should perform ${action} with ${a} and ${b}`, () => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    });
  }
);

describe('simpleCalculator', () => {
  test('should test the prescribed test cases', () => {
    const results = testCases.map(testCase => simpleCalculator(testCase));
    expect(results).toEqual(testCases.map(testCase => testCase.expected));
  });
});
