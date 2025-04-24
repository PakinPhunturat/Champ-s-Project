// import { useState } from "react"
import { Star, Plus } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"
import taskType from "./task.type"
import { SERVER_URL } from "../constant"
import DeleteButton from "./DeleteButton"

export default async function TodoList() {
  const res = await fetch(`${SERVER_URL}/todo`)

    const tasks: taskType[] = await res.json()


  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-md shadow-sm bg-white">
      {/* Browser-like header */}

      {/* Todo list header - update the Bell icon with a Popover */}
      <div className="flex justify-between items-center p-2 border-b border-gray-300 ">
        <div className="font-medium">To-Do List</div>
      </div>

      {/* Tasks */}
      <div className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <div key={task.id} className="p-2">
            <div className="flex items-center justify-between cursor-pointer" >
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={task.finish}
                  className={task.finish ? "bg-green-600 text-white border-green-600" : ""}
                />
                <button>
                  <Star className={`w-4 h-4 ${task.priority ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
                </button>
                <span className={task.finish ? "line-through text-gray-500" : ""}>{task.title}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
              <Link
                                    className='p-2 bg-green-100 rounded-md border shadow-md'
                                    href={`/pojek/edit/${task.id}`}>
                                    Edit
                                </Link>
      
                <DeleteButton id={task.id} />
              </div>
            </div>

            {/* Description and subtasks - only show when task is expanded */}
              <div className="ml-6 mt-1">
                {task.description && <div className="text-xs text-gray-600 mb-1">{task.description}</div>}
                <div className="text-right text-xs text-gray-400 mt-1">written: 11.30 23/12/25</div>
              </div>
          </div>
        ))}
      </div>

      {/* Add task button */}
      <div className="p-3 border-t border-gray-300">
        <div className="flex items-center">
        </div>
      </div>
      
      <div>
      <Link className='m-2 p-2 border border-gray-300 rounded-md flex justify-center' href="/pojek/new">
        <Plus className="h-6 w-6" />
      </Link>
      </div>

    </div>
  )
}