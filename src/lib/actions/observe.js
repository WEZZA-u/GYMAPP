export function observe(node) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        node.classList.remove('opacity-0', 'translate-y-12');
        node.classList.add('opacity-100', 'translate-y-0');
        observer.unobserve(node);
      }
    });
  }, { threshold: 0.15 });
  
  // Set initial state
  node.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-1000', 'ease-out');
  observer.observe(node);
  
  return {
    destroy() {
      observer.disconnect();
    }
  }
}
