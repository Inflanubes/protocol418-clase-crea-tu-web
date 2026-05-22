import type { FlavorDetail } from './types';

export const WEB_DETAIL: FlavorDetail = {
  title: 'Claude en la web',
  sections: [
    {
      heading: 'cómo acceder',
      items: ['claude.ai/code', 'Cuenta Anthropic (free o Pro)'],
    },
    {
      heading: 'atajos clave',
      items: [
        'Cmd/Ctrl+K — buscar conversaciones',
        'Cmd/Ctrl+Enter — enviar',
        'Cmd/Ctrl+Shift+L — nuevo chat',
      ],
    },
    {
      heading: 'coste',
      items: ['Free tier (limitado)', 'Pro $20/mes (ilimitado en práctica)'],
    },
    {
      heading: 'cuándo NO usarlo',
      items: [
        'Cuando necesites contexto de tu repo',
        'Cuando trabajes con archivos largos',
        'Cuando quieras automatizar',
      ],
    },
  ],
  cta: { label: 'abrir claude.ai/code ↗', href: 'https://claude.ai/code' },
};
