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
            }
        }
    },
    en: {
        translation: {
            header: {
                role: 'Web Developer',
                age_one: '{{count}} year old',
                age_other: '{{count}} years old'
            }
        }
    }
};
