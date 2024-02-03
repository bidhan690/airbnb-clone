import { create } from "zustand";

interface LoginStore {
  showLoginForm: boolean;
  setShowLoginForm: (isShow: boolean) => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  showLoginForm: false,
  setShowLoginForm: (isShow) => set({ showLoginForm: isShow }),
}));
