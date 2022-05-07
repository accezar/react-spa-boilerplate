import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const useAuthStatus = (): JSX.Element => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome `${auth.user}`!
      <button
        type="button"
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
};

export default useAuthStatus;
