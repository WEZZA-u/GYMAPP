<script>
  import { onMount, onDestroy } from 'svelte';

  let canvas;
  let animId;
  let isVisible = true;
  let observer;

  let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 180 };
  let width = 0;
  let height = 0;

  onMount(() => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check device capability
    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Responsive grid points
    const cols = isMobile ? 18 : 34;
    const rows = isMobile ? 14 : 22;

    let points = [];

    function resize() {
      if (!canvas) return;
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Generate mathematical grid
      points = [];
      const spacingX = width / (cols - 1);
      const spacingY = height / (rows - 1);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacingX;
          const y = j * spacingY;
          points.push({
            originX: x,
            originY: y,
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            col: i,
            row: j,
            phase: (i * 0.25) + (j * 0.35),
            size: (i % 2 === 0 && j % 2 === 0) ? 2.5 : 1.5,
          });
        }
      }
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Pause when out of screen to conserve battery and CPU
    observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(canvas);

    let time = 0;
    let lastFrame = performance.now();

    function render(now) {
      animId = requestAnimationFrame(render);
      if (!isVisible) return;

      const dt = Math.min((now - lastFrame) / 1000, 0.1);
      lastFrame = now;
      time += dt * 1.5;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient energy ripples
      const ambientGlow = ctx.createRadialGradient(
        width / 2 + Math.sin(time * 0.5) * 80,
        height * 0.45 + Math.cos(time * 0.7) * 40,
        10,
        width / 2,
        height * 0.45,
        width * 0.6
      );
      ambientGlow.addColorStop(0, 'rgba(255, 230, 0, 0.12)');
      ambientGlow.addColorStop(0.5, 'rgba(255, 200, 0, 0.03)');
      ambientGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Compute physics and wave mathematics
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Complex 3D sine-cosine wave equation
        const waveZ = Math.sin(time + p.phase) * Math.cos(time * 0.8 + p.col * 0.2) * 14;
        const waveX = Math.cos(time * 0.6 + p.row * 0.3) * 6;

        let targetX = p.originX + waveX;
        let targetY = p.originY + waveZ;

        // Mouse interactive force field (repel + spiral vortex)
        const dx = targetX - mouse.x;
        const dy = targetY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 45;
          const angle = Math.atan2(dy, dx);
          targetX += Math.cos(angle) * force;
          targetY += Math.sin(angle) * force;
        }

        // Spring smoothing
        p.x += (targetX - p.x) * 0.15;
        p.y += (targetY - p.y) * 0.15;
      }

      // 3. Render glowing connection lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        // Connect to right neighbor
        if (p.col < cols - 1) {
          const right = points[i + rows];
          if (right) {
            const d = Math.hypot(p.x - right.x, p.y - right.y);
            if (d < 90) {
              const alpha = Math.max(0.02, (1 - d / 90) * 0.25);
              ctx.strokeStyle = `rgba(255, 230, 0, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(right.x, right.y);
              ctx.stroke();
            }
          }
        }

        // Connect to bottom neighbor
        if (p.row < rows - 1) {
          const bottom = points[i + 1];
          if (bottom) {
            const d = Math.hypot(p.x - bottom.x, p.y - bottom.y);
            if (d < 90) {
              const alpha = Math.max(0.02, (1 - d / 90) * 0.25);
              ctx.strokeStyle = `rgba(255, 230, 0, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(bottom.x, bottom.y);
              ctx.stroke();
            }
          }
        }
      }

      // 4. Render glowing particle nodes
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        const isNearMouse = distToMouse < mouse.radius;

        const pulse = Math.sin(time * 2 + p.phase) * 0.5 + 0.5;
        const radius = isNearMouse ? p.size * 1.8 : p.size * (0.8 + pulse * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, radius), 0, Math.PI * 2);

        if (isNearMouse) {
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#FFE600';
          ctx.shadowBlur = 12;
        } else {
          ctx.fillStyle = (p.col % 3 === 0 && p.row % 3 === 0) ? '#FFE600' : 'rgba(255, 240, 100, 0.5)';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
    }

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (observer) observer.disconnect();
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="absolute inset-0 w-full h-full pointer-events-none z-0"
></canvas>
