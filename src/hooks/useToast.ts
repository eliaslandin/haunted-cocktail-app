import type { ToastEventPayload } from "../utils/types";

export const useToast = (element: HTMLElement) => {
  const dispatch = (detail: ToastEventPayload) => {
    element.dispatchEvent(
      new CustomEvent<ToastEventPayload>("toast", {
        bubbles: true,
        composed: true,
        detail,
      }),
    );
  };

  const toast = {
    success(message: string) {
      dispatch({ message, type: "success" });
    },
    error(message: string) {
      dispatch({ message, type: "error" });
    },
    info(message: string) {
      dispatch({ message, type: "info" });
    },
  };

  return toast;
};
