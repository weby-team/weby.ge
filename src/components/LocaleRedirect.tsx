"use client";

import { useEffect } from "react";

type LocaleRedirectProps = {
  to: string;
};

export function LocaleRedirect({ to }: LocaleRedirectProps) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}
