<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Shield, Zap, Flame, Award, Play, ChevronDown, ArrowRight } from 'lucide-svelte';
  import HeroCanvas from './HeroCanvas.svelte';

  let ready = false;
  let videoModal = false;

  onMount(() => {
    ready = true;
  });
</script>

<section id="top" class="relative min-h-screen w-full flex items-center justify-center bg-obsidian-950 pt-28 pb-20 px-6 overflow-hidden">
  
  <!-- Interactive Math Particle Wave Canvas -->
  <HeroCanvas />

  <!-- Ambient Radial Glow Layers -->
  <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-yellow-400/15 rounded-full blur-[140px] pointer-events-none"></div>
  <div class="absolute bottom-10 right-10 w-[400px] h-[300px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>

  {#if ready}
    <div class="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto" in:fade={{ duration: 1000 }}>
      
      <!-- Top Elite Badge -->
      <div 
        class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-obsidian-900/90 border border-yellow-400/40 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-xl shadow-neon-yellow"
        in:fly={{ y: -30, duration: 800, delay: 100 }}
      >
        <span class="flex h-2 w-2 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
        </span>
        PRIVATE MEMBERSHIP • EDITION 2026
      </div>

      <!-- Animated Brand Logo Highlight -->
      <div class="relative mb-6 group cursor-pointer" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        <div class="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 via-yellow-500/10 to-yellow-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-80"></div>
        <img 
          src="/logo.png" 
          alt="Talento Sports & Fitness Center Logo" 
          class="relative w-36 h-36 md:w-44 md:h-44 object-contain filter drop-shadow-[0_0_35px_rgba(255,230,0,0.5)] transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      <!-- Main Apple-Style Bold Typography Headline -->
      <div class="overflow-hidden mb-6">
        <h1 
          class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.9] text-white"
          in:fly={{ y: 80, duration: 900, delay: 300 }}
        >
          FORGE YOUR <br class="hidden sm:inline" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 drop-shadow-[0_0_35px_rgba(255,230,0,0.4)]">
            LEGACY
          </span>
        </h1>
      </div>

      <!-- Subtitle Description -->
      <div class="max-w-2xl mx-auto mb-10 overflow-hidden">
        <p 
          class="text-base sm:text-xl text-gray-300 font-light leading-relaxed tracking-wide"
          in:fly={{ y: 40, duration: 800, delay: 450 }}
        >
          A private athletic sanctuary for high-achievers. Combining precision biomechanics, sub-zero cellular regeneration, and bespoke biometric tracking.
        </p>
      </div>

      <!-- CTA Action Buttons -->
      <div 
        class="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        in:fly={{ y: 30, duration: 800, delay: 600 }}
      >
        <a 
          href="#pricing" 
          class="w-full sm:w-auto px-10 py-4.5 rounded-full bg-yellow-400 text-black font-display font-black text-sm uppercase tracking-widest shadow-neon-yellow-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-neon-yellow-xl active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Claim Membership</span>
          <ArrowRight class="w-4 h-4" />
        </a>

        <a 
          href="#facilities" 
          class="w-full sm:w-auto px-8 py-4.5 rounded-full bg-obsidian-900/90 border border-yellow-400/40 text-white font-display font-bold text-sm uppercase tracking-widest backdrop-blur-xl transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 hover:bg-obsidian-850 flex items-center justify-center gap-2 group"
        >
          <Zap class="w-4 h-4 text-yellow-400 group-hover:animate-bounce" />
          <span>Tour Facilities</span>
        </a>
      </div>

      <!-- Key Metrics & Proof Bar -->
      <div 
        class="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl text-left"
        in:fade={{ duration: 1000, delay: 800 }}
      >
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
            <Shield class="w-5 h-5" />
          </div>
          <div>
            <div class="text-xl font-display font-black text-white">0.1%</div>
            <div class="text-[11px] uppercase tracking-wider text-gray-400">Exclusive Capped Roster</div>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
            <Award class="w-5 h-5" />
          </div>
          <div>
            <div class="text-xl font-display font-black text-white">ELEIKO</div>
            <div class="text-[11px] uppercase tracking-wider text-gray-400">Calibrated Olympic Plates</div>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
            <Flame class="w-5 h-5" />
          </div>
          <div>
            <div class="text-xl font-display font-black text-white">-110°C</div>
            <div class="text-[11px] uppercase tracking-wider text-gray-400">Whole Body Cryo Chamber</div>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
            <Zap class="w-5 h-5" />
          </div>
          <div>
            <div class="text-xl font-display font-black text-white">24/7</div>
            <div class="text-[11px] uppercase tracking-wider text-gray-400">Biometric Valet Concierge</div>
          </div>
        </div>
      </div>

    </div>
  {/if}

  <!-- Bottom Scroll Down Indicator -->
  <a href="#about" class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-yellow-400 transition-colors z-20" aria-label="Scroll Down">
    <span class="text-[10px] uppercase tracking-[0.3em] font-medium">EXPLORE</span>
    <ChevronDown class="w-4 h-4 animate-bounce text-yellow-400" />
  </a>

</section>
