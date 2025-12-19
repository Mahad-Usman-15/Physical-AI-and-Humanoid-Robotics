import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './login.module.css';

function LoginPage() {
  return (
    <Layout title="Login">
      <main className={clsx('hero hero--primary', styles.loginContainer)}>
        <div className={clsx('card', styles.loginCard)}>
          <h2>Login</h2>
          <form className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="button button--primary">Login</button>
          </form>
          <p className={styles.signupText}>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default LoginPage;
