import {
  CheckboxProps,
  ComboBoxButtonProps,
  ComboBoxOptionsProps,
  ControlWrapperProps,
  DividerProps,
  LabelProps,
  ListBoxOptionsProps,
  ProgressBarFillProps,
  StatusBarSectionProps,
  TextInputElementProps,
} from '@tatuarvela/wisp';
import { css } from 'styled-components';

import generateBorders from '../generateBorders';
import check from '../icons/check.png';
import down from '../icons/down.png';
import { ThemeBuilderConfig, ThemeVariables } from '../types';
import {
  generateButtonStyles,
  generateGroovedStyles,
  generateIndentedStyles,
  generateSmallButtonStyles,
} from '../utils';
import buildScrollbars from './buildScrollbars';
import buildTimeInput from './buildTimeInput';
import generateResizeHandle from './generateResizeHandle';

const buildAddressBar = () => css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: sans-serif;
  font-size: 12px;
  gap: 4px;
  padding: 2px;
`;

const buildAddressBarInput = (themeVariables: ThemeVariables) => css`
  border: none;
  ${generateIndentedStyles(themeVariables)}

  outline: none;
  width: 100%;
  flex-grow: 1;
  font-size: 12px;
`;

const buildButton = (themeVariables: ThemeVariables) => css`
  ${generateButtonStyles(themeVariables)}

  border-radius: 0;
  font-size: 11px;
  padding: 4px 10px 4px 10px;
  user-select: none;

  &:active {
    padding: 5px 9px 3px 11px;
  }
`;

const buildCheckboxWrapper = () => {
  const inlineStyle = css`
    align-items: center;
  `;

  return css`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    padding: 2px;

    ${(props: ControlWrapperProps) => props.inlineLabel && inlineStyle}
  `;
};

const buildCheckbox = (themeVariables: ThemeVariables) => {
  const checkedStyle = css`
    &:before {
      content: '';
      background-image: url('${check}');
      width: 7px;
      height: 7px;
      position: absolute;
      top: 3px;
      left: 3px;
    }
  `;

  return css<CheckboxProps>`
    ${generateIndentedStyles(themeVariables)}
    background: ${themeVariables.shade1};
    box-sizing: border-box;
    height: 13px;
    width: 13px;
    position: relative;

    ${(props) => props.checked && checkedStyle}
  `;
};

const buildComboBoxControl = (themeVariables: ThemeVariables) => css`
  ${generateIndentedStyles(themeVariables)}
  padding: 2px;
  display: flex;
`;

const buildComboBoxInput = () => css`
  outline: none;
  font-size: 12px;
  border: none;
  flex-grow: 1;
`;

const buildComboBoxButton = (
  themeVariables: ThemeVariables
) => css<ComboBoxButtonProps>`
  ${generateSmallButtonStyles(themeVariables)}

  width: 16px;
  position: relative;
  box-sizing: border-box;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: 1px;

  &:before {
    content: '';
    background-image: url('${down}');
    width: 8px;
    height: 8px;
    position: absolute;
    top: 3px;
    left: 3px;
  }

  &:active {
    &:before {
      top: 4px;
      left: 4px;
    }
  }
`;

const buildComboBoxOptions = () => css<ComboBoxOptionsProps>`
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: ${(props) => `${props.open ? 'block' : 'none'}`};
  left: ${(props) => `${props.left}`}px;
  margin: 0;
  padding: 0;
  position: fixed;
  top: ${(props) => `${props.top + 1}`}px;
  width: ${(props) => `${props.width + 14}`}px;
  z-index: 100;
`;

const buildComboBoxOption = (themeVariables: ThemeVariables) => css`
  list-style: none;
  font-family: sans-serif;
  font-size: 12px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: ${themeVariables.active};
    color: white;
  }
`;

const buildDivider = (themeVariables: ThemeVariables) => {
  const verticalStyle = css`
    height: 100%;
    width: 2px;
    margin: 0 4px;
  `;

  const horizontalStyle = css`
    height: 2px;
    width: 100%;
    margin: 4px 0;
  `;

  return css<DividerProps>`
    box-shadow: ${generateBorders(
      1,
      themeVariables.shade4,
      themeVariables.shade1
    )};
    ${({ vertical }) => (vertical ? verticalStyle : horizontalStyle)}
  `;
};

const buildFieldset = (themeVariables: ThemeVariables) => css`
  ${generateGroovedStyles(themeVariables)}
  font-family: sans-serif;
`;

const buildFieldsetLegend = (themeVariables: ThemeVariables) => css`
  background: ${themeVariables.shade3};
  font-size: 12px;
`;

const buildLabel = (themeVariables: ThemeVariables) => css<LabelProps>`
  color: ${(props) =>
    props.disabled ? themeVariables.textDisabled : themeVariables.text};
  font-size: 12px;
  font-family: sans-serif;
  margin: 0;
`;

const buildListBoxButton = (themeVariables: ThemeVariables) => css<{
  disabled?: boolean;
}>`
  ${generateIndentedStyles(themeVariables)}
  background: ${themeVariables.shade1};
  border: none;
  box-sizing: border-box;
  display: flex;
  height: 24px;
  padding: 3px;
  font-size: 12px;
  position: relative;
  width: 100%;
`;

const buildListBoxOptions = () => css<ListBoxOptionsProps>`
  ${buildComboBoxOptions()}
`;

const buildListBoxOption = (themeVariables: ThemeVariables) =>
  buildComboBoxOption(themeVariables);

const buildMenuBar = (themeVariables: ThemeVariables) => css`
  ${generateGroovedStyles(themeVariables)}

  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  font-family: sans-serif;
  flex-shrink: 0;
  padding: 0;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`;

const buildProgressBar = (themeVariables: ThemeVariables) => css`
  ${generateBorders(1, themeVariables.shade1, themeVariables.shade4)}
  box-sizing: border-box;
  font-size: 12px;
  height: 24px;
  max-height: 100%;
  outline: none;
  overflow: hidden;
`;

const buildProgressBarFill = (themeVariables: ThemeVariables) => {
  const indeterminateStyle = css`
    animation-duration: 1.5s;
    animation-name: indeterminate-progress-bar-fill-animation;
    animation-iteration-count: infinite;
    animation-timing-function: steps(30, end);

    @keyframes indeterminate-progress-bar-fill-animation {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(200%);
      }
    }
  `;

  const makeGradient = (color: string) => css`
    background-image: repeating-linear-gradient(
      to right,
      ${color},
      ${color} 10%,
      ${themeVariables.shade3} 10%,
      ${themeVariables.shade3} calc(10% + 2px)
    );
  `;

  return css<ProgressBarFillProps>`
    height: 100%;
    margin: 1px;
    width: ${(props) =>
      props.isIndeterminate ? (props.disabled ? '0%' : '50%') : undefined};
    ${(props) =>
      makeGradient(
        props.disabled ? themeVariables.shade5 : themeVariables.active
      )}

    ${(props) =>
      !props.disabled && props.isIndeterminate && indeterminateStyle});
  `;
};

const buildStatusBar = (themeVariables: ThemeVariables) => css`
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  margin-top: auto;
  font-size: 14px;
  flex-shrink: 0;
  gap: 2px;
  height: 18px;
  padding: 2px 0 0;
  width: 100%;
  position: relative;
`;

const buildResizeHandle = (themeVariables: ThemeVariables) => css`
  bottom: -4px;
  cursor: se-resize;
  height: 18px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: -4px;
  width: 18px;
  overflow: clip;
  ${generateResizeHandle(themeVariables)}
`;

const buildStatusBarSection = (
  themeVariables: ThemeVariables
) => css<StatusBarSectionProps>`
  border: none;
  box-shadow: ${generateBorders(
    1,
    themeVariables.shade4,
    themeVariables.shade1
  )};
  display: flex;
  align-items: center;
  flex-grow: ${({ width }) => (width !== undefined ? 'unset' : 1)};
  font-family: sans-serif;
  font-size: 12px;
  padding: 2px 4px;
`;

const buildTextInputElement = (
  themeVariables: ThemeVariables
) => css<TextInputElementProps>`
  ${generateIndentedStyles(themeVariables)}
  border: none;
  box-sizing: border-box;
  color: ${(props) =>
    props.disabled ? themeVariables.textDisabled : themeVariables.text};
  font-size: 12px;
  height: 24px;
  outline: none;
  padding: 4px 4px;
  width: 100%;
`;

const buildTextareaElement = (
  themeVariables: ThemeVariables
) => css<TextInputElementProps>`
  ${generateIndentedStyles(themeVariables)}
  border: none;
  box-sizing: border-box;
  color: ${(props) =>
    props.disabled ? themeVariables.textDisabled : themeVariables.text};
  font-size: 12px;
  height: 24px;
  outline: none;
  padding: 4px 4px;
  width: 100%;
  resize: none;
`;

const buildControls = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['controls'] => ({
  AddressBar: buildAddressBar(),
  AddressBarInput: buildAddressBarInput(themeVariables),
  Button: buildButton(themeVariables),
  CheckboxWrapper: buildCheckboxWrapper(),
  Checkbox: buildCheckbox(themeVariables),
  ComboBoxControl: buildComboBoxControl(themeVariables),
  ComboBoxInput: buildComboBoxInput(),
  ComboBoxButton: buildComboBoxButton(themeVariables),
  ComboBoxOptions: buildComboBoxOptions(),
  ComboBoxOption: buildComboBoxOption(themeVariables),
  Divider: buildDivider(themeVariables),
  Fieldset: buildFieldset(themeVariables),
  FieldsetLegend: buildFieldsetLegend(themeVariables),
  Label: buildLabel(themeVariables),
  ListBoxButton: buildListBoxButton(themeVariables),
  ListBoxOptions: buildListBoxOptions(),
  ListBoxOption: buildListBoxOption(themeVariables),
  MenuBar: buildMenuBar(themeVariables),
  ProgressBar: buildProgressBar(themeVariables),
  ProgressBarFill: buildProgressBarFill(themeVariables),
  ...buildScrollbars(themeVariables),
  StatusBar: buildStatusBar(themeVariables),
  ResizeHandle: buildResizeHandle(themeVariables),
  StatusBarSection: buildStatusBarSection(themeVariables),
  TextInputElement: buildTextInputElement(themeVariables),
  TextareaElement: buildTextareaElement(themeVariables),
  ...buildTimeInput(themeVariables),
});

export default buildControls;
