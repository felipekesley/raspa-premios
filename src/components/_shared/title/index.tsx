import type { FC, ReactNode } from "react";

type TitleProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  fontWeight?: "bold" | "semi-bold" | "normal" | "light";
  children: ReactNode;
};

export const Title: FC<TitleProps> = ({
  tag: Tag,
  className = "",
  fontWeight = "normal",
  children,
}) => {
  const styles: Record<TitleProps["tag"], string> = {
    h1: "text-3xl lg:text-4xl",
    h2: "text-2xl lg:text-3xl",
    h3: "text-xl lg:text-2xl",
    h4: "text-lg lg:text-xl",
    h5: "text-md lg:text-lg",
    h6: "text-sm lg:text-base",
  };

  const fontWeightStyles: Record<string, string> = {
    bold: "font-bold",
    "semi-bold": "font-semibold",
    normal: "font-normal",
    light: "font-light",
  };

  return (
    <Tag
      className={`${styles[Tag]} ${fontWeightStyles[fontWeight]} ${className}`}
    >
      {children}
    </Tag>
  );
};
