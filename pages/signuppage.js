"use client"
// SignUp.js
import React, { useState } from "react";
import signUp from "C:/Users/kelvi/Downloads/hashtag-generator-app/firebase/auth/signup.js";
import Link from 'next/link';
import { useRouter } from 'next/router';

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
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="mt-60 mb-30">Sign up</h1>
                <form onSubmit={handleForm} className="form">
                    <label htmlFor="email">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                    </label>
                    <label htmlFor="password">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                    </label>
                    <button type="submit">Sign up</button>
                    <p>
                        Already have an account?{' '}
                        <Link href="/signinpage">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
