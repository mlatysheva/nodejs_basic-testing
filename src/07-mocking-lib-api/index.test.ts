import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios', () => ({
  get: jest.fn(),
  create() {
    return {
      get: this.get.mockResolvedValueOnce({ data: 'posts' }),
    };
  }
  }));

jest.mock('lodash', () => ({
  throttle: jest.fn(fn => fn),
}));


describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    const axiosCreateSpy = jest.spyOn(axios, 'create');
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const relativePath = '/posts';
    await throttledGetDataFromApi(relativePath);
    expect(axios.create).toHaveBeenCalled();
    expect(axiosCreateSpy).toHaveBeenCalledWith({
      baseURL,
    });
  });

  test('should perform request to correct provided url', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    const relativePath = '/posts';
    await throttledGetDataFromApi(relativePath);
    expect(axiosGetSpy).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const data = 'posts received';
    const relativePath = '/posts';
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data });
    const response = await throttledGetDataFromApi(relativePath);
    expect(response).toEqual(data);
  });
});
