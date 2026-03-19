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

Toplam **2565 kelime**, her biri benzersiz İngilizce girdi ile.

| Grup | Konu Sayısı | Kelime Sayısı |
|------|-------------|---------------|
| Temel Konular (A1–B2) | 88 | 1765 |
| İş & Kariyer Dünyası (A1–B2) | 20 | 400 |
| Modern Yaşam (A1–B2) | 20 | 400 |
| **Toplam** | **128** | **2565** |

Her kelime: `id · topic · en · tr · type · exampleEn · exampleTr` alanlarına sahip.

---

## Mevcut Konular

### Temel Konular (22 konu × 4 seviye = 88 sayfa)

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

### İş & Kariyer Dünyası (5 konu × 4 seviye = 20 sayfa)

| # | Konu | Simge |
|---|------|-------|
| 23 | İş ve Kariyer | 💼 |
| 24 | Finans ve Ekonomi | 📈 |
| 25 | Hukuk ve Yargı | ⚖️ |
| 26 | Pazarlama ve Reklam | 📣 |
| 27 | İnsan Kaynakları | 🤝 |

### Modern Yaşam (5 konu × 4 seviye = 20 sayfa)

| # | Konu | Simge |
|---|------|-------|
| 28 | Medya ve Habercilik | 📰 |
| 29 | Çevre ve Sürdürülebilirlik | ♻️ |
| 30 | Yemek Kültürü ve Mutfak Sanatı | 👨‍🍳 |
| 31 | Seyahat ve Turizm | ✈️ |
| 32 | Hobiler ve Boş Zaman | 🎮 |

---

## Yapılacaklar — Planlanan Konu Grupları

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
│   ├── words.json          # Tüm kelimeler (2565 giriş)
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
├── generate_a2.cjs              # A2 kelime oluşturucu
├── generate_b1.cjs              # B1 kelime oluşturucu
├── generate_b2.cjs              # B2 kelime oluşturucu
├── generate_is_kariyer_*.cjs    # İş & Kariyer kelime oluşturucuları
├── generate_modern_yasam_1.cjs  # Modern Yaşam part 1 (Medya, Çevre, Yemek A1+A2)
└── generate_modern_yasam_2.cjs  # Modern Yaşam part 2 (Yemek B1+B2, Seyahat, Hobiler)
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
