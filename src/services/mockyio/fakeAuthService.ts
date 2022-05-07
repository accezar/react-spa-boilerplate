/**
 * Fake API request
 */
export const fakeAuthService = {
  isAuthenticated: false,
  signin(callback: VoidFunction): void {
    fakeAuthService.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction): void {
    fakeAuthService.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default fakeAuthService;
