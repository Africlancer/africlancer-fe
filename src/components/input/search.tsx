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
"text-black placeholder:text-gray-500 border-skin-border border text-white outline-none w-full text-base bg-gray-50 px-10 py-2.5 flex items-center rounded"

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
         className="absolute text-gray-500  top-[14px] left-4 w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>
  );
};
