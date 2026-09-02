<script>
  import { ArrowUp, Instagram, Twitter, Linkedin, Youtube, ShieldCheck } from 'lucide-svelte';

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="bg-obsidian-950 text-white pt-20 pb-12 px-6 border-t border-yellow-400/30 relative">
  
  <div class="max-w-7xl mx-auto">
    
    <!-- Top Footer Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
      
      <!-- Brand Col (2 cols) -->
      <div class="lg:col-span-2 space-y-6">
        <a href="#top" class="flex items-center gap-3 group">
          <div class="w-12 h-12 rounded-xl bg-black border border-yellow-400/40 p-1 group-hover:shadow-neon-yellow transition-all">
            <img src="/logo.png" alt="TALENTO" class="w-full h-full object-contain" />
          </div>
          <div>
            <span class="font-display font-black text-2xl tracking-wider text-white">TALENTO</span>
            <div class="text-[10px] uppercase tracking-[0.25em] text-yellow-400">Sports & Fitness Center</div>
          </div>
        </a>

        <p class="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
          The pinnacle of physical optimization and luxury lifestyle. Providing high-achievers with the tools, technology, and sanctuary necessary for human supremacy.
        </p>

        <!-- Social Icons -->
        <div class="flex items-center gap-3">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" class="w-10 h-10 rounded-xl bg-obsidian-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/60 hover:shadow-neon-yellow transition-all" aria-label="Instagram">
            <Instagram class="w-4 h-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" class="w-10 h-10 rounded-xl bg-obsidian-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/60 hover:shadow-neon-yellow transition-all" aria-label="Twitter">
            <Twitter class="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" class="w-10 h-10 rounded-xl bg-obsidian-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/60 hover:shadow-neon-yellow transition-all" aria-label="LinkedIn">
            <Linkedin class="w-4 h-4" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" class="w-10 h-10 rounded-xl bg-obsidian-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/60 hover:shadow-neon-yellow transition-all" aria-label="YouTube">
            <Youtube class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Links Col 1 -->
      <div>
        <h4 class="text-xs font-mono font-bold uppercase tracking-widest text-yellow-400 mb-6">Infrastructure</h4>
        <ul class="space-y-3 text-sm text-gray-400 font-light">
          <li><a href="#facilities" class="hover:text-yellow-400 transition-colors">Olympic Iron Arena</a></li>
          <li><a href="#facilities" class="hover:text-yellow-400 transition-colors">Cryo Reset Suite (-110°C)</a></li>
          <li><a href="#facilities" class="hover:text-yellow-400 transition-colors">VO2 & Metabolic Lab</a></li>
          <li><a href="#facilities" class="hover:text-yellow-400 transition-colors">Hyperbaric 2.0 ATA</a></li>
          <li><a href="#facilities" class="hover:text-yellow-400 transition-colors">Sovereign Penthouse</a></li>
        </ul>
      </div>

      <!-- Links Col 2 -->
      <div>
        <h4 class="text-xs font-mono font-bold uppercase tracking-widest text-yellow-400 mb-6">Memberships</h4>
        <ul class="space-y-3 text-sm text-gray-400 font-light">
          <li><a href="#pricing" class="hover:text-yellow-400 transition-colors">Base Athlete Access</a></li>
          <li><a href="#pricing" class="hover:text-yellow-400 transition-colors">Elite Titanium Tier</a></li>
          <li><a href="#pricing" class="hover:text-yellow-400 transition-colors">Sovereign VIP Pass</a></li>
          <li><a href="#calculator" class="hover:text-yellow-400 transition-colors">Bio-Index Calculator</a></li>
          <li><a href="#contact" class="hover:text-yellow-400 transition-colors">Corporate Athlete Accounts</a></li>
        </ul>
      </div>

      <!-- Newsletter Col -->
      <div>
        <h4 class="text-xs font-mono font-bold uppercase tracking-widest text-yellow-400 mb-6">Private Journal</h4>
        <p class="text-xs text-gray-400 font-light mb-4">
          Receive quarterly intelligence dossiers on athletic longevity and sports medicine.
        </p>
        <form on:submit|preventDefault class="space-y-2">
          <input 
            type="email" 
            placeholder="enter your email..." 
            class="w-full bg-obsidian-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400" 
          />
          <button class="w-full py-2.5 rounded-xl bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider hover:bg-yellow-300 transition-colors">
            Subscribe
          </button>
        </form>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
      <div class="flex items-center gap-2">
        <ShieldCheck class="w-4 h-4 text-yellow-400" />
        <span>© 2026 TALENTO SPORTS & FITNESS CENTER. All Rights Reserved.</span>
      </div>

      <div class="flex items-center gap-6">
        <a href="#contact" class="hover:text-yellow-400 transition-colors">Privacy Policy</a>
        <a href="#contact" class="hover:text-yellow-400 transition-colors">Terms of Sovereignty</a>
        <button on:click={scrollToTop} class="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-bold uppercase tracking-wider cursor-pointer">
          <span>Top</span> <ArrowUp class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>

  </div>
</footer>
