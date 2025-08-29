import { useContext } from "haunted";
import { ToastContext } from "../components/toast-provider";

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
};
