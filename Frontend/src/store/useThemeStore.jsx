import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("syncly-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("syncly-theme", theme);
    set({ theme });
  },
}));
