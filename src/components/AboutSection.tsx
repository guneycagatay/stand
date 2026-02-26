"use client";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=905315969274&text=Merhaba, stand çadırı için teklif talep etmek istiyorum.&type=phone_number&app_absent=0";

export default function AboutSection() {
    return (
        <section id="hakkimizda" className="py-12 sm:py-16">
            <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="glass stroke-effect rounded-3xl p-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        Kurumsal Yaklaşım
                    </div>

                    <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">1985’ten Günümüze</h2>

                    <p className="mt-4 text-white/70 leading-relaxed">
                        Farklı ölçülere ve değişken hava koşullarına uygun ürün seçenekleri ile
                        kalite standartlarını esas alan bir hizmet anlayışı sunmaktayız.
                        1985 yılında başlayan faaliyetlerimizde müşteri memnuniyeti ve ihtiyaca uygun çözüm üretme odağını
                        sürdürülebilir bir yaklaşım olarak benimsedik.
                    </p>

                    <div className="divider my-6"></div>

                    <p className="text-white/70 leading-relaxed">
                        İstanbul <strong className="text-white/85">Unkapanı</strong> ve <strong className="text-white/85">Esenyurt</strong> depolarımızdan
                        ihtiyaç halinde stok durumuna bağlı olarak hızlı tedarik sağlanabilmektedir.
                    </p>
                </div>

                <div className="grid gap-5">
                    <div className="glass stroke-effect rounded-3xl p-7">
                        <h3 className="text-lg font-extrabold text-gold-light">Temel İlkeler</h3>
                        <ul className="mt-4 text-sm text-white/70 space-y-2">
                            <li>• Müşteri memnuniyeti odaklı yaklaşım</li>
                            <li>• İhtiyaca uygun ölçü ve ürün yönlendirmesi</li>
                            <li>• Hızlı tedarik ve planlama</li>
                            <li>• Yurt içi ve yurt dışı tecrübe</li>
                        </ul>
                    </div>

                    <div className="glass stroke-effect rounded-3xl p-7">
                        <h3 className="text-lg font-extrabold text-gold-light">Teklif Talebi</h3>
                        <p className="mt-2 text-sm text-white/65">Tek bir mesaj ile teklif talep edebilirsiniz.</p>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-2xl grad-btn font-semibold shadow-lg shadow-black/40 hover:opacity-95 transition">
                            WhatsApp ile İletişime Geç
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
