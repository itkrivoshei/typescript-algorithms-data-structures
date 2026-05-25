import { knightMoves } from '../knightsTravails';

describe('knightMoves', () => {
  it('should find the shortest path for a simple move', () => {
    expect(knightMoves({ x: 0, y: 0 }, { x: 1, y: 2 })).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 2 },
    ]);
  });

  it('should find a shortest path for a more complex move', () => {
    const result = knightMoves({ x: 0, y: 0 }, { x: 3, y: 3 });
    const expectedPaths = [
      [
        { x: 0, y: 0 },
        { x: 2, y: 1 },
        { x: 3, y: 3 },
      ],
      [
        { x: 0, y: 0 },
        { x: 1, y: 2 },
        { x: 3, y: 3 },
      ],
    ];

    expect(expectedPaths).toContainEqual(result);
  });

  it('should return the starting position for a move to the same position', () => {
    expect(knightMoves({ x: 2, y: 2 }, { x: 2, y: 2 })).toEqual([{ x: 2, y: 2 }]);
  });

  it('should handle moves that would go off the board', () => {
    const result = knightMoves({ x: 0, y: 0 }, { x: 7, y: 7 });

    result.forEach(({ x, y }) => {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(7);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(7);
    });
  });
});
