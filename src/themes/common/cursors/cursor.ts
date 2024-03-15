import { css } from 'styled-components';

import aesthetic from './aesthetic.png';
import defaultCursor from './default.png';
import eResize from './e-resize.png';
import pointer from './pointer.png';
import progress from './progress.png';
import sResize from './s-resize.png';
import seResize from './se-resize.png';
import swResize from './sw-resize.png';
import text from './text.png';

type CursorOption =
  | 'aesthetic'
  | 'default'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'pointer'
  | 'progress'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'text'
  | 'w-resize';

type UrlAndCoordinates = [url: string, x: number, y: number];

const cursors: Record<CursorOption, UrlAndCoordinates> = {
  aesthetic: [aesthetic, 0, 0],
  default: [defaultCursor, 0, 0],
  'e-resize': [eResize, 10, 4],
  'n-resize': [sResize, 4, 10],
  'ne-resize': [swResize, 8, 8],
  'nw-resize': [seResize, 8, 8],
  pointer: [pointer, 0, 0],
  progress: [progress, 0, 0],
  's-resize': [sResize, 5, 10],
  'se-resize': [seResize, 8, 8],
  'sw-resize': [swResize, 8, 8],
  text: [text, 4, 0],
  'w-resize': [eResize, 10, 5],
};

const cursor = (option: CursorOption) => {
  const cursor = cursors[option];
  return css`
    cursor:
      url('${cursor[0]}') ${cursor[1]} ${cursor[2]},
      auto;
  `;
};

export default cursor;
