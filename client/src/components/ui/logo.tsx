import React from "react";
import { Link } from "wouter";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6 text-sm",
    md: "w-8 h-8 text-base",
    lg: "w-10 h-10 text-lg",
  };

  return (
    <Link href="#hero">
      <a className={`flex items-center gap-2 font-heading font-bold text-primary-600 dark:text-primary-500 ${className}`}>
        <div className={`${sizeClasses[size]} rounded-md bg-primary-600 dark:bg-primary-500 text-white flex items-center justify-center`}>
          AK
        </div>
        <span>Abdou Kandji</span>
      </a>
    </Link>
  );
};
