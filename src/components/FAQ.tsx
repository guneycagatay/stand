"use client";

import { useState } from "react";

export default function FAQ() {
    const faqs = [
        { q: "Hangi boyutlarda stand çadırı seçenekleri vardır?", a: "2x2, 3x3, 3x4,5, 3x6 ve 4x4 ölçülerinde stand çadırı seçenekleri bulunmaktadır." },
        { q: "Teklif için hangi bilgiler gereklidir?", a: "Ölçü, şehir ve tarih bilgisi iletilmesi yeterlidir. Varsa baskı/yan kapama talepleri eklenebilir." },
        { q: "Hızlı tedarik mümkün mü?", a: "Depo stok durumuna bağlı olarak hızlı tedarik sağlanabilmektedir." },
        { q: "E-posta ile iletişim sağlayabilir miyim?", a: "Evet. İletişim bölümünde şube e-posta adresleri bulunmaktadır." },
    ];

    return (
        <section id="sss" className="py-12 sm:py-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Sık Sorulan Sorular</h2>

            <div className="mt-8 grid lg:grid-cols-2 gap-5">
                {faqs.map((faq, i) => (
                    <details key={i} className="glass stroke-effect rounded-3xl p-6 group">
                        <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                            {faq.q}
                            <span className="transition-transform group-open:rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6" /></svg>
                            </span>
                        </summary>
                        <p className="mt-3 text-sm text-white/65 border-t border-white/10 pt-3">{faq.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
