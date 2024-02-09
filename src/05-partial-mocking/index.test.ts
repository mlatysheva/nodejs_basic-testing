import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule = jest.requireActual('./index');
  return {
    ...originalModule,
    mockOne: jest.fn(() => {}),
    mockTwo: jest.fn(() => {}),
    mockThree: jest.fn(() => {}),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    const consoleSpy = jest.spyOn(global.console, 'log');
    mockOne();
    expect(consoleSpy).not.toHaveBeenCalled();

    mockTwo();
    expect(consoleSpy).not.toHaveBeenCalled();

    mockThree();
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    const consoleSpy = jest.spyOn(global.console, 'log');
    unmockedFunction();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
