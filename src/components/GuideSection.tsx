"use client";

import { useState } from "react";

export default function GuideSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="rehber" className="py-12 sm:py-16">
            <div className="glass stroke-effect rounded-3xl p-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    Bilgilendirme Rehberi
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Stand Çadırı & Gazebo Çardak Nedir?
                </h2>

                <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
                    <p>Açık alan organizasyonlarında profesyonel alan oluşturmak için tercih edilen stand çadırı sistemleri; fuar, lansman, festival, seçim çalışmaları ve kurumsal tanıtımlar için güçlü bir çözümdür.</p>
                    <p>Stand çadırı modelleri; markalı etkinlik alanı oluşturmak, tanıtım yapmak ve açık alanda düzenli bir yapı sağlamak amacıyla kullanılır.</p>
                    <p>Doğru model seçimi; dayanıklılık, ölçü, kumaş kalitesi ve kurulum mekanizmasına göre yapılmalıdır.</p>
                    {!isOpen && (
                        <p>Bu rehberde stand çadırı ve gazebo çardak sistemlerini teknik ve kullanım açısından detaylı olarak inceleyebilirsiniz...</p>
                    )}
                </div>

                {isOpen && (
                    <div className="mt-6 space-y-8 text-white/70 leading-relaxed animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="divider"></div>

                        <div>
                            <h3 className="text-lg font-extrabold text-gold-light">En Sık Kullanım Alanları</h3>
                            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                                {[
                                    "Fuar ve tanıtım organizasyonları",
                                    "Kurumsal lansmanlar",
                                    "Belediyelerin açık hava etkinlikleri",
                                    "Spor turnuvaları",
                                    "Festival ve konser alanları",
                                    "Açık hava düğün ve davet organizasyonları",
                                    "Seçim çalışmaları ve saha tanıtımları"
                                ].map((item, i) => (
                                    <li key={i} className="glass rounded-2xl px-4 py-3">{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-extrabold text-gold-light">Stand Çadırının Temel Avantajları</h3>
                            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-white/70">
                                <li className="glass rounded-2xl px-4 py-3">Modüler ve taşınabilir yapı</li>
                                <li className="glass rounded-2xl px-4 py-3">Hava koşullarına dayanıklı kumaş</li>
                                <li className="glass rounded-2xl px-4 py-3">UV koruma özelliği</li>
                                <li className="glass rounded-2xl px-4 py-3">Kurumsal baskı imkânı</li>
                            </ul>
                        </div>
                    </div>
                )}

                <div className="mt-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center px-5 py-3 rounded-2xl glass stroke-effect text-sm font-semibold text-white/85 hover:text-white transition"
                    >
                        {isOpen ? "Daha Az Göster" : "Devamını Oku"}
                    </button>
                </div>
            </div>
        </section>
    );
}
