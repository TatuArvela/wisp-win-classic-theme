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

/*
  Levels of depth:
    Elevated - For prominently raised elements such as buttons.
    Accentuated - For subtly raised elements such as menu groups.
    Grooved - For elements like fieldsets and dividers, giving an etched or channeled appearance at the same depth.
    Recessed - For subtly lowered elements such as trays and status bars.
    Indented - For prominently lowered elements such as in-pressed buttons and input fields.
*/

export const generateElevatedStyles = (themeVariables: ThemeVariables) => css`
  background: ${themeVariables.shade2};
  border-bottom: 1px solid ${themeVariables.shade5};
  border-left: 1px solid ${themeVariables.shade3};
  border-right: 1px solid ${themeVariables.shade5};
  border-top: 1px solid ${themeVariables.shade3};
  ${generateAccentuatedStyles(themeVariables)};
`;

export const generateAccentuatedStyles = (
  themeVariables: ThemeVariables
) => css`
  box-shadow:
    0.5px 0.5px 0 0.5px ${themeVariables.shade4},
    0 0 0 1px ${themeVariables.shade1};
`;

export const generateGroovedStyles = (themeVariables: ThemeVariables) => css`
  border: 1px solid ${themeVariables.shade4};
  box-shadow:
    inset 1px 1px 0 0 ${themeVariables.shade1},
    0 1px 0 0 ${themeVariables.shade1},
    1px 0 0 0 ${themeVariables.shade1},
    1px 1px 0 0 ${themeVariables.shade1};
`;

export const generateRecessedStyles = (themeVariables: ThemeVariables) => css`
  box-shadow:
    0.5px 0.5px 0 0.5px ${themeVariables.shade1},
    0 0 0 1px ${themeVariables.shade4};
`;

export const generateIndentedStyles = (themeVariables: ThemeVariables) => css`
  border-bottom: 1px solid ${themeVariables.shade3};
  border-left: 1px solid ${themeVariables.shade5};
  border-right: 1px solid ${themeVariables.shade3};
  border-top: 1px solid ${themeVariables.shade5};
  ${generateRecessedStyles(themeVariables)}
`;

export const generateSharedButtonStyles = (themeVariables: ThemeVariables) => {
  const activeStyles = css`
    background: ${themeVariables.shade1};
    ${generateIndentedStyles(themeVariables)}
  `;

  return css`
    ${generateElevatedStyles(themeVariables)}
    ${(props) =>
      (props as unknown as { active?: boolean })?.active && activeStyles};
    &:active {
      ${activeStyles}
    }
  `;
};
