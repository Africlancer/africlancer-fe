import { ErrorMessage, useField } from "formik";
import React from "react";
import Select from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import CreateableSelect from "react-select/creatable";

interface IProps extends StateManagerProps {
  onChange?: any
  label?: string;
  name: string;
  isMulti?: boolean;
  isCreatable?: boolean;
  props?: {
    [x: string]: StateManagerProps;
  };
}

export const ApRegSelect: React.FC<IProps> = (props) => {
  const { label, options, isMulti, name, isCreatable, onChange } = props;

  return (
    <div className="">
        {
            label && <label className="flex items-center justify-between mb-4">{label}</label>
        }
      {isCreatable ? (
        <CreateableSelect  {...props} name={name} onChange={(newVal) => onChange && onChange(newVal)} />
      ) : (
        <Select
          classNames={{control: (state) => 
          'py-1 rounded-md border border-skin-border'
          }}
          {...props}
          isMulti={isMulti}
          options={options}
          name={name}
          onChange={(val: any) => onChange && onChange(val)}
        />
      )}
    </div>
  );
};
