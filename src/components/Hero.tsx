import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './common/Magnetic';
import HighlightedText from './common/HighlightedText';
import { ICON_POOL } from '../lib/icons';

const Hero = ({ data }: { data: any }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const {
        badgeTR = 'Turkiye',
        badgeKZ = 'Kazakhstan',
        title = 'Ведущие врачи из Турции теперь принимают в Алматы',
        subtitle = 'Узнайте риски до того, как они станут диагнозами',
        description = 'Консультации, диагностика и планы медицинской реабилитации экспертного уровня без выезда за границу.',
        buttonPrimary = 'Записаться на приём',
        buttonSecondary = 'Подробнее о клинике',
        benefits = []
    } = data || {};

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
        }
    };

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative flex items-center justify-center min-h-[100svh] pt-32 pb-20 bg-[#fafcff] overflow-hidden"
        >
            {/* 1. PREMIUM BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3]" />

                {/* Animated glowing orbs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-[#00c2e0]/20 to-transparent blur-[80px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[30%] right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-bl from-[#007f94]/15 to-transparent blur-[80px]"
                />
            </div>

            <motion.div
                className="container mx-auto px-4 sm:px-6 relative z-10 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ y, opacity }}
            >
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Badge */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 px-5 py-2.5 bg-white/70 backdrop-blur-md rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-slate-100">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-800">{badgeTR}</span>
                        </div>
                        <div className="w-[1px] h-3 bg-slate-300"></div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c2e0] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c2e0]"></span>
                            </span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-800">{badgeKZ}</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-[clamp(2.5rem,7vw,5rem)] font-extrabold text-[#0a1e2b] tracking-tighter leading-[1] md:leading-[1.05] mb-6 md:mb-8 max-w-5xl text-balance drop-shadow-sm"
                    >
                        <HighlightedText text={title} />
                    </motion.h1>

                    {/* Subtext and Description */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mb-10 max-w-3xl">
                        <h2 className="text-sm md:text-base font-black text-transparent bg-clip-text bg-gradient-to-r from-[#007f94] to-[#00c2e0] tracking-[0.1em] uppercase text-balance leading-snug">
                            {subtitle}
                        </h2>
                        <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed md:leading-normal text-balance">
                            {description}
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 mb-16">
                        <Magnetic>
                            <a href="#contact" className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-[#007f94] hover:bg-[#00c2e0] text-white font-bold rounded-2xl shadow-[0_10px_40px_rgba(0,127,148,0.3)] transition-all flex items-center justify-center gap-3 text-base md:text-lg">
                                {buttonPrimary} <ArrowUpRight className="w-5 h-5 opacity-80" />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#about" className="w-full sm:w-auto px-8 py-4 sm:py-5 bg-white border border-slate-200 text-slate-700 hover:text-[#007f94] hover:border-[#007f94]/30 hover:bg-[#007f94]/5 font-bold rounded-2xl transition-all flex items-center justify-center text-base md:text-lg shadow-sm">
                                {buttonSecondary}
                            </a>
                        </Magnetic>
                    </motion.div>

                    {/* Benefit Bar */}
                    <motion.div variants={itemVariants} className="pt-8 w-full max-w-4xl relative">
                        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-10">
                            {(benefits || []).map((item: any, i: number) => {
                                const Icon = ICON_POOL[item.icon] || ICON_POOL.Activity;
                                return (
                                    <div key={i} className="flex items-center gap-2 group cursor-default">
                                        <div className="w-6 h-6 rounded-full bg-[#007f94]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Icon className="w-3.5 h-3.5 text-[#007f94]" />
                                        </div>
                                        <span className="text-xs md:text-sm font-bold text-slate-600 group-hover:text-[#0a1e2b] transition-colors">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
