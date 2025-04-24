'use client';

import { useActionState } from "react";
import registerUser from "./registerUser";
import { redirect } from "next/navigation";

export default function Register() {
    const [state, action] = useActionState(registerUser, {
        error: '',
        message: '',
        data: {
            username: '',
            email: '',
            password: '',
        }
    });

    if (state.message) {
        console.log("Register successfully");
        redirect('/customer');
    }

    return (
        <div className="flex flex-col pt-16 items-center min-h-screen py-2">
            {state.error && <div className="text-red-500">{state.error}</div>}
            <form action={action} className="w-full max-w-sm p-8 space-y-4 border rounded-lg shadow-md bg-orange-100">
                <h1 className="text-2xl font-bold">Register</h1>
                <div>
                    <label htmlFor="username">Name</label>
                    <input className="w-full px-2 p-2 rounded bg-blue-50 border-2 border-black" type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className="w-full px-2 p-2 rounded bg-blue-50 border-2 border-black" type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="w-full px-2 p-2 rounded bg-blue-50 border-2 border-black" type="password" name="password" />
                </div>
                <div>
                    <button
                        className="border-2 px-4 py-2 bg-blue-200 rounded mr-2 hover:bg-blue-700 hover:text-white"
                        type="submit">Register</button>
                </div>

            </form>
        </div>
    );
}