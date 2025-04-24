'use client'

import { redirect } from "next/navigation"
import addNewCustomer from "../_actions/addNewCustomer"
import { useActionState } from "react"

export default function AddNew() {

    const [state, action] = useActionState(addNewCustomer, {
        error: '',
        message: '',
        data: {
            name: '',
            isActive: false,
            position: '',
            email: '',
            phone: '',
        },
    })

    const { name, isActive, position, email, phone } = state.data


    if (state.message) {
        redirect('/customer')
    }

    return (
        <>
            <form
                className="max-w-md border mx-auto p-6 mt-8 space-y-4"
                action={action}
            >
                <h1 className="text-xl font-bold">Add New Customer</h1>
                {(state.error) &&
                    (<div className="text-red-500">Error: {state.error} </div>)}

                <div>
                    <input
                        className="border-2 p-2 rounded w-full"
                        type="text"
                        name="name"
                        placeholder="Name"
                        defaultValue={name}
                    />
                </div>

                <div>
                    <input type="checkbox" name="isActive" defaultChecked={isActive} />
                    <label className="ml-2">Is Active</label>
                </div>
                <div>
                    <label htmlFor="position">Position: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="text"
                        name="position"
                        defaultValue={position}
                        placeholder="Position" />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="email" 
                        name="email"
                        defaultValue={email}
                        placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input
                        className="border p-2 rounded w-full"
                        type="text" name="phone"
                        defaultValue={phone}
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
