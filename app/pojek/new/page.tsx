'use client'

import { redirect } from "next/navigation"
import { useActionState } from "react"
import addtask from "../action/addtask"

export default function AddNew() {

    const [state, action] = useActionState(addtask, {
        error: '',
        message: '',
        data: {
            title: '',
            description: '',
            dueDate: '',
            priority: false,
            finish: false,

        },
    })

    const { id, title, description, dueDate, priority, finish} = state.data


    if (state.message) {
        redirect('/pojek')
    }

    return (
        <>
            <form
                className="max-w-md border mx-auto p-6 space-y-4 bg-white"
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
                        type="text" name="dueDate"
                        defaultValue={dueDate}
                        placeholder="DD/MM/YY" />
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


