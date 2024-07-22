"use client";

import { purchaseAtom } from "@/atoms";
import { useAtom } from "jotai";
import { FormFull } from "./formFull";
import { FormPhone } from "./formPhone";

export const Form = () => {
  const [validated] = useAtom(purchaseAtom);

  return <>{validated.isValidated ? <FormFull /> : <FormPhone />}</>;
};
