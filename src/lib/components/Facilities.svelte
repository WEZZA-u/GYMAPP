<script>
  import { tilt } from '../actions/tilt.js';
  import { spotlight } from '../actions/spotlight.js';
  import { Dumbbell, Wind, Waves, HeartPulse, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-svelte';

  let selectedTier = 'all';

  const facilities = [
    {
      id: 1,
      name: "The Olympic Iron Arena",
      subtitle: "Biomechanical Strength Dome",
      desc: "Full roster of Eleiko competition-spec barbells, custom calibrated urethane plates, 12 isolated squat bays with dynamic velocity-based training sensors.",
      tier: "base",
      tierLabel: "Base Athlete",
      badgeColor: "border-gray-500 text-gray-300",
      specs: ["12 Power Cages", "Eleiko IPF Certified", "Force Plates"],
      sqft: "18,000 SQ FT",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Sub-Zero Cryo & Bio-Regeneration",
      subtitle: "-110°C Whole Body Reset",
      desc: "Dual electric nitrogen-free cryo-suites that drop skin temperature in 180 seconds to flush metabolic waste and activate anti-inflammatory shock proteins.",
      tier: "elite",
      tierLabel: "Elite Titanium",
      badgeColor: "border-yellow-400 text-yellow-400 shadow-neon-yellow",
      specs: ["-110°C Chamber", "Hyperbaric 2.0 ATA", "Normatec 3"],
      sqft: "6,500 SQ FT",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Metabolic & VO2 Performance Lab",
      subtitle: "Clinical Grade Physiology",
      desc: "Gold-standard metabolic carts, continuous blood lactate analyzers, and hypoxic altitude simulation pods mimicking 12,000 ft mountain training.",
      tier: "elite",
      tierLabel: "Elite Titanium",
      badgeColor: "border-yellow-400 text-yellow-400 shadow-neon-yellow",
      specs: ["Cosmed K5 Cart", "Lactate Scout+", "Hypoxic Chamber"],
      sqft: "4,200 SQ FT",
      img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Sovereign Penthouse Spa & Suites",
      subtitle: "Absolute Private Sanctuary",
      desc: "Private keyed elevator access, bespoke magnesium sensory deprivation pods, Finnish cedar saunas, cold plunge waterfalls, and private valet.",
      tier: "sovereign",
      tierLabel: "Talento Sovereign",
      badgeColor: "border-yellow-400 bg-yellow-400 text-black font-black",
      specs: ["Private Valet", "Magnesium Float Pods", "Personal Concierge"],
      sqft: "8,000 SQ FT",
      img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Infrared Sauna & Contrast Hydrotherapy",
      subtitle: "Full-Spectrum Thermal Therapy",
      desc: "Clearlight Sanctuary Full-Spectrum Infrared Saunas paired with 42°F Himalayan salt cold plunge pools for extreme vascular circulation.",
      tier: "base",
      tierLabel: "Base Athlete",
      badgeColor: "border-gray-500 text-gray-300",
      specs: ["Far/Mid/Near IR", "Himalayan Salt Plunges", "Chromotherapy"],
      sqft: "5,000 SQ FT",
      img: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Private Performance Suite & Recovery Lounge",
      subtitle: "Exclusive 1-on-1 Sanctuary",
      desc: "Soundproofed executive workout chambers with private locker room, en-suite cold plunge, and private dedicated clinical biomechanist.",
      tier: "sovereign",
      tierLabel: "Talento Sovereign",
      badgeColor: "border-yellow-400 bg-yellow-400 text-black font-black",
      specs: ["Biometric Keyed Entry", "In-Suite Recovery", "Private Valet"],
      sqft: "3,500 SQ FT",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  $: filteredFacilities = selectedTier === 'all' 
    ? facilities 
    : facilities.filter(f => f.tier === selectedTier);
</script>

<section id="facilities" class="py-32 px-6 bg-obsidian-950 relative border-t border-yellow-400/20">
  
  <div class="max-w-7xl mx-auto">
    
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
      <div>
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
          EXCLUSIVE INFRASTRUCTURE
        </div>
        <h2 class="text-4xl sm:text-6xl font-display font-black uppercase text-white tracking-tight leading-none">
          MOCK FACILITIES BY <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
            MEMBERSHIP TIER
          </span>
        </h2>
      </div>

      <!-- Tier Filter Tabs -->
      <div class="flex flex-wrap gap-2 bg-obsidian-900 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl">
        <button 
          on:click={() => selectedTier = 'all'} 
          class="px-4 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all {selectedTier === 'all' ? 'bg-yellow-400 text-black shadow-neon-yellow' : 'text-gray-400 hover:text-white'}"
        >
          All (6)
        </button>
        <button 
          on:click={() => selectedTier = 'base'} 
          class="px-4 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all {selectedTier === 'base' ? 'bg-yellow-400 text-black shadow-neon-yellow' : 'text-gray-400 hover:text-white'}"
        >
          Base
        </button>
        <button 
          on:click={() => selectedTier = 'elite'} 
          class="px-4 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all {selectedTier === 'elite' ? 'bg-yellow-400 text-black shadow-neon-yellow' : 'text-gray-400 hover:text-white'}"
        >
          Elite Titanium
        </button>
        <button 
          on:click={() => selectedTier = 'sovereign'} 
          class="px-4 py-2 rounded-xl text-xs uppercase font-bold tracking-wider transition-all {selectedTier === 'sovereign' ? 'bg-yellow-400 text-black shadow-neon-yellow' : 'text-gray-400 hover:text-white'}"
        >
          Sovereign VIP
        </button>
      </div>
    </div>

    <!-- Facilities Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredFacilities as facility (facility.id)}
        <div 
          use:tilt={{ max: 8, scale: 1.02 }}
          use:spotlight={{ color: 'rgba(255, 230, 0, 0.2)', size: 380 }}
          class="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/80 transition-all duration-500 group flex flex-col justify-between"
        >
          <div>
            <!-- Facility Image with Gradient Overlay & Scanline -->
            <div class="relative h-64 overflow-hidden">
              <img 
                src={facility.img} 
                alt={facility.name} 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent"></div>
              
              <!-- Top Badges -->
              <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span class="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border {facility.badgeColor}">
                  {facility.tierLabel}
                </span>
                <span class="text-[10px] font-mono font-bold bg-black/80 backdrop-blur-md text-gray-300 px-2.5 py-1 rounded-md border border-white/10">
                  {facility.sqft}
                </span>
              </div>

              <!-- Bottom Subtitle in image -->
              <div class="absolute bottom-3 left-4 text-xs font-mono text-yellow-400 uppercase tracking-widest">
                {facility.subtitle}
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-6">
              <h3 class="text-2xl font-display font-bold uppercase text-white mb-3 group-hover:text-yellow-400 transition-colors">
                {facility.name}
              </h3>
              <p class="text-gray-400 font-light text-sm leading-relaxed mb-6">
                {facility.desc}
              </p>

              <!-- Specs Pills -->
              <div class="flex flex-wrap gap-2 mb-6">
                {#each facility.specs as spec}
                  <span class="text-[11px] font-mono text-gray-300 bg-obsidian-900 border border-white/5 px-2.5 py-1 rounded-lg">
                    {spec}
                  </span>
                {/each}
              </div>
            </div>
          </div>

          <!-- Bottom Action Strip -->
          <div class="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
            <a href="#contact" class="text-xs uppercase font-bold tracking-wider text-yellow-400 hover:text-yellow-300 flex items-center gap-1 group/btn">
              <span>Request Private Access</span>
              <ArrowUpRight class="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>
