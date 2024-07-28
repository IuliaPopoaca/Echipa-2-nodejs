import React from 'react';
import styles from './ModalInput.module.css';

export const ModalInput = ({
  className,
  errorClassName,
  register,
  errors,
  name,
  errorMessage,
  autoFocus = false,
  ...rest
}) => {
  const error = errors && errors[name];

  let validationRules = {
    required: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
  };

  if (name === "email") {
      validationRules.pattern = {
          value: /[^@]+@[^.]+\..+/,
          message: "Email should include '@' and a domain"
      };
  }

  let inputProps = register ? register(name, validationRules) : {};

  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${className} ${error ? styles.error : ''} `}
        {...inputProps}
        {...rest}
      />
      {error && (<div className={styles.errorMessage}>{errorMessage || error.message}</div>)}
    </div>
  );
};
