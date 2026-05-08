import Image from "next/image";
import { cn } from "@/lib/utils";

export const visualImage = "/images/hero-bg-thumbnail.png";

export function LocalPhoto({
  alt,
  className,
  position = "center",
}: {
  alt: string;
  className?: string;
  position?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-black/8", className)}>
      <Image
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        src={visualImage}
        alt={alt}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
