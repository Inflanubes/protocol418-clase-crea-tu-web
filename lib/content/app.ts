import type { FlavorDetail } from './types';

export const APP_DETAIL: FlavorDetail = {
  title: 'Claude como app',
  sections: [
    {
      heading: 'cómo acceder',
      items: ['Descargar desde claude.ai/download', 'Mac, Windows, Linux'],
    },
    {
      heading: 'atajos clave',
      items: [
        'Cmd/Ctrl+Shift+Space — lanzar global',
        'Cmd/Ctrl+N — nueva conversación',
        'Cmd/Ctrl+/ — focus al input',
      ],
    },
    {
      heading: 'coste',
      items: ['Gratis instalar', 'Usa el plan que tengas (free o Pro)'],
    },
    {
      heading: 'cuándo NO usarlo',
      items: [
        'Si trabajas en un equipo donde no puedes instalar apps',
        'Si solo necesitas consultar puntualmente',
      ],
    },
  ],
  cta: { label: 'descargar Claude Desktop ↗', href: 'https://claude.ai/download' },
};
