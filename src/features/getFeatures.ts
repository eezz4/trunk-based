type Mode = "dev" | "alpha" | "main";
type Target = "global" | "asia" | "america";

export const includeFeature = (feature: string) => {
  const mode = (process.env.mode ?? "main") as Mode;
  const target = (process.env.target ?? "global") as Target;

  const includeFeatures = includeFactory(mode, target);
  return includeFeatures.includes(feature);
};

export const excludeFeature = (feature: string) => {
  const mode = (process.env.mode ?? "main") as Mode;
  const target = (process.env.target ?? "global") as Target;

  const excludeFeatures = excludeFactory(mode, target);
  return excludeFeatures.includes(feature);
};

const includeFactory = (mode: Mode, target: Target) => {
  if (mode === "dev") {
    if (target === "global") {
      return ["TestPage", "ApiTestPage"];
    } else if (target === "asia") {
      return ["TestPage", "ApiTestPage"];
    } else if (target === "america") {
      return ["TestPage", "ApiTestPage"];
    }
  } else if (mode === "alpha") {
    if (target === "global") {
      return ["ApiTestPage"];
    } else if (target === "asia") {
      return ["ApiTestPage"];
    } else if (target === "america") {
      return ["ApiTestPage"];
    }
  } else if (mode === "main") {
    if (target === "global") {
      return [];
    } else if (target === "asia") {
      return [];
    } else if (target === "america") {
      return [];
    }
  }
  throw "";
};

const excludeFactory = (mode: Mode, target: Target): string[] => {
  return [];
};
