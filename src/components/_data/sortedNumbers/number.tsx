"use client";

import { revealAtom } from "@/atoms";
import { Btn } from "@/components/_shared/btn";
import { useAtom } from "jotai";
import { useState } from "react";

export const BtnNumber = ({ children }: { children: React.ReactNode }) => {
  const [reveal, setReveal] = useState(false);
  const [contextReveal] = useAtom(revealAtom);

  const handleReveal = () => {
    setReveal(true);
  };

  return (
    <Btn as="button" className="" onClick={handleReveal}>
      {reveal || contextReveal ? children : "#####"}
    </Btn>
  );
};
