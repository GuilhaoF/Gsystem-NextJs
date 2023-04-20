export class AuthTokenError extends Error {
  constructor(message: string) {
    super(message);
  }
}
//ex : 'Error with authentication token 