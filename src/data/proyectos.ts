// src/data/proyectos.ts

export const categorias = [
    {
        id: "gastronomia",
        nombre: "Gestión Gastronómica",
        descripcion: "Soluciones diseñadas para optimizar la atención, las ventas y la logística en restaurantes y bares.",
        palabrasClave: "gestión gastronómica restaurante menú 4d pedidos qr",
        programas: [
            {
                titulo: "Sistema de Restaurante (Menú 4D)",
                descripcion: "Sistema de gestión de pedidos en tiempo real. Los clientes piden escaneando un código QR desde su celular y la cocina recibe los pedidos al instante.",
                problema: "Elimina errores en los pedidos, acelera la atención al cliente y permite al dueño controlar el negocio desde un solo lugar.",
                whatsappMsg: "Hola Allison, me interesa el Sistema de Restaurante.",
                video: "video-restaurante.mp4" // Nombre del video que irá en /public
            },
            {
                titulo: "Sistema de Reservas para Mesas",
                descripcion: "Permite a los clientes reservar mesas desde la web del restaurante, enviando confirmaciones automáticas por WhatsApp.",
                problema: "Organiza el flujo de clientes, reduce las llamadas telefónicas y asegura que las mesas estén siempre ocupadas de manera eficiente.",
                whatsappMsg: "Hola Allison, me interesa el Sistema de Reservas para Mesas.",
                video: "video-reservas.mp4"
            }
        ]
    },
    {
        id: "control-personal",
        nombre: "Control de Personal y Accesos",
        descripcion: "Sistemas de seguridad y asistencia para proteger tu empresa y gestionar a tu equipo.",
        palabrasClave: "control de personal y accesos biometría facial asistencia",
        programas: [
            {
                titulo: "Control de Asistencia Biométrico",
                descripcion: "Registro de entrada y salida de personal utilizando reconocimiento facial, con reportes de tardanzas automatizados.",
                problema: "Elimina el fraude de marcación y agiliza el paso de los trabajadores.",
                whatsappMsg: "Hola Allison, me interesa el Control de Asistencia.",
                video: "video-asistencia.mp4"
            }
        ]
    },
    {
        id: "reservas-citas",
        nombre: "Gestión de Reservas y Citas",
        descripcion: "Optimiza tu agenda y brinda una mejor experiencia a tus clientes.",
        palabrasClave: "reservas citas spa estética agenda turnos",
        programas: [
            {
                titulo: "Sistema de Citas para Spa y Estética",
                descripcion: "Plataforma completa para gestionar la agenda de especialistas, reservar turnos en línea y controlar el inventario.",
                problema: "Evita citas duplicadas y reduce el ausentismo con recordatorios automáticos.",
                whatsappMsg: "Hola Allison, me interesa el Sistema de Citas.",
                video: "video-spa.mp4"
            }
        ]
    },
    {
        id: "votaciones-eventos",
        nombre: "Sistemas de Votación y Eventos",
        descripcion: "Tecnología para procesos democráticos rápidos y transparentes.",
        palabrasClave: "votaciones eventos elecciones colegios juntas",
        programas: [
            {
                titulo: "Sistema de Votaciones Electrónicas",
                descripcion: "Software seguro para elecciones en colegios, juntas o empresas, con resultados en tiempo real y prevención de votos duplicados.",
                problema: "Garantiza transparencia total y acelera el conteo de votos.",
                whatsappMsg: "Hola Allison, me interesa el Sistema de Votaciones.",
                video: "video-votaciones.mp4"
            }
        ]
    },
        {
        id: "gimnasios",
        nombre: "Gestión de Gimnasios y Deportes",
        descripcion: "Controla membresías, rutinas y accesos en tu centro deportivo.",
        palabrasClave: "gimnasio gym deportes membresias rutinas",
        programas: [
            {
                titulo: "Sistema de Membresías para Gym",
                descripcion: "Control de acceso por huella o QR, gestión de pagos mensuales y asignación de rutinas para los clientes.",
                problema: "Evita pérdidas de dinero por membresías vencidas y automatiza el control de entrada.",
                whatsappMsg: "Hola Allison, me interesa el Sistema para Gimnasios.",
                video: "video-gym.mp4"
            }
        ]
    }
    
];