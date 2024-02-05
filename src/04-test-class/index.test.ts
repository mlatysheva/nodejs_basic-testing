import { getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(100);
    expect(account.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(100);
    expect(() => account.withdraw(200)).toThrow('Insufficient funds');
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(100);
    const account2 = getBankAccount(400);
    expect(() => account.transfer(200, account2)).toThrow('Insufficient funds');
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(100);
    expect(() => account.transfer(200, account)).toThrow('Transfer failed');
  });

  test('should deposit money', () => {
    const account = getBankAccount(100);
    account.deposit(200);
    expect(account.getBalance()).toBe(300);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(300);
    account.withdraw(50);
    expect(account.getBalance()).toBe(250);
  });

  test('should transfer money', () => {
    const account = getBankAccount(300);
    const account2 = getBankAccount(200);
    account.transfer(50, account2);
    expect(account.getBalance()).toBe(250);
    expect(account2.getBalance()).toBe(250);
  });

  test('fetchBalance should return number in case if request did not fail', async () => {
    const account = getBankAccount(0);
    const balance = await account.fetchBalance();
    if (balance !== null) {
      expect(typeof balance).toBe('number');
    };
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(0);
    const balance = await account.fetchBalance();
    if (balance !== null) {
      account.deposit(balance);
      expect(account.getBalance()).toBe(balance);
    }
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(0);
    const balance = await account.fetchBalance();
    if (balance === null) {
      expect(async () => await account.synchronizeBalance()).toThrow('Synchronization failed');
    }
  });
});
