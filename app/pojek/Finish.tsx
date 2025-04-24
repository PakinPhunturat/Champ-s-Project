'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { useTransition } from "react"
import updateFinish from "./action/updateFinish"

export default function FinishCheckbox({ id, finish }: { id: number, finish: boolean }) {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(() => {
      updateFinish(id, !finish)
    })
  }

  return (
    <Checkbox
      checked={finish}
      onClick={handleClick} // ✅ `onClick` ทำงานได้ใน Client Component
      disabled={isPending}
    />
  )
}
