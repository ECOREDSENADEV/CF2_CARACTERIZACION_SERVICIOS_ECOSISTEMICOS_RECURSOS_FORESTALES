<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Dependencia y tendencia de los servicios ecosistémicos
    
    p.mb-5 La Economía de los Ecosistemas y la Biodiversidad (TEEB, por sus siglas en inglés - The Economics of Ecosystems and Biodiversity) es una iniciativa del Programa de las Naciones Unidas para el Medio Ambiente (UNEP), desarrollada sobre la base metodológica de la Evaluación de los Ecosistemas del Milenio (Millennium Ecosystem Assessment - MEA). Su propósito es visibilizar el valor del medio ambiente dentro de los procesos de toma de decisiones tanto en el sector público como en el privado (UNEP, 2025).

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este componente formativo se adopta como referencia el marco metodológico de los servicios ecosistémicos propuesto por el TEEB, el cual se articula con los lineamientos de la Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos y, a su vez, con los principios definidos en el Millennium Ecosystem Assessment.
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Determinación del listado base de servicios ecosistémicos
    
    p.mb-5 Para analizar adecuadamente la dependencia y tendencia de los servicios ecosistémicos, es necesario construir un listado base. A continuación, se presenta un ejemplo de servicios que pueden estar asociados con la gestión forestal:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/2.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Aprovisionamiento
              ul.lista-ul--color.mt-3
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Agua.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Madera.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Fibras y resinas.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Biomasa.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Pesca.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Carne y pieles.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Plantas medicinales.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Ingredientes naturales.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Ganadería.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Agricultura.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/3.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Regulación y soporte
              ul.lista-ul--color.mt-3
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Control de la erosión.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Regulación del clima local/regional.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Ecosistemas de purificación de agua (por ejemplo, los humedales).
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Almacenamiento y captura de carbono.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Formación y fertilidad del suelo.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/4.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Culturales
              ul.lista-ul--color.mt-3
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Recreación y turismo.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Espirituales y religiosos.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Otro servicio identificado (especificar).
    
    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Metodología para la determinación de dependencia, tendencia y categorización de los servicios ecosistémicos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez identificados los servicios ecosistémicos presentes en un área o región determinada, es necesario evaluar el grado de dependencia que tienen las comunidades, las actividades productivas, obras o proyectos sobre estos servicios, así como su tendencia y el impacto potencial que podrían generar en los recursos forestales. Para ello, se utiliza un formato estructurado que permite recopilar, analizar y categorizar la información de manera sistemática.

    .row.justify-content-center
      .col-lg-10
        .bg-color-7.mb-5.tarjeta
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema6/6.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Esta metodología ha sido establecida por el Ministerio de Ambiente y Desarrollo Sostenible y la Autoridad Nacional de Licencias Ambientales (2016, p. 106), y se basa en los siguientes criterios:
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/7.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-10")
          div(titulo="Categoría")
            p.ms-5 Tipo de servicio ecosistémico: Aprovisionamiento, Regulación, Soporte o Cultural.
          div(titulo="Servicio")
            p.ms-5 Nombre específico del servicio ecosistémico identificado.
          div(titulo="Dependencia de la comunidad")
            p.ms-5 Nivel de relación entre la comunidad y el servicio ecosistémico. 
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Alta</b>: La subsistencia depende directamente del servicio.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Media</b>: Se beneficia del servicio, pero no depende directamente.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Baja</b>: Se beneficia de forma indirecta y existen alternativas para su aprovechamiento.
          div(titulo="Dependencia del proyecto o actividad")
            p.ms-5 Grado de vinculación de un proyecto o actividad con el servicio ecosistémico. 
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Alta</b>: El servicio es esencial para las actividades principales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Media</b>: Requiere del servicio para actividades secundarias, pero puede ser reemplazado.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Baja</b>: No existe una dependencia directa.
          div(titulo="Tendencia del servicio ecosistémico")
            p.ms-5 Proyección del comportamiento del servicio ecosistémico en el tiempo. 
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Creciente</b>: El estado del servicio mejora.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Estable</b>: Se mantiene constante.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Decreciente</b>: El estado del servicio se deteriora.
          div(titulo="Impacto del proyecto o actividad")
            p.ms-5 Nivel del cambio que podría generar el proyecto sobre el servicio. Se clasifica como: 
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Alta</b>: Cambios muy significativos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Media</b>: Cambios medianamente significativos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-13
                p.mb-0 <b>Baja</b>: Cambios poco significativos.
      
    p.mb-5 Una vez determinada la dependencia y la tendencia de los servicios ecosistémicos, es importante evaluar el impacto que un proyecto productivo o actividad podría generar sobre dichos servicios. Esta evaluación se realiza a partir del nivel de afectación potencial a los componentes y procesos ecológicos, y se clasifica según criterios de significancia del cambio:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-19.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema6/8.svg', alt='Texto que describa la imagen')
          h5.text-center Alto
          p.text-center El proyecto productivo o actividad genera cambios muy significativos sobre el servicio ecosistémico.
    
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-19.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema6/8.svg', alt='Texto que describa la imagen')
          h5.text-center Medio
          p.text-center El proyecto productivo o actividad genera cambios medianamente significativos sobre el servicio ecosistémico.
    
      .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-19.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema6/8.svg', alt='Texto que describa la imagen')
          h5.text-center Bajo
          p.text-center El proyecto productivo o actividad genera cambios poco significativos sobre el servicio ecosistémico.
    
    p.mb-5 Con base en los criterios definidos previamente —categoría del servicio, dependencia de la comunidad y del proyecto, tendencia e impacto—, se propone el siguiente formato para registrar de manera sistemática la información correspondiente a los servicios ecosistémicos evaluados en un área determinada:

    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span Formato para determinar la dependencia y tendencia de servicios ecosistémicos (SSEE)

    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema6/11.svg', alt='Formato de tabla para evaluar la dependencia y tendencia de servicios ecosistémicos, con columnas para categoría del servicio, servicio identificado, nivel de dependencia de comunidades y del proyecto, tendencia del servicio y el impacto del proyecto. ').mb-3
      figcaption Nota. Ministerio de Ambiente y Desarrollo Sostenible y Autoridad Nacional de Licencias Ambientales (2016).

</template>

<script>
export default {
  name: 'Tema6',
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
