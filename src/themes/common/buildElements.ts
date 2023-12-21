import { TaskbarButtonProps } from '@tatuarvela/wisp';
import { css } from 'styled-components';

import { ThemeBuilderConfig, ThemeVariables } from './types';
import { fontFamily, generateSharedButtonStyles } from './utils';

const buildTaskbar = (themeVariables: ThemeVariables) => css`
  background: ${themeVariables.shade2};
  border-top: 1px solid ${themeVariables.shade2};
  bottom: 0;
  box-shadow: inset 0 1px 0 0 ${themeVariables.shade1};
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  height: 28px;
  left: 0;
  overflow-x: visible;
  padding: 2px;
  position: absolute;
  text-align: left;
  white-space: nowrap;
  width: 100%;
`;

const buildTaskbarButton = (themeVariables: ThemeVariables) => {
  const activeStyle = css`
    color: ${themeVariables.shade5};
    font-weight: bold;
  `;
  return css<TaskbarButtonProps>`
    ${generateSharedButtonStyles(themeVariables)}

    border-radius: 0;
    color: ${themeVariables.shade5};
    display: inline-flex;
    font-family: ${fontFamily};
    margin-top: 1px;
    height: 22px;
    margin-left: 2px;
    outline: none;
    text-align: left;
    user-select: none;
    width: 160px;

    ${(props) => props.active && activeStyle};
    &:active {
      ${activeStyle}
    }
  `;
};

const buildDesktop = (themeVariables: ThemeVariables) => css`
  background: ${themeVariables.background};
  background-size: 100% 100%;
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  object-fit: cover;
`;

const buildVersionInfo = () => css`
  bottom: 30px;
  color: white;
  font-family: ${fontFamily};
  font-size: 14px;
  margin: 4px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  user-select: none;
`;

const buildElements = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['elements'] => ({
  Desktop: buildDesktop(themeVariables),
  Taskbar: buildTaskbar(themeVariables),
  TaskbarButton: buildTaskbarButton(themeVariables),
  VersionInfo: buildVersionInfo(),
});

export default buildElements;
