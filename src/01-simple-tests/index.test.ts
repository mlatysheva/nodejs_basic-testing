import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const sum = simpleCalculator({ a: 4, b: 5, action: Action.Add});
    expect(sum).toBe(9);
  });

  test('should subtract two numbers', () => {
    const difference = simpleCalculator({ a: 4, b: 5, action: Action.Subtract});
    expect(difference).toBe(-1);
  });

  test('should multiply two numbers', () => {
    const product = simpleCalculator({ a: 4, b: 5, action: Action.Multiply});
    expect(product).toBe(20);
  });

  test('should divide two numbers', () => {
    const quotient = simpleCalculator({ a: 4, b: 5, action: Action.Divide});
    expect(quotient).toBe(0.8);
  });

  test('should exponentiate two numbers', () => {
    const exponent = simpleCalculator({ a: 4, b: 5, action: Action.Exponentiate});
    expect(exponent).toBe(1024);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 4, b: 5, action: 'invalid' as Action});
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: '4', b: 5, action: Action.Add});
    expect(result).toBe(null);
  });
});
