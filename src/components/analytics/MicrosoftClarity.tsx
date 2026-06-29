"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";

type MicrosoftClarityProps = {
  projectId: string;
};

export function MicrosoftClarity({ projectId }: MicrosoftClarityProps) {
  useEffect(() => {
    Clarity.init(projectId);
  }, [projectId]);

  return null;
}
