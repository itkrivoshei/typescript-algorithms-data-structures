import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from '../functions';

describe('capitalize function', () => {
  it('should capitalize the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should keep the same case for other characters', () => {
    expect(capitalize('hELLO')).toBe('HELLO');
  });
});

describe('reverseString function', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should handle empty string', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('calculator object', () => {
  it('should add two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('should subtract two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  it('should multiply two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('should divide two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
});

describe('caesarCipher function', () => {
  it('should shift characters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  it('should wrap from z to a', () => {
    expect(caesarCipher('z', 1)).toBe('a');
  });

  it('should keep the same case', () => {
    expect(caesarCipher('AbC', 1)).toBe('BcD');
  });

  it('should handle punctuation', () => {
    expect(caesarCipher('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
  });
});

describe('analyzeArray function', () => {
  it('should calculate average, min, max, and length of array', () => {
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result.average).toBe(3);
    expect(result.min).toBe(1);
    expect(result.max).toBe(5);
    expect(result.length).toBe(5);
  });

  it('should handle empty array', () => {
    const result = analyzeArray([]);
    expect(result.average).toBeNaN();
    expect(result.min).toBeUndefined();
    expect(result.max).toBeUndefined();
    expect(result.length).toBe(0);
  });
});
