import { ScrollableContentViewProps } from '@tatuarvela/wisp';
import { css } from 'styled-components';

import generateDitheredBackground from '../generateDitheredBackground';
import down from '../icons/down.png';
import left from '../icons/left.png';
import right from '../icons/right.png';
import up from '../icons/up.png';
import { ThemeBuilderConfig, ThemeVariables } from '../types';
import { generateSmallButtonStyles } from '../utils';

const SCROLLBAR_WIDTH = 16;

const buildScrollableContentView = (
  themeVariables: ThemeVariables
) => css<ScrollableContentViewProps>`
  box-sizing: border-box;
  background: ${themeVariables.shade1};
  height: calc(
    100% - ${({ horizontal }) => (horizontal ? SCROLLBAR_WIDTH : 0)}px
  );
  width: calc(100% - ${({ vertical }) => (vertical ? SCROLLBAR_WIDTH : 0)}px);
  overscroll-behavior: none;
  overflow-x: ${({ horizontal }) => (horizontal ? 'scroll' : 'clip')};
  overflow-y: ${({ vertical }) => (vertical ? 'scroll' : 'clip')};
  scrollbar-width: none;
`;

const buildScrollButton = (themeVariables: ThemeVariables, icon: string) => css`
  ${generateSmallButtonStyles(themeVariables)}
  height: ${SCROLLBAR_WIDTH}px;
  width: ${SCROLLBAR_WIDTH}px;
  flex-shrink: 0;
  position: relative;

  &:before {
    content: '';
    image-rendering: pixelated;
    background-image: url('${icon}');
    width: 8px;
    height: 8px;
    position: absolute;
    top: 4px;
    left: 4px;
  }

  &:active {
    &:before {
      top: 5px;
      left: 5px;
    }
  }
`;

const buildScrollbarVerticalTrack = (themeVariables: ThemeVariables) => css`
  height: calc(100%);
  position: relative;
  ${generateDitheredBackground(themeVariables.shade3, themeVariables.shade1)};
`;

const buildScrollbarVerticalThumb = (themeVariables: ThemeVariables) => css`
  ${generateSmallButtonStyles(themeVariables)}
  width: ${SCROLLBAR_WIDTH}px;
  height: var(--height);
  top: var(--top);
  position: absolute;
  box-sizing: border-box;
`;

const buildScrollbarHorizontalTrack = (themeVariables: ThemeVariables) => css`
  width: calc(100%);
  position: relative;
  ${generateDitheredBackground(themeVariables.shade3, themeVariables.shade1)};
`;

const buildScrollbarHorizontalThumb = (themeVariables: ThemeVariables) => css`
  ${generateSmallButtonStyles(themeVariables)}
  height: ${SCROLLBAR_WIDTH}px;
  width: var(--width);
  left: var(--left);
  position: absolute;
  box-sizing: border-box;
`;

const buildScrollbarVerticalWrapper = (themeVariables: ThemeVariables) => css`
  background: ${themeVariables.shade3};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: var(--height);
  position: absolute;
  right: 0;
  top: 0;
  width: ${SCROLLBAR_WIDTH}px;
`;

const buildScrollbarHorizontalWrapper = (themeVariables: ThemeVariables) => css`
  background: ${themeVariables.shade3};
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${SCROLLBAR_WIDTH}px;
  left: 0;
  position: absolute;
  width: var(--width);
`;

const buildScrollbars = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['controls'] => ({
  ScrollableContentView: buildScrollableContentView(themeVariables),
  ScrollbarVerticalWrapper: buildScrollbarVerticalWrapper(themeVariables),
  ScrollbarHorizontalWrapper: buildScrollbarHorizontalWrapper(themeVariables),
  ScrollUpButton: buildScrollButton(themeVariables, up),
  ScrollDownButton: buildScrollButton(themeVariables, down),
  ScrollRightButton: buildScrollButton(themeVariables, right),
  ScrollLeftButton: buildScrollButton(themeVariables, left),
  ScrollbarVerticalTrack: buildScrollbarVerticalTrack(themeVariables),
  ScrollbarVerticalThumb: buildScrollbarVerticalThumb(themeVariables),
  ScrollbarHorizontalTrack: buildScrollbarHorizontalTrack(themeVariables),
  ScrollbarHorizontalThumb: buildScrollbarHorizontalThumb(themeVariables),
});

export default buildScrollbars;
