import { TreeNode } from './TreeNode';

export class BalancedBST<T extends number> {
  private root: TreeNode<T> | null = null;

  public get testRoot(): TreeNode<T> | null {
    return this.root;
  }

  constructor(array: T[]) {
    this.buildTree(array);
  }

  private buildTree(array: T[]): void {
    const sortedArray = Array.from(new Set(array)).sort((a, b) => a - b);

    this.root = this.buildTreeHelper(sortedArray, 0, sortedArray.length - 1);
  }

  private buildTreeHelper(array: T[], start: number, end: number): TreeNode<T> | null {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode<T>(array[mid]);

    node.left = this.buildTreeHelper(array, start, mid - 1);
    node.right = this.buildTreeHelper(array, mid + 1, end);

    return node;
  }

  public insert(value: T): void {
    this.root = this.insertRecursive(this.root, value);
  }

  private insertRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) return new TreeNode(value);

    if (value < node.value) node.left = this.insertRecursive(node.left, value);
    else if (value > node.value) node.right = this.insertRecursive(node.right, value);

    return node;
  }

  public delete(value: T): void {
    this.root = this.deleteRecursive(this.root, value);
  }

  private deleteRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) return null;

    if (value < node.value) node.left = this.deleteRecursive(node.left, value);
    else if (value > node.value) node.right = this.deleteRecursive(node.right, value);
    else {
      if (node.left === null) return node.right;
      else if (node.right === null) return node.left;

      node.value = this.findMin(node.right).value;

      node.right = this.deleteRecursive(node.right, node.value);
    }

    return node;
  }

  private findMin(node: TreeNode<T>): TreeNode<T> {
    let current = node;

    while (current.left !== null) current = current.left;

    return current;
  }

  public find(value: T): TreeNode<T> | null {
    return this.findRecursive(this.root, value);
  }

  private findRecursive(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null || node.value === value) return node;
    else if (value < node.value) return this.findRecursive(node.left, value);
    else return this.findRecursive(node.right, value);
  }

  public levelOrderIterative(callback?: (node: TreeNode<T>) => void): T[] {
    const values: T[] = [];

    if (!this.root) return values;

    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node) {
        if (callback) callback(node);

        values.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    return values;
  }

  public levelOrderRecursive(callback?: (node: TreeNode<T>) => void): T[] {
    const values: T[] = [];

    const processLevel = (nodes: TreeNode<T>[], level: number) => {
      if (nodes.length === 0) return;

      const nextLevelNodes: TreeNode<T>[] = [];

      nodes.forEach((node) => {
        if (callback) callback(node);
        values.push(node.value);

        if (node.left) nextLevelNodes.push(node.left);
        if (node.right) nextLevelNodes.push(node.right);
      });

      processLevel(nextLevelNodes, level + 1);
    };

    if (this.root) processLevel([this.root], 0);

    return values;
  }

  private depthFirstTraversals(
    type: 'inOrder' | 'preOrder' | 'postOrder',
    node: TreeNode<T> | null,
    callback?: (node: TreeNode<T>) => void
  ): T[] {
    const values: T[] = [];

    if (node === null) return values;

    if (type === 'preOrder') {
      callback && callback(node);
      values.push(node.value);
    }

    values.push(...this.depthFirstTraversals(type, node.left, callback));

    if (type === 'inOrder') {
      callback && callback(node);
      values.push(node.value);
    }

    values.push(...this.depthFirstTraversals(type, node.right, callback));

    if (type === 'postOrder') {
      callback && callback(node);
      values.push(node.value);
    }

    return values;
  }

  public inOrder(callback?: (node: TreeNode<T>) => void): T[] {
    return this.depthFirstTraversals('inOrder', this.root, callback);
  }

  public preOrder(callback?: (node: TreeNode<T>) => void): T[] {
    return this.depthFirstTraversals('preOrder', this.root, callback);
  }

  public postOrder(callback?: (node: TreeNode<T>) => void): T[] {
    return this.depthFirstTraversals('postOrder', this.root, callback);
  }

  public height(node: TreeNode<T> | null): number {
    if (node === null) return -1;

    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  public depth(node: TreeNode<T> | null): number {
    let depth = -1;
    let current = this.root;

    while (current !== null) {
      depth++;
      if (node === current) break;

      current = node !== null && node.value < current.value ? current.left : current.right;
    }

    return depth;
  }

  public isBalanced(): boolean {
    return this.checkBalance(this.root) !== -1;
  }

  private checkBalance(node: TreeNode<T> | null): number {
    if (node === null) return 0;

    const leftHeight = this.checkBalance(node.left);

    if (leftHeight === -1) return -1;

    const rightHeight = this.checkBalance(node.right);

    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  public rebalance(): void {
    const values = this.inOrder();

    this.buildTree(values);
  }
}
