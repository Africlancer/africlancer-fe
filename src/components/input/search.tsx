import { ErrorMessage, useField } from "formik";
import React from "react";
import  {SearchOutlined} from '@ant-design/icons'
interface IProps {
  label?: string;
  inputType?: string
  className?: string;
  ref?: any;
  props?: {
    [x: string]: any;
  };
}

const defaultInputBox = 
"border-skin-border border text-white outline-none w-full text-base bg-transparent px-10 py-3 flex items-center rounded mb-2 placeholder:text-white"

export const ApSearchInput: React.FC<IProps> = (props: IProps) => {
  const {  label, className, inputType } = props;

  return (
    <div className="relative">
        <input
            placeholder="Search"
            type={inputType}
            {...props}
            className={`${defaultInputBox} ${className}`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="absolute text-white top-3.5 left-3.5 w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>
  );
};
