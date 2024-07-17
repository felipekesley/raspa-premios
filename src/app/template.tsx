"use client";

import { PwaModal } from "@/components/_shared/pwaModal";
import { usePwaInstallPrompt } from "@/hooks/usePWAInstall";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const { show, handleInstall, handleClose } = usePwaInstallPrompt();

  return (
    <>
      <PwaModal show={show} onInstall={handleInstall} onClose={handleClose} />
      {children}
    </>
  );
}
