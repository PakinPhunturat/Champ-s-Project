'use server'

import { SERVER_URL } from "@/app/constant"

const addtask = async (prevState: unknown, formData: FormData) => {

    const data = {
        title: formData.get("title") as string,
        finish: formData.get("finish") === "on",
        position: formData.get("position") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
    }
    console.log("data: ", data)

    const res = await fetch(`${SERVER_URL}/customer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const json = await res.json();
    console.log("json: ", json)
    if (res.ok) {
        console.log("Customer added successfully");
        return {
            error: '',
            message: 'Customer added successfully',
            data,
        }
    } else {
        console.error("Error adding customer:", json);
        return {
            error: 'Error adding customer',
            message: '',
            data,
        }
    }
}

export default addtask;