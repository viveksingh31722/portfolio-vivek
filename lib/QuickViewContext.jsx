"use client";
import { createContext, useContext, useState } from "react";

const QuickViewContext = createContext({
  isQuickViewOpen: false,
  openQuickView: () => {},
  closeQuickView: () => {},
});

export function QuickViewProvider({ children }) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <QuickViewContext.Provider
      value={{
        isQuickViewOpen,
        openQuickView: () => setIsQuickViewOpen(true),
        closeQuickView: () => setIsQuickViewOpen(false),
      }}
    >
      {children}
    </QuickViewContext.Provider>
  );
}

export function useQuickView() {
  return useContext(QuickViewContext);
}
