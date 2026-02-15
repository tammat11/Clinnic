import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Check, ShieldCheck, MapPin, Sparkles, Clock, Users, Search, Activity, FileText, Stethoscope } from 'lucide-react';
import Magnetic from './common/Magnetic';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Animation Variants - Explicitly cast to any to resolve build issues with complex transition types
    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const portalVariants: any = {
        hidden: { scale: 1.1, clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 },
        visible: {
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            opacity: 1,
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center bg-white pt-24 pb-12 overflow-hidden"
        >
            {/* 1. LAYERED BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Modern subtle patterns */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#007f94]/10 via-transparent to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/20 via-transparent to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

                {/* Floating particles/accents */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 w-2 h-2 bg-[#007f94] rounded-full"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-20 w-3 h-3 bg-blue-400 rounded-full"
                />
            </div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col space-y-8 md:space-y-10"
                    >
                        {/* Status Badge */}
                        <motion.div variants={itemVariants} className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-100 shadow-sm">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="doctor" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="h-4 w-[1px] bg-slate-200 mx-2" />
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#007f94]/5 rounded-full border border-[#007f94]/10">
                                <span className="w-2 h-2 rounded-full bg-[#007f94] animate-pulse" />
                                <span className="text-[#007f94] text-xs font-bold uppercase tracking-widest">Топ врачи Турции в Алматы</span>
                            </div>
                        </motion.div>

                        {/* Heading Section */}
                        <div className="space-y-6">
                            <motion.h1
                                variants={itemVariants}
                                className="text-[#0a1e2b] text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter"
                            >
                                Передовая <br />
                                <span className="text-[#007f94] italic relative">
                                    медицина
                                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" fill="none">
                                        <path d="M5 15C50 5 150 5 295 15" stroke="#007f94" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
                                    </svg>
                                </span> <br />
                                в Вашем городе
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-slate-500 text-base md:text-xl lg:text-2xl max-w-xl leading-relaxed font-medium"
                            >
                                Получите консультацию ведущих специалистов Турции по международным стандартам JCI, не выезжая из Алматы.
                            </motion.p>
                        </div>

                        {/* CTA Section */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5">
                            <Magnetic>
                                <a
                                    href="#contact"
                                    className="group relative px-8 md:px-12 py-4 md:py-6 bg-[#007f94] text-white rounded-2xl md:rounded-[2rem] font-bold text-base md:text-xl overflow-hidden shadow-2xl shadow-[#007f94]/40 hover:scale-[1.02] transition-all w-full sm:w-auto text-center"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Записаться на прием
                                        <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </a>
                            </Magnetic>

                            <div className="flex flex-col gap-1 px-4 text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => <Sparkles key={s} size={14} className="text-yellow-400 fill-yellow-400" />)}
                                    <span className="ml-2 font-black text-[#0a1e2b]">4.9/5</span>
                                </div>
                                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">рейтинг пациентов</span>
                            </div>
                        </motion.div>

                        {/* Micro-Benefits */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100"
                        >
                            {[
                                { icon: ShieldCheck, text: "Золотой стандарт JCI", color: "text-blue-500" },
                                { icon: Clock, text: "Результат за 24ч", color: "text-emerald-500" },
                                { icon: Stethoscope, text: "Второе мнение", color: "text-[#007f94]" }
                            ].map((item, id) => (
                                <div key={id} className="flex flex-col gap-2">
                                    <item.icon size={20} className={item.color} />
                                    <span className="text-slate-900 font-bold text-sm tracking-tight leading-snug">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* RIGHT VISUAL */}
                    <motion.div
                        variants={portalVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] md:rounded-[4rem] overflow-hidden group shadow-2xl">
                            <motion.img
                                style={{ scale: imageScale }}
                                src="/doctor.png"
                                className="w-full h-full object-cover object-top scale-110"
                                alt="Expert Doctor"
                            />

                            {/* Glass Card Overlay */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 p-6 md:p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl overflow-hidden group/card"
                            >
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Ведущий эксперт</p>
                                        <h3 className="text-white text-lg md:text-2xl font-black">Д-р Ахмет Кая</h3>
                                        <p className="text-[#007f94] font-bold text-xs md:text-sm">Кардиолог высшей категории</p>
                                    </div>
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                                        <Activity size={24} className="md:w-8 md:h-8" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 p-10 hidden md:block">
                                <div className="w-20 h-20 border-t-2 border-r-2 border-white/30 rounded-tr-[2rem]" />
                            </div>
                        </div>

                        {/* Floating Tech Badges */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 px-6 py-4 bg-white rounded-2xl shadow-2xl border border-slate-50 flex items-center gap-4 z-20"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#007f94]">
                                <Search size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Аналитическая база</p>
                                <p className="text-sm md:text-lg font-black text-[#0a1e2b]">Advanced Diagnostic</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-12 px-6 py-4 bg-[#0a1e2b] text-white rounded-2xl shadow-2xl border border-white/5 flex items-center gap-4 z-20"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#007f94] rounded-xl flex items-center justify-center">
                                <FileText size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">План лечения</p>
                                <p className="text-sm md:text-lg font-black">Success Protokol</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
