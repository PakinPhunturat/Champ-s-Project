"use client"

import { useState } from "react"
import { Star, Settings, Trash2, Plus, Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Link from "next/link"

export default function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "wash dish",
      completed: true,
      time: "13:22",
      starred: true,
      dueTime: "13:20",
      description: "",
    },
    {
      id: 2,
      text: "rankup marvel",
      completed: false,
      time: "13:42",
      starred: true,
      dueTime: "13:40",
      description: "we'll reach grand master today",
    },
  ])
  // const [newTask, setNewTask] = useState("")
  const [expandedTaskId, setExpandedTaskId] = useState<number | null>(null)

  // Notifications
  const notifications = [
    { id: 1, time: "13:20", message: 'the "wash dish" has reach due date', taskId: 1 },
    { id: 2, time: "13:40", message: 'you have 24 hour before due date of "rankup marvel"', taskId: 2 },
  ]

  // const addTask = () => {
  //   if (newTask.trim() !== "") {
  //     const now = new Date()
  //     const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`
  //     setTasks([
  //       ...tasks,
  //       {
  //         id: Date.now(),
  //         text: newTask,
  //         completed: false,
  //         time,
  //         starred: false,
  //         dueTime: "14:00",
  //         description: "",
  //       },
  //     ])
  //     setNewTask("")
  //   }
  // }

  const toggleComplete = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const toggleStar = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, starred: !task.starred } : task)))
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTaskExpand = (id: number) => {
    setExpandedTaskId(expandedTaskId === id ? null : id)
  }

  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-md shadow-sm bg-white">
      {/* Browser-like header */}

      {/* Todo list header - update the Bell icon with a Popover */}
      <div className="flex justify-between items-center p-2 border-b border-gray-300">
        <div className="font-medium">to-do list</div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {notifications.length}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="bg-white border border-gray-200 rounded-md shadow-md">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-2 border-b border-gray-200 flex items-start">
                  <div className="text-xs text-gray-500 mr-2 min-w-[40px]">{notification.time}</div>
                  <div className="text-sm flex-1">{notification.message}</div>
                  <Button variant="ghost" size="icon" className="h-6 w-6 ml-2">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Tasks */}
      <div className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <div key={task.id} className="p-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleTaskExpand(task.id)}>
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleComplete(task.id)}
                  className={task.completed ? "bg-green-600 text-white border-green-600" : ""}
                  onClick={(e) => e.stopPropagation()} // Prevent task expansion when clicking checkbox
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation() // Prevent task expansion when clicking star
                    toggleStar(task.id)
                  }}
                >
                  <Star className={`w-4 h-4 ${task.starred ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
                </button>
                <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <span className="text-xs">{task.time}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={(e) => e.stopPropagation()} // Prevent task expansion when clicking settings
                >
                  <Settings className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={(e) => {
                    e.stopPropagation() // Prevent task expansion when clicking delete
                    removeTask(task.id)
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Description and subtasks - only show when task is expanded */}
            {expandedTaskId === task.id && task.description.length > 0 && (
              <div className="ml-6 mt-1">
                {task.description && <div className="text-xs text-gray-600 mb-1">{task.description}</div>}
                <div className="text-right text-xs text-gray-400 mt-1">written: 11.30 23/12/25</div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add task button */}
      <div className="p-3 border-t border-gray-300">
        <div className="flex items-center">
          
          
        
        </div>
      </div>
      
      <div>
      <Link className='p-2 bg-blue-200 rounded-md hover:bg-blue-700 hover:text-white' href="/pojek/new">
                Add New
      </Link>
      </div>

    </div>
  )
}