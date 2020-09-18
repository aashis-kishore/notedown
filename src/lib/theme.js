const COLORS = {
  PRIMARY: "#323232", // black
  SECONDARY: "#fff", // white
  TERTIARY: "#dd7777", // red
  QUATERNARY: "#77dd77", // green
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

const listCard = {
  primary: COLORS.PRIMARY,
  secondary: COLORS.SECONDARY,
  tertiary: COLORS.TERTIARY,
};

const listItemCard = {
  primary: COLORS.SECONDARY,
  secondary: COLORS.PRIMARY,
  tertiary: COLORS.TERTIARY,
};

const chartsCard = {
  primary: COLORS.TERTIARY,
  secondary: COLORS.SECONDARY,
  tertiary: COLORS.PRIMARY,
  quaternary: COLORS.QUATERNARY,
};

export const darkTheme = {
  primary: COLORS.PRIMARY,
  secondary: COLORS.SECONDARY,
  tertiary: COLORS.TERTIARY,
  quaternary: COLORS.QUATERNARY,
  commonButton: commonButton,
  toggleButton: {
    primary: toggleButton.primary,
    secondary: COLORS.SECONDARY,
  },
  card: card,
  listCard: listCard,
  listItemCard: listItemCard,
  chartsCard: chartsCard,
};

export const lightTheme = {
  primary: darkTheme.secondary,
  secondary: darkTheme.primary,
  tertiary: darkTheme.tertiary,
  quaternary: darkTheme.quaternary,
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
  listCard: {
    primary: darkTheme.listCard.secondary,
    secondary: darkTheme.listCard.primary,
    tertiary: darkTheme.listCard.tertiary,
  },
  listItemCard: {
    primary: darkTheme.listItemCard.secondary,
    secondary: darkTheme.listItemCard.primary,
    tertiary: darkTheme.listItemCard.tertiary,
  },
  chartsCard: {
    primary: darkTheme.chartsCard.primary,
    secondary: darkTheme.chartsCard.tertiary,
    tertiary: darkTheme.chartsCard.secondary,
    quaternary: darkTheme.chartsCard.quaternary,
  },
};
