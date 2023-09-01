export const replaceQuotes = (value: string): string =>
  value.replace("'", "").replace("`", "").replace('"', "");
