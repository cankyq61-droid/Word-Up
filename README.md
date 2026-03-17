# 🇬🇧 English Learning App

Türkçe konuşanlar için İngilizce kelime öğrenme uygulaması. React + Vite + Tailwind CSS ile geliştirilmiş, PWA olarak çalışır.

---

## Özellikler

- **Flashcard** — kelimeyi gör, öğrendim / henüz değil ile işaretle
- **Çoktan Seçmeli Test** — 8 seçenekli quiz, yanlışta ipucu gösterimi
- **Eşleştirme Oyunu** — İngilizce–Türkçe kart eşleştirme
- **İlerleme takibi** — localStorage tabanlı, konu bazında yüzde gösterimi
- **Sesli okuma** — Web Speech API ile kelime ve örnek cümle dinleme
- **PWA** — offline çalışır, cihaza kurulabilir

---

## Kelime Havuzu

Toplam **1765 kelime**, her biri benzersiz İngilizce girdi ile.

| Seviye | Konu Sayısı | Kelime Sayısı |
|--------|-------------|---------------|
| A1     | 22          | 445           |
| A2     | 22          | 440           |
| B1     | 22          | 440           |
| B2     | 22          | 440           |
| **Toplam** | **88** | **1765**    |

Her kelime: `id · topic · en · tr · type · exampleEn · exampleTr` alanlarına sahip.

---

## Mevcut Konular (22 Ana Konu × 4 Seviye)

| # | Konu | Simge |
|---|------|-------|
| 1 | Selamlaşma ve Tanışma | 👋 |
| 2 | Sayılar | 🔢 |
| 3 | Renkler | 🎨 |
| 4 | Aile | 👨‍👩‍👧‍👦 |
| 5 | Vücut | 🧍 |
| 6 | Yiyecekler | 🍎 |
| 7 | Giyim | 👕 |
| 8 | Ev ve Mobilya | 🏠 |
| 9 | Hayvanlar | 🐾 |
| 10 | Günlük Fiiller | ⚡ |
| 11 | Doğa ve Hava | 🌿 |
| 12 | Günler, Aylar, Mevsimler | 📅 |
| 13 | Zaman | ⏰ |
| 14 | Ulaşım | 🚗 |
| 15 | Şehir ve Mekanlar | 🏙️ |
| 16 | Alışveriş | 🛍️ |
| 17 | Meslekler | 💼 |
| 18 | Okul ve Eğitim | 🎓 |
| 19 | Sağlık | 🏥 |
| 20 | Spor | ⚽ |
| 21 | Duygular | 😊 |
| 22 | Teknoloji | 💻 |

Her konu A1, A2, B1, B2 seviyelerinde ayrı sayfa olarak yer alır (örn. "Renkler", "Renkler (A2)", "Renkler (B1)", "Renkler (B2)").

---

## Yapılacaklar — Yeni Konu Grupları

Aşağıdaki yeni konular planlanmaktadır. Her konu A1–B2 olmak üzere 4 seviyede eklenecek.

### İş & Kariyer Dünyası
- [ ] **İş ve Kariyer** 💼 — iş görüşmesi, maaş, terfi, şirket yapısı, toplantı
- [ ] **Finans ve Ekonomi** 📈 — borsa, yatırım, bütçe, enflasyon, vergi
- [ ] **Hukuk ve Yargı** ⚖️ — sözleşme, dava, suç, mahkeme, avukat
- [ ] **Pazarlama ve Reklam** 📣 — marka, kampanya, hedef kitle, dijital pazarlama
- [ ] **İnsan Kaynakları** 🤝 — işe alım, performans, motivasyon, ekip yönetimi

### Kültür & Sanat
- [ ] **Sanat ve Müzik** 🎵 — resim, heykel, beste, enstrüman, stil
- [ ] **Edebiyat ve Yazarlık** 📖 — roman, şiir, eleştiri, yayıncılık, tür
- [ ] **Sinema ve Tiyatro** 🎬 — film türleri, oyunculuk, senaryo, prodüksiyon
- [ ] **Tarih ve Medeniyetler** 🏛️ — imparatorluk, savaş, arkeoloji, antik dönem

### Bilim & Akademi
- [ ] **Bilim ve Araştırma** 🔬 — deney, hipotez, laboratuvar, yayın, bulgu
- [ ] **Felsefe ve Mantık** 🧠 — etik, argüman, ideoloji, kavram, eleştirel düşünce
- [ ] **Psikoloji** 🧩 — davranış, bilinçaltı, terapi, bozukluk, motivasyon
- [ ] **Uzay ve Astronomi** 🚀 — gezegen, yıldız, galaksi, keşif, teleskop

### Modern Yaşam
- [ ] **Medya ve Habercilik** 📰 — sosyal medya, gazetecilik, yayın, içerik, algoritma
- [ ] **Çevre ve Sürdürülebilirlik** ♻️ — karbon ayakizi, geri dönüşüm, iklim politikası
- [ ] **Yemek Kültürü ve Mutfak Sanatı** 👨‍🍳 — tarif teknikleri, dünya mutfakları, restoranlar
- [ ] **Seyahat ve Turizm** ✈️ — otel, rehber, vize, kültürel deneyim, rezervasyon
- [ ] **Hobiler ve Boş Zaman** 🎮 — koleksiyon, el işi, bahçecilik, oyun, yaratıcılık

### Uzmanlık Alanları
- [ ] **Mimarlık ve Tasarım** 🏗️ — yapı, estetik, şehir planlama, iç mekan, stil
- [ ] **Tarım ve Gıda Üretimi** 🌾 — hasat, sulama, organik tarım, çiftlik, ekoloji
- [ ] **Denizcilik ve Okyanus** ⚓ — tekne, liman, deniz hukuku, okyanus araştırması
- [ ] **Din ve Kültür** 🕌 — inanç, ritüel, çeşitlilik, kültürel miras, gelenek

---

## Proje Yapısı

```
src/
├── data/
│   ├── words.json          # Tüm kelimeler (1765 giriş)
│   └── topics.js           # Konu metadata (ikon, renk)
├── pages/
│   ├── TopicsPage.jsx      # Ana sayfa, konu listesi (7'li sayfalama)
│   ├── LearnPage.jsx       # Flashcard ekranı
│   ├── QuizPage.jsx        # Çoktan seçmeli test
│   └── MatchPage.jsx       # Eşleştirme oyunu
├── hooks/
│   ├── useProgress.js      # localStorage ilerleme takibi
│   └── useSpeech.js        # Web Speech API
scripts/
├── generate_a2.cjs         # A2 kelime oluşturucu (tekrar kontrolü dahil)
├── generate_b1.cjs         # B1 kelime oluşturucu
└── generate_b2.cjs         # B2 kelime oluşturucu
```

---

## Geliştirme

```bash
npm install
npm run dev      # localhost:5173
npm run build    # dist/ klasörüne üret
```

---

## Teknik Notlar

- Tüm İngilizce kelimeler proje genelinde **benzersizdir** — aynı kelime farklı seviye/konularda tekrarlanmaz
- Her yeni seviye eklenirken `scripts/generate_*.cjs` çalıştırılır; çakışma durumunda script hata verip durur
- Konu sayfaları `TopicsPage.jsx` içinde `TOPICS_PER_PAGE = 7` ile otomatik sayfalanır
- Yeni konu ekleme adımları: `words.json` → `topics.js` → build → deploy
