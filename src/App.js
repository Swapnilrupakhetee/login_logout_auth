
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const{isLoading,error} = useAuth0();
  return (
    <div className="App">
      <h1>Autho0 Login</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading..</p>}
      {!error && !isLoading &&(
        <>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
        </>

      )}
      
    </div>
  );
}

export default App;
