import React from "react";
import PropType from "prop-types";
import classNames from "classnames";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classNames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      ></input>
      {error && (
        <div className="invalid-feedback">{error}</div>
      )}
    </div>
  );
};

TextInputGroup.propType = {
  label: PropType.string.isRequired,
  name: PropType.string.isRequired,
  type: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  error: PropType.string.isRequired
};

TextInputGroup.defaultProps = {
  type: "text",
};

export default TextInputGroup;
