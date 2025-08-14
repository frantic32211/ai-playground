import type { NextApiRequest, NextApiResponse } from 'next'

const MODELS = [
  { id: 'gpt-3.5', name: 'GPT-3.5 Turbo', tokens: 4096 },
  { id: 'gpt-4', name: 'GPT-4', tokens: 8192 },
  { id: 'custom-1', name: 'Custom Model A', tokens: 2048 }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  setTimeout(() => {
    if (Math.random() < 0.03) {
      res.status(500).json({ error: 'Simulated error fetching models' })
      return
    }
    res.status(200).json({ data: MODELS })
  }, 300)
}
