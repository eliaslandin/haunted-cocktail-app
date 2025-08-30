import { component, html, useEffect, useState } from "haunted";
import type {
  ToastNotificationType,
  ToastNotification,
  ToastEvent,
} from "../utils/types";

// Time to display the notification in milli seconds
const DISPLAY_TIME = 4000;

export const ToastWrapper = (element: HTMLElement) => {
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

  useEffect(() => {
    const onToast = (e: Event) => {
      const toastEvent = e as ToastEvent;
      addNotification(toastEvent.detail.message, toastEvent.detail.type);
    };

    element.addEventListener("toast", onToast);

    return () => element.removeEventListener("toast", onToast);
  }, []);

  return html`
    <div>
      ${notifications.map(
        (notification) => html` <p>${notification.message}</p> `,
      )}
      <slot></slot>
    </div>
  `;
};

customElements.define("toast-wrapper", component(ToastWrapper));
