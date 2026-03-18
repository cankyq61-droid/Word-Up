'use strict';
const fs   = require('fs');
const path = require('path');

const WORDS_PATH = path.join(__dirname, '..', 'src', 'data', 'words.json');
const OUT_PATH   = path.join(__dirname, 'is_kariyer_a1.json');

const existing   = JSON.parse(fs.readFileSync(WORDS_PATH, 'utf8'));
const existingEN = new Set(existing.map(w => w.en.toLowerCase()));

// ─── 5 konu × 20 kelime = 100 giriş, ID 1766-1865 ───────────────────────────
const newWords = [

  // ── İş ve Kariyer (A1) — 1766-1785 ────────────────────────────────────────
  { id: 1766, topic: 'İş ve Kariyer',       en: 'career',       tr: 'kariyer',           type: 'noun', exampleEn: 'She has a great career in medicine.',           exampleTr: 'Tıp alanında harika bir kariyeri var.' },
  { id: 1767, topic: 'İş ve Kariyer',       en: 'resume',       tr: 'özgeçmiş',          type: 'noun', exampleEn: 'Please send your resume by email.',              exampleTr: 'Lütfen özgeçmişinizi e-posta ile gönderin.' },
  { id: 1768, topic: 'İş ve Kariyer',       en: 'paycheck',     tr: 'maaş çeki',         type: 'noun', exampleEn: 'I receive my paycheck every month.',             exampleTr: 'Her ay maaş çekimi alıyorum.' },
  { id: 1769, topic: 'İş ve Kariyer',       en: 'workplace',    tr: 'işyeri',            type: 'noun', exampleEn: 'The workplace should be safe and clean.',        exampleTr: 'İşyeri güvenli ve temiz olmalıdır.' },
  { id: 1770, topic: 'İş ve Kariyer',       en: 'shift',        tr: 'vardiya',           type: 'noun', exampleEn: 'She works the night shift.',                    exampleTr: 'Gece vardiyasında çalışıyor.' },
  { id: 1771, topic: 'İş ve Kariyer',       en: 'workload',     tr: 'iş yükü',           type: 'noun', exampleEn: 'The workload is heavy this month.',             exampleTr: 'Bu ay iş yükü ağır.' },
  { id: 1772, topic: 'İş ve Kariyer',       en: 'department',   tr: 'departman',         type: 'noun', exampleEn: 'He works in the sales department.',             exampleTr: 'Satış departmanında çalışıyor.' },
  { id: 1773, topic: 'İş ve Kariyer',       en: 'headquarters', tr: 'genel merkez',      type: 'noun', exampleEn: 'The headquarters is in the city centre.',       exampleTr: 'Genel merkez şehir merkezindedir.' },
  { id: 1774, topic: 'İş ve Kariyer',       en: 'recruit',      tr: 'işe almak',         type: 'verb', exampleEn: 'They want to recruit ten new people.',          exampleTr: 'On yeni kişiyi işe almak istiyorlar.' },
  { id: 1775, topic: 'İş ve Kariyer',       en: 'pension',      tr: 'emeklilik maaşı',   type: 'noun', exampleEn: 'He saves money for his pension.',               exampleTr: 'Emeklilik maaşı için para biriktiriyor.' },
  { id: 1776, topic: 'İş ve Kariyer',       en: 'vacancy',      tr: 'açık pozisyon',     type: 'noun', exampleEn: 'There is a vacancy in the marketing team.',     exampleTr: 'Pazarlama ekibinde açık pozisyon var.' },
  { id: 1777, topic: 'İş ve Kariyer',       en: 'promotion',    tr: 'terfi',             type: 'noun', exampleEn: 'She got a promotion last year.',                exampleTr: 'Geçen yıl terfi etti.' },
  { id: 1778, topic: 'İş ve Kariyer',       en: 'employer',     tr: 'işveren',           type: 'noun', exampleEn: 'My employer is very supportive.',               exampleTr: 'İşverenem çok destekleyici.' },
  { id: 1779, topic: 'İş ve Kariyer',       en: 'staff',        tr: 'personel',          type: 'noun', exampleEn: 'Our staff is dedicated and hardworking.',       exampleTr: 'Personelimiz özverili ve çalışkan.' },
  { id: 1780, topic: 'İş ve Kariyer',       en: 'interview',    tr: 'mülakat',           type: 'noun', exampleEn: 'I have a job interview tomorrow.',              exampleTr: 'Yarın iş mülakatım var.' },
  { id: 1781, topic: 'İş ve Kariyer',       en: 'contract',     tr: 'sözleşme',          type: 'noun', exampleEn: 'Please read the contract before signing it.',   exampleTr: 'İmzalamadan önce sözleşmeyi okuyun.' },
  { id: 1782, topic: 'İş ve Kariyer',       en: 'overtime',     tr: 'fazla mesai',       type: 'noun', exampleEn: 'I worked overtime to finish the project.',      exampleTr: 'Projeyi bitirmek için fazla mesai yaptım.' },
  { id: 1783, topic: 'İş ve Kariyer',       en: 'resignation',  tr: 'istifa',            type: 'noun', exampleEn: 'He handed in his resignation on Friday.',       exampleTr: 'Cuma günü istifasını verdi.' },
  { id: 1784, topic: 'İş ve Kariyer',       en: 'mission',      tr: 'misyon',            type: 'noun', exampleEn: 'Our company mission is to help customers.',     exampleTr: 'Şirket misyonumuz müşterilere yardımcı olmaktır.' },
  { id: 1785, topic: 'İş ve Kariyer',       en: 'objective',    tr: 'amaç',              type: 'noun', exampleEn: 'The main objective is to increase sales.',      exampleTr: 'Temel amaç satışları artırmaktır.' },

  // ── Finans ve Ekonomi (A1) — 1786-1805 ────────────────────────────────────
  { id: 1786, topic: 'Finans ve Ekonomi',   en: 'income',       tr: 'gelir',             type: 'noun', exampleEn: 'Her income is higher than average.',            exampleTr: 'Geliri ortalamanın üzerinde.' },
  { id: 1787, topic: 'Finans ve Ekonomi',   en: 'profit',       tr: 'kar',               type: 'noun', exampleEn: 'The company made a big profit this year.',      exampleTr: 'Şirket bu yıl büyük kar etti.' },
  { id: 1788, topic: 'Finans ve Ekonomi',   en: 'loss',         tr: 'zarar',             type: 'noun', exampleEn: 'They reported a loss last quarter.',            exampleTr: 'Geçen çeyrek zarar açıkladılar.' },
  { id: 1789, topic: 'Finans ve Ekonomi',   en: 'debt',         tr: 'borç',              type: 'noun', exampleEn: 'He is trying to pay off his debt.',             exampleTr: 'Borcunu ödemeye çalışıyor.' },
  { id: 1790, topic: 'Finans ve Ekonomi',   en: 'credit',       tr: 'kredi',             type: 'noun', exampleEn: 'She applied for a credit at the bank.',         exampleTr: 'Bankaya kredi başvurusu yaptı.' },
  { id: 1791, topic: 'Finans ve Ekonomi',   en: 'tax',          tr: 'vergi',             type: 'noun', exampleEn: 'Everyone must pay tax to the government.',      exampleTr: 'Herkes devlete vergi ödemek zorundadır.' },
  { id: 1792, topic: 'Finans ve Ekonomi',   en: 'fee',          tr: 'ücret',             type: 'noun', exampleEn: 'There is a small fee for using this service.',  exampleTr: 'Bu hizmetin kullanımı için küçük bir ücret var.' },
  { id: 1793, topic: 'Finans ve Ekonomi',   en: 'deposit',      tr: 'mevduat',           type: 'noun', exampleEn: 'I made a deposit into my savings account.',     exampleTr: 'Tasarruf hesabıma mevduat yatırdım.' },
  { id: 1794, topic: 'Finans ve Ekonomi',   en: 'balance',      tr: 'bakiye',            type: 'noun', exampleEn: 'What is the balance in your account?',          exampleTr: 'Hesabınızdaki bakiye ne kadar?' },
  { id: 1795, topic: 'Finans ve Ekonomi',   en: 'invest',       tr: 'yatırım yapmak',    type: 'verb', exampleEn: 'It is wise to invest in education.',            exampleTr: 'Eğitime yatırım yapmak akıllıcadır.' },
  { id: 1796, topic: 'Finans ve Ekonomi',   en: 'loan',         tr: 'borç',              type: 'noun', exampleEn: 'He took a loan to buy a car.',                  exampleTr: 'Araba almak için borç aldı.' },
  { id: 1797, topic: 'Finans ve Ekonomi',   en: 'interest',     tr: 'faiz',              type: 'noun', exampleEn: 'The interest rate on the loan is five percent.', exampleTr: 'Kredinin faiz oranı yüzde beştir.' },
  { id: 1798, topic: 'Finans ve Ekonomi',   en: 'savings',      tr: 'tasarruf',          type: 'noun', exampleEn: 'She keeps her savings in a bank account.',      exampleTr: 'Tasarrufunu banka hesabında tutuyor.' },
  { id: 1799, topic: 'Finans ve Ekonomi',   en: 'currency',     tr: 'para birimi',       type: 'noun', exampleEn: 'The currency of Japan is the yen.',             exampleTr: 'Japonyanın para birimi yendir.' },
  { id: 1800, topic: 'Finans ve Ekonomi',   en: 'revenue',      tr: 'hasılat',           type: 'noun', exampleEn: 'The company revenue grew by ten percent.',      exampleTr: 'Şirket hasılatı yüzde on arttı.' },
  { id: 1801, topic: 'Finans ve Ekonomi',   en: 'expense',      tr: 'gider',             type: 'noun', exampleEn: 'Travel is a big expense for the company.',      exampleTr: 'Seyahat şirket için büyük bir giderdir.' },
  { id: 1802, topic: 'Finans ve Ekonomi',   en: 'fund',         tr: 'fon',               type: 'noun', exampleEn: 'The government set up a fund for schools.',     exampleTr: 'Hükümet okullar için bir fon oluşturdu.' },
  { id: 1803, topic: 'Finans ve Ekonomi',   en: 'inflation',    tr: 'enflasyon',         type: 'noun', exampleEn: 'High inflation makes living more expensive.',   exampleTr: 'Yüksek enflasyon yaşam maliyetini artırır.' },
  { id: 1804, topic: 'Finans ve Ekonomi',   en: 'transfer',     tr: 'havale',            type: 'noun', exampleEn: 'She made a bank transfer to her friend.',       exampleTr: 'Arkadaşına banka havalesi yaptı.' },
  { id: 1805, topic: 'Finans ve Ekonomi',   en: 'withdraw',     tr: 'para çekmek',       type: 'verb', exampleEn: 'I need to withdraw some money from the ATM.',   exampleTr: 'ATM den biraz para çekmem gerekiyor.' },

  // ── Hukuk ve Yargı (A1) — 1806-1825 ──────────────────────────────────────
  { id: 1806, topic: 'Hukuk ve Yargı',      en: 'law',          tr: 'kanun',             type: 'noun', exampleEn: 'Everyone must obey the law.',                  exampleTr: 'Herkes kanuna uymak zorundadır.' },
  { id: 1807, topic: 'Hukuk ve Yargı',      en: 'right',        tr: 'hak',               type: 'noun', exampleEn: 'Freedom of speech is a basic right.',          exampleTr: 'Konuşma özgürlüğü temel bir haktır.' },
  { id: 1808, topic: 'Hukuk ve Yargı',      en: 'court',        tr: 'mahkeme',           type: 'noun', exampleEn: 'The case will be heard in court next week.',    exampleTr: 'Dava gelecek hafta mahkemede görülecek.' },
  { id: 1809, topic: 'Hukuk ve Yargı',      en: 'crime',        tr: 'suç',               type: 'noun', exampleEn: 'Stealing is a crime.',                         exampleTr: 'Çalmak bir suçtur.' },
  { id: 1810, topic: 'Hukuk ve Yargı',      en: 'prison',       tr: 'cezaevi',           type: 'noun', exampleEn: 'He was sent to prison for two years.',          exampleTr: 'İki yıl cezaevine gönderildi.' },
  { id: 1811, topic: 'Hukuk ve Yargı',      en: 'fine',         tr: 'para cezası',       type: 'noun', exampleEn: 'He paid a fine for parking illegally.',         exampleTr: 'Yasadışı park ettiği için para cezası ödedi.' },
  { id: 1812, topic: 'Hukuk ve Yargı',      en: 'guilty',       tr: 'suçlu',             type: 'adj',  exampleEn: 'The jury found him guilty.',                   exampleTr: 'Jüri onu suçlu buldu.' },
  { id: 1813, topic: 'Hukuk ve Yargı',      en: 'innocent',     tr: 'masum',             type: 'adj',  exampleEn: 'She was proved innocent in the end.',          exampleTr: 'Sonunda masum olduğu kanıtlandı.' },
  { id: 1814, topic: 'Hukuk ve Yargı',      en: 'trial',        tr: 'yargılama',         type: 'noun', exampleEn: 'The trial lasted three days.',                  exampleTr: 'Yargılama üç gün sürdü.' },
  { id: 1815, topic: 'Hukuk ve Yargı',      en: 'witness',      tr: 'tanık',             type: 'noun', exampleEn: 'The witness gave a clear statement.',           exampleTr: 'Tanık net bir ifade verdi.' },
  { id: 1816, topic: 'Hukuk ve Yargı',      en: 'evidence',     tr: 'delil',             type: 'noun', exampleEn: 'The police found strong evidence.',             exampleTr: 'Polis güçlü delil buldu.' },
  { id: 1817, topic: 'Hukuk ve Yargı',      en: 'verdict',      tr: 'karar',             type: 'noun', exampleEn: 'The judge announced the verdict.',              exampleTr: 'Hakim kararı açıkladı.' },
  { id: 1818, topic: 'Hukuk ve Yargı',      en: 'sentence',     tr: 'hüküm',             type: 'noun', exampleEn: 'The judge gave a five-year sentence.',          exampleTr: 'Hakim beş yıl hüküm verdi.' },
  { id: 1819, topic: 'Hukuk ve Yargı',      en: 'appeal',       tr: 'temyiz',            type: 'noun', exampleEn: 'His lawyer filed an appeal.',                   exampleTr: 'Avukatı temyize başvurdu.' },
  { id: 1820, topic: 'Hukuk ve Yargı',      en: 'bail',         tr: 'kefalet',           type: 'noun', exampleEn: 'The suspect was released on bail.',             exampleTr: 'Şüpheli kefaletle serbest bırakıldı.' },
  { id: 1821, topic: 'Hukuk ve Yargı',      en: 'legal',        tr: 'yasal',             type: 'adj',  exampleEn: 'You need legal advice before signing.',         exampleTr: 'İmzalamadan önce yasal tavsiye almanız gerekir.' },
  { id: 1822, topic: 'Hukuk ve Yargı',      en: 'prohibit',     tr: 'yasaklamak',        type: 'verb', exampleEn: 'Smoking is prohibited in public places.',       exampleTr: 'Kamuya açık alanlarda sigara içmek yasaklanmıştır.' },
  { id: 1823, topic: 'Hukuk ve Yargı',      en: 'permit',       tr: 'izin vermek',       type: 'verb', exampleEn: 'You are not permitted to enter this area.',     exampleTr: 'Bu alana girmenize izin verilmiyor.' },
  { id: 1824, topic: 'Hukuk ve Yargı',      en: 'obey',         tr: 'uymak',             type: 'verb', exampleEn: 'Citizens must obey the rules.',                 exampleTr: 'Vatandaşlar kurallara uymak zorundadır.' },
  { id: 1825, topic: 'Hukuk ve Yargı',      en: 'accuse',       tr: 'suçlamak',          type: 'verb', exampleEn: 'He was accused of theft.',                     exampleTr: 'Hırsızlıkla suçlandı.' },

  // ── Pazarlama ve Reklam (A1) — 1826-1845 ─────────────────────────────────
  { id: 1826, topic: 'Pazarlama ve Reklam', en: 'advertise',    tr: 'reklam yapmak',     type: 'verb', exampleEn: 'They advertise their products on TV.',          exampleTr: 'Ürünlerini televizyonda reklam yapıyorlar.' },
  { id: 1827, topic: 'Pazarlama ve Reklam', en: 'campaign',     tr: 'kampanya',          type: 'noun', exampleEn: 'The advertising campaign was a great success.',  exampleTr: 'Reklam kampanyası büyük bir başarıydı.' },
  { id: 1828, topic: 'Pazarlama ve Reklam', en: 'logo',         tr: 'logo',              type: 'noun', exampleEn: 'Their logo is a simple red circle.',            exampleTr: 'Logoları basit bir kırmızı dairedir.' },
  { id: 1829, topic: 'Pazarlama ve Reklam', en: 'slogan',       tr: 'slogan',            type: 'noun', exampleEn: 'A good slogan is easy to remember.',            exampleTr: 'İyi bir slogan akılda kalıcıdır.' },
  { id: 1830, topic: 'Pazarlama ve Reklam', en: 'audience',     tr: 'hedef kitle',       type: 'noun', exampleEn: 'Know your audience before you advertise.',      exampleTr: 'Reklam yapmadan önce hedef kitlenizi tanıyın.' },
  { id: 1831, topic: 'Pazarlama ve Reklam', en: 'poster',       tr: 'afiş',              type: 'noun', exampleEn: 'They put a poster on every wall.',              exampleTr: 'Her duvara bir afiş koydular.' },
  { id: 1832, topic: 'Pazarlama ve Reklam', en: 'flyer',        tr: 'el ilanı',          type: 'noun', exampleEn: 'We gave out flyers in the shopping street.',    exampleTr: 'Alışveriş caddesinde el ilanı dağıttık.' },
  { id: 1833, topic: 'Pazarlama ve Reklam', en: 'billboard',    tr: 'reklam panosu',     type: 'noun', exampleEn: 'There is a large billboard on the highway.',    exampleTr: 'Otoyolda büyük bir reklam panosu var.' },
  { id: 1834, topic: 'Pazarlama ve Reklam', en: 'sponsor',      tr: 'sponsor',           type: 'noun', exampleEn: 'The event had a major sponsor this year.',      exampleTr: 'Etkinliğin bu yıl büyük bir sponsoru vardı.' },
  { id: 1835, topic: 'Pazarlama ve Reklam', en: 'promote',      tr: 'tanıtmak',          type: 'verb', exampleEn: 'They used social media to promote the sale.',   exampleTr: 'İndirimi tanıtmak için sosyal medya kullandılar.' },
  { id: 1836, topic: 'Pazarlama ve Reklam', en: 'awareness',    tr: 'farkındalık',       type: 'noun', exampleEn: 'The campaign raised awareness about health.',   exampleTr: 'Kampanya sağlık konusunda farkındalık yarattı.' },
  { id: 1837, topic: 'Pazarlama ve Reklam', en: 'launch',       tr: 'piyasaya sürmek',   type: 'verb', exampleEn: 'They will launch a new product next month.',   exampleTr: 'Gelecek ay yeni bir ürün piyasaya sürecekler.' },
  { id: 1838, topic: 'Pazarlama ve Reklam', en: 'viral',        tr: 'viral',             type: 'adj',  exampleEn: 'The video went viral overnight.',               exampleTr: 'Video bir gecede viral oldu.' },
  { id: 1839, topic: 'Pazarlama ve Reklam', en: 'strategy',     tr: 'strateji',          type: 'noun', exampleEn: 'We need a clear marketing strategy.',           exampleTr: 'Net bir pazarlama stratejisine ihtiyacımız var.' },
  { id: 1840, topic: 'Pazarlama ve Reklam', en: 'brochure',     tr: 'broşür',            type: 'noun', exampleEn: 'Please take a brochure from the desk.',         exampleTr: 'Lütfen masadan bir broşür alın.' },
  { id: 1841, topic: 'Pazarlama ve Reklam', en: 'newsletter',   tr: 'haber bülteni',     type: 'noun', exampleEn: 'Sign up for our weekly newsletter.',            exampleTr: 'Haftalık haber bültenimize abone olun.' },
  { id: 1842, topic: 'Pazarlama ve Reklam', en: 'catalog',      tr: 'katalog',           type: 'noun', exampleEn: 'The catalog shows all our products.',           exampleTr: 'Katalog tüm ürünlerimizi göstermektedir.' },
  { id: 1843, topic: 'Pazarlama ve Reklam', en: 'publicity',    tr: 'tanıtım',           type: 'noun', exampleEn: 'Good publicity helps a business grow.',         exampleTr: 'İyi tanıtım bir işletmenin büyümesine yardımcı olur.' },
  { id: 1844, topic: 'Pazarlama ve Reklam', en: 'reach',        tr: 'erişim',            type: 'noun', exampleEn: 'Social media has a wide reach.',                exampleTr: 'Sosyal medyanın geniş bir erişimi var.' },
  { id: 1845, topic: 'Pazarlama ve Reklam', en: 'publish',      tr: 'yayımlamak',        type: 'verb', exampleEn: 'They publish new articles every week.',         exampleTr: 'Her hafta yeni makaleler yayımlıyorlar.' },

  // ── İnsan Kaynakları (A1) — 1846-1865 ────────────────────────────────────
  { id: 1846, topic: 'İnsan Kaynakları',    en: 'hire',         tr: 'istihdam etmek',    type: 'verb', exampleEn: 'We need to hire a new designer.',               exampleTr: 'Yeni bir tasarımcı istihdam etmemiz gerekiyor.' },
  { id: 1847, topic: 'İnsan Kaynakları',    en: 'employee',     tr: 'çalışan',           type: 'noun', exampleEn: 'Every employee gets a welcome package.',        exampleTr: 'Her çalışan bir karşılama paketi alır.' },
  { id: 1848, topic: 'İnsan Kaynakları',    en: 'training',     tr: 'eğitim',            type: 'noun', exampleEn: 'New staff must complete a training programme.',  exampleTr: 'Yeni personel bir eğitim programını tamamlamalıdır.' },
  { id: 1849, topic: 'İnsan Kaynakları',    en: 'benefit',      tr: 'yan hak',           type: 'noun', exampleEn: 'Health insurance is an important benefit.',      exampleTr: 'Sağlık sigortası önemli bir yan haktır.' },
  { id: 1850, topic: 'İnsan Kaynakları',    en: 'absence',      tr: 'devamsızlık',       type: 'noun', exampleEn: 'You must report any absence to your manager.',  exampleTr: 'Her devamsızlığı yöneticinize bildirmelisiniz.' },
  { id: 1851, topic: 'İnsan Kaynakları',    en: 'attendance',   tr: 'devam',             type: 'noun', exampleEn: 'Good attendance is important at work.',         exampleTr: 'İşte iyi devam önemlidir.' },
  { id: 1852, topic: 'İnsan Kaynakları',    en: 'payroll',      tr: 'bordro',            type: 'noun', exampleEn: 'The payroll is processed on the last Friday.',  exampleTr: 'Bordro son Cuma günü işlenir.' },
  { id: 1853, topic: 'İnsan Kaynakları',    en: 'compensation', tr: 'tazminat',          type: 'noun', exampleEn: 'He received compensation for the extra hours.',  exampleTr: 'Fazla saatler için tazminat aldı.' },
  { id: 1854, topic: 'İnsan Kaynakları',    en: 'background',   tr: 'geçmiş',            type: 'noun', exampleEn: 'We check the background of all applicants.',    exampleTr: 'Tüm başvuranların geçmişini kontrol ederiz.' },
  { id: 1855, topic: 'İnsan Kaynakları',    en: 'reference',    tr: 'referans',          type: 'noun', exampleEn: 'Please provide two references from past jobs.',  exampleTr: 'Lütfen önceki işlerden iki referans sağlayın.' },
  { id: 1856, topic: 'İnsan Kaynakları',    en: 'orientation',  tr: 'oryantasyon',       type: 'noun', exampleEn: 'New employees attend a one-day orientation.',   exampleTr: 'Yeni çalışanlar bir günlük oryantasyona katılır.' },
  { id: 1857, topic: 'İnsan Kaynakları',    en: 'handbook',     tr: 'el kitabı',         type: 'noun', exampleEn: 'Read the staff handbook for company rules.',     exampleTr: 'Şirket kuralları için personel el kitabını okuyun.' },
  { id: 1858, topic: 'İnsan Kaynakları',    en: 'policy',       tr: 'politika',          type: 'noun', exampleEn: 'The company has a clear leave policy.',         exampleTr: 'Şirketin net bir izin politikası var.' },
  { id: 1859, topic: 'İnsan Kaynakları',    en: 'diversity',    tr: 'çeşitlilik',        type: 'noun', exampleEn: 'Diversity makes a team stronger.',              exampleTr: 'Çeşitlilik bir ekibi daha güçlü kılar.' },
  { id: 1860, topic: 'İnsan Kaynakları',    en: 'inclusion',    tr: 'kapsayıcılık',      type: 'noun', exampleEn: 'Inclusion means everyone feels welcome.',        exampleTr: 'Kapsayıcılık herkesin kendini kabul görmüş hissetmesi demektir.' },
  { id: 1861, topic: 'İnsan Kaynakları',    en: 'grievance',    tr: 'şikayet',           type: 'noun', exampleEn: 'You can raise a grievance with HR.',             exampleTr: 'İnsan Kaynakları birimine şikayet iletebilirsiniz.' },
  { id: 1862, topic: 'İnsan Kaynakları',    en: 'termination',  tr: 'işten çıkarma',     type: 'noun', exampleEn: 'Termination requires a written notice.',         exampleTr: 'İşten çıkarma yazılı bir ihbar gerektirir.' },
  { id: 1863, topic: 'İnsan Kaynakları',    en: 'redundancy',   tr: 'toplu işten çıkarma', type: 'noun', exampleEn: 'The factory announced fifty redundancies.',    exampleTr: 'Fabrika elli kişinin toplu işten çıkarılacağını açıkladı.' },
  { id: 1864, topic: 'İnsan Kaynakları',    en: 'relocation',   tr: 'yer değiştirme',    type: 'noun', exampleEn: 'The job comes with a relocation package.',      exampleTr: 'İş, yer değiştirme paketi içermektedir.' },
  { id: 1865, topic: 'İnsan Kaynakları',    en: 'workforce',    tr: 'iş gücü',           type: 'noun', exampleEn: 'The company has a diverse workforce.',          exampleTr: 'Şirketin çeşitli bir iş gücü var.' },
];

// ─── 1. İç tekrar kontrolü ───────────────────────────────────────────────────
const enSet = new Set();
const intDups = [];
for (const w of newWords) {
  const key = w.en.toLowerCase();
  if (enSet.has(key)) intDups.push(w.en);
  else enSet.add(key);
}
if (intDups.length) {
  console.error('Dahili tekrar:', intDups);
  process.exit(1);
}

// ─── 2. Mevcut kelimelerle çakışma kontrolü ──────────────────────────────────
const crossDups = newWords.filter(w => existingEN.has(w.en.toLowerCase())).map(w => w.en);
if (crossDups.length) {
  console.error('Mevcut kelimelerle çakışma:', crossDups);
  process.exit(1);
}

// ─── 3. ID kontrolü ──────────────────────────────────────────────────────────
const ids = newWords.map(w => w.id);
const minId = Math.min(...ids);
const maxId = Math.max(...ids);
if (minId !== 1766 || maxId !== 1865 || ids.length !== 100) {
  console.error(`ID aralığı hatalı: min=${minId} max=${maxId} count=${ids.length}`);
  process.exit(1);
}

// ─── 4. JSON dosyasına yaz ───────────────────────────────────────────────────
fs.writeFileSync(OUT_PATH, JSON.stringify(newWords, null, 2), 'utf8');
console.log(`Tamam! ${newWords.length} kelime → ${OUT_PATH}`);
