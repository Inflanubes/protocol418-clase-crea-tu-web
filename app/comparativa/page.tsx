import { SlideShell } from '@/components/deck/SlideShell';
import { SLIDES } from '@/lib/slides';

export default function ComparativaPage() {
  const slide = SLIDES.find((s) => s.id === 'comparativa')!;
  return (
    <SlideShell framing={slide.framing}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '80px' }}>{slide.title}</h1>
      <p>Matriz comparativa — pendiente Task 17.</p>
    </SlideShell>
  );
}
