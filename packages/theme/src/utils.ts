/**
 * Converts a pixel value to rem units
 * @param px - The pixel value to convert
 * @param base - The base font size (default: 16)
 * @returns The rem value as a string
 */
export const pxToRem = (px: number, base: number = 16) => `${px / base}rem`;