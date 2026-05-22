import type { FlavorDetail } from './types';

export const TERMINAL_DETAIL: FlavorDetail = {
  title: 'Claude en la terminal',
  sections: [
    {
      heading: 'cómo instalar',
      items: ['npm install -g @anthropic-ai/claude-code', 'Requiere Node 18+'],
    },
    {
      heading: 'comandos básicos',
      items: [
        'claude — sesión interactiva',
        'claude "prompt" — one-shot',
        'claude --help',
      ],
    },
    {
      heading: 'coste',
      items: ['Gratis instalar', 'Uso pesado puede consumir cuota rápido'],
    },
    {
      heading: 'para qué brilla',
      items: [
        'Agentes autónomos',
        'Automatizaciones',
        'Integraciones con otros scripts',
        'Uso desde SSH',
      ],
    },
  ],
  cta: { label: 'docs de Claude Code ↗', href: 'https://docs.claude.com/claude-code' },
};
