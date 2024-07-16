import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  icon: ElementType;
  className?: string;
};
export const Action = ({ icon: Icon, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      type="button"
      className={cn(
        "w-11 h-11 rounded-full bg-gradient-to-b from-appPrimary-500 to-appPrimary-600 border border-appPrimary-500 flex items-center justify-center text-white shadow-xl",
        className
      )}
    >
      <Icon strokeWidth={1} />
    </button>
  );
};
