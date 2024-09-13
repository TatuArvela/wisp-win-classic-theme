import {
  AddressBarElementProps,
  AddressBarInputContainerProps,
  AddressBarInputProps,
  CheckboxProps,
  ComboBoxButtonProps,
  ComboBoxOptionsProps,
  ControlWrapperProps,
  DividerProps,
  LabelProps,
  ListBoxOptionsProps,
  MenuBarThrobberIconElementProps,
  MenuBarThrobberProps,
  ProgressBarElementProps,
  ProgressBarFillProps,
  StatusBarSectionElementProps,
  TextareaElementProps,
  TextInputElementProps,
  ToolbarButtonElementProps,
} from '@tatuarvela/wisp';
import { css } from 'styled-components';

import cursor from '../cursors/cursor';
import generateBorders from '../generateBorders';
import check from '../graphics/check.png';
import down from '../graphics/down.png';
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

const buildAddressBarElement = () => css<AddressBarElementProps>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  font-family: sans-serif;
  font-size: 12px;
`;

const buildAddressBarLabel = () => css`
  padding: 1px 4px 0 4px;
`;

const buildAddressBarInputContainer = (
  themeVariables: ThemeVariables
) => css<AddressBarInputContainerProps>`
  ${generateIndentedStyles(themeVariables)}
  align-items: center;
  background: ${(props) =>
    props.disabled ? themeVariables.shade3 : themeVariables.shade1};
  border: none;
  display: flex;
  flex-grow: 1;
  width: 100%;
  padding: 2px;
`;

const buildAddressBarInput = (
  themeVariables: ThemeVariables
) => css<AddressBarInputProps>`
  ${cursor('text')};
  background: ${(props) =>
    props.disabled ? themeVariables.shade3 : themeVariables.shade1};
  border: none;
  font-size: 12px;
  height: 16px;
  outline: none;
  width: 100%;
`;

const AddressBarIcon = css<AddressBarInputProps>`
  height: 16px;
  margin: 0 4px;
  width: 16px;
  image-rendering: pixelated;
`;

const buildMessageBoxButtonElement = (themeVariables: ThemeVariables) => css`
  ${buildButtonElement(themeVariables)}

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 4px 32px 4px 32px;

  &:active {
    padding: 5px 31px 3px 33px;
  }
`;

const MessageBoxContent = css`
  display: flex;
  gap: 16px;
  padding: 12px 12px;
`;

const MessageBoxIconElement = css`
  height: 32px;
  width: 32px;
  image-rendering: pixelated;
`;

const MessageBoxText = css`
  display: inline-flex;
  flex-grow: 1;
  font-family: sans-serif;
  align-items: center;
`;

const buildButtonElement = (themeVariables: ThemeVariables) => css`
  ${cursor('default')};
  ${generateButtonStyles(themeVariables)}

  border-radius: 0;
  font-family: ${fontFamily};
  font-size: 11px;
  outline: none;
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

const buildCheckboxElement = (themeVariables: ThemeVariables) => {
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
  outline: none;
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

const buildFieldsetElement = (themeVariables: ThemeVariables) => css`
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

const buildMenuBarElement = (themeVariables: ThemeVariables) => css`
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

const buildMenuBarThrobberContainer = (
  themeVariables: ThemeVariables
) => css<MenuBarThrobberProps>`
  align-items: center;
  align-self: end;
  background-color: black;
  box-shadow:
    0 1px 0 ${themeVariables.shade4},
    -1px 0 0 ${themeVariables.shade1},
    -1px 1px 0 ${themeVariables.shade1},
    -2px 0 0 ${themeVariables.shade4};
  display: flex;
  height: calc(100% - 1px);
  image-rendering: pixelated;
  justify-content: center;
  margin-left: auto;
  width: 38px;
  position: relative;
`;

const buildMenuBarThrobberIconElement = () => {
  return css<MenuBarThrobberIconElementProps>`
    height: 22px;
    width: 22px;
  `;
};

const buildProgressBarElement = (themeVariables: ThemeVariables) => {
  const borderedStyle = css`
    box-shadow: ${generateBorders(
      1,
      themeVariables.shade4,
      themeVariables.shade1
    )};
    padding: 2px;
  `;

  return css<ProgressBarElementProps>`
    ${(props) => props.bordered && borderedStyle}

    --step-width: 8px;
    box-sizing: border-box;
    font-size: 12px;
    height: 16px;
    max-height: 100%;
    outline: none;
    overflow: hidden;
    width: 100%;
  `;
};

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
        ? makeBlockStyle(themeVariables.active)
        : makeStepsStyle(
            props.disabled ? themeVariables.shade5 : themeVariables.active
          )}
    image-rendering: pixelated;

    ${(props) =>
      !props.disabled && props.isIndeterminate && indeterminateStyle});
  `;
};

const buildStatusBarElement = () => css`
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

const buildStatusBarSectionElement = (
  themeVariables: ThemeVariables
) => css<StatusBarSectionElementProps>`
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
  padding: 2px;
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

const buildToolbarElement = (themeVariables: ThemeVariables) => css`
  ${generateGroovedStyles(themeVariables)}
  background: ${themeVariables.shade3};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -1px;
  padding: 1px 0 0 1px;
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

const buildToolbarButtonElement = (
  themeVariables: ThemeVariables
) => css<ToolbarButtonElementProps>`
  ${generateToolbarButtonStyles(themeVariables)}
  font-size: 12px;
  height: 100%;
  outline: none;
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
  margin-top: 4px;
  padding: 2px;
  font-family: sans-serif;
  flex-grow: 1;
  overflow: hidden;
`;

const buildControls = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['controls'] => ({
  AddressBarElement: buildAddressBarElement(),
  AddressBarIcon,
  AddressBarInput: buildAddressBarInput(themeVariables),
  AddressBarInputContainer: buildAddressBarInputContainer(themeVariables),
  AddressBarLabel: buildAddressBarLabel(),
  ButtonElement: buildButtonElement(themeVariables),
  CheckboxElement: buildCheckboxElement(themeVariables),
  CheckboxWrapper: buildCheckboxWrapper(),
  ComboBoxButton: buildComboBoxButton(themeVariables),
  ComboBoxControl: buildComboBoxControl(themeVariables),
  ComboBoxInput: buildComboBoxInput(themeVariables),
  ComboBoxOption: buildComboBoxOption(themeVariables),
  ComboBoxOptions: buildComboBoxOptions(),
  Divider: buildDivider(themeVariables),
  FieldsetElement: buildFieldsetElement(themeVariables),
  FieldsetLegend: buildFieldsetLegend(themeVariables),
  Label: buildLabel(themeVariables),
  ListBoxButton: buildListBoxButton(themeVariables),
  ListBoxControl: buildListBoxControl(themeVariables),
  ListBoxOption: buildListBoxOption(themeVariables),
  ListBoxOptions: buildListBoxOptions(),
  ListBoxValue: buildListBoxValue(themeVariables),
  MenuBarElement: buildMenuBarElement(themeVariables),
  MenuBarThrobberContainer: buildMenuBarThrobberContainer(themeVariables),
  MenuBarThrobberIconElement: buildMenuBarThrobberIconElement(),
  MessageBoxButtonElement: buildMessageBoxButtonElement(themeVariables),
  MessageBoxContent,
  MessageBoxIconElement,
  MessageBoxText,
  ProgressBarElement: buildProgressBarElement(themeVariables),
  ProgressBarFill: buildProgressBarFill(themeVariables),
  ...buildScrollbars(themeVariables),
  ResizeHandle: buildResizeHandle(themeVariables),
  StatusBarElement: buildStatusBarElement(),
  StatusBarSectionElement: buildStatusBarSectionElement(themeVariables),
  TextInputElement: buildTextInputElement(themeVariables),
  TextareaElement: buildTextareaElement(themeVariables),
  ...buildTimeInput(themeVariables),
  ToolbarButtonElement: buildToolbarButtonElement(themeVariables),
  ToolbarElement: buildToolbarElement(themeVariables),
  Well: buildWell(themeVariables),
  WindowContent: buildWindowContent(themeVariables),
});

export default buildControls;
