'use client'
 
import deleteCustomer from './_actions/deleteCustomer'

export default function DeleteButton({ id }: { id: number }) { 
  const handleDelete = async () => {
    try {
        console.log("Delete id: ", id); 
        await deleteCustomer(id);
    }
    catch (error) {
        console.error("Error deleting customer:", error)
        alert("Error deleting customer")
    }    
  }

  return (
    <button
      className='p-2 bg-red-100 rounded shadow-md border'
      onClick={handleDelete}
    >
      Delete
    </button>
  )
}
