# Word Up

Türkçe konuşanlar için İngilizce kelime öğrenme uygulaması. React + Vite + Tailwind CSS ile geliştirilmiş, Android APK ve PWA olarak çalışır.

---

## Özellikler

- **Açılış animasyonu** — Aa ikonu merkezden dashboard'a kayarak yerleşir
- **Flashcard** — kelimeyi gör, öğrendim / henüz değil ile işaretle
- **Türkçe okunuş** — her kelime için fonetik rehber (meat → /mit/)
- **Çoktan Seçmeli Test** — 8 seçenekli quiz, yanlışta ipucu gösterimi
- **Eşleştirme Oyunu** — İngilizce–Türkçe kart eşleştirme
- **Konu akışı** — flashcard → test → eşleştirme, hepsi doğruysa ilerleme kaydedilir
- **İki seviyeli ilerleme** — quiz tamamlama (seviye 1) + eşleştirme tamamlama (seviye 2, tam öğrenildi)
- **Seri sistemi** — günlük çalışma serisi takibi ve kutlama animasyonu
- **Puan sistemi** — öğrenilen kelime başına 10 puan
- **Konu sayfalama** — konular 7'li sayfalar halinde, kaydırma ile geçiş
- **Sayaç seçici** — quiz ve eşleştirmede soru/çift sayısı + süre seçimi
- **İlerlemeyi sıfırla** — dashboard'dan tek tıkla sıfırlama
- **Sesli okuma** — kelime ve örnek cümle dinleme
- **PWA** — offline çalışır, cihaza kurulabilir
- **Tam mobil uyum** — safe area, touch-action, zoom engeli, tüm ekran boyutları

---

## Kelime Havuzu

Toplam **2565 kelime**, A1'den B2'ye sıralanmış.

| Grup | Konu Sayısı | Kelime Sayısı |
|------|-------------|---------------|
| Temel Konular (A1–B2) | 88 | 1765 |
| İş & Kariyer Dünyası (A1–B2) | 20 | 400 |
| Modern Yaşam (A1–B2) | 20 | 400 |
| **Toplam** | **128** | **2565** |

Her kelime: `id · topic · en · tr · type · exampleEn · exampleTr` alanlarına sahip.

---

## Konular

### Temel Konular (22 konu × 4 seviye)

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

### İş & Kariyer Dünyası (5 konu × 4 seviye)

| # | Konu | Simge |
|---|------|-------|
| 23 | İş ve Kariyer | 💼 |
| 24 | Finans ve Ekonomi | 📈 |
| 25 | Hukuk ve Yargı | ⚖️ |
| 26 | Pazarlama ve Reklam | 📣 |
| 27 | İnsan Kaynakları | 🤝 |

### Modern Yaşam (5 konu × 4 seviye)

| # | Konu | Simge |
|---|------|-------|
| 28 | Medya ve Habercilik | 📰 |
| 29 | Çevre ve Sürdürülebilirlik | ♻️ |
| 30 | Yemek Kültürü ve Mutfak Sanatı | 👨‍🍳 |
| 31 | Seyahat ve Turizm | ✈️ |
| 32 | Hobiler ve Boş Zaman | 🎮 |

---

## Proje Yapısı

```
src/
├── data/
│   ├── words.json          # Tüm kelimeler (2565 giriş)
│   ├── topics.js           # Konu metadata (ikon, renk)
│   ├── wordEmoji.js        # Kelime → emoji eşleştirmesi
│   ├── wordIcon.js         # Kelime → Lucide ikon eşleştirmesi
│   └── wordPhonetic.js     # Kelime → Türkçe okunuş (meat → mit)
├── pages/
│   ├── Dashboard.jsx       # Giriş ekranı, ilerleme özeti
│   ├── TopicsPage.jsx      # Konu listesi (A1→B2 sıralı, sayfalama)
│   ├── LearnPage.jsx       # Flashcard ekranı
│   ├── QuizPage.jsx        # Çoktan seçmeli test
│   └── MatchPage.jsx       # Eşleştirme oyunu
├── hooks/
│   ├── useProgress.js      # İki seviyeli ilerleme takibi (localStorage)
│   ├── useStreak.js        # Günlük seri takibi
│   └── useSpeech.js        # TTS (Web + Capacitor)
├── components/
│   └── StreakCelebration.jsx  # Seri kutlama animasyonu
```

---

## Geliştirme

```bash
npm install
npm run dev      # localhost:5173
npm run build    # dist/ klasörüne üret
```

---

## Sürüm Geçmişi

| Sürüm | Değişiklikler |
|-------|---------------|
| v2.0.1 | Tam mobil uyum (safe area, touch-action, zoom engeli), arayüz düzeni iyileştirmeleri |
| v2.0.0 | İki seviyeli ilerleme sistemi, konu akışı (flashcard→quiz→eşleştirme), seri sistemi, puan sistemi, sayaç seçici, ilerleme sıfırlama, konu sayfalama |
| v1.3.0 | Word Up yeniden adlandırma, A1→B2 konu sıralaması, konu bitişi eşleştirme butonu, Aa Android ikonu |
| v1.2.0 | Modern Yaşam grubu, Türkçe okunuş, emoji tam kapsamı, sayfa hafızası |
| v1.0.0 | İlk sürüm: 22 konu, 445 A1 kelime, flashcard, quiz, eşleştirme, koyu tema |
