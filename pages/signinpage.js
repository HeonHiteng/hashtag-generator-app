'use client'
import React, { useState } from "react";
import signIn from "C:/Users/kelvi/Downloads/hashtag-generator-app/firebase/auth/signin.js";
import Link from 'next/link';
import { useRouter } from 'next/router';

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
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="mt-60 mb-30">Sign in</h1>
                <form onSubmit={handleForm} className="form">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                    </label>
                    <button type="submit">Sign in</button>
                    <p>
                        Don't have an account?{' '}
                        <Link href="/signuppage">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignIn;