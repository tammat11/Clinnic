import React from 'react';
import FadeIn from './common/FadeIn';
import HighlightedText from './common/HighlightedText';
import { ICON_POOL } from '../lib/icons';
import { Sparkles } from 'lucide-react';

const ValueBlock = ({ data }: { data: any }) => {
    const {
        title = '80% заболеваний можно предотвратить, если обнаружить их на ранней стадии',
        mainText = 'Найдём причину ваших симптомов, а не будем лечить их годами',
        subText = 'Персонализированная диагностика и план восстановления за 1 визит',
        titleSize = 48,
        descSize = 18,
        padding = 120,
        methods = [],
        methodTitleSize = 22,
        methodDescSize = 15,
        conclusion
    } = data || {};

    return (
        <section
            id="value"
            style={{ paddingTop: `${padding}px`, paddingBottom: `${padding}px` }}
            className="relative bg-[#0a1e2b] font-['Outfit'] overflow-hidden"
        >
            {/* Premium Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#007f94_0,transparent_50%)] opacity-[0.05]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007f94]/10 border border-[#007f94]/20 text-[#007f94] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8">
                            <Sparkles size={14} /> Эффективная профилактика
                        </div>
                        <h2
                            style={{ fontSize: `clamp(2rem, 5vw, ${titleSize}px)` }}
                            className="font-black text-white mb-8 leading-[1.05] tracking-tightest whitespace-pre-line"
                        >
                            <HighlightedText text={title} />
                        </h2>
                        <div className="space-y-4 max-w-2xl mx-auto">
                            <p
                                style={{ fontSize: `${descSize + 4}px` }}
                                className="text-[#007f94] font-bold leading-relaxed whitespace-pre-line"
                            >
                                <HighlightedText text={mainText} />
                            </p>
                            <p
                                style={{ fontSize: `${descSize}px` }}
                                className="text-slate-400 font-medium leading-relaxed opacity-90"
                            >
                                {subText}
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {methods.map((item: any, index: number) => {
                        const Icon = ICON_POOL[item.icon] || ICON_POOL.Activity;
                        return (
                            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
                                <div className="h-full p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-[#007f94]/30 hover:bg-white/[0.05] transition-all duration-500 group relative">
                                    <div className="w-14 h-14 bg-[#007f94]/10 rounded-2xl flex items-center justify-center text-[#007f94] mb-8 group-hover:scale-110 group-hover:bg-[#007f94] group-hover:text-white transition-all duration-500">
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3
                                        style={{ fontSize: `${methodTitleSize}px` }}
                                        className="font-black text-white mb-4 tracking-tight group-hover:text-[#007f94] transition-colors"
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        style={{ fontSize: `${methodDescSize}px` }}
                                        className="text-slate-400 leading-relaxed font-medium"
                                    >
                                        {item.desc}
                                    </p>

                                    {/* Subtle index number */}
                                    <span className="absolute top-8 right-8 text-white/5 text-4xl font-black italic">
                                        0{index + 1}
                                    </span>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                {conclusion && (
                    <FadeIn delay={0.6} direction="up" className="mt-16 md:mt-24 text-center">
                        <div className="inline-block p-1 rounded-[2rem] bg-gradient-to-r from-transparent via-[#007f94]/20 to-transparent">
                            <p className="px-8 py-4 text-white font-bold text-sm md:text-lg rounded-[1.8rem] bg-[#0a1e2b] border border-[#007f94]/10 shadow-2xl">
                                {conclusion}
                            </p>
                        </div>
                    </FadeIn>
                )}
            </div>
        </div>
    );
};

export default ValueBlock;
