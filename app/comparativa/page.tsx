import { SlideShell } from '@/components/deck/SlideShell';
import { ComparisonMatrix } from '@/components/matrix/ComparisonMatrix';
import { SLIDES } from '@/lib/slides';

export default function ComparativaPage() {
  const slide = SLIDES.find((s) => s.id === 'comparativa')!;
  return (
    <SlideShell framing={slide.framing}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 6vw, 80px)' }}>
        Las cuatro maneras
      </h1>
      <div data-scrollable="true" style={{ overflow: 'auto', maxHeight: '70vh', paddingRight: '16px' }}>
        <ComparisonMatrix />
      </div>
    </SlideShell>
  );
}
