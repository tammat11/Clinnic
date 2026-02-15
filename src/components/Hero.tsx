import React from 'react';
import { ArrowUpRight, Check, ShieldCheck, MapPin, Sparkles, Clock, Users, Search, Activity, FileText, Stethoscope } from 'lucide-react';
import Magnetic from './common/Magnetic';

const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-white pt-24 pb-12 overflow-hidden"
        >
            {/* 1. LAYERED BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
                <div
                    className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#007f94]/5 rounded-full blur-[80px] md:blur-[140px]"
                />
            </div>

            <div
                className="container mx-auto px-4 md:px-6 relative z-10 w-full"
            >
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-3 mb-6 md:mb-10 px-3 py-1.5 md:px-4 bg-slate-50 border border-slate-100 rounded-full"
                    >
                        <div className="flex items-center gap-1.5">
                            <div className="w-4 h-4 rounded-full overflow-hidden border border-slate-200 flex items-center justify-center bg-white">
                                <img
                                    src="https://flagcdn.com/w80/tr.png"
                                    className="w-[150%] h-[150%] max-w-none object-cover object-[30%_center]"
                                    alt="TR"
                                />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Turkiye</span>
                        </div>
                        <span className="text-slate-300 text-[10px]">/</span>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Kazakhstan</span>
                            <div className="w-4 h-4 rounded-full overflow-hidden border border-slate-200 flex items-center justify-center bg-white">
                                <img
                                    src="https://flagcdn.com/w80/kz.png"
                                    className="w-[150%] h-[150%] max-w-none object-cover"
                                    alt="KZ"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h1
                        className="text-4xl xs:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold text-[#0a1e2b] tracking-tighter leading-[1.05] md:leading-[1.1] mb-6 px-1"
                    >
                        Ведущие врачи <br /> <span className="text-[#007f94]">из Турции теперь</span> <br /> принимают в Алматы
                    </h1>

                    {/* Detailed Subtext */}
                    <div
                        className="max-w-4xl mx-auto space-y-3 mb-8 md:mb-10 px-0"
                    >
                        <h2 className="text-base xs:text-lg md:text-3xl font-black text-[#007f94]/70 tracking-tighter leading-tight uppercase whitespace-pre-wrap md:whitespace-nowrap">
                            Узнайте риски до того, <span className="text-[#007f94]">как они станут диагнозами</span>
                        </h2>

                        <p className="text-sm md:text-lg text-slate-500 font-medium max-w-[340px] md:max-w-2xl mx-auto leading-relaxed opacity-80">
                            Консультации, диагностика и планы медицинской реабилитации <br className="hidden xs:block md:hidden" /> экспертного уровня без выезда за границу.
                        </p>
                    </div>

                    {/* Main CTA Section */}
                    <div
                        className="flex flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full mx-auto px-4"
                    >
                        <Magnetic>
                            <a
                                href="#contact"
                                className="flex-1 sm:flex-none px-4 md:px-12 py-4 md:py-5 bg-[#007f94] text-white font-bold rounded-2xl shadow-xl shadow-[#007f94]/20 flex items-center justify-center gap-2 md:gap-3 text-base md:text-xl whitespace-nowrap hover:scale-105 active:scale-95 transition-transform duration-200"
                            >
                                Записаться <ArrowUpRight size={18} className="shrink-0 md:w-5 md:h-5" />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a
                                href="#cost"
                                className="flex-1 sm:flex-none px-4 md:px-12 py-4 md:py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all text-base md:text-xl flex justify-center whitespace-nowrap hover:scale-105 active:scale-95 duration-200"
                            >
                                Стоимость
                            </a>
                        </Magnetic>
                    </div>

                    {/* Benefit Bar - Unified for Mobile/Desktop */}
                    <div className="w-full border-t border-slate-100 pt-6 md:pt-8 mb-12 px-2 md:px-0">
                        <div
                            className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 gap-y-3"
                        >
                            {[
                                { icon: ShieldCheck, text: "Протоколы JCI" },
                                { icon: Search, text: "Чекап: 80 направлений" },
                                { icon: Clock, text: "Без очередей" },
                                { icon: Users, text: "Персональный менеджер" },
                                { icon: Sparkles, text: "Всё за 1 визит" }
                            ].map((item, i) => (
                                <span key={i} className="flex items-center gap-1.5 md:gap-2 whitespace-nowrap text-[#007f94] font-bold tracking-tight text-[10px] md:text-sm bg-slate-50 md:bg-transparent px-2 md:px-0 py-1 md:py-0 rounded-md md:rounded-none">
                                    <item.icon size={12} className="text-[#007f94] shrink-0 md:w-[14px] md:h-[14px]" />
                                    {item.text}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Portal */}
                    <div className="relative w-full max-w-6xl mx-auto mb-14 px-0 sm:px-0">
                        <div
                            className="aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
                                className="w-full h-full object-cover"
                                alt="Modern Clinic Excellence"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                        </div>

                        {/* Floating Action Cards */}
                        {/* Card 1: Dr. Mustafa Demir */}
                        <div
                            className="absolute -left-2 sm:-left-6 lg:-left-12 top-[10%] sm:top-1/4 z-20"
                        >
                            <div
                                className="bg-white/95 backdrop-blur-xl p-3 sm:p-6 rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-white/50 max-w-[160px] sm:max-w-[260px] text-left"
                            >
                                <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                                    <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full border-2 border-[#007f94] overflow-hidden shadow-lg shrink-0">
                                        <img src="/doctor.png" className="w-full h-auto" alt="Doctor" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] sm:text-sm font-bold text-slate-900 leading-tight">Д-р Мустафа Демир</p>
                                        <p className="text-[7px] sm:text-[9px] text-[#007f94] font-bold uppercase mt-0.5 sm:mt-1">Acıbadem Surgeon</p>
                                    </div>
                                </div>
                                <p className="text-[8px] sm:text-[11px] text-slate-500 font-medium leading-tight sm:leading-relaxed">Действующий профессор медицинских наук из Стамбула.</p>
                            </div>
                        </div>

                        {/* Card 2: Expertise Badge */}
                        <div
                            className="absolute -right-2 sm:-right-6 lg:-right-12 bottom-[10%] sm:bottom-1/4 z-20"
                        >
                            <div
                                className="bg-[#007f94]/90 backdrop-blur-xl p-3 sm:p-6 rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-white/20 max-w-[140px] sm:max-w-[240px] text-left text-white"
                            >
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                        <ShieldCheck size={16} className="sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] sm:text-sm font-bold leading-tight">Expert Opinion</p>
                                        <p className="text-[7px] sm:text-[9px] text-white/70 font-bold uppercase">International Status</p>
                                    </div>
                                </div>
                                <p className="text-[8px] sm:text-[11px] text-white/80 font-medium leading-tight sm:leading-relaxed">Второе мнение от ведущих специалистов мира.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
