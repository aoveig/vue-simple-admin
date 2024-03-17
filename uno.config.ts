import { defineConfig } from "unocss";

export default defineConfig({
  rules: [
    [
      "flex",
      {
        display: "flex"
      }
    ],
    [
      "flex-center",
      {
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      }
    ],
    [/^flex-([\.\d]+)$/, ([_, num]) => ({ flex: num })],
    [
      /^mt-([\.\d]+)$/,
      ([_, num]) => ({ "margin-top": `${num}px` })
    ]
  ]
});
