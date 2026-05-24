export interface Position {
  x: number;
  y: number;
}

export function knightMoves(start: Position, end: Position): Position[] {
  const boardSize = 8;
  const moves = [
    { x: 2, y: 1 },
    { x: 1, y: 2 },
    { x: -1, y: 2 },
    { x: -2, y: 1 },
    { x: -2, y: -1 },
    { x: -1, y: -2 },
    { x: 1, y: -2 },
    { x: 2, y: -1 },
  ];

  function isValid({ x, y }: Position): boolean {
    return x >= 0 && y >= 0 && x < boardSize && y < boardSize;
  }

  function bfs(start: Position, end: Position): Position[] {
    const queue: { position: Position; path: Position[] }[] = [{ position: start, path: [start] }];
    const visited: boolean[][] = Array.from({ length: boardSize }, () =>
      Array(boardSize).fill(false)
    );
    visited[start.x][start.y] = true;

    while (queue.length > 0) {
      const { position, path } = queue.shift()!;

      if (position.x === end.x && position.y === end.y) return path;

      for (const move of moves) {
        const nextPosition: Position = {
          x: position.x + move.x,
          y: position.y + move.y,
        };
        if (isValid(nextPosition) && !visited[nextPosition.x][nextPosition.y]) {
          visited[nextPosition.x][nextPosition.y] = true;
          queue.push({ position: nextPosition, path: [...path, nextPosition] });
        }
      }
    }

    return [];
  }

  return bfs(start, end);
}
