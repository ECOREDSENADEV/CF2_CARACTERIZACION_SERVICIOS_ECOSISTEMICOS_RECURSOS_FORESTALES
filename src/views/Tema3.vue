<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Coberturas vegetales
    
    p.mb-5 Las coberturas vegetales hacen referencia a la vegetación presente en la superficie terrestre, como árboles, hierbas, cultivos, pastizales y fragmentos de bosques, entre otros. Este tipo de cobertura cumple un papel fundamental en el funcionamiento de los ecosistemas, ya que:

    .row.justify-content-center
      .col-lg-10
        div.bg-color-15.tarjeta.p-3.mb-3
          .row.align-items-center.justify-content-center
            .col-4.col-lg-auto.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
            .col-lg.mb-3.mb-lg-0
              div.p-2.bg-color-16.tarjeta.h-100
                h5.mb-0.text-center Protege y estabiliza el suelo
            .col-4.col-lg-auto.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")
            .col-lg.mb-3.mb-lg-0
              div.p-3.bg-color-16.tarjeta.h-100
                h5.mb-0.text-center Regula el ciclo del agua
            .col-4.col-lg-auto.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/3.svg", data-aos="zoom-in")
            .col-lg.mb-3.mb-lg-0
              div.p-2.bg-color-16.tarjeta.h-100
                h5.mb-0.text-center Contribuye a la captura de carbono

    .row.mb-5.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-5
        .row.align-items-start.mb-3
          .col-lg-auto
            img.d-none.d-flex-lg(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estos procesos ayudan tanto a la adaptación al cambio climático como a mitigar los efectos provocados por la variabilidad climática.
        p Además, la extensión y tipo de cobertura vegetal permite identificar cambios en los ecosistemas y evidenciar el impacto de las actividades humanas sobre el territorio. Esto convierte a las coberturas vegetales en un insumo clave para la planificación ambiental y para los procesos de ordenamiento territorial (FAO, 2018).

    p.mb-5 Con el objetivo de contar con una clasificación estandarizada de las coberturas de la tierra, el Instituto Geográfico Agustín Codazzi (IGAC) recomienda el uso de la clasificación <em>Corine Land Cover</em>. Esta se compone de cinco clases principales y quince subclases, como se presenta en la siguiente figura (Corporación Autónoma Regional del Valle del Cauca, 2018):

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Clases mayores de coberturas de la tierra según <em>Corine Land Cover</em>

    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema3/6.svg', alt='La imagen detalla las clases mayores de coberturas vegetales según la metodología de Corine Land Cover, la cual es aplicada en las caracterizaciones de coberturas para diferentes estudios relacionados con el componente flora.').mb-3
      figcaption Nota. Castellanos e IGAC. (20109).
    
    p.mb-5 La figura clasifica las coberturas del territorio en cuatro grandes grupos: los territorios artificializados, que incluyen zonas urbanizadas, industriales, mineras y áreas verdes creadas por intervención humana; los territorios agrícolas, conformados por cultivos anuales, permanentes, pastos y áreas heterogéneas de producción; los bosques y áreas seminaturales, donde se encuentran los bosques, la vegetación herbácea o arbustiva y las áreas abiertas con poca o nula vegetación; y las áreas húmedas, que abarcan ecosistemas continentales como humedales y ciénagas, así como costeros como manglares y estuarios.

    .bg-color-18.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            h4.bg-color-17 Clasificación de coberturas de bosques y áreas seminaturales según la metodología <em>Corine Land Cover</em>
            p.mb-0.text-white Se invita a leer el documento Clasificación de coberturas de bosques y áreas seminaturales según la metodología <em>Corine Land Cover</em>, donde se aborda la estructura jerárquica de categorías para clasificar coberturas vegetales, en especial bosques y áreas seminaturales
    
    p.mb-5 Con el fin de interpretar adecuadamente las coberturas vegetales, y en particular las coberturas de bosque, Castellanos e IGAC (2010) establecen una clasificación basada en tres criterios principales: los bosques se clasifican, a partir de la densidad en densos y abiertos; de acuerdo con la altura del dosel, en altos y bajos; y según la condición de inundabilidad del terreno donde se ubica el bosque, en inundables y de tierra firme. (p. 40). A continuación, se presenta un esquema resumen de estos criterios:

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Criterios para clasificación de bosques

    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema3/8.svg', alt='La imagen presenta la clasificación de los bosques teniendo en cuenta los bosques fragmentados, densos y abiertos. •Bosque natural  •Bosque fragmentado •Bosque fragmentado con pastos y cultivos . •Bosque fragmentado con vegetación secundaria  •Bosque denso •Bosque denso alto  •Bosque denso bajo •Bosque abierto •Bosque abierto alto •Bosque abierto bajo ').mb-3
      figcaption Nota. Castellanos e IGAC (2010).
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") La figura presenta los criterios para la clasificación de bosques, partiendo del concepto de bosque natural, definido como aquel con altura de dosel mayor o igual a 5 metros. Desde este punto, se distinguen tres grandes categorías: el bosque fragmentado, que se caracteriza por la presencia de espacios sin cobertura boscosa y se subdivide en fragmentado con pastos y cultivos (área de fragmentos mayor al 5 % y menor al 30 %) y fragmentado con vegetación secundaria (fragmentos entre el 5 % y el 50 %); el bosque denso, donde el área de cobertura arbórea es continua y supera el 70 %, clasificándose en denso alto (dosel mayor a 15 metros) y denso bajo (dosel entre 5 y 15 metros); y el bosque abierto, cuya cobertura arbórea es discontinua, entre el 30 % y el 70 %, diferenciándose en abierto alto (dosel mayor a 15 metros) y abierto bajo (dosel entre 5 y 15 metros). Esta clasificación permite identificar con mayor precisión el estado estructural y la composición de los bosques.
    
  
</template>

<script>
export default {
  name: 'Tema3',
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
