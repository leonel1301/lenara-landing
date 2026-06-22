import type { LegalDocumentContent } from "@/lib/legal/types";

export const waloopFaqEs: LegalDocumentContent = {
  title: "Preguntas Frecuentes",
  lastUpdated: "Última actualización: 21 de junio de 2026",
  intro: [
    "Encuentre respuestas a las preguntas más comunes sobre Waloop, la app de ciclos de facturación y seguimiento de pagos de tarjetas de crédito de Lenara Labs.",
    "Para consultas de privacidad o legales, consulte nuestra Política de Privacidad y Términos de Servicio, o escriba a hello@lenaralabs.com.",
  ],
  sections: [
    {
      id: "que-es-waloop",
      title: "¿Qué es Waloop?",
      paragraphs: [
        "Waloop es una aplicación iOS de finanzas personales que le ayuda a organizar tarjetas de crédito, seguir ciclos de facturación y fechas de pago, recibir recordatorios e identificar días óptimos de compra. Está publicada por Lenara Labs.",
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
      id: "eliminar-cuenta",
      title: "¿Cómo elimino mi cuenta?",
      paragraphs: [
        "Puede cerrar sesión en cualquier momento. Waloop ofrece una opción de eliminación de cuenta dentro de la App. Si el flujo en la App no está disponible, escriba a hello@lenaralabs.com para solicitar la eliminación. Eliminaremos sus datos personales en un plazo razonable, sujeto a requisitos legales de retención.",
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
        "Waloop está disponible actualmente en iOS (SwiftUI). El soporte para Android aún no está disponible.",
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
