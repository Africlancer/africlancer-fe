import { ErrorMessage, useField } from "formik";
import React from "react";

interface IProps {
  label?: string;
  type?: string;
  name: string;
  className?: string;
  placeholder?: string;
  props?: {
    [x: string]: any;
  };
}

const defaultClass =
  "border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2";

export const ApTextInput: React.FC<IProps> = (props: IProps) => {
  const { name, type, label, className } = props;

  const [field] = useField(name);

  return (
    <div className="w-full">
      {label && <label>{label}</label>}
      {type == "textarea" ? (
        <textarea
          {...props}
          {...field}
          className={`${defaultClass} ${className}`}
        ></textarea>
      ) : (
        <input
          {...props}
          {...field}
          className={`${defaultClass} ${className}`}
        />
      )}

      <ErrorMessage
        className="text-red-500 mb-5 text-cusf3 text-left"
        name={name}
        component="div"
      />
    </div>
  );
};
