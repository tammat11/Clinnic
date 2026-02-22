import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';
import FadeIn from './common/FadeIn';
import HighlightedText from './common/HighlightedText';

// ==========================================
// ВАРИАНТ 1: Классический светлый (Текущий, Split-layout + Glassmorphism)
// ==========================================
const Variant1 = ({ data, stats, specs }: any) => (
    <section className="relative py-16 md:py-24 bg-[#f8fafc] overflow-hidden border-b-[10px] border-slate-200">
        <div className="absolute top-4 left-4 bg-black text-white px-4 py-1 rounded-full text-xs font-bold z-50">ВАРИАНТ 1 (Modern Split Layout)</div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <FadeIn direction="right" duration={1.2} className="w-full lg:w-1/2 relative order-2 lg:order-1">
                    <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,127,148,0.15)] aspect-[4/5] md:aspect-square group bg-white border border-slate-100 p-2 md:p-3">
                        <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
                            <img src={data.image} className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" alt="img" />
                        </div>
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 -left-2 md:-left-6 bg-white/80 backdrop-blur-xl border border-white p-4 md:p-5 rounded-2xl shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#007f94] to-indigo-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                                    <Star size={20} className="fill-white" />
                                </div>
                                <div><p className="text-[#0a1e2b] font-bold text-sm md:text-base leading-tight">Ведущие <br /> эксперты</p></div>
                            </div>
                        </motion.div>
                        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-10 -right-2 md:-right-6 bg-white/80 backdrop-blur-xl border border-white p-4 md:p-5 rounded-2xl shadow-xl">
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
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <FadeIn direction="left" duration={0.8}>
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                            <span className="px-4 py-1.5 rounded-full bg-white shadow-sm border border-[#007f94]/10 text-[#007f94] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#00c2e0] animate-pulse" /> {data.badge}
                            </span>
                        </div>
                        <h2 style={{ fontSize: `clamp(2rem, 5vw, ${data.titleSize}px)` }} className="font-black text-[#0a1e2b] leading-[1.1] tracking-tighter mb-6 md:mb-8 whitespace-pre-line">
                            <HighlightedText text={data.title} />
                        </h2>
                        <p style={{ fontSize: `${data.descSize}px` }} className="text-slate-500 leading-relaxed whitespace-pre-line mb-8 md:mb-12">
                            {data.desc}
                        </p>
                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                            {stats.map((stat: any, idx: number) => (
                                <div key={idx} className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 md:p-6 hover:shadow-md transition-shadow group">
                                    <div className="bg-[#f8fafc] w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <stat.icon className="text-[#007f94] w-6 h-6" />
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-1 md:mb-2">
                                        <span className="text-3xl md:text-4xl font-extrabold text-[#0a1e2b]">{stat.value}</span>
                                        <span className="text-[#007f94] font-bold">{stat.suffix}</span>
                                    </div>
                                    <p className="text-slate-500 text-xs md:text-sm whitespace-pre-line font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </section>
);

// ==========================================
// ВАРИАНТ 2: Минимализм "Apple-style" (Центрованный, широкое фото)
// ==========================================
const Variant2 = ({ data, stats, specs }: any) => (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden border-b-[10px] border-slate-200">
        <div className="absolute top-4 left-4 bg-black text-white px-4 py-1 rounded-full text-xs font-bold z-50">ВАРИАНТ 2 (Minimal Apple-Style)</div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <FadeIn direction="up" duration={0.8} className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                <div className="inline-flex items-center gap-2 mb-6">
                    <span className="h-[1px] w-8 bg-[#007f94]" />
                    <span className="text-[#007f94] text-sm font-bold uppercase tracking-[0.2em]">{data.badge}</span>
                    <span className="h-[1px] w-8 bg-[#007f94]" />
                </div>
                <h2 style={{ fontSize: `clamp(2.5rem, 6vw, ${data.titleSize + 12}px)` }} className="font-extrabold text-[#0a1e2b] leading-[1] tracking-tighter mb-8 whitespace-pre-line">
                    <HighlightedText text={data.title.replace('*', '').replace('*', '')} />
                </h2>
                <p style={{ fontSize: `${data.descSize + 2}px` }} className="text-slate-500 leading-relaxed whitespace-pre-line text-balance mx-auto">
                    {data.desc}
                </p>
            </FadeIn>

            <FadeIn direction="up" duration={1.2} className="relative">
                <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2b] via-transparent to-transparent z-10 opacity-70" />
                    <img src={data.image} className="absolute inset-0 w-full h-full object-cover object-[50%_25%]" alt="img" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="flex flex-wrap gap-4 md:gap-8">
                            {stats.map((stat: any, idx: number) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 min-w-[140px]">
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-3xl md:text-5xl font-black text-white">{stat.value}</span>
                                        <span className="text-[#00c2e0] font-bold text-lg">{stat.suffix}</span>
                                    </div>
                                    <p className="text-white/80 text-xs md:text-sm font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
);

// ==========================================
// ВАРИАНТ 3: Журнальный Bento-стиль (Сетка карточек)
// ==========================================
const Variant3 = ({ data, stats, specs }: any) => (
    <section className="relative py-16 md:py-24 bg-[#0a1e2b] overflow-hidden">
        <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 rounded-full text-xs font-bold z-50">ВАРИАНТ 3 (Bento Grid Dark)</div>

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">

                {/* Main Text Box (Spans 2 columns, 1 row) */}
                <FadeIn direction="down" duration={0.8} className="md:col-span-2 bg-[#0d2a3e] rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#007f94]/20 rounded-full blur-[80px]" />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <span className="text-[#00c2e0] text-xs font-bold uppercase tracking-widest">{data.badge}</span>
                        <div>
                            <h2 style={{ fontSize: `clamp(1.75rem, 4vw, ${data.titleSize - 4}px)` }} className="font-extrabold text-white leading-[1.1] tracking-tighter mb-4 whitespace-pre-line">
                                <HighlightedText text={data.title} />
                            </h2>
                            <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">{data.desc}</p>
                        </div>
                    </div>
                </FadeIn>

                {/* Main Image Box (Spans 1 col, 2 rows) */}
                <FadeIn direction="left" duration={1} className="md:row-span-2 bg-[#0d2a3e] rounded-3xl relative overflow-hidden group">
                    <img src={data.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center">
                        <Star className="text-[#00c2e0] fill-[#00c2e0]" size={20} />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8">
                        <p className="text-white font-bold text-xl md:text-2xl leading-tight mb-2">Отборные <br /> кадры</p>
                        <p className="text-white/70 text-sm">Лечим по мировым стандартам</p>
                    </div>
                </FadeIn>

                {/* Stat Box 1 */}
                <FadeIn direction="up" duration={1} className="bg-gradient-to-br from-[#00c2e0] to-[#007f94] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden text-white shadow-xl">
                    <Award size={32} className="opacity-50" />
                    <div>
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-5xl font-black">{stats[0].value}</span>
                            <span className="font-bold text-xl">{stats[0].suffix}</span>
                        </div>
                        <p className="font-medium opacity-90">{stats[0].label}</p>
                    </div>
                </FadeIn>

                {/* Features Box */}
                <FadeIn direction="up" duration={1.2} className="bg-white rounded-3xl p-8 flex flex-col justify-center">
                    <ul className="space-y-4">
                        {specs.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-3 text-[#0a1e2b] font-bold text-sm md:text-base">
                                <CheckCircle2 size={24} className="text-[#007f94]" />
                                <span className="leading-tight">{item}</span>
                            </li>
                        ))}
                    </ul>
                </FadeIn>

            </div>
        </div>
    </section>
);


// ==========================================
// MAIN COMPONENT
// ==========================================
const Specialists = ({ data }: { data: any }) => {
    const defaultData = {
        badge: 'Опыт и надежность',
        title: 'Наши *Специалисты*',
        desc: 'Команда врачей с международным опытом и доказательным подходом к лечению.\nРаботаем по современным протоколам, обеспечивая безопасность, точность и высокий уровень медицинского сервиса.',
        image: '/team.jpg',
        titleSize: 48,
        descSize: 18,
        padding: 80,
        ...data
    };

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
        <div id="specialists">
            <Variant1 data={defaultData} stats={stats} specs={specs} />
            <Variant2 data={defaultData} stats={stats} specs={specs} />
            <Variant3 data={defaultData} stats={stats} specs={specs} />
        </div>
    );
};

export default Specialists;
