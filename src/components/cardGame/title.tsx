import { cn } from "@/lib/utils";

export const Title = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h4 className={cn("text-white font-bold uppercase", className)}>{text}</h4>
  );
};
