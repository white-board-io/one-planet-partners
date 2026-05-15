import { cn } from "@/lib/utils";

export function SectionTitle({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <h2
      className={cn(
        "font-serif-brand text-3xl leading-tight font-normal md:text-5xl",
        light ? "text-white" : "text-black",
      )}
    >
      {children}
    </h2>
  );
}
