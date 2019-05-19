export interface languageItem {
  langCode: string;
  countryCode: string;
  state: string;
  language: string;
}

export let languages: languageItem[] = [
  {langCode: 'de', countryCode: 'at', state: 'Austria', language: 'German'},
  {langCode: 'nl', countryCode: 'be', state: 'Belgium', language: 'Dutch'},
  {langCode: 'bg', countryCode: 'bg', state: 'Bulgaria', language: 'Bulgarian'},
  {langCode: 'hr', countryCode: 'hr', state: 'Croatia', language: 'Croatian'},
  {langCode: 'cs', countryCode: 'cz', state: 'Czech Republic', language: 'Czech'},
  {langCode: 'da', countryCode: 'dk', state: 'Denmark', language: 'Danish'},
  {langCode: 'et', countryCode: 'ee', state: 'Estonia', language: 'Estonian'},
  {langCode: 'fi', countryCode: 'fi', state: 'Finland', language: 'Finnish'},
  {langCode: 'fr', countryCode: 'fr', state: 'France', language: 'French'},
  {langCode: 'de', countryCode: 'de', state: 'Germany', language: 'German'},
  {langCode: 'el', countryCode: 'gr', state: 'Greece', language: 'Greek'},
  {langCode: 'hu', countryCode: 'hu', state: 'Hungary', language: 'Hungarian'},
  {langCode: 'en', countryCode: 'ie', state: 'Ireland', language: 'English'},
  {langCode: 'it', countryCode: 'it', state: 'Italy', language: 'Italian'},
  {langCode: 'lv', countryCode: 'lv', state: 'Latvia', language: 'Latvian'},
  {langCode: 'lt', countryCode: 'lt', state: 'Lithuania', language: 'Lithuanian'},
  {langCode: 'fr', countryCode: 'lu', state: 'Luxembourg', language: 'French'},
  {langCode: 'en', countryCode: 'mt', state: 'Malta', language: 'English'},
  {langCode: 'nl', countryCode: 'nl', state: 'Netherlands', language: 'Dutch'},
  {langCode: 'pl', countryCode: 'pl', state: 'Poland', language: 'Polish'},
  {langCode: 'pt', countryCode: 'pt', state: 'Portugal', language: 'Portuguese'},
  {langCode: 'el', countryCode: 'cy', state: 'Republic of Cyprus', language: 'Greek'},
  {langCode: 'ro', countryCode: 'ro', state: 'Romania', language: 'Romanian'},
  {langCode: 'sk', countryCode: 'sk', state: 'Slovakia', language: 'Slovak'},
  {langCode: 'sl', countryCode: 'si', state: 'Slovenia', language: 'Slovenian'},
  {langCode: 'es', countryCode: 'es', state: 'Spain', language: 'Spanish'},
  {langCode: 'sv', countryCode: 'se', state: 'Sweden', language: 'Swedish'},
  {langCode: 'en', countryCode: 'gb', state: 'United Kingdom', language: 'English'}
];
