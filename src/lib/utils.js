export const validateCreateListForm = (values, setErrors) => {
  if (!values.listName) setErrors({ listName: 'Cannot be empty!' });
  else if (values.listName.length > 32) setErrors({ listName: 'Too big!' });
  else return true;

  return false;
};

const validateItemName = (itemName, setErrors) => {
  if (!itemName)
    setErrors((prevState) => ({ ...prevState, itemName: 'Cannot be empty!' }));
  else if (itemName.length > 32)
    setErrors((prevState) => ({ ...prevState, itemName: 'Too big!' }));
  else {
    setErrors((prevState) => ({ ...prevState, itemName: '' }));
    return true;
  }

  return false;
};

const validateDescription = (description, setErrors) => {
  if (description.length > 64)
    setErrors((prevState) => ({ ...prevState, description: 'Too big!' }));
  else {
    setErrors((prevState) => ({ ...prevState, description: '' }));
    return true;
  }

  return false;
};

const validateDueDatetime = (dueDatetime, setErrors) => {
  if (Date.parse(dueDatetime) < Date.now())
    setErrors((prevState) => ({ ...prevState, dueDatetime: 'Not valid!' }));
  else {
    setErrors((prevState) => ({ ...prevState, dueDatetime: '' }));
    return true;
  }

  return false;
};

export const validateCreateListItemForm = (values, setErrors) => {
  let isValid = true;

  isValid = validateItemName(values.itemName, setErrors) && isValid;
  isValid = validateDescription(values.description, setErrors) && isValid;
  isValid = validateDueDatetime(values.dueDatetime, setErrors) && isValid;

  return isValid;
};

export const getNow = (offset = 60) => {
  return new Date(Date.now() + offset * 1000)
    .toISOString()
    .split(/:\d\d\.\d\d\dZ/)[0];
};

export const toLocale = (dueDatetime) => {
  let [date, time] = new Date(dueDatetime.concat('Z'))
    .toLocaleString()
    .split(/, /);
  date = date.split('/').reverse().join('-');
  const [hour, minute] = time.split(':');
  return date + 'T' + hour + ':' + minute;
};

export const getRemaining = (dueDatetime) => {
  let remainingTime = '';

  const totalTime = ~~((Date.parse(dueDatetime) - Date.now()) / 1000);
  const totalHours = ~~(totalTime / (60 * 60));
  if (totalHours > 23) {
    const days = ~~(totalHours / 24);
    remainingTime = `${days} day${days > 1 ? 's' : ''} `;
  }

  const hours = ~~(totalHours % 24);
  const minutes = ~~((totalTime / 60) % 60);
  const seconds = totalTime % 60;
  remainingTime =
    remainingTime +
    `${hours} hr${hours > 1 ? 's' : ''} ${minutes} min${
      minutes > 1 ? 's' : ''
    } ${seconds} sec${seconds > 1 ? 's' : ''}`;

  return remainingTime;
};

export const hasExpired = (dueDatetime) => {
  return new Date(toLocale(getNow(0))) >= new Date(dueDatetime);
};
