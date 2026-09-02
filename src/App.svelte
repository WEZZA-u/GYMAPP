<script>
  import Navbar from './lib/components/Navbar.svelte';
  import Hero from './lib/components/Hero.svelte';
  import BrandPhilosophy from './lib/components/BrandPhilosophy.svelte';
  import Facilities from './lib/components/Facilities.svelte';
  import PerformanceCalculator from './lib/components/PerformanceCalculator.svelte';
  import Pricing from './lib/components/Pricing.svelte';
  import Contact from './lib/components/Contact.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<div class="min-h-screen bg-obsidian-950 text-white font-sans selection:bg-yellow-400 selection:text-black">
  <Navbar />
  <main>
    <Hero />
    <BrandPhilosophy />
    <Facilities />
    <PerformanceCalculator />
    <Pricing />
    <Contact />
  </main>
  <Footer />
</div>
