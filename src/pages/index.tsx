import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Playground</title>
      </Head>
      <Layout>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to AI Playground</h2>
          <p className="mb-4">Use the sidebar to choose a model or visit the Chat page.</p>
          <div className="space-x-2">
           <Link href="/chat" className="px-4 py-2 bg-primary-500 text-white rounded">Open Chat</Link>
           <Link href="/templates" className="px-4 py-2 border rounded">Templates</Link>
          </div>
        </div>
      </Layout>
    </>
  )
}
