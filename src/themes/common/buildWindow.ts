import { css } from 'styled-components';

import { ThemeBuilderConfig, ThemeVariables } from './types';
import {
  fontFamily,
  generateBoxShadows,
  generateSharedButtonStyles,
} from './utils';

// TODO: Export from Wisp
interface ViewportWindowMargins {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

// TODO: Export from Wisp
interface WindowElementProps {
  height: number;
  width: number;
  positionX: number;
  positionY: number;
  isMinimized: boolean;
  isMaximized: boolean;
  orderNumber: number;
  viewportWindowMargins: ViewportWindowMargins;
}

const buildWindowContent = () => css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: ${fontFamily};
  font-size: 14px;
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 4px;
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
  padding: 2px;
  position: absolute;

  &:before {
    background: ${themeVariables.shade3};
    bottom: 2px;
    box-shadow: ${generateBoxShadows(
        1,
        themeVariables.shade1,
        themeVariables.shade3
      )},
      ${generateBoxShadows(2, themeVariables.shade3, themeVariables.shade5)};
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 2px;
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
  flex-shrink: 0;
  display: flex;
  font-family: ${fontFamily};
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  height: 18px;
  padding: 0 4px; // TODO: Icons
  user-select: none;
  width: 100%;
`;

const sharedWindowButtonStyle = (themeVariables: ThemeVariables) => css`
  ${generateSharedButtonStyles(themeVariables)}

  border-radius: 0;
  color: ${themeVariables.shade5};
  box-sizing: border-box;
  height: 14px;
  margin: 4px 1px;
  padding: 0;
  position: relative;
  width: 16px;
`;

const buildMinimizeButton = (themeVariables: ThemeVariables) => css`
  ${sharedWindowButtonStyle(themeVariables)};

  &:before {
    border-bottom: 2px solid ${themeVariables.text};
    content: '';
    height: 9px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 8px;
  }
`;

const buildMaximizeButton = (themeVariables: ThemeVariables) => css`
  ${sharedWindowButtonStyle(themeVariables)};

  &:before {
    border: 1px solid ${themeVariables.text};
    border-top: 2px solid ${themeVariables.text};
    content: '';
    height: 7px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 1px;
    width: 8px;
  }
`;

const buildUnmaximizeButton = (themeVariables: ThemeVariables) => css`
  ${sharedWindowButtonStyle(themeVariables)};

  &:before {
    border: 1px solid ${themeVariables.text};
    border-top: 2px solid ${themeVariables.text};
    content: '';
    height: 4px;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 1px;
    width: 5px;
  }

  &:after {
    border: 1px solid ${themeVariables.text};
    border-top: 2px solid ${themeVariables.text};
    bottom: 2px;
    background: ${themeVariables.shade2};
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    height: 4px;
    top: 4px;
    width: 5px;
  }
`;

const buildCloseButton = (themeVariables: ThemeVariables) => css`
  ${sharedWindowButtonStyle(themeVariables)};

  margin: 4px 4px;

  &:before {
    border-bottom: 2px solid ${themeVariables.text};
    content: '';
    left: 1px;
    pointer-events: none;
    position: absolute;
    top: 5px;
    transform: rotate(45deg);
    width: 12px;
  }

  &:after {
    border-bottom: 2px solid ${themeVariables.text};
    content: '';
    left: 1px;
    pointer-events: none;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 12px;
  }
`;

const buildWindow = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['window'] => ({
  WindowElement: buildWindowElement(themeVariables),
  WindowContent: buildWindowContent(),
  TitleBar: buildTitleBar(themeVariables),
  MinimizeButton: buildMinimizeButton(themeVariables),
  MaximizeButton: buildMaximizeButton(themeVariables),
  UnmaximizeButton: buildUnmaximizeButton(themeVariables),
  CloseButton: buildCloseButton(themeVariables),
});

export default buildWindow;
