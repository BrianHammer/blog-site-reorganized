import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn(className, "px-5 container mx-auto pb-16")}>
      {children}
    </section>
  );
};
