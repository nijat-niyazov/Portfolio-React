import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../utils/firebase';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const Main = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        toast.success('You successully signed in');
        // console.log(user);
      } else {
        setUser(null);
        // toast.error('You successully signed in');
      }
    });
  }, []);

  return <>{user ? <Dashboard /> : <Login />}</>;
};

export default Main;
