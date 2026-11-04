import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  external?: boolean;
  id?: string;
}

const baseStyles =
  "inline-flex items-center justify-center font-body font-medium transition-all duration-300 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A0522D] disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-[#1C1C1A] text-[#FAFAF8] hover:bg-[#111110] border border-[#1C1C1A]",
  secondary:
    "bg-transparent text-[#1C1C1A] border border-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-[#FAFAF8]",
  ghost:
    "bg-transparent text-[#1C1C1A] hover:text-[#A0522D] border border-transparent",
};

const sizes = {
  sm: "px-5 py-2 text-sm tracking-wide",
  md: "px-7 py-3.5 text-sm tracking-wide",
  lg: "px-9 py-4 text-base tracking-wide",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  external = false,
  id,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        id={id}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      id={id}
    >
      {children}
    </button>
  );
}
