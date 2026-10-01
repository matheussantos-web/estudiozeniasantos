<script setup>
import { ref } from 'vue'
import { ArrowUpRight, Menu, X } from '@lucide/vue'
import { site, whatsappLink } from '../data/site'

const menuOpen = ref(false)
const links = [
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Contato', href: '#contato' },
]

function handleNavigation(event, href) {
  menuOpen.value = false

  if (href !== '#trajetoria') return

  event.preventDefault()
  const heading = document.querySelector('#trajetoria .section-heading')
  if (!heading) return

  const headerHeight = document.querySelector('header').getBoundingClientRect().height
  const availableHeight = window.innerHeight - headerHeight
  const headingTop = heading.getBoundingClientRect().top + window.scrollY
  const top = headingTop - headerHeight - (availableHeight - heading.getBoundingClientRect().height) / 2
  window.history.pushState(null, '', href)
  window.scrollTo({ top: Math.max(0, top), behavior: 'instant' })
}
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-paper backdrop-blur-xl">
    <div class="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
      <a class="brand-mark" href="#inicio" :aria-label="`${site.name}, início`">
        <span class="brand-monogram">{{ site.name.slice(0, 1) }}</span>
        <span class="brand-name">{{ site.name }}<small>BELEZA & ESTÉTICA</small></span>
      </a>
      <nav class="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
        <a v-for="link in links" :key="link.href" class="nav-link" :href="link.href" @click="handleNavigation($event, link.href)">{{ link.label }}</a>
      </nav>
      <a class="header-cta hidden items-center gap-2 md:inline-flex" :href="whatsappLink()" target="_blank" rel="noreferrer">Agendar horário <ArrowUpRight :size="15" :stroke-width="1.6" /></a>
      <button class="mobile-menu-button md:hidden" type="button" :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
        <X v-if="menuOpen" :size="22" /><Menu v-else :size="22" />
      </button>
    </div>
    <nav v-if="menuOpen" class="mobile-nav md:hidden" aria-label="Navegação móvel">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="handleNavigation($event, link.href)">{{ link.label }}</a>
      <a class="mobile-nav-cta" :href="whatsappLink()" target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
    </nav>
  </header>
</template>