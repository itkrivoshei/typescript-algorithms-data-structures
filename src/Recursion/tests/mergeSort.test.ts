import { mergeSort } from '../mergeSort';

describe('mergeSort', () => {
  it('should handle an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  it('should handle an array with one element', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  it('should handle a sorted array', () => {
    expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('should sort an unsorted array', () => {
    expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });

  it('should correctly sort an array with negative numbers', () => {
    expect(mergeSort([-3, -1, -2, 0])).toEqual([-3, -2, -1, 0]);
  });

  it('should correctly sort an array with duplicates', () => {
    expect(mergeSort([5, 3, 1, 3, 2])).toEqual([1, 2, 3, 3, 5]);
  });

  it('should handle array with all identical elements', () => {
    expect(mergeSort([2, 2, 2])).toEqual([2, 2, 2]);
  });

  it('should correctly sort a large array', () => {
    const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

    const sortedArray = [...largeArray].sort((a, b) => a - b);

    expect(mergeSort(largeArray)).toEqual(sortedArray);
  });
});
