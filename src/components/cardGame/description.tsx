import { cn } from "@/lib/utils";

export const Description = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={cn("text-white text-sm mb-3", className)}>{text}</p>;
};
