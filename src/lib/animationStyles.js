export const mplpAnimationStyle = (leftPaneHidden) => {
  return {
    to: {
      marginLeft: leftPaneHidden ? "-20vw" : "0vw",
      opacity: leftPaneHidden ? 0 : 1,
    },
  };
};

export const viewAnimationStyle = () => {
  return {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  };
};
