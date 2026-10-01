<script setup>
import { ArrowUpRight, Clock3, MapPin, MessageCircle, MoveUpRight } from '@lucide/vue'
import { site, whatsappLink } from '../data/site'

const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`
</script>

<template>
  <section id="contato" class="contact-section relative overflow-hidden bg-ink text-paper">
    <div class="contact-top-rule absolute inset-x-0 top-0"></div>
    <div class="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-14 lg:py-36">
      <div>
        <p class="eyebrow"><span class="eyebrow-line"></span> Vamos conversar?</p>
        <h2 class="section-heading mt-6 max-w-xl">Seu próximo momento<br /><em>começa aqui.</em></h2>
        <p class="mt-7 max-w-md text-base leading-7 text-paper/60">Um atendimento atencioso começa antes mesmo da primeira visita. Entre em contato para agendar ou tirar suas dúvidas.</p>
        <a class="button-primary mt-9" :href="whatsappLink()" target="_blank" rel="noreferrer"><MessageCircle :size="17" :stroke-width="1.6" /> Entre em contato pelo WhatsApp <ArrowUpRight :size="16" :stroke-width="1.5" /></a>
        <div class="contact-details mt-12 space-y-6 border-t border-white/15 pt-8">
          <div class="contact-detail"><MapPin :size="18" :stroke-width="1.4" /><span><strong>Visite-nos</strong><small>{{ site.address }}<br />{{ site.city }}</small></span></div>
          <div class="contact-detail"><Clock3 :size="18" :stroke-width="1.4" /><span><strong>Atendimento</strong><small>{{ site.hours }}</small></span></div>
        </div>
      </div>
      <div class="map-panel relative min-h-[360px] overflow-hidden border border-white/15 sm:min-h-[480px]">
        <div class="map-grid absolute inset-0" aria-hidden="true"></div>
        <svg class="map-lines absolute inset-0 h-full w-full" viewBox="0 0 620 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M-30 108C88 127 98 76 187 89S330 146 401 99 544 33 659 61M-12 315C88 285 144 350 239 316S397 233 492 278 588 340 649 325M94-20C138 79 79 162 135 226S223 353 186 500M371-18C333 79 406 167 362 241S321 376 393 500M548-8C484 93 530 167 492 221S482 357 557 498" />
          <path class="map-road-major" d="M-24 218C102 184 161 230 261 203S434 143 653 187M250-22C282 79 249 142 314 217S429 359 451 501" />
          <path class="map-river" d="M-12 414C125 383 160 423 272 391S463 328 639 369" />
        </svg>
        <div class="map-label map-label-one">CENTRO</div><div class="map-label map-label-two">{{ site.city.split(' - ')[0].toUpperCase() }}</div>
        <div class="map-pin"><span></span><small>{{ site.salon }}</small></div>
        <a class="map-open" :href="mapLink" target="_blank" rel="noreferrer">Ver localização <MoveUpRight :size="15" :stroke-width="1.5" /></a>
        <div class="map-corner-label">LOCALIZAÇÃO<br />{{ site.city.toUpperCase() }}</div>
      </div>
    </div>
  </section>
</template>