<script setup>
import { ArrowUpRight } from '@lucide/vue'
import { site } from '../data/site'
import storyImage from '../assets/story.png'
</script>

<template>
  <section id="trajetoria" class="section-paper relative overflow-hidden bg-paper text-ink">
    <div class="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-24 lg:px-14 lg:py-36">
      <div class="story-image-wrap relative mx-auto w-full max-w-[520px] lg:mx-0">
        <img class="story-image relative aspect-[4/5] w-full object-cover object-top" :src="storyImage" alt="Profissional realizando um atendimento de massagem" loading="lazy" />
        <div class="story-seal" aria-hidden="true"><span>EXCELÊNCIA</span><strong>em cada<br />encontro</strong></div>
      </div>
      <div class="story-copy">
        <p class="eyebrow eyebrow-dark"><span class="eyebrow-line"></span> A trajetória</p>
        <h2 class="section-heading mt-6 max-w-xl">Mais do que beleza.<br /><em>Uma história de dedicação.</em></h2>
        <p class="mt-8 max-w-xl text-base leading-8 text-ink/70">Com mais de quatro décadas de experiência em estética e bem-estar, Zenia Santos construiu uma trajetória marcada pela excelência, pelo rigor técnico e pela atenção individual a cada cliente.</p>
        <p class="mt-5 max-w-xl text-base leading-8 text-ink/70">Aos 23 anos, iniciou a carreira em Salvador (BA), onde se formou em manicure e depiladora pelo Senac. Na sequência, atuou em estabelecimentos de destaque na Zona Sul da capital baiana.</p>
        <p class="mt-5 max-w-xl text-base leading-8 text-ink/70">Já no Rio de Janeiro, ampliou sua formação com o curso de massoterapia no Centro Técnico de Niterói, além de especializações em estética corporal, facial e maquiagem, esta última certificada pelo renomado maquiador Maxwell Pinheiro, profissional com ampla trajetória em produções de destaque e nos bastidores da televisão.</p>
        <p class="mt-5 max-w-xl text-base leading-8 text-ink/70">Em 2001, foi selecionada e contratada pela linha Emporium Nivea para atuar na Ilha de Caras, em Angra dos Reis. Ao longo da carreira, também realizou trabalhos com personalidades como Hebe Camargo e Luciana Mello.</p>
        <p class="mt-5 max-w-xl text-base leading-8 text-ink/70">Com especializações em design e micropigmentação, Zenia une técnica, cuidado e sofisticação para valorizar a autoestima em cada atendimento.</p>
        <a class="text-link mt-8" href="#contato">Venha conhecer de perto <ArrowUpRight :size="16" :stroke-width="1.5" /></a>
        <div class="story-signature mt-12 border-t border-ink/15 pt-6"><span class="signature-mark">{{ site.name.slice(0, 1) }}</span><span><strong>{{ site.name }}</strong><small>Profissional de beleza & estética</small></span></div>
      </div>
    </div>
  </section>
</template>