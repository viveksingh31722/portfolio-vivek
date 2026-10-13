"use client";
import { useQuickView } from "@/lib/QuickViewContext";
import QuickViewModal from "./QuickViewModal";

export default function GlobalQuickViewModal() {
  const { isQuickViewOpen, closeQuickView } = useQuickView();

  return (
    <QuickViewModal
      isOpen={isQuickViewOpen}
      onClose={closeQuickView}
    />
  );
}
