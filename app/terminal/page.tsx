import { FlavorSlide } from '@/components/flavor/FlavorSlide';
import { TerminalMock } from '@/components/mocks/TerminalMock';
import { SLIDES } from '@/lib/slides';

export default function TerminalPage() {
  const slide = SLIDES.find((s) => s.id === 'terminal')!;
  return (
    <FlavorSlide
      compact
      framing={slide.framing}
      title="Claude en la terminal"
      identifier="claude (CLI)"
      pros={[
        'Scriptable y automatizable (CI, hooks, agentes)',
        'Headless (puede correr sin UI, en servidores)',
      ]}
      contras={[
        'Curva inicial más alta (terminal, npm, configuración)',
        'Solo CLI (no hay UI gráfica para los que la prefieran)',
      ]}
      mock={<TerminalMock />}
    />
  );
}
