# StackJack

> A randomly-dealt tech stack + AI-generated app idea, every time.

[Live demo](https://stack-jack.vercel.app)

## Preview

<img width="1222" height="776" alt="image" src="https://github.com/user-attachments/assets/d27c9cf4-c4ae-4dca-8722-6c608d6d1dc1" />

## What is it?

StackJack deals you a random tech stack (frontend, styling, backend, database, deploy) and sends it to an AI to generate a unique app idea. Think of it as a prompt engine for side projects.

## Why?

I was tired of decision paralysis when starting new projects. Instead of agonising over what to build and what tools to use, I wanted a single button that hands you both: here's your stack, here's your idea, go build it.


## How it works

1. Press **Generate Idea!**
2. Five cards are dealt with random picks from expanded pools (16+ options per category)
3. The stack is sent to a pluggable AI provider (Groq, OpenAI, OpenRouter, or Gemini)
4. The AI returns an app name and description tailored to the stack
5. Cards fly into view with a deal animation

Switch providers by setting `AI_PROVIDER` in your `.env` — no code changes needed.


## Tech Stack

- SvelteKit
- TypeScript
- Tailwind CSS
- Vercel (adapter)
- AI providers: Groq / OpenAI / OpenRouter / Gemini


## Getting started

```bash
git clone https://github.com/wwwillgunnn/stack-jack.git
cd stack-jack
pnpm install
```

Create a `.env` file:

```env
AI_PROVIDER=groq
GROQ_API_KEY=gsk_...
```

Then start the dev server:

```bash
pnpm run dev --open
```

To create a production version of your app:

```sh
pnpm run build
```

You can preview the production build with `pnpm run preview`.
