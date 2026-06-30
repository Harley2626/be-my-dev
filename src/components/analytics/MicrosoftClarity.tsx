"use client";

import { useEffect, useRef } from "react";

type MicrosoftClarityProps = {
  projectId: string;
};

export default function MicrosoftClarity({ projectId }: MicrosoftClarityProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    initialized.current = true;

    void import("@microsoft/clarity").then(({ default: Clarity }) => {
      Clarity.init(projectId);
      Clarity.consentV2({
        ad_Storage: "granted",
        analytics_Storage: "granted",
      });
    });
  }, [projectId]);

  return null;
}
