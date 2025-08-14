        import React from 'react'

export default function ChatBubble({ role, text }:{ role:'user'|'assistant'; text:string }){
  const cls = role==='user' ? 'self-end bg-gray-100 text-gray-900' : 'self-start bg-primary-50 text-gray-900'
  return (<div className={`p-3 my-2 rounded-lg max-w-full ${cls}`}><div className="text-sm whitespace-pre-wrap">{text}</div></div>)
}
