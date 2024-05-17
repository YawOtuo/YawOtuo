import { create } from "zustand";

type NavMobileMenuStore = {
    navMobileMenuToggle: boolean;
    setNavMobileMenuStore: (val: boolean) => void;

}

export const useNavMobileMenuStore = create<NavMobileMenuStore>((set) => ({
    navMobileMenuToggle: false,
    setNavMobileMenuStore: (val) => set({ navMobileMenuToggle: val }),
}));
