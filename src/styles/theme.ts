import theme from 'styled-theming';

const bgOpacity = 1;
const textOpacity = 1;

const backgroundColor = theme('mode', {
  light: `rgba(21,21,21, ${bgOpacity})`,
  dark: `rgba(21,21,21, ${bgOpacity})`,
});

const textColorPrimary = theme('mode', {
  light: '#fff',
  dark: '#fff',
});

const textColorSecundary = theme('mode', {
  light: `rgba(148,148,149, ${textOpacity})`,
  dark: `rgba(148,148,149, ${textOpacity})`,
});

const buttonBackgroundColor = theme('mode', {
  light: `rgba(32,32,34, ${bgOpacity})`,
  dark: `rgba(32,32,34, ${bgOpacity})`,
});

const buttonTextColor = theme('mode', {
  light: '#fff',
  dark: '#fff',
});

export default {
  backgroundColor,
  textColorPrimary,
  textColorSecundary,
  buttonBackgroundColor,
  buttonTextColor,
  fontSize: {
    large: '4.8rem',
    medium: '2.4rem',
    small: '1.4rem',
    xsmall: '1.0rem',
  },
} as const;
