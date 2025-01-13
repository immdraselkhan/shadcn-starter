"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "@/components/ui/button";

type LoadingButtonProps = ButtonProps & {
  loading?: boolean;
};

export default function LoadingButton({
  loading,
  children,
  ...props
}: LoadingButtonProps) {
  const { pending } = useFormStatus();
  const isLoading = loading ?? pending;

  return (
    <Button disabled={isLoading} {...props}>
      <>
        {isLoading ? "Please wait" : children}
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      </>
    </Button>
  );
}
