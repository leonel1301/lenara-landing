import type { LegalDocumentContent } from "@/lib/legal/types";

export const waloopPrivacyEs: LegalDocumentContent = {
  title: "Política de Privacidad",
  lastUpdated: "Última actualización: 21 de junio de 2026",
  intro: [
    "La presente Política de Privacidad describe cómo Lenara Labs («nosotros», «nuestro» o «la Empresa») recopila, utiliza, almacena y protege la información personal de los usuarios («usted» o «el Usuario») de la aplicación móvil Waloop (la «App»), una herramienta de finanzas personales para gestionar tarjetas de crédito, publicada por Lenara Labs y disponible en iOS.",
    "Al descargar, registrarse o utilizar la App, usted declara haber leído y comprendido esta Política. Si no está de acuerdo con sus términos, le recomendamos no utilizar la App.",
    "Para consultas relacionadas con privacidad, puede contactarnos en hello@lenaralabs.com o visitar https://lenaralabs.com.",
  ],
  sections: [
    {
      id: "responsable",
      title: "1. Responsable del tratamiento",
      paragraphs: [
        "El responsable del tratamiento de sus datos personales es Lenara Labs, con sitio web en https://lenaralabs.com y correo de contacto hello@lenaralabs.com.",
        "Waloop es un producto de Lenara Labs orientado a usuarios en Perú, Latinoamérica, Estados Unidos y otros territorios donde el servicio pueda resultar útil.",
      ],
    },
    {
      id: "datos-recolectados",
      title: "2. Datos que recopilamos y por qué",
      paragraphs: [
        "Recopilamos únicamente la información necesaria para operar la App y brindarle sus funcionalidades. Waloop no solicita ni almacena números completos de tarjeta, CVV, PIN, credenciales bancarias ni contraseñas de entidades financieras.",
      ],
      subsections: [
        {
          id: "datos-cuenta",
          title: "2.1. Datos de cuenta y autenticación",
          list: [
            "Dirección de correo electrónico asociada a su cuenta de Google o Apple, cuando utiliza Google Sign-In o Sign in with Apple.",
            "Nombre para mostrar proporcionado por su proveedor de autenticación o ingresado por usted.",
            "Identificador único de usuario (Firebase UID) generado por Firebase Authentication.",
            "Fecha de creación de cuenta («member since»).",
            "Tokens de autenticación necesarios para mantener su sesión activa de forma segura.",
          ],
        },
        {
          id: "datos-tarjetas",
          title: "2.2. Datos financieros ingresados por usted (no sensibles)",
          list: [
            "Alias o nombre de la tarjeta (por ejemplo, «Visa Oro»).",
            "Últimos 4 dígitos de la tarjeta (referencia opcional que usted decida registrar).",
            "Emisor de la tarjeta (opcional).",
            "Día de corte de facturación y día de pago.",
            "Color de la tarjeta en la interfaz y notas opcionales.",
            "Titular asociado (owner).",
            "Historial de pagos marcados como realizados (fecha de ciclo, fecha de pago, notas opcionales).",
          ],
        },
        {
          id: "datos-titulares",
          title: "2.3. Titulares / owners",
          list: [
            "Nombre del titular.",
            "Día de sueldo (opcional).",
            "Indicador de si es el usuario principal.",
          ],
        },
        {
          id: "datos-dispositivo",
          title: "2.4. Datos de dispositivo y notificaciones",
          paragraphs: [
            "Si activa las notificaciones push, registramos lo siguiente en nuestro backend para enviar alertas:",
          ],
          list: [
            "Token de Firebase Cloud Messaging (FCM).",
            "Plataforma (ios).",
            "Idioma del dispositivo.",
            "Zona horaria.",
          ],
        },
        {
          id: "datos-locales",
          title: "2.5. Preferencias locales y datos en caché",
          list: [
            "Preferencia de tema (claro / oscuro / sistema) — almacenada localmente en su dispositivo.",
            "Preferencia de notificaciones — almacenada localmente y sincronizada con nuestro backend cuando aplica.",
            "Estado de onboarding completado — almacenado localmente.",
            "Perfil de usuario en caché en SwiftData (email, nombre, fechas) en su dispositivo.",
          ],
        },
      ],
    },
    {
      id: "uso",
      title: "3. Cómo utilizamos sus datos",
      list: [
        "Crear, autenticar y gestionar su cuenta de usuario.",
        "Organizar tarjetas de crédito y titulares según la información que usted ingresa.",
        "Seguir ciclos de facturación, fechas de pago e historial de pagos.",
        "Mostrar un timeline y calendario de vencimientos próximos.",
        "Identificar días óptimos de compra según el ciclo de cada tarjeta.",
        "Enviar notificaciones push sobre vencimientos y recordatorios que usted configure.",
        "Sincronizar sus datos de forma segura entre su dispositivo y nuestro backend.",
        "Mantener, proteger y mejorar la seguridad, estabilidad y funcionalidad de la App.",
        "Responder a solicitudes de soporte, consultas o ejercicio de derechos de privacidad.",
        "Cumplir con obligaciones legales aplicables cuando sea necesario.",
      ],
      paragraphs: [
        "No vendemos, alquilamos ni comercializamos su información personal con terceros con fines publicitarios.",
        "Waloop no procesa pagos reales, no se conecta a bancos ni agregadores financieros, y no constituye asesoría financiera, legal ni fiscal.",
      ],
    },
    {
      id: "base-legal",
      title: "4. Base legal del tratamiento",
      paragraphs: [
        "Tratamos sus datos personales con las siguientes bases, según corresponda en su jurisdicción:",
      ],
      list: [
        "Ejecución del contrato: para prestarle el servicio de Waloop conforme a nuestros Términos de Servicio.",
        "Consentimiento: cuando activa notificaciones push o elige iniciar sesión con Google o Apple.",
        "Interés legítimo: para garantizar la seguridad del servicio, prevenir abusos y mejorar la experiencia de usuario.",
        "Obligación legal: cuando debamos conservar o divulgar información conforme a la ley aplicable.",
      ],
    },
    {
      id: "terceros",
      title: "5. Servicios de terceros",
      paragraphs: [
        "Utilizamos proveedores de confianza para operar la App. Estos terceros procesan datos conforme a nuestras instrucciones y sus propias políticas de privacidad. Waloop comparte únicamente los datos mínimos necesarios para que cada servicio funcione:",
      ],
      subsections: [
        {
          id: "firebase",
          title: "5.1. Firebase (Google)",
          paragraphs: [
            "Utilizamos Firebase Authentication para gestionar el inicio de sesión y Firebase Cloud Messaging (FCM) para enviar notificaciones push. Firebase puede procesar identificadores de autenticación, tokens de dispositivo y metadatos técnicos. Política de privacidad: https://firebase.google.com/support/privacy",
          ],
        },
        {
          id: "google",
          title: "5.2. Google Sign-In",
          paragraphs: [
            "Si elige iniciar sesión con Google, Google procesa ciertos datos de autenticación bajo sus propias políticas. Recibimos únicamente la información mínima necesaria para identificar su cuenta en la App. Política de privacidad: https://policies.google.com/privacy",
          ],
        },
        {
          id: "apple",
          title: "5.3. Sign in with Apple",
          paragraphs: [
            "Si elige iniciar sesión con Apple, Apple puede proporcionarnos su nombre y correo electrónico, o un correo relay generado por Apple, según su configuración de privacidad. Política de privacidad: https://www.apple.com/legal/privacy/",
          ],
        },
        {
          id: "railway",
          title: "5.4. Railway (alojamiento del backend)",
          paragraphs: [
            "Operamos nuestro propio backend API alojado en Railway (https://cards-reminder-api-production.up.railway.app). Sus datos de cuenta, información de tarjetas y preferencias de notificación se transmiten mediante HTTPS cifrado y se almacenan en servidores gestionados a través de Railway. Railway puede procesar datos técnicos y de infraestructura como proveedor de hosting. Política de privacidad: https://railway.com/legal/privacy",
          ],
        },
      ],
    },
    {
      id: "comparticion",
      title: "6. Compartición de datos",
      paragraphs: [
        "No compartimos su información personal con terceros, salvo en los siguientes casos:",
      ],
      list: [
        "Con los proveedores tecnológicos descritos anteriormente, estrictamente para operar la App.",
        "Cuando usted nos autorice expresamente.",
        "Cuando sea necesario para cumplir una obligación legal, requerimiento de autoridad competente o procedimiento judicial.",
        "Para proteger los derechos, la seguridad y la integridad de Lenara Labs, los usuarios o el público, cuando sea razonablemente necesario.",
      ],
    },
    {
      id: "retencion",
      title: "7. Retención y eliminación de datos",
      paragraphs: [
        "Conservamos su información personal mientras mantenga una cuenta activa en Waloop o mientras sea necesario para prestarle el servicio.",
        "Puede cerrar sesión en la App en cualquier momento. Waloop también ofrece una opción de eliminación de cuenta dentro de la App. Si el flujo de eliminación en la App no está disponible o prefiere solicitar la eliminación por correo, escriba a hello@lenaralabs.com. Eliminaremos o anonimizaremos sus datos personales en un plazo razonable, salvo que debamos conservarlos por obligaciones legales, resolución de disputas o prevención de fraude.",
        "Los registros técnicos y de seguridad pueden conservarse por un período adicional limitado con fines de auditoría y protección del servicio.",
      ],
    },
    {
      id: "seguridad",
      title: "8. Seguridad de la información",
      paragraphs: [
        "Implementamos medidas técnicas y organizativas razonables para proteger su información contra acceso no autorizado, pérdida, alteración o divulgación indebida. Estas incluyen comunicaciones HTTPS cifradas, controles de acceso y prácticas de desarrollo seguro.",
        "Ningún sistema es completamente infalible. Le recomendamos proteger el acceso a su dispositivo, utilizar métodos de autenticación seguros habilitados por su sistema operativo y no compartir sus credenciales con terceros.",
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
        "Solicitar la corrección de datos inexactos o incompletos.",
        "Solicitar la eliminación de sus datos personales.",
        "Oponerse o restringir ciertos tratamientos.",
        "Solicitar la portabilidad de sus datos, cuando corresponda.",
        "Retirar su consentimiento en cualquier momento, sin afectar la licitud del tratamiento previo.",
      ],
      subsections: [
        {
          id: "ejercicio-derechos",
          title: "Ejercicio de sus derechos",
          paragraphs: [
            "Para ejercer estos derechos, escríbanos a hello@lenaralabs.com con su solicitud y la información necesaria para verificar su identidad. Responderemos dentro de los plazos exigidos por la ley aplicable.",
            "Los usuarios en Perú pueden ejercer derechos conforme a la Ley N.° 29733 (Ley de Protección de Datos Personales). Los usuarios en México pueden ejercer derechos ARCO conforme a la LFPDPPP. Los usuarios en la Unión Europea o Reino Unido, cuando corresponda, pueden ejercer derechos conforme al RGPD. Los usuarios en California, cuando corresponda, pueden tener derechos adicionales conforme al CCPA/CPRA.",
          ],
        },
      ],
    },
    {
      id: "menores",
      title: "10. Menores de edad",
      paragraphs: [
        "Waloop no está dirigida a menores de 13 años (o menores de 16 en ciertas jurisdicciones). No recopilamos intencionalmente datos personales de menores. Si detectamos que un menor nos ha proporcionado información, tomaremos medidas razonables para eliminarla.",
      ],
    },
    {
      id: "transferencias",
      title: "11. Transferencias internacionales",
      paragraphs: [
        "Sus datos pueden procesarse en servidores ubicados fuera de su país de residencia, incluidos países donde operan Google, Apple, Firebase y Railway. Cuando esto ocurra, adoptaremos medidas razonables para garantizar un nivel adecuado de protección conforme a la ley aplicable.",
      ],
    },
    {
      id: "cambios",
      title: "12. Cambios a esta Política",
      paragraphs: [
        "Podemos actualizar esta Política de Privacidad periódicamente. Publicaremos la versión vigente en https://lenaralabs.com/es/apps/waloop/privacy (español) y https://lenaralabs.com/en/apps/waloop/privacy (inglés). Cuando los cambios sean significativos, le notificaremos a través de la App o por correo electrónico.",
        "El uso continuado de la App después de la publicación de cambios constituirá la aceptación de la Política actualizada, salvo que la ley exija un consentimiento adicional.",
      ],
    },
    {
      id: "contacto",
      title: "13. Contacto",
      paragraphs: [
        "Si tiene preguntas, solicitudes o reclamos relacionados con esta Política de Privacidad, puede contactarnos en:",
        "Correo: hello@lenaralabs.com",
        "Sitio web: https://lenaralabs.com",
        "Responsable: Lenara Labs",
        "© 2026 Lenara Labs. Todos los derechos reservados. Powered by Lenara Labs.",
      ],
    },
  ],
};
