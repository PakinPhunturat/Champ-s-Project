// app/pojek/action/updateFinish.ts
'use server'

import { SERVER_URL } from "@/app/constant"

export default async function updateFinish(id: number, finish: boolean) {
  const res = await fetch(`${SERVER_URL}/todo/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ finish }),
  })

  if (!res.ok) {
    const error = await res.json()
    console.error("Error updating finish:", error)
    throw new Error("Failed to update finish")
  }

  return await res.json()
}
