'use client'

import { redirect } from "next/navigation"
import { useActionState } from "react"
import loginFormUser from "./loginFromUser"

export default function Login() {

    const [state, action] = useActionState( loginFormUser, {
        error: '',
        message: '',
        data: {
            email: '',
            password: '',
        },
    })
    const { email, password } = state.data

    if (state.message) {
        redirect('/customer')
    }

    return (<div className="flex flex-col pt-16 items-center">
        <form action={action} className="w-full max-w-sm p-8 space-y-4 border rounded-lg shadow-md bg-orange-100">
            <h1 className="text-xl font-bold">Login</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input className="w-full p-2 rounded bg-blue-50 border-2 border-black" type="email" name="email" defaultValue={email} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input className="w-full p-2 rounded bg-blue-50 border-2 border-black" type="password" name="password" defaultValue={password} />
            </div>
            <div>
                <button type="submit" className="px-4 py-2 bg-blue-200 rounded mr-2 border-2 border-black">Login</button>
            </div>
        </form>
    </div>)
}