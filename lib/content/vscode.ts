import type { FlavorDetail } from './types';

export const VSCODE_DETAIL: FlavorDetail = {
  title: 'Claude en VS Code',
  sections: [
    {
      heading: 'cómo instalar',
      items: [
        'VS Code Marketplace → buscar "Claude"',
        'Install → sign in con cuenta Anthropic',
      ],
    },
    {
      heading: 'atajos clave',
      items: [
        'Cmd/Ctrl+Esc — abrir panel Claude',
        'Command Palette → "Claude: Plan Mode"',
        'Cmd/Ctrl+Enter — aceptar edit',
      ],
    },
    {
      heading: 'modos',
      items: [
        'Ask — solo conversa',
        'Agent — edita archivos',
        'Plan — diseña antes de tocar',
      ],
    },
    {
      heading: 'coste',
      items: ['Free tier', 'Pro/Max desbloquea más uso'],
    },
    {
      heading: 'cuándo NO usarlo',
      items: [
        'Si no usas VS Code (Cursor, Zed tienen sus propias soluciones)',
        'Para tareas que no son de código',
      ],
    },
  ],
  cta: { label: 'instalar extensión ↗', href: 'https://marketplace.visualstudio.com/' },
};
