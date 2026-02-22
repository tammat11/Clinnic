import React from 'react';
import { Stethoscope, Scan, ClipboardCheck, ArrowRight, Play } from 'lucide-react';
import FadeIn from './common/FadeIn';
import Magnetic from './common/Magnetic';
import { motion } from 'framer-motion';
import HighlightedText from './common/HighlightedText';

const ProcessBlock = ({ data }: { data: any }) => {
    const {
        badge = 'Ваш путь к здоровью',
        title = 'Как проходит \n приём у эксперта',
        ctaTitle = 'Получите второе мнение \n бесценного уровня',
        ctaDesc = 'Запишитесь на консультацию сегодня и получите персональный план лечения в течение 24 часов.',
        ctaButton = 'Записаться сейчас',
        image = 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800',
        titleSize = 48,
        descSize = 18,
        padding = 80,
        steps,
        stepTitleSize = 24,
        stepDescSize = 16
    } = data || {};

    const ICONS = [Stethoscope, Scan, ClipboardCheck];
    const COLORS = ['bg-blue-50 text-blue-600', 'bg-indigo-50 text-indigo-600', 'bg-teal-50 text-teal-600'];

    return (
        <section
            id="process"
            style={{ paddingTop: `${padding}px`, paddingBottom: `${padding}px` }}
            className="relative bg-white font-['Roboto'] overflow-hidden"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto mb-16 md:mb-24 text-center">
                    <FadeIn>
                        <span className="text-[#007f94] font-bold tracking-widest uppercase text-sm mb-4 block">{badge}</span>
                        <h2
                            style={{ fontSize: `clamp(1.75rem, 5vw, ${titleSize}px)` }}
                            className="font-bold text-[#0a1e2b] leading-[1.1] tracking-tighter whitespace-pre-line"
                        >
                            <HighlightedText text={title} />
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-blue-100 hidden md:block" />

                    {(steps || []).map((step: any, index: number) => {
                        const Icon = ICONS[index % ICONS.length];
                        const color = COLORS[index % COLORS.length];

                        return (
                            <FadeIn key={index} delay={index * 0.2} direction="up" className="relative group">
                                <div className={`w-24 h-24 ${color} rounded-3xl flex items-center justify-center mb-8 mx-auto relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-blue-900/5`}>
                                    <Icon size={40} strokeWidth={1.5} />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0a1e2b] text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {step.num}
                                    </div>
                                </div>
                                <div className="text-center px-4">
                                    <h3
                                        style={{ fontSize: `${stepTitleSize}px` }}
                                        className="font-bold text-[#0a1e2b] mb-4 group-hover:text-[#007f94] transition-colors"
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        style={{ fontSize: `${stepDescSize}px` }}
                                        className="text-slate-500 leading-relaxed font-medium"
                                    >
                                        {step.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                {/* Integrated CTA Block */}
                <FadeIn
                    direction="up"
                    delay={0.2}
                    duration={0.7}
                    className="relative bg-[#0a1e2b] rounded-2xl md:rounded-[4rem] overflow-hidden p-8 md:p-10 lg:p-20 group mt-20"
                >
                    {/* Abstract background graphics */}
                    <div className="absolute top-0 right-0 w-full h-full">
                        <div className="absolute top-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#007f94]/20 rounded-full blur-[60px] md:blur-[120px] group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/10 rounded-full blur-[50px] md:blur-[100px]" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-8 items-center">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6 leading-[1.1] tracking-tighter whitespace-pre-line">
                                <HighlightedText text={ctaTitle} />
                            </h3>
                            <p
                                style={{ fontSize: `${descSize}px` }}
                                className="text-slate-400 font-medium mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed whitespace-pre-line"
                            >
                                {ctaDesc}
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                                <Magnetic>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="#contact"
                                        className="inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 bg-[#007f94] text-white font-bold text-sm md:text-lg rounded-full shadow-2xl shadow-[#007f94]/30 hover:opacity-90 transition-all w-full md:w-auto justify-center"
                                    >
                                        {ctaButton} <ArrowRight size={18} className="md:w-5 md:h-5" />
                                    </motion.a>
                                </Magnetic>
                            </div>
                        </div>

                        <div className="hidden lg:block relative h-full min-h-[300px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-full"
                            >
                                <img
                                    src={image}
                                    alt="Medical Process"
                                    className="w-full h-full object-cover"
                                    onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800'}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2b]/60 to-transparent" />
                            </motion.div>

                            {/* Floating decorative elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-6 w-20 h-20 bg-[#007f94]/30 rounded-full blur-2xl"
                            />
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default ProcessBlock;
