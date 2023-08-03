/**
 * Join class names from an array of strings
 * @param classes An array of class names. Only truthy values are included
 * @returns classnames string
 */
const clsx = (...classes: (string | undefined | null)[]): string => classes.filter(Boolean).join(" ");

export default clsx;
