import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((targetId: string) => {
    console.log('Smooth scroll triggered for:', targetId);
    const targetElement = document.querySelector(targetId);
    if (!targetElement) {
      console.log('Target element not found:', targetId);
      return;
    }

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second
    let start: number | null = null;

    // Add pixel transition class to body
    document.body.classList.add('pixel-scroll', 'pixel-scroll-animation');
    console.log('Pixel transition started');
    
    // Add visual pixel effect overlay
    const pixelOverlay = document.createElement('div');
    pixelOverlay.id = 'pixel-overlay';
    pixelOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(255, 255, 255, 0.03) 2px,
          rgba(255, 255, 255, 0.03) 4px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255, 255, 255, 0.02) 2px,
          rgba(255, 255, 255, 0.02) 4px
        );
      pointer-events: none;
      z-index: 9999;
      opacity: 0.4;
      mix-blend-mode: overlay;
    `;
    document.body.appendChild(pixelOverlay);

    // Pixel transition effect function
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      // Enhanced pixel transition effect - much more pronounced
      const pixelJitter = Math.sin(progress * Math.PI * 20) * 8; // Much more pronounced jitter
      const pixelWave = Math.sin(progress * Math.PI * 10) * 4; // Additional wave effect
      const pixelBounce = Math.sin(progress * Math.PI * 15) * 2; // Bounce effect
      const pixelOffset = pixelJitter + pixelWave + pixelBounce;
      
      const newPosition = startPosition + distance * easedProgress + pixelOffset;

      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        // Remove pixel transition class when animation completes
        document.body.classList.remove('pixel-scroll', 'pixel-scroll-animation');
        console.log('Pixel transition completed');
        
        // Remove pixel overlay
        const pixelOverlay = document.getElementById('pixel-overlay');
        if (pixelOverlay) {
          pixelOverlay.remove();
        }
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return { scrollToSection };
}; 