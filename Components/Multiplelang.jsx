
// import React from 'react'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next,Translation} from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: 'en',
    resources: {
        en: {
            translation: {
                headtextinimg: "Shine Brighter with AI-Driven Education",
                Welcomemsg:"Welcome To Learno!",
                descripttextinimg: "I want to learn",
                coursedesc1:`AI tools can adapt to individual learning styles, provide
              personalized recommendations, and even help with note-taking and
              quiz creation.`,
                coursedesc2:`AI can generate custom learning materials, such as quizzes,
              flashcards, and even entire lessons tailored to a student's
              strengths and weaknesses. This personalization ensures that
              students focus on the topics they need the most help with,
              maximizing their learning efficiency.`
            }
        },
        ta: {
            translation: {
                headtextinimg: "AI-சார்ந்த கல்வியுடன் பிரகாசமாக பிரகாசிக்கவும்",
                Welcomemsg:"கற்க வரவேற்கிறோம்",
                descripttextinimg: "நான் கற்றுக்கொள்ள விரும்புகிறேன்",

                coursedesc1:`AI கருவிகள் தனிப்பட்ட கற்றல் பாணிகளுக்கு ஏற்ப மாற்றியமைக்கலாம், தனிப்பயனாக்கப்பட்ட பரிந்துரைகளை வழங்கலாம், மேலும் குறிப்பு எடுப்பதற்கும் வினாடி வினா உருவாக்குவதற்கும் கூட உதவலாம்.`,
                coursedesc2:"வினாடி வினாக்கள், ஃபிளாஷ் கார்டுகள் மற்றும் மாணவரின் பலம் மற்றும் பலவீனங்களுக்கு ஏற்ப முழு பாடங்களையும் கூட தனிப்பயன் கற்றல் பொருட்களை AI உருவாக்க முடியும். இந்த தனிப்பயனாக்கம் மாணவர்கள் தங்களுக்கு மிகவும் உதவி தேவைப்படும் தலைப்புகளில் கவனம் செலுத்துவதை உறுதி செய்கிறது, அவர்களின் கற்றல் திறனை அதிகரிக்கிறது."
            }
        }
    }
})



