// Adapted from Barrett Sonntag's codepen: https://codepen.io/sosuke/pen/Pjoqqp

type Color = { r: number; g: number; b: number };

type HSL = {
  h: number;
  s: number;
  l: number;
};

type Wide = {
  loss: number;
  values: number[];
};

const SOURCE_COLOR = 'rgb(0 0 0)';

const createColor = (r: number, g: number, b: number): Color => ({
  r: clamp(r),
  g: clamp(g),
  b: clamp(b),
});

const parseColor = (color: string): Color => {
  const regex = /rgb\((\d+),?\s*(\d+),?\s*(\d+)\)/;
  const match = color.match(regex);

  if (!match) {
    throw new Error("Invalid color format. Use 'rgb(r, g, b)' or 'rgb(r g b)'");
  }

  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);

  return createColor(r, g, b);
};

const clamp = (value: number) => Math.max(0, Math.min(255, value));

const multiply = (color: Color, matrix: number[]): Color => {
  const newR = clamp(
    color.r * matrix[0] + color.g * matrix[1] + color.b * matrix[2]
  );
  const newG = clamp(
    color.r * matrix[3] + color.g * matrix[4] + color.b * matrix[5]
  );
  const newB = clamp(
    color.r * matrix[6] + color.g * matrix[7] + color.b * matrix[8]
  );
  return createColor(newR, newG, newB);
};

const linear = (color: Color, slope = 1, intercept = 0): Color =>
  createColor(
    clamp(color.r * slope + intercept * 255),
    clamp(color.g * slope + intercept * 255),
    clamp(color.b * slope + intercept * 255)
  );

const hsl = (color: Color): HSL => {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 100, s: s * 100, l: l * 100 };
};

const hueRotate = (color: Color, angle = 0): Color => {
  angle = (angle / 180) * Math.PI;
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  return multiply(color, [
    0.213 + cos * 0.787 - sin * 0.213,
    0.715 - cos * 0.715 - sin * 0.715,
    0.072 - cos * 0.072 + sin * 0.928,
    0.213 - cos * 0.213 + sin * 0.143,
    0.715 + cos * 0.285 + sin * 0.14,
    0.072 - cos * 0.072 - sin * 0.283,
    0.213 - cos * 0.213 - sin * 0.787,
    0.715 - cos * 0.715 + sin * 0.715,
    0.072 + cos * 0.928 + sin * 0.072,
  ]);
};

const sepia = (color: Color, value = 1): Color =>
  multiply(color, [
    0.393 + 0.607 * (1 - value),
    0.769 - 0.769 * (1 - value),
    0.189 - 0.189 * (1 - value),
    0.349 - 0.349 * (1 - value),
    0.686 + 0.314 * (1 - value),
    0.168 - 0.168 * (1 - value),
    0.272 - 0.272 * (1 - value),
    0.534 - 0.534 * (1 - value),
    0.131 + 0.869 * (1 - value),
  ]);

const saturate = (color: Color, value = 1): Color =>
  multiply(color, [
    0.213 + 0.787 * value,
    0.715 - 0.715 * value,
    0.072 - 0.072 * value,
    0.213 - 0.213 * value,
    0.715 + 0.285 * value,
    0.072 - 0.072 * value,
    0.213 - 0.213 * value,
    0.715 - 0.715 * value,
    0.072 + 0.928 * value,
  ]);

const invert = (color: Color, value = 1): Color =>
  createColor(
    clamp((value + (color.r / 255) * (1 - 2 * value)) * 255),
    clamp((value + (color.g / 255) * (1 - 2 * value)) * 255),
    clamp((value + (color.b / 255) * (1 - 2 * value)) * 255)
  );

const brightness = (color: Color, value = 1): Color => linear(color, value);

const contrast = (color: Color, value = 1): Color =>
  linear(color, value, -(0.5 * value) + 0.5);

const fix = (value: number, idx: number) => {
  let max = 100;
  if (idx === 2) {
    // saturate
    max = 7500;
  } else if (idx === 4 || idx === 5) {
    // brightness or contrast
    max = 200;
  }

  if (idx === 3) {
    // hue-rotate
    if (value > max) {
      value %= max;
    } else if (value < 0) {
      value = max + (value % max);
    }
  } else if (value < 0) {
    value = 0;
  } else if (value > max) {
    value = max;
  }
  return value;
};

const loss = (target: Color, color: Color, filters: any[]) => {
  let tempColor = color;

  tempColor = invert(tempColor, filters[0] / 100);
  tempColor = sepia(tempColor, filters[1] / 100);
  tempColor = saturate(tempColor, filters[2] / 100);
  tempColor = hueRotate(tempColor, filters[3] * 3.6);
  tempColor = brightness(tempColor, filters[4] / 100);
  tempColor = contrast(tempColor, filters[5] / 100);

  const colorHSL = hsl(tempColor);
  const targetHSL = hsl(target);

  return (
    Math.abs(tempColor.r - target.r) +
    Math.abs(tempColor.g - target.g) +
    Math.abs(tempColor.b - target.b) +
    Math.abs(colorHSL.h - targetHSL.h) +
    Math.abs(colorHSL.s - targetHSL.s) +
    Math.abs(colorHSL.l - targetHSL.l)
  );
};

const spsa = (
  target: Color,
  color: Color,
  A: number,
  a: number[],
  c: number,
  values: number[],
  iters: number
) => {
  const alpha = 1;
  const gamma = 0.16666666666666666;

  let best = null;
  let bestLoss = Infinity;
  const deltas = new Array(6);
  const highArgs = new Array(6);
  const lowArgs = new Array(6);

  for (let k = 0; k < iters; k++) {
    const ck = c / Math.pow(k + 1, gamma);
    for (let i = 0; i < 6; i++) {
      deltas[i] = Math.random() > 0.5 ? 1 : -1;
      highArgs[i] = values[i] + ck * deltas[i];
      lowArgs[i] = values[i] - ck * deltas[i];
    }

    const lossDiff =
      loss(target, color, highArgs) - loss(target, color, lowArgs);
    for (let i = 0; i < 6; i++) {
      const g = (lossDiff / (2 * ck)) * deltas[i];
      const ak = a[i] / Math.pow(A + k + 1, alpha);
      values[i] = fix(values[i] - ak * g, i);
    }

    const currentLoss = loss(target, color, values);
    if (currentLoss < bestLoss) {
      best = values.slice(0);
      bestLoss = currentLoss;
    }
  }
  return { values: best, loss: bestLoss };
};

const solveWide = (target: Color, color: Color): Wide => {
  const A = 5;
  const c = 15;
  const a = [60, 180, 18000, 600, 1.2, 1.2];

  let best = { loss: Infinity, values: [] };
  for (let i = 0; best.loss > 25 && i < 3; i++) {
    const initial = [50, 20, 3750, 50, 100, 100];
    const result = spsa(target, color, A, a, c, initial, 1000);
    if (result.loss < best.loss) {
      best = result;
    }
  }
  return best;
};

const solveNarrow = (target: Color, color: Color, wide: Wide) => {
  const A = wide.loss;
  const c = 2;
  const A1 = A + 1;
  const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
  return spsa(target, color, A, a, c, wide.values, 500);
};

const css = (filters: { [x: string]: number }) => {
  const fmt = (idx: number, multiplier = 1) =>
    Math.round(filters[idx] * multiplier);
  return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(
    2
  )}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(
    5
  )}%);`;
};

const generateColorFilter = (targetColor: string) => {
  const target = parseColor(targetColor);
  const color = parseColor(SOURCE_COLOR);
  const wide = solveWide(target, color);
  const result = solveNarrow(target, color, wide);
  return css(result.values);
};

export default generateColorFilter;
