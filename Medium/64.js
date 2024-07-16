var minPathSum = function (grid) {
  let total = 0;
  for (let i = grid.length - 1; i >= 0; i--) {
    if (i !== 0) {
      total += grid[i][grid.length];
    } else {
      for (let j = 0; j <= grid[i].length - 1; j++) {
        total += grid[i][j];
      }
    }
  }
  return total;
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
