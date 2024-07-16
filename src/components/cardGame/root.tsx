import { cn } from "@/lib/utils";

export const Root = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-appPrimary-300 pt-6 pb-12 px-3 rounded-2xl max-w-72 mx-auto relative shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};
