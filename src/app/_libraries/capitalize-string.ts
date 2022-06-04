/**
 * Capitalize the first letter
 * of a String
 * @param lowerCaseString: String
 * @return String
 */
 export const capitalizeString = (lowerCaseString: string): string => (
  lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1)
);
