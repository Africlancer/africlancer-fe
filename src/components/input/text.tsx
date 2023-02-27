import { ErrorMessage, useField } from "formik";
import React from "react";

interface IProps {
  label?: string;
  type?: string;
  inputType?: string
  name: string;
  className?: string;
  placeholder?: string;
  ref?: any;
  props?: {
    [x: string]: any;
  };
}

const defaultInputBox = "border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2";
const defaultTextArea = "border w-full rounded p-3 h-40 resize-none outline-none"

export const ApTextInput: React.FC<IProps> = (props: IProps) => {
  const { name, type, label, className, inputType } = props;

  const [field] = useField(name);

  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className="flex items-center justify-between">{label}
        <ErrorMessage
            className="text-red-500 text-cusf3"
            name={name}
            component="p"
        /></label>}
      {type == "textarea" ? (
        <textarea
          {...props}
          {...field}
          className={`${defaultTextArea} ${className}`}
        ></textarea>
      ) : (
        <input
          type={inputType}
          {...props}
          {...field}
          className={`${defaultInputBox} ${className}`}
        />
      )}
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
