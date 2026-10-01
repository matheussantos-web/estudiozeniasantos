<script setup>
import { ArrowUpRight, Droplets, HandHeart, Paintbrush, ScanFace, Scissors } from '@lucide/vue'
import { services } from '../data/site'

const icons = { ScanFace, Droplets, HandHeart, Scissors, Paintbrush }
</script>

<template>
  <section id="servicos" class="services-section bg-ink text-paper">
    <div class="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-36">
      <div class="section-intro grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div><p class="eyebrow"><span class="eyebrow-line"></span> Cuidado feito para você</p><h2 class="section-heading mt-6 max-w-2xl">Técnica apurada.<br /><em>Beleza sem excessos.</em></h2></div>
        <p class="max-w-md text-base leading-7 text-paper/60 lg:justify-self-end">Cada atendimento começa com uma conversa. O serviço certo é aquele que respeita sua essência e o que você deseja sentir.</p>
      </div>
      <div class="service-grid mt-16 grid border-t border-white/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:grid-cols-5">
        <article v-for="service in services" :key="service.number" class="service-item group border-b border-white/15 py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:px-7 lg:py-9 lg:first:pl-0 lg:last:border-r-0">
          <div class="flex items-start justify-between"><span class="service-number">{{ service.number }}</span><component :is="icons[service.icon]" class="text-gold transition-transform duration-300 group-hover:-rotate-12" :size="21" :stroke-width="1.35" /></div>
          <h3 class="mt-10 font-display text-3xl leading-tight text-paper">{{ service.title }}</h3>
          <p class="mt-4 min-h-[72px] text-sm leading-6 text-paper/55">{{ service.description }}</p>
          <a class="service-link mt-7" href="#contato" :aria-label="`Consultar sobre ${service.title}`"><span>Consultar</span><ArrowUpRight :size="15" /></a>
        </article>
      </div>
    </div>
  </section>
</template>