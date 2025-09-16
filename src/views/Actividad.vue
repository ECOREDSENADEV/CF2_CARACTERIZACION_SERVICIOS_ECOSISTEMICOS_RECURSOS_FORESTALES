<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Identificación de servicios ecosistémicos asociados a los recursos forestales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender los aspectos relacionados con los servicios ecosistémicos y su categorización a partir de su relación con los recursos forestales y proyectos o actividades productivas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué son los Objetivos de Desarrollo Sostenible (ODS)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un plan económico de Colombia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una agenda global para enfrentar retos sociales, económicos y ambientales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una estrategia de reforestación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un manual de política forestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es uno de los principales problemas ambientales en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Deforestación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Urbanización controlada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reforestación masiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Turismo ecológico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'El concepto de cobertura vegetal hace referencia a:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El suelo desnudo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El área urbana de un territorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los animales de un bosque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La vegetación que cubre la superficie terrestre.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué tipo de servicio ecosistémico provee alimentos y agua?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprovisionamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cultural.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Soporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regulación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Los bosques ayudan a mantener la fertilidad del suelo. ¿Qué tipo de servicio ecosistémico es?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Soporte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aprovisionamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regulación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál de estos es un servicio cultural?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción de madera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regulación hídrica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Recreación y turismo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Captura de carbono.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué herramienta tecnológica se usa para mapear servicios ecosistémicos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'GPS manual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sistemas de Información Geográfica (SIG).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Brújula.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fotografías aéreas sin procesa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es un producto forestal no maderable?.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tablas de pino.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Papel industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resinas y semillas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Carbón vegetal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué servicio ecosistémico se asocia con la regulación del clima?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Provisión de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Captura de CO₂ por los bosques.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Recreación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seguridad alimentaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué categoría de servicios incluye hábitat para la biodiversidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Culturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aprovisionamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regulación..',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Soporte.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
