        import React, { useEffect, useState } from 'react'

export default function TemplateList(){
  const [templates, setTemplates] = useState<any[]>([])
  useEffect(()=>{ fetch('/api/templates').then(r=>r.json()).then(d=>setTemplates(d.templates||d)) }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {templates.map(t=> (<div key={t.id} className="p-3 border rounded"><h3 className="font-medium">{t.name || t.title}</h3><p className="text-sm text-gray-600 mt-2">{t.prompt || t.content}</p></div>))}
    </div>
  )
}
