'use server'

import { SERVER_URL } from "@/app/constant"

const addtask = async (prevState: unknown, formData: FormData) => {

    const data = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        dueDate: formData.get("dueDate") as string,
        priority: false,
        finish: false,
    }
    console.log("data: ", data)

    const res = await fetch(`${SERVER_URL}/todo`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const json = await res.json();
    console.log("json: ", json)
    if (res.ok) {
        console.log("Task added successfully");
        return {
            error: '',
            message: 'Task added successfully',
            data,
        }
    } else {
        console.error("Error adding task:", json);
        return {
            error: 'Error adding task',
            message: '',
            data,
        }
    }
}

export default addtask;