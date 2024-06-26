import { ViewportWindowMargins, WindowElementProps } from '@tatuarvela/wisp';
import { css } from 'styled-components';

import cursor from '../cursors/cursor';
import generateBorders from '../generateBorders';
import generateColorFilter from '../generateColorFilter';
import close from '../icons/close.png';
import maximize from '../icons/maximize.png';
import minimize from '../icons/minimize.png';
import restore from '../icons/restore.png';
import { ThemeBuilderConfig, ThemeVariables } from '../types';
import { fontFamily } from '../utils';
import * as resizeBorder from './resizeBorder';

const buildWindowElementContent = () => css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: ${fontFamily};
  font-size: 12px;
  height: 100%;
  margin: 0;
  overflow: hidden;
  text-align: left;
  user-select: none;
  width: 100%;
`;

const getHeight = (viewportWindowMargins: ViewportWindowMargins) =>
  `calc(100% - ${viewportWindowMargins.top + viewportWindowMargins.bottom}px)`;

const getWidth = (viewportWindowMargins: ViewportWindowMargins) =>
  `calc(100% - ${viewportWindowMargins.left + viewportWindowMargins.right}px)`;

const maximizedStyles = css<WindowElementProps>`
  height: ${(props) => getHeight(props.viewportWindowMargins)} !important;
  left: ${(props) => props.viewportWindowMargins.left} !important;
  top: ${(props) => props.viewportWindowMargins.top} !important;
  width: ${(props) => getWidth(props.viewportWindowMargins)} !important;
  z-index: ${(props) => props.orderNumber} !important;
  border-radius: 0;
`;

const minimizedStyles = css`
  display: none;
`;

const buildWindowElement = (
  themeVariables: ThemeVariables
) => css<WindowElementProps>`
  background: transparent;
  box-sizing: border-box;
  color: ${themeVariables.text};
  display: flex;
  flex-direction: column;
  padding: 4px;
  position: absolute;
  ${cursor('default')};

  &:before {
    background: ${themeVariables.shade3};
    bottom: 0;
    box-shadow: ${generateBorders(
        1,
        themeVariables.shade2,
        themeVariables.shade5
      )},
      ${generateBorders(2, themeVariables.shade1, themeVariables.shade4)};
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  ${(props) => props.isMaximized && maximizedStyles}
  ${(props) => props.isMinimized && minimizedStyles}
`;

interface TitleBarProps {
  isActive: boolean;
}

const buildTitleBar = (themeVariables: ThemeVariables) => css<TitleBarProps>`
  background: ${(props) =>
    props.isActive
      ? themeVariables.windowActiveBackground
      : themeVariables.windowPassiveBackground};
  box-sizing: border-box;
  color: ${themeVariables.windowTitleText};
  display: flex;
  flex-shrink: 0;
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: bold;
  height: 18px;
  image-rendering: pixelated;
  line-height: 18px;
  margin-bottom: 1px;
  padding: 0 2px;
  user-select: none;
  width: 100%;
`;

const buildTitleBarTitle = () => css`
  position: relative;
`;

const buildTitleBarButtons = () => css`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 6px;
  top: 2px;
  margin: 0;
`;

const generateWindowButtonStyles = (themeVariables: ThemeVariables) => {
  const activeStyles = css`
    box-shadow: ${generateBorders(
        1,
        themeVariables.shade5,
        themeVariables.shade1
      )},
      ${generateBorders(2, themeVariables.shade4, 'transparent')};
  `;

  return css`
    background: ${themeVariables.shade3};
    border: none;

    box-shadow: ${generateBorders(
        1,
        themeVariables.shade1,
        themeVariables.shade5
      )},
      ${generateBorders(2, 'transparent', themeVariables.shade4)};

    ${(props) =>
      (props as unknown as { active?: boolean })?.active && activeStyles};
    &:not(:disabled):active {
      ${activeStyles}
    }
  `;
};

const buildWindowButton = (themeVariables: ThemeVariables) => css`
  ${cursor('default')};
  ${generateWindowButtonStyles(themeVariables)};

  border-radius: 0;
  color: ${themeVariables.shade5};
  box-sizing: border-box;
  height: 14px;
  margin: 4px 0;
  padding: 0;
  position: relative;
  width: 16px;

  &:before,
  &:after {
    content: '';
    height: 9px;
    image-rendering: pixelated;
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    width: 9px;
  }

  &:not(:disabled) {
    &:after {
      display: none;
    }
  }

  &:not(:disabled):active:before {
    left: 4px;
    top: 3px;
  }

  &:disabled {
    &:before {
      left: 4px;
      top: 3px;
      filter: invert(1);
    }
    &:after {
      display: block;
      content: '';
      ${generateColorFilter(themeVariables.shade4)};
    }
  }
`;

const buildMinimizeButton = () => css`
  &:before,
  &:after {
    background-image: url('${minimize}');
  }
`;

const buildMaximizeButton = () => css`
  &:before,
  &:after {
    background-image: url('${maximize}');
  }
`;

const buildUnmaximizeButton = () => css`
  &:before,
  &:after {
    background-image: url('${restore}');
  }
`;

const buildCloseButton = () => css`
  margin-left: 2px;

  &:before,
  &:after {
    background-image: url('${close}');
  }
`;

const buildWindow = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['window'] => ({
  TitleBarTitle: buildTitleBarTitle(),
  WindowElement: buildWindowElement(themeVariables),
  WindowElementContent: buildWindowElementContent(),
  TitleBar: buildTitleBar(themeVariables),
  TitleBarButtons: buildTitleBarButtons(),
  WindowButton: buildWindowButton(themeVariables),
  MinimizeButton: buildMinimizeButton(),
  MaximizeButton: buildMaximizeButton(),
  UnmaximizeButton: buildUnmaximizeButton(),
  CloseButton: buildCloseButton(),
  ...resizeBorder,
});

export default buildWindow;
