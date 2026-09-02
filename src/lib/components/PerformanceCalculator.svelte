<script>
  import { onMount } from 'svelte';
  import { tilt } from '../actions/tilt.js';
  import { spotlight } from '../actions/spotlight.js';
  import { Sparkles, Gauge, Activity, Flame, Zap, ShieldCheck } from 'lucide-svelte';

  let daysPerWeek = 4;
  let intensity = 85; // 50 to 100
  let focus = 'hypertrophy'; // hypertrophy, vo2, longevity, executive

  let canvas;
  let animId;

  // Real-time calculations
  $: tpqScore = Math.min(100, Math.round((daysPerWeek * 10) + (intensity * 0.45) + (focus === 'hypertrophy' ? 5 : 8)));
  $: calorieFlux = Math.round(2200 + (daysPerWeek * 280) + (intensity * 8.5));
  $: cryoRecommended = daysPerWeek >= 5 ? '3x / week (-110°C)' : '2x / week (-110°C)';
  $: suggestedTier = daysPerWeek >= 5 || intensity >= 90 ? 'Talento Sovereign' : (daysPerWeek >= 3 ? 'Elite Titanium' : 'Base Athlete');

  onMount(() => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function draw() {
      animId = requestAnimationFrame(draw);
      time += 0.04;

      const w = canvas.parentElement.offsetWidth;
      const h = 120;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, w, h);

      // Draw ECG / Bio-Wave harmonics based on user's intensity
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#FFE600';
      ctx.shadowColor = '#FFE600';
      ctx.shadowBlur = 10;

      const freq = (intensity / 50) * 0.03;
      const amp = (daysPerWeek / 7) * 35;

      for (let x = 0; x < w; x += 2) {
        // Multi-frequency harmonic wave equation
        const sin1 = Math.sin((x * freq) - time * 3) * amp;
        const sin2 = Math.sin((x * freq * 2.5) + time * 1.5) * (amp * 0.35);
        const y = (h / 2) + sin1 + sin2;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw pulse scanner node
      const scanX = ((time * 80) % w);
      const scanSin = Math.sin((scanX * freq) - time * 3) * amp + Math.sin((scanX * freq * 2.5) + time * 1.5) * (amp * 0.35);
      const scanY = (h / 2) + scanSin;

      ctx.beginPath();
      ctx.arc(scanX, scanY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowBlur = 15;
      ctx.fill();
    }

    draw();

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  });
</script>

<section id="calculator" class="py-32 px-6 bg-obsidian-900 relative border-t border-yellow-400/20 overflow-hidden">
  
  <div class="max-w-7xl mx-auto relative z-10">
    
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
        INTERACTIVE PHYSIOLOGY ENGINE
      </div>
      <h2 class="text-4xl sm:text-6xl font-display font-black uppercase text-white tracking-tight leading-none mb-6">
        CALCULATE YOUR <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
          TALENTO BIO-INDEX
        </span>
      </h2>
      <p class="text-gray-300 text-base sm:text-lg font-light">
        Dynamic math simulation modeling your metabolic turnover, recovery load, and recommended tier protocol.
      </p>
    </div>

    <!-- Calculator Card Container -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      <!-- Inputs Column (7 cols) -->
      <div 
        use:spotlight={{ color: 'rgba(255, 230, 0, 0.12)', size: 400 }}
        class="lg:col-span-7 glass-card-yellow rounded-2xl p-8 sm:p-10 flex flex-col justify-between"
      >
        <div class="space-y-8">
          
          <!-- Slider 1: Days per week -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <label for="days" class="text-sm uppercase font-bold tracking-wider text-gray-200">
                Weekly Training Frequency
              </label>
              <span class="text-xl font-mono font-black text-yellow-400 bg-black/60 px-3 py-1 rounded-lg border border-yellow-400/30">
                {daysPerWeek} Days / Wk
              </span>
            </div>
            <input 
              id="days" 
              type="range" 
              min="1" 
              max="7" 
              bind:value={daysPerWeek} 
              class="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-yellow-400"
            />
            <div class="flex justify-between text-[10px] font-mono text-gray-500 mt-2">
              <span>1 DAY (Light)</span>
              <span>4 DAYS (Optimal)</span>
              <span>7 DAYS (Extreme)</span>
            </div>
          </div>

          <!-- Slider 2: Target Intensity -->
          <div>
            <div class="flex items-center justify-between mb-3">
              <label for="intensity" class="text-sm uppercase font-bold tracking-wider text-gray-200">
                Target Output Intensity
              </label>
              <span class="text-xl font-mono font-black text-yellow-400 bg-black/60 px-3 py-1 rounded-lg border border-yellow-400/30">
                {intensity}% Max VO2 / 1RM
              </span>
            </div>
            <input 
              id="intensity" 
              type="range" 
              min="50" 
              max="100" 
              bind:value={intensity} 
              class="w-full h-2 bg-obsidian-950 rounded-lg appearance-none cursor-pointer accent-yellow-400"
            />
            <div class="flex justify-between text-[10px] font-mono text-gray-500 mt-2">
              <span>50% (Endurance)</span>
              <span>75% (Athletic)</span>
              <span>100% (Maximum Output)</span>
            </div>
          </div>

          <!-- Focus Selector -->
          <div>
            <span class="block text-sm uppercase font-bold tracking-wider text-gray-200 mb-3">
              Primary Performance Objective
            </span>
            <div class="grid grid-cols-2 gap-3">
              <button 
                on:click={() => focus = 'hypertrophy'} 
                class="px-4 py-3 rounded-xl text-xs uppercase font-bold tracking-wider border transition-all text-left {focus === 'hypertrophy' ? 'bg-yellow-400 text-black border-yellow-400 shadow-neon-yellow' : 'bg-black/50 text-gray-300 border-white/10 hover:border-yellow-400/50'}"
              >
                Hypertrophy & Power
              </button>
              <button 
                on:click={() => focus = 'vo2'} 
                class="px-4 py-3 rounded-xl text-xs uppercase font-bold tracking-wider border transition-all text-left {focus === 'vo2' ? 'bg-yellow-400 text-black border-yellow-400 shadow-neon-yellow' : 'bg-black/50 text-gray-300 border-white/10 hover:border-yellow-400/50'}"
              >
                Cardiovascular VO2
              </button>
              <button 
                on:click={() => focus = 'longevity'} 
                class="px-4 py-3 rounded-xl text-xs uppercase font-bold tracking-wider border transition-all text-left {focus === 'longevity' ? 'bg-yellow-400 text-black border-yellow-400 shadow-neon-yellow' : 'bg-black/50 text-gray-300 border-white/10 hover:border-yellow-400/50'}"
              >
                Longevity & Rejuvenation
              </button>
              <button 
                on:click={() => focus = 'executive'} 
                class="px-4 py-3 rounded-xl text-xs uppercase font-bold tracking-wider border transition-all text-left {focus === 'executive' ? 'bg-yellow-400 text-black border-yellow-400 shadow-neon-yellow' : 'bg-black/50 text-gray-300 border-white/10 hover:border-yellow-400/50'}"
              >
                Executive Vitality
              </button>
            </div>
          </div>

        </div>

        <!-- Live Harmonic ECG Oscilloscope Canvas -->
        <div class="mt-8 pt-6 border-t border-white/10">
          <div class="flex items-center justify-between text-xs font-mono text-gray-400 uppercase mb-2">
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
              Real-Time Biometric Harmonic Stream
            </span>
            <span class="text-yellow-400 font-bold">{Math.round(intensity * 1.8)} BPM ESTIMATE</span>
          </div>
          <div class="w-full h-24 bg-black/80 rounded-xl overflow-hidden border border-yellow-400/20 relative">
            <canvas bind:this={canvas} class="w-full h-full"></canvas>
          </div>
        </div>

      </div>

      <!-- Live Results Telemetry (5 cols) -->
      <div 
        use:tilt={{ max: 5, scale: 1.01 }}
        class="lg:col-span-5 bg-black border-2 border-yellow-400 rounded-2xl p-8 sm:p-10 shadow-neon-yellow-lg flex flex-col justify-between relative overflow-hidden"
      >
        <!-- Top glowing bar -->
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600"></div>

        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs uppercase font-bold tracking-widest text-yellow-400 font-mono">
              TELEMETRY RESULTS
            </span>
            <span class="text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full">
              LIVE ACCURACY 99.4%
            </span>
          </div>

          <!-- Giant Score Display -->
          <div class="text-center py-6 border-y border-white/10 mb-8">
            <div class="text-xs uppercase tracking-widest text-gray-400 mb-1">Talento Performance Quotient</div>
            <div class="text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-300 to-yellow-500 drop-shadow-[0_0_25px_rgba(255,230,0,0.5)]">
              {tpqScore}<span class="text-3xl text-yellow-400">/100</span>
            </div>
            <div class="text-xs font-mono text-yellow-400/80 mt-1 uppercase">
              {tpqScore >= 90 ? 'Peak Tier Athlete' : (tpqScore >= 75 ? 'Advanced High-Performance' : 'Conditioning Phase')}
            </div>
          </div>

          <!-- Breakdown Stats -->
          <div class="space-y-4 mb-8">
            <div class="flex items-center justify-between p-3 rounded-xl bg-obsidian-900 border border-white/5">
              <div class="flex items-center gap-3">
                <Flame class="w-5 h-5 text-yellow-400" />
                <span class="text-xs uppercase tracking-wider text-gray-300">Est. Daily Caloric Flux</span>
              </div>
              <span class="font-mono font-bold text-white text-sm">{calorieFlux} kcal</span>
            </div>

            <div class="flex items-center justify-between p-3 rounded-xl bg-obsidian-900 border border-white/5">
              <div class="flex items-center gap-3">
                <Activity class="w-5 h-5 text-yellow-400" />
                <span class="text-xs uppercase tracking-wider text-gray-300">Cryo Protocol</span>
              </div>
              <span class="font-mono font-bold text-yellow-400 text-sm">{cryoRecommended}</span>
            </div>

            <div class="flex items-center justify-between p-3 rounded-xl bg-obsidian-900 border border-white/5">
              <div class="flex items-center gap-3">
                <ShieldCheck class="w-5 h-5 text-yellow-400" />
                <span class="text-xs uppercase tracking-wider text-gray-300">Recommended Tier</span>
              </div>
              <span class="font-display font-black text-white text-sm uppercase">{suggestedTier}</span>
            </div>
          </div>
        </div>

        <a 
          href="#pricing" 
          class="w-full py-4 rounded-xl bg-yellow-400 text-black font-display font-black text-xs uppercase tracking-widest text-center shadow-neon-yellow transition-all hover:bg-yellow-300 hover:scale-[1.02] active:scale-98"
        >
          Unlock {suggestedTier} Protocol
        </a>

      </div>

    </div>

  </div>
</section>
