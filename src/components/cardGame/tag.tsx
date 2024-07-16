import { cn } from "@/lib/utils";

export const Tag = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "text-white text-sm uppercase absolute top-8 left-5 bg-black bg-opacity-30 p-1 rounded-[8px]",
        className
      )}
    >
      {text}
    </span>
  );
};
