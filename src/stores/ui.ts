import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * UI state interface
 */
interface UiState {
  isOpenSale: boolean;
  setIsOpenSale: (value: boolean) => void;
}

/**
 * Store for UI-related state
 */
const uiStore = create(
  persist<UiState>(
    (set) => ({
      isOpenSale: false,
      setIsOpenSale: (value: boolean) => set({ isOpenSale: value }),
    }),
    {
      name: "ui-storage",
    }
  )
);

export default uiStore;
