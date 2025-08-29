import { component, createContext, html, useState } from "haunted";
import type {
  ToastContextType,
  ToastNotificationType,
  ToastNotification,
} from "../utils/types";

export const ToastContext = createContext<ToastContextType | null>(null);

customElements.define("toast-provider", ToastContext.Provider);
customElements.define("toast-consumer", ToastContext.Consumer);

// Time to display the notification in milli seconds
const DISPLAY_TIME = 4000;

export const ToastWrapper = () => {
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);

  console.log("Notifications:", notifications);

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const addNotification = (message: string, type: ToastNotificationType) => {
    const id = crypto.randomUUID();
    setNotifications((prev) => [
      ...prev,
      {
        id,
        message,
        type,
      },
    ]);

    setTimeout(() => removeNotification(id), DISPLAY_TIME);
  };

  const toast = {
    success(message: string) {
      addNotification(message, "success");
    },
    error(message: string) {
      addNotification(message, "error");
    },
    info(message: string) {
      addNotification(message, "info");
    },
  };

  return html`
    <toast-provider .value=${{ toast }}> <slot></slot></toast-provider>
  `;
};

customElements.define("toast-wrapper", component(ToastWrapper));
