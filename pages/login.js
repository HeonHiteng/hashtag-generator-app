// pages/login.js

import React from 'react';
import { auth, googleAuthProvider } from 'C:/Users/kelvi/Downloads/hashtag-generator-app/firebase.js'; // Import Firebase auth and Google Auth Provider
import styles from './login.module.css';

function LoginPage() {
  const handleGoogleLogin = async () => {
    try {
      // Sign in with Google using Firebase's built-in method
      await auth.signInWithPopup(googleAuthProvider);
      // User is logged in with Google, you can redirect to a protected page.
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h1>Login with Google</h1>
        <form>
          <button className={styles.loginButton} onClick={handleGoogleLogin}>
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

