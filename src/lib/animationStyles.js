const getMarginWidth = (width) => {
  let margin;

  if (width <= 480) margin = "-80vw";
  else if (width <= 768) margin = "-40vw";
  else if (width <= 1024) margin = "-30vw";
  else margin = "-20vw";

  return margin;
};

export const mplpAnimationStyle = (leftPaneHidden, width) => {
  return {
    to: {
      marginLeft: leftPaneHidden ? getMarginWidth(width) : "0vw",
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
