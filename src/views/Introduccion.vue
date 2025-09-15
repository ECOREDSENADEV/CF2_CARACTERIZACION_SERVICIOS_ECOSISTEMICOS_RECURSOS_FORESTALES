<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 El componente formativo “Categorización de servicios ecosistémicos relacionados con recursos forestales” introduce al aprendiz en la comprensión de las funciones y beneficios que los ecosistemas forestales ofrecen a la sociedad. A lo largo de este estudio se abordan las principales problemáticas ambientales, como la deforestación, los incendios forestales y el cambio climático, que amenazan la sostenibilidad de los recursos naturales y ponen en riesgo la biodiversidad y la calidad de vida de las comunidades.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Asimismo, se presentan los Objetivos de Desarrollo Sostenible como marco de referencia global para orientar la gestión responsable de los bosques y sus servicios. En este sentido, se profundiza en las distintas coberturas vegetales y en la metodología que permite identificar, categorizar y evaluar los servicios ecosistémicos de aprovisionamiento, regulación, soporte y culturales, considerando sus relaciones con las dinámicas sociales y económicas de las regiones.

    p Finalmente, el componente promueve la valoración integral de los servicios ecosistémicos como base para la toma de decisiones y la formulación de estrategias sostenibles. El aprendiz encontrará herramientas para comprender la dependencia y tendencia de estos servicios en proyectos productivos y actividades comunitarias, reconociendo la importancia de la gestión forestal en el equilibrio ambiental y en el desarrollo socioeconómico sostenible.

</template>

<script>
export default {
  name: 'Introduccion',
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
