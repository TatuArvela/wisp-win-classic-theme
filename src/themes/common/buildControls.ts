import {
  CheckboxProps,
  ComboBoxButtonProps,
  ComboBoxOptionsProps,
  ControlWrapperProps,
  DividerProps,
  LabelProps,
  ListBoxOptionsProps,
} from '@tatuarvela/wisp';
import { css } from 'styled-components';

import check from './check.png';
import down from './down.png';
import { ThemeBuilderConfig, ThemeVariables } from './types';
import {
  generateAccentuatedStyles,
  generateElevatedStyles,
  generateGroovedStyles,
  generateIndentedStyles,
  generateRecessedStyles,
  generateSharedButtonStyles,
} from './utils';

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
  ${generateIndentedStyles(themeVariables)}

  outline: none;
  width: 100%;
  flex-grow: 1;
  font-size: 12px;
`;

const buildButton = (themeVariables: ThemeVariables) => css`
  ${generateSharedButtonStyles(themeVariables)}

  border-radius: 0;
  font-size: 11px;
  padding: 2px;
  user-select: none;
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
      top: 1px;
      left: 1px;
    }
  `;

  return css<CheckboxProps>`
    ${generateIndentedStyles(themeVariables)}
    box-sizing: border-box;
    height: 11px;
    width: 11px;
    position: relative;

    ${(props) => props.checked && checkedStyle}
  `;
};

const buildComboBoxControl = (themeVariables: ThemeVariables) => css`
  ${generateIndentedStyles(themeVariables)}
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
  ${generateElevatedStyles(themeVariables)}

  width: 16px;
  position: relative;
  box-sizing: border-box;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-right: 1px;

  &:active {
    ${generateIndentedStyles(themeVariables)}
  }

  &:before {
    content: '';
    background-image: url('${down}');
    width: 7px;
    height: 4px;
    position: absolute;
    top: 5px;
    left: 3px;
  }
`;

const buildComboBoxOptions = () => css<ComboBoxOptionsProps>`
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: ${(props) => `${props.open ? 'block' : 'none'}`};
  left: ${(props) => `${props.left - 1}`}px;
  margin: 0;
  padding: 0;
  position: fixed;
  top: ${(props) => `${props.top + 1}`}px;
  width: ${(props) => `${props.width + 16}`}px;
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
    width: 0;
    margin: 0 4px;
  `;

  const horizontalStyle = css`
    height: 0;
    width: 100%;
    margin: 4px 0;
  `;

  return css<DividerProps>`
    ${generateRecessedStyles(themeVariables)}
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

const buildLabel = () => css<LabelProps>`
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 12px;
  font-family: sans-serif;
  margin: 0;
`;

const buildListBoxButton = (themeVariables: ThemeVariables) => css<{
  disabled?: boolean;
}>`
  ${generateIndentedStyles(themeVariables)}

  border-radius: 0;
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
  Label: buildLabel(),
  ListBoxButton: buildListBoxButton(themeVariables),
  ListBoxOptions: buildListBoxOptions(),
  ListBoxOption: buildListBoxOption(themeVariables),
  MenuBar: buildMenuBar(themeVariables),
});

export default buildControls;
