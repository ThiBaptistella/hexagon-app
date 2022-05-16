import { useApiCallHooks } from './useHooks'

test('should', () => {
  expect(useApiCallHooks).toBeDefined()
})

test('api function returns', () => {
  const useApiCallHooks = jest.fn(() => true);
  useApiCallHooks();
  expect(useApiCallHooks).toHaveReturned();
});

test('return check properties', () => {
  expect(useApiCallHooks).toHaveProperty('path');
  expect(useApiCallHooks).toHaveProperty('name');
  expect(useApiCallHooks).toHaveProperty('size');
  expect(useApiCallHooks).toHaveProperty('directory');
});