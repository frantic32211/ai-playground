        import React from 'react'
        import { useApp } from '../contexts/AppContext'

        export default function ModelSelector(){
  const { models, modelsLoading, modelsError, currentModel, setCurrentModel } = useApp()
  if(modelsLoading) return <div>Loading models…</div>
  if(modelsError) return <div className="text-red-600">{modelsError}</div>
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Model</label>
      <select value={currentModel} onChange={(e)=>setCurrentModel(e.target.value)} className="w-full rounded border px-2 py-1">
        {models.map(m=> <option key={m.id} value={m.id}>{m.name} ({m.tokens})</option>)}
      </select>
    </div>
  )
}
