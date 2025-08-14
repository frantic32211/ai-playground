        import React from 'react'
import { useApp } from '../contexts/AppContext'
import ChatBubble from './ChatBubble'

export default function ChatArea(){
  const { conversation } = useApp()
  return (
    <div className="border rounded p-3 max-h-96 overflow-auto">
      {conversation.length===0 ? <div className="text-sm text-gray-500">No messages yet.</div> : conversation.map((m,i)=>(<ChatBubble key={i} role={m.role} text={m.text} />))}
    </div>
  )
}
