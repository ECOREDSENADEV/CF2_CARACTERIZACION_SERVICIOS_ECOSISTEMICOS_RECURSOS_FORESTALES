<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Objetivos de Desarrollo Sostenible
    
    p Con el fin de establecer metas concretas para enfrentar los grandes retos globales, en 2015 se creó la Agenda 2030, que se convirtió en la hoja de ruta para el desarrollo sostenible. Este plan de acción global, impulsado por las Naciones Unidas, plantea 17 Objetivos de Desarrollo Sostenible (ODS) con 169 metas de carácter integrado e indivisible, que abarcan aspectos económicos, sociales y ambientales (Organización de las Naciones Unidas, 2015).

    p.mb-5 Los ODS, también conocidos por su sigla en inglés <em>SDGs (Sustainable Development Goals)</em>, se enfocan en las siguientes temáticas principales:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Objetivos de Desarrollo Sostenible
        
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/1.png', alt='La imagen presenta los 17 objetivos de desarrollo sostenible establecidos en la Agenda 2030, siendo esta un conjunto de metas a cumplir por parte de países firmantes, se resalta el objetivo 12 y el 15, los cuales están relacionados con la gestión de los bosques.')
          figcaption Nota. Organización Naciones Unidas. (2015).
    
    p.mb-5 Respecto a los recursos forestales, los Objetivos de Desarrollo Sostenible abordan su gestión desde distintas perspectivas:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="ODS 12: Producción y consumo responsables")
        .row.p-4.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-2
            h4 ODS 12: Producción y consumo responsables
            p.mb-0 Establece como meta que, para el año 2030, se logre la gestión sostenible y el uso eficiente de los recursos naturales, lo cual incluye los recursos forestales. This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-lg-5.order-1.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/2.png', alt='Texto que describa la imagen')
      .py-3.py-lg-4(titulo="ODS 15: Vida de ecosistemas terrestres")
        .row.p-4.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0.order-2
            h4 ODS 15: Vida de ecosistemas terrestres
            p Busca gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras y detener la pérdida de biodiversidad. Entre sus metas, se establece que se debe: 
            p.mb-0 “Movilizar un volumen apreciable de recursos procedentes de todas las fuentes y a todos los niveles para financiar la gestión forestal sostenible y proporcionar incentivos adecuados a los países en desarrollo para que promuevan dicha gestión, en particular con miras a la conservación y la reforestación” (Organización de las Naciones Unidas, 2015).

          .col-lg-5.order-1.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
    

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
