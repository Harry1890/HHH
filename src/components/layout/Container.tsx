import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "header" | "nav";
  id?: string;
}

export function Container({ children, className, as: Component = "div", id }: ContainerProps) {
  return (
    <Component id={id} className={cn("container-site", className)}>
      {children}
    </Component>
  );
}
