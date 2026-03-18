'use strict';
const fs   = require('fs');
const path = require('path');

const WORDS_PATH  = path.join(__dirname, '..', 'src', 'data', 'words.json');
const A1_PATH     = path.join(__dirname, 'is_kariyer_a1.json');
const OUT_PATH    = path.join(__dirname, 'is_kariyer_a2.json');

const existing    = JSON.parse(fs.readFileSync(WORDS_PATH, 'utf8'));
const a1Words     = JSON.parse(fs.readFileSync(A1_PATH, 'utf8'));
const usedEN      = new Set([...existing, ...a1Words].map(w => w.en.toLowerCase()));

// ─── 5 konu × 20 kelime = 100 giriş, ID 1866-1965 ───────────────────────────
const newWords = [

  // ── İş ve Kariyer (A2) — 1866-1885 ────────────────────────────────────────
  { id: 1866, topic: 'İş ve Kariyer (A2)',       en: 'performance',  tr: 'performans',        type: 'noun', exampleEn: 'His performance at work was excellent.',         exampleTr: 'İşteki performansı mükemmeldi.' },
  { id: 1867, topic: 'İş ve Kariyer (A2)',       en: 'feedback',     tr: 'geri bildirim',     type: 'noun', exampleEn: 'She gave me useful feedback on my report.',       exampleTr: 'Raporuma faydalı geri bildirim verdi.' },
  { id: 1868, topic: 'İş ve Kariyer (A2)',       en: 'bonus',        tr: 'ikramiye',          type: 'noun', exampleEn: 'Employees receive a bonus at the end of the year.',exampleTr: 'Çalışanlar yıl sonunda ikramiye alır.' },
  { id: 1869, topic: 'İş ve Kariyer (A2)',       en: 'probation',    tr: 'deneme süresi',     type: 'noun', exampleEn: 'New staff work on probation for three months.',    exampleTr: 'Yeni personel üç ay deneme süresinde çalışır.' },
  { id: 1870, topic: 'İş ve Kariyer (A2)',       en: 'layoff',       tr: 'işten çıkarma',     type: 'noun', exampleEn: 'The factory announced a layoff of fifty workers.',  exampleTr: 'Fabrika elli işçiyi işten çıkaracağını duyurdu.' },
  { id: 1871, topic: 'İş ve Kariyer (A2)',       en: 'freelance',    tr: 'serbest çalışma',   type: 'noun', exampleEn: 'She decided to work freelance after leaving the firm.', exampleTr: 'Firmadan ayrıldıktan sonra serbest çalışmaya karar verdi.' },
  { id: 1872, topic: 'İş ve Kariyer (A2)',       en: 'remote',       tr: 'uzaktan',           type: 'adj',  exampleEn: 'Remote work became very common after 2020.',       exampleTr: 'Uzaktan çalışma 2020 sonrasında çok yaygınlaştı.' },
  { id: 1873, topic: 'İş ve Kariyer (A2)',       en: 'turnover',     tr: 'işgücü devri',      type: 'noun', exampleEn: 'High turnover is costly for any business.',         exampleTr: 'Yüksek işgücü devri her işletme için maliyetlidir.' },
  { id: 1874, topic: 'İş ve Kariyer (A2)',       en: 'incentive',    tr: 'teşvik',            type: 'noun', exampleEn: 'The company offers incentives to top performers.',  exampleTr: 'Şirket en iyi performans gösterenlere teşvik sunar.' },
  { id: 1875, topic: 'İş ve Kariyer (A2)',       en: 'onboard',      tr: 'işe alıştırmak',    type: 'verb', exampleEn: 'We onboard new employees in their first week.',     exampleTr: 'Yeni çalışanları ilk haftada işe alıştırıyoruz.' },
  { id: 1876, topic: 'İş ve Kariyer (A2)',       en: 'employment',   tr: 'istihdam',          type: 'noun', exampleEn: 'Full employment is the goal of most governments.',  exampleTr: 'Tam istihdam çoğu hükümetin hedefidir.' },
  { id: 1877, topic: 'İş ve Kariyer (A2)',       en: 'dismissal',    tr: 'görevden alma',     type: 'noun', exampleEn: 'Unfair dismissal can lead to a legal case.',        exampleTr: 'Haksız görevden alma yasal davaya yol açabilir.' },
  { id: 1878, topic: 'İş ve Kariyer (A2)',       en: 'merit',        tr: 'liyakat',           type: 'noun', exampleEn: 'Promotions should be based on merit.',             exampleTr: 'Terfilerin liyakate dayalı olması gerekir.' },
  { id: 1879, topic: 'İş ve Kariyer (A2)',       en: 'appraise',     tr: 'değerlendirmek',    type: 'verb', exampleEn: 'Managers appraise staff every six months.',         exampleTr: 'Yöneticiler personeli altı ayda bir değerlendirir.' },
  { id: 1880, topic: 'İş ve Kariyer (A2)',       en: 'benchmark',    tr: 'kıyaslama ölçütü',  type: 'noun', exampleEn: 'Use industry benchmarks to measure your progress.',  exampleTr: 'İlerlemenizi ölçmek için sektör kıyaslama ölçütlerini kullanın.' },
  { id: 1881, topic: 'İş ve Kariyer (A2)',       en: 'collaborate',  tr: 'işbirliği yapmak',  type: 'verb', exampleEn: 'The two teams collaborate on every project.',        exampleTr: 'İki ekip her projede işbirliği yapar.' },
  { id: 1882, topic: 'İş ve Kariyer (A2)',       en: 'delegate',     tr: 'yetki devretmek',   type: 'verb', exampleEn: 'A good manager knows how to delegate tasks.',       exampleTr: 'İyi bir yönetici görevleri nasıl devredeceğini bilir.' },
  { id: 1883, topic: 'İş ve Kariyer (A2)',       en: 'roster',       tr: 'vardiya listesi',   type: 'noun', exampleEn: 'Check the roster to see when you work next.',       exampleTr: 'Bir sonraki çalışma zamanını görmek için vardiya listesine bak.' },
  { id: 1884, topic: 'İş ve Kariyer (A2)',       en: 'vision',       tr: 'vizyon',            type: 'noun', exampleEn: 'The CEO shared the company vision with all staff.',  exampleTr: 'Genel müdür şirket vizyonunu tüm personelle paylaştı.' },
  { id: 1885, topic: 'İş ve Kariyer (A2)',       en: 'target',       tr: 'hedef',             type: 'noun', exampleEn: 'The sales team hit their monthly target.',          exampleTr: 'Satış ekibi aylık hedefine ulaştı.' },

  // ── Finans ve Ekonomi (A2) — 1886-1905 ────────────────────────────────────
  { id: 1886, topic: 'Finans ve Ekonomi (A2)',   en: 'tariff',       tr: 'gümrük tarifesi',   type: 'noun', exampleEn: 'The government raised the tariff on imported goods.', exampleTr: 'Hükümet ithal mallara uygulanan gümrük tarifesini artırdı.' },
  { id: 1887, topic: 'Finans ve Ekonomi (A2)',   en: 'subsidy',      tr: 'sübvansiyon',       type: 'noun', exampleEn: 'Farmers receive a subsidy from the government.',     exampleTr: 'Çiftçiler hükümetten sübvansiyon alır.' },
  { id: 1888, topic: 'Finans ve Ekonomi (A2)',   en: 'recession',    tr: 'durgunluk',         type: 'noun', exampleEn: 'Many businesses closed during the recession.',       exampleTr: 'Durgunluk döneminde pek çok işletme kapandı.' },
  { id: 1889, topic: 'Finans ve Ekonomi (A2)',   en: 'capital',      tr: 'sermaye',           type: 'noun', exampleEn: 'You need capital to start a new business.',          exampleTr: 'Yeni bir iş kurmak için sermayeye ihtiyaç duyarsınız.' },
  { id: 1890, topic: 'Finans ve Ekonomi (A2)',   en: 'wealth',       tr: 'servet',            type: 'noun', exampleEn: 'Education is a form of wealth.',                    exampleTr: 'Eğitim bir servet biçimidir.' },
  { id: 1891, topic: 'Finans ve Ekonomi (A2)',   en: 'export',       tr: 'ihracat',           type: 'noun', exampleEn: 'Car exports rose by twenty percent last year.',      exampleTr: 'Araç ihracatı geçen yıl yüzde yirmi arttı.' },
  { id: 1892, topic: 'Finans ve Ekonomi (A2)',   en: 'import',       tr: 'ithalat',           type: 'noun', exampleEn: 'The country relies on food imports.',               exampleTr: 'Ülke gıda ithalatına bağımlıdır.' },
  { id: 1893, topic: 'Finans ve Ekonomi (A2)',   en: 'trade',        tr: 'ticaret',           type: 'noun', exampleEn: 'International trade benefits all countries.',        exampleTr: 'Uluslararası ticaret tüm ülkelere fayda sağlar.' },
  { id: 1894, topic: 'Finans ve Ekonomi (A2)',   en: 'asset',        tr: 'varlık',            type: 'noun', exampleEn: 'Property is one of the most valuable assets.',      exampleTr: 'Gayrimenkul en değerli varlıklardan biridir.' },
  { id: 1895, topic: 'Finans ve Ekonomi (A2)',   en: 'equity',       tr: 'özkaynak',          type: 'noun', exampleEn: 'She owns forty percent equity in the company.',      exampleTr: 'Şirkette yüzde kırk oranında özkaynağa sahip.' },
  { id: 1896, topic: 'Finans ve Ekonomi (A2)',   en: 'valuation',    tr: 'değerleme',         type: 'noun', exampleEn: 'The startup received a high valuation this year.',   exampleTr: 'Girişim bu yıl yüksek bir değerleme aldı.' },
  { id: 1897, topic: 'Finans ve Ekonomi (A2)',   en: 'portfolio',    tr: 'portföy',           type: 'noun', exampleEn: 'A diverse portfolio reduces financial risk.',         exampleTr: 'Çeşitlendirilmiş bir portföy finansal riski azaltır.' },
  { id: 1898, topic: 'Finans ve Ekonomi (A2)',   en: 'grant',        tr: 'hibe',              type: 'noun', exampleEn: 'She received a grant to fund her research.',         exampleTr: 'Araştırmasını finanse etmek için hibe aldı.' },
  { id: 1899, topic: 'Finans ve Ekonomi (A2)',   en: 'allocation',   tr: 'tahsis',            type: 'noun', exampleEn: 'The budget allocation for health was increased.',    exampleTr: 'Sağlık için bütçe tahsisi artırıldı.' },
  { id: 1900, topic: 'Finans ve Ekonomi (A2)',   en: 'repayment',    tr: 'geri ödeme',        type: 'noun', exampleEn: 'Monthly repayment of the loan is five hundred euros.', exampleTr: 'Aylık kredi geri ödemesi beş yüz eurodur.' },
  { id: 1901, topic: 'Finans ve Ekonomi (A2)',   en: 'borrowing',    tr: 'borçlanma',         type: 'noun', exampleEn: 'Government borrowing increased during the crisis.',  exampleTr: 'Kriz döneminde devlet borçlanması arttı.' },
  { id: 1902, topic: 'Finans ve Ekonomi (A2)',   en: 'wages',        tr: 'ücretler',          type: 'noun', exampleEn: 'Wages in the tech sector are rising fast.',          exampleTr: 'Teknoloji sektöründe ücretler hızla artıyor.' },
  { id: 1903, topic: 'Finans ve Ekonomi (A2)',   en: 'treasury',     tr: 'hazine',            type: 'noun', exampleEn: 'The treasury released its annual budget report.',    exampleTr: 'Hazine yıllık bütçe raporunu yayımladı.' },
  { id: 1904, topic: 'Finans ve Ekonomi (A2)',   en: 'markup',       tr: 'kar marjı',         type: 'noun', exampleEn: 'A high markup increases profit per item sold.',      exampleTr: 'Yüksek kar marjı satılan her üründen elde edilen karı artırır.' },
  { id: 1905, topic: 'Finans ve Ekonomi (A2)',   en: 'overhead',     tr: 'genel giderler',    type: 'noun', exampleEn: 'Rent and utilities are part of the overhead.',       exampleTr: 'Kira ve faturalar genel giderlerin bir parçasıdır.' },

  // ── Hukuk ve Yargı (A2) — 1906-1925 ──────────────────────────────────────
  { id: 1906, topic: 'Hukuk ve Yargı (A2)',      en: 'lawsuit',      tr: 'dava',              type: 'noun', exampleEn: 'She filed a lawsuit against her former employer.',   exampleTr: 'Eski işverenine karşı dava açtı.' },
  { id: 1907, topic: 'Hukuk ve Yargı (A2)',      en: 'plaintiff',    tr: 'davacı',            type: 'noun', exampleEn: 'The plaintiff must prove their claims in court.',    exampleTr: 'Davacı, iddialarını mahkemede kanıtlamak zorundadır.' },
  { id: 1908, topic: 'Hukuk ve Yargı (A2)',      en: 'defendant',    tr: 'davalı',            type: 'noun', exampleEn: 'The defendant denied all the charges.',             exampleTr: 'Davalı tüm suçlamaları reddetti.' },
  { id: 1909, topic: 'Hukuk ve Yargı (A2)',      en: 'statute',      tr: 'kanun maddesi',     type: 'noun', exampleEn: 'The statute clearly defines this offence.',          exampleTr: 'Kanun maddesi bu suçu açıkça tanımlamaktadır.' },
  { id: 1910, topic: 'Hukuk ve Yargı (A2)',      en: 'regulation',   tr: 'yönetmelik',        type: 'noun', exampleEn: 'New safety regulations came into force last year.',  exampleTr: 'Yeni güvenlik yönetmelikleri geçen yıl yürürlüğe girdi.' },
  { id: 1911, topic: 'Hukuk ve Yargı (A2)',      en: 'enforcement',  tr: 'uygulama',          type: 'noun', exampleEn: 'Enforcement of traffic laws has increased.',         exampleTr: 'Trafik yasalarının uygulanması artırıldı.' },
  { id: 1912, topic: 'Hukuk ve Yargı (A2)',      en: 'jurisdiction', tr: 'yetki alanı',       type: 'noun', exampleEn: 'This case falls under federal jurisdiction.',         exampleTr: 'Bu dava federal yetki alanına girer.' },
  { id: 1913, topic: 'Hukuk ve Yargı (A2)',      en: 'testimony',    tr: 'ifade',             type: 'noun', exampleEn: 'Her testimony was crucial to the trial.',            exampleTr: 'İfadesi yargılama için çok önemliydi.' },
  { id: 1914, topic: 'Hukuk ve Yargı (A2)',      en: 'jury',         tr: 'jüri',              type: 'noun', exampleEn: 'The jury deliberated for two days.',                 exampleTr: 'Jüri iki gün müzakere etti.' },
  { id: 1915, topic: 'Hukuk ve Yargı (A2)',      en: 'prosecute',    tr: 'kovuşturmak',       type: 'verb', exampleEn: 'The state decided to prosecute the suspect.',        exampleTr: 'Devlet şüpheliyi kovuşturmaya karar verdi.' },
  { id: 1916, topic: 'Hukuk ve Yargı (A2)',      en: 'acquit',       tr: 'beraat ettirmek',   type: 'verb', exampleEn: 'The court acquitted him of all charges.',           exampleTr: 'Mahkeme onu tüm suçlamalardan beraat ettirdi.' },
  { id: 1917, topic: 'Hukuk ve Yargı (A2)',      en: 'convict',      tr: 'mahkum etmek',      type: 'verb', exampleEn: 'He was convicted of fraud last month.',             exampleTr: 'Geçen ay dolandırıcılıktan mahkum edildi.' },
  { id: 1918, topic: 'Hukuk ve Yargı (A2)',      en: 'parole',       tr: 'şartlı tahliye',    type: 'noun', exampleEn: 'He was released on parole after two years.',         exampleTr: 'İki yıl sonra şartlı tahliyeyle serbest bırakıldı.' },
  { id: 1919, topic: 'Hukuk ve Yargı (A2)',      en: 'complaint',    tr: 'şikayet',           type: 'noun', exampleEn: 'She submitted a formal complaint to the police.',    exampleTr: 'Polise resmi bir şikayet dilekçesi verdi.' },
  { id: 1920, topic: 'Hukuk ve Yargı (A2)',      en: 'allegation',   tr: 'iddia',             type: 'noun', exampleEn: 'The allegations against him were never proven.',     exampleTr: 'Ona yönelik iddialar hiçbir zaman kanıtlanamadı.' },
  { id: 1921, topic: 'Hukuk ve Yargı (A2)',      en: 'breach',       tr: 'ihlal',             type: 'noun', exampleEn: 'A breach of contract can lead to legal action.',     exampleTr: 'Sözleşme ihlali hukuki işleme yol açabilir.' },
  { id: 1922, topic: 'Hukuk ve Yargı (A2)',      en: 'tort',         tr: 'haksız fiil',       type: 'noun', exampleEn: 'Negligence is a common type of tort.',              exampleTr: 'İhmal yaygın bir haksız fiil türüdür.' },
  { id: 1923, topic: 'Hukuk ve Yargı (A2)',      en: 'clause',       tr: 'madde',             type: 'noun', exampleEn: 'Read every clause before signing the agreement.',   exampleTr: 'Sözleşmeyi imzalamadan önce her maddeyi okuyun.' },
  { id: 1924, topic: 'Hukuk ve Yargı (A2)',      en: 'obligation',   tr: 'yükümlülük',        type: 'noun', exampleEn: 'You have a legal obligation to pay your taxes.',     exampleTr: 'Verginizi ödeme konusunda yasal yükümlülüğünüz var.' },
  { id: 1925, topic: 'Hukuk ve Yargı (A2)',      en: 'infringe',     tr: 'ihlal etmek',       type: 'verb', exampleEn: 'Using that logo would infringe copyright.',          exampleTr: 'O logoyu kullanmak telif hakkını ihlal eder.' },

  // ── Pazarlama ve Reklam (A2) — 1926-1945 ─────────────────────────────────
  { id: 1926, topic: 'Pazarlama ve Reklam (A2)', en: 'demographics', tr: 'demografik yapı',   type: 'noun', exampleEn: 'The demographics of the city changed over ten years.', exampleTr: 'Şehrin demografik yapısı on yılda değişti.' },
  { id: 1927, topic: 'Pazarlama ve Reklam (A2)', en: 'segmentation', tr: 'segmentasyon',      type: 'noun', exampleEn: 'Market segmentation helps target the right customers.', exampleTr: 'Pazar segmentasyonu doğru müşterilere ulaşmayı sağlar.' },
  { id: 1928, topic: 'Pazarlama ve Reklam (A2)', en: 'positioning',  tr: 'konumlandırma',     type: 'noun', exampleEn: 'Brand positioning sets you apart from rivals.',       exampleTr: 'Marka konumlandırma sizi rakiplerden ayırır.' },
  { id: 1929, topic: 'Pazarlama ve Reklam (A2)', en: 'branding',     tr: 'markalaşma',        type: 'noun', exampleEn: 'Strong branding builds customer loyalty.',           exampleTr: 'Güçlü markalaşma müşteri sadakati oluşturur.' },
  { id: 1930, topic: 'Pazarlama ve Reklam (A2)', en: 'identity',     tr: 'kimlik',            type: 'noun', exampleEn: 'Visual identity includes colours, fonts and logos.',  exampleTr: 'Görsel kimlik renkleri, yazı tiplerini ve logoları kapsar.' },
  { id: 1931, topic: 'Pazarlama ve Reklam (A2)', en: 'engagement',   tr: 'etkileşim',         type: 'noun', exampleEn: 'High engagement means people interact with your posts.', exampleTr: 'Yüksek etkileşim insanların gönderilerinizle ilgilendiği anlamına gelir.' },
  { id: 1932, topic: 'Pazarlama ve Reklam (A2)', en: 'conversion',   tr: 'dönüşüm',           type: 'noun', exampleEn: 'Conversion rate shows how many visitors become buyers.', exampleTr: 'Dönüşüm oranı kaç ziyaretçinin alıcıya dönüştüğünü gösterir.' },
  { id: 1933, topic: 'Pazarlama ve Reklam (A2)', en: 'analytics',    tr: 'analitik',          type: 'noun', exampleEn: 'Analytics tools track website traffic and sales.',    exampleTr: 'Analitik araçlar web sitesi trafiğini ve satışları takip eder.' },
  { id: 1934, topic: 'Pazarlama ve Reklam (A2)', en: 'keyword',      tr: 'anahtar kelime',    type: 'noun', exampleEn: 'Choose the right keyword to rank on search engines.',  exampleTr: 'Arama motorlarında üst sıralara çıkmak için doğru anahtar kelimeyi seçin.' },
  { id: 1935, topic: 'Pazarlama ve Reklam (A2)', en: 'influencer',   tr: 'etki sahibi kişi',  type: 'noun', exampleEn: 'The brand partnered with a popular influencer.',       exampleTr: 'Marka popüler bir etki sahibi kişiyle iş ortaklığı kurdu.' },
  { id: 1936, topic: 'Pazarlama ve Reklam (A2)', en: 'affiliate',    tr: 'ortak',             type: 'noun', exampleEn: 'Affiliate marketing rewards partners for each sale.',  exampleTr: 'Ortaklık pazarlaması her satış için ortakları ödüllendirir.' },
  { id: 1937, topic: 'Pazarlama ve Reklam (A2)', en: 'testimonial',  tr: 'müşteri yorumu',    type: 'noun', exampleEn: 'Customer testimonials build trust in a product.',     exampleTr: 'Müşteri yorumları bir ürüne olan güveni artırır.' },
  { id: 1938, topic: 'Pazarlama ve Reklam (A2)', en: 'endorsement',  tr: 'onay',              type: 'noun', exampleEn: 'A celebrity endorsement can boost product sales.',    exampleTr: 'Ünlü bir kişinin onayı ürün satışlarını artırabilir.' },
  { id: 1939, topic: 'Pazarlama ve Reklam (A2)', en: 'niche',        tr: 'niş',               type: 'noun', exampleEn: 'They found a niche in the healthy snack market.',     exampleTr: 'Sağlıklı atıştırmalık pazarında bir niş buldular.' },
  { id: 1940, topic: 'Pazarlama ve Reklam (A2)', en: 'persona',      tr: 'hedef müşteri profili', type: 'noun', exampleEn: 'Create a buyer persona to understand your customers.', exampleTr: 'Müşterilerinizi anlamak için hedef müşteri profili oluşturun.' },
  { id: 1941, topic: 'Pazarlama ve Reklam (A2)', en: 'outreach',     tr: 'dış erişim',        type: 'noun', exampleEn: 'Email outreach is used to build new partnerships.',   exampleTr: 'E-posta dış erişimi yeni ortaklıklar kurmak için kullanılır.' },
  { id: 1942, topic: 'Pazarlama ve Reklam (A2)', en: 'prospecting',  tr: 'potansiyel müşteri arama', type: 'noun', exampleEn: 'Sales prospecting finds potential new customers.',  exampleTr: 'Satış amaçlı potansiyel müşteri araması yeni alıcılar bulmayı sağlar.' },
  { id: 1943, topic: 'Pazarlama ve Reklam (A2)', en: 'referral',     tr: 'tavsiye',           type: 'noun', exampleEn: 'Many customers come to us through referral.',         exampleTr: 'Birçok müşteri tavsiye yoluyla bize geliyor.' },
  { id: 1944, topic: 'Pazarlama ve Reklam (A2)', en: 'retention',    tr: 'müşteri tutma',     type: 'noun', exampleEn: 'Customer retention is cheaper than finding new ones.',  exampleTr: 'Müşteri tutmak yeni müşteri bulmaktan daha ucuzdur.' },
  { id: 1945, topic: 'Pazarlama ve Reklam (A2)', en: 'targeting',    tr: 'hedefleme',         type: 'noun', exampleEn: 'Precise targeting reduces wasted advertising spend.',  exampleTr: 'Hassas hedefleme boşa harcanan reklam bütçesini azaltır.' },

  // ── İnsan Kaynakları (A2) — 1946-1965 ────────────────────────────────────
  { id: 1946, topic: 'İnsan Kaynakları (A2)',    en: 'appraisal',    tr: 'performans değerlendirmesi', type: 'noun', exampleEn: 'Her annual appraisal was very positive.',       exampleTr: 'Yıllık performans değerlendirmesi çok olumlu geçti.' },
  { id: 1947, topic: 'İnsan Kaynakları (A2)',    en: 'absenteeism',  tr: 'devamsızlık sorunu', type: 'noun', exampleEn: 'High absenteeism reduces team productivity.',        exampleTr: 'Yüksek devamsızlık ekip verimliliğini düşürür.' },
  { id: 1948, topic: 'İnsan Kaynakları (A2)',    en: 'burnout',      tr: 'tükenmişlik',       type: 'noun', exampleEn: 'Long working hours can lead to burnout.',            exampleTr: 'Uzun çalışma saatleri tükenmişliğe yol açabilir.' },
  { id: 1949, topic: 'İnsan Kaynakları (A2)',    en: 'wellbeing',    tr: 'refah',             type: 'noun', exampleEn: 'The company invests in employee wellbeing.',          exampleTr: 'Şirket çalışan refahına yatırım yapıyor.' },
  { id: 1950, topic: 'İnsan Kaynakları (A2)',    en: 'onboarding',   tr: 'işe alım süreci',   type: 'noun', exampleEn: 'A smooth onboarding helps new hires settle in fast.', exampleTr: 'Sorunsuz bir işe alım süreci yeni çalışanların hızlı uyum sağlamasını kolaylaştırır.' },
  { id: 1951, topic: 'İnsan Kaynakları (A2)',    en: 'seniority',    tr: 'kıdem',             type: 'noun', exampleEn: 'Pay often increases with seniority.',               exampleTr: 'Maaş genellikle kıdemle birlikte artar.' },
  { id: 1952, topic: 'İnsan Kaynakları (A2)',    en: 'demotion',     tr: 'rütbe düşürme',     type: 'noun', exampleEn: 'He faced demotion after the poor results.',          exampleTr: 'Kötü sonuçların ardından rütbe düşürmeyle karşılaştı.' },
  { id: 1953, topic: 'İnsan Kaynakları (A2)',    en: 'reinstatement',tr: 'göreve iade',       type: 'noun', exampleEn: 'The court ordered his reinstatement to the post.',   exampleTr: 'Mahkeme görevine iadesine hükmetti.' },
  { id: 1954, topic: 'İnsan Kaynakları (A2)',    en: 'whistleblower',tr: 'ihbarcı',           type: 'noun', exampleEn: 'The whistleblower reported the fraud anonymously.',   exampleTr: 'İhbarcı dolandırıcılığı anonim olarak bildirdi.' },
  { id: 1955, topic: 'İnsan Kaynakları (A2)',    en: 'remuneration', tr: 'ücretlendirme',     type: 'noun', exampleEn: 'Remuneration includes salary, bonus and benefits.',   exampleTr: 'Ücretlendirme maaş, ikramiye ve yan hakları kapsar.' },
  { id: 1956, topic: 'İnsan Kaynakları (A2)',    en: 'outplacement', tr: 'iş bulma desteği',  type: 'noun', exampleEn: 'The company offered outplacement to laid-off staff.', exampleTr: 'Şirket işten çıkarılan personele iş bulma desteği sağladı.' },
  { id: 1957, topic: 'İnsan Kaynakları (A2)',    en: 'competency',   tr: 'yetkinlik',         type: 'noun', exampleEn: 'Leadership is a key competency for managers.',        exampleTr: 'Liderlik, yöneticiler için temel bir yetkinliktir.' },
  { id: 1958, topic: 'İnsan Kaynakları (A2)',    en: 'induction',    tr: 'göreve başlatma',   type: 'noun', exampleEn: 'The induction programme lasts two weeks.',           exampleTr: 'Göreve başlatma programı iki hafta sürer.' },
  { id: 1959, topic: 'İnsan Kaynakları (A2)',    en: 'secondment',   tr: 'geçici görevlendirme', type: 'noun', exampleEn: 'She went on a secondment to the Paris office.',   exampleTr: 'Paris ofisine geçici görevlendirme ile gitti.' },
  { id: 1960, topic: 'İnsan Kaynakları (A2)',    en: 'headcount',    tr: 'toplam çalışan sayısı', type: 'noun', exampleEn: 'The headcount increased by fifty this quarter.',  exampleTr: 'Bu çeyrekte toplam çalışan sayısı elliye arttı.' },
  { id: 1961, topic: 'İnsan Kaynakları (A2)',    en: 'collective',   tr: 'toplu',             type: 'adj',  exampleEn: 'A collective agreement sets wages for all workers.', exampleTr: 'Toplu sözleşme tüm işçilerin ücretlerini belirler.' },
  { id: 1962, topic: 'İnsan Kaynakları (A2)',    en: 'labor',        tr: 'emek',              type: 'noun', exampleEn: 'Labor costs have risen significantly this year.',     exampleTr: 'Emek maliyetleri bu yıl önemli ölçüde arttı.' },
  { id: 1963, topic: 'İnsan Kaynakları (A2)',    en: 'morale',       tr: 'moral',             type: 'noun', exampleEn: 'Good leadership keeps employee morale high.',        exampleTr: 'İyi liderlik çalışan moralini yüksek tutar.' },
  { id: 1964, topic: 'İnsan Kaynakları (A2)',    en: 'motivation',   tr: 'motivasyon',        type: 'noun', exampleEn: 'Clear goals increase motivation at work.',           exampleTr: 'Net hedefler işteki motivasyonu artırır.' },
  { id: 1965, topic: 'İnsan Kaynakları (A2)',    en: 'parental',     tr: 'ebeveynlik',        type: 'adj',  exampleEn: 'Parental leave can be taken by mothers or fathers.', exampleTr: 'Ebeveynlik izni anneler veya babalar tarafından kullanılabilir.' },
];

// ─── 1. İç tekrar kontrolü ───────────────────────────────────────────────────
const enSet = new Set();
const intDups = [];
for (const w of newWords) {
  const key = w.en.toLowerCase();
  if (enSet.has(key)) intDups.push(w.en);
  else enSet.add(key);
}
if (intDups.length) { console.error('Dahili tekrar:', intDups); process.exit(1); }

// ─── 2. Mevcut + A1 kelimeleriyle çakışma kontrolü ──────────────────────────
const crossDups = newWords.filter(w => usedEN.has(w.en.toLowerCase())).map(w => w.en);
if (crossDups.length) { console.error('Çakışma:', crossDups); process.exit(1); }

// ─── 3. ID kontrolü ──────────────────────────────────────────────────────────
const ids = newWords.map(w => w.id);
if (Math.min(...ids) !== 1866 || Math.max(...ids) !== 1965 || ids.length !== 100) {
  console.error(`ID hatalı: min=${Math.min(...ids)} max=${Math.max(...ids)} count=${ids.length}`);
  process.exit(1);
}

// ─── 4. JSON dosyasına yaz ───────────────────────────────────────────────────
fs.writeFileSync(OUT_PATH, JSON.stringify(newWords, null, 2), 'utf8');
console.log(`Tamam! ${newWords.length} kelime → ${OUT_PATH}`);
