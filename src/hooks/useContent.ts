import { useState } from 'react';
import initialContent from '../data/content.json';

// Default initial content from JSON file
const DEFAULT_CONTENT = initialContent as any;

export const useContent = () => {
    const [content, setContent] = useState(() => {
        try {
            const saved = localStorage.getItem('clinic_content');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && typeof parsed === 'object') {
                    // Deep merge defaults to ensure new fields (like sizes) are added to existing saved data
                    const merged = {
                        ...DEFAULT_CONTENT,
                        ...parsed,
                        hero: { ...DEFAULT_CONTENT.hero, ...(parsed.hero || {}) },
                        values: { ...DEFAULT_CONTENT.values, ...(parsed.values || {}) },
                        process: { ...DEFAULT_CONTENT.process, ...(parsed.process || {}) },
                        trust: { ...DEFAULT_CONTENT.trust, ...(parsed.trust || {}) },
                        doctors: { ...DEFAULT_CONTENT.doctors, ...(parsed.doctors || {}) },
                        directions: { ...DEFAULT_CONTENT.directions, ...(parsed.directions || {}) },
                        contact: { ...DEFAULT_CONTENT.contact, ...(parsed.contact || {}) },
                        footer: { ...DEFAULT_CONTENT.footer, ...(parsed.footer || {}) },
                    };

                    // Final safety check for critical fields
                    if (!Array.isArray(merged.sectionsOrder)) {
                        merged.sectionsOrder = DEFAULT_CONTENT.sectionsOrder;
                    }

                    return merged;
                }
            }
        } catch (e) {
            console.error("Failed to load content from localStorage", e);
        }
        return DEFAULT_CONTENT;
    });

    const updateContent = (section: string, data: any) => {
        const newContent = {
            ...content,
            [section]: { ...content[section], ...data }
        };
        setContent(newContent);
        localStorage.setItem('clinic_content', JSON.stringify(newContent));
    };

    const reorderSections = (newOrder: string[]) => {
        const newContent = { ...content, sectionsOrder: newOrder };
        setContent(newContent);
        localStorage.setItem('clinic_content', JSON.stringify(newContent));
    };

    return { content, updateContent, reorderSections };
};
