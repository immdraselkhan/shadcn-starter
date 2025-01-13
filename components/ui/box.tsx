import { cn } from "@/lib/shadcn/cn";
import React from "react";

type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export default function Box({ className, ...props }: BoxProps) {
  return <div className={cn(className)} {...props} />;
}
