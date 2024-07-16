import { cn } from "@/lib/utils";

export const AppBg = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("w-full min-h-screen", className)}>{children}</div>;
};
