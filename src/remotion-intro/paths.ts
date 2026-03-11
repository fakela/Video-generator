// Shape SVG paths (in 0-100 coordinate space, centered)
// Order: Pentagon, Triangle, Square, Circle, Hexagon, Diamond, Circle, Triangle
export const SHAPES: string[] = [
  // Pentagon
  'M 50 5 L 93 38 L 76 90 L 24 90 L 7 38 Z',
  // Triangle
  'M 50 8 L 95 90 L 5 90 Z',
  // Square
  'M 12 12 L 88 12 L 88 88 L 12 88 Z',
  // Circle
  'M 50 2 C 76.5 2 98 23.5 98 50 C 98 76.5 76.5 98 50 98 C 23.5 98 2 76.5 2 50 C 2 23.5 23.5 2 50 2 Z',
  // Hexagon
  'M 50 3 L 91 27 L 91 73 L 50 97 L 9 73 L 9 27 Z',
  // Diamond
  'M 50 5 L 95 50 L 50 95 L 5 50 Z',
  // Circle
  'M 50 2 C 76.5 2 98 23.5 98 50 C 98 76.5 76.5 98 50 98 C 23.5 98 2 76.5 2 50 C 2 23.5 23.5 2 50 2 Z',
  // Triangle
  'M 50 8 L 95 90 L 5 90 Z',
];

// Bold block letter SVG paths (in 0-100 coordinate space)
// Order: R, E, M, O, T, I, O, N
export const LETTERS: string[] = [
  // R
  'M 15 5 L 62 5 C 82 5 90 14 90 30 C 90 46 80 54 62 55 L 88 95 L 64 95 L 42 58 L 35 58 L 35 95 L 15 95 Z',
  // E
  'M 15 5 L 85 5 L 85 22 L 35 22 L 35 43 L 72 43 L 72 58 L 35 58 L 35 78 L 85 78 L 85 95 L 15 95 Z',
  // M
  'M 5 95 L 5 5 L 26 5 L 50 48 L 74 5 L 95 5 L 95 95 L 76 95 L 76 34 L 56 70 L 44 70 L 24 34 L 24 95 Z',
  // O
  'M 50 5 C 78 5 95 22 95 50 C 95 78 78 95 50 95 C 22 95 5 78 5 50 C 5 22 22 5 50 5 Z',
  // T
  'M 5 5 L 95 5 L 95 24 L 60 24 L 60 95 L 40 95 L 40 24 L 5 24 Z',
  // I
  'M 25 5 L 75 5 L 75 22 L 60 22 L 60 78 L 75 78 L 75 95 L 25 95 L 25 78 L 40 78 L 40 22 L 25 22 Z',
  // O
  'M 50 5 C 78 5 95 22 95 50 C 95 78 78 95 50 95 C 22 95 5 78 5 50 C 5 22 22 5 50 5 Z',
  // N
  'M 10 95 L 10 5 L 30 5 L 72 62 L 72 5 L 90 5 L 90 95 L 70 95 L 28 38 L 28 95 Z',
];

// Vibrant fill colors for each shape/letter
export const COLORS: string[] = [
  '#FF3366', // hot pink (Pentagon → R)
  '#33CCFF', // cyan (Triangle → E)
  '#FFCC00', // golden (Square → M)
  '#FF6633', // orange (Circle → O)
  '#44DD88', // green (Hexagon → T)
  '#AA66FF', // purple (Diamond → I)
  '#FF9933', // amber (Circle → O)
  '#3399FF', // blue (Triangle → N)
];
