import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import UZB from '../language/uz.json';
import RUS from '../language/ru.json';
import ENG from '../language/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: ENG,
    },
    ru: {
      translation: RUS,
    },
    uz: {
      translation: UZB,
    },
  },
  lng: 'uz',
  fallbackLng: 'uz',

  interpolation: {
    escapeValue: false,
  },
});