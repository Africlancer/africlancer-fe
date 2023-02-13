import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { notification } from "antd";

export default function useApNotification() {
  const [api, contextHolder] = notification.useNotification();
  const show = (title: string, message: string, isError?: boolean) => {

    api.info({
      icon: (
        isError ? <CloseCircleFilled className="text-red-500"/>
        : <CheckCircleFilled className="text-green-500"/>
      ),
      message: title,
      description: (
        <div className="flex gap-3">
          <p>{message}</p>
        </div>
      ),
      placement: "topLeft",
    });
  };

  const successMsg = (title: string, message: string) => {
    show(title, message);
  };

  const errorMsg = (title: string, message: string) => {
    show(title, message, true);
  };

  return { notificationContext: contextHolder, successMsg, errorMsg };
}
