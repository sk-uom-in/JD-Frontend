'use client';

import { useAuth0 } from '@auth0/auth0-react';

export default function LoginButton() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button className="btn btn-primary" disabled>
        Loading...
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => logout({ 
          logoutParams: { 
            returnTo: window.location.origin 
          }
        })}
      >
        Log Out
      </button>
    );
  }

  return (
    <button 
      className="btn btn-primary" 
      onClick={() => loginWithRedirect({
        appState: { returnTo: window.location.pathname }
      })}
    >
      Log In
    </button>
  );
}