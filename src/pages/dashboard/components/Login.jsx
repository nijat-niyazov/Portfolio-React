import { signInWithGoogle } from '../../../utils/firebase';

const Login = () => {
  return (
    <div
      className="dashboard"
      style={{ marginLeft: '200px', marginTop: '200px' }}
    >
      <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  );
};

export default Login;
