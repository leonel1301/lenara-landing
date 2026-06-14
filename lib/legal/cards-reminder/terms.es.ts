import type { LegalDocumentContent } from "@/lib/legal/types";

export const cardsReminderTermsEs: LegalDocumentContent = {
  title: "Términos y Condiciones de Uso",
  lastUpdated: "Última actualización: 13 de junio de 2026",
  intro: [
    "Los presentes Términos y Condiciones de Uso (los «Términos») regulan el acceso y uso de la aplicación móvil CardsReminder (la «App»), desarrollada y operada por Lenara Labs («nosotros», «nuestro» o «la Empresa»), con sitio web en lenaralabs.com.",
    "Al descargar, registrarse, acceder o utilizar la App, usted («el Usuario») acepta quedar vinculado por estos Términos y por nuestra Política de Privacidad. Si no está de acuerdo, no utilice la App.",
  ],
  sections: [
    {
      id: "aceptacion",
      title: "1. Aceptación de los Términos",
      paragraphs: [
        "Al crear una cuenta o utilizar CardsReminder, usted declara ser mayor de 18 años y contar con capacidad legal para contratar conforme a la legislación de su país.",
        "Si utiliza la App en representación de una persona jurídica, declara contar con facultades suficientes para obligar a dicha entidad a cumplir estos Términos.",
      ],
    },
    {
      id: "descripcion",
      title: "2. Descripción del servicio",
      paragraphs: [
        "CardsReminder es una aplicación de gestión personal de tarjetas de crédito que permite registrar tarjetas, fechas de facturación y pago, recibir notificaciones de vencimiento y visualizar recomendaciones de pago basadas en la información ingresada por el Usuario.",
        "La App utiliza autenticación con Google Sign-In y Apple Sign-In a través de Firebase, y notificaciones push mediante Firebase Cloud Messaging.",
        "CardsReminder no almacena números completos de tarjetas de crédito, credenciales bancarias ni realiza transacciones financieras en nombre del Usuario.",
      ],
    },
    {
      id: "cuenta",
      title: "3. Registro y cuenta de usuario",
      list: [
        "Para utilizar determinadas funciones debe crear una cuenta mediante Google Sign-In o Apple Sign-In.",
        "Usted es responsable de mantener la confidencialidad de su dispositivo y de las credenciales asociadas a su cuenta.",
        "Debe proporcionar información veraz y mantenerla actualizada en la medida en que la App lo requiera.",
        "Debe notificarnos de inmediato si detecta un acceso no autorizado a su cuenta.",
      ],
    },
    {
      id: "responsabilidades",
      title: "4. Responsabilidades del Usuario",
      paragraphs: [
        "Al utilizar la App, usted se compromete a:",
      ],
      list: [
        "Utilizar CardsReminder únicamente para fines personales y lícitos.",
        "Ingresar información de forma precisa y verificar fechas, montos y datos relevantes antes de tomar decisiones.",
        "No utilizar la App para actividades fraudulentas, ilegales o que infrinjan derechos de terceros.",
        "No intentar acceder sin autorización a sistemas, cuentas o datos de otros usuarios.",
        "No realizar ingeniería inversa, descompilar, modificar o distribuir la App sin autorización expresa de Lenara Labs.",
        "No utilizar mecanismos automatizados para extraer datos o interferir con el funcionamiento del servicio.",
      ],
    },
    {
      id: "naturaleza-servicio",
      title: "5. Naturaleza informativa del servicio",
      paragraphs: [
        "CardsReminder es una herramienta de organización y recordatorio. Las recomendaciones, alertas, fechas sugeridas y cualquier contenido mostrado en la App tienen carácter informativo y de apoyo a la gestión personal.",
        "La App no constituye asesoría financiera, contable, legal, fiscal ni de inversión. Lenara Labs no es una entidad financiera, banco, emisor de tarjetas ni asesor regulado.",
        "Usted es el único responsable de verificar con su entidad emisora o proveedor financiero la exactitud de fechas, montos, cargos, intereses y obligaciones de pago.",
      ],
    },
    {
      id: "limitacion",
      title: "6. Limitación de responsabilidad",
      paragraphs: [
        "En la máxima medida permitida por la ley aplicable, Lenara Labs no será responsable por:",
      ],
      list: [
        "Pagos omitidos, moras, intereses, penalidades o perjuicios derivados de información incorrecta ingresada por el Usuario.",
        "Decisiones financieras adoptadas con base en recomendaciones, notificaciones o contenido de la App.",
        "Interrupciones temporales del servicio, fallas de conectividad, actualizaciones del sistema operativo o indisponibilidad de servicios de terceros.",
        "Pérdidas indirectas, incidentales, especiales o consecuenciales, incluida la pérdida de beneficios o datos, salvo disposición legal imperativa en contrario.",
      ],
      subsections: [
        {
          id: "tal-cual",
          title: "Prestación del servicio",
          paragraphs: [
            "La App se proporciona «tal cual» y «según disponibilidad», sin garantías expresas o implícitas de exactitud absoluta, disponibilidad ininterrumpida o idoneidad para un propósito particular.",
          ],
        },
      ],
    },
    {
      id: "propiedad",
      title: "7. Propiedad intelectual",
      paragraphs: [
        "La App, su diseño, código fuente, marca CardsReminder, logotipos, textos, interfaces, algoritmos y demás contenidos son propiedad de Lenara Labs o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual aplicables.",
        "Estos Términos no le otorgan ningún derecho de propiedad sobre la App ni sobre sus componentes, salvo una licencia limitada, personal, no exclusiva, revocable e intransferible para usar la App conforme a estos Términos.",
      ],
    },
    {
      id: "suspension",
      title: "8. Suspensión y terminación",
      paragraphs: [
        "Podemos suspender o cancelar su acceso a la App, de forma temporal o definitiva, si:",
      ],
      list: [
        "Incumple estos Términos o la legislación aplicable.",
        "Utiliza la App de manera que pueda causar daño, riesgo o responsabilidad a Lenara Labs o a terceros.",
        "Es necesario por razones de seguridad, mantenimiento, cumplimiento legal o protección del servicio.",
      ],
      subsections: [
        {
          id: "terminacion-usuario",
          title: "Terminación por el Usuario",
          paragraphs: [
            "Usted puede dejar de utilizar la App en cualquier momento y solicitar la eliminación de su cuenta escribiendo a hello@lenaralabs.com.",
            "Las disposiciones que por su naturaleza deban subsistir tras la terminación —incluidas limitación de responsabilidad, propiedad intelectual y ley aplicable— continuarán vigentes.",
          ],
        },
      ],
    },
    {
      id: "terceros",
      title: "9. Servicios de terceros",
      paragraphs: [
        "La App integra servicios de terceros, incluidos Google, Apple y Firebase. El uso de dichos servicios puede estar sujeto a términos y políticas adicionales de esos proveedores.",
        "Lenara Labs no controla ni es responsable por el funcionamiento, disponibilidad o políticas de servicios de terceros.",
      ],
    },
    {
      id: "modificaciones",
      title: "10. Modificaciones a los Términos",
      paragraphs: [
        "Podemos modificar estos Términos en cualquier momento. Publicaremos la versión actualizada en lenaralabs.com y, cuando los cambios sean materiales, procuraremos notificarle mediante la App o por correo electrónico.",
        "El uso continuado de la App después de la entrada en vigor de los cambios constituirá su aceptación de los Términos revisados, salvo que la ley exija consentimiento adicional.",
      ],
    },
    {
      id: "ley",
      title: "11. Ley aplicable y jurisdicción",
      paragraphs: [
        "Estos Términos se regirán e interpretarán conforme a las leyes de la República del Perú, sin perjuicio de normas imperativas de protección al consumidor que resulten aplicables en su país de residencia.",
        "Cualquier controversia derivada de estos Términos se someterá preferentemente a solución amistosa. De no alcanzarse acuerdo, las partes se someterán a la jurisdicción de los tribunales competentes de Lima, Perú, salvo disposición legal imperativa en contrario.",
      ],
    },
    {
      id: "contacto",
      title: "12. Contacto",
      paragraphs: [
        "Para consultas sobre estos Términos, puede contactarnos en:",
        "Correo electrónico: hello@lenaralabs.com",
        "Sitio web: lenaralabs.com",
        "Responsable: Lenara Labs",
      ],
    },
  ],
};
