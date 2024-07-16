"use client";

import { type ComponentPropsWithRef, forwardRef } from "react";

type InputProps = ComponentPropsWithRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { ...props }: InputProps,
  ref
) {
  return (
    <input
      className="bg-white w-full rounded-full h-[52px] pl-4 outline-none"
      ref={ref}
      {...props}
    />
  );
});
