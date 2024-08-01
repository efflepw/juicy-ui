export const cssPrefix =
  (prefix: string, theme: "light" | "dark" = "light") =>
  (...classNames: string[]) =>
    `${prefix}-${classNames.join(" ")} ${theme}`;
