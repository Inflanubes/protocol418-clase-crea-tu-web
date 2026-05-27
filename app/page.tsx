import { SlideShell } from '@/components/deck/SlideShell';
import { AnimatedHero } from '@/components/effects/AnimatedHero';
import { slideByUrl } from '@/lib/slides';

export default function HerramientasPage() {
  const slide = slideByUrl('/')!;
  return (
    <SlideShell framing={slide.framing}>
      <AnimatedHero />
    </SlideShell>
  );
}
