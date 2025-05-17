// eslint-disable-next-line
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: ["simple-import-sort"],
    rules: {
      "@typescript-eslint/no-explicit-any": ["off"],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^\\u0000", "^node:", "^@?\\w", "^", "^\\."]],
        },
      ],
      "simple-import-sort/exports": "error",
    },
    ignorePatterns: ["src/components/ui/"],
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  }),
];

export default eslintConfig;
