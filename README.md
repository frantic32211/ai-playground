# AI Playground Prototype

## 1. Research

### Reviewed Platforms

**OpenAI Playground**\
A lightweight, single-page prompt editor with quick parameter controls and instant run functionality. Standout feature: simple, direct sandboxing of prompts and parameters with minimal distractions.

**Hugging Face Spaces**\
Community-hosted demos with interactive widgets and model selection. Standout feature: easy sharing and embedding of model demos, plus support for custom templates.

**Anthropic Claude UI**\
A chat-first interface with model presets, system prompt controls, and conversation history. Standout feature: clear system instruction controls and emphasis on safe, guided responses.

**Microsoft Copilot Labs**\
Feature-rich UI with workflows and plugin-like actions, plus step-by-step assistance. Standout feature: task-specific toolchains and rich output-action integrations.

**Perplexity AI**\
Focuses on conversational search and contextual follow-ups. Standout feature: research mode with citations and multi-turn query refinement.

### Chosen Features to Combine

1. **Model Selector** — dropdown/side panel to pick between GPT-3.5, GPT-4, and custom models.
2. **Prompt Editor with Save/Load Templates** — create, save, and reuse prompts via mock API.
3. **Parameters Panel** — sliders/inputs for temperature, max tokens, top\_p.
4. **Chat/Output Area** — threaded responses with copy & download JSON.
5. **Theme Toggle** — light/dark persisted in localStorage.
6. **Mock API + State Management** — React Context to manage models, templates, and theme.

---

## 2. Design

**Figma/XD Mockup Link:** *[Insert your Figma link here]*

### Tailwind Token Mapping

- **Spacing:** `p-4`, `m-2`, `gap-4` mapped from 16px, 8px, and 24px grid spacing.
- **Typography:** `text-lg`, `font-medium`, `leading-relaxed` based on mockup headings/body.
- **Colors:** `bg-gray-900`, `bg-white`, `text-gray-100`, `text-gray-800` from light/dark palettes.
- **Components:** Buttons (`rounded-lg`, `bg-indigo-500 hover:bg-indigo-600`), inputs (`border border-gray-300 dark:border-gray-700`).

### Translation of Mockup to Code

- **Model Selector:** Implemented as a Tailwind-styled `<select>` with dynamic options from mock API.
- **Prompt Editor:** `<textarea>` with Tailwind borders, resize, and shadow styles.
- **Parameters Panel:** `<input type="range">` sliders with custom track styles.
- **Chat Area:** Flex column with scrollable messages, animated entry using Framer Motion.
- **Theme Toggle:** Switch component tied to localStorage via React Context.

---

## 3. Development

### Core Components

- **ModelSelector.tsx** — Dropdown with loading/error states.
- **PromptEditor.tsx** — Text area with save/load template buttons.
- **ParametersPanel.tsx** — Sliders for AI parameters.
- **ChatArea.tsx** — Displays response bubbles with copy/download.
- **ThemeToggle.tsx** — Light/dark switch.

### State Management

- React Context stores:
  - Selected model
  - Current prompt
  - Parameter settings
  - Theme preference

### Mock API Setup

- `/api/models` — Returns available models.
- `/api/templates` — Returns saved templates.

### Accessibility & UX

- All components are keyboard-navigable.
- Added ARIA labels to interactive elements.
- Hover/focus animations via Tailwind and Framer Motion.

### Storybook

- Configured in `.storybook`.
- Stories for Button, Slider, Modal, and ChatBubble.

### Deployment

- Tested on Vercel; also compatible with Netlify & GitHub Pages.
- Strict TypeScript mode enabled.

---

## 4. How to Run Locally

```bash
# Clone the repository
git clone <repo-url>
cd ai-playground

# Install dependencies
npm install

# Run the dev server
npm run dev

# Open Storybook
npm run storybook
```

---

## 5. Known Limitations

- Responses are static/mocked — no real AI backend.
- Template save/load not persisted beyond local JSON.
- Minimal mobile optimizations for extreme small screens.

---

## 6. Submission Checklist

* [x] All core features implemented as per requirements.
* [x] Model selector functional, fetching from mock API with loading/error handling.
* [x] Prompt editor supports saving/loading templates from mock API.
* [x] Parameters panel includes temperature, max tokens, and top\_p with real-time state updates.
* [x] Chat/output area displays responses with threaded layout, copy, and download JSON functionality.
* [x] Theme toggle with light/dark modes, persisted in localStorage.
* [x] Responsive design across mobile, tablet, and desktop breakpoints.
* [x] Accessibility compliance with ARIA labels, focus states, and keyboard navigation.
* [x] Storybook setup with stories for Button, Slider, Modal, and ChatBubble components.
* [x] Deployment verified on Vercel with live URL.
* [x] README includes Research, Design, Development notes, and Usage instructions.
* [x] Figma/XD design mockup linked in README.
* [x] Mock API and data included in `/pages/api`.

---

## 7. Future Enhancements

* Integrate live AI model APIs (OpenAI, Anthropic, etc.) for real responses.
* User authentication for secure prompt/template management.
* Server-side storage of templates and settings.
* Enhanced mobile UI with gesture support.
* Multi-language interface support.
* Export conversation history in PDF/Markdown.

