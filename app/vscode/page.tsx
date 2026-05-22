import { SlideShell } from '@/components/deck/SlideShell';
import { SLIDES } from '@/lib/slides';

export default function VSCodePage() {
  const slide = SLIDES.find((s) => s.id === 'vscode')!;
  return (
    <SlideShell framing={slide.framing}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '80px' }}>{slide.title}</h1>
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: '24px' }}>
        code-claude (extensión)
      </p>
    </SlideShell>
  );
}
