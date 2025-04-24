'use server'
import { token } from "@/utils/manageCookie"
import { cookies } from "next/headers" 
import { SERVER_URL } from "../constant"

export default async function loginFormUser(prevState: unknown, formData: FormData) {
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }
    console.log("data: ", data)

    const res = await fetch(`${SERVER_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const json = await res.json()
    console.log("json: ", json)

    if (res.ok) {
        console.log("Login successfully");

        // Store token in secure, HttpOnly cookie 
        (await cookies()).set({
            name: 'access_token',
            value: json.access_token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        })

        console.log("Token set in cookie:", await token());

        return {
            error: '',
            message: 'Login successfully',
            data,
        }
    } else {
        console.error("Error Login:", json);
        return {
            error: 'Error Login',
            message: '',
            data,
        }
    }
}