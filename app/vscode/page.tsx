import { FlavorSlide } from '@/components/flavor/FlavorSlide';
import { VSCodeMock } from '@/components/mocks/VSCodeMock';
import { SLIDES } from '@/lib/slides';

export default function VSCodePage() {
  const slide = SLIDES.find((s) => s.id === 'vscode')!;
  return (
    <FlavorSlide
      framing={slide.framing}
      title="Claude en VS Code"
      identifier="extensión code-claude"
      pros={[
        'Contexto del repo completo (Claude lee tus archivos)',
        'Edita archivos directamente, no copy-paste',
        'Diff visual de cambios antes de aceptar',
      ]}
      contras={[
        'Setup inicial (instalar extensión + autenticar)',
        'Solo dentro de VS Code (no en otros editores)',
        'Curva de aprendizaje de los modos (ask / agent / plan)',
      ]}
      mock={<VSCodeMock />}
    />
  );
}
