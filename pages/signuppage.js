'use client'
import React, { useState } from "react";
import signUp from "C:/Users/kelvi/Downloads/hashtag-generator-app/firebase/auth/signup.js";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "C:/Users/kelvi/Downloads/hashtag-generator-app/styles/signin.module.css"; // Import styles from sign-in page

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Define the router object

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error);
        }

        // else successful
        console.log(result);
        router.push("/signinpage"); // Use router.push to navigate to the "/signinpage" after successful sign-up
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.yellowBox}> {/* Use the same yellow box style */}
                <div className={styles.formWrapper}>
                    <h1 className={`${styles.mt60} ${styles.mb30}`}>Sign up</h1> {/* Use similar heading style */}
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
                                className={styles.input} // Use the same input style
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
                                className={styles.input} // Use the same input style
                            />
                        </label>
                        <button type="submit" className={styles.blueButton}>Sign up</button> {/* Use the same blue button style */}
                        <p>
                            Already have an account?{' '}
                            <Link href="/signinpage">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;