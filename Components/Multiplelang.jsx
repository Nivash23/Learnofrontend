
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
                m1:"📦 Schema-less document storage",
                m2:"🔄 Works well with Node.js & Express",
                m3:"⚡ High-performance and flexible querying",
                N1:"⚙️ Real-time app development",
                N2:"🔁 Express.js, APIs, and databases",
                N3:"🚀 Power modern web with high performance",
                Reactjs:"ReactJS is a JavaScript library for building fast, interactive UIs using components and state management. Key concepts include JSX, props, hooks (like useState and useEffect), and component lifecycle.",
                Datascience: "Machine learning to extract insights from data. Key skills include data cleaning, visualization, modeling, and using tools like Pandas, Scikit-learn, and TensorFlow.",
                python:"Python is a versatile, beginner-friendly language used in web development, data science, automation, and AI. Learning Python equips you with powerful libraries (like Pandas, NumPy, and Django) to build real-world applications efficiently.",
                Digital: "Digital Marketing involves promoting products online using SEO, social media, email, and content marketing. Key skills include analytics, paid advertising and understanding user behavior.",
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
                mongodb:"கட்டமைக்கப்படாத தரவை திறம்பட சேமித்து நிர்வகிக்க முன்னணி NoSQL தரவுத்தளமான மாஸ்டர் மோங்கோடிபி. ஸ்கீமாக்களை வடிவமைக்கவும், CRUD செயல்பாடுகளைச் செய்யவும், Node.js பயன்பாடுகளுடன் ஒருங்கிணைக்கவும் கற்றுக்கொள்ளுங்கள்.",
                Nodejs:"ஜாவாஸ்கிரிப்டைப் பயன்படுத்தி வேகமான, அளவிடக்கூடிய பின்தள பயன்பாடுகளை உருவாக்க Node.js இன் அடிப்படைகளைக் கற்றுக்கொள்ளுங்கள். இந்தப் பாடநெறி ஒத்திசைவற்ற நிரலாக்கம், Express.js, APIகள் மற்றும் தரவுத்தள ஒருங்கிணைப்பு ஆகியவற்றை உள்ளடக்கியது.",
                Reactjs:"ReactJS என்பது கூறுகள் மற்றும் நிலை மேலாண்மையைப் பயன்படுத்தி வேகமான, ஊடாடும் UIகளை உருவாக்குவதற்கான ஒரு JavaScript நூலகமாகும். முக்கிய கருத்துக்களில் JSX, props, hooks (useState மற்றும் useEffect போன்றவை) மற்றும் கூறு வாழ்க்கைச் சுழற்சி ஆகியவை அடங்கும்.",
                Datascience: "தரவு பகுப்பாய்வு மற்றும் தரவுகளிலிருந்து நுண்ணறிவுகளைப் பிரித்தெடுக்க இயந்திர கற்றல் ஆகியவை அடங்கும். முக்கிய திறன்களில் தரவு சுத்தம் செய்தல், காட்சிப்படுத்தல், மாடலிங் செய்தல் மற்றும் பாண்டாஸ், ஸ்கிகிட்-லேர்ன் மற்றும் டென்சர்ஃப்ளோ போன்ற கருவிகளைப் பயன்படுத்துதல் ஆகியவை அடங்கும்.",
                python:"Python என்பது வலை மேம்பாடு, தரவு அறிவியல், ஆட்டோமேஷன் மற்றும் AI ஆகியவற்றில் பயன்படுத்தப்படும் பல்துறை, தொடக்கநிலையாளர்களுக்கு ஏற்ற மொழியாகும். Python கற்றல், நிஜ உலக பயன்பாடுகளை திறம்பட உருவாக்க சக்திவாய்ந்த நூலகங்களை (Pandas, NumPy மற்றும் Django போன்றவை) உங்களுக்கு வழங்குகிறது.",
                Digital: "டிஜிட்டல் மார்க்கெட்டிங் என்பது SEO, சமூக ஊடகங்கள், மின்னஞ்சல் மற்றும் உள்ளடக்க சந்தைப்படுத்தல் ஆகியவற்றைப் பயன்படுத்தி ஆன்லைனில் தயாரிப்புகளை விளம்பரப்படுத்துவதை உள்ளடக்கியது. முக்கிய திறன்களில் பகுப்பாய்வு, கட்டண விளம்பரம் மற்றும் பயனர் நடத்தையைப் புரிந்துகொள்வது ஆகியவை அடங்கும்.",
                coursedesc1:`AI கருவிகள் தனிப்பட்ட கற்றல் பாணிகளுக்கு ஏற்ப மாற்றியமைக்கலாம், தனிப்பயனாக்கப்பட்ட பரிந்துரைகளை வழங்கலாம், மேலும் குறிப்பு எடுப்பதற்கும் வினாடி வினா உருவாக்குவதற்கும் கூட உதவலாம்.`,
                coursedesc2:"வினாடி வினாக்கள், ஃபிளாஷ் கார்டுகள் மற்றும் மாணவரின் பலம் மற்றும் பலவீனங்களுக்கு ஏற்ப முழு பாடங்களையும் கூட தனிப்பயன் கற்றல் பொருட்களை AI உருவாக்க முடியும். இந்த தனிப்பயனாக்கம் மாணவர்கள் தங்களுக்கு மிகவும் உதவி தேவைப்படும் தலைப்புகளில் கவனம் செலுத்துவதை உறுதி செய்கிறது, அவர்களின் கற்றல் திறனை அதிகரிக்கிறது."
            }
        }
    }
})



