import { TaskbarButtonProps } from '@tatuarvela/wisp';
import { css } from 'styled-components';

import generateBorders from '../generateBorders';
import generateDitheredBackground from '../generateDitheredBackground';
import { ThemeBuilderConfig, ThemeVariables } from '../types';
import { fontFamily, generateButtonStyles } from '../utils';

const buildTaskbar = (themeVariables: ThemeVariables) => css`
  background: ${themeVariables.shade3};
  border-top: 1px solid ${themeVariables.shade3};
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

const generateTaskbarButtonStyles = (themeVariables: ThemeVariables) => {
  const activeStyles = css`
    ${generateDitheredBackground(themeVariables.shade3, themeVariables.shade1)};
    box-shadow: ${generateBorders(
        1,
        themeVariables.shade5,
        themeVariables.shade1
      )},
      ${generateBorders(2, themeVariables.shade4, 'transparent')};

    > * {
      display: inline-block;
      position: relative;
      left: 1px;
      top: 1px;
    }
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
    &:active {
      ${activeStyles}
    }
  `;
};

const buildTaskbarButton = (themeVariables: ThemeVariables) => {
  const activeStyle = css`
    color: ${themeVariables.shade5};
    font-weight: bold;
  `;
  return css<TaskbarButtonProps>`
    ${generateTaskbarButtonStyles(themeVariables)}

    border-radius: 0;
    color: ${themeVariables.shade5};
    display: inline-flex;
    font-family: ${fontFamily};
    font-size: 12px;
    height: 22px;
    line-height: 18px;
    margin-left: 2px;
    margin-top: 1px;
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

const buildTaskbarButtonIcon = () => css`
  display: block;
  height: 16px;
  width: 16px;
  margin-right: 4px;
  position: relative;
  top: 1px;
`;

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
  TaskbarButtonIcon: buildTaskbarButtonIcon(),
  VersionInfo: buildVersionInfo(),
});

export default buildElements;
