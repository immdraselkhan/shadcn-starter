import { useRouter } from "next/navigation";
import { useState } from "react";

export function useRedirect() {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const redirect = (path?: string) => {
    setRedirecting(true);
    const searchParams = new URLSearchParams(window.location.search);
    const isExternalURL = /^(https?:\/\/|\/\/)/.test(path || "");
    const url = isExternalURL
      ? path
      : searchParams.get(path || "redirect") || "/";

    setTimeout(() => {
      router.replace(url as string);
      setRedirecting(false);
    });
  };

  return { redirect, redirecting };
}
