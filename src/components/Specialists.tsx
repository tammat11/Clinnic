import React from 'react';
import FadeIn from './common/FadeIn';

const Specialists = ({ data }: { data: any }) => {
    const {
        title = 'Наши специалисты',
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
                    <div className="w-full lg:w-1/2 order-1 lg:order-1">
                        <FadeIn direction="right" duration={0.8}>
                            <h2
                                style={{ fontSize: `clamp(1.75rem, 5vw, ${titleSize}px)` }}
                                className="font-black text-[#0a1e2b] leading-[1.1] tracking-tighter mb-4 md:mb-6 whitespace-pre-line"
                            >
                                {title}
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
                        className="w-full lg:w-1/2 relative order-2 lg:order-2"
                    >
                        <div className="relative z-10 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl">
                            <img
                                src={image}
                                className="w-full h-auto object-cover object-center"
                                alt="Наши специалисты"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#007f94]/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl" />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Specialists;
