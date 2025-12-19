import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './signup.module.css'; // Assuming you'll create this CSS module

function SignupPage() {
  return (
    <Layout title="Sign Up">
      <main className={clsx('hero hero--primary', styles.signupContainer)}>
        <div className={clsx('card', styles.signupCard)}>
          <h2>Sign Up</h2>
          <form className={styles.signupForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button type="submit" className="button button--primary">Sign Up</button>
          </form>
          <p className={styles.loginText}>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default SignupPage;
