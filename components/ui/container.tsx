import { cn } from "@/lib/shadcn/cn";
import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "nav" | "aside" | "header" | "footer";
};

export default function Container({
  as: Element = "section",
  className,
  ...props
}: ContainerProps) {
  return <Element className={cn("container mx-auto", className)} {...props} />;
}
