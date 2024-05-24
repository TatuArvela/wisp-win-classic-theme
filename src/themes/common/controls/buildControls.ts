import {
  CheckboxProps,
  ComboBoxButtonProps,
  ComboBoxOptionsProps,
  ControlWrapperProps,
  DividerProps,
  LabelProps,
  ListBoxOptionsProps,
  MenuBarThrobberProps,
  ProgressBarFillProps,
  StatusBarSectionProps,
  TextareaElementProps,
  TextInputElementProps,
  ToolbarButtonProps,
  ToolbarProps,
} from '@tatuarvela/wisp';
import { css } from 'styled-components';

import cursor from '../cursors/cursor';
import generateBorders from '../generateBorders';
import check from '../icons/check.png';
import down from '../icons/down.png';
import throbberActive from '../icons/throbber-active.gif';
import throbberPassive from '../icons/throbber-passive.png';
import { ThemeBuilderConfig, ThemeVariables } from '../types';
import {
  fontFamily,
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
  ${cursor('text')};
  border: none;
  ${generateIndentedStyles(themeVariables)}

  outline: none;
  width: 100%;
  flex-grow: 1;
  font-size: 12px;
`;

const buildButton = (themeVariables: ThemeVariables) => css`
  ${cursor('default')};
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
      background-image: url('${check}');
      content: '';
      height: 7px;
      image-rendering: pixelated;
      left: 3px;
      position: absolute;
      top: 3px;
      width: 7px;
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
  height: 18px;
`;

const buildComboBoxInput = (themeVariables: ThemeVariables) => css`
  outline: none;
  font-size: 12px;
  border: none;
  flex-grow: 1;
  background: ${themeVariables.shade1};
  padding: 2px 4px;
`;

const buildComboBoxButton = (
  themeVariables: ThemeVariables
) => css<ComboBoxButtonProps>`
  ${cursor('default')};
  ${generateSmallButtonStyles(themeVariables)}

  width: 16px;
  position: relative;
  box-sizing: border-box;

  &:before {
    background-image: url('${down}');
    content: '';
    height: 8px;
    image-rendering: pixelated;
    left: 4px;
    position: absolute;
    top: 5px;
    width: 8px;
  }

  &:active {
    &:before {
      top: 6px;
      left: 5px;
    }
  }
`;

const buildComboBoxOptions = () => css<ComboBoxOptionsProps>`
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: ${(props) => `${props.open ? 'block' : 'none'}`};
  margin: 0;
  padding: 0;
  position: relative;
`;

const buildComboBoxOption = (themeVariables: ThemeVariables) => css`
  list-style: none;
  font-family: sans-serif;
  font-size: 12px;
  padding: 4px;
  ${cursor('pointer')};
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

const buildListBoxControl = (themeVariables: ThemeVariables) =>
  buildComboBoxControl(themeVariables);

const buildListBoxValue = (themeVariables: ThemeVariables) =>
  buildComboBoxInput(themeVariables);

const buildListBoxButton = (themeVariables: ThemeVariables) =>
  buildComboBoxButton(themeVariables);

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
  height: 25px;
  padding: 0;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  margin-bottom: -1px;
`;

const buildMenuBarThrobber = (
  themeVariables: ThemeVariables
) => css<MenuBarThrobberProps>`
  align-self: end;
  background-color: black;
  background-image: ${({ isAnimated }) =>
    isAnimated ? `url('${throbberActive}')` : `url('${throbberPassive}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 22px 22px;
  box-shadow:
    0 1px 0 ${themeVariables.shade4},
    -1px 0 0 ${themeVariables.shade1},
    -1px 1px 0 ${themeVariables.shade1},
    -2px 0 0 ${themeVariables.shade4};
  height: calc(100% - 1px);
  image-rendering: pixelated;
  margin-left: auto;
  width: 38px;
  position: relative;
`;

const buildProgressBar = (themeVariables: ThemeVariables) => css`
  --step-width: 8px;
  box-shadow: ${generateBorders(
    1,
    themeVariables.shade4,
    themeVariables.shade1
  )};
  padding: 2px;
  box-sizing: border-box;
  font-size: 12px;
  height: 16px;
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
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(200%);
      }
    }
  `;

  const makeBlockStyle = (color: string) => css`
    background-color: ${color};
  `;

  const makeStepsStyle = (color: string) => css`
    background-image: repeating-linear-gradient(
      to right,
      ${color} 0px,
      ${color} calc(var(--step-width) - 1px),
      transparent calc(var(--step-width) - 1px),
      transparent var(--step-width)
    );
  `;

  return css<ProgressBarFillProps>`
    height: 100%;
    width: ${(props) => (props.disabled ? '0%' : 'calc(var(--width))')};
    ${(props) =>
      props.variant === 'block'
        ? makeBlockStyle(themeVariables.shade5)
        : makeStepsStyle(
            props.disabled ? themeVariables.shade5 : themeVariables.active
          )}
    image-rendering: pixelated;

    ${(props) =>
      !props.disabled && props.isIndeterminate && indeterminateStyle});
  `;
};

const buildStatusBar = () => css`
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  margin-top: auto;
  font-size: 14px;
  flex-shrink: 0;
  gap: 2px;
  height: 22px;
  padding: 2px 0 0;
  width: 100%;
  position: relative;
`;

const buildResizeHandle = (themeVariables: ThemeVariables) => css`
  bottom: -4px;
  ${cursor('se-resize')}
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
  ${cursor('text')};
  ${generateIndentedStyles(themeVariables)}
  border: none;
  box-sizing: border-box;
  color: ${(props) =>
    props.disabled ? themeVariables.textDisabled : themeVariables.text};
  font-size: 12px;
  height: 20px;
  outline: none;
  padding: 4px 4px;
  width: 100%;

  &:disabled {
    background: ${themeVariables.shade3};
  }
`;

const buildTextareaElement = (
  themeVariables: ThemeVariables
) => css<TextareaElementProps>`
  ${cursor('text')};
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

const buildToolbar = (themeVariables: ThemeVariables) => css<ToolbarProps>`
  ${generateGroovedStyles(themeVariables)}
  background: ${themeVariables.shade3};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
  padding: 2px;
  text-align: left;
  width: 100%;
`;

const generateToolbarButtonStyles = (themeVariables: ThemeVariables) => {
  const activeStyles = css`
    box-shadow: ${generateBorders(
      1,
      themeVariables.shade4,
      themeVariables.shade1
    )};

    > * {
      display: block;
      position: relative;
      left: 1px;
      top: 1px;
    }
  `;

  const hoverStyles = css`
    box-shadow: ${generateBorders(
      1,
      themeVariables.shade1,
      themeVariables.shade4
    )};
  `;

  return css`
    ${cursor('default')};
    background: ${themeVariables.shade3};
    border: none;

    &:hover {
      ${hoverStyles}
    }

    ${(props) =>
      (props as unknown as { active?: boolean })?.active && activeStyles};
    &:active {
      ${activeStyles}
    }
  `;
};

const buildToolbarButton = (
  themeVariables: ThemeVariables
) => css<ToolbarButtonProps>`
  ${generateToolbarButtonStyles(themeVariables)}
  font-size: 12px;
  height: 100%;
  image-rendering: pixelated;
`;

const buildWell = (themeVariables: ThemeVariables) => css`
  ${generateIndentedStyles(themeVariables)}
  background: ${themeVariables.shade1};
  padding: 2px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-family: ${fontFamily};
`;

const buildWindowContent = (themeVariables: ThemeVariables) => css`
  ${generateIndentedStyles(themeVariables)};
  padding: 2px;
  font-family: sans-serif;
  flex-grow: 1;
  overflow: hidden;
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
  ComboBoxInput: buildComboBoxInput(themeVariables),
  ComboBoxButton: buildComboBoxButton(themeVariables),
  ComboBoxOptions: buildComboBoxOptions(),
  ComboBoxOption: buildComboBoxOption(themeVariables),
  Divider: buildDivider(themeVariables),
  Fieldset: buildFieldset(themeVariables),
  FieldsetLegend: buildFieldsetLegend(themeVariables),
  Label: buildLabel(themeVariables),
  ListBoxControl: buildListBoxControl(themeVariables),
  ListBoxValue: buildListBoxValue(themeVariables),
  ListBoxButton: buildListBoxButton(themeVariables),
  ListBoxOptions: buildListBoxOptions(),
  ListBoxOption: buildListBoxOption(themeVariables),
  MenuBar: buildMenuBar(themeVariables),
  MenuBarThrobber: buildMenuBarThrobber(themeVariables),
  ProgressBar: buildProgressBar(themeVariables),
  ProgressBarFill: buildProgressBarFill(themeVariables),
  ...buildScrollbars(themeVariables),
  StatusBar: buildStatusBar(),
  ResizeHandle: buildResizeHandle(themeVariables),
  StatusBarSection: buildStatusBarSection(themeVariables),
  TextInputElement: buildTextInputElement(themeVariables),
  TextareaElement: buildTextareaElement(themeVariables),
  ...buildTimeInput(themeVariables),
  Toolbar: buildToolbar(themeVariables),
  ToolbarButton: buildToolbarButton(themeVariables),
  Well: buildWell(themeVariables),
  WindowContent: buildWindowContent(themeVariables),
});

export default buildControls;
