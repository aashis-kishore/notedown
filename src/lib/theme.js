const COLORS = {
  PRIMARY: "#323232", // black
  SECONDARY: "#fff", // white
  TERTIARY: "#dd7777", // red
};

const commonButton = {
  primary: COLORS.PRIMARY,
  secondary: COLORS.TERTIARY,
};

const toggleButton = {
  primary: COLORS.TERTIARY,
};

const card = {
  primary: COLORS.PRIMARY,
  secondary: COLORS.SECONDARY,
  tertiary: COLORS.TERTIARY,
};

export const darkTheme = {
  primary: COLORS.PRIMARY,
  secondary: COLORS.SECONDARY,
  commonButton: commonButton,
  toggleButton: {
    primary: toggleButton.primary,
    secondary: COLORS.SECONDARY,
  },
  card: card,
};

export const lightTheme = {
  primary: darkTheme.secondary,
  secondary: darkTheme.primary,
  commonButton: {
    primary: commonButton.secondary,
    secondary: commonButton.primary,
  },
  toggleButton: {
    primary: toggleButton.primary,
    secondary: darkTheme.primary,
  },
  card: {
    primary: COLORS.SECONDARY,
    secondary: COLORS.PRIMARY,
    tertiary: COLORS.TERTIARY,
  },
};
