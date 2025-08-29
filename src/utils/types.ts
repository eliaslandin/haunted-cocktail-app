export type Recipe = {
  id: string;
  name: string;
  thumbnail: string;
  instructions: string;
  ingredients: string[];
};

export type TheCocktailDbResponse = {
  drinks: any[] | string | undefined;
};

export type ToastNotificationType = "success" | "error" | "info";

export type ToastNotification = {
  id: string;
  message: string;
  type: ToastNotificationType;
};

export type Toast = {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
};

export type ToastContextType = {
  toast: Toast;
};
