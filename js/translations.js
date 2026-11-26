// All page translations, grouped by language.
// Each language uses i18next's default "translation" namespace.
// Keys are referenced from the HTML via data-i18n="<key>".
var translations = {
    es: {
        translation: {
            header: {
                role: 'Desarrollador Web',
                // Plural forms: i18next picks _one / _other based on {{count}}.
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
            }
        }
    }
};
