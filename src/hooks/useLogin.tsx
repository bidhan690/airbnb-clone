import { create } from "zustand";

interface LoginStore {
  isOpen: boolean;
  mode: string;
  setMode: (mode: string) => void;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: (setOpen: boolean) => void;
}

export const useLogin = create<LoginStore>((set) => ({
  isOpen: false,
  mode: "signin",
  setMode: (mode) => set({ mode }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onOpenChange: (setOpen) => set({ isOpen: setOpen }),
}));
