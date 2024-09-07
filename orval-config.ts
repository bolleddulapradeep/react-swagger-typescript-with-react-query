import { defineConfig } from "orval";
import { OutputOptions } from "@orval/core";

const commonConfig: OutputOptions = {
  client: "react-query",
  mode: "tags",
  override: {
    query: {
      useQuery: true,
      useMutation: true,
      useInfinite: true,
    },
    mutator: {
      path: "./src/query/src/custom-instance.ts",
      name: "useCustomInstance",
    },
  },
};

const config = defineConfig({
  api: {
    input: "",
    output: {
      target: "./src/query/src/__generated__/api/api.ts",
      ...commonConfig,
    },
  },
});

export default config;
