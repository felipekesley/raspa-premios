"use client";

import { revealAtom } from "@/atoms";
import { Btn } from "@/components/_shared/btn";
import { useAtom } from "jotai";
import React from "react";

export const Reveal = () => {
  const [_, setReveal] = useAtom(revealAtom);
  return (
    <Btn className="min-w-full" onClick={() => setReveal(true)}>
      Mostrar todos os numeros
    </Btn>
  );
};
