import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("px-5 container mx-auto py-16", className)}>
      {children}
    </section>
  );
};
