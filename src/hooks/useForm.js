import { useEffect, useRef, useState } from 'react';
import { getNow, toLocale } from '../lib/utils';

const useForm = ({ initState, validate, onSubmit }) => {
  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState({});

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      setValues(initState);
      setErrors({});
    }
    formRendered.current = false;
  }, [initState, errors]);

  const interval = useRef(null);
  // update current dueDatetime in form
  useEffect(() => {
    if (initState.dueDatetime) {
      interval.current = setInterval(
        () =>
          setValues((prevState) => ({
            ...prevState,
            dueDatetime: toLocale(getNow()),
          })),
        1000
      );

      return () => clearInterval(interval.current);
    }
  }, [initState.dueDatetime]);

  const handleChange = (event) => {
    // clear interval to update value on change
    if (event.target.name === 'dueDatetime' && interval.current)
      clearInterval(interval.current);

    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (validate(values, setErrors)) onSubmit({ ...values });
  };

  return [values, errors, handleChange, handleSubmit, setValues];
};

export default useForm;
