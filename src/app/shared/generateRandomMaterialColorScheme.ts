import { MATERIAL_COLOURS } from './materialColourSchemes';

export interface MaterialColorScheme {
  backgroundColor: string;
  color: string;
}
export function getRandomMaterialColorScheme(): MaterialColorScheme {
  const materialColors = MATERIAL_COLOURS;

  const colorKeys = Object.keys(materialColors) as Array<
    keyof typeof materialColors
  >;

  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];

  const randomColorPalette = materialColors[randomColorKey];

  const randomBackgroundColor =
    randomColorPalette[Math.floor(Math.random() * randomColorPalette.length)];

  // Determine the appropriate text color based on the background color brightness
  const colorIsDark = isColorDark(randomBackgroundColor);
  const textColor = colorIsDark ? '#FFFFFF' : '#000000';

  return {
    backgroundColor: randomBackgroundColor,
    color: textColor,
  };
}

// Helper function to determine if a color is dark
function isColorDark(hexColor: string): boolean {
  // Convert hex to RGB
  const rgb = parseInt(hexColor.slice(1), 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;

  // Calculate luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // If luminance is less than 128, the color is dark
  return luminance < 128;
}
