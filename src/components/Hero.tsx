import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './common/Magnetic';
import { ICON_POOL } from '../lib/icons';

const Hero = ({ data }: { data: any }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const yTitle = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
    const opacityTitle = useTransform(smoothProgress, [0, 0.5], [1, 0]);
    const scaleBg = useTransform(smoothProgress, [0, 1], [1, 1.2]);

    const {
        badgeTR = 'Turkiye',
        badgeKZ = 'Kazakhstan',
        title = 'Ведущие врачи из *Турции* \nтеперь принимают в Алматы',
        subtitle = 'Узнайте риски до того, как они станут диагнозами',
        description = 'Консультации, диагностика и планы медицинской реабилитации экспертного уровня без выезда за границу.',
        buttonPrimary = 'Записаться на приём',
        buttonSecondary = 'Подробнее о клинике',
        benefits = []
    } = data || {};

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#fafcff] pt-24 md:pt-32 pb-20"
        >
            {/* Animated Background Mesh */}
            <motion.div style={{ scale: scaleBg }} className="absolute inset-0 z-0 pointer-events-none origin-bottom">
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full opacity-40 mix-blend-multiply blur-[100px]"
                    style={{ background: 'radial-gradient(circle, rgba(0,194,224,0.4) 0%, rgba(250,252,255,0) 70%)' }}
                />

                <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-40 mix-blend-multiply blur-[120px]"
                    style={{ background: 'radial-gradient(circle, rgba(0,127,148,0.4) 0%, rgba(250,252,255,0) 70%)' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-50" />
            </motion.div>

            {/* Content Container */}
            <div className="container mx-auto px-4 z-10 relative h-full flex flex-col items-center justify-center">
                <motion.div style={{ y: yTitle, opacity: opacityTitle }} className="w-full max-w-5xl flex flex-col items-center text-center">

                    {/* Pulsing Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center p-1.5 pr-4 bg-white/70 backdrop-blur-xl border border-white/80 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)] relative overflow-hidden group">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-[#00c2e0]/0 via-[#00c2e0]/20 to-[#00c2e0]/0"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                            />
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm mr-3 relative z-10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-800">{badgeTR}</span>
                            </div>
                            <span className="text-slate-300 mx-1 text-sm font-light relative z-10">/</span>
                            <div className="flex items-center gap-2 px-3 py-1.5 pl-4 relative z-10">
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500">{badgeKZ}</span>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c2e0] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c2e0]"></span>
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Masked Title with Character/Word Animation */}
                    <div className="mb-6 md:mb-8 font-extrabold text-[clamp(2.5rem,6vw,5.5rem)] text-[#0a1e2b] tracking-[-0.03em] leading-[1] md:leading-[1.05] text-balance">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
                            }}
                            className="flex flex-wrap justify-center drop-shadow-sm"
                        >
                            {title.split(/(\s+)/).map((word: string, i: number) => {
                                if (word.includes('\n')) return <div key={i} className="w-full basis-full h-0" />;
                                if (word.trim() === '') return <span key={i} className="mx-[0.2em]" />;
                                const isHighlighted = word.includes('*');
                                const cleanWord = word.replace(/\*/g, '');

                                return (
                                    <span key={i} className="overflow-hidden inline-block pb-2">
                                        <motion.span
                                            variants={{
                                                hidden: { y: "110%", rotate: 8, opacity: 0, filter: "blur(8px)" },
                                                visible: { y: "0%", rotate: 0, opacity: 1, filter: "blur(0px)" }
                                            }}
                                            transition={{ type: "spring", damping: 25, stiffness: 120 }}
                                            className={`inline-block origin-top-left ${isHighlighted ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#007f94] to-[#00c2e0] pr-1' : ''}`}
                                        >
                                            {cleanWord}
                                        </motion.span>
                                    </span>
                                );
                            })}
                        </motion.h1>
                    </div>

                    {/* Subtitle & Description */}
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="max-w-3xl flex flex-col items-center gap-5 mt-4 mb-14"
                    >
                        <h2 className="text-xs md:text-xs font-black text-[#007f94] tracking-[0.2em] uppercase px-5 py-2.5 bg-[#007f94]/5 rounded-full border border-[#007f94]/10">
                            {subtitle}
                        </h2>
                        <p className="text-slate-500 font-medium text-lg md:text-2xl leading-relaxed text-balance max-w-2xl px-4">
                            {description}
                        </p>
                    </motion.div>

                    {/* Power Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full px-6 md:px-0 justify-center relative z-30"
                    >
                        <Magnetic>
                            <a href="#contact" className="group relative w-full sm:w-auto overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#007f94] text-white px-8 md:px-12 py-4 md:py-6 shadow-[0_20px_40px_-15px_rgba(0,127,148,0.6)] transition-transform hover:scale-105 active:scale-95 flex items-center justify-center font-bold text-lg md:text-xl">
                                <motion.div
                                    className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                                />
                                <span className="relative z-10 flex items-center gap-3">
                                    {buttonPrimary}
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#007f94] transition-colors">
                                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                </span>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#about" className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white border-2 border-slate-100 text-[#0a1e2b] hover:border-[#007f94] hover:bg-[#007f94]/5 rounded-2xl md:rounded-[2rem] flex items-center justify-center font-bold text-lg md:text-xl transition-all shadow-sm active:scale-95">
                                {buttonSecondary}
                            </a>
                        </Magnetic>
                    </motion.div>

                </motion.div>

                {/* Desktop 3D Floating Benefit Cards (Levitating around content) */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden perspective-1000 z-0">
                    <div className="absolute top-[28%] left-[8%] xl:left-[15%] w-[210px]">
                        <FloatingCard delay={0} item={benefits[0]} IconKey={benefits[0]?.icon} />
                    </div>
                    <div className="absolute top-[65%] left-[5%] xl:left-[10%] w-[230px]">
                        <FloatingCard delay={0.5} item={benefits[1]} IconKey={benefits[1]?.icon} />
                    </div>
                    <div className="absolute top-[32%] right-[8%] xl:right-[15%] w-[220px]">
                        <FloatingCard delay={0.3} item={benefits[2]} IconKey={benefits[2]?.icon} />
                    </div>
                    <div className="absolute top-[68%] right-[5%] xl:right-[10%] w-[210px]">
                        <FloatingCard delay={0.7} item={benefits[3]} IconKey={benefits[3]?.icon} />
                    </div>
                </div>

                {/* Mobile/Tablet Benefits Fallback */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="w-full mt-16 md:mt-24 lg:hidden relative z-20 pb-10"
                >
                    <div className="flex flex-wrap items-center justify-center gap-3 px-2">
                        {(benefits || []).map((item: any, i: number) => {
                            const Icon = ICON_POOL[item?.icon] || ICON_POOL.Activity;
                            return (
                                <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-[#007f94]/10 flex items-center justify-center">
                                        <Icon className="w-4 h-4 text-[#007f94]" />
                                    </div>
                                    <span className="text-sm font-extrabold text-[#0a1e2b]">{item?.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Extracted Floating Card Component for Levitation
const FloatingCard = ({ delay, item, IconKey }: any) => {
    if (!item) return null;
    const Icon = ICON_POOL[IconKey] || ICON_POOL.Activity;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 1 + delay }}
        >
            <motion.div
                animate={{
                    y: [0, -25, 0],
                    rotate: [-1.5, 1.5, -1.5],
                    rotateX: [0, 5, 0],
                    rotateY: [0, 5, 0]
                }}
                transition={{ duration: 7 + delay * 2, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
                className="bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-5 rounded-3xl flex items-center gap-4 transform-gpu"
            >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00c2e0]/20 to-[#007f94]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <Icon className="w-7 h-7 text-[#007f94]" />
                </div>
                <div>
                    <div className="text-sm lg:text-base font-extrabold text-[#0a1e2b] leading-tight">{item.text}</div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
