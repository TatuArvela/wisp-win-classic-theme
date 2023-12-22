import { css } from 'styled-components';

import { ThemeVariables } from './types';

export const fontFamily = "'Microsoft Sans Serif', sans-serif;";

export const generateBoxShadows = (
  thickness: number,
  topLeftColor: string,
  bottomRightColor: string
) => {
  const d = thickness;

  // Layers from bottom to top
  const values: [number, number, string][] = [
    [d, -d, topLeftColor],
    [-d, d, bottomRightColor],
    [-d, d - 1, topLeftColor],
    [d, -d + 1, bottomRightColor],
    [-d, -d, topLeftColor],
    [d, d, bottomRightColor],
  ];

  return values
    .reverse()
    .map(([x, y, color]) => `${x}px ${y}px 0 0 ${color}`)
    .join(',\n');
};

// used for buttons, windows
export const generateRaisedStyles = (themeVariables: ThemeVariables) => {
  return css`
    background: ${themeVariables.shade2};
    border-bottom: 1px solid ${themeVariables.shade5};
    border-left: 1px solid ${themeVariables.shade3};
    border-right: 1px solid ${themeVariables.shade5};
    border-top: 1px solid ${themeVariables.shade3};
    box-shadow:
      0.5px 0.5px 0 0.5px ${themeVariables.shade4},
      0 0 0 1px ${themeVariables.shade1};
  `;
};

// used for wells, disabled inputs
export const generateLoweredStyles = (themeVariables: ThemeVariables) => {};

// used for input fields, active buttons
export const generateActiveLoweredStyles = (themeVariables: ThemeVariables) => {
  return css`
    background: ${themeVariables.shade1};
    border-bottom: 1px solid ${themeVariables.shade3};
    border-left: 1px solid ${themeVariables.shade5};
    border-right: 1px solid ${themeVariables.shade3};
    border-top: 1px solid ${themeVariables.shade5};
    box-shadow:
      0.5px 0.5px 0 0.5px ${themeVariables.shade1},
      0 0 0 1px ${themeVariables.shade4};
  `;
};

export const generateSharedButtonStyles = (themeVariables: ThemeVariables) => {
  const activeStyles = generateActiveLoweredStyles(themeVariables);

  return css`
    ${generateRaisedStyles(themeVariables)}
    ${(props) =>
      (props as unknown as { active?: boolean })?.active && activeStyles};
    &:active {
      ${activeStyles}
    }
  `;
};
