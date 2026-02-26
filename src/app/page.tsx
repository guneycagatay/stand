"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SizeGrid from "@/components/SizeGrid";
import AboutSection from "@/components/AboutSection";
import GuideSection from "@/components/GuideSection";
import PriceCalculator from "@/components/PriceCalculator";
import FAQ from "@/components/FAQ";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=905315969274&text=Merhaba, stand çadırı için teklif talep etmek istiyorum. standcadiri.com aracılığıyla iletişime geçtim.&type=phone_number&app_absent=0";

export default function Home() {
    return (
        <>
            <Navbar />
            <main id="top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Hero />
                <SizeGrid />
                <PriceCalculator />
                <AboutSection />
                <GuideSection />
                <FAQ />

                {/* Contact Section */}
                <section id="iletisim" className="py-12 sm:py-16">
                    <div className="grid lg:grid-cols-2 gap-6 items-start">
                        <div className="glass stroke-effect rounded-3xl p-7">
                            <h2 className="text-2xl font-extrabold tracking-tight">İletişim</h2>
                            <p className="mt-2 text-white/65">Teklif talebi ve bilgi için WhatsApp, telefon veya e-posta kanallarını kullanabilirsiniz.</p>
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center px-5 py-3 rounded-2xl grad-btn font-semibold shadow-lg shadow-black/40 hover:opacity-95 transition">
                                WhatsApp ile Teklif Talep Et
                            </a>
                            <p className="mt-3 text-xs text-white/50 leading-relaxed">
                                Örnek mesaj: “Merhaba, 3x3 stand çadırı için İstanbul / (tarih) teklif talep ediyorum.”
                            </p>
                        </div>

                        <div className="grid gap-5">
                            <div className="glass stroke-effect rounded-3xl p-7">
                                <h3 className="text-lg font-extrabold text-gold-light">İSTANBUL UNKAPANI</h3>
                                <div className="mt-4 grid gap-3 text-sm text-white/75">
                                    <div className="glass rounded-2xl px-4 py-3">
                                        <strong>Adres:</strong> Hacı Kadın, Muhabir Sk. No:4, Fatih/İstanbul
                                    </div>
                                    <div className="glass rounded-2xl px-4 py-3">
                                        <strong>Tel:</strong> 0531 596 92 74
                                    </div>
                                </div>
                            </div>

                            <div className="glass stroke-effect rounded-3xl p-7">
                                <h3 className="text-lg font-extrabold text-gold-light">İSTANBUL ESENYURT</h3>
                                <div className="mt-4 grid gap-3 text-sm text-white/75">
                                    <div className="glass rounded-2xl px-4 py-3">
                                        <strong>Adres:</strong> Yeşilkent, 1909. Sk. No:3, Esenyurt/İstanbul
                                    </div>
                                    <div className="glass rounded-2xl px-4 py-3">
                                        <strong>Tel:</strong> 0532 372 78 60
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="pb-10">
                    <div className="divider my-8"></div>

                    <div className="glass stroke-effect rounded-3xl p-6 sm:p-8">
                        <div className="text-sm font-bold tracking-wider uppercase text-gold-light mb-4">İlgili Ürün Grupları</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {[
                                { name: "Gölgelik File", url: "https://www.ozaribranda.net/golgelik-file-kumaslari/" },
                                { name: "Şeffaf Branda", url: "https://www.ozaribranda.net/seffaf-pvc-mika/" },
                                { name: "Ebatlı Branda", url: "https://www.ozaribranda.net/ebatli-brandalar/" },
                                { name: "Gazebo Çardak", url: "https://www.ozaribranda.net/gazebo-cardak/" },
                                { name: "Su Geçirmez Branda", url: "https://www.ozaribranda.net/su-gecirmez-branda/" }
                            ].map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 rounded-xl glass border-white/5 hover:border-gold/30 hover:bg-gold/5 text-xs sm:text-sm text-white/60 hover:text-gold-light transition-all duration-300 flex items-center justify-center text-center"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium uppercase tracking-widest text-white/30">
                        <div>© {new Date().getFullYear()} Özarı Branda • Tüm hakları saklıdır</div>
                        <div className="flex gap-6">
                            <Link href="#top" className="hover:text-gold transition-colors">YUKARI DÖN</Link>
                        </div>
                    </div>
                </footer>
            </main>

            {/* Floating WhatsApp FAB */}
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-50 glass stroke-effect rounded-full px-5 py-3 text-sm font-semibold text-white/85 hover:text-white transition shadow-2xl"
            >
                WhatsApp • Teklif
            </a>
        </>
    );
}
