import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';
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

    const stats = [
        { label: 'Средний опыт', value: '15+', suffix: 'лет', icon: Award },
        { label: 'Международных\nпротоколов', value: '100', suffix: '%', icon: ShieldCheck },
    ];

    const specs = [
        'Доказательная медицина',
        'Индивидуальный подход',
        'Постоянное повышение квалификации'
    ];

    return (
        <section
            id="specialists"
            style={{ paddingTop: `${padding}px`, paddingBottom: `${padding}px` }}
            className="relative py-12 md:py-24 bg-[#f8fafc] overflow-hidden"
        >
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#007f94]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Visual Side */}
                    <FadeIn
                        direction="right"
                        duration={1.2}
                        className="w-full lg:w-1/2 relative order-2 lg:order-1"
                    >
                        {/* Main Image Container */}
                        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,127,148,0.15)] aspect-[4/5] md:aspect-square group bg-white border border-slate-100 p-2 md:p-3">
                            <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
                                <img
                                    src={image}
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                    alt="Наши специалисты"
                                />
                            </div>

                            {/* Floating Glass Card 1 - Left Bottom (Light theme) */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 -left-2 md:-left-6 bg-white/80 backdrop-blur-xl border border-white p-4 md:p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#007f94] to-indigo-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                                        <Star size={20} className="fill-white" />
                                    </div>
                                    <div>
                                        <p className="text-[#0a1e2b] font-bold text-sm md:text-base leading-tight">Ведущие <br /> эксперты</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Card 2 - Right Top (Light theme) */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-10 -right-2 md:-right-6 bg-white/80 backdrop-blur-xl border border-white p-4 md:p-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                                        <UserCheck size={20} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs md:text-sm">Более</p>
                                        <p className="text-[#0a1e2b] font-bold text-sm md:text-base">10 000+ пациентов</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <FadeIn direction="left" duration={0.8}>
                            {/* Stylish Badge */}
                            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                <span className="px-4 py-1.5 rounded-full bg-white shadow-sm border border-[#007f94]/10 text-[#007f94] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#00c2e0] animate-pulse" />
                                    {badge}
                                </span>
                            </div>

                            <h2
                                style={{ fontSize: `clamp(2rem, 5vw, ${titleSize}px)` }}
                                className="font-black text-[#0a1e2b] leading-[1.1] tracking-tighter mb-6 md:mb-8 whitespace-pre-line"
                            >
                                <HighlightedText text={title} />
                            </h2>

                            <p
                                style={{ fontSize: `${descSize}px` }}
                                className="text-slate-500 leading-relaxed whitespace-pre-line mb-8 md:mb-12"
                            >
                                {desc}
                            </p>

                            {/* Interactive Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 md:p-6 hover:shadow-md transition-shadow group">
                                        <div className="bg-[#f8fafc] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <stat.icon className="text-[#007f94] w-6 h-6" />
                                        </div>
                                        <div className="flex items-baseline gap-1 mb-1 md:mb-2">
                                            <span className="text-3xl md:text-4xl font-extrabold text-[#0a1e2b]">{stat.value}</span>
                                            <span className="text-[#007f94] font-bold">{stat.suffix}</span>
                                        </div>
                                        <p className="text-slate-500 text-xs md:text-sm whitespace-pre-line font-medium">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Elegant Bullet points */}
                            <ul className="space-y-4">
                                {specs.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[#0a1e2b] font-medium text-base">
                                        <div className="w-6 h-6 rounded-full bg-[#007f94]/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={16} className="text-[#007f94]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Specialists;
