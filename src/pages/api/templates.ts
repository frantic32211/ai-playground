import type { NextApiRequest, NextApiResponse } from 'next'

const TEMPLATES = [
  { id: 't1', name: 'Summarize', prompt: 'Summarize the following text:' },
  { id: 't2', name: 'Translate to French', prompt: 'Translate to French:' },
  { id: 't3', name: 'Rewrite (concise)', prompt: 'Rewrite the following to be more concise:' }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  setTimeout(() => {
    if (Math.random() < 0.03) {
      res.status(500).json({ error: 'Simulated error fetching templates' })
      return
    }
    res.status(200).json({ templates: TEMPLATES })
  }, 250)
}
