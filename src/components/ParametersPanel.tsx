        import React from 'react'
import { useApp } from '../contexts/AppContext'

export default function ParametersPanel(){
  const { params, setParams } = useApp()
  return (
    <div>
      <label className="block text-sm font-medium mb-1">Temperature: {params.temperature.toFixed(2)}</label>
      <input type="range" min={0} max={1} step={0.01} value={params.temperature} onChange={(e)=>setParams({ temperature: Number(e.target.value) })} className="w-full" />
      <label className="block text-sm font-medium mt-3 mb-1">Max tokens: {params.maxTokens}</label>
      <input type="range" min={50} max={8192} step={50} value={params.maxTokens} onChange={(e)=>setParams({ maxTokens: Number(e.target.value) })} className="w-full" />
    </div>
  )
}
