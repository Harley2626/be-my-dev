"use client";

import { useEffect, useRef } from "react";

const CLARITY_SCRIPT_ID = "clarity-script";

type MicrosoftClarityProps = {
  projectId: string;
};

export default function MicrosoftClarity({ projectId }: MicrosoftClarityProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (initialized.current || typeof window === "undefined") return;
    if (document.getElementById(CLARITY_SCRIPT_ID)) return;

    initialized.current = true;

    void import("@microsoft/clarity").then(({ default: Clarity }) => {
      Clarity.init(projectId);
    });
  }, [projectId]);

  return null;
}
