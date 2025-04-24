'use client'

import {  useParams } from "next/navigation"
import { useEffect, useState } from "react" 
import EditForm from "./EditForm"
import taskType from "../../task.type"

export default function EditCustomer() {
    const { id } = useParams()
    const [taskData, setTaskData] = useState<taskType | null>(null)

    useEffect(() => {
        const fetchTask = async (id: string) => {
            const res = await fetch(`http://localhost:3000/todo/${id}`)
            const data = await res.json()
            setTaskData(data)
        }

        if (typeof id === 'string') {
            fetchTask(id)
        }
    }, [id])

    if (!taskData) return <div>Loading...</div>

    // Pass fetched data to the form
    return <EditForm task={taskData} />
}
