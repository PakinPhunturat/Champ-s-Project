'use client'

import {  useParams } from "next/navigation"
import { useEffect, useState } from "react" 
import CustomerType from '../../customer.type'
import EditForm from "./EditForm"

export default function EditCustomer() {
    const { id } = useParams()
    const [customerData, setCustomerData] = useState<CustomerType | null>(null)

    useEffect(() => {
        const fetchCustomer = async (id: string) => {
            const res = await fetch(`http://localhost:3020/customer/${id}`)
            const data = await res.json()
            setCustomerData(data)
        }

        if (typeof id === 'string') {
            fetchCustomer(id)
        }
    }, [id])

    if (!customerData) return <div>Loading...</div>

    // Pass fetched data to the form
    return <EditForm customer={customerData} />
}
