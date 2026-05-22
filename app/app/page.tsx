import { FlavorSlide } from '@/components/flavor/FlavorSlide';
import { AppMock } from '@/components/mocks/AppMock';
import { SLIDES } from '@/lib/slides';

export default function AppPage() {
  const slide = SLIDES.find((s) => s.id === 'app')!;
  return (
    <FlavorSlide
      framing={slide.framing}
      title="Claude como app"
      identifier="Claude Desktop"
      pros={[
        'Ventana propia, no es una pestaña más del navegador',
        'Conversaciones persistentes, las retomas donde las dejaste',
        'Atajos de SO (lanzar con hotkey global)',
      ]}
      contras={[
        'Ocupa RAM como cualquier app de escritorio',
        'Solo se ejecuta una instancia (no varias ventanas a la vez)',
        'Sigue sin acceso al repo',
      ]}
      mock={<AppMock />}
    />
  );
}
