export const validateCreateListForm = (values, setErrors) => {
  if (!values.listName) setErrors({ listName: "Cannot be empty!" });
  else if (values.listName.length > 32) setErrors({ listName: "Too big!" });
  else return true;

  return false;
};

const validateItemName = (itemName, setErrors) => {
  if (!itemName)
    setErrors((prevState) => ({ ...prevState, itemName: "Cannot be empty!" }));
  else if (itemName.length > 32)
    setErrors((prevState) => ({ ...prevState, itemName: "Too big!" }));
  else {
    setErrors((prevState) => ({ ...prevState, itemName: "" }));
    return true;
  }

  return false;
};

const validateDescription = (description, setErrors) => {
  if (description.length > 64)
    setErrors((prevState) => ({ ...prevState, description: "Too big!" }));
  else {
    setErrors((prevState) => ({ ...prevState, description: "" }));
    return true;
  }

  return false;
};

export const validateCreateListItemForm = (values, setErrors) => {
  let isValid = true;

  isValid = validateItemName(values.itemName, setErrors) && isValid;
  isValid = validateDescription(values.description, setErrors) && isValid;

  return isValid;
};
