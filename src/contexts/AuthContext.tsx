/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useState, useContext } from 'react';
import { fakeAuthService } from 'services';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

/**
 * Instance of a context with the shape of the interface.
 */
export const AuthContext = createContext<AuthContextType>(null!);

/**
 * Hook that returns the current auth context state
 * @returns
 */
export const useAuthContext = (): AuthContextType => useContext(AuthContext);

/**
 * HOC Component for wrapping and providing auth state
 * @param param0
 * @returns
 */
export const AuthContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [user, setUser] = useState<any>(null);

  const signin = (newUser: string, callback: VoidFunction) =>
    fakeAuthService.signin(() => {
      setUser(newUser);
      callback();
    });

  const signout = (callback: VoidFunction) =>
    fakeAuthService.signout(() => {
      setUser(null);
      callback();
    });

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
