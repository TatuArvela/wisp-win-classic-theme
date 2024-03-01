import { css } from 'styled-components';

const generateCheckerboardImage = (color1: string, color2: string) => {
  const size = 1;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = size * 2;
  canvas.height = size * 2;

  ctx.fillStyle = color1;
  ctx.fillRect(0, 0, size, size);
  ctx.fillRect(size, size, size, size);

  ctx.fillStyle = color2;
  ctx.fillRect(size, 0, size, size);
  ctx.fillRect(0, size, size, size);

  return canvas.toDataURL();
};

const generateDitheredBackground = (color1: string, color2: string) => {
  const image = generateCheckerboardImage(color1, color2);
  return css`
    background-image: url('${image}');
    background-size: 2px 2px;
  `;
};

export default generateDitheredBackground;
