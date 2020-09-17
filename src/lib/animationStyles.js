export const mplpAnimationStyle = (leftPaneHidden) => {
  return {
    to: {
      marginLeft: leftPaneHidden ? "-20vw" : "0vw",
      opacity: leftPaneHidden ? 0 : 1,
    },
  };
};
