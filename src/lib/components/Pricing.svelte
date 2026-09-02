<script>
  import { tilt } from '../actions/tilt.js';
  import { spotlight } from '../actions/spotlight.js';
  import { Check, Crown, Zap, Shield, Sparkles, ArrowRight } from 'lucide-svelte';

  let annualBilling = true;

  const tiers = [
    {
      id: "base",
      name: "Base Athlete",
      badge: "ESSENTIAL ACCESS",
      monthlyPrice: 180,
      annualPrice: 145,
      desc: "For disciplined competitors who demand access to calibrated Olympic iron and recovery saunas.",
      features: [
        "Full Olympic Iron Arena access",
        "Clearlight Infrared Saunas & Contrast Baths",
        "Biometric Keyless Fingerprint Entry",
        "Smart Locker & Botanical Amenities",
        "2x Guest Invitations / Month"
      ],
      highlight: false,
      cta: "Select Base Tier"
    },
    {
      id: "elite",
      name: "Elite Titanium",
      badge: "MOST POPULAR",
      monthlyPrice: 380,
      annualPrice: 295,
      desc: "Complete athletic sovereignty with unrestricted cryogenic regeneration and VO2 performance lab access.",
      features: [
        "All Base Athlete privileges",
        "Unlimited -110°C Whole Body Cryotherapy",
        "Hyperbaric Oxygen 2.0 ATA Sessions",
        "Monthly DEXA Scan & VO2 Max Testing",
        "Concierge Towel & Laundry Service",
        "6x VIP Guest Passes / Month"
      ],
      highlight: true,
      cta: "Claim Elite Titanium"
    },
    {
      id: "sovereign",
      name: "Talento Sovereign",
      badge: "STRICTLY INVITATION ONLY",
      monthlyPrice: 1450,
      annualPrice: 1150,
      desc: "An absolute commitment to physical supremacy. Private penthouse suite, 1-on-1 concierge, and valet.",
      features: [
        "All Elite Titanium privileges",
        "Private Penthouse Suite Keyed Access",
        "Dedicated Clinical Biomechanist (4x/mo)",
        "Sensory Deprivation Magnesium Float Pods",
        "Private Valet Parking & Executive Lounge",
        "Unlimited Global VIP Guest Access"
      ],
      highlight: false,
      cta: "Apply For Sovereign"
    }
  ];
</script>

<section id="pricing" class="py-32 px-6 bg-obsidian-950 relative border-t border-yellow-400/20">
  
  <div class="max-w-7xl mx-auto relative z-10">
    
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
        PRESTIGE MEMBERSHIPS
      </div>
      <h2 class="text-4xl sm:text-6xl font-display font-black uppercase text-white tracking-tight leading-none mb-6">
        INVEST IN YOUR <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
          PHYSICAL ASSETS
        </span>
      </h2>
      <p class="text-gray-300 text-base sm:text-lg font-light">
        Strictly capped memberships. Transparent pricing with no cancellation penalties or hidden initiation fees.
      </p>

      <!-- Billing Toggle Switch -->
      <div class="mt-10 inline-flex items-center gap-4 bg-obsidian-900 border border-white/10 p-1.5 rounded-full backdrop-blur-xl">
        <button 
          on:click={() => annualBilling = false}
          class="px-5 py-2 rounded-full text-xs uppercase font-bold tracking-wider transition-all {!annualBilling ? 'bg-yellow-400 text-black shadow-neon-yellow' : 'text-gray-400 hover:text-white'}"
        >
          Monthly
        </button>
        <button 
          on:click={() => annualBilling = true}
          class="px-5 py-2 rounded-full text-xs uppercase font-bold tracking-wider transition-all flex items-center gap-2 {annualBilling ? 'bg-yellow-400 text-black shadow-neon-yellow' : 'text-gray-400 hover:text-white'}"
        >
          <span>Annual Billing</span>
          <span class="bg-black/80 text-yellow-400 text-[10px] px-2 py-0.5 rounded-full font-mono font-black border border-yellow-400/40">
            SAVE 20%
          </span>
        </button>
      </div>

    </div>

    <!-- Pricing Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      {#each tiers as tier}
        <div 
          use:tilt={{ max: 6, scale: tier.highlight ? 1.03 : 1.01 }}
          use:spotlight={{ color: tier.highlight ? 'rgba(255, 230, 0, 0.25)' : 'rgba(255, 230, 0, 0.1)', size: 400 }}
          class="rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 relative {tier.highlight ? 'bg-gradient-to-b from-obsidian-900 via-obsidian-900 to-black border-2 border-yellow-400 shadow-neon-yellow-xl lg:-translate-y-4' : 'glass-card border border-white/10 hover:border-yellow-400/50'}"
        >
          <!-- Top Badge -->
          <div class="flex items-center justify-between mb-8">
            <span class="text-[11px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full {tier.highlight ? 'bg-yellow-400 text-black font-black shadow-neon-yellow' : 'bg-obsidian-800 text-gray-300 border border-white/10'}">
              {tier.badge}
            </span>
            {#if tier.highlight}
              <Crown class="w-6 h-6 text-yellow-400 animate-bounce" />
            {/if}
          </div>

          <!-- Price & Title -->
          <div>
            <h3 class="text-3xl font-display font-black uppercase text-white mb-2 tracking-tight">
              {tier.name}
            </h3>
            <p class="text-gray-400 text-xs sm:text-sm font-light min-h-[40px] mb-8 leading-relaxed">
              {tier.desc}
            </p>

            <div class="flex items-baseline gap-2 mb-8 pb-8 border-b border-white/10">
              <span class="text-6xl font-display font-black tracking-tighter text-white">
                ${annualBilling ? tier.annualPrice : tier.monthlyPrice}
              </span>
              <span class="text-gray-400 text-xs uppercase tracking-widest font-mono">
                / month {annualBilling ? '(billed annually)' : ''}
              </span>
            </div>

            <!-- Features list -->
            <ul class="space-y-4 mb-10">
              {#each tier.features as feature}
                <li class="flex items-start gap-3 text-sm text-gray-200 font-light">
                  <div class="w-5 h-5 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0 mt-0.5">
                    <Check class="w-3.5 h-3.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Bottom Action Button -->
          <a 
            href="#contact" 
            class="w-full py-4.5 rounded-2xl font-display font-black text-xs uppercase tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 {tier.highlight ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-neon-yellow hover:scale-[1.02]' : 'bg-obsidian-800 text-white border border-white/20 hover:border-yellow-400 hover:text-yellow-400 hover:bg-obsidian-700'}"
          >
            <span>{tier.cta}</span>
            <ArrowRight class="w-4 h-4" />
          </a>

        </div>
      {/each}
    </div>

    <!-- Guarantee Bar -->
    <div class="mt-16 text-center text-xs text-gray-400 uppercase tracking-widest flex items-center justify-center gap-4 flex-wrap">
      <span class="flex items-center gap-1.5"><Shield class="w-4 h-4 text-yellow-400" /> 100% Satisfaction Guarantee</span>
      <span class="text-gray-700">•</span>
      <span class="flex items-center gap-1.5"><Sparkles class="w-4 h-4 text-yellow-400" /> Complimentary DEXA Scan Upon Enrollment</span>
      <span class="text-gray-700">•</span>
      <span class="flex items-center gap-1.5"><Zap class="w-4 h-4 text-yellow-400" /> Instant Biometric Credentialing</span>
    </div>

  </div>
</section>
