'use client'
import React, { useState } from "react";
import signIn from "C:/Users/kelvi/Downloads/hashtag-generator-app/firebase/auth/signin.js";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "C:/Users/kelvi/Downloads/hashtag-generator-app/styles/signin.module.css";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Define the router object

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error);
        }

        // else successful
        console.log(result);
        router.push("/"); // Use router.push to navigate to the "/admin" page after successful sign-in
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.yellowBox}> {/* Add a yellow box wrapper */}
                <div className={styles.formWrapper}>
                    <h1 className={`${styles.mt60} ${styles.mb30}`}>Sign in</h1>
                    <form onSubmit={handleForm} className={styles.form}>
                        <label htmlFor="email">
                            <p>Email</p>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@mail.com"
                                className={styles.input} // Apply input style
                            />
                        </label>
                        <label htmlFor="password">
                            <p>Password</p>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                className={styles.input} // Apply input style
                            />
                        </label>
                        <button type="submit" className={styles.blueButton}>Sign In</button>
                        <p>
                            Don't have an account?{' '}
                            <Link href="/signuppage">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;