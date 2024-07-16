import { cn } from "@/lib/utils";

export const Premiation = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span
      className={cn("text-white text-center text-sm block mt-8", className)}
    >
      {text}
    </span>
  );
};
