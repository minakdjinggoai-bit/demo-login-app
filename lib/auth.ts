export const REGISTERED_EMAIL='user@example.com';
export function isEmailMatch(input:string){ return input === REGISTERED_EMAIL; } // BUG: should normalize case
