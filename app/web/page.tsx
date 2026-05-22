import { FlavorSlide } from '@/components/flavor/FlavorSlide';
import { WebMock } from '@/components/mocks/WebMock';
import { WEB_DETAIL } from '@/lib/content/web';
import { SLIDES } from '@/lib/slides';

export default function WebPage() {
  const slide = SLIDES.find((s) => s.id === 'web')!;
  return (
    <FlavorSlide
      framing={slide.framing}
      title="Claude en la web"
      identifier="claude.ai/code"
      pros={[
        'Cero instalación, abres y funciona',
        'Sincroniza entre dispositivos',
        'Ideal para empezar y para consultas rápidas',
      ]}
      contras={[
        'No accede a tus archivos ni a tu repo',
        'No edita archivos (es solo conversación)',
        'Dependes de mantener la pestaña abierta',
      ]}
      mock={<WebMock />}
      detail={WEB_DETAIL}
    />
  );
}
