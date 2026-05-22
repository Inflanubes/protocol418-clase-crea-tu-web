export type SlideId = 'intro' | 'web' | 'app' | 'vscode' | 'terminal' | 'extender' | 'comparativa' | 'cierre';

export interface Slide {
  id: SlideId;
  url: string;
  position: number;
  title: string;
  framing: string;
}

export const SLIDES: readonly Slide[] = [
  { id: 'intro',       url: '/',             position: 1, title: 'Intro',                framing: 'Hay 4 maneras de hablar con Claude Code. Vamos a vivirlas.' },
  { id: 'web',         url: '/web',          position: 2, title: 'Claude en la web',     framing: 'Cuando lo pruebas por primera vez.' },
  { id: 'app',         url: '/app',          position: 3, title: 'Claude como app',      framing: 'Cuando ya lo usas en serio.' },
  { id: 'vscode',      url: '/vscode',       position: 4, title: 'Claude en VS Code',    framing: 'Cuando empiezas a tocar código de verdad.' },
  { id: 'terminal',    url: '/terminal',     position: 5, title: 'Claude en la terminal',framing: 'Cuando te haces pro.' },
  { id: 'comparativa', url: '/comparativa',  position: 6, title: 'Las cuatro maneras',   framing: 'Una mirada en frío.' },
  { id: 'extender',    url: '/extender',     position: 7, title: 'Extender Claude Code', framing: 'Cuando Claude no te basta.' },
  { id: 'cierre',      url: '/cierre',       position: 8, title: 'Cierre',               framing: '' },
] as const;

export const TOTAL_SLIDES = SLIDES.length;

export function slideByUrl(pathname: string): Slide | undefined {
  return SLIDES.find((s) => s.url === pathname);
}

export function nextSlide(currentUrl: string): Slide | undefined {
  const current = slideByUrl(currentUrl);
  if (!current) return SLIDES[0];
  return SLIDES[current.position];
}

export function prevSlide(currentUrl: string): Slide | undefined {
  const current = slideByUrl(currentUrl);
  if (!current) return undefined;
  return SLIDES[current.position - 2];
}
