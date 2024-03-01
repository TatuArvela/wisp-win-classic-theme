const generateBorders = (
  distance: number,
  topLeftColor: string,
  bottomRightColor: string
) => {
  // Layers from top to bottom
  const values = [
    [-distance, -distance, bottomRightColor],
    [distance, distance, topLeftColor],
  ];

  return values
    .map(([x, y, color]) => `inset ${x}px ${y}px 0 0 ${color}`)
    .join(',\n');
};

export default generateBorders;
