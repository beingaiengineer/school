import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth, signOut } from '../firebase';

export default function AuthProfileNavbarItem() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged((u) => setUser(u));
  }, []);

  if (!user) return null;

  return (
    <div className="auth-profile-wrapper">
      <img 
        className="auth-profile-avatar"
        src={user.photoURL || 'https://www.gravatar.com/avatar/?d=mp'} 
        alt={user.displayName || 'User Profile'} 
        referrerPolicy="no-referrer"
      />
      <div className="auth-profile-menu">
        <div className="auth-profile-header">
          <div className="auth-profile-name">{user.displayName || 'Engineer'}</div>
          <div className="auth-profile-email">{user.email}</div>
        </div>
        <button className="auth-profile-signout" onClick={() => signOut(auth)}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
