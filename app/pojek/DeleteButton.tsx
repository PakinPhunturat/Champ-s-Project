'use client'

import { Button } from "@/components/ui/button";
import deleteTask from "./action/deleteTask";
import { Trash2 } from "lucide-react";


export default function DeleteButton({ id }: { id: number }) { 
  const handleDelete = async () => {
    try {
        console.log("Delete id: ", id); 
        await deleteTask(id);
    }
    catch (error) {
        console.error("Error deleting Task:", error)
        alert("Error deleting Task")
    }    
  }

  return (
    <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={handleDelete}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
  )
}
