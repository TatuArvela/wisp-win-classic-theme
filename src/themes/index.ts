import { Theme } from '@tatuarvela/wisp';

import vaporwin from './vaporwin';
import win2k from './win2k';
import win9x16bit from './win9x-16bit';
import win9x16clr from './win9x-16clr';
import win9x32bit from './win9x-32bit';
import win9x256clr from './win9x-256clr';

const allThemes = [
  vaporwin,
  win2k,
  win9x16bit,
  win9x16clr,
  win9x32bit,
  win9x256clr,
] as const;

type ThemeId = (typeof allThemes)[number]['id'];

const themes = Object.fromEntries(
  allThemes.map((theme) => [theme.id, theme])
) as Record<ThemeId, Theme>;

export default themes;
