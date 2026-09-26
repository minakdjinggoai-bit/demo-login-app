export const REGISTERED_EMAIL='user@example.com';
export function isEmailMatch(input:string){ return input.toLowerCase() === REGISTERED_EMAIL.toLowerCase(); }
