import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const links = ['users', 'posts', 'create post'];
    const generatedNavList = generateLinkedList(links);
    const mockedNavList = {
      value: 'users',
      next: {
        value: 'posts',
        next: {
          value: 'create post',
          next: {
            value: null,
            next: null
          }
        }
      }
    }
    expect (generatedNavList).toStrictEqual(mockedNavList);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const links = ['users', 'posts', 'create post'];
    const generatedNavList = generateLinkedList(links);
    expect(generatedNavList).toMatchSnapshot();
  });
});
