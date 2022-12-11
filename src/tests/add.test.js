const add = (a, b) => a + b;
const generateGreeting = (name = 'Annonymous') => {
    return `Hello ${name}!`;
}

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test("should add name after Hello", () => {
  const result = generateGreeting('Ugur');
  expect(result).toBe(`Hello Ugur!`);
});

test("should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe(`Hello Annonymous!`);
});