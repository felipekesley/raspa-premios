"use client";

import type { ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form">;

export const Form = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>;
};
