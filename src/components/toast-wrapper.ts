import { component, html, useEffect, useState } from "haunted";
import type {
  ToastNotificationType,
  ToastNotification,
  ToastEvent,
} from "../utils/types";

// Time to display the notification in milli seconds
const DISPLAY_TIME = 5000;

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
    <div class="container">
      ${notifications.map(
        (notification) => html`
          <div class="card">
            <icon-component
              class="icon"
              .type=${notification.type}
            ></icon-component>
            ${notification.message}
          </div>
        `,
      )}
    </div>
    <slot></slot>

    <style>
      :host {
        position: absolute;
        inset: 0;
        z-index: 9999;
      }

      .container {
        position: fixed;
        right: 20px;
        bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        padding: 16px 20px;
        min-width: 280px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.18);
      }

      .icon {
        width: 24px;
        height: 24px;
      }
    </style>
  `;
};

customElements.define("toast-wrapper", component(ToastWrapper));
