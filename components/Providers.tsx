"use client";

import { LocaleProvider } from "@/components/LocaleProvider";
import { PageEffects } from "@/components/PageEffects";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <PageEffects />
      {children}
    </LocaleProvider>
  );
}
