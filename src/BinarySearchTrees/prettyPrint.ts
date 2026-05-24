import { TreeNode } from './TreeNode';

export const prettyPrint = <T>(node: TreeNode<T> | null, prefix = '', isLeft = true) => {
  if (node === null) return;

  if (node.right !== null) prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);

  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);

  if (node.left !== null) prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
};
