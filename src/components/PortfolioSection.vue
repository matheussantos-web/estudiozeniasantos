<script setup>
import { ArrowUpRight } from '@lucide/vue'
import { portfolio } from '../data/site'
</script>

<template>
  <section id="portfolio" class="portfolio-section bg-[#e5e0d6] text-ink">
    <div class="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-36">
      <div class="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div><p class="eyebrow eyebrow-dark"><span class="eyebrow-line"></span> Olhar, técnica, presença</p><h2 class="section-heading mt-6">A beleza está<br /><em>nos detalhes.</em></h2></div>
        <a class="text-link mb-1" href="#contato">Converse sobre seu estilo <ArrowUpRight :size="16" :stroke-width="1.5" /></a>
      </div>
      <div class="portfolio-grid mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5 lg:grid-cols-4">
        <figure v-for="(item, index) in portfolio" :key="item.title" class="portfolio-card group relative overflow-hidden">
          <img class="min-h-0 w-full flex-1 object-contain" :src="item.image" :alt="item.alt" loading="lazy" />
          <figcaption class="portfolio-caption"><span class="portfolio-index">0{{ index + 1 }}</span><div><strong>{{ item.title }}</strong><small>{{ item.category }}</small></div><ArrowUpRight class="ml-auto self-end" :size="17" :stroke-width="1.4" /></figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>