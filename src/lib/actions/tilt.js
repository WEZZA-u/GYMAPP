/**
 * Svelte action: 3D parallax tilt effect with smooth decay and performance capping.
 */
export function tilt(node, options = {}) {
  const maxTilt = options.max || 8;
  const perspective = options.perspective || 1000;
  const scale = options.scale || 1.02;

  let bounds = null;
  let rafId = null;

  node.style.transformStyle = 'preserve-3d';
  node.style.transition = 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)';

  function onMouseEnter() {
    bounds = node.getBoundingClientRect();
  }

  function onMouseMove(e) {
    if (!bounds) bounds = node.getBoundingClientRect();
    if (rafId) cancelAnimationFrame(rafId);

    rafId = requestAnimationFrame(() => {
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = (mouseX / bounds.width) - 0.5;
      const yPct = (mouseY / bounds.height) - 0.5;

      const rotateY = xPct * maxTilt * 2;
      const rotateX = -yPct * maxTilt * 2;

      node.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
    });
  }

  function onMouseLeave() {
    if (rafId) cancelAnimationFrame(rafId);
    bounds = null;
    node.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }

  node.addEventListener('mouseenter', onMouseEnter, { passive: true });
  node.addEventListener('mousemove', onMouseMove, { passive: true });
  node.addEventListener('mouseleave', onMouseLeave, { passive: true });

  return {
    destroy() {
      if (rafId) cancelAnimationFrame(rafId);
      node.removeEventListener('mouseenter', onMouseEnter);
      node.removeEventListener('mousemove', onMouseMove);
      node.removeEventListener('mouseleave', onMouseLeave);
    }
  };
}
