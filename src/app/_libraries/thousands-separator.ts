/**
 * separate number by the thousands
 * @param value: number
 * @return number
 */
export const thousandsSeparator = (value: number | string): string => (
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);
