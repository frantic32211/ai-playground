import React from 'react'
import Layout from '../components/Layout'
import TemplateList from '../components/TemplateList'

export default function TemplatesPage() {
  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Templates</h2>
        <TemplateList />
      </div>
    </Layout>
  )
}
