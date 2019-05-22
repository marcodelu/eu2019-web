export interface languageItem {
  langCode: string;
  countryCode: string;
  state: string;
  language: string;
  multilanguage: boolean;
}

export let languages: languageItem[] = [
  {langCode: 'de', countryCode: 'at', state: 'Austria', language: 'German', multilanguage: false},
  {langCode: 'nl', countryCode: 'be', state: 'Belgium', language: 'Dutch', multilanguage: true},
  {langCode: 'bg', countryCode: 'bg', state: 'Bulgaria', language: 'Bulgarian', multilanguage: false},
  {langCode: 'hr', countryCode: 'hr', state: 'Croatia', language: 'Croatian', multilanguage: false},
  {langCode: 'cs', countryCode: 'cz', state: 'Czech Republic', language: 'Czech', multilanguage: false},
  {langCode: 'da', countryCode: 'dk', state: 'Denmark', language: 'Danish', multilanguage: false},
  {langCode: 'et', countryCode: 'ee', state: 'Estonia', language: 'Estonian', multilanguage: false},
  {langCode: 'fi', countryCode: 'fi', state: 'Finland', language: 'Finnish', multilanguage: false},
  {langCode: 'fr', countryCode: 'fr', state: 'France', language: 'French', multilanguage: false},
  {langCode: 'de', countryCode: 'de', state: 'Germany', language: 'German', multilanguage: false},
  {langCode: 'el', countryCode: 'gr', state: 'Greece', language: 'Greek', multilanguage: false},
  {langCode: 'hu', countryCode: 'hu', state: 'Hungary', language: 'Hungarian', multilanguage: false},
  {langCode: 'en', countryCode: 'ie', state: 'Ireland', language: 'English', multilanguage: false},
  {langCode: 'it', countryCode: 'it', state: 'Italy', language: 'Italian', multilanguage: false},
  {langCode: 'lv', countryCode: 'lv', state: 'Latvia', language: 'Latvian', multilanguage: false},
  {langCode: 'lt', countryCode: 'lt', state: 'Lithuania', language: 'Lithuanian', multilanguage: false},
  {langCode: 'fr', countryCode: 'lu', state: 'Luxembourg', language: 'French', multilanguage: true},
  {langCode: 'en', countryCode: 'mt', state: 'Malta', language: 'English', multilanguage: true},
  {langCode: 'nl', countryCode: 'nl', state: 'Netherlands', language: 'Dutch', multilanguage: false},
  {langCode: 'pl', countryCode: 'pl', state: 'Poland', language: 'Polish', multilanguage: false},
  {langCode: 'pt', countryCode: 'pt', state: 'Portugal', language: 'Portuguese', multilanguage: false},
  {langCode: 'el', countryCode: 'cy', state: 'Republic of Cyprus', language: 'Greek', multilanguage: false},
  {langCode: 'ro', countryCode: 'ro', state: 'Romania', language: 'Romanian', multilanguage: false},
  {langCode: 'sk', countryCode: 'sk', state: 'Slovakia', language: 'Slovak', multilanguage: false},
  {langCode: 'sl', countryCode: 'si', state: 'Slovenia', language: 'Slovenian', multilanguage: false},
  {langCode: 'es', countryCode: 'es', state: 'Spain', language: 'Spanish', multilanguage: false},
  {langCode: 'sv', countryCode: 'se', state: 'Sweden', language: 'Swedish', multilanguage: false},
  {langCode: 'en', countryCode: 'gb', state: 'United Kingdom', language: 'English', multilanguage: false}
];
