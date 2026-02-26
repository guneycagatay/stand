"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="pt-14 sm:pt-20 pb-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        Kaliteli Malzemeler, Zamanında Teslim.
                    </div>

                    <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
                        Açık alanlar için{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-dark via-gold-light to-gold">
                            premium stand çadırı çözümleri
                        </span>
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
                        1985’ten bu yana farklı ölçü ve ihtiyaçlara uygun stand çadırı seçenekleri sunuyoruz.
                        İstanbul <strong className="text-white/85">Unkapanı</strong> ve <strong className="text-white/85">Esenyurt</strong> depolarımızdan
                        stok durumuna bağlı olarak hızlı tedarik sağlanabilmektedir.
                    </p>

                    <div className="mt-7">
                        <Link href="#iletisim" className="inline-flex items-center justify-center px-5 py-3 rounded-2xl grad-btn font-semibold shadow-lg shadow-black/40 hover:opacity-95 transition">
                            Teklif Talep Et
                        </Link>
                    </div>

                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                            { label: "1985", sub: "Köklü tecrübe" },
                            { label: "Hızlı", sub: "Tedarik imkânı" },
                            { label: "Ölçü", sub: "Standart seçenekler" },
                            { label: "Stoktan", sub: "Teslim imkanı." },
                        ].map((item, i) => (
                            <div key={i} className="glass stroke-effect rounded-2xl p-4">
                                <div className="text-2xl font-extrabold text-gold-light">{item.label}</div>
                                <div className="text-xs text-white/60 mt-1">{item.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-2 blur-2xl opacity-50 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(198,161,91,.22),transparent_60%),radial-gradient(600px_300px_at_80%_30%,rgba(226,194,122,.16),transparent_60%)]">
                    </div>

                    <div className="relative glass stroke-effect rounded-3xl overflow-hidden aspect-square">
                        <img
                            src="/img/hero-tent.png"
                            alt="Özarı Branda Stand Çadırı"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
