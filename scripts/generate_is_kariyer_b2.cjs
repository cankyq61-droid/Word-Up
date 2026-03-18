'use strict';
const fs   = require('fs');
const path = require('path');

const WORDS_PATH = path.join(__dirname, '..', 'src', 'data', 'words.json');
const A1_PATH    = path.join(__dirname, 'is_kariyer_a1.json');
const A2_PATH    = path.join(__dirname, 'is_kariyer_a2.json');
const B1_PATH    = path.join(__dirname, 'is_kariyer_b1.json');
const OUT_PATH   = path.join(__dirname, 'is_kariyer_b2.json');

const existing   = JSON.parse(fs.readFileSync(WORDS_PATH, 'utf8'));
const a1Words    = JSON.parse(fs.readFileSync(A1_PATH, 'utf8'));
const a2Words    = JSON.parse(fs.readFileSync(A2_PATH, 'utf8'));
const b1Words    = JSON.parse(fs.readFileSync(B1_PATH, 'utf8'));
const usedEN     = new Set([...existing, ...a1Words, ...a2Words, ...b1Words].map(w => w.en.toLowerCase()));

// ─── 5 konu × 20 kelime = 100 giriş, ID 2066-2165 ───────────────────────────
const newWords = [

  // ── İş ve Kariyer (B2) — 2066-2085 ────────────────────────────────────────
  { id: 2066, topic: 'İş ve Kariyer (B2)',       en: 'fiduciary',        tr: 'güvene dayalı',              type: 'adj',  exampleEn: 'Directors have a fiduciary duty to act in the firm\'s interest.', exampleTr: 'Yöneticilerin firmanın çıkarı doğrultusunda hareket etme konusunda güvene dayalı görevi vardır.' },
  { id: 2067, topic: 'İş ve Kariyer (B2)',       en: 'insolvency',       tr: 'ödeme acizliği',             type: 'noun', exampleEn: 'The company declared insolvency after losing its main client.', exampleTr: 'Şirket ana müşterisini kaybettikten sonra ödeme acizliği ilan etti.' },
  { id: 2068, topic: 'İş ve Kariyer (B2)',       en: 'divestiture',      tr: 'varlık satışı',              type: 'noun', exampleEn: 'The divestiture of non-core assets raised fresh capital.',     exampleTr: 'Temel olmayan varlıkların satışı taze sermaye sağladı.' },
  { id: 2069, topic: 'İş ve Kariyer (B2)',       en: 'synergy',          tr: 'sinerji',                    type: 'noun', exampleEn: 'The merger created synergy between the two research teams.',  exampleTr: 'Birleşme iki araştırma ekibi arasında sinerji yarattı.' },
  { id: 2070, topic: 'İş ve Kariyer (B2)',       en: 'paradigm',         tr: 'paradigma',                  type: 'noun', exampleEn: 'Remote work represents a paradigm shift in office culture.',  exampleTr: 'Uzaktan çalışma, ofis kültüründe bir paradigma dönüşümünü temsil eder.' },
  { id: 2071, topic: 'İş ve Kariyer (B2)',       en: 'retrenchment',     tr: 'bütçe kısıtması',            type: 'noun', exampleEn: 'The recession forced widespread retrenchment across sectors.', exampleTr: 'Durgunluk sektörler genelinde yaygın bütçe kısıtmasını zorunlu kıldı.' },
  { id: 2072, topic: 'İş ve Kariyer (B2)',       en: 'downsizing',       tr: 'küçülme',                    type: 'noun', exampleEn: 'Downsizing reduced the workforce by thirty percent.',         exampleTr: 'Küçülme iş gücünü yüzde otuz azalttı.' },
  { id: 2073, topic: 'İş ve Kariyer (B2)',       en: 'offshoring',       tr: 'yurt dışına taşıma',         type: 'noun', exampleEn: 'Offshoring production to lower-cost countries is controversial.', exampleTr: 'Üretimi daha düşük maliyetli ülkelere taşımak tartışmalıdır.' },
  { id: 2074, topic: 'İş ve Kariyer (B2)',       en: 'monetization',     tr: 'gelire çevirme',             type: 'noun', exampleEn: 'Monetization of data is a growing business model.',          exampleTr: 'Veriyi gelire çevirme büyüyen bir iş modelidir.' },
  { id: 2075, topic: 'İş ve Kariyer (B2)',       en: 'intrapreneurship', tr: 'kurumsal girişimcilik',      type: 'noun', exampleEn: 'Intrapreneurship encourages innovation within large companies.', exampleTr: 'Kurumsal girişimcilik büyük şirketlerde inovasyonu teşvik eder.' },
  { id: 2076, topic: 'İş ve Kariyer (B2)',       en: 'crowdsourcing',    tr: 'kitle kaynak kullanımı',     type: 'noun', exampleEn: 'Crowdsourcing gathers ideas from a large online community.',   exampleTr: 'Kitle kaynak kullanımı büyük bir çevrimiçi topluluktan fikirler toplar.' },
  { id: 2077, topic: 'İş ve Kariyer (B2)',       en: 'headhunting',      tr: 'nitelikli eleman avcılığı', type: 'noun', exampleEn: 'Headhunting firms find senior executives for top companies.',  exampleTr: 'Nitelikli eleman avcılığı firmaları büyük şirketler için üst düzey yöneticiler bulur.' },
  { id: 2078, topic: 'İş ve Kariyer (B2)',       en: 'micromanagement',  tr: 'aşırı denetim',             type: 'noun', exampleEn: 'Micromanagement lowers morale and reduces autonomy.',         exampleTr: 'Aşırı denetim morali düşürür ve özerkliği azaltır.' },
  { id: 2079, topic: 'İş ve Kariyer (B2)',       en: 'entrepreneurial',  tr: 'girişimci ruhlu',           type: 'adj',  exampleEn: 'An entrepreneurial mindset is valued in start-up culture.',  exampleTr: 'Girişimci ruhlu bir zihniyet girişim kültüründe değer görür.' },
  { id: 2080, topic: 'İş ve Kariyer (B2)',       en: 'empowerment',      tr: 'güçlendirme',               type: 'noun', exampleEn: 'Employee empowerment leads to higher engagement.',          exampleTr: 'Çalışan güçlendirmesi daha yüksek bağlılığa yol açar.' },
  { id: 2081, topic: 'İş ve Kariyer (B2)',       en: 'visionary',        tr: 'vizyoner',                  type: 'adj',  exampleEn: 'The visionary CEO transformed the entire industry.',         exampleTr: 'Vizyoner genel müdür tüm sektörü dönüştürdü.' },
  { id: 2082, topic: 'İş ve Kariyer (B2)',       en: 'meritocracy',      tr: 'liyakat sistemi',           type: 'noun', exampleEn: 'A meritocracy rewards talent and hard work above all.',      exampleTr: 'Liyakat sistemi her şeyden önce yeteneği ve çok çalışmayı ödüllendirir.' },
  { id: 2083, topic: 'İş ve Kariyer (B2)',       en: 'bureaucracy',      tr: 'bürokrasi',                 type: 'noun', exampleEn: 'Excessive bureaucracy slows down decision-making.',          exampleTr: 'Aşırı bürokrasi karar almayı yavaşlatır.' },
  { id: 2084, topic: 'İş ve Kariyer (B2)',       en: 'attrition',        tr: 'doğal eleman kaybı',        type: 'noun', exampleEn: 'Attrition reduced headcount without any redundancies.',      exampleTr: 'Doğal eleman kaybı işten çıkarma olmaksızın çalışan sayısını azalttı.' },
  { id: 2085, topic: 'İş ve Kariyer (B2)',       en: 'decentralization', tr: 'ademi merkeziyetçilik',     type: 'noun', exampleEn: 'Decentralization gives regional offices more autonomy.',      exampleTr: 'Ademi merkeziyetçilik bölge ofislerine daha fazla özerklik tanır.' },

  // ── Finans ve Ekonomi (B2) — 2086-2105 ────────────────────────────────────
  { id: 2086, topic: 'Finans ve Ekonomi (B2)',   en: 'stagflation',      tr: 'stagflasyon',               type: 'noun', exampleEn: 'Stagflation combines stagnant growth with high inflation.',  exampleTr: 'Stagflasyon durgun büyümeyi yüksek enflasyonla birleştirir.' },
  { id: 2087, topic: 'Finans ve Ekonomi (B2)',   en: 'neoliberal',       tr: 'neoliberal',                type: 'adj',  exampleEn: 'Neoliberal policies promote free markets and privatization.', exampleTr: 'Neoliberal politikalar serbest piyasaları ve özelleştirmeyi teşvik eder.' },
  { id: 2088, topic: 'Finans ve Ekonomi (B2)',   en: 'financialization', tr: 'finansallaşma',             type: 'noun', exampleEn: 'Financialization shifted focus from production to profit.',   exampleTr: 'Finansallaşma odağı üretimden kara kaydırdı.' },
  { id: 2089, topic: 'Finans ve Ekonomi (B2)',   en: 'cryptocurrency',   tr: 'kripto para',               type: 'noun', exampleEn: 'Cryptocurrency operates outside of central bank control.',   exampleTr: 'Kripto para merkez bankası denetimi dışında işlem görür.' },
  { id: 2090, topic: 'Finans ve Ekonomi (B2)',   en: 'disinflation',     tr: 'dezenflasyon',              type: 'noun', exampleEn: 'Disinflation is a slowing of the rate of price increases.',  exampleTr: 'Dezenflasyon fiyat artış hızının yavaşlamasıdır.' },
  { id: 2091, topic: 'Finans ve Ekonomi (B2)',   en: 'hyperinflation',   tr: 'hiperenflasyon',            type: 'noun', exampleEn: 'Hyperinflation can destroy a country\'s entire savings.',     exampleTr: 'Hiperenflasyon bir ülkenin tüm birikimlerini yok edebilir.' },
  { id: 2092, topic: 'Finans ve Ekonomi (B2)',   en: 'contagion',        tr: 'bulaşma etkisi',            type: 'noun', exampleEn: 'Financial contagion spread from one market to another.',     exampleTr: 'Finansal bulaşma bir piyasadan diğerine yayıldı.' },
  { id: 2093, topic: 'Finans ve Ekonomi (B2)',   en: 'bailout',          tr: 'kurtarma paketi',           type: 'noun', exampleEn: 'The government provided a bailout to save the failing bank.', exampleTr: 'Hükümet batmakta olan bankayı kurtarmak için bir kurtarma paketi sağladı.' },
  { id: 2094, topic: 'Finans ve Ekonomi (B2)',   en: 'regulatory',       tr: 'düzenleyici',               type: 'adj',  exampleEn: 'New regulatory frameworks aim to prevent financial crises.', exampleTr: 'Yeni düzenleyici çerçeveler finansal krizleri önlemeyi amaçlar.' },
  { id: 2095, topic: 'Finans ve Ekonomi (B2)',   en: 'sovereign',        tr: 'egemen',                    type: 'adj',  exampleEn: 'Sovereign debt refers to money borrowed by a government.',  exampleTr: 'Egemen borç, bir hükümetin borç aldığı parayı ifade eder.' },
  { id: 2096, topic: 'Finans ve Ekonomi (B2)',   en: 'actuarial',        tr: 'aktüeryal',                 type: 'adj',  exampleEn: 'Actuarial calculations determine insurance premiums.',       exampleTr: 'Aktüeryal hesaplamalar sigorta primlerini belirler.' },
  { id: 2097, topic: 'Finans ve Ekonomi (B2)',   en: 'monetarism',       tr: 'monetarizm',                type: 'noun', exampleEn: 'Monetarism argues that controlling money supply is key.',    exampleTr: 'Monetarizm para arzının kontrolünün anahtar olduğunu savunur.' },
  { id: 2098, topic: 'Finans ve Ekonomi (B2)',   en: 'mercantilism',     tr: 'merkantilizm',              type: 'noun', exampleEn: 'Mercantilism favoured exports over imports to build wealth.', exampleTr: 'Merkantilizm servet biriktirmek için ihracatı ithalata tercih etti.' },
  { id: 2099, topic: 'Finans ve Ekonomi (B2)',   en: 'protectionism',    tr: 'korumacılık',               type: 'noun', exampleEn: 'Protectionism shields domestic industries from foreign rivals.', exampleTr: 'Korumacılık yerli sektörleri yabancı rakiplerden korur.' },
  { id: 2100, topic: 'Finans ve Ekonomi (B2)',   en: 'deflation',        tr: 'deflasyon',                 type: 'noun', exampleEn: 'Deflation can cause consumers to delay purchases.',          exampleTr: 'Deflasyon tüketicilerin satın almalarını ertelemesine neden olabilir.' },
  { id: 2101, topic: 'Finans ve Ekonomi (B2)',   en: 'deregulation',     tr: 'kuralsızlaştırma',          type: 'noun', exampleEn: 'Deregulation of the energy sector increased competition.',   exampleTr: 'Enerji sektörünün kuralsızlaştırılması rekabeti artırdı.' },
  { id: 2102, topic: 'Finans ve Ekonomi (B2)',   en: 'liberalization',   tr: 'liberalizasyon',            type: 'noun', exampleEn: 'Trade liberalization opened new export markets.',            exampleTr: 'Ticaret liberalizasyonu yeni ihracat pazarları açtı.' },
  { id: 2103, topic: 'Finans ve Ekonomi (B2)',   en: 'globalization',    tr: 'küreselleşme',              type: 'noun', exampleEn: 'Globalization has connected economies around the world.',    exampleTr: 'Küreselleşme dünya genelindeki ekonomileri birbirine bağlamıştır.' },
  { id: 2104, topic: 'Finans ve Ekonomi (B2)',   en: 'crowdfunding',     tr: 'kitle fonlaması',           type: 'noun', exampleEn: 'Crowdfunding raised half a million for the new product.',    exampleTr: 'Kitle fonlaması yeni ürün için yarım milyon topladı.' },
  { id: 2105, topic: 'Finans ve Ekonomi (B2)',   en: 'foreclosure',      tr: 'haciz',                     type: 'noun', exampleEn: 'The bank started foreclosure proceedings on the property.',  exampleTr: 'Banka mülk üzerinde haciz işlemlerini başlattı.' },

  // ── Hukuk ve Yargı (B2) — 2106-2125 ──────────────────────────────────────
  { id: 2106, topic: 'Hukuk ve Yargı (B2)',      en: 'jurisprudence',    tr: 'hukuk bilimi',              type: 'noun', exampleEn: 'Jurisprudence examines the theory and philosophy of law.',   exampleTr: 'Hukuk bilimi hukukun teorisini ve felsefesini inceler.' },
  { id: 2107, topic: 'Hukuk ve Yargı (B2)',      en: 'promulgation',     tr: 'resmi ilan',                type: 'noun', exampleEn: 'Promulgation of the new law was delayed by the senate.',    exampleTr: 'Yeni yasanın resmi ilanı senato tarafından ertelendi.' },
  { id: 2108, topic: 'Hukuk ve Yargı (B2)',      en: 'adjudication',     tr: 'yargısal karara bağlama',   type: 'noun', exampleEn: 'Adjudication of the dispute took over two years.',          exampleTr: 'Anlaşmazlığın yargısal karara bağlanması iki yıldan fazla sürdü.' },
  { id: 2109, topic: 'Hukuk ve Yargı (B2)',      en: 'culpability',      tr: 'suçluluk derecesi',         type: 'noun', exampleEn: 'The court assessed the culpability of each defendant.',      exampleTr: 'Mahkeme her davalının suçluluk derecesini değerlendirdi.' },
  { id: 2110, topic: 'Hukuk ve Yargı (B2)',      en: 'recidivism',       tr: 'suç tekrarı',               type: 'noun', exampleEn: 'High recidivism rates indicate a failing justice system.',   exampleTr: 'Yüksek suç tekrarı oranları başarısız bir adalet sistemine işaret eder.' },
  { id: 2111, topic: 'Hukuk ve Yargı (B2)',      en: 'felony',           tr: 'ağır suç',                  type: 'noun', exampleEn: 'Armed robbery is classified as a felony.',                  exampleTr: 'Silahlı soygun ağır suç olarak sınıflandırılır.' },
  { id: 2112, topic: 'Hukuk ve Yargı (B2)',      en: 'misdemeanor',      tr: 'hafif suç',                 type: 'noun', exampleEn: 'Petty theft is usually treated as a misdemeanor.',          exampleTr: 'Küçük hırsızlık genellikle hafif suç olarak değerlendirilir.' },
  { id: 2113, topic: 'Hukuk ve Yargı (B2)',      en: 'restitution',      tr: 'tazminat',                  type: 'noun', exampleEn: 'The court ordered full restitution to the victims.',        exampleTr: 'Mahkeme mağdurlara tam tazminat ödenmesine hükmetti.' },
  { id: 2114, topic: 'Hukuk ve Yargı (B2)',      en: 'expropriation',    tr: 'kamulaştırma',              type: 'noun', exampleEn: 'Expropriation of private land requires fair compensation.',  exampleTr: 'Özel arazinin kamulaştırılması adil tazminat gerektirir.' },
  { id: 2115, topic: 'Hukuk ve Yargı (B2)',      en: 'codification',     tr: 'kanunlaştırma',             type: 'noun', exampleEn: 'Codification of common law made it easier to apply.',       exampleTr: 'Teamül hukukunun kanunlaştırılması uygulamayı kolaylaştırdı.' },
  { id: 2116, topic: 'Hukuk ve Yargı (B2)',      en: 'ratification',     tr: 'onaylama',                  type: 'noun', exampleEn: 'Ratification of the treaty required a two-thirds majority.', exampleTr: 'Antlaşmanın onaylanması üçte iki çoğunluğu gerektirdi.' },
  { id: 2117, topic: 'Hukuk ve Yargı (B2)',      en: 'abrogation',       tr: 'yürürlükten kaldırma',      type: 'noun', exampleEn: 'Abrogation of the old treaty opened new negotiations.',     exampleTr: 'Eski antlaşmanın yürürlükten kaldırılması yeni müzakereleri başlattı.' },
  { id: 2118, topic: 'Hukuk ve Yargı (B2)',      en: 'interlocutory',    tr: 'geçici karar',              type: 'adj',  exampleEn: 'The interlocutory injunction paused the construction work.', exampleTr: 'Geçici karar niteliğindeki ihtiyati tedbir inşaat çalışmalarını durdurdu.' },
  { id: 2119, topic: 'Hukuk ve Yargı (B2)',      en: 'exculpatory',      tr: 'suçsuzluğu kanıtlayan',     type: 'adj',  exampleEn: 'Exculpatory evidence must be shared with the defence.',     exampleTr: 'Suçsuzluğu kanıtlayan delil savunmayla paylaşılmalıdır.' },
  { id: 2120, topic: 'Hukuk ve Yargı (B2)',      en: 'subrogation',      tr: 'haleflik',                  type: 'noun', exampleEn: 'Subrogation allows insurers to claim costs from third parties.', exampleTr: 'Haleflik sigortacıların üçüncü taraflardan masraf talep etmesine olanak tanır.' },
  { id: 2121, topic: 'Hukuk ve Yargı (B2)',      en: 'lien',             tr: 'haciz hakkı',               type: 'noun', exampleEn: 'The bank placed a lien on the property as security.',       exampleTr: 'Banka mülk üzerine teminat olarak haciz hakkı koydu.' },
  { id: 2122, topic: 'Hukuk ve Yargı (B2)',      en: 'derogation',       tr: 'yetki devri',               type: 'noun', exampleEn: 'A derogation permits a state to opt out of certain rules.',  exampleTr: 'Yetki devri bir devletin belirli kurallardan muaf tutulmasına izin verir.' },
  { id: 2123, topic: 'Hukuk ve Yargı (B2)',      en: 'acquittal',        tr: 'beraat',                    type: 'noun', exampleEn: 'The acquittal was celebrated by his family.',               exampleTr: 'Beraat ailesi tarafından kutlandı.' },
  { id: 2124, topic: 'Hukuk ve Yargı (B2)',      en: 'habeas',           tr: 'kişi güvencesi',            type: 'noun', exampleEn: 'Habeas corpus protects individuals from unlawful detention.', exampleTr: 'Kişi güvencesi hukuku bireyleri hukuka aykırı tutukluluğa karşı korur.' },
  { id: 2125, topic: 'Hukuk ve Yargı (B2)',      en: 'writ',             tr: 'mahkeme emri',              type: 'noun', exampleEn: 'A writ was issued to compel the testimony.',               exampleTr: 'Tanıklığı zorlamak için mahkeme emri çıkarıldı.' },

  // ── Pazarlama ve Reklam (B2) — 2126-2145 ─────────────────────────────────
  { id: 2126, topic: 'Pazarlama ve Reklam (B2)', en: 'neuromarketing',   tr: 'nöropazarlama',             type: 'noun', exampleEn: 'Neuromarketing studies how the brain responds to adverts.',  exampleTr: 'Nöropazarlama beynin reklamlara nasıl tepki verdiğini inceler.' },
  { id: 2127, topic: 'Pazarlama ve Reklam (B2)', en: 'psychographic',    tr: 'psikografik',               type: 'adj',  exampleEn: 'Psychographic profiling goes beyond age and income data.',  exampleTr: 'Psikografik profilleme yaş ve gelir verilerinin ötesine geçer.' },
  { id: 2128, topic: 'Pazarlama ve Reklam (B2)', en: 'gamification',     tr: 'oyunlaştırma',              type: 'noun', exampleEn: 'Gamification adds game elements to boost customer loyalty.', exampleTr: 'Oyunlaştırma müşteri sadakatini artırmak için oyun unsurları ekler.' },
  { id: 2129, topic: 'Pazarlama ve Reklam (B2)', en: 'microtargeting',   tr: 'mikro hedefleme',           type: 'noun', exampleEn: 'Microtargeting delivers ads to very specific audience groups.', exampleTr: 'Mikro hedefleme reklamları çok spesifik kitle gruplarına iletir.' },
  { id: 2130, topic: 'Pazarlama ve Reklam (B2)', en: 'disintermediation',tr: 'aracısız satış',            type: 'noun', exampleEn: 'Disintermediation lets brands sell directly to consumers.',  exampleTr: 'Aracısız satış markaların tüketicilere doğrudan satış yapmasını sağlar.' },
  { id: 2131, topic: 'Pazarlama ve Reklam (B2)', en: 'virality',         tr: 'viral yayılım',             type: 'noun', exampleEn: 'The virality of the campaign exceeded all expectations.',   exampleTr: 'Kampanyanın viral yayılımı tüm beklentileri aştı.' },
  { id: 2132, topic: 'Pazarlama ve Reklam (B2)', en: 'parasocial',       tr: 'tek taraflı ilişki',        type: 'adj',  exampleEn: 'Parasocial bonds with influencers drive purchasing decisions.', exampleTr: 'Etki sahipleriyle tek taraflı ilişkiler satın alma kararlarını etkiler.' },
  { id: 2133, topic: 'Pazarlama ve Reklam (B2)', en: 'astroturfing',     tr: 'sahte kamuoyu oluşturma',   type: 'noun', exampleEn: 'Astroturfing creates a false impression of public support.',  exampleTr: 'Sahte kamuoyu oluşturma, halk desteğine dair yanlış bir izlenim yaratır.' },
  { id: 2134, topic: 'Pazarlama ve Reklam (B2)', en: 'greenwashing',     tr: 'yeşil yıkama',              type: 'noun', exampleEn: 'Greenwashing misleads consumers with false eco-claims.',     exampleTr: 'Yeşil yıkama tüketicileri sahte çevre iddiaları ile yanıltır.' },
  { id: 2135, topic: 'Pazarlama ve Reklam (B2)', en: 'syndication',      tr: 'içerik sendikasyonu',       type: 'noun', exampleEn: 'Content syndication publishes articles on multiple platforms.', exampleTr: 'İçerik sendikasyonu makaleleri birden fazla platformda yayımlar.' },
  { id: 2136, topic: 'Pazarlama ve Reklam (B2)', en: 'curation',         tr: 'içerik derleme',            type: 'noun', exampleEn: 'Content curation selects the best material for your audience.', exampleTr: 'İçerik derleme kitleniz için en iyi materyali seçer.' },
  { id: 2137, topic: 'Pazarlama ve Reklam (B2)', en: 'aggregation',      tr: 'içerik toplama',            type: 'noun', exampleEn: 'News aggregation gathers stories from hundreds of sources.', exampleTr: 'Haber içerik toplama yüzlerce kaynaktan haberleri bir araya getirir.' },
  { id: 2138, topic: 'Pazarlama ve Reklam (B2)', en: 'cobranding',       tr: 'ortak markalama',           type: 'noun', exampleEn: 'Cobranding merges two brands to attract a wider market.',    exampleTr: 'Ortak markalama iki markayı daha geniş bir pazara ulaşmak için birleştirir.' },
  { id: 2139, topic: 'Pazarlama ve Reklam (B2)', en: 'clickbait',        tr: 'tıklama yemi',              type: 'noun', exampleEn: 'Clickbait headlines attract clicks but damage brand trust.',  exampleTr: 'Tıklama yemi başlıkları tıklamaları artırır ancak marka güvenine zarar verir.' },
  { id: 2140, topic: 'Pazarlama ve Reklam (B2)', en: 'storyboard',       tr: 'taslak çizim planı',        type: 'noun', exampleEn: 'The creative team prepared a storyboard for the ad.',       exampleTr: 'Yaratıcı ekip reklam için taslak çizim planı hazırladı.' },
  { id: 2141, topic: 'Pazarlama ve Reklam (B2)', en: 'hyperlocal',       tr: 'hiper yerel',               type: 'adj',  exampleEn: 'Hyperlocal marketing targets specific neighbourhoods.',       exampleTr: 'Hiper yerel pazarlama belirli mahalleleri hedefler.' },
  { id: 2142, topic: 'Pazarlama ve Reklam (B2)', en: 'transmedia',       tr: 'çoklu ortam anlatımı',      type: 'noun', exampleEn: 'Transmedia storytelling spreads a narrative across platforms.', exampleTr: 'Çoklu ortam anlatımı bir hikayeyi platformlara yayar.' },
  { id: 2143, topic: 'Pazarlama ve Reklam (B2)', en: 'subliminal',       tr: 'bilinçaltı',                type: 'adj',  exampleEn: 'Subliminal messaging is banned in many countries.',          exampleTr: 'Bilinçaltı mesajlaşma pek çok ülkede yasaktır.' },
  { id: 2144, topic: 'Pazarlama ve Reklam (B2)', en: 'framing',          tr: 'çerçeveleme',               type: 'noun', exampleEn: 'Framing effects how people interpret a message.',            exampleTr: 'Çerçeveleme insanların bir mesajı nasıl yorumladığını etkiler.' },
  { id: 2145, topic: 'Pazarlama ve Reklam (B2)', en: 'amplification',    tr: 'yayılım güçlendirme',       type: 'noun', exampleEn: 'Paid amplification boosts organic content to new audiences.', exampleTr: 'Ücretli yayılım güçlendirme organik içeriği yeni kitlelere ulaştırır.' },

  // ── İnsan Kaynakları (B2) — 2146-2165 ────────────────────────────────────
  { id: 2146, topic: 'İnsan Kaynakları (B2)',    en: 'psychometric',     tr: 'psikometrik',               type: 'adj',  exampleEn: 'Psychometric tests assess personality and cognitive skills.',exampleTr: 'Psikometrik testler kişilik ve bilişsel becerileri değerlendirir.' },
  { id: 2147, topic: 'İnsan Kaynakları (B2)',    en: 'organizational',   tr: 'örgütsel',                  type: 'adj',  exampleEn: 'Organizational culture defines how a company operates.',    exampleTr: 'Örgütsel kültür bir şirketin nasıl işlediğini tanımlar.' },
  { id: 2148, topic: 'İnsan Kaynakları (B2)',    en: 'benchmarking',     tr: 'kıyaslama',                 type: 'noun', exampleEn: 'Benchmarking compares practices against industry leaders.',  exampleTr: 'Kıyaslama uygulamaları sektör liderleriyle karşılaştırır.' },
  { id: 2149, topic: 'İnsan Kaynakları (B2)',    en: 'whistleblowing',   tr: 'usulsüzlük bildirimi',      type: 'noun', exampleEn: 'Whistleblowing policies protect employees who report wrongdoing.', exampleTr: 'Usulsüzlük bildirimi politikaları haksızlıkları bildiren çalışanları korur.' },
  { id: 2150, topic: 'İnsan Kaynakları (B2)',    en: 'unionization',     tr: 'sendikalaşma',              type: 'noun', exampleEn: 'Unionization gives workers collective bargaining power.',    exampleTr: 'Sendikalaşma işçilere toplu pazarlık gücü verir.' },
  { id: 2151, topic: 'İnsan Kaynakları (B2)',    en: 'egalitarianism',   tr: 'eşitlikçilik',              type: 'noun', exampleEn: 'Egalitarianism demands equal treatment regardless of background.', exampleTr: 'Eşitlikçilik geçmişten bağımsız olarak eşit muamele talep eder.' },
  { id: 2152, topic: 'İnsan Kaynakları (B2)',    en: 'ethnicity',        tr: 'etnik köken',               type: 'noun', exampleEn: 'HR must not discriminate based on ethnicity.',               exampleTr: 'İK etnik kökene dayalı ayrımcılık yapmamalıdır.' },
  { id: 2153, topic: 'İnsan Kaynakları (B2)',    en: 'intersectionality',tr: 'kesişimsellik',             type: 'noun', exampleEn: 'Intersectionality considers how identities overlap at work.',  exampleTr: 'Kesişimsellik işteki kimliklerin nasıl örtüştüğünü ele alır.' },
  { id: 2154, topic: 'İnsan Kaynakları (B2)',    en: 'neurodiversity',   tr: 'nöroçeşitlilik',            type: 'noun', exampleEn: 'Neurodiversity embraces different ways of thinking.',         exampleTr: 'Nöroçeşitlilik farklı düşünme biçimlerini kucaklar.' },
  { id: 2155, topic: 'İnsan Kaynakları (B2)',    en: 'cohesion',         tr: 'uyum',                      type: 'noun', exampleEn: 'Team cohesion improves performance and reduces conflict.',    exampleTr: 'Ekip uyumu performansı artırır ve çatışmayı azaltır.' },
  { id: 2156, topic: 'İnsan Kaynakları (B2)',    en: 'autonomy',         tr: 'özerklik',                  type: 'noun', exampleEn: 'Giving employees autonomy boosts creativity and ownership.',  exampleTr: 'Çalışanlara özerklik vermek yaratıcılığı ve sahiplik duygusunu artırır.' },
  { id: 2157, topic: 'İnsan Kaynakları (B2)',    en: 'reintegration',    tr: 'yeniden entegrasyon',       type: 'noun', exampleEn: 'Reintegration programmes support staff returning from leave.', exampleTr: 'Yeniden entegrasyon programları izinden dönen personeli destekler.' },
  { id: 2158, topic: 'İnsan Kaynakları (B2)',    en: 'conscientious',    tr: 'vicdanlı',                  type: 'adj',  exampleEn: 'Conscientious employees consistently deliver high quality.',  exampleTr: 'Vicdanlı çalışanlar sürekli olarak yüksek kalite sunar.' },
  { id: 2159, topic: 'İnsan Kaynakları (B2)',    en: 'remunerate',       tr: 'ücret ödemek',              type: 'verb', exampleEn: 'The firm remunerates its top talent competitively.',         exampleTr: 'Firma en iyi yeteneklerini rekabetçi biçimde ücretlendirir.' },
  { id: 2160, topic: 'İnsan Kaynakları (B2)',    en: 'calibrate',        tr: 'kalibre etmek',             type: 'verb', exampleEn: 'Managers calibrate performance ratings across departments.',  exampleTr: 'Yöneticiler departmanlar arasında performans notlarını kalibre eder.' },
  { id: 2161, topic: 'İnsan Kaynakları (B2)',    en: 'segregation',      tr: 'ayrımcılık',                type: 'noun', exampleEn: 'Workplace segregation by gender is illegal in most countries.', exampleTr: 'Cinsiyete dayalı işyeri ayrımcılığı çoğu ülkede yasadışıdır.' },
  { id: 2162, topic: 'İnsan Kaynakları (B2)',    en: 'pluralism',        tr: 'çoğulculuk',                type: 'noun', exampleEn: 'Cultural pluralism enriches the workplace environment.',      exampleTr: 'Kültürel çoğulculuk işyeri ortamını zenginleştirir.' },
  { id: 2163, topic: 'İnsan Kaynakları (B2)',    en: 'nepotism',         tr: 'kayırmacılık',              type: 'noun', exampleEn: 'Nepotism undermines trust and fairness in hiring.',          exampleTr: 'Kayırmacılık işe alımda güveni ve adaleti zedeler.' },
  { id: 2164, topic: 'İnsan Kaynakları (B2)',    en: 'favoritism',       tr: 'adam kayırma',              type: 'noun', exampleEn: 'Favoritism creates resentment among other employees.',       exampleTr: 'Adam kayırma diğer çalışanlar arasında kırgınlık yaratır.' },
  { id: 2165, topic: 'İnsan Kaynakları (B2)',    en: 'ageism',           tr: 'yaşa dayalı ayrımcılık',    type: 'noun', exampleEn: 'Ageism affects both younger and older workers unfairly.',    exampleTr: 'Yaşa dayalı ayrımcılık hem genç hem de yaşlı çalışanları haksız biçimde etkiler.' },
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

// ─── 2. Önceki kelimelerle çakışma kontrolü ──────────────────────────────────
const crossDups = newWords.filter(w => usedEN.has(w.en.toLowerCase())).map(w => w.en);
if (crossDups.length) { console.error('Çakışma:', crossDups); process.exit(1); }

// ─── 3. ID kontrolü ──────────────────────────────────────────────────────────
const ids = newWords.map(w => w.id);
if (Math.min(...ids) !== 2066 || Math.max(...ids) !== 2165 || ids.length !== 100) {
  console.error(`ID hatalı: min=${Math.min(...ids)} max=${Math.max(...ids)} count=${ids.length}`);
  process.exit(1);
}

// ─── 4. JSON dosyasına yaz ───────────────────────────────────────────────────
fs.writeFileSync(OUT_PATH, JSON.stringify(newWords, null, 2), 'utf8');
console.log(`Tamam! ${newWords.length} kelime → ${OUT_PATH}`);
