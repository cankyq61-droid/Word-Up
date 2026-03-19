'use strict';
const fs   = require('fs');
const path = require('path');

const WORDS_PATH = path.join(__dirname, '..', 'src', 'data', 'words.json');
const OUT_PATH   = path.join(__dirname, 'modern_yasam_part1.json');

const existing   = JSON.parse(fs.readFileSync(WORDS_PATH, 'utf8'));
const existingEN = new Set(existing.map(w => w.en.toLowerCase()));

// ─── 200 kelime, ID 2166-2365 ──────────────────────────────────────────────
const newWords = [

  // ══════════════════════════════════════════════════════════════════════════
  // Medya ve Habercilik — A1 (2166-2185)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2166, topic: 'Medya ve Habercilik',            en: 'headline',       tr: 'manşet',                    type: 'isim', exampleEn: 'The headline shocked everyone this morning.',          exampleTr: 'Manşet bu sabah herkesi şoke etti.' },
  { id: 2167, topic: 'Medya ve Habercilik',            en: 'broadcast',      tr: 'yayın',                     type: 'isim', exampleEn: 'The broadcast reached millions of viewers.',            exampleTr: 'Yayın milyonlarca izleyiciye ulaştı.' },
  { id: 2168, topic: 'Medya ve Habercilik',            en: 'viewer',         tr: 'izleyici',                  type: 'isim', exampleEn: 'The show has five million viewers every week.',         exampleTr: 'Program her hafta beş milyon izleyiciye sahip.' },
  { id: 2169, topic: 'Medya ve Habercilik',            en: 'podcast',        tr: 'podcast',                   type: 'isim', exampleEn: 'She listens to a news podcast every morning.',          exampleTr: 'Her sabah bir haber podcast\'i dinliyor.' },
  { id: 2170, topic: 'Medya ve Habercilik',            en: 'editor',         tr: 'editör',                    type: 'isim', exampleEn: 'The editor approved the article before publishing.',    exampleTr: 'Editör makaleyi yayımlamadan önce onayladı.' },
  { id: 2171, topic: 'Medya ve Habercilik',            en: 'anchor',         tr: 'haber sunucusu',            type: 'isim', exampleEn: 'The anchor delivered the evening news calmly.',        exampleTr: 'Haber sunucusu akşam haberlerini sakin bir şekilde sundu.' },
  { id: 2172, topic: 'Medya ve Habercilik',            en: 'newsroom',       tr: 'haber merkezi',             type: 'isim', exampleEn: 'The newsroom was busy with breaking news.',             exampleTr: 'Haber merkezi son dakika haberleriyle yoğundu.' },
  { id: 2173, topic: 'Medya ve Habercilik',            en: 'reporter',       tr: 'muhabir',                   type: 'isim', exampleEn: 'The reporter went to the scene of the accident.',       exampleTr: 'Muhabir kaza yerine gitti.' },
  { id: 2174, topic: 'Medya ve Habercilik',            en: 'press',          tr: 'basın',                     type: 'isim', exampleEn: 'The press was not allowed inside the building.',        exampleTr: 'Basının binaya girmesine izin verilmedi.' },
  { id: 2175, topic: 'Medya ve Habercilik',            en: 'channel',        tr: 'kanal',                     type: 'isim', exampleEn: 'Which channel shows the football match tonight?',       exampleTr: 'Bu gece futbol maçını hangi kanal yayınlıyor?' },
  { id: 2176, topic: 'Medya ve Habercilik',            en: 'censor',         tr: 'sansürlemek',               type: 'fiil', exampleEn: 'The government tried to censor the report.',           exampleTr: 'Hükümet haberi sansürlemeye çalıştı.' },
  { id: 2177, topic: 'Medya ve Habercilik',            en: 'propaganda',     tr: 'propaganda',                type: 'isim', exampleEn: 'The poster was used as political propaganda.',          exampleTr: 'Afiş siyasi propaganda amacıyla kullanıldı.' },
  { id: 2178, topic: 'Medya ve Habercilik',            en: 'correspondent',  tr: 'özel muhabir',              type: 'isim', exampleEn: 'Our correspondent in Paris sent this report.',          exampleTr: 'Paris\'teki özel muhabirimiz bu haberi gönderdi.' },
  { id: 2179, topic: 'Medya ve Habercilik',            en: 'cameraman',      tr: 'kameraman',                 type: 'isim', exampleEn: 'The cameraman filmed the protest from the rooftop.',   exampleTr: 'Kameraman protestoyu çatıdan görüntüledi.' },
  { id: 2180, topic: 'Medya ve Habercilik',            en: 'subtitle',       tr: 'altyazı',                   type: 'isim', exampleEn: 'I always watch foreign films with subtitles.',          exampleTr: 'Yabancı filmleri her zaman altyazıyla izlerim.' },
  { id: 2181, topic: 'Medya ve Habercilik',            en: 'caption',        tr: 'açıklama yazısı',           type: 'isim', exampleEn: 'She wrote a funny caption for the photo.',             exampleTr: 'Fotoğraf için komik bir açıklama yazısı yazdı.' },
  { id: 2182, topic: 'Medya ve Habercilik',            en: 'coverage',       tr: 'haber kapsamı',             type: 'isim', exampleEn: 'The election received wide media coverage.',            exampleTr: 'Seçim geniş medya kapsamı gördü.' },
  { id: 2183, topic: 'Medya ve Habercilik',            en: 'exclusive',      tr: 'özel haber',                type: 'isim', exampleEn: 'The newspaper published an exclusive about the mayor.', exampleTr: 'Gazete belediye başkanı hakkında özel haber yayımladı.' },
  { id: 2184, topic: 'Medya ve Habercilik',            en: 'gazette',        tr: 'gazete',                    type: 'isim', exampleEn: 'The local gazette reported on the new park.',          exampleTr: 'Yerel gazete yeni park hakkında haber yaptı.' },
  { id: 2185, topic: 'Medya ve Habercilik',            en: 'tabloid',        tr: 'tabloid gazete',            type: 'isim', exampleEn: 'The tabloid published celebrity gossip daily.',         exampleTr: 'Tabloid gazete her gün ünlü dedikodularını yayımladı.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Medya ve Habercilik — A2 (2186-2205)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2186, topic: 'Medya ve Habercilik (A2)',       en: 'editorial',      tr: 'başyazı',                   type: 'isim', exampleEn: 'The editorial criticised the new law.',                exampleTr: 'Başyazı yeni yasayı eleştirdi.' },
  { id: 2187, topic: 'Medya ve Habercilik (A2)',       en: 'infographic',    tr: 'bilgi grafiği',             type: 'isim', exampleEn: 'The infographic showed climate data clearly.',          exampleTr: 'Bilgi grafiği iklim verilerini açıkça gösterdi.' },
  { id: 2188, topic: 'Medya ve Habercilik (A2)',       en: 'trending',       tr: 'gündemde olan',             type: 'sıfat',exampleEn: 'The topic is trending on social media today.',         exampleTr: 'Konu bugün sosyal medyada gündemde.' },
  { id: 2189, topic: 'Medya ve Habercilik (A2)',       en: 'hashtag',        tr: 'hashtag',                   type: 'isim', exampleEn: 'Use the hashtag to join the online discussion.',       exampleTr: 'Çevrimiçi tartışmaya katılmak için hashtag kullanın.' },
  { id: 2190, topic: 'Medya ve Habercilik (A2)',       en: 'paparazzi',      tr: 'paparazzi',                 type: 'isim', exampleEn: 'The paparazzi followed the actress everywhere.',       exampleTr: 'Paparazzi aktrisin her yerine gitti.' },
  { id: 2191, topic: 'Medya ve Habercilik (A2)',       en: 'byline',         tr: 'yazar imzası',              type: 'isim', exampleEn: 'The byline showed her name as the author.',            exampleTr: 'Yazar imzası onun adını yazar olarak gösterdi.' },
  { id: 2192, topic: 'Medya ve Habercilik (A2)',       en: 'columnist',      tr: 'köşe yazarı',               type: 'isim', exampleEn: 'The columnist writes about politics every Sunday.',    exampleTr: 'Köşe yazarı her Pazar siyaset üzerine yazıyor.' },
  { id: 2193, topic: 'Medya ve Habercilik (A2)',       en: 'pundit',         tr: 'uzman yorumcu',             type: 'isim', exampleEn: 'The pundit analysed the election results on TV.',      exampleTr: 'Uzman yorumcu seçim sonuçlarını televizyonda analiz etti.' },
  { id: 2194, topic: 'Medya ve Habercilik (A2)',       en: 'soundbite',      tr: 'kısa ses alıntısı',         type: 'isim', exampleEn: 'The politician\'s soundbite went viral online.',        exampleTr: 'Politikacının kısa ses alıntısı internette yayıldı.' },
  { id: 2195, topic: 'Medya ve Habercilik (A2)',       en: 'sensational',    tr: 'sansasyonel',               type: 'sıfat',exampleEn: 'The sensational headline attracted many readers.',     exampleTr: 'Sansasyonel manşet pek çok okuyucu çekti.' },
  { id: 2196, topic: 'Medya ve Habercilik (A2)',       en: 'readership',     tr: 'okuyucu kitlesi',           type: 'isim', exampleEn: 'The magazine has a large international readership.',   exampleTr: 'Derginin geniş uluslararası okuyucu kitlesi var.' },
  { id: 2197, topic: 'Medya ve Habercilik (A2)',       en: 'scoop',          tr: 'özel haber kapmak',         type: 'isim', exampleEn: 'Getting the scoop first made the reporter famous.',    exampleTr: 'Özel haberi ilk kapmak muhabiri ünlü yaptı.' },
  { id: 2198, topic: 'Medya ve Habercilik (A2)',       en: 'spin',           tr: 'çarpıtma',                  type: 'isim', exampleEn: 'The politician\'s team put a positive spin on the news.', exampleTr: 'Politikacının ekibi habere olumlu bir çarpıtma yaptı.' },
  { id: 2199, topic: 'Medya ve Habercilik (A2)',       en: 'broadsheet',     tr: 'büyük format gazete',       type: 'isim', exampleEn: 'The broadsheet covers serious national issues.',        exampleTr: 'Büyük format gazete ciddi ulusal konuları ele alır.' },
  { id: 2200, topic: 'Medya ve Habercilik (A2)',       en: 'paywall',        tr: 'ücretli içerik engeli',     type: 'isim', exampleEn: 'The article is behind a paywall on that website.',     exampleTr: 'Makale o web sitesinde ücretli içerik engelinin arkasında.' },
  { id: 2201, topic: 'Medya ve Habercilik (A2)',       en: 'satirical',      tr: 'hicivli',                   type: 'sıfat',exampleEn: 'The satirical show made fun of politicians.',          exampleTr: 'Hicivli program politikacılarla dalga geçti.' },
  { id: 2202, topic: 'Medya ve Habercilik (A2)',       en: 'bias',           tr: 'önyargı',                   type: 'isim', exampleEn: 'Readers noticed a clear bias in the reporting.',       exampleTr: 'Okuyucular habercilikte belirgin bir önyargı fark etti.' },
  { id: 2203, topic: 'Medya ve Habercilik (A2)',       en: 'notify',         tr: 'bildirmek',                 type: 'fiil', exampleEn: 'The app will notify you when news breaks.',            exampleTr: 'Uygulama, haber çıktığında sizi bildirecek.' },
  { id: 2204, topic: 'Medya ve Habercilik (A2)',       en: 'leak',           tr: 'sızdırmak',                 type: 'fiil', exampleEn: 'Someone leaked the document to the press.',            exampleTr: 'Biri belgeyi basına sızdırdı.' },
  { id: 2205, topic: 'Medya ve Habercilik (A2)',       en: 'expose',         tr: 'ifşa etmek',                type: 'fiil', exampleEn: 'The journalist exposed the corruption scandal.',        exampleTr: 'Gazeteci yolsuzluk skandalını ifşa etti.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Medya ve Habercilik — B1 (2206-2225)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2206, topic: 'Medya ve Habercilik (B1)',       en: 'objectivity',    tr: 'tarafsızlık',               type: 'isim', exampleEn: 'Objectivity is essential for good journalism.',        exampleTr: 'Tarafsızlık iyi gazetecilik için şarttır.' },
  { id: 2207, topic: 'Medya ve Habercilik (B1)',       en: 'gatekeeping',    tr: 'içerik denetimi',           type: 'isim', exampleEn: 'Gatekeeping decides what news the public sees.',       exampleTr: 'İçerik denetimi halkın hangi haberi gördüğüne karar verir.' },
  { id: 2208, topic: 'Medya ve Habercilik (B1)',       en: 'polarisation',   tr: 'kutuplaşma',                type: 'isim', exampleEn: 'Media polarisation divides public opinion.',           exampleTr: 'Medyadaki kutuplaşma kamuoyunu böler.' },
  { id: 2209, topic: 'Medya ve Habercilik (B1)',       en: 'deepfake',       tr: 'derin sahte video',         type: 'isim', exampleEn: 'The deepfake video was difficult to detect.',          exampleTr: 'Derin sahte videoyu tespit etmek zordu.' },
  { id: 2210, topic: 'Medya ve Habercilik (B1)',       en: 'misinformation', tr: 'yanlış bilgi',              type: 'isim', exampleEn: 'Misinformation spreads quickly on social media.',      exampleTr: 'Yanlış bilgi sosyal medyada hızla yayılır.' },
  { id: 2211, topic: 'Medya ve Habercilik (B1)',       en: 'stereotype',     tr: 'kalıp yargı',               type: 'isim', exampleEn: 'The media often reinforces harmful stereotypes.',      exampleTr: 'Medya çoğunlukla zararlı kalıp yargıları pekiştirir.' },
  { id: 2212, topic: 'Medya ve Habercilik (B1)',       en: 'narrative',      tr: 'anlatı',                    type: 'isim', exampleEn: 'The government controlled the narrative around the crisis.', exampleTr: 'Hükümet kriz etrafındaki anlatıyı kontrol etti.' },
  { id: 2213, topic: 'Medya ve Habercilik (B1)',       en: 'rhetoric',       tr: 'retorik',                   type: 'isim', exampleEn: 'The speech was full of political rhetoric.',            exampleTr: 'Konuşma siyasi retorikle doluydu.' },
  { id: 2214, topic: 'Medya ve Habercilik (B1)',       en: 'censorship',     tr: 'sansür',                    type: 'isim', exampleEn: 'Censorship limits what journalists can report.',       exampleTr: 'Sansür, gazetecilerin neyi haberleştirebileceğini kısıtlar.' },
  { id: 2215, topic: 'Medya ve Habercilik (B1)',       en: 'watchdog',       tr: 'denetim kuruluşu',          type: 'isim', exampleEn: 'The press acts as a watchdog for democracy.',          exampleTr: 'Basın, demokrasi için bir denetim kuruluşu işlevi görür.' },
  { id: 2216, topic: 'Medya ve Habercilik (B1)',       en: 'commentary',     tr: 'yorum',                     type: 'isim', exampleEn: 'His commentary on the match was entertaining.',        exampleTr: 'Maç üzerine yorumu eğlenceliydi.' },
  { id: 2217, topic: 'Medya ve Habercilik (B1)',       en: 'newsworthy',     tr: 'haber değeri taşıyan',      type: 'sıfat',exampleEn: 'Not every event is newsworthy enough to publish.',     exampleTr: 'Her olay yayımlanacak kadar haber değeri taşımaz.' },
  { id: 2218, topic: 'Medya ve Habercilik (B1)',       en: 'rating',         tr: 'izlenme oranı',             type: 'isim', exampleEn: 'High ratings kept the programme on air.',              exampleTr: 'Yüksek izlenme oranı programı yayında tuttu.' },
  { id: 2219, topic: 'Medya ve Habercilik (B1)',       en: 'syndicate',      tr: 'haber ajansı',              type: 'isim', exampleEn: 'The story was sold to a major news syndicate.',        exampleTr: 'Haber büyük bir haber ajansına satıldı.' },
  { id: 2220, topic: 'Medya ve Habercilik (B1)',       en: 'newswire',       tr: 'haber teli',                type: 'isim', exampleEn: 'The newswire delivered updates every few minutes.',    exampleTr: 'Haber teli her birkaç dakikada bir güncelleme iletti.' },
  { id: 2221, topic: 'Medya ve Habercilik (B1)',       en: 'spokesperson',   tr: 'sözcü',                     type: 'isim', exampleEn: 'The spokesperson denied all the allegations.',         exampleTr: 'Sözcü tüm iddiaları reddetti.' },
  { id: 2222, topic: 'Medya ve Habercilik (B1)',       en: 'reputable',      tr: 'saygın',                    type: 'sıfat',exampleEn: 'Always use reputable sources for your research.',     exampleTr: 'Araştırmanız için her zaman saygın kaynaklar kullanın.' },
  { id: 2223, topic: 'Medya ve Habercilik (B1)',       en: 'agenda',         tr: 'gündem',                    type: 'isim', exampleEn: 'The media sets the public agenda every day.',          exampleTr: 'Medya her gün kamuoyunun gündemini belirler.' },
  { id: 2224, topic: 'Medya ve Habercilik (B1)',       en: 'moratorium',     tr: 'moratoryum',                type: 'isim', exampleEn: 'The newspaper placed a moratorium on the story.',     exampleTr: 'Gazete haber üzerine moratoryum koydu.' },
  { id: 2225, topic: 'Medya ve Habercilik (B1)',       en: 'investigative',  tr: 'araştırmacı',               type: 'sıfat',exampleEn: 'Investigative journalism uncovered the scandal.',      exampleTr: 'Araştırmacı gazetecilik skandalı gün yüzüne çıkardı.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Medya ve Habercilik — B2 (2226-2245)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2226, topic: 'Medya ve Habercilik (B2)',       en: 'libel',          tr: 'yazılı iftira',             type: 'isim', exampleEn: 'The journalist was sued for libel after the article.',  exampleTr: 'Gazeteci makale nedeniyle yazılı iftiradan dava edildi.' },
  { id: 2227, topic: 'Medya ve Habercilik (B2)',       en: 'defamation',     tr: 'iftira',                    type: 'isim', exampleEn: 'The company filed a defamation claim against the paper.', exampleTr: 'Şirket gazeteye karşı iftira davası açtı.' },
  { id: 2228, topic: 'Medya ve Habercilik (B2)',       en: 'plurality',      tr: 'çoğulculuk',                type: 'isim', exampleEn: 'Media plurality ensures diverse viewpoints.',           exampleTr: 'Medya çoğulculuğu farklı görüşlerin sunulmasını sağlar.' },
  { id: 2229, topic: 'Medya ve Habercilik (B2)',       en: 'conglomerate',   tr: 'medya holdingi',            type: 'isim', exampleEn: 'One conglomerate owns dozens of news outlets.',         exampleTr: 'Bir medya holdingi onlarca haber kanalına sahip.' },
  { id: 2230, topic: 'Medya ve Habercilik (B2)',       en: 'muckraking',     tr: 'yolsuzluk araştırmacılığı', type: 'isim', exampleEn: 'Muckraking journalism exposed political corruption.',    exampleTr: 'Yolsuzluk araştırmacılığı siyasi yolsuzluğu ortaya çıkardı.' },
  { id: 2231, topic: 'Medya ve Habercilik (B2)',       en: 'sockpuppet',     tr: 'sahte çevrimiçi hesap',     type: 'isim', exampleEn: 'Sockpuppet accounts spread false information online.',   exampleTr: 'Sahte çevrimiçi hesaplar internette yanlış bilgi yaydı.' },
  { id: 2232, topic: 'Medya ve Habercilik (B2)',       en: 'partisanship',   tr: 'partizanlık',               type: 'isim', exampleEn: 'Partisanship undermines trust in the media.',           exampleTr: 'Partizanlık medyaya olan güveni zayıflatır.' },
  { id: 2233, topic: 'Medya ve Habercilik (B2)',       en: 'sensationalism',  tr: 'sansasyonculuk',           type: 'isim', exampleEn: 'Sensationalism attracts readers but distorts truth.',   exampleTr: 'Sansasyonculuk okuyucu çeker ama gerçeği çarpıtır.' },
  { id: 2234, topic: 'Medya ve Habercilik (B2)',       en: 'epistemological', tr: 'epistemolojik',            type: 'sıfat',exampleEn: 'There is an epistemological crisis in online media.',   exampleTr: 'Çevrimiçi medyada epistemolojik bir kriz var.' },
  { id: 2235, topic: 'Medya ve Habercilik (B2)',       en: 'impartiality',   tr: 'tarafsızlık',               type: 'isim', exampleEn: 'The broadcaster is required by law to maintain impartiality.', exampleTr: 'Yayıncının tarafsızlığı sürdürmesi yasal zorunluluktur.' },
  { id: 2236, topic: 'Medya ve Habercilik (B2)',       en: 'fabricate',      tr: 'uydurmak',                  type: 'fiil', exampleEn: 'The reporter fabricated quotes in the article.',        exampleTr: 'Muhabir makalede alıntıları uydurdu.' },
  { id: 2237, topic: 'Medya ve Habercilik (B2)',       en: 'misrepresent',   tr: 'yanlış tanıtmak',           type: 'fiil', exampleEn: 'The headline misrepresented what the scientist said.',  exampleTr: 'Manşet bilim insanının söylediklerini yanlış tanıttı.' },
  { id: 2238, topic: 'Medya ve Habercilik (B2)',       en: 'substantiate',   tr: 'kanıtlamak',                type: 'fiil', exampleEn: 'Journalists must substantiate claims before publishing.', exampleTr: 'Gazeteciler yayımlamadan önce iddiaları kanıtlamalıdır.' },
  { id: 2239, topic: 'Medya ve Habercilik (B2)',       en: 'rebuttal',       tr: 'çürütme',                   type: 'isim', exampleEn: 'The minister issued a rebuttal to the accusations.',    exampleTr: 'Bakan suçlamalara çürütme yayımladı.' },
  { id: 2240, topic: 'Medya ve Habercilik (B2)',       en: 'retraction',     tr: 'düzeltme yayını',           type: 'isim', exampleEn: 'The newspaper printed a retraction on the front page.', exampleTr: 'Gazete ön sayfaya düzeltme yayını koydu.' },
  { id: 2241, topic: 'Medya ve Habercilik (B2)',       en: 'omission',       tr: 'bilgi atlama',              type: 'isim', exampleEn: 'The omission of key facts misled the public.',          exampleTr: 'Önemli gerçeklerin atlanması kamuoyunu yanılttı.' },
  { id: 2242, topic: 'Medya ve Habercilik (B2)',       en: 'credible',       tr: 'güvenilir',                 type: 'sıfat',exampleEn: 'Only credible sources should be cited in reporting.',   exampleTr: 'Habercilikte yalnızca güvenilir kaynaklar atıf yapılmalıdır.' },
  { id: 2243, topic: 'Medya ve Habercilik (B2)',       en: 'verbatim',       tr: 'kelimesi kelimesine',       type: 'zarf', exampleEn: 'She quoted the minister verbatim in her report.',       exampleTr: 'Raporunda bakanı kelimesi kelimesine alıntıladı.' },
  { id: 2244, topic: 'Medya ve Habercilik (B2)',       en: 'polarize',       tr: 'kutuplaştırmak',            type: 'fiil', exampleEn: 'Extreme headlines tend to polarize public opinion.',    exampleTr: 'Aşırı manşetler kamuoyunu kutuplaştırma eğilimindedir.' },
  { id: 2245, topic: 'Medya ve Habercilik (B2)',       en: 'subtlety',       tr: 'incelik',                   type: 'isim', exampleEn: 'Good reporting requires subtlety and nuance.',          exampleTr: 'İyi habercilik incelik ve nüans gerektirir.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Çevre ve Sürdürülebilirlik — A1 (2246-2265)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2246, topic: 'Çevre ve Sürdürülebilirlik',    en: 'recycle',        tr: 'geri dönüştürmek',          type: 'fiil', exampleEn: 'We recycle plastic bottles at home.',                  exampleTr: 'Evde plastik şişeleri geri dönüştürüyoruz.' },
  { id: 2247, topic: 'Çevre ve Sürdürülebilirlik',    en: 'pollution',      tr: 'kirlilik',                  type: 'isim', exampleEn: 'Air pollution is a serious problem in cities.',        exampleTr: 'Hava kirliliği şehirlerde ciddi bir sorundur.' },
  { id: 2248, topic: 'Çevre ve Sürdürülebilirlik',    en: 'solar',          tr: 'güneş enerjisine dayalı',   type: 'sıfat',exampleEn: 'Solar panels produce clean electricity.',              exampleTr: 'Güneş panelleri temiz elektrik üretir.' },
  { id: 2249, topic: 'Çevre ve Sürdürülebilirlik',    en: 'waste',          tr: 'atık',                      type: 'isim', exampleEn: 'We must reduce waste to protect the environment.',     exampleTr: 'Çevreyi korumak için atığı azaltmalıyız.' },
  { id: 2250, topic: 'Çevre ve Sürdürülebilirlik',    en: 'litter',         tr: 'çöp atmak',                 type: 'fiil', exampleEn: 'Do not litter in the park or on the streets.',        exampleTr: 'Parkta veya sokaklarda çöp atmayın.' },
  { id: 2251, topic: 'Çevre ve Sürdürülebilirlik',    en: 'compost',        tr: 'kompost',                   type: 'isim', exampleEn: 'She turns food scraps into compost for her garden.',   exampleTr: 'Yemek artıklarını bahçesi için kompost haline getiriyor.' },
  { id: 2252, topic: 'Çevre ve Sürdürülebilirlik',    en: 'smog',           tr: 'is dumanı',                 type: 'isim', exampleEn: 'Heavy smog covered the city after the factory fire.',  exampleTr: 'Fabrika yangınının ardından şehri yoğun is dumanı kapladı.' },
  { id: 2253, topic: 'Çevre ve Sürdürülebilirlik',    en: 'toxic',          tr: 'zehirli',                   type: 'sıfat',exampleEn: 'The factory released toxic chemicals into the river.', exampleTr: 'Fabrika nehre zehirli kimyasallar bıraktı.' },
  { id: 2254, topic: 'Çevre ve Sürdürülebilirlik',    en: 'landfill',       tr: 'çöp depolama alanı',        type: 'isim', exampleEn: 'The landfill is nearly full and must be closed soon.',  exampleTr: 'Çöp depolama alanı neredeyse dolu ve yakında kapatılmalı.' },
  { id: 2255, topic: 'Çevre ve Sürdürülebilirlik',    en: 'carbon',         tr: 'karbon',                    type: 'isim', exampleEn: 'Carbon emissions must be reduced to slow warming.',    exampleTr: 'Isınmayı yavaşlatmak için karbon salınımı azaltılmalıdır.' },
  { id: 2256, topic: 'Çevre ve Sürdürülebilirlik',    en: 'greenhouse',     tr: 'sera',                      type: 'isim', exampleEn: 'Greenhouse gases trap heat in the atmosphere.',        exampleTr: 'Sera gazları atmosferdeki ısıyı hapseder.' },
  { id: 2257, topic: 'Çevre ve Sürdürülebilirlik',    en: 'ozone',          tr: 'ozon',                      type: 'isim', exampleEn: 'The ozone layer protects us from UV radiation.',       exampleTr: 'Ozon tabakası bizi UV radyasyonundan korur.' },
  { id: 2258, topic: 'Çevre ve Sürdürülebilirlik',    en: 'reuse',          tr: 'yeniden kullanmak',         type: 'fiil', exampleEn: 'Try to reuse bags instead of buying new ones.',        exampleTr: 'Yeni almak yerine poşetleri yeniden kullanmaya çalışın.' },
  { id: 2259, topic: 'Çevre ve Sürdürülebilirlik',    en: 'biodegradable',  tr: 'biyobozunur',               type: 'sıfat',exampleEn: 'Biodegradable packaging breaks down naturally.',      exampleTr: 'Biyobozunur ambalaj doğal olarak ayrışır.' },
  { id: 2260, topic: 'Çevre ve Sürdürülebilirlik',    en: 'cleanup',        tr: 'temizlik kampanyası',       type: 'isim', exampleEn: 'Volunteers joined the beach cleanup last weekend.',    exampleTr: 'Gönüllüler geçen hafta sonu plaj temizliğine katıldı.' },
  { id: 2261, topic: 'Çevre ve Sürdürülebilirlik',    en: 'electricity',    tr: 'elektrik',                  type: 'isim', exampleEn: 'Electricity from wind turbines is clean energy.',     exampleTr: 'Rüzgar türbinlerinden gelen elektrik temiz enerjidir.' },
  { id: 2262, topic: 'Çevre ve Sürdürülebilirlik',    en: 'nuclear',        tr: 'nükleer',                   type: 'sıfat',exampleEn: 'Nuclear power produces very little carbon emission.',  exampleTr: 'Nükleer enerji çok az karbon salınımı üretir.' },
  { id: 2263, topic: 'Çevre ve Sürdürülebilirlik',    en: 'windmill',       tr: 'yel değirmeni',             type: 'isim', exampleEn: 'Old windmills were used to grind grain centuries ago.', exampleTr: 'Eski yel değirmenleri yüzyıllar önce tahıl öğütmek için kullanılırdı.' },
  { id: 2264, topic: 'Çevre ve Sürdürülebilirlik',    en: 'ecology',        tr: 'ekoloji',                   type: 'isim', exampleEn: 'Ecology studies the relationship between living things.', exampleTr: 'Ekoloji, canlılar arasındaki ilişkiyi inceler.' },
  { id: 2265, topic: 'Çevre ve Sürdürülebilirlik',    en: 'pesticide',      tr: 'böcek ilacı',               type: 'isim', exampleEn: 'Farmers use pesticide to protect crops from insects.', exampleTr: 'Çiftçiler mahsulleri böceklerden korumak için böcek ilacı kullanır.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Çevre ve Sürdürülebilirlik — A2 (2266-2285)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2266, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'reforestation', tr: 'yeniden ağaçlandırma',    type: 'isim', exampleEn: 'Reforestation helps restore destroyed ecosystems.',     exampleTr: 'Yeniden ağaçlandırma tahrip olmuş ekosistemlerin onarılmasına yardımcı olur.' },
  { id: 2267, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'logging',       tr: 'ağaç kesimi',             type: 'isim', exampleEn: 'Illegal logging destroys large areas of rainforest.',  exampleTr: 'Yasadışı ağaç kesimi yağmur ormanlarının büyük bölümlerini yok ediyor.' },
  { id: 2268, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'fossil',        tr: 'fosil',                   type: 'isim', exampleEn: 'Burning fossil fuels releases carbon into the air.',   exampleTr: 'Fosil yakıtların yakılması havaya karbon salıyor.' },
  { id: 2269, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'turbine',       tr: 'türbin',                  type: 'isim', exampleEn: 'Wind turbines convert wind into electricity.',         exampleTr: 'Rüzgar türbinleri rüzgarı elektriğe dönüştürür.' },
  { id: 2270, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'footprint',     tr: 'ayak izi',                type: 'isim', exampleEn: 'Reducing your carbon footprint helps the planet.',     exampleTr: 'Karbon ayak izini azaltmak gezegene yardımcı olur.' },
  { id: 2271, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'offset',        tr: 'telafi etmek',            type: 'fiil', exampleEn: 'Companies offset emissions by planting trees.',        exampleTr: 'Şirketler ağaç dikerek salınımı telafi eder.' },
  { id: 2272, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'quota',         tr: 'kota',                    type: 'isim', exampleEn: 'Each country has an emission quota to respect.',       exampleTr: 'Her ülkenin uyması gereken bir salınım kotası var.' },
  { id: 2273, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'treaty',        tr: 'antlaşma',                type: 'isim', exampleEn: 'Many nations signed the climate treaty last year.',    exampleTr: 'Birçok ülke geçen yıl iklim antlaşmasını imzaladı.' },
  { id: 2274, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'convention',    tr: 'çevre sözleşmesi',        type: 'isim', exampleEn: 'The convention set new environmental standards.',      exampleTr: 'Sözleşme yeni çevre standartları belirledi.' },
  { id: 2275, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'summit',        tr: 'zirve',                   type: 'isim', exampleEn: 'World leaders met at the climate summit.',             exampleTr: 'Dünya liderleri iklim zirvesinde bir araya geldi.' },
  { id: 2276, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'pledge',        tr: 'taahhüt etmek',           type: 'fiil', exampleEn: 'The country pledged to cut emissions by fifty percent.', exampleTr: 'Ülke salınımı yüzde elli azaltmayı taahhüt etti.' },
  { id: 2277, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'herbicide',     tr: 'yabani ot ilacı',         type: 'isim', exampleEn: 'Herbicide kills weeds but can harm other plants.',     exampleTr: 'Yabani ot ilacı yabani otları öldürür ancak diğer bitkilere zarar verebilir.' },
  { id: 2278, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'fertilizer',    tr: 'gübre',                   type: 'isim', exampleEn: 'Chemical fertilizer can pollute nearby rivers.',       exampleTr: 'Kimyasal gübre yakındaki nehirleri kirletebilir.' },
  { id: 2279, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'runoff',        tr: 'yüzey akışı',             type: 'isim', exampleEn: 'Agricultural runoff pollutes rivers with chemicals.',   exampleTr: 'Tarımsal yüzey akışı nehirleri kimyasallarla kirletiyor.' },
  { id: 2280, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'evaporation',   tr: 'buharlaşma',              type: 'isim', exampleEn: 'Heat speeds up evaporation from lakes and seas.',      exampleTr: 'Sıcaklık göl ve denizlerden buharlaşmayı hızlandırır.' },
  { id: 2281, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'monsoon',       tr: 'muson yağmurları',        type: 'isim', exampleEn: 'The monsoon season brings heavy rain to Asia.',        exampleTr: 'Muson mevsimi Asya\'ya yoğun yağmur getirir.' },
  { id: 2282, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'tributary',     tr: 'kol nehir',               type: 'isim', exampleEn: 'The tributary feeds into the main river downstream.',  exampleTr: 'Kol nehir aşağıda ana nehre karışıyor.' },
  { id: 2283, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'wetland',       tr: 'sulak alan',              type: 'isim', exampleEn: 'Wetlands are vital habitats for many bird species.',   exampleTr: 'Sulak alanlar pek çok kuş türü için hayati yaşam alanlarıdır.' },
  { id: 2284, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'delta',         tr: 'nehir deltası',           type: 'isim', exampleEn: 'The river delta is home to rich biodiversity.',        exampleTr: 'Nehir deltası zengin biyoçeşitliliğe ev sahipliği yapıyor.' },
  { id: 2285, topic: 'Çevre ve Sürdürülebilirlik (A2)', en: 'geothermal',    tr: 'jeotermal',               type: 'sıfat',exampleEn: 'Iceland uses geothermal energy to heat its homes.',    exampleTr: 'İzlanda evlerini ısıtmak için jeotermal enerji kullanıyor.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Çevre ve Sürdürülebilirlik — B1 (2286-2305)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2286, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'warming',       tr: 'ısınma',                  type: 'isim', exampleEn: 'Global warming is causing sea levels to rise.',        exampleTr: 'Küresel ısınma deniz seviyelerinin yükselmesine yol açıyor.' },
  { id: 2287, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'neutral',       tr: 'nötr',                    type: 'sıfat',exampleEn: 'The country aims to be carbon neutral by 2050.',       exampleTr: 'Ülke 2050\'ye kadar karbon nötr olmayı hedefliyor.' },
  { id: 2288, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'offshore',      tr: 'açık deniz',              type: 'sıfat',exampleEn: 'Offshore wind farms generate significant electricity.', exampleTr: 'Açık deniz rüzgar çiftlikleri önemli miktarda elektrik üretir.' },
  { id: 2289, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'biodegradation', tr: 'biyobozunma',            type: 'isim', exampleEn: 'Biodegradation breaks waste into natural substances.',  exampleTr: 'Biyobozunma atığı doğal maddelere ayırır.' },
  { id: 2290, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'contaminate',   tr: 'kirletmek',               type: 'fiil', exampleEn: 'Oil spills contaminate the sea for years.',           exampleTr: 'Petrol sızıntıları yıllarca denizi kirletiyor.' },
  { id: 2291, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'tundra',        tr: 'tundra',                  type: 'isim', exampleEn: 'The tundra is warming faster than any other biome.',   exampleTr: 'Tundra, diğer biyomlardan daha hızlı ısınıyor.' },
  { id: 2292, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'methane',       tr: 'metan',                   type: 'isim', exampleEn: 'Methane is a powerful greenhouse gas.',                exampleTr: 'Metan güçlü bir sera gazıdır.' },
  { id: 2293, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'nitrogen',      tr: 'azot',                    type: 'isim', exampleEn: 'Excess nitrogen from farms pollutes waterways.',       exampleTr: 'Çiftliklerden gelen fazla azot su yollarını kirletiyor.' },
  { id: 2294, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'algae',         tr: 'alg',                     type: 'isim', exampleEn: 'Algae blooms choke lakes and kill fish.',             exampleTr: 'Alg patlamaları gölleri boğar ve balıkları öldürür.' },
  { id: 2295, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'plankton',      tr: 'plankton',                type: 'isim', exampleEn: 'Plankton forms the base of the ocean food chain.',    exampleTr: 'Plankton okyanus besin zincirinin temelini oluşturur.' },
  { id: 2296, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'aquatic',       tr: 'sucul',                   type: 'sıfat',exampleEn: 'Plastic waste harms many aquatic species.',            exampleTr: 'Plastik atık pek çok sucul türe zarar veriyor.' },
  { id: 2297, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'species',       tr: 'tür',                     type: 'isim', exampleEn: 'Thousands of species are at risk of extinction.',     exampleTr: 'Binlerce tür nesli tükenme tehlikesiyle karşı karşıya.' },
  { id: 2298, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'vegetation',    tr: 'bitki örtüsü',            type: 'isim', exampleEn: 'Loss of vegetation leads to soil erosion.',           exampleTr: 'Bitki örtüsünün yok olması toprak erozyonuna yol açar.' },
  { id: 2299, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'radiation',     tr: 'radyasyon',               type: 'isim', exampleEn: 'UV radiation increases as the ozone layer thins.',    exampleTr: 'Ozon tabakası inceldikçe UV radyasyonu artıyor.' },
  { id: 2300, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'acidification', tr: 'asitleşme',               type: 'isim', exampleEn: 'Ocean acidification threatens coral reefs worldwide.', exampleTr: 'Okyanus asitleşmesi dünya genelinde mercan resiflerini tehdit ediyor.' },
  { id: 2301, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'rebate',        tr: 'geri ödeme',              type: 'isim', exampleEn: 'The government offers a rebate for buying electric cars.', exampleTr: 'Hükümet elektrikli araç alımı için geri ödeme sunuyor.' },
  { id: 2302, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'legislation',   tr: 'mevzuat',                 type: 'isim', exampleEn: 'New legislation bans single-use plastics.',            exampleTr: 'Yeni mevzuat tek kullanımlık plastikleri yasaklıyor.' },
  { id: 2303, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'directive',     tr: 'yönerge',                 type: 'isim', exampleEn: 'The EU directive requires cleaner air standards.',     exampleTr: 'AB yönergesi daha temiz hava standartları gerektiriyor.' },
  { id: 2304, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'abatement',     tr: 'azaltım',                 type: 'isim', exampleEn: 'Pollution abatement measures were put in place.',      exampleTr: 'Kirlilik azaltım tedbirleri hayata geçirildi.' },
  { id: 2305, topic: 'Çevre ve Sürdürülebilirlik (B1)', en: 'mitigation',    tr: 'hafifletme',              type: 'isim', exampleEn: 'Climate mitigation requires global cooperation.',      exampleTr: 'İklim hafifletmesi küresel iş birliği gerektirir.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Çevre ve Sürdürülebilirlik — B2 (2306-2325)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2306, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'biotic',        tr: 'biyotik',                 type: 'sıfat',exampleEn: 'Biotic factors include all living organisms in an area.', exampleTr: 'Biyotik faktörler bir bölgedeki tüm canlı organizmaları kapsar.' },
  { id: 2307, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'precipice',     tr: 'eşiğin kenarı',           type: 'isim', exampleEn: 'We stand at the precipice of irreversible climate change.', exampleTr: 'Geri dönüşü olmayan iklim değişikliğinin eşiğindeyiz.' },
  { id: 2308, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'sequestration', tr: 'karbon tutma',            type: 'isim', exampleEn: 'Carbon sequestration removes CO₂ from the atmosphere.', exampleTr: 'Karbon tutma atmosferden CO₂ uzaklaştırır.' },
  { id: 2309, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'geoengineering', tr: 'jeomühendislik',         type: 'isim', exampleEn: 'Geoengineering proposes large-scale climate interventions.', exampleTr: 'Jeomühendislik büyük ölçekli iklim müdahaleleri öneriyor.' },
  { id: 2310, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'decarbonisation', tr: 'dekarbonizasyon',       type: 'isim', exampleEn: 'Decarbonisation of industry is essential for net zero.',  exampleTr: 'Sanayinin dekarbonizasyonu net sıfır için zorunludur.' },
  { id: 2311, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'resilience',    tr: 'dayanıklılık',            type: 'isim', exampleEn: 'Coastal resilience helps cities survive flooding.',      exampleTr: 'Kıyı dayanıklılığı şehirlerin taşkınlardan kurtulmasına yardımcı olur.' },
  { id: 2312, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'vulnerability', tr: 'kırılganlık',             type: 'isim', exampleEn: 'Island nations show high vulnerability to sea level rise.', exampleTr: 'Ada ülkeleri deniz seviyesi yükselmesine karşı yüksek kırılganlık gösteriyor.' },
  { id: 2313, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'stewardship',   tr: 'çevresel sorumluluk',     type: 'isim', exampleEn: 'Environmental stewardship means caring for the planet.',  exampleTr: 'Çevresel sorumluluk gezegene sahip çıkmak demektir.' },
  { id: 2314, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'predation',     tr: 'yırtıcılık',              type: 'isim', exampleEn: 'Predation keeps prey populations in balance.',          exampleTr: 'Yırtıcılık av popülasyonlarını dengede tutar.' },
  { id: 2315, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'photosynthesis', tr: 'fotosentez',             type: 'isim', exampleEn: 'Photosynthesis converts sunlight into plant energy.',    exampleTr: 'Fotosentez güneş ışığını bitki enerjisine dönüştürür.' },
  { id: 2316, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'bioaccumulation', tr: 'biyobirikim',           type: 'isim', exampleEn: 'Bioaccumulation concentrates toxins in top predators.',  exampleTr: 'Biyobirikim toksinleri üst avcılarda yoğunlaştırır.' },
  { id: 2317, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'biochar',       tr: 'biyokömür',               type: 'isim', exampleEn: 'Biochar improves soil quality and stores carbon.',       exampleTr: 'Biyokömür toprak kalitesini iyileştirir ve karbon depolar.' },
  { id: 2318, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'aerosol',       tr: 'aerosol',                 type: 'isim', exampleEn: 'Aerosol particles in the air affect cloud formation.',   exampleTr: 'Havadaki aerosol partiküller bulut oluşumunu etkiler.' },
  { id: 2319, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'monoculture',   tr: 'tek ürün tarımı',         type: 'isim', exampleEn: 'Monoculture farming depletes soil nutrients quickly.',   exampleTr: 'Tek ürün tarımı toprak besinlerini hızla tüketir.' },
  { id: 2320, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'agroforestry',  tr: 'agro-ormancılık',         type: 'isim', exampleEn: 'Agroforestry combines farming with tree planting.',      exampleTr: 'Agro-ormancılık tarımı ağaç dikimle birleştirir.' },
  { id: 2321, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'salinisation',  tr: 'tuzlanma',                type: 'isim', exampleEn: 'Salinisation of soil makes farmland unusable.',         exampleTr: 'Toprağın tuzlanması tarım arazisini kullanılamaz hale getirir.' },
  { id: 2322, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'hydropower',    tr: 'hidroelektrik',           type: 'isim', exampleEn: 'Hydropower dams generate electricity from river flow.',  exampleTr: 'Hidroelektrik barajlar nehir akışından elektrik üretir.' },
  { id: 2323, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'biomass',       tr: 'biyokütle',               type: 'isim', exampleEn: 'Biomass energy comes from organic plant material.',     exampleTr: 'Biyokütle enerjisi organik bitki materyalinden gelir.' },
  { id: 2324, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'rewilding',     tr: 'doğaya iade',             type: 'isim', exampleEn: 'Rewilding reintroduces lost species to restore nature.', exampleTr: 'Doğaya iade, kaybolan türleri yeniden tanıtarak doğayı onarmak demektir.' },
  { id: 2325, topic: 'Çevre ve Sürdürülebilirlik (B2)', en: 'phytoplankton', tr: 'fitoplankton',            type: 'isim', exampleEn: 'Phytoplankton produces half the world\'s oxygen.',       exampleTr: 'Fitoplankton dünyanın oksijeninin yarısını üretiyor.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Yemek Kültürü ve Mutfak Sanatı — A1 (2326-2345)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2326, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'bake',         tr: 'fırında pişirmek',         type: 'fiil', exampleEn: 'She loves to bake bread on Sunday mornings.',          exampleTr: 'Pazar sabahları fırında ekmek pişirmeyi seviyor.' },
  { id: 2327, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'grill',        tr: 'ızgarada pişirmek',        type: 'fiil', exampleEn: 'He grilled the chicken over charcoal.',                exampleTr: 'Tavuğu mangal kömüründe ızgarada pişirdi.' },
  { id: 2328, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'fry',          tr: 'kızartmak',                type: 'fiil', exampleEn: 'Fry the onions until they turn golden.',               exampleTr: 'Soğanları altın rengi olana kadar kızartın.' },
  { id: 2329, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'boil',         tr: 'haşlamak',                 type: 'fiil', exampleEn: 'Boil the vegetables for five minutes.',                exampleTr: 'Sebzeleri beş dakika haşlayın.' },
  { id: 2330, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'roast',        tr: 'fırında kavurmak',         type: 'fiil', exampleEn: 'They roast the lamb with herbs and garlic.',           exampleTr: 'Kuzuyu otlar ve sarımsakla fırında kavuruyorlar.' },
  { id: 2331, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'chop',         tr: 'doğramak',                 type: 'fiil', exampleEn: 'Chop the vegetables into small pieces.',               exampleTr: 'Sebzeleri küçük parçalar halinde doğrayın.' },
  { id: 2332, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'recipe',       tr: 'tarif',                    type: 'isim', exampleEn: 'I followed my grandmother\'s recipe for the cake.',    exampleTr: 'Pasta için büyükannemin tarifini takip ettim.' },
  { id: 2333, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'menu',         tr: 'menü',                     type: 'isim', exampleEn: 'The menu changes every season at this restaurant.',    exampleTr: 'Bu restoranda menü her mevsim değişiyor.' },
  { id: 2334, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'oven',         tr: 'fırın',                    type: 'isim', exampleEn: 'Preheat the oven to two hundred degrees.',             exampleTr: 'Fırını iki yüz dereceye önceden ısıtın.' },
  { id: 2335, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'plate',        tr: 'tabak',                    type: 'isim', exampleEn: 'She arranged the food beautifully on the plate.',      exampleTr: 'Yemeği tabağa güzel bir şekilde dizdi.' },
  { id: 2336, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'fork',         tr: 'çatal',                    type: 'isim', exampleEn: 'Use a fork to eat pasta, not a spoon.',                exampleTr: 'Makarna yerken kaşık değil, çatal kullanın.' },
  { id: 2337, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'knife',        tr: 'bıçak',                    type: 'isim', exampleEn: 'A sharp knife makes chopping vegetables much easier.',  exampleTr: 'Keskin bir bıçak sebze doğramayı çok kolaylaştırır.' },
  { id: 2338, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'bowl',         tr: 'kase',                     type: 'isim', exampleEn: 'She mixed all the ingredients in a large bowl.',       exampleTr: 'Tüm malzemeleri büyük bir kasede karıştırdı.' },
  { id: 2339, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'pan',          tr: 'tava',                     type: 'isim', exampleEn: 'Heat oil in the pan before adding the fish.',          exampleTr: 'Balığı eklemeden önce tavada yağı ısıtın.' },
  { id: 2340, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'tablespoon',   tr: 'yemek kaşığı',             type: 'isim', exampleEn: 'Add two tablespoons of olive oil to the sauce.',       exampleTr: 'Sosun içine iki yemek kaşığı zeytinyağı ekleyin.' },
  { id: 2341, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'teaspoon',     tr: 'çay kaşığı',               type: 'isim', exampleEn: 'Add half a teaspoon of salt to the dough.',           exampleTr: 'Hamura yarım çay kaşığı tuz ekleyin.' },
  { id: 2342, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'platter',      tr: 'büyük servis tabağı',      type: 'isim', exampleEn: 'The cheese platter was the highlight of the party.',   exampleTr: 'Peynir tabağı partinin yıldızıydı.' },
  { id: 2343, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'dine',         tr: 'yemek yemek',              type: 'fiil', exampleEn: 'They dine out every Friday evening.',                 exampleTr: 'Her Cuma akşamı dışarıda yemek yiyorlar.' },
  { id: 2344, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'flavor',       tr: 'lezzet',                   type: 'isim', exampleEn: 'The spices add a rich flavor to the dish.',           exampleTr: 'Baharatlar yemeğe zengin bir lezzet katıyor.' },
  { id: 2345, topic: 'Yemek Kültürü ve Mutfak Sanatı',  en: 'aroma',        tr: 'aroma',                    type: 'isim', exampleEn: 'The aroma of fresh bread filled the kitchen.',        exampleTr: 'Taze ekmeğin aroması mutfağı doldurdu.' },

  // ══════════════════════════════════════════════════════════════════════════
  // Yemek Kültürü ve Mutfak Sanatı — A2 (2346-2365)
  // ══════════════════════════════════════════════════════════════════════════
  { id: 2346, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'broth',    tr: 'et suyu',                  type: 'isim', exampleEn: 'She made a rich broth from chicken bones.',            exampleTr: 'Tavuk kemiklerinden zengin bir et suyu yaptı.' },
  { id: 2347, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'dough',    tr: 'hamur',                    type: 'isim', exampleEn: 'Knead the dough for ten minutes until smooth.',        exampleTr: 'Hamuru pürüzsüz olana kadar on dakika yoğurun.' },
  { id: 2348, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'pastry',   tr: 'hamur işi',                type: 'isim', exampleEn: 'The bakery sells fresh pastry every morning.',         exampleTr: 'Fırın her sabah taze hamur işi satıyor.' },
  { id: 2349, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'steam',    tr: 'buharda pişirmek',         type: 'fiil', exampleEn: 'Steam the broccoli for three minutes to keep its colour.', exampleTr: 'Rengini korumak için brokoliyi üç dakika buharda pişirin.' },
  { id: 2350, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'simmer',   tr: 'kısık ateşte pişirmek',    type: 'fiil', exampleEn: 'Let the soup simmer for thirty minutes.',              exampleTr: 'Çorbayı otuz dakika kısık ateşte pişirin.' },
  { id: 2351, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'dice',     tr: 'küp küp doğramak',         type: 'fiil', exampleEn: 'Dice the carrots into small even cubes.',              exampleTr: 'Havuçları küçük eşit küplere doğrayın.' },
  { id: 2352, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'mince',    tr: 'kıymak',                   type: 'fiil', exampleEn: 'Mince the garlic finely before adding it to the pan.', exampleTr: 'Sarımsağı tavaya eklemeden önce ince ince kıyın.' },
  { id: 2353, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'knead',    tr: 'yoğurmak',                 type: 'fiil', exampleEn: 'Knead the bread dough until it becomes elastic.',      exampleTr: 'Ekmek hamurunu elastik hale gelene kadar yoğurun.' },
  { id: 2354, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'ferment',  tr: 'fermente etmek',           type: 'fiil', exampleEn: 'Leave the dough to ferment overnight.',               exampleTr: 'Hamuru bir gece fermente olmaya bırakın.' },
  { id: 2355, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'pickle',   tr: 'turşu yapmak',             type: 'fiil', exampleEn: 'They pickle cucumbers with vinegar and spices.',       exampleTr: 'Salatalıkları sirke ve baharatlarla turşu yapıyorlar.' },
  { id: 2356, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'skillet',  tr: 'kızartma tavası',          type: 'isim', exampleEn: 'Use a cast-iron skillet for the best sear.',           exampleTr: 'En iyi kavurma için dökme demir tava kullanın.' },
  { id: 2357, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'ladle',    tr: 'kepçe',                    type: 'isim', exampleEn: 'Serve the soup with a large ladle.',                   exampleTr: 'Çorbayı büyük bir kepçeyle servis edin.' },
  { id: 2358, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'whisk',    tr: 'çırpıcı',                  type: 'isim', exampleEn: 'Use a whisk to beat the eggs until fluffy.',           exampleTr: 'Yumurtaları kabarık olana kadar çırpıcıyla çırpın.' },
  { id: 2359, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'spatula',  tr: 'spatula',                  type: 'isim', exampleEn: 'Flip the pancake carefully with a spatula.',           exampleTr: 'Krepleri dikkatli bir şekilde spatulayla çevirin.' },
  { id: 2360, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'sieve',    tr: 'elek',                     type: 'isim', exampleEn: 'Sift the flour through a sieve to remove lumps.',      exampleTr: 'Topakları gidermek için unu elek içinden geçirin.' },
  { id: 2361, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'saucepan', tr: 'tencere',                  type: 'isim', exampleEn: 'Heat the milk in a small saucepan over low heat.',     exampleTr: 'Sütü küçük bir tencerede kısık ateşte ısıtın.' },
  { id: 2362, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'barbecue', tr: 'mangal',                   type: 'isim', exampleEn: 'We had a barbecue in the garden last summer.',         exampleTr: 'Geçen yaz bahçede mangal yaptık.' },
  { id: 2363, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'brunch',   tr: 'geç kahvaltı',             type: 'isim', exampleEn: 'They meet for brunch every Sunday at noon.',           exampleTr: 'Her Pazar öğlen geç kahvaltı için buluşuyorlar.' },
  { id: 2364, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'takeaway', tr: 'paket servis',             type: 'isim', exampleEn: 'We ordered a takeaway because no one wanted to cook.',  exampleTr: 'Kimse yemek yapmak istemediği için paket servis söyledik.' },
  { id: 2365, topic: 'Yemek Kültürü ve Mutfak Sanatı (A2)', en: 'catering', tr: 'yemek servisi',            type: 'isim', exampleEn: 'The catering for the wedding was excellent.',           exampleTr: 'Düğündeki yemek servisi mükemmeldi.' },
];

// ─── 1. İç tekrar kontrolü ─────────────────────────────────────────────────
const enSet = new Set();
const intDups = [];
for (const w of newWords) {
  const key = w.en.toLowerCase();
  if (enSet.has(key)) intDups.push(w.en);
  else enSet.add(key);
}
if (intDups.length) { console.error('Dahili tekrar:', intDups); process.exit(1); }

// ─── 2. Mevcut kelimelerle çakışma kontrolü ───────────────────────────────
const crossDups = newWords.filter(w => existingEN.has(w.en.toLowerCase())).map(w => w.en);
if (crossDups.length) { console.error('Mevcut kelimelerle çakışma:', crossDups); process.exit(1); }

// ─── 3. ID kontrolü ───────────────────────────────────────────────────────
const ids = newWords.map(w => w.id);
const minId = Math.min(...ids), maxId = Math.max(...ids);
if (minId !== 2166 || maxId !== 2365 || ids.length !== 200) {
  console.error(`ID aralığı hatalı: min=${minId} max=${maxId} count=${ids.length}`);
  process.exit(1);
}

// ─── 4. JSON dosyasına yaz ────────────────────────────────────────────────
fs.writeFileSync(OUT_PATH, JSON.stringify(newWords, null, 2), 'utf8');
console.log(`Tamam! ${newWords.length} kelime → ${OUT_PATH}`);
