'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { nextSlide, prevSlide } from '@/lib/slides';

const WHEEL_THROTTLE_MS = 700;
const SWIPE_THRESHOLD_PX = 60;

export function DeckNav() {
  const pathname = usePathname();
  const router = useRouter();
  const lastWheelAt = useRef(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const go = (direction: 'next' | 'prev') => {
      const target = direction === 'next' ? nextSlide(pathname) : prevSlide(pathname);
      if (target) router.push(target.url);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName ?? '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        go('next');
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        go('prev');
      }
    };

    const onWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-scrollable="true"]')) return;

      const now = Date.now();
      if (now - lastWheelAt.current < WHEEL_THROTTLE_MS) return;
      if (Math.abs(e.deltaY) < 20) return;
      lastWheelAt.current = now;
      go(e.deltaY > 0 ? 'next' : 'prev');
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      touchStartX.current = t.clientX;
      touchStartY.current = t.clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return;
      const t = e.changedTouches[0];
      if (!t) return;
      const dx = t.clientX - touchStartX.current;
      const dy = t.clientY - touchStartY.current;
      touchStartX.current = null;
      touchStartY.current = null;

      if (Math.abs(dx) < Math.abs(dy)) return;
      if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
      go(dx < 0 ? 'next' : 'prev');
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [pathname, router]);

  return null;
}
