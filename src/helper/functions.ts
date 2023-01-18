/**
 *
 * @param state - mode of the app
 * @param normalClass - default class
 * @returns default class or default class with dark-mode class
 */
export const getClass = (state: string, normalClass: string): string => {
  return state === "light" ? normalClass : normalClass + " dark-mode";
};
