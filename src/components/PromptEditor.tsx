        import React, { useState } from 'react'
import { useApp } from '../contexts/AppContext'

export default function PromptEditor(){
  const { addUserMessage } = useApp()
  const [value, setValue] = useState('')
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Prompt</label>
      <textarea value={value} onChange={(e)=>setValue(e.target.value)} rows={5} className="w-full rounded border p-2" placeholder="Write your prompt here..." />
      <div className="mt-2 flex gap-2">
        <button onClick={()=>{ addUserMessage(value); setValue('') }} className="px-3 py-1 rounded bg-primary-500 text-white">Run</button>
        <button onClick={()=>setValue('')} className="px-3 py-1 rounded border">Clear</button>
      </div>
    </div>
  )
}
