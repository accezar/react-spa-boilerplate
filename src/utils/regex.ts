/* eslint-disable no-useless-escape */
export const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
);

export const hasUpperCaseRegex = new RegExp('[A-Z]');
export const hasLowerCaseRegex = new RegExp('[a-z]');
export const hasNumbersRegex = new RegExp('[0-9]');
export const hasNonalphasRegex = new RegExp(/\W/);
