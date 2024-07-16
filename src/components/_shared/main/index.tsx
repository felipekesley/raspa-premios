import { cn } from "@/lib/utils";

export const Main = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={cn("w-full max-w-[475px] mx-auto min-h-screen", className)}
    >
      {children}
    </main>
  );
};
