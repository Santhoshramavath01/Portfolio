import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

// Renders the real RS logo from /public/logo.png.
// A placeholder monogram ships at that path — replace the file with the
// actual logo asset and every usage (Navbar, Hero, Footer) updates automatically.
export function Logo({ size = 36, className, priority = false }: LogoProps) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden rounded-[10px]",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="Ramavath Santhosh logo"
        fill
        priority={priority}
        sizes={`${size}px`}
        className="object-contain"
      />
    </span>
  );
}
