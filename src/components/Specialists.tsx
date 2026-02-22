import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';
import FadeIn from './common/FadeIn';
import HighlightedText from './common/HighlightedText';
import Magnetic from './common/Magnetic';

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
            className="relative py-12 md:py-24 bg-[#0a1e2b] overflow-hidden"
        >
            {/* Background Details */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#007f94]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Visual Side */}
                    <FadeIn
                        direction="right"
                        duration={1.2}
                        className="w-full lg:w-1/2 relative order-2 lg:order-1"
                    >
                        {/* Main Image Container */}
                        <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square group bg-white/5 border border-white/10 p-2 md:p-3">
                            <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
                                <img
                                    src={image}
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                    alt="Наши специалисты"
                                />
                                {/* Soft Inner Shadow/Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1e2b]/80 via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Floating Glass Card 1 */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-10 -right-4 md:-right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-5 rounded-2xl shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#007f94] to-indigo-600 rounded-full flex items-center justify-center text-white shrink-0">
                                        <Star size={20} className="fill-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm md:text-base leading-tight">Ведущие <br /> эксперты</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Glass Card 2 */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 -left-4 md:-left-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-5 rounded-2xl shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-full flex items-center justify-center text-white shrink-0">
                                        <UserCheck size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/80 text-xs md:text-sm">Более</p>
                                        <p className="text-white font-bold text-sm md:text-base">10 000+ пациентов</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </FadeIn>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <FadeIn direction="left" duration={0.8}>
                            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                <span className="px-4 py-1.5 rounded-full bg-[#007f94]/20 border border-[#007f94]/30 text-[#00c2e0] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                                    {badge}
                                </span>
                            </div>

                            <h2
                                style={{ fontSize: `clamp(2rem, 5vw, ${titleSize}px)` }}
                                className="font-black text-white leading-[1.1] tracking-tighter mb-6 md:mb-8 whitespace-pre-line"
                            >
                                <HighlightedText text={title} />
                            </h2>

                            <p
                                style={{ fontSize: `${descSize}px` }}
                                className="text-white/70 leading-relaxed whitespace-pre-line mb-8 md:mb-12 font-light"
                            >
                                {desc}
                            </p>

                            {/* Interactive Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                        <stat.icon className="text-[#00c2e0] w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4" />
                                        <div className="flex items-baseline gap-1 mb-1 md:mb-2">
                                            <span className="text-3xl md:text-4xl font-bold text-white">{stat.value}</span>
                                            <span className="text-[#00c2e0] font-medium">{stat.suffix}</span>
                                        </div>
                                        <p className="text-white/60 text-xs md:text-sm whitespace-pre-line leading-tight">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Bullet points */}
                            <ul className="space-y-3 md:space-y-4">
                                {specs.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                                        <CheckCircle2 size={18} className="text-[#007f94] shrink-0 fill-[#007f94]/20" />
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
