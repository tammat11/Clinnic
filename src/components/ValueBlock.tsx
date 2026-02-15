import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from './common/FadeIn';
import HighlightedText from './common/HighlightedText';
import { ICON_POOL } from '../lib/icons';
import { Activity } from 'lucide-react';

const ValueBlock = ({ data }: { data: any }) => {
    const {
        title = '80% заболеваний можно предотвратить, если обнаружить их на ранней стадии',
        mainText = 'Найдём причину ваших симптомов, а не будем лечить их годами',
        subText = 'Персонализированная диагностика и план восстановления за 1 визит',
        subTextSize = 18,
        image,
        titleSize = 48,
        descSize = 18,
        padding = 80,
        methods,
        methodTitleSize = 20,
        methodDescSize = 14
    } = data || {};

    return (
        <section
            id="value"
            style={{ paddingTop: `${padding}px`, paddingBottom: `${padding}px` }}
            className="relative bg-[#f8fafc] font-['Roboto'] overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Content */}
                    <FadeIn delay={0.2} direction="right" className="space-y-8 md:space-y-12 order-2 lg:order-1">
                        <div className="grid gap-6 md:gap-8">
                            {(methods || []).map((item: any, index: number) => {
                                const Icon = ICON_POOL[item.icon] || ICON_POOL.Activity;
                                return (
                                    <FadeIn key={index} delay={0.3 + index * 0.1} direction="up">
                                        <div className="flex gap-4 md:gap-6 group">
                                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-[#007f94] shadow-sm group-hover:scale-110 group-hover:bg-[#007f94] group-hover:text-white transition-all duration-300 shrink-0">
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <h3
                                                    style={{ fontSize: `${methodTitleSize}px` }}
                                                    className="font-bold text-[#0a1e2b] mb-2 group-hover:text-[#007f94] transition-colors"
                                                >
                                                    {item.title}
                                                </h3>
                                                <p
                                                    style={{ fontSize: `${methodDescSize}px` }}
                                                    className="text-slate-500 leading-relaxed font-medium"
                                                >
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </FadeIn>

                    {/* Right Content - Sticky */}
                    <div className="lg:sticky lg:top-32 order-1 lg:order-2">
                        <FadeIn delay={0.1}>
                            <h2
                                style={{ fontSize: `clamp(1.5rem, 4vw, ${titleSize}px)` }}
                                className="font-bold text-[#0a1e2b] mb-4 md:mb-8 leading-[1.1] tracking-tighter max-w-5xl mx-auto whitespace-pre-line"
                            >
                                <HighlightedText text={title} />
                            </h2>
                            <div className="space-y-4">
                                <p
                                    style={{ fontSize: `${descSize}px` }}
                                    className="text-slate-800 font-bold leading-relaxed mb-1 md:mb-2 whitespace-pre-line"
                                >
                                    <HighlightedText text={mainText} />
                                </p>
                                <p
                                    style={{ fontSize: `${subTextSize}px` }}
                                    className="text-slate-500 max-w-2xl mx-auto opacity-70 whitespace-pre-line"
                                >
                                    {subText}
                                </p>
                                {data.conclusion && (
                                    <p className="text-[#007f94] font-bold text-sm md:text-base pt-4 border-t border-[#007f94]/10">
                                        {data.conclusion}
                                    </p>
                                )}
                            </div>

                            {image && (
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="mt-8 md:mt-12 rounded-3xl overflow-hidden shadow-2xl shadow-[#007f94]/20 aspect-[4/3] relative group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2b]/80 via-transparent to-transparent z-10" />
                                    <img
                                        src={image}
                                        alt="Diagnosis"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 z-20">
                                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                                            <div className="w-10 h-10 rounded-full bg-[#007f94] flex items-center justify-center text-white font-bold">
                                                <Activity size={20} />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">Точность диагностики</p>
                                                <p className="text-white/80 text-xs">99.9% подтвержденных случаев</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueBlock;
