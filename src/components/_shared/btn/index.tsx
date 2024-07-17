import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  as?: "button";
  classNameBtn?: string;
};

type LinkProps = {
  as: "link";
  href: string;
  children: React.ReactNode;
  className?: string;
  classNameBtn?: string;
};

type Props = ButtonProps | LinkProps;

const style =
  "min-w-[200px] max-w-max bg-gradient-to-b text-xl from-appPrimary-100 to-appPrimary-200 rounded-full text-white uppercase font-bold border-3 p-[6px] shadow-lg";

export const Btn = (props: Props) => {
  const { as, children, className, classNameBtn, ...rest } = props;

  if (as === "link") {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <Link href={href} {...linkProps} className={cn(style, className)}>
        <span className="bg-appThird px-4 py-2 rounded-full w-full flex items-center justify-center shadow-sm">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button {...(rest as ButtonProps)} className={cn(style, className)}>
      <span
        className={cn(
          "bg-appThird px-4 py-2 rounded-full w-full flex items-center justify-center shadow-sm",
          classNameBtn
        )}
      >
        {children}
      </span>
    </button>
  );
};
