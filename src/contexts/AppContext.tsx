import React, { createContext, useContext, useEffect, useState } from 'react'

export type Model = { id: string; name: string; tokens: number }
export type Template = { id: string; name: string; prompt: string }

type ParameterState = { temperature: number; maxTokens: number; topP: number }

type AppContextType = {
  theme: 'light'|'dark'
  setTheme: (t:'light'|'dark') => void
  models: Model[]; modelsLoading: boolean; modelsError?: string
  templates: Template[]; templatesLoading: boolean; templatesError?: string
  currentModel?: string; setCurrentModel: (id:string)=>void
  params: ParameterState; setParams: (p:Partial<ParameterState>)=>void
  conversation: { role: 'user'|'assistant'; text: string }[]
  addUserMessage: (text:string)=>void
  clearConversation: ()=>void
}

const AppContext = createContext<AppContextType | undefined>(undefined)
const LOCAL_THEME_KEY = 'ai_playground_theme'

export const AppProvider: React.FC<{children: React.ReactNode}> = ({children})=>{
  const [theme, setThemeState] = useState<'light'|'dark'>(() => {
    try {
      if (typeof window === 'undefined') return 'light'
      const saved = localStorage.getItem(LOCAL_THEME_KEY) as 'light'|'dark'|null
      if (saved) return saved
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? 'dark' : 'light'
    } catch { return 'light' }
  })

  useEffect(()=>{ try{ localStorage.setItem(LOCAL_THEME_KEY, theme) }catch{}; if(typeof document !== 'undefined') document.documentElement.setAttribute('data-theme', theme)}, [theme])

  const [models, setModels] = useState<Model[]>([])
  const [modelsLoading, setModelsLoading] = useState(true)
  const [modelsError, setModelsError] = useState<string|undefined>(undefined)

  const [templates, setTemplates] = useState<Template[]>([])
  const [templatesLoading, setTemplatesLoading] = useState(true)
  const [templatesError, setTemplatesError] = useState<string|undefined>(undefined)

  const [currentModel, setCurrentModel] = useState<string|undefined>(undefined)
  const [params, setParamsState] = useState<ParameterState>({ temperature:0.7, maxTokens:512, topP:1 })
  const [conversation, setConversation] = useState<{ role: 'user'|'assistant'; text: string }[]>([])

  useEffect(()=> {
    let aborted = false
    setModelsLoading(true)
    fetch('/api/models').then(r=>r.json()).then(d=>{ if(aborted) return; setModels(d.data||[]); if(d.data && d.data[0]) setCurrentModel(d.data[0].id)}).catch(e=>{ if(aborted) return; setModelsError(e?.message||'Failed to load models') }).finally(()=>{ if(!aborted) setModelsLoading(false) })
    setTemplatesLoading(true)
    fetch('/api/templates').then(r=>r.json()).then(d=>{ if(aborted) return; setTemplates(d.templates||[]) }).catch(e=>{ if(aborted) return; setTemplatesError(e?.message||'Failed to load templates') }).finally(()=>{ if(!aborted) setTemplatesLoading(false) })
    return ()=>{ aborted = true }
  }, [])

  const setParams = (p:Partial<ParameterState>) => setParamsState(prev=>({ ...prev, ...p }))

  const addUserMessage = (text:string) => {
    if(!text.trim()) return
    setConversation(prev=>[...prev, { role: 'user', text }])
    setTimeout(()=> { setConversation(prev=>[...prev, { role:'assistant', text: `Simulated: ${text}` }]) }, 600 + Math.round(Math.random()*800))
  }
  const clearConversation = ()=> setConversation([])

  return <AppContext.Provider value={{ theme, setTheme:setThemeState, models, modelsLoading, modelsError, templates, templatesLoading, templatesError, currentModel, setCurrentModel, params, setParams, conversation, addUserMessage, clearConversation }}>{children}</AppContext.Provider>
}

export const useApp = ()=> { const c = useContext(AppContext); if(!c) throw new Error('useApp must be used inside AppProvider'); return c }
