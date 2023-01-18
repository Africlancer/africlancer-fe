import { Modal } from "antd";
import React from "react";

interface IPros {
  open: boolean;
  titile?: string;
  onDismiss?: () => void;
  children: React.ReactNode;
}

export const ApModal: React.FC<IPros> = ({
  open,
  titile,
  children,
  onDismiss,
}) => {
  return (
    <Modal open={open} title={titile} onCancel={onDismiss} footer={null}>
      {children}
    </Modal>
  );
};
