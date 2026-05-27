import { SlideShell } from '@/components/deck/SlideShell';
import { slideByUrl } from '@/lib/slides';

export default function HerramientasPage() {
  const slide = slideByUrl('/')!;
  return (
    <SlideShell framing={slide.framing}>
      <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>
        herramientas slide — en construcción
      </div>
    </SlideShell>
  );
}
