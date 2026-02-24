import { useState, useEffect } from 'react';
import initialContentRu from '../data/content.json';
import initialContentEn from '../data/content_en.json';

const DEFAULT_CONTENTS: { [key: string]: any } = {
    ru: initialContentRu,
    en: initialContentEn
};

export const useContent = () => {
    // Determine initial language from localStorage or default to 'ru'
    const [language, setLanguage] = useState(() => {
        const savedLang = localStorage.getItem('clinic_language');
        return (savedLang === 'en' || savedLang === 'ru') ? savedLang : 'ru';
    });

    const [content, setContent] = useState(() => {
        const currentDefault = DEFAULT_CONTENTS[language];
        try {
            const saved = localStorage.getItem(`clinic_content_${language}`);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && typeof parsed === 'object') {
                    // Deep merge defaults to ensure new fields are added to existing saved data
                    const merged = {
                        ...currentDefault,
                        ...parsed,
                        hero: { ...currentDefault.hero, ...(parsed.hero || {}) },
                        values: { ...currentDefault.values, ...(parsed.values || {}) },
                        process: { ...currentDefault.process, ...(parsed.process || {}) },
                        trust: { ...currentDefault.trust, ...(parsed.trust || {}) },
                        doctors: { ...currentDefault.doctors, ...(parsed.doctors || {}) },
                        directions: { ...currentDefault.directions, ...(parsed.directions || {}) },
                        contact: { ...currentDefault.contact, ...(parsed.contact || {}) },
                        footer: { ...currentDefault.footer, ...(parsed.footer || {}) },
                    };

                    if (!Array.isArray(merged.sectionsOrder)) {
                        merged.sectionsOrder = currentDefault.sectionsOrder;
                    }

                    return merged;
                }
            }
        } catch (e) {
            console.error("Failed to load content from localStorage", e);
        }
        return currentDefault;
    });

    // Update content state when language changes
    useEffect(() => {
        const currentDefault = DEFAULT_CONTENTS[language];
        localStorage.setItem('clinic_language', language);

        try {
            const saved = localStorage.getItem(`clinic_content_${language}`);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && typeof parsed === 'object') {
                    setContent({
                        ...currentDefault,
                        ...parsed,
                        hero: { ...currentDefault.hero, ...(parsed.hero || {}) },
                        values: { ...currentDefault.values, ...(parsed.values || {}) },
                        process: { ...currentDefault.process, ...(parsed.process || {}) },
                        trust: { ...currentDefault.trust, ...(parsed.trust || {}) },
                        doctors: { ...currentDefault.doctors, ...(parsed.doctors || {}) },
                        directions: { ...currentDefault.directions, ...(parsed.directions || {}) },
                        contact: { ...currentDefault.contact, ...(parsed.contact || {}) },
                        footer: { ...currentDefault.footer, ...(parsed.footer || {}) },
                    });
                    return;
                }
            }
        } catch (e) {
            console.error("Error updating content on language change", e);
        }
        setContent(currentDefault);
    }, [language]);

    const updateContent = (section: string, data: any) => {
        const newContent = {
            ...content,
            [section]: { ...content[section], ...data }
        };
        setContent(newContent);
        localStorage.setItem(`clinic_content_${language}`, JSON.stringify(newContent));
    };

    const reorderSections = (newOrder: string[]) => {
        const newContent = { ...content, sectionsOrder: newOrder };
        setContent(newContent);
        localStorage.setItem(`clinic_content_${language}`, JSON.stringify(newContent));
    };

    return { content, updateContent, reorderSections, language, setLanguage };
};
