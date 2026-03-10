import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import HighlightedText from './common/HighlightedText';

const Footer = ({ data, ui }: { data: any, ui?: any }) => {
    const {
        address = 'Алматы, проспект Достык, 210',
        phone = '+7 707 333 44 55',
        instagram = 'https://www.instagram.com/icgroup.kz/?__pwa=1'
    } = data || {};

    const uiData = ui?.footer || {
        contacts: "Контакты",
        tagline: "Leading private clinic in Almaty bringing world-class Turkish medical protocols to your health.",
        agreement: "Medical Agreement",
        privacy: "Privacy Charter"
    };

    return (
        <footer className="bg-slate-900 pt-24 pb-12 text-white overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid lg:grid-cols-12 gap-16 mb-20"
                >
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-[#007f94] rounded-lg flex items-center justify-center">
                                <span className="text-white font-semibold text-xl">R</span>
                            </div>
                            <span className="text-2xl font-semibold tracking-tight uppercase">Reactive</span>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-10">
                            {uiData.tagline}
                        </p>
                        <div className="flex gap-6">
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                href={instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-xl hover:bg-[#007f94] transition-colors"
                            >
                                <Instagram size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, rotate: -10 }}
                                href="#"
                                className="p-3 bg-white/5 rounded-xl hover:bg-[#007f94] transition-colors"
                            >
                                <Facebook size={20} />
                            </motion.a>
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-8">{uiData.contacts}</h4>
                        <div className="space-y-6">
                            <motion.div whileHover={{ x: 5 }} className="flex gap-4 cursor-default">
                                <span className="text-slate-300">
                                    <HighlightedText text={address} />
                                </span>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="flex gap-4 cursor-default">
                                <Phone size={20} className="text-[#007f94] shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-slate-300 font-semibold">{phone}</span>
                                    {data?.phone2 && <span className="text-slate-300 font-semibold mt-1">{data.phone2}</span>}
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="flex gap-4 cursor-default">
                                <Mail size={20} className="text-[#007f94] shrink-0" />
                                <span className="text-slate-300">info@reactive.kz</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest">© 2026 Reactive Clinic Almaty • License #L123456789</p>
                    <div className="flex gap-10 text-xs font-semibold text-slate-600 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">{uiData.agreement}</a>
                        <a href="#" className="hover:text-white transition-colors">{uiData.privacy}</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
