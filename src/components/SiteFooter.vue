<script setup>
import { ArrowUpRight, Camera } from '@lucide/vue'
import { site, whatsappLink } from '../data/site'
</script>

<template>
  <footer class="site-footer bg-[#11110f] text-paper">
    <div class="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-14">
      <a class="brand-mark" href="#inicio" :aria-label="`${site.name}, voltar ao início`"><span class="brand-monogram">{{ site.name.slice(0, 1) }}</span><span class="brand-name">{{ site.name }}<small>BELEZA & ESTÉTICA</small></span></a>
      <nav class="footer-links" aria-label="Links do rodapé"><a href="#trajetoria">Trajetória</a><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a><a href="#contato">Contato</a></nav>
      <div class="flex items-center gap-5"><a class="footer-social" :href="whatsappLink()" target="_blank" rel="noreferrer" aria-label="Fale pelo WhatsApp"><ArrowUpRight :size="17" /></a><a class="footer-social" href="#contato" aria-label="Instagram: adicione o link do perfil"><Camera :size="17" /></a></div>
    </div>
    <div class="mx-auto flex max-w-[1440px] flex-col gap-2 border-t border-white/10 px-5 py-5 text-xs text-paper/40 sm:px-8 md:flex-row md:justify-between lg:px-14"><span>© {{ new Date().getFullYear() }} {{ site.salon }}. Todos os direitos reservados.</span><span>Site criado para celebrar uma trajetória dedicada à beleza.</span></div>
  </footer>
</template>