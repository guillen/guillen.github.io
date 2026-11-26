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
                ai: 'Inteligencia Artificial'
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
                ai: 'Artificial Intelligence'
            }
        }
    }
};
