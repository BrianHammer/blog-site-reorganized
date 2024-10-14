export function formatDate(date: Date, locale: string = "en-US"): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
}
// Formats to the correct format for html5..
// Todo: Ensure this function is accurate. I get these formatters from claude
export function formatDateTimeForHTML5(date: Date): string {
  return date.toISOString().slice(0, 16);
}

export function formatNumber(number: number, locale: string = "en-US"): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: "decimal",
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(number);
}
