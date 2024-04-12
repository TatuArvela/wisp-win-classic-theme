import { Theme } from '@tatuarvela/wisp';

import vaporwin from './vaporwin';
import win2k from './win2k';
import win9x16Bit from './win9x-16-bit';
import win9x16Colors from './win9x-16-colors';
import win9x24Bit from './win9x-24-bit';
import win9x32Bit from './win9x-32-bit';
import win9x256Colors from './win9x-256-colors';

const allThemes = [
  win9x16Colors,
  win9x256Colors,
  win9x16Bit,
  win9x24Bit,
  win9x32Bit,
  win2k,
  vaporwin,
] as const;

type ThemeId = (typeof allThemes)[number]['id'];

const themes = Object.fromEntries(
  allThemes.map((theme) => [theme.id, theme])
) as Record<ThemeId, Theme>;

export default themes;
