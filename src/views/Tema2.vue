<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Problemáticas ambientales
    
    p La afectación de los ecosistemas forestales a nivel local, regional y global se ha producido debido a diversas problemáticas ambientales. Estas no solo generan transformaciones en los bosques como tal, sino que también impactan directamente a las comunidades rurales y urbanas, que sufren las consecuencias de fenómenos sociales, económicos y ecológicos.
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Deforestación
    
    p.mb-5 En Colombia, los ecosistemas de bosques representan el 7,1 % de la superficie forestal de Sudamérica, lo que equivale al 52 % del territorio nacional, con aproximadamente 60 millones de hectáreas (Departamento Nacional de Planeación, 2020). A pesar de ser un país megadiverso, enfrenta altas tasas de deforestación en ecosistemas clave como la Amazonía y el Pacífico Colombiano.

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema2/1.png', alt='Texto descriptivo 1')
      .col-lg-6.mb-3.mb-lg-0
        figure(data-aos="fade-down")
          img(src='@/assets/curso/tema2/2.png', alt='Texto descriptivo 1')
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/3.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Según el Ministerio de Ambiente y Desarrollo Sostenible (2024), aunque en 2023 se estimó una reducción de la deforestación entre el 25 % y el 35 %, en 2024 se reportó un aumento de esta problemática. Esta situación no solo afecta a los ecosistemas, sino también a las comunidades que desarrollan programas de conservación, al tiempo que se agravan fenómenos como el desplazamiento forzado de campesinos y los conflictos territoriales, que dificultan el acceso de las entidades públicas a estos territorios.
    
    p.mb-5 A continuación, se presentan las principales causas del incremento de la deforestación:

    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-around.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0.order-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Praderización con fines de acaparamiento de tierras
                    p.text-center Conversión de bosques en pastizales para controlar grandes extensiones de tierra.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Ganadería extensiva
                    p.text-center Uso no sostenible de grandes áreas para actividades ganaderas.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Desarrollo de infraestructura sin planificación
                    p.text-center Construcción de carreteras u obras que fragmentan ecosistemas forestales.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Cultivos ilícitos
                    p.text-center Siembra ilegal de cultivos que implica tala masiva y degradación del suelo.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Extracción ilegal de madera
                    p.text-center Tala no regulada que agota recursos forestales y afecta la biodiversidad.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Minería ilegal
                    p.text-center Actividad que destruye suelos, fuentes hídricas y cobertura boscosa.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Expansión de fronteras agrícolas
                    p.text-center Ampliación de terrenos agrícolas que invade zonas boscosas protegidas.
              .col-lg-3.order-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/4.png', alt='')

        p Esta problemática refleja una interacción compleja entre intereses económicos, actividades ilegales y ausencia de gobernanza efectiva, lo que requiere soluciones integrales y sostenibles.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Incendios forestales
    
    p.mb-5 Los incendios forestales se han convertido en una problemática ambiental creciente, estrechamente relacionada con fenómenos de variabilidad climática, como las épocas de intensa sequía, que se han intensificado en los últimos años. Esta situación actúa en sinergia con factores como la expansión de fronteras agrícolas, generando impactos significativos en diversas regiones del mundo. Su aumento está directamente vinculado a problemáticas globales, como el cambio climático.

    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/12.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") A nivel global, en 2024, la pérdida de bosques causada por incendios forestales superó la de años anteriores, tanto en términos de extensión de áreas afectadas como en la magnitud de los impactos. Según el World Resources Institute (2025), estos eventos han provocado un incremento de más de cuatro veces en las emisiones contaminantes, con efectos devastadores no solo en los ecosistemas, sino también en las condiciones climáticas y en la salud y seguridad de las personas. En este contexto, es importante identificar los principales factores asociados a la ocurrencia de incendios forestales, así como sus impactos ambientales y sociales más relevantes:
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-4.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Sequías prolongadas derivadas de la variabilidad climática
              p Pérdida de cobertura vegetal y biodiversidad.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Expansión de la frontera agrícola
              p Fragmentación de hábitats y aumento del riesgo de incendios.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/15.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Cambio climático
              p Intensificación de eventos extremos y alteraciones climáticas.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/16.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Manejo inadecuado del territorio
              p Aumento de la vulnerabilidad frente a incendios.
          .row.align-items-center.p-4.p-md-5.justify-content-around
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/17.png", alt="Imagen de acompañamiento")
            .col-lg-5.order-1.mb-3.mb-lg-0
              h5 Emisiones derivadas de la combustión
              p Contaminación del aire y afectaciones a la salud humana.
              
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Cambio climático
    
    p.mb-5 El cambio climático es una problemática de escala global que afecta a todas las regiones del planeta. Se refiere a la alteración de las condiciones climáticas medias de una región durante periodos prolongados, generalmente evaluados con datos de más de 30 años. Es importante no confundirlo con la variabilidad climática, la cual corresponde a cambios temporales en el clima en periodos más cortos. Una diferencia clave entre ambos conceptos es la siguiente:

    .row.justify-content-center.mb-3
      .col-lg-4(data-aos="fade-down").mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", alt="Imagen de acompañamiento")
        div.bg-color-14.text-center.text-white.p-4
          h5 Cambio climático
          p.mb-0 Alteración prolongada del clima promedio de una región. Se mide en escalas de varias décadas.
      .col-lg-4(data-aos="fade-up").mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", alt="Imagen de acompañamiento")
        div.bg-color-14.text-center.text-white.p-4
          h5 Variabilidad climática
          p.mb-0 Fluctuaciones a corto plazo en las condiciones climáticas. Incluye fenómenos como el niño y la niña.

    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-0.bg-color-sintesis.p-4 Según Cortés y Pineda (2020), El Niño se asocia con periodos de intenso verano, mientras que La Niña se relaciona con épocas de fuertes lluvias o intenso invierno.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Estas condiciones extremas tienen impactos directos sobre los ecosistemas forestales:
        ul.lista-ul--color.mt-3
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-5
            p.mb-0 Las olas de calor provocadas por eventos de variabilidad climática generan escasez de agua, estrés en especies vegetales y mayor riesgo de incendios forestales (Organización de las Naciones Unidas, 2025).
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-5
            p.mb-0 Por otro lado, los periodos de lluvias intensas pueden ocasionar movimientos en masa, procesos erosivos y otras afectaciones al suelo y la vegetación, lo que deteriora la calidad ambiental de diversas regiones.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-7.mb-5.tarjeta
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El cambio climático, en combinación con otros factores ambientales y sociales, representa una amenaza creciente para la salud de los bosques y la sostenibilidad de los territorios.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Impactos ambientales
    
    p.mb-5 A continuación, se presenta un pódcast que expone de manera detallada los principales impactos ambientales derivados de cambios en los recursos forestales, destacando sus efectos ecológicos, climáticos y territoriales, con base en la guía del Ministerio de Ambiente y Desarrollo Sostenible (2021). 

    .row
      .col-lg-7
        .bg-color-15.mb-5.tarjeta
          .p-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/23.svg", data-aos="zoom-in")
              .col-lg-6
                p(data-aos="fade-left").mb-4.text-white Para conocer sobre los impactos ambientales, lo invitamos a escuchar el siguiente podcast.
        
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="Impactos ambientales "
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
      .col-lg-5
        figure
        img(src="@/assets/curso/tema2/22.png", alt="Imagen de acompañamiento")




</template>

<script>
export default {
  name: 'Tema2',
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
