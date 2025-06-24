import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Bem-vindo': 'Welcome',
      'Métricas de Saúde': 'Health Metrics',
      'Frequência Cardíaca': 'Heart Rate',
      'Peso': 'Weight',
      'Atividades': 'Activities',
      'Carregando métricas...': 'Loading metrics...'
    }
  },
  pt: {
    translation: {
      'Bem-vindo': 'Bem-vindo',
      'Métricas de Saúde': 'Métricas de Saúde',
      'Frequência Cardíaca': 'Frequência Cardíaca',
      'Peso': 'Peso',
      'Atividades': 'Atividades',
      'Carregando métricas...': 'Carregando métricas...'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
