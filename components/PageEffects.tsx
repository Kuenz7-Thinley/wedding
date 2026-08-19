"use client";

import { useEffect } from "react";

export function PageEffects() {
  useEffect(() => {
    requestAnimationFrame(() => {
      document.body.classList.add("is-loaded");
    });
  }, []);

  return null;
}
