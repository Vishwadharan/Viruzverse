import Image from "next/image";

interface ViruzverseLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textColor?: string;
}

export default function ViruzverseLogo({
  size = 32,
  showText = true,
  className = "",
  textColor = "#ffffff",
}: ViruzverseLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt="Viruzverse Logo"
          width={size * 2}
          height={size * 2}
          className="object-contain w-full h-full"
          priority
        />
      </div>
      {showText && (
        <span
          className="text-[16px] font-extrabold tracking-[-0.03em] transition-colors duration-200 group-hover:text-[#7c3aed]"
          style={{ color: textColor }}
        >
          Viruzverse
        </span>
      )}
    </div>
  );
}
