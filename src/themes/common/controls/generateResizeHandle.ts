import { css } from 'styled-components';

import { ThemeVariables } from '../types';

const generateResizeHandle = (themeVariables: ThemeVariables) => {
  const size = 14;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = size;
  canvas.height = size;

  ctx.fillStyle = themeVariables.shade3;
  ctx.fillRect(0, 0, 14, 14);

  const strokeLine = (x1: number, y1: number, x2: number, y2: number) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };
  const strokeMirroredLine = (a: number, b: number) => strokeLine(a, b, b, a);

  ctx.strokeStyle = themeVariables.shade1;
  strokeMirroredLine(0, 13);

  ctx.strokeStyle = themeVariables.shade4;
  strokeMirroredLine(1, 13);
  strokeMirroredLine(2, 13);

  ctx.strokeStyle = themeVariables.shade1;
  strokeMirroredLine(4, 13);

  ctx.strokeStyle = themeVariables.shade4;
  strokeMirroredLine(5, 13);
  strokeMirroredLine(6, 13);

  ctx.strokeStyle = themeVariables.shade1;
  strokeMirroredLine(8, 13);

  ctx.strokeStyle = themeVariables.shade4;
  strokeMirroredLine(9, 13);
  strokeMirroredLine(10, 13);

  return css`
    background-image: url('${canvas.toDataURL()}');
    background-size: 14px 14px;
    image-rendering: pixelated;
  `;
};

export default generateResizeHandle;
