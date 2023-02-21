import { ErrorMessage, useField } from "formik";
import React from "react";

interface IProps {
  label?: string;
  type?: string;
  name: string;
  className?: string;
  placeholder?: string;
  ref?: any;
  props?: {
    [x: string]: any;
  };
  disabled?: boolean,
  onChange?: any
}

const defaultClassName= "";

export const ApCheckBox: React.FC<IProps> = (props: IProps) => {
  const { name, type, label, className, ref, disabled, onChange } = props;

  const [field] = useField(name);

  return (
    <div className="flex gap-2">
    <input type="checkbox" 
        onInput={onChange}
        {...props}
        {...field}
        className={`${defaultClassName} ${className}`}
    />
      {label && <label className="flex items-center justify-between">{label}
        <ErrorMessage
            className="text-red-500 text-cusf3"
            name={name}
            component="p"
        /></label>}

      {
        !label &&
        <ErrorMessage
          className="text-red-500 text-cusf3 text-left mt-3"
          name={name}
          component="div"
        />
      }
    </div>
  );
};