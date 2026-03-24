"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/src/contexts/CartContext";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <CartProvider>{children}</CartProvider>;
}
