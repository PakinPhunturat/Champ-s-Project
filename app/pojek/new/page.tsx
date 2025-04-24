'use client'

import { redirect } from "next/navigation"
import { useActionState } from "react"

export default function AddNew() {

    const [state, action] = useActionState(addNewTask, {
        error: '',
        message: '',
        data: {
            title: '',
            description: '',
            duedate: '',
        },
    })

    const { title, description, duedate} = state.data


    if (state.message) {
        redirect('/pojek')
    }

    return (
        <>
            <form
                className="max-w-md border mx-auto p-6 mt-8 space-y-4"
                action={action}
            >
                <h1 className="text-xl font-bold">Add New Task</h1>
                {(state.error) &&
                    (<div className="text-red-500">Error: {state.error} </div>)}

                <div>
                    <label htmlFor="position">Title: </label>
                    <input
                        className="border-2 p-2 rounded w-full"
                        type="text"
                        name="title"
                        placeholder="Title"
                        defaultValue={title}
                    />
                </div>

                <div>
                    <label htmlFor="description">Desciption: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="text"
                        name="description"
                        defaultValue={description}
                        placeholder="desciption" />
                </div>
                
                <div>
                    <label htmlFor="duedate">Due Date: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="text" name="phone"
                        defaultValue={duedate}
                        placeholder="Phone" />
                </div>
                <div>
                    <button
                        className="border px-4 py-2 rounded bg-blue-100"
                        type="submit">Add
                    </button>
                    <button
                        className="border px-4 py-2 rounded bg-red-100 ml-2"
                        type="reset">reset</button>
                </div>
            </form>
        </>
    )
}

function addNewTask(state: { error: string; message: string; data: { title: string; description: string; duedate: string } }): { error: string; message: string; data: { title: string; description: string; duedate: string } } | Promise<{ error: string; message: string; data: { title: string; description: string; duedate: string } }> {
    throw new Error("Function not implemented.")
}

