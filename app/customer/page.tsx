import Link from 'next/link'
import CustomerType from './customer.type'
import DeleteButton from './DeleteButton'
import { SERVER_URL } from '../constant'

export default async function CustomerPage() {
    const res = await fetch(`${SERVER_URL}/customer`)

    const customers: CustomerType[] = await res.json()

    return (
        <div className="w-[90%] mx-auto min-h-[80vh] p-8">
            <h1 className='text-xl font-bold'>Customer</h1>
            <div className='flex flex-wrap gap-6 mb-2'>
                {
                    customers.map((customer, index) => (
                        <div
                            className={`flex flex-col justify-between mb-6 min-w-96 min-h-52 p-4 my-2 rounded-lg shadow-lg bg-white`}
                            key={customer.id}>
                            <div>
                                <div className='flex'>
                                    <span>{index + 1} </span>
                                    <span className='ml-2 mr-auto'>{customer.name}</span>
                                    <span className={`${customer.isActive ? "bg-yellow-200" : "bg-orange-200"} border border-black bg-yellow-100 px-2 rounded-md`}>{customer.isActive ? "Active" : "In active"}</span>
                                </div>
                                <div>{customer.position}</div>
                                <div>{customer.email}</div>
                                <div>{customer.phone}</div>
                            </div>

                            <div className='mt-4 flex justify-end gap-2'>
                                <Link
                                    className='p-2 bg-green-100 rounded-md border shadow-md'
                                    href={`/customer/edit/${customer.id}`}>
                                    Edit
                                </Link>
                                <DeleteButton id={customer.id} /> {/* Client interaction */}
                            </div>
                        </div>
                    ))
                }
            </div>

            <Link className='p-2 bg-blue-200 rounded-md hover:bg-blue-700 hover:text-white' href="/customer/new">
                Add New
            </Link>
        </div>
    )
}
