import { ConfigAPI } from "@babel/core";

export default function (api: ConfigAPI) {
  // @ts-ignore
  api.cache(true);

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
}