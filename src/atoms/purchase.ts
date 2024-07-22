import { atom } from "jotai";

type PurchaseState = {
  isValidated: boolean;
};

export const purchaseAtom = atom<PurchaseState>({
  isValidated: false,
});
