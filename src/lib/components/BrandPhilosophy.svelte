<script>
  import { tilt } from '../actions/tilt.js';
  import { spotlight } from '../actions/spotlight.js';
  import { Cpu, Activity, RefreshCw, Crown, CheckCircle2 } from 'lucide-svelte';

  const pillars = [
    {
      icon: Cpu,
      number: "01",
      title: "Biomechanical Supremacy",
      subtitle: "Smart-Load Resistance",
      description: "Custom-milled Eleiko barbell sets, pneumatic Keiser resistance, and force-plate kinetic trackers that calculate torque, power, and velocity per rep.",
      stat: "< 0.01% Load Deviation"
    },
    {
      icon: Activity,
      number: "02",
      title: "Sub-Zero Cellular Reset",
      subtitle: "Medical Cryo & Oxygenation",
      description: "Walk-in electric whole-body cryotherapy chambers cooled to -110°C, paired with 2.0 ATA Hyperbaric Oxygen capsules to triple recovery kinetics.",
      stat: "300% Accelerated Recovery"
    },
    {
      icon: RefreshCw,
      number: "03",
      title: "Bio-Neural Mapping",
      subtitle: "Continuous HRV & Biomarkers",
      description: "Our in-house clinical team monitors real-time autonomic nervous system recovery, lactate curves, and sleep architecture before every session.",
      stat: "24/7 Clinical Analytics"
    },
    {
      icon: Crown,
      number: "04",
      title: "The Sovereign Sanctuary",
      subtitle: "Unmatched Exclusivity",
      description: "Zero wait times, fingerprint biometric security, private valet parking, and private locker suites stocked with organic botanical amenities.",
      stat: "Strict Member Cap"
    }
  ];
</script>

<section id="about" class="py-32 px-6 bg-obsidian-900 relative border-t border-yellow-400/20 overflow-hidden">
  
  <!-- Background Pattern & Ambient Glows -->
  <div class="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
  <div class="absolute top-1/2 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none"></div>

  <div class="max-w-7xl mx-auto relative z-10">
    
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-20">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
        THE TALENTO STANDARD
      </div>
      <h2 class="text-4xl sm:text-6xl font-display font-black uppercase text-white tracking-tight leading-none mb-6">
        WHERE WEALTH MEETS <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
          PEAK HUMAN CAPACITY
        </span>
      </h2>
      <p class="text-gray-300 text-lg font-light leading-relaxed">
        Commercial fitness centers offer access. Talento crafts an uncompromising athletic sanctuary where every square inch is engineered for ultimate performance.
      </p>
    </div>

    <!-- 4-Pillar Grid with 3D Tilt & Spotlights -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each pillars as pillar}
        <div 
          use:tilt={{ max: 6, scale: 1.01 }}
          use:spotlight={{ color: 'rgba(255, 230, 0, 0.12)', size: 400 }}
          class="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 hover:border-yellow-400/60 transition-all duration-500 group relative flex flex-col justify-between"
        >
          <!-- Corner Ambient Glow -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full group-hover:bg-yellow-400/15 transition-all duration-500"></div>

          <div>
            <div class="flex items-center justify-between mb-8">
              <div class="w-14 h-14 rounded-2xl bg-obsidian-950 border border-yellow-400/40 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black group-hover:shadow-neon-yellow transition-all duration-500">
                <svelte:component this={pillar.icon} class="w-7 h-7" />
              </div>
              <span class="font-mono text-3xl font-black text-gray-700 group-hover:text-yellow-400/40 transition-colors">
                {pillar.number}
              </span>
            </div>

            <div class="mb-2 text-xs font-bold uppercase tracking-widest text-yellow-400">
              {pillar.subtitle}
            </div>
            <h3 class="text-2xl sm:text-3xl font-display font-bold uppercase text-white mb-4 tracking-tight group-hover:text-yellow-200 transition-colors">
              {pillar.title}
            </h3>
            <p class="text-gray-300 font-light text-base leading-relaxed mb-8">
              {pillar.description}
            </p>
          </div>

          <div class="pt-6 border-t border-white/10 flex items-center justify-between text-xs">
            <span class="text-gray-400 uppercase tracking-wider">Benchmark Standard</span>
            <span class="font-mono font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
              {pillar.stat}
            </span>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
