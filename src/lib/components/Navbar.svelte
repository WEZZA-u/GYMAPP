<script>
  import { onMount } from 'svelte';
  import { Shield, Sparkles, ChevronRight, Menu, X } from 'lucide-svelte';

  let scrolled = false;
  let mobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'py-3 glass-nav shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'py-6 bg-transparent'}">
  <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
    
    <!-- Brand Logo -->
    <a href="#top" class="flex items-center gap-3 group">
      <div class="relative w-11 h-11 flex items-center justify-center rounded-lg bg-black border border-yellow-500/40 p-1 transition-all duration-300 group-hover:border-yellow-400 group-hover:shadow-neon-yellow">
        <img src="/logo.png" alt="TALENTO" class="w-full h-full object-contain" />
        <div class="absolute -inset-0.5 rounded-lg bg-yellow-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div class="flex flex-col">
        <span class="font-display font-black text-xl tracking-wider text-white flex items-center gap-1.5">
          TALENTO <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping"></span>
        </span>
        <span class="text-[9px] uppercase tracking-[0.25em] text-yellow-400/90 font-medium">Sports & Fitness Center</span>
      </div>
    </a>

    <!-- Desktop Nav Links -->
    <nav class="hidden md:flex items-center gap-8 bg-obsidian-900/80 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
      <a href="#about" class="text-xs uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition-colors">Philosophy</a>
      <a href="#facilities" class="text-xs uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition-colors">Facilities</a>
      <a href="#calculator" class="text-xs uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-1">
        <Sparkles class="w-3 h-3 text-yellow-400" /> Bio-Index
      </a>
      <a href="#pricing" class="text-xs uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition-colors">Memberships</a>
      <a href="#contact" class="text-xs uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition-colors">Concierge</a>
    </nav>

    <!-- Header Actions -->
    <div class="hidden md:flex items-center gap-4">
      <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-[11px] font-mono text-yellow-400">
        <span class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
        <span>ADMISSION OPEN</span>
      </div>
      <a href="#contact" class="relative group px-5 py-2.5 rounded-full bg-yellow-400 text-black font-display font-bold text-xs uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-neon-yellow hover:scale-105 active:scale-95">
        <span class="relative z-10 flex items-center gap-1">
          Apply For Pass <ChevronRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
        <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <button
      on:click={() => mobileMenuOpen = !mobileMenuOpen}
      class="md:hidden p-2 text-gray-300 hover:text-yellow-400 border border-white/10 rounded-lg bg-obsidian-900"
      aria-label="Toggle Menu"
    >
      {#if mobileMenuOpen}
        <X class="w-6 h-6 text-yellow-400" />
      {:else}
        <Menu class="w-6 h-6" />
      {/if}
    </button>

  </div>

  <!-- Mobile Dropdown -->
  {#if mobileMenuOpen}
    <div class="md:hidden glass-card-yellow mx-4 mt-3 rounded-2xl p-6 border border-yellow-400/30 flex flex-col gap-4 shadow-2xl">
      <a on:click={() => mobileMenuOpen = false} href="#about" class="text-sm uppercase tracking-widest text-gray-200 py-2 border-b border-white/5">Philosophy</a>
      <a on:click={() => mobileMenuOpen = false} href="#facilities" class="text-sm uppercase tracking-widest text-gray-200 py-2 border-b border-white/5">Facilities</a>
      <a on:click={() => mobileMenuOpen = false} href="#calculator" class="text-sm uppercase tracking-widest text-yellow-400 py-2 border-b border-white/5 flex items-center gap-2">
        <Sparkles class="w-4 h-4 text-yellow-400" /> Bio-Index Calculator
      </a>
      <a on:click={() => mobileMenuOpen = false} href="#pricing" class="text-sm uppercase tracking-widest text-gray-200 py-2 border-b border-white/5">Memberships</a>
      <a on:click={() => mobileMenuOpen = false} href="#contact" class="text-sm uppercase tracking-widest text-gray-200 py-2">Concierge</a>
      <a on:click={() => mobileMenuOpen = false} href="#contact" class="w-full text-center py-3 bg-yellow-400 text-black font-bold uppercase tracking-wider text-xs rounded-xl shadow-neon-yellow mt-2">
        Request Private Invitation
      </a>
    </div>
  {/if}
</header>
