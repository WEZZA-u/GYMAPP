/**
 * Svelte action: Creates an interactive spotlight effect following mouse movement.
 * Optimized for 60fps with CSS custom variables and requestAnimationFrame.
 */
export function spotlight(node, options = {}) {
  const color = options.color || 'rgba(255, 230, 0, 0.15)';
  const size = options.size || 350;

  let rafId = null;

  function handleMouseMove(e) {
    if (rafId) cancelAnimationFrame(rafId);

    rafId = requestAnimationFrame(() => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      node.style.setProperty('--mouse-x', `${x}px`);
      node.style.setProperty('--mouse-y', `${y}px`);
      node.style.setProperty('--spotlight-color', color);
      node.style.setProperty('--spotlight-size', `${size}px`);
    });
  }

  node.classList.add('relative', 'overflow-hidden');
  node.addEventListener('mousemove', handleMouseMove, { passive: true });

  return {
    destroy() {
      if (rafId) cancelAnimationFrame(rafId);
      node.removeEventListener('mousemove', handleMouseMove);
    }
  };
}
