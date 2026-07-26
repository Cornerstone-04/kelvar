import type { ReactNode } from "react";

export function StoryFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 py-14 md:px-10 md:py-20 ${className}`}>
      {children}
    </div>
  );
}
