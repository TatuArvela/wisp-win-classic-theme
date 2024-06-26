import {
  TimeInputButtonProps,
  TimeInputFieldProps,
  TimeInputValueProps,
} from '@tatuarvela/wisp';
import { css } from 'styled-components';

import generateBorders from '../generateBorders';
import tinyDown from '../icons/tiny-down.png';
import tinyUp from '../icons/tiny-up.png';
import { ThemeBuilderConfig, ThemeVariables } from '../types';
import { fontFamily, generateIndentedStyles } from '../utils';

const TimeInputControl = css`
  display: flex;
  height: 20px;
  gap: 2px;
  width: 100%;
`;

const buildTimeInputField = (
  themeVariables: ThemeVariables
) => css<TimeInputFieldProps>`
  ${generateIndentedStyles(themeVariables)}
  background: ${themeVariables.shade1};
  border: none;
  display: flex;
  width: 100%;
  padding: 2px;
`;

const buildTimeInputValue = (
  themeVariables: ThemeVariables
) => css<TimeInputValueProps>`
  border: none;
  color: ${(props) =>
    props.disabled ? themeVariables.textDisabled : themeVariables.text};
  font-size: 12px;
  font-family: ${fontFamily};
  outline: none;
  width: 14px;

  &::selection {
    color: white;
    background: ${(props) =>
      props.disabled
        ? themeVariables.windowPassiveBackground
        : themeVariables.active};
  }
`;

const TimeInputSeparator = css`
  width: 4px;
  position: relative;
  display: flex;
  align-items: center;
  &:before {
    content: ':';
    position: absolute;
  }
`;

const buildTimeInputButtons = (themeVariables: ThemeVariables) => css`
  display: flex;
  flex-direction: column;
  left: -1px;
  top: 0;
  position: relative;
`;

const generateButtonStyles = (themeVariables: ThemeVariables) => {
  const activeStyles = css`
    box-shadow: ${generateBorders(
        1,
        themeVariables.shade5,
        themeVariables.shade1
      )},
      ${generateBorders(2, themeVariables.shade4, themeVariables.shade2)};

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
        themeVariables.shade2,
        themeVariables.shade5
      )},
      ${generateBorders(2, themeVariables.shade1, themeVariables.shade4)};

    ${(props) =>
      (props as unknown as { active?: boolean })?.active && activeStyles};
    &:active {
      ${activeStyles}
    }
  `;
};

const buildTimeInputIncreaseButton = (
  themeVariables: ThemeVariables
) => css<TimeInputButtonProps>`
  ${generateButtonStyles(themeVariables)}
  background: ${themeVariables.shade3};
  border: none;
  padding: 2px;
  box-sizing: border-box;
  height: 9px;
  position: relative;
  width: 16px;

  &:before {
    background-image: url('${tinyUp}');
    content: '';
    display: block;
    height: 3px;
    image-rendering: pixelated;
    left: 4px;
    position: relative;
    top: 0px;
    width: 3px;
  }
`;

const buildTimeInputDecreaseButton = (
  themeVariables: ThemeVariables
) => css<TimeInputButtonProps>`
  ${generateButtonStyles(themeVariables)}
  background: ${themeVariables.shade3};
  border: none;
  padding: 2px;
  box-sizing: border-box;
  height: 9px;
  position: relative;
  width: 16px;

  &:before {
    background-image: url('${tinyDown}');
    content: '';
    display: block;
    height: 3px;
    image-rendering: pixelated;
    left: 4px;
    position: relative;
    top: -1px;
    width: 3px;
  }
`;

const buildTimeInput = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['controls'] => ({
  TimeInputControl: TimeInputControl,
  TimeInputField: buildTimeInputField(themeVariables),
  TimeInputValue: buildTimeInputValue(themeVariables),
  TimeInputSeparator: TimeInputSeparator,
  TimeInputButtons: buildTimeInputButtons(themeVariables),
  TimeInputIncreaseButton: buildTimeInputIncreaseButton(themeVariables),
  TimeInputDecreaseButton: buildTimeInputDecreaseButton(themeVariables),
});

export default buildTimeInput;
