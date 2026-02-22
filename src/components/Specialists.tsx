import React from 'react';
import FadeIn from './common/FadeIn';

import HighlightedText from './common/HighlightedText';

const Specialists = ({ data }: { data: any }) => {
    const {
        badge = 'Опыт и надежность',
        title = 'Наши *Специалисты*',
        desc = 'Команда врачей с международным опытом и доказательным подходом к лечению.\nРаботаем по современным протоколам, обеспечивая безопасность, точность и высокий уровень медицинского сервиса.',
        image = '/team.jpg',
        titleSize = 48,
        descSize = 18,
        padding = 80
    } = data || {};

    return (
        <section
            id="specialists"
            style={{ paddingTop: `${padding}px`, paddingBottom: `${padding}px` }}
            className="py-12 md:py-24 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <FadeIn direction="right" duration={0.8}>
                            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                                <div className="h-[1px] w-8 md:w-12 bg-[#007f94]" />
                                <span className="text-[#007f94] font-bold uppercase tracking-widest text-xs md:text-sm">{badge}</span>
                            </div>

                            <h2
                                style={{ fontSize: `clamp(1.75rem, 5vw, ${titleSize}px)` }}
                                className="font-black text-[#0a1e2b] leading-[1.1] tracking-tighter mb-4 md:mb-6 whitespace-pre-line"
                            >
                                <HighlightedText text={title} />
                            </h2>

                            <p
                                style={{ fontSize: `${descSize}px` }}
                                className="text-slate-500 leading-relaxed whitespace-pre-line"
                            >
                                {desc}
                            </p>
                        </FadeIn>
                    </div>

                    {/* Visual Side */}
                    <FadeIn
                        direction="left"
                        duration={1}
                        className="w-full lg:w-1/2 relative order-1 lg:order-2"
                    >
                        {/* Decorative Offset Border */}
                        <div className="absolute top-4 -right-4 w-full h-full rounded-2xl md:rounded-[3rem] border-2 border-[#007f94]/10 z-0 translate-x-4 translate-y-4" />

                        <div className="relative z-10 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl aspect-[4/3] md:aspect-[5/4]">
                            <img
                                src={image}
                                className="w-full h-full object-cover object-top"
                                alt="Наши специалисты"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2b]/80 via-transparent to-transparent" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#007f94]/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Specialists;
