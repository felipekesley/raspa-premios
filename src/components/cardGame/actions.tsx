import { cn } from "@/lib/utils";

export const Actions = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex gap-2 justify-center items-center absolute bottom-[-18px] left-0 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
