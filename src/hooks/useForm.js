import { useEffect, useRef, useState } from "react";

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

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (validate(values, setErrors)) onSubmit({ ...values });
  };

  return [values, errors, handleChange, handleSubmit];
};

export default useForm;
