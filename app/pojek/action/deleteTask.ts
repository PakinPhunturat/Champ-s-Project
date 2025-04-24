'use server'
import { SERVER_URL } from "@/app/constant"
import { revalidatePath } from 'next/cache'  
import { redirect } from 'next/navigation'

const deleteTask = async (id: number) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3NDQ5NTMyNDMsImV4cCI6MTc0NTAzOTY0M30.VsqsENlgoLKalkR0Z0DiRhmXqIHTk24D_wucz_RcsUM"
    
    console.log("id: ", id)
    const res = await fetch(`${SERVER_URL}/todo/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const json = await res.json();
    console.log("json: ", json)
    if (res.ok) {
        console.log("Task deleted successfully")
        revalidatePath('/pojek')  
    } else {
        console.error("Error deleting Task:", json); 
        redirect('/pojek?error=Error deleting task');
    }
}

export default deleteTask