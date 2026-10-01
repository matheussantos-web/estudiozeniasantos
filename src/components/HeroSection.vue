<script setup>
import { ArrowDown, ArrowUpRight } from '@lucide/vue'
import { site, whatsappLink } from '../data/site'
</script>

<template>
  <section id="inicio" class="hero-section relative flex min-h-[760px] items-end overflow-hidden bg-ink text-paper sm:min-h-[820px] lg:min-h-[880px]">
    <img class="hero-image absolute inset-0 h-full w-full object-cover" src="/src/assets/hero1.png" alt="Retrato de uma mulher em um ambiente de luz dourada" fetchpriority="high" />
    <div class="hero-overlay absolute inset-0"></div>
    <div class="hero-grain absolute inset-0" aria-hidden="true"></div>
    <div id="conteudo" class="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-44 sm:px-8 sm:pb-28 lg:px-14 lg:pb-32">
      <div class="max-w-5xl animate-rise">
        <p class="eyebrow mb-7"><span class="eyebrow-line"></span> Beleza com história, cuidado com propósito</p>
        <h1 class="font-display text-5xl leading-[0.92] text-paper sm:text-7xl lg:text-8xl">Décadas de experiência.<br /><em class="font-light text-gold">Beleza com assinatura.</em></h1>
        <p class="mt-8 max-w-lg text-base leading-7 text-paper/75 sm:text-lg sm:leading-8">Uma vida dedicada à estética, com olhar apurado, mãos experientes e respeito à beleza que faz cada pessoa única.</p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a class="button-primary" :href="whatsappLink()" target="_blank" rel="noreferrer">Agende seu momento <ArrowUpRight :size="17" :stroke-width="1.5" /></a>
          <a class="button-quiet" href="#trajetoria">Conheça a trajetória <ArrowDown :size="15" :stroke-width="1.5" /></a>
        </div>
      </div>
    </div>
    <div class="hero-bottom-rule absolute inset-x-0 bottom-0"></div>
  </section>
</template>