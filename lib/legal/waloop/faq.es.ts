import type { LegalDocumentContent } from "@/lib/legal/types";

export const waloopFaqEs: LegalDocumentContent = {
  title: "Preguntas Frecuentes",
  lastUpdated: "Última actualización: 6 de julio de 2026",
  intro: [
    "Encuentre respuestas a las preguntas más comunes sobre Waloop, la app de ciclos de facturación y seguimiento de pagos de tarjetas de crédito de Lenara Labs.",
    "Para consultas de privacidad o legales, consulte nuestra Política de Privacidad y Términos de Servicio, o escriba a hello@lenaralabs.com.",
  ],
  sections: [
    {
      id: "que-es-waloop",
      title: "¿Qué es Waloop?",
      paragraphs: [
        "Waloop es una aplicación de finanzas personales para iOS y Android que le ayuda a organizar tarjetas de crédito, seguir ciclos de facturación y fechas de pago, recibir recordatorios e identificar días óptimos de compra. Está publicada por Lenara Labs.",
        "Eslogan: Card billing cycles & payment tracker.",
      ],
    },
    {
      id: "cambio-nombre",
      title: "¿Waloop es lo mismo que Cards Reminder?",
      paragraphs: [
        "Sí. Waloop es el nuevo nombre de Cards Reminder (anteriormente también conocida como Cyklo en algunos contextos). La app, sus funcionalidades y sus datos siguen siendo los mismos — solo cambió el nombre de la marca.",
      ],
    },
    {
      id: "conexion-banco",
      title: "¿Waloop se conecta a mi banco?",
      paragraphs: [
        "No. Waloop no se conecta a bancos, entidades financieras ni agregadores de open banking. Usted ingresa manualmente la información de sus tarjetas, como nombre, últimos 4 dígitos, día de corte y día de pago.",
      ],
    },
    {
      id: "numeros-tarjeta",
      title: "¿Waloop almacena mi número completo de tarjeta?",
      paragraphs: [
        "No. Waloop nunca solicita ni almacena números completos de tarjeta, CVV, PIN ni credenciales bancarias. Puede registrar opcionalmente los últimos 4 dígitos como referencia.",
      ],
    },
    {
      id: "pagos",
      title: "¿Puedo pagar mis tarjetas de crédito desde Waloop?",
      paragraphs: [
        "No. Waloop no procesa pagos reales ni transfiere dinero. Es una herramienta de organización y recordatorio. Usted marca los pagos como realizados para su propio seguimiento — los pagos reales deben hacerse a través de su banco o emisor de tarjeta.",
      ],
    },
    {
      id: "inicio-sesion",
      title: "¿Cómo inicio sesión?",
      paragraphs: [
        "Waloop admite Sign in with Apple y Google Sign-In. La autenticación se gestiona a través de Firebase Authentication. Recibimos su correo electrónico, nombre para mostrar y un identificador único de usuario para crear y gestionar su cuenta.",
      ],
    },
    {
      id: "hogar",
      title: "¿Puedo gestionar tarjetas de varias personas en mi hogar?",
      paragraphs: [
        "Sí. Waloop le permite crear titulares (owners) y asociar tarjetas a cada persona. Puede configurar opcionalmente el día de sueldo de cada titular e indicar quién es el usuario principal.",
      ],
    },
    {
      id: "dias-optimos",
      title: "¿Qué son los días óptimos de compra?",
      paragraphs: [
        "Según el día de corte de facturación de cada tarjeta, Waloop sugiere los mejores días para realizar compras de modo que los cargos caigan en el período de facturación más favorable. Son estimaciones — verifique siempre con su emisor de tarjeta.",
      ],
    },
    {
      id: "notificaciones",
      title: "¿Cómo funcionan las notificaciones push?",
      paragraphs: [
        "Si activa las notificaciones, Waloop envía recordatorios sobre fechas de pago y ciclos de facturación próximos. Las notificaciones son opcionales y requieren su consentimiento. Puede desactivarlas en cualquier momento desde la configuración de su dispositivo o dentro de la App.",
      ],
    },
    {
      id: "almacenamiento",
      title: "¿Dónde se almacenan mis datos?",
      paragraphs: [
        "Sus datos de cuenta y tarjetas se sincronizan con nuestro backend API alojado en Railway mediante HTTPS cifrado. Algunas preferencias (tema, estado de onboarding) se almacenan localmente en su dispositivo. Su perfil también puede guardarse en caché localmente mediante SwiftData.",
      ],
    },
    {
      id: "delete-account",
      title: "¿Cómo elimino mi cuenta?",
      subsections: [
        {
          id: "eliminar-desde-app",
          title: "Opción 1 — Desde la app",
          list: [
            "Abre Waloop (Cards Reminder)",
            "Ve a Perfil → Ajustes",
            "Toca Eliminar cuenta y confirma",
          ],
        },
        {
          id: "eliminar-por-correo",
          title: "Opción 2 — Por correo",
          paragraphs: [
            "Si no tienes la app instalada, escribe a hello@lenaralabs.com desde el correo que usaste para iniciar sesión (Apple o Google).",
          ],
        },
        {
          id: "datos-eliminados",
          title: "Datos que se eliminan",
          list: [
            "Cuenta y perfil (email, nombre)",
            "Tarjetas, titulares, historial de pagos",
            "Tokens de notificaciones (FCM)",
            "Feedback enviado",
          ],
        },
        {
          id: "datos-conservados",
          title: "Datos que pueden conservarse temporalmente",
          list: [
            "Logs técnicos de seguridad (hasta 90 días)",
            "Datos que debamos conservar por obligación legal",
          ],
          paragraphs: [
            "Plazo: eliminación en un plazo razonable, normalmente dentro de 30 días.",
          ],
        },
      ],
    },
    {
      id: "idiomas",
      title: "¿En qué idiomas está disponible Waloop?",
      paragraphs: [
        "Waloop está disponible en inglés y español. La interfaz de la app se adapta a la configuración de idioma de su dispositivo.",
      ],
    },
    {
      id: "plataformas",
      title: "¿Waloop está disponible en Android?",
      paragraphs: [
        "Sí. Waloop está disponible en iOS (App Store) y Android (Google Play). Ambas versiones ofrecen las mismas funciones principales para seguir ciclos de facturación, fechas de pago y recordatorios.",
      ],
    },
    {
      id: "asesoria",
      title: "¿Waloop es asesoría financiera?",
      paragraphs: [
        "No. Waloop es una herramienta informativa y organizativa. No proporciona asesoría financiera, legal ni fiscal. Verifique siempre fechas, montos y obligaciones de pago con su institución financiera.",
      ],
    },
    {
      id: "contacto",
      title: "¿Cómo contacto a Lenara Labs?",
      paragraphs: [
        "Correo: hello@lenaralabs.com",
        "Sitio web: https://lenaralabs.com",
        "© 2026 Lenara Labs. Todos los derechos reservados. Powered by Lenara Labs.",
      ],
    },
  ],
};
