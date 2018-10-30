/* @flow */

export type Theme = {
  breakpoints: Array<number>,
  space: Array<number>,
  defaultFontSize: number,
  fontSizes: Array<number>,
  colors: Object,
  fontFamilySerif: string,
  fontFamilySans: string,
  fontFamilyMonospace?: string,
}

const theme: Theme = {
  breakpoints: [],
  space: [0, 5, 10, 15, 25, 50],
  defaultFontSize: 16,
  fontSizes: [10, 12, 14, 16, 18, 24, 30, 48, 64],
  colors: {
    default: '#333',
    // Social Medaia Colors
    fb: '#3c5a98',
    twitter: '#41c6f2',
    pinterest: '#f51421',
    tumblr: '#32506a',
    instagram: '#486f96',
    google: '#32506a',
    youtube: '#cd201f',
  },
  fontFamilySerif: 'Crimson Text, serif',
  fontFamilySans: 'Helvetica, sans-serif',
}

export default theme
