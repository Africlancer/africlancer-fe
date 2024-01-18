import { PlusOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { ConfigProvider, Upload } from "antd";
import React, { useState } from "react";
import { fileSvc } from "../../services";

const { Dragger } = Upload;

interface IProps {
  name?: string;
  label?: string;
  inputId?: string;
  className?: string;
  accept?: string;
  multiple?: boolean;
  title?: string;
  maxCount?: number;
  ignoreResize?: boolean;
  defaultFileList?: UploadFile<any>[] | undefined;
  onSelected: (files: Array<any>) => void;
  onRemove?: (file: UploadFile) => void;
}

export const ApFileInput: React.FC<IProps> = (props: IProps) => {
  const {
    name,
    label,
    onSelected,
    multiple,
    maxCount = 1,
    className,
    accept,
    onRemove,
    defaultFileList,
  } = props;
  let timeout: any = null;
  const [fileList, setFileList] = useState([]);
  const handleOnChange = async (fls: any) => {
    if (timeout) clearTimeout(timeout);

    if (fls && fls.length > 0) {
      let files: any = [];
      for await (const f of fls) {
        files.push({
          // TODO remove base64 maping..
          uri: await fileSvc.fileToBase64(f),

          // props?.ignoreResize
          //   ? await fileSvc.fileToBase64(f)
          //   : await fileSvc.imageThumbnail(await fileSvc.fileToBase64(f)),
          file: f,
          uid: f.uid,
        });
      }

      timeout = setTimeout(() => {
        onSelected(files);
      }, 1000);
    }
  };

  const uploadProps: UploadProps = {
    name: name || "file",
    multiple: multiple,
    accept: accept,
    defaultFileList: defaultFileList,
    listType: "picture-card",
    maxCount: maxCount || 5,
    async onChange(info: any) {
      setFileList(info.fileList);
      await handleOnChange(
        info.fileList
          .filter((f: any) => f.originFileObj)
          .map((f: any) => f.originFileObj)
      );
    },
    async onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
    async onRemove(file) {
      onRemove && onRemove(file);
    },
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "",
          colorPrimary: "#44D156",
        },
      }}
    >
      <div>
        {label && <p className="mb-2">{label}</p>}
        <Upload className={`${className} h-[200px] w-[200px]`} {...uploadProps}>
          {fileList.length >= maxCount ? null : uploadButton}
          {/* <div className="flex flex-col items-center justify-center p-2">
            <BiSolidImageAdd className="text-5xl text-primary"/>
            <p className="text-slate-500">
              Click or drag file to this area to upload
            </p>
          </div> */}
          {/* <p className="ant-upload-hint">Support are {accept}.</p> */}
        </Upload>
      </div>
    </ConfigProvider>
  );
};
