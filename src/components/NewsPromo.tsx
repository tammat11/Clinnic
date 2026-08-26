import React from 'react';
import { ArrowUpRight, CalendarDays, CheckCircle2, Sparkles } from 'lucide-react';
import FadeIn from './common/FadeIn';
import Magnetic from './common/Magnetic';

const NewsPromo = () => {
    const benefits = [
        'Лечение узлов методом абляции — без разрезов и наркоза',
        'Точная биопсия',
        'Уменьшение узлов до 98%'
    ];

    return (
        <section id="news" className="bg-white px-4 pb-14 pt-3 md:px-6 md:pb-24 md:pt-6">
            <div className="mx-auto max-w-[1280px]">
                <FadeIn direction="up" duration={0.75}>
                    <article className="relative isolate overflow-hidden rounded-[2rem] border border-[#007f94]/20 bg-[#eaf8fa] shadow-[0_22px_70px_rgba(0,127,148,0.12)] md:rounded-[3rem]">
                        <div className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(0,127,148,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(0,127,148,.14)_1px,transparent_1px)] [background-size:28px_28px]" />
                        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#11b8cd]/20 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-36 left-[35%] h-72 w-72 rounded-full bg-white/90 blur-3xl" />

                        <div className="relative grid lg:grid-cols-[0.82fr_1.18fr]">
                            <div className="relative min-h-[380px] overflow-hidden border-b border-[#007f94]/15 bg-gradient-to-br from-[#cceff3] via-[#effcfd] to-white lg:min-h-[620px] lg:border-b-0 lg:border-r">
                                <div className="absolute inset-x-7 bottom-0 top-10 rounded-t-[10rem] border border-white/80 bg-white/45 shadow-inner md:inset-x-14" />
                                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[#007f94]/15 bg-white/85 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#007f94] shadow-sm md:left-8 md:top-8">
                                    <Sparkles size={14} /> Новость клиники
                                </div>
                                <img
                                    src="/d5.png"
                                    alt="Prof. Dr. Güner Sönmez"
                                    className="absolute bottom-0 left-1/2 h-[97%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom lg:h-[100%]"
                                />
                                <div className="absolute bottom-5 left-5 right-5 border-l-[3px] border-[#00a8bd] bg-white/90 px-4 py-3.5 text-[#173c49] shadow-[0_12px_28px_rgba(6,60,72,0.16)] backdrop-blur-md md:bottom-8 md:left-8 md:right-8 md:px-5 md:py-4">
                                    <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#007f94]">Интервенционный радиолог</p>
                                    <p className="mt-1 text-[1.08rem] font-extrabold leading-none tracking-[-0.035em] md:text-xl">Prof. Dr. Güner Sönmez</p>
                                    <div className="mt-2 flex items-center gap-2 text-[10px] font-bold text-slate-500 md:text-xs">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#00a8bd]" />
                                        29 лет клинического опыта
                                    </div>
                                </div>
                            </div>

                            <div className="relative px-6 py-8 sm:px-9 md:px-12 md:py-12 lg:py-14">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-[#007f94] px-4 py-2.5 text-[12px] font-extrabold uppercase tracking-[0.12em] text-white md:text-[13px]">
                                        <CalendarDays size={14} /> 11–12 сентября
                                    </span>
                                    <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#007f94]">Алматы · Турция 🇹🇷</span>
                                </div>

                                <h2 className="mt-6 max-w-[720px] text-[clamp(1.85rem,3.55vw,3.65rem)] font-extrabold uppercase leading-[1] tracking-[-0.05em] text-[#123442]">
                                    Безоперационное лечение<br />узлов щитовидки <span className="text-[#009db5]">в Алматы</span>
                                </h2>
                                <div className="mt-7 max-w-xl border-l-2 border-[#11b8cd] pl-4 md:pl-5">
                                    <p className="text-xs font-extrabold uppercase leading-relaxed tracking-[0.1em] text-[#007f94]">Эксклюзивный приём интервенционного радиолога из Турции</p>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">Современный, щадящий подход к лечению узлов щитовидной железы — под контролем международного эксперта.</p>
                                </div>

                                <ul className="mt-7 grid gap-3 md:mt-8 md:grid-cols-3 md:gap-3">
                                    {benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-2.5 rounded-2xl border border-white/90 bg-white/75 p-3 text-xs font-bold leading-snug text-[#244652] shadow-sm md:block md:p-4">
                                            <CheckCircle2 className="mt-0.5 shrink-0 text-[#00a8bd] md:mb-3" size={18} strokeWidth={2.5} />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-10">
                                    <Magnetic>
                                        <a href="#contact" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#007f94] px-7 py-4 text-center text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_14px_30px_rgba(0,127,148,0.25)] transition-all hover:bg-[#00a8bd] hover:shadow-[0_18px_38px_rgba(0,127,148,0.32)]">
                                            Забронируйте время приёма <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </a>
                                    </Magnetic>
                                    <p className="text-xs font-semibold leading-relaxed text-slate-500">Количество мест на приём ограничено.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </FadeIn>
            </div>
        </section>
    );
};

export default NewsPromo;
