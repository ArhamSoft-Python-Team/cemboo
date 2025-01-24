import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Whitespace Rules:
      "no-multiple-empty-lines": ["error", { "max": 1 }], // Avoid multiple blank lines
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "block-like" }, // Use blank lines between logical blocks
        { "blankLine": "always", "prev": "block-like", "next": "*" }, // Use blank lines after blocks
      ],

      // Semicolon Rule:
      "semi": ["error", "always"], // Enforce semicolons at the end of statements

      // Quotation Marks Rule:
      "quotes": ["error", "double", { "avoidEscape": true }], // Prefer double quotes for strings, except for template literals

      // Strict Equality Rule:
      "eqeqeq": ["error", "always"], // Require === and !== over == and !=

      // No Unnecessary Blank Lines:
      "no-trailing-spaces": "error", // Disallow trailing spaces at the end of lines

      // Disallow console.log:
      "no-console": ["error", { "allow": ["warn", "error"] }], // Disallow console.log, allow console.warn and console.error
    },
  },
];

export default eslintConfig;
