// All page translations, grouped by language.
// Each language uses i18next's default "translation" namespace.
// Keys are referenced from the HTML via data-i18n="<key>".
// Plural forms: i18next picks the _one / _other key based on {{count}}.
var translations = {
    es: {
        translation: {
            header: {
                role: 'Desarrollador Web',
                age_one: '{{count}} año',
                age_other: '{{count}} años'
            },
            about: {
                title: 'Sobre mí',
                intro_one: 'Con {{count}} año de experiencia, combino inteligencia artificial, desarrollo de software y conocimiento de procesos de negocio.',
                intro_other: 'Con {{count}} años de experiencia, combino inteligencia artificial, desarrollo de software y conocimiento de procesos de negocio.',
                ai: 'Inteligencia Artificial',
                aiDescription: 'Uso IA para automatizar el desarrollo de software, procesos administrativos y actividades operativas. No importa el lenguaje o las herramientas, soy muy autodidacta y me acoplo fácilmente a nuevas tecnologías.',
                software: 'Desarrollo de software',
                softwareDescription: 'Construyo aplicaciones web de 0 a 100%, desde el análisis hasta el despliegue a producción. Mi stack principal es Angular, .NET y SQL Server.',
                problemSolving: 'Resolución de problemas',
                problemSolvingDescription: 'Entiendo el software más allá de lo técnico: cada solución debe reducir costos, aumentar ganancias o mejorar procesos, siempre evaluando su viabilidad según el contexto, el presupuesto y el tiempo.',
                sap: 'Experiencia en SAP BO',
                sapDescription: 'Experiencia desarrollando aplicaciones y módulos bajo el ERP SAP Business One.'
            },
            // Used by renderJobDates() in main.js to build "Junio 2025 - Actualidad (1 año 6 meses)".
            dates: {
                monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                present: 'Actualidad',
                year_one: '{{count}} año',
                year_other: '{{count}} años',
                month_one: '{{count}} mes',
                month_other: '{{count}} meses'
            },
            experience: {
                title: 'Experiencia Laboral',
                ria: {
                    role: 'FullStack Developer (.NET, SQL Server y AngularJS)',
                    description: 'Desarrollo de nuevas funcionalidades para una aplicación monolítica en .NET Framework 4.x, AngularJS y SQL Server, trabajando por historias de usuario, revisión de código (Pull Requests) y despliegue a QA. Además participo en el desarrollo de la nueva versión con .NET Core, Angular 17 y SQL Server.'
                },
                neoris: {
                    role: 'FullStack Developer (.NET, SQL y Angular)',
                    description: 'Desarrollo de aplicaciones con Angular y .NET Core sobre Oracle y SQL Server en equipos Scrum, para clientes de retail, logística y banca como Telcel, FEMSA, Chubb y CEMEX. Líder técnico en el proyecto de Telcel, migrando una aplicación de Angular 6 a 14. Desarrollo de Azure Functions y SignalR, uso de GitHub Copilot y corrección de vulnerabilidades detectadas con SAST y DAST.'
                },
                nmh: {
                    role: 'FullStack Developer (.NET, SQL y Angular)',
                    description: 'Inicié como desarrollador de Excel y propuse migrar esos documentos a aplicaciones web. Desarrollé la aplicación de logística con Laravel, PostgreSQL y Angular, incluyendo pruebas unitarias y su despliegue en un servidor Linux en Digital Ocean. También construí una API en .NET Core integrada con SAP Business One mediante su SDK, configurando el servidor Windows y la conexión con SAP.'
                },
                alio: {
                    role: 'FullStack Developer (Laravel, PostgreSQL y Angular)',
                    description: 'Desarrollo full stack con Laravel, Angular y Vue. Mi proyecto principal fue una aplicación móvil, para la cual desarrollé las APIs y la aplicación web. Además preparé e impartí el curso "PHP Avanzado" a personal de CFE.'
                },
                gkn: {
                    description: 'Desarrollo en Excel para el área de Manufactura LEAN, enfocada en reducir tiempos del sistema de producción. Mejoré la captura y gestión de la información, generé reportes semanales y mensuales y detecté oportunidades de mejora en el manejo de los datos.'
                }
            },
            skills: {
                title: 'Habilidades',
                technical: 'Tecnológicas',
                expertIn: 'Experto en',
                sqlQueries: 'Consultas SQL',
                aiTools: 'IA con Claude y Copilot',
                administrative: 'Administrativas',
                peopleManagement: 'Gestión de personal',
                teamwork: 'Trabajo en equipo',
                problemSolving: 'Capacidad de resolución de problemas complejos',
                accounting: 'Bases de contabilidad',
                businessProcesses: 'Bases en procesos de compras, ventas, logística, contabilidad y finanzas',
                communication: 'Facilidad de palabra'
            }
        }
    },
    en: {
        translation: {
            header: {
                role: 'Web Developer',
                age_one: '{{count}} year old',
                age_other: '{{count}} years old'
            },
            about: {
                title: 'About me',
                intro_one: 'With {{count}} year of experience, I combine artificial intelligence, software development and business process knowledge.',
                intro_other: 'With {{count}} years of experience, I combine artificial intelligence, software development and business process knowledge.',
                ai: 'Artificial Intelligence',
                aiDescription: 'I use AI to automate software development, administrative processes and operational tasks. Regardless of the language or tools, I am highly self-taught and adapt easily to new technologies.',
                software: 'Software Development',
                softwareDescription: 'I build web applications end to end, from analysis to production deployment. My main stack is Angular, .NET and SQL Server.',
                problemSolving: 'Problem Solving',
                problemSolvingDescription: 'I understand software beyond the technical side: every solution should reduce costs, increase revenue or improve processes, always weighing its feasibility against the context, budget and time.',
                sap: 'SAP BO Experience',
                sapDescription: 'Experience developing applications and modules for the SAP Business One ERP.'
            },
            dates: {
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                present: 'Present',
                year_one: '{{count}} year',
                year_other: '{{count}} years',
                month_one: '{{count}} month',
                month_other: '{{count}} months'
            },
            experience: {
                title: 'Work Experience',
                ria: {
                    role: 'FullStack Developer (.NET, SQL Server and AngularJS)',
                    description: 'Development of new features for a monolithic application built with .NET Framework 4.x, AngularJS and SQL Server, working with user stories, code reviews (Pull Requests) and deployments to QA. I also contribute to the new version built with .NET Core, Angular 17 and SQL Server.'
                },
                neoris: {
                    role: 'FullStack Developer (.NET, SQL and Angular)',
                    description: 'Development of applications with Angular and .NET Core on Oracle and SQL Server in Scrum teams, for retail, logistics and banking clients such as Telcel, FEMSA, Chubb and CEMEX. Technical lead on the Telcel project, migrating an application from Angular 6 to 14. Development of Azure Functions and SignalR, use of GitHub Copilot and remediation of vulnerabilities detected with SAST and DAST.'
                },
                nmh: {
                    role: 'FullStack Developer (.NET, SQL and Angular)',
                    description: 'I started as an Excel developer and proposed migrating those spreadsheets to web applications. I built the logistics application with Laravel, PostgreSQL and Angular, including unit tests and its deployment to a Linux server on Digital Ocean. I also built a .NET Core API integrated with SAP Business One through its SDK, configuring the Windows server and the SAP connection.'
                },
                alio: {
                    role: 'FullStack Developer (Laravel, PostgreSQL and Angular)',
                    description: 'Full stack development with Laravel, Angular and Vue. My main project was a mobile application, for which I built the APIs and the web application. I also prepared and taught the "Advanced PHP" course to CFE staff.'
                },
                gkn: {
                    description: 'Excel development for the LEAN Manufacturing area, focused on reducing production system times. I improved how information was captured and managed, produced weekly and monthly reports and identified opportunities to improve data handling.'
                }
            },
            skills: {
                title: 'Skills',
                technical: 'Technical',
                expertIn: 'Expert in',
                sqlQueries: 'SQL queries',
                aiTools: 'AI with Claude and Copilot',
                administrative: 'Administrative',
                peopleManagement: 'People management',
                teamwork: 'Teamwork',
                problemSolving: 'Complex problem solving',
                accounting: 'Accounting fundamentals',
                businessProcesses: 'Fundamentals of purchasing, sales, logistics, accounting and finance processes',
                communication: 'Strong communication skills'
            }
        }
    }
};
