"use client";

/**
 * Konrad-inspired text roll micro-interaction.
 * On hover, the primary line rolls upward and an identical duplicate rolls in from below.
 */
export default function TextRoll({ children, className = "", rollColor = "text-cyan-300" }) {
  return (
    <span className={`inline-block overflow-hidden h-[1.25em] align-middle ${className}`}>
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2 group-focus:-translate-y-1/2">
        <span className="block leading-[1.25em]">{children}</span>
        <span className={`block leading-[1.25em] ${rollColor}`} aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
}
