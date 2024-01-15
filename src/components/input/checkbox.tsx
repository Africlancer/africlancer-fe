import { ErrorMessage, Field, useField } from "formik";
import React, { useEffect } from "react";
import { Checkbox, ConfigProvider, CheckboxProps } from 'antd';

interface IProps {
  name: string;
  label?: React.ReactNode;
  className?: string;
  onChange?: (val: any) => void;
  // props?: {
  //   [x: string]: any;
  // };
}

type ApCheckBoxProps = IProps & CheckboxProps;

export const ApCheckBoxInput: React.FC<ApCheckBoxProps> = (props) => {
  const { label, name, onChange, className } = props;
  const [field, meta, { setValue }] = useField(name);

  return (
    <div className="w-full">
      <div className="flex gap-2 items-center">
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "",
              colorPrimary: "#44D156"
            }
          }}
        >
          <Checkbox 
            {...props}
            onChange={(val: any) => {
              setValue(!field.value);
              if (onChange) onChange({ name, status: !field.value });
            }}
            name={name}
          />
        </ConfigProvider>
      
        {/* <Field
          className={className}
          type="checkbox"
          onChange={(val: any) => {
            setValue(!field.value);
            if (onChange) onChange({ name, status: !field.value });
          }}
          name={name}
        /> */}
        <div className="text-sm bold">{label}</div>
      </div>

      <ErrorMessage className="text-red-500 mt-1" name={name} component="div" />
    </div>
  );
};