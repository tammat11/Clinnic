import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Phone, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';

const AdminLogin = () => {
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const ALLOWED_PHONES = [
        '+7 707 677 8679', // Added by request
        '+7 701 111 22 33', // Placeholder
        '+7 777 777 77 77', // Placeholder
    ];

    const formatPhone = (value: string) => {
        // Remove all non-digits
        let digits = value.replace(/\D/g, '');

        // Handle backspace/empty
        if (digits.length === 0) return '';

        // Ensure starting with 7
        if (digits[0] === '8') digits = '7' + digits.substring(1);
        if (digits[0] !== '7') digits = '7' + digits;

        // Limit length
        digits = digits.substring(0, 11);

        // Format
        let formatted = '+7';
        if (digits.length > 1) formatted += ' ' + digits.substring(1, 4);
        if (digits.length > 4) formatted += ' ' + digits.substring(4, 7);
        if (digits.length > 7) formatted += ' ' + digits.substring(7, 9);
        if (digits.length > 9) formatted += ' ' + digits.substring(9, 11);

        return formatted;
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        // If deleting, allow rough handling, otherwise format
        if (val.length < phone.length) {
            setPhone(val);
            return;
        }
        setPhone(formatPhone(val));
        setError('');
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Normalize for check: remove spaces, ensure +7
        const cleanInput = phone.replace(/\s+/g, '');
        const cleanAllowed = ALLOWED_PHONES.map(p => p.replace(/\s+/g, ''));

        // Simulate API check
        setTimeout(() => {
            if (cleanAllowed.includes(cleanInput)) {
                localStorage.setItem('admin_session', 'true');
                // Force reload/redirect to remove /admin-login from url if that's how we got here
                window.location.href = '/';
            } else {
                setError('Доступ запрещен. Номер не найден в списке администраторов.');
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-[#0a1e2b] skew-y-6 origin-top-left -translate-y-20 z-0" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#007f94]/10 rounded-full blur-3xl z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-md relative z-10 border border-slate-100"
            >
                <div className="mb-10 text-center">
                    <div className="w-16 h-16 bg-[#007f94]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#007f94]">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 mb-2">Вход в систему</h1>
                    <p className="text-slate-500 text-sm">Панель управления клиники</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block pl-1">
                            Номер телефона
                        </label>
                        <div className="relative group">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#007f94] transition-colors" size={18} />
                            <input
                                type="tel"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="+7 777 000 00 00"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 font-bold text-slate-900 outline-none focus:border-[#007f94] focus:ring-4 focus:ring-[#007f94]/10 transition-all placeholder:text-slate-300"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-xl border border-red-100 flex items-center gap-3"
                        >
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                            {error}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        // Disable if phone isn't roughly correct length (e.g. +7 7xx xxx xx xx is 16 chars)
                        disabled={isLoading || phone.length < 16}
                        className="w-full bg-[#0a1e2b] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#007f94] transition-all shadow-xl shadow-[#0a1e2b]/10 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 group"
                    >
                        {isLoading ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <>
                                Войти <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-50 text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        Secure Admin Access • v2.0
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
