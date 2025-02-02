test('prints Hello, world!', () => {
  console.log = jest.fn();
  require('../src/index');
  expect(console.log).toHaveBeenCalledWith('Hello, world 👋 !');
});
