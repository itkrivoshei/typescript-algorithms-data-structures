type DemoExample = {
  id: string;
  label: string;
  input: string;
  sourcePath: string;
  complexity: string;
  description: string;
  run: (value: string) => unknown;
};

const fibonacci = (countInput: string): number[] => {
  const count = Math.max(0, Math.min(Number(countInput), 40));
  const result: number[] = [];

  for (let index = 0; index < count; index += 1) {
    if (index < 2) result.push(index);
    else result.push(result[index - 1] + result[index - 2]);
  }

  return result;
};

const parseNumbers = (value: string): number[] =>
  value
    .split(',')
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item));

const mergeSort = (items: number[]): number[] => {
  if (items.length <= 1) return items;

  const middle = Math.floor(items.length / 2);
  const left = mergeSort(items.slice(0, middle));
  const right = mergeSort(items.slice(middle));
  const result: number[] = [];

  while (left.length > 0 && right.length > 0) {
    const next = left[0] <= right[0] ? left.shift() : right.shift();
    if (next !== undefined) result.push(next);
  }

  return result.concat(left, right);
};

const binarySearch = (items: number[], target: number): number => {
  let left = 0;
  let right = items.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (items[middle] === target) return middle;
    if (items[middle] < target) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
};

const examples: DemoExample[] = [
  {
    id: 'fibonacci',
    label: 'Fibonacci sequence',
    input: '8',
    sourcePath: 'src/Recursion',
    complexity: 'Time: O(n), Space: O(n)',
    description: 'Generates a Fibonacci sequence using iterative dynamic programming style logic.',
    run: fibonacci,
  },
  {
    id: 'merge-sort',
    label: 'Merge sort',
    input: '8, 3, 5, 1, 13, 2',
    sourcePath: 'src/Recursion',
    complexity: 'Time: O(n log n), Space: O(n)',
    description: 'Splits a list into smaller lists and merges them back in sorted order.',
    run: (value) => mergeSort(parseNumbers(value)),
  },
  {
    id: 'binary-search',
    label: 'Binary search',
    input: '1, 2, 3, 5, 8, 13 | 8',
    sourcePath: 'src/BinarySearchTrees',
    complexity: 'Time: O(log n), Space: O(1)',
    description: 'Finds the index of a target value in a sorted numeric list.',
    run: (value) => {
      const [list, target] = value.split('|');
      const items = parseNumbers(list);
      const targetNumber = Number(target);

      return {
        sortedInput: items,
        target: targetNumber,
        index: binarySearch(items, targetNumber),
      };
    },
  },
];

const algorithmInput = document.getElementById('algorithm') as HTMLSelectElement;
const sampleInput = document.getElementById('input') as HTMLTextAreaElement;
const output = document.getElementById('output') as HTMLPreElement;
const description = document.getElementById('description') as HTMLParagraphElement;
const sourcePath = document.getElementById('source-path') as HTMLAnchorElement;
const complexity = document.getElementById('complexity') as HTMLParagraphElement;
const runButton = document.getElementById('run') as HTMLButtonElement;

const activeExample = (): DemoExample =>
  examples.find((example) => example.id === algorithmInput.value) ?? examples[0];

const renderOptions = (): void => {
  algorithmInput.innerHTML = examples
    .map((example) => `<option value="${example.id}">${example.label}</option>`)
    .join('');
};

const runDemo = (): void => {
  const example = activeExample();
  const result = example.run(sampleInput.value);

  description.textContent = example.description;
  complexity.textContent = example.complexity;
  sourcePath.textContent = example.sourcePath;
  sourcePath.href = `https://github.com/itkrivoshei/typescript-algorithms-data-structures/tree/main/${example.sourcePath}`;
  output.textContent = JSON.stringify(result, null, 2);
};

algorithmInput.addEventListener('change', () => {
  sampleInput.value = activeExample().input;
  runDemo();
});

runButton.addEventListener('click', runDemo);
renderOptions();
sampleInput.value = activeExample().input;
runDemo();
