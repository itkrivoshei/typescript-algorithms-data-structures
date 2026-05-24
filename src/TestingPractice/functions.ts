export function capitalize(str: string): string {
  if (!str) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export const calculator = {
  add: (a: number, b: number): number => a + b,
  subtract: (a: number, b: number): number => a - b,
  multiply: (a: number, b: number): number => a * b,
  divide: (a: number, b: number): number => a / b,
};

function shiftLetters(str: string, shift: number): string {
  return str.replace(/[A-Za-z]/g, (char) => {
    const base = char >= 'a' && char <= 'z' ? 97 : 65;

    return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
  });
}

export const caesarCipher = shiftLetters;

export function analyzeArray(arr: number[]): {
  average: number;
  min: number | undefined;
  max: number | undefined;
  length: number;
} {
  const average = arr.length > 0 ? arr.reduce((acc, curr) => acc + curr, 0) / arr.length : NaN;
  const min = arr.length > 0 ? Math.min(...arr) : undefined;
  const max = arr.length > 0 ? Math.max(...arr) : undefined;
  const length = arr.length;

  return { average, min, max, length };
}
