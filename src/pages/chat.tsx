import React from 'react'
import Layout from '../components/Layout'
import ChatArea from '../components/ChatArea'
import ModelSelector from '../components/ModelSelector'
import PromptEditor from '../components/PromptEditor'
import ParametersPanel from '../components/ParametersPanel'

export default function ChatPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="md:col-span-1 border rounded p-3">
          <ModelSelector />
        </aside>
        <main className="md:col-span-2 space-y-4">
          <PromptEditor />
          <ChatArea />
        </main>
        <aside className="md:col-span-1 border rounded p-3">
          <ParametersPanel />
        </aside>
      </div>
    </Layout>
  )
}
