import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../App.css'

const Header: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div style={{ marginBottom: 20, padding:'50px', backgroundColor: 'black'}}>
      {isAuthenticated ? (
        <>
          <span>Welcome, {user?.name}</span>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{ padding:'10px', fontSize:'50px', fontWeight:'bolder'}}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()} style={{ padding:'10px', fontSize:'50px', fontWeight:'bolder'}} >Login</button>
      )}
    </div>
  );
};

export default Header;