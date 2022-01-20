export const $ = (query: string): HTMLDivElement => document.querySelector(query);
export const $$ = (query: string) => [...document.querySelectorAll(query)];
export const $$$ = (element: HTMLElement, query: string) => element.querySelector(query);
