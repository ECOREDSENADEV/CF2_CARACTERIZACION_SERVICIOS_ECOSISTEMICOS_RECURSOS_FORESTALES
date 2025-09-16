<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Técnicas de identificación de servicios ecosistémicos
    
    p.mb-5 Según lo planteado por MEA (2005) y López y Benavides (2021), existen diversas técnicas para la identificación de los servicios ecosistémicos. A continuación, se presentan las más utilizadas, clasificadas por su enfoque y metodología:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/1.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Mapeo participativo
              p Involucra a las poblaciones locales y actores clave en el proceso de identificación de los servicios ecosistémicos en un territorio. Se utilizan herramientas como la cartografía social, mapas, visitas de campo y entrevistas.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/2.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Matrices de identificación
              p Se elaboran matrices que relacionan los tipos de ecosistemas con los servicios que proporcionan. Esta técnica permite identificar y categorizar los servicios a través de evaluaciones cualitativas o cuantitativas.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/3.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Sistemas de Información Geográfica (SIG)
              p Utilizan herramientas de georreferenciación mediante software especializado como QGIS o ArcGIS. Permiten mapear la distribución espacial de los servicios ecosistémicos, siendo fundamentales para la planificación territorial.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/4.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Monitoreo en campo
              p Consiste en inspecciones directas para realizar inventarios de flora y fauna. Es una técnica común en estudios ambientales para el levantamiento de la línea base, ya que permite conocer las condiciones reales de los ecosistemas y los servicios que ofrecen.

</template>

<script>
export default {
  name: 'Tema5',
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
