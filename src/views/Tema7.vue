<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Beneficios socioeconómicos de los recursos forestales
    
    p.mb-5 Los recursos forestales aportan una amplia gama de beneficios que inciden directamente en la calidad de vida de las comunidades locales y en el bienestar social general. Estos beneficios se manifiestan en aspectos económicos, alimentarios y de desarrollo territorial, entre otros. A continuación, se describen los principales beneficios socioeconómicos asociados a estos recursos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema7/1.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Generación de empleo
              p El aprovechamiento de los recursos forestales, ya sean maderables o no maderables, genera sustento directo e indirecto. Esto ocurre tanto a nivel local mediante proyectos productivos comunitarios, como a nivel industrial, a través del sector maderero.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema7/2.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Aporte a la economía
              p El uso sostenible de productos como madera, papel, aceites, resinas y otros productos no maderables contribuye significativamente al Producto Interno Bruto (PIB), impulsando el desarrollo económico nacional.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema7/3.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Comercio nacional e internacional
              p La comercialización de productos forestales fortalece el mercado interno y promueve exportaciones, generando ingresos adicionales para el país y oportunidades para las comunidades productoras.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema7/4.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Seguridad alimentaria
              p Los productos forestales no maderables ofrecen diversas alternativas alimenticias que complementan la dieta de comunidades rurales y urbanas, aportando a la nutrición y a la soberanía alimentaria.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema7/5.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Desarrollo rural
              p El manejo y aprovechamiento responsable de los recursos forestales permite generar alternativas económicas solidarias, que impulsan el desarrollo sostenible en zonas rurales, reduciendo la pobreza y fortaleciendo la economía local.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
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
