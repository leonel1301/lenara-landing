import type { LegalDocumentContent } from "@/lib/legal/types";

export const cardsReminderPrivacyEs: LegalDocumentContent = {
  title: "Política de Privacidad",
  lastUpdated: "Última actualización: 13 de junio de 2026",
  intro: [
    "La presente Política de Privacidad describe cómo Lenara Labs («nosotros», «nuestro» o «la Empresa») recopila, utiliza, almacena y protege la información personal de los usuarios («usted» o «el Usuario») de la aplicación móvil CardsReminder (la «App»), disponible en iOS y desarrollada por Lenara Labs.",
    "Al descargar, registrarse o utilizar la App, usted declara haber leído y comprendido esta Política. Si no está de acuerdo con sus términos, le recomendamos no utilizar la App.",
    "Para consultas relacionadas con privacidad, puede contactarnos en hello@lenaralabs.com o visitar lenaralabs.com.",
  ],
  sections: [
    {
      id: "responsable",
      title: "1. Responsable del tratamiento",
      paragraphs: [
        "El responsable del tratamiento de sus datos personales es Lenara Labs, con sitio web en lenaralabs.com y correo de contacto hello@lenaralabs.com.",
        "CardsReminder es un producto de Lenara Labs orientado a usuarios en Perú, Latinoamérica, Estados Unidos y otros territorios donde el servicio pueda resultar útil.",
      ],
    },
    {
      id: "datos-recolectados",
      title: "2. Datos que recopilamos",
      paragraphs: [
        "Recopilamos únicamente la información necesaria para operar la App y brindarle sus funcionalidades. CardsReminder no almacena números completos de tarjetas de crédito, credenciales bancarias, contraseñas de entidades financieras ni datos de pago procesados por terceros.",
      ],
      subsections: [
        {
          id: "datos-cuenta",
          title: "2.1. Datos de cuenta y autenticación",
          list: [
            "Nombre y dirección de correo electrónico asociados a su cuenta de Google o Apple, cuando utiliza Google Sign-In o Apple Sign-In.",
            "Identificador único de usuario generado por Firebase Authentication.",
            "Token de autenticación necesario para mantener su sesión activa de forma segura.",
          ],
        },
        {
          id: "datos-tarjetas",
          title: "2.2. Datos de tarjetas ingresados por usted",
          list: [
            "Alias o nombre personalizado de la tarjeta (por ejemplo, «Visa Oro»).",
            "Últimos dígitos visibles o referencia parcial que usted decida registrar, nunca el número completo.",
            "Fechas de facturación, corte, vencimiento y pago que usted introduce manualmente.",
            "Preferencias de recordatorio y configuración de notificaciones asociadas a cada tarjeta.",
          ],
        },
        {
          id: "datos-uso",
          title: "2.3. Datos de uso y dispositivo",
          list: [
            "Tipo de dispositivo, versión del sistema operativo y versión de la App.",
            "Identificador del dispositivo para el envío de notificaciones push (token FCM).",
            "Registros técnicos básicos de errores y rendimiento necesarios para mantener la estabilidad del servicio.",
            "Preferencias de idioma y configuración general de la App.",
          ],
        },
      ],
    },
    {
      id: "finalidad",
      title: "3. Cómo utilizamos sus datos",
      list: [
        "Crear, autenticar y administrar su cuenta de usuario.",
        "Mostrar y organizar la información de sus tarjetas de crédito según los datos que usted ingresa.",
        "Calcular y presentar recomendaciones de fechas de pago y sugerencias de uso basadas en la información registrada.",
        "Enviar notificaciones push sobre vencimientos, recordatorios y alertas configuradas por usted.",
        "Mantener, proteger y mejorar la seguridad, estabilidad y funcionalidad de la App.",
        "Atender solicitudes de soporte, consultas o ejercicio de derechos de privacidad.",
        "Cumplir obligaciones legales aplicables cuando corresponda.",
      ],
      paragraphs: [
        "No vendemos, alquilamos ni comercializamos su información personal a terceros con fines publicitarios.",
      ],
    },
    {
      id: "base-legal",
      title: "4. Base legal del tratamiento",
      paragraphs: [
        "Tratamos sus datos personales sobre las siguientes bases, según corresponda en su jurisdicción:",
      ],
      list: [
        "Ejecución del contrato: para prestarle el servicio de CardsReminder conforme a los Términos y Condiciones.",
        "Consentimiento: cuando usted activa notificaciones push o elige vincular su cuenta con Google o Apple.",
        "Interés legítimo: para garantizar la seguridad del servicio, prevenir abusos y mejorar la experiencia de uso.",
        "Obligación legal: cuando debamos conservar o divulgar información conforme a la normativa aplicable.",
      ],
    },
    {
      id: "terceros",
      title: "5. Servicios de terceros",
      paragraphs: [
        "Para operar la App utilizamos proveedores de confianza. Estos terceros procesan datos únicamente conforme a nuestras instrucciones y sus propias políticas de privacidad:",
      ],
      subsections: [
        {
          id: "google",
          title: "5.1. Google Sign-In",
          paragraphs: [
            "Si elige iniciar sesión con Google, Google procesará ciertos datos de autenticación conforme a la Política de Privacidad de Google. Nosotros recibimos la información mínima necesaria para identificar su cuenta dentro de la App.",
          ],
        },
        {
          id: "apple",
          title: "5.2. Apple Sign-In",
          paragraphs: [
            "Si elige iniciar sesión con Apple, Apple puede proporcionarnos su nombre y correo electrónico, o un correo relay generado por Apple, según su configuración de privacidad. El tratamiento por parte de Apple se rige por la Política de Privacidad de Apple.",
          ],
        },
        {
          id: "firebase",
          title: "5.3. Firebase (Google)",
          paragraphs: [
            "Utilizamos Firebase Authentication para gestionar el inicio de sesión y Firebase Cloud Messaging (FCM) para enviar notificaciones push. Firebase puede procesar identificadores técnicos, tokens de dispositivo y metadatos necesarios para prestar estos servicios.",
          ],
        },
      ],
    },
    {
      id: "comparticion",
      title: "6. Compartición de datos",
      paragraphs: [
        "No compartimos su información personal con terceros salvo en los siguientes casos:",
      ],
      list: [
        "Con los proveedores tecnológicos descritos en la sección anterior, estrictamente para operar la App.",
        "Cuando usted nos autorice expresamente a hacerlo.",
        "Cuando sea necesario para cumplir una obligación legal, requerimiento de autoridad competente o procedimiento judicial.",
        "Para proteger los derechos, seguridad e integridad de Lenara Labs, de los usuarios o del público, cuando sea razonablemente necesario.",
      ],
    },
    {
      id: "retencion",
      title: "7. Retención de datos",
      paragraphs: [
        "Conservamos su información personal mientras mantenga una cuenta activa en CardsReminder o mientras sea necesario para prestarle el servicio.",
        "Si solicita la eliminación de su cuenta, eliminaremos o anonimizaremos sus datos personales en un plazo razonable, salvo que debamos conservarlos por obligación legal, resolución de disputas o prevención de fraude.",
        "Los registros técnicos y de seguridad podrán conservarse por un período limitado adicional con fines de auditoría y protección del servicio.",
      ],
    },
    {
      id: "seguridad",
      title: "8. Seguridad de la información",
      paragraphs: [
        "Implementamos medidas técnicas y organizativas razonables para proteger su información contra acceso no autorizado, pérdida, alteración o divulgación indebida. Entre ellas se incluyen comunicaciones cifradas, controles de acceso y buenas prácticas de desarrollo seguro.",
        "Ningún sistema es completamente infalible. Por ello, le recomendamos proteger el acceso a su dispositivo, utilizar métodos de autenticación seguros habilitados por su sistema operativo y no compartir sus credenciales con terceros.",
      ],
    },
    {
      id: "derechos",
      title: "9. Sus derechos",
      paragraphs: [
        "Según la legislación aplicable en su país, usted puede tener derecho a:",
      ],
      list: [
        "Acceder a los datos personales que conservamos sobre usted.",
        "Solicitar la rectificación de datos inexactos o incompletos.",
        "Solicitar la eliminación de sus datos personales.",
        "Oponerse o limitar determinados tratamientos.",
        "Solicitar la portabilidad de sus datos, cuando corresponda.",
        "Retirar su consentimiento en cualquier momento, sin afectar la licitud del tratamiento previo.",
      ],
      subsections: [
        {
          id: "ejercicio-derechos",
          title: "Ejercicio de derechos",
          paragraphs: [
            "Para ejercer estos derechos, escríbanos a hello@lenaralabs.com indicando su solicitud y la información necesaria para verificar su identidad. Responderemos dentro de los plazos previstos por la normativa aplicable.",
            "Los usuarios en Perú pueden ejercer derechos conforme a la Ley N.° 29733, Ley de Protección de Datos Personales. Los usuarios en la Unión Europea o Reino Unido, cuando corresponda, pueden ejercer derechos bajo el RGPD. Los usuarios en California, cuando aplique, pueden tener derechos adicionales bajo la CCPA/CPRA.",
          ],
        },
      ],
    },
    {
      id: "menores",
      title: "10. Menores de edad",
      paragraphs: [
        "CardsReminder no está dirigida a menores de 18 años. No recopilamos intencionalmente datos personales de menores. Si detectamos que un menor nos ha proporcionado información, tomaremos medidas razonables para eliminarla.",
      ],
    },
    {
      id: "transferencias",
      title: "11. Transferencias internacionales",
      paragraphs: [
        "Sus datos pueden ser procesados en servidores ubicados fuera de su país de residencia, incluidos países donde operan Google, Apple y Firebase. Cuando ello ocurra, adoptaremos medidas razonables para garantizar un nivel adecuado de protección conforme a la legislación aplicable.",
      ],
    },
    {
      id: "cambios",
      title: "12. Cambios a esta Política",
      paragraphs: [
        "Podemos actualizar esta Política de Privacidad ocasionalmente. Publicaremos la versión vigente en lenaralabs.com y, cuando los cambios sean significativos, le notificaremos mediante la App o por correo electrónico.",
        "Le recomendamos revisar periódicamente este documento. El uso continuado de la App después de la publicación de cambios implicará su aceptación de la Política actualizada, salvo que la ley exija un consentimiento adicional.",
      ],
    },
    {
      id: "contacto",
      title: "13. Contacto",
      paragraphs: [
        "Si tiene preguntas, solicitudes o reclamos relacionados con esta Política de Privacidad, puede contactarnos en:",
        "Correo electrónico: hello@lenaralabs.com",
        "Sitio web: lenaralabs.com",
        "Responsable: Lenara Labs",
      ],
    },
  ],
};
