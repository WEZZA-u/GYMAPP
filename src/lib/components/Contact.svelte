<script>
  import { tilt } from '../actions/tilt.js';
  import { spotlight } from '../actions/spotlight.js';
  import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-svelte';

  let fullName = '';
  let email = '';
  let phone = '';
  let tierInterest = 'elite';
  let message = '';
  let submitted = false;
  let loading = false;

  function handleSubmit() {
    loading = true;
    setTimeout(() => {
      loading = false;
      submitted = true;
    }, 800);
  }
</script>

<section id="contact" class="py-32 px-6 bg-obsidian-900 relative border-t border-yellow-400/20 overflow-hidden">
  
  <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[160px] pointer-events-none"></div>

  <div class="max-w-7xl mx-auto relative z-10">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left Column (5 cols): Info & Concierge -->
      <div class="lg:col-span-5 space-y-8">
        <div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
            CONCIERGE & ADMISSIONS
          </div>
          <h2 class="text-4xl sm:text-6xl font-display font-black uppercase text-white tracking-tight leading-none mb-6">
            REQUEST PRIVATE <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
              ADMISSION
            </span>
          </h2>
          <p class="text-gray-300 text-base font-light leading-relaxed">
            Talento maintains a strict membership quota to ensure our facilities never reach crowding. Our concierge will review your application within 24 hours.
          </p>
        </div>

        <!-- Contact Cards -->
        <div class="space-y-4">
          <div class="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
              <MapPin class="w-5 h-5" />
            </div>
            <div>
              <div class="text-xs uppercase font-bold text-gray-400 tracking-wider">Sanctuary Address</div>
              <div class="text-sm font-semibold text-white mt-0.5">888 Sovereign Way, Luxury Athletic District</div>
              <div class="text-xs text-yellow-400/80 font-mono mt-1">Valet Parking Available at Entrance</div>
            </div>
          </div>

          <div class="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
              <Phone class="w-5 h-5" />
            </div>
            <div>
              <div class="text-xs uppercase font-bold text-gray-400 tracking-wider">Direct Concierge</div>
              <div class="text-sm font-mono font-bold text-white mt-0.5">+1 (800) TALENTO • +1 (800) 825-3686</div>
              <div class="text-xs text-gray-400 mt-1">Direct WhatsApp Concierge Dispatch</div>
            </div>
          </div>

          <div class="glass-card rounded-2xl p-5 border border-white/10 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 shrink-0">
              <Clock class="w-5 h-5" />
            </div>
            <div>
              <div class="text-xs uppercase font-bold text-gray-400 tracking-wider">Operating Hours</div>
              <div class="text-sm font-semibold text-white mt-0.5">24/7 Biometric Keyless Access</div>
              <div class="text-xs text-gray-400 mt-1">Concierge Staff: 05:00 - 23:00 Daily</div>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Column (7 cols): Interactive Form -->
      <div 
        use:spotlight={{ color: 'rgba(255, 230, 0, 0.15)', size: 450 }}
        class="lg:col-span-7 glass-card-yellow rounded-3xl p-8 sm:p-12 border border-yellow-400/40 relative shadow-neon-yellow"
      >
        {#if submitted}
          <div class="text-center py-12 space-y-6">
            <div class="w-20 h-20 rounded-full bg-yellow-400 text-black mx-auto flex items-center justify-center shadow-neon-yellow">
              <CheckCircle2 class="w-10 h-10" />
            </div>
            <h3 class="text-3xl font-display font-black uppercase text-white">Application Received</h3>
            <p class="text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
              Thank you, <span class="text-yellow-400 font-bold">{fullName}</span>. A Talento Concierge Director will contact you via phone within 24 hours to schedule your private tour.
            </p>
            <button 
              on:click={() => submitted = false}
              class="px-6 py-2.5 rounded-full border border-yellow-400 text-yellow-400 text-xs font-bold uppercase tracking-wider hover:bg-yellow-400 hover:text-black transition-all"
            >
              Submit Another Inquiry
            </button>
          </div>
        {:else}
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            
            <div class="border-b border-white/10 pb-4 mb-2">
              <h3 class="text-2xl font-display font-bold uppercase text-white">Candidate Intake Form</h3>
              <p class="text-xs text-gray-400">Strictly confidential. No spam or unsolicited marketing.</p>
            </div>

            <!-- Full Name & Email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  bind:value={fullName}
                  placeholder="Alexander Vance" 
                  class="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm"
                />
              </div>

              <div>
                <label for="email" class="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  bind:value={email}
                  placeholder="vance@executive.com" 
                  class="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm"
                />
              </div>
            </div>

            <!-- Phone & Tier Interest -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="phone" class="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-2">
                  Direct Phone *
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  bind:value={phone}
                  placeholder="+1 (555) 019-2834" 
                  class="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm"
                />
              </div>

              <div>
                <label for="tierInterest" class="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-2">
                  Desired Membership Tier
                </label>
                <select 
                  id="tierInterest" 
                  bind:value={tierInterest}
                  class="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm"
                >
                  <option value="base">Base Athlete ($145/mo)</option>
                  <option value="elite">Elite Titanium ($295/mo)</option>
                  <option value="sovereign">Talento Sovereign VIP ($1,150/mo)</option>
                </select>
              </div>
            </div>

            <!-- Message / Goals -->
            <div>
              <label for="message" class="block text-xs uppercase font-bold tracking-wider text-gray-300 mb-2">
                Athletic Objectives / Special Requests
              </label>
              <textarea 
                id="message" 
                rows="3" 
                bind:value={message}
                placeholder="I am interested in scheduling a private walkthrough and DEXA scan..." 
                class="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-sm"
              ></textarea>
            </div>

            <!-- Submit CTA -->
            <button 
              type="submit" 
              disabled={loading}
              class="w-full py-4.5 rounded-xl bg-yellow-400 text-black font-display font-black text-xs uppercase tracking-widest shadow-neon-yellow transition-all duration-300 hover:bg-yellow-300 hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              {#if loading}
                <div class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                <span>Securing Invitation...</span>
              {:else}
                <Send class="w-4 h-4" />
                <span>Submit Private Application</span>
              {/if}
            </button>

          </form>
        {/if}

      </div>

    </div>

  </div>
</section>
