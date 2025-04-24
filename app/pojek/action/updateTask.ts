'use server'

import { SERVER_URL } from "@/app/constant"

const updateTask = async (prevState: unknown, formData: FormData) => {

    const data = {
        id: formData.get("id") as string,
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        dueDate: formData.get("dueDate") as string,
        priority: false,
        finish: false,
    }
    console.log("data: ", data)

    const res = await fetch(`${SERVER_URL}/todo/${data.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const json = await res.json();
    console.log("json: ", json)
    if (res.ok) {
        console.log("Task edit successfully");
        return {
            error: '',
            message: 'Task edit successfully',
            data,
        }
    } else {
        console.error("Error editing Task:", json);
        return {
            error: 'Error editing Task',
            message: '',
            data,
        }
    }
}

export default updateTask;