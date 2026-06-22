import type { LegalDocumentContent } from "@/lib/legal/types";

export const waloopTermsEs: LegalDocumentContent = {
  title: "Términos de Servicio",
  lastUpdated: "Última actualización: 21 de junio de 2026",
  intro: [
    "Los presentes Términos de Servicio (los «Términos») regulan el acceso y uso de la aplicación móvil Waloop (la «App»), una herramienta de finanzas personales para gestionar tarjetas de crédito, desarrollada y operada por Lenara Labs («nosotros», «nuestro» o «la Empresa»), con sitio web en https://lenaralabs.com.",
    "Al descargar, registrarse, acceder o utilizar la App, usted (el «Usuario») acepta quedar vinculado por estos Términos y nuestra Política de Privacidad. Si no está de acuerdo, no utilice la App.",
  ],
  sections: [
    {
      id: "aceptacion",
      title: "1. Aceptación de los Términos",
      paragraphs: [
        "Al crear una cuenta o utilizar Waloop, usted declara ser mayor de 18 años y contar con capacidad legal para contratar conforme a la legislación de su país.",
        "Si utiliza la App en nombre de una entidad legal, declara contar con la autoridad suficiente para vincular a dicha entidad a estos Términos.",
      ],
    },
    {
      id: "descripcion",
      title: "2. Descripción del servicio",
      paragraphs: [
        "Waloop es una aplicación iOS de finanzas personales que le ayuda a organizar tarjetas de crédito y titulares, seguir ciclos de facturación y fechas de pago, recibir recordatorios, ver un timeline de vencimientos, identificar días óptimos de compra, marcar pagos como realizados y consultar historial de pagos.",
        "Eslogan: Card billing cycles & payment tracker.",
        "La App utiliza Sign in with Apple y Google Sign-In a través de Firebase Authentication, notificaciones push mediante Firebase Cloud Messaging, y un backend API alojado en Railway.",
        "Waloop no almacena números completos de tarjeta, CVV, PIN ni credenciales bancarias. No procesa pagos reales, no se conecta a bancos ni agregadores financieros, ni transfiere dinero en su nombre.",
      ],
    },
    {
      id: "cuenta",
      title: "3. Elegibilidad y cuenta de usuario",
      list: [
        "Para utilizar ciertas funcionalidades, debe crear una cuenta mediante Sign in with Apple o Google Sign-In.",
        "Es responsable de mantener la confidencialidad de su dispositivo y las credenciales asociadas a su cuenta.",
        "Debe proporcionar información veraz y mantenerla actualizada según lo requiera la App.",
        "Puede cerrar sesión en la App en cualquier momento.",
        "Puede solicitar la eliminación de su cuenta mediante la opción en la App o escribiendo a hello@lenaralabs.com.",
        "Debe notificarnos de inmediato si detecta acceso no autorizado a su cuenta.",
      ],
    },
    {
      id: "uso-aceptable",
      title: "4. Uso aceptable y prohibiciones",
      paragraphs: [
        "Al utilizar la App, usted se compromete a:",
      ],
      list: [
        "Utilizar Waloop únicamente para fines personales y lícitos.",
        "Ingresar información veraz y verificar fechas y datos relevantes antes de tomar decisiones.",
        "No utilizar la App para actividades fraudulentas, ilegales o que infrinjan derechos de terceros.",
        "No intentar acceder sin autorización a sistemas, cuentas o datos de otros usuarios.",
        "No realizar ingeniería inversa, descompilar, modificar ni distribuir la App sin autorización expresa de Lenara Labs.",
        "No utilizar mecanismos automatizados para extraer datos o interferir con el funcionamiento del servicio.",
        "No suplantar la identidad de otra persona.",
      ],
    },
    {
      id: "exactitud",
      title: "5. Exactitud de la información ingresada",
      paragraphs: [
        "Usted es el único responsable de la exactitud e integridad de toda la información que ingresa en Waloop, incluyendo nombres de tarjetas, días de corte, días de pago, datos de titulares y registros de pagos.",
        "Lenara Labs no verifica su información con entidades financieras y no es responsable de errores derivados de datos incorrectos o desactualizados que usted proporcione.",
      ],
    },
    {
      id: "naturaleza-informativa",
      title: "6. Aviso legal — herramienta informativa",
      paragraphs: [
        "Waloop es una herramienta de organización y recordatorio. Las recomendaciones, alertas, fechas sugeridas, días óptimos de compra, vistas de timeline y cualquier contenido mostrado en la App tienen carácter informativo y organizativo.",
        "Waloop no garantiza fechas exactas de facturación o pago según lo determine su banco o emisor de tarjeta. Los ciclos de facturación, períodos de gracia, feriados y políticas del emisor pueden diferir de las fechas que usted ingresa o que la App calcula. Usted es el único responsable de verificar todas las fechas, montos, cargos, intereses y obligaciones de pago directamente con su institución financiera.",
        "La App no constituye asesoría financiera, contable, legal, fiscal ni de inversión. Lenara Labs no es una entidad financiera, banco, emisor de tarjetas ni asesor regulado.",
      ],
    },
    {
      id: "notificaciones",
      title: "7. Notificaciones push",
      paragraphs: [
        "Waloop puede enviar notificaciones push sobre ciclos de facturación, fechas de pago y recordatorios que usted configure. Las notificaciones push son opcionales y requieren su consentimiento a través de la configuración de su dispositivo y las preferencias en la App.",
        "Puede desactivar las notificaciones en cualquier momento desde la configuración de su dispositivo o dentro de la App. Desactivar las notificaciones puede limitar ciertas funcionalidades, pero no eliminará su cuenta ni sus datos almacenados.",
        "No somos responsables de notificaciones no recibidas debido a la configuración del dispositivo, problemas de conectividad, restricciones del sistema operativo o interrupciones de servicios de terceros.",
      ],
    },
    {
      id: "propiedad-intelectual",
      title: "8. Propiedad intelectual",
      paragraphs: [
        "La App, su diseño, código fuente, marca Waloop, logotipos, textos, interfaces, algoritmos y demás contenidos son propiedad de Lenara Labs o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual aplicables.",
        "Estos Términos no le otorgan ningún derecho de propiedad sobre la App o sus componentes, salvo una licencia limitada, personal, no exclusiva, revocable e intransferible para utilizar la App conforme a estos Términos.",
      ],
    },
    {
      id: "responsabilidad",
      title: "9. Limitación de responsabilidad",
      paragraphs: [
        "En la máxima medida permitida por la ley aplicable, Lenara Labs no será responsable por:",
      ],
      list: [
        "Pagos omitidos, cargos por mora, intereses, penalidades o daños derivados de información incorrecta ingresada por el Usuario.",
        "Decisiones financieras tomadas con base en recomendaciones, notificaciones o contenido de la App.",
        "Discrepancias entre las fechas mostradas en la App y las fechas determinadas por su banco o emisor de tarjeta.",
        "Interrupciones temporales del servicio, fallas de conectividad, actualizaciones del sistema operativo o indisponibilidad de servicios de terceros (incluyendo Firebase, Google, Apple o Railway).",
        "Pérdidas indirectas, incidentales, especiales o consecuentes, incluyendo pérdida de beneficios o datos, salvo que la ley imperativa disponga lo contrario.",
      ],
      subsections: [
        {
          id: "sin-garantias",
          title: "Exclusión de garantías",
          paragraphs: [
            "La App se proporciona «tal cual» y «según disponibilidad», sin garantías expresas o implícitas de exactitud absoluta, disponibilidad ininterrumpida o idoneidad para un propósito particular.",
          ],
        },
      ],
    },
    {
      id: "indemnizacion",
      title: "10. Indemnización",
      paragraphs: [
        "Usted se compromete a indemnizar, defender y mantener indemne a Lenara Labs, sus directivos, empleados y agentes frente a cualquier reclamación, daño, pérdida, responsabilidad y gasto (incluyendo honorarios legales razonables) derivados de su uso de la App, su incumplimiento de estos Términos, su violación de derechos de terceros o la información inexacta que proporcione.",
      ],
    },
    {
      id: "modificaciones",
      title: "11. Modificaciones del servicio y de los Términos",
      paragraphs: [
        "Podemos modificar, suspender o discontinuar cualquier parte de la App en cualquier momento, con o sin previo aviso.",
        "Podemos modificar estos Términos en cualquier momento. Publicaremos la versión actualizada en https://lenaralabs.com/es/apps/waloop/terms (español) y https://lenaralabs.com/en/apps/waloop/terms (inglés). Cuando los cambios sean sustanciales, procuraremos notificarle a través de la App o por correo electrónico.",
        "El uso continuado de la App después de la entrada en vigor de los cambios constituirá la aceptación de los Términos revisados, salvo que la ley exija un consentimiento adicional.",
      ],
    },
    {
      id: "terminacion",
      title: "12. Terminación",
      paragraphs: [
        "Podemos suspender o terminar su acceso a la App, temporal o permanentemente, si:",
      ],
      list: [
        "Usted incumple estos Términos o la ley aplicable.",
        "Utiliza la App de forma que pueda causar daño, riesgo o responsabilidad a Lenara Labs o a terceros.",
        "Es necesario por razones de seguridad, mantenimiento, cumplimiento legal o protección del servicio.",
      ],
      subsections: [
        {
          id: "terminacion-usuario",
          title: "Terminación por el Usuario",
          paragraphs: [
            "Puede dejar de utilizar la App en cualquier momento. Puede eliminar su cuenta mediante la opción en la App o escribiendo a hello@lenaralabs.com.",
            "Las disposiciones que por su naturaleza deban subsistir tras la terminación — incluyendo limitación de responsabilidad, indemnización, propiedad intelectual y ley aplicable — permanecerán vigentes.",
          ],
        },
      ],
    },
    {
      id: "terceros",
      title: "13. Servicios de terceros",
      paragraphs: [
        "La App integra servicios de terceros, incluyendo Firebase (Google), Google Sign-In, Sign in with Apple y Railway. El uso de dichos servicios puede estar sujeto a términos y políticas adicionales de esos proveedores.",
        "Lenara Labs no controla ni es responsable del funcionamiento, disponibilidad o políticas de servicios de terceros.",
      ],
    },
    {
      id: "ley-aplicable",
      title: "14. Ley aplicable y jurisdicción",
      paragraphs: [
        "Estos Términos se regirán e interpretarán conforme a las leyes de la República del Perú, sin perjuicio de las normas imperativas de protección al consumidor aplicables en su país de residencia.",
        "Cualquier controversia derivada de estos Términos se resolverá preferentemente de forma amistosa. De no alcanzarse un acuerdo, las partes se someten a la jurisdicción de los tribunales competentes de Lima, Perú, salvo que la ley imperativa disponga otra cosa.",
      ],
    },
    {
      id: "contacto",
      title: "15. Contacto",
      paragraphs: [
        "Para consultas sobre estos Términos, puede contactarnos en:",
        "Correo: hello@lenaralabs.com",
        "Sitio web: https://lenaralabs.com",
        "Empresa: Lenara Labs",
        "© 2026 Lenara Labs. Todos los derechos reservados. Powered by Lenara Labs.",
      ],
    },
  ],
};
