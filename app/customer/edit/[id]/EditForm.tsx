'use client'

import { redirect } from "next/navigation"
import { useActionState } from "react"
import updateCustomer from "../../_actions/updateCustomer"
import CustomerType from "../../customer.type"

export default function EditForm({ customer }: { customer: CustomerType }) {
    const [state, action] = useActionState(updateCustomer, {
        error: '',
        message: '',
        data: {
            id: customer.id || '',
            name: customer.name || '',
            isActive: customer.isActive || false,
            position: customer.position || '',
            email: customer.email || '',
            phone: customer.phone || '',
        },
    })

    if (state.message) {
        redirect('/customer')
    }

    const { id, name, isActive, position, email, phone } = state.data

    return (
        <>
            <div>{JSON.stringify(customer)}</div>
            <form
                className="max-w-md border mx-auto p-6 mt-8 space-y-4"
                action={action}
            >
                <h1 className="text-xl font-bold">Edit Customer</h1>
                {state.error && (
                    <div className="text-red-500">Error: {state.error}</div>
                )}
                <div>
                    <input type="hidden" name="id" value={id} />
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
                        type="text"
                        name="phone"
                        defaultValue={phone}
                        placeholder="Phone" />
                </div>
                <div>
                    <button
                        className="border px-4 py-2 rounded bg-blue-100"
                        type="submit">Update
                    </button>
                </div>
            </form>
        </>
    )
}
