import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        qualifications: "Qualifications",
        tactics: "Tactical Analysis",
        career: "Playing Career",
        gallery: "Media",
        contact: "Contact"
      },
      hero: {
        badge: "AFC A Licensed Coach",
        title: "AMINE KHATIM",
        subtitle: "Professional Football Coach & Tactical Analyst",
        location: "Doha, Qatar",
        cta_book: "Book Consultation",
        cta_tactics: "View Analysis"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: "عن المدرب",
        qualifications: "المؤهلات",
        tactics: "التحليل التكتيكي",
        career: "المسيرة الكروية",
        gallery: "المعرض",
        contact: "تواصل معي"
      },
      hero: {
        badge: "مدرب معتمد - رخصة AFC A",
        title: "أمين خاتم",
        subtitle: "مدرب كرة قدم محترف ومحلل تكتيكي",
        location: "الدوحة، قطر",
        cta_book: "احجز استشارة",
        cta_tactics: "عرض التحليل"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;