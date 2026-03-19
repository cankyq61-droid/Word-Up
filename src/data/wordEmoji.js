/**
 * Her İngilizce kelimeye özel emoji.
 * Burada olmayan kelimeler konu emojisini gösterir.
 */
export const WORD_EMOJI = {

  // ══════════════════════════════════════════
  // Selamlaşma ve Tanışma
  // ══════════════════════════════════════════
  hello:      '👋',
  goodbye:    '🫡',   // veda selamı
  please:     '🙏',
  thanks:     '🙌',   // please'den farklı
  thank:      '🙌',
  sorry:      '😔',
  yes:        '✅',
  no:         '❌',
  name:       '🪪',   // kimlik kartı
  nice:       '😊',
  meet:       '🤝',
  friend:     '👫',
  welcome:    '🎊',
  speak:      '🗣️',
  understand: '💡',
  know:       '🧠',
  ask:        '❓',
  answer:     '💬',
  call:       '📞',
  old:        '👴',
  young:      '👦',

  // ══════════════════════════════════════════
  // Sayılar  (1-10 emoji, 11+ büyük rakam → NUMBER_TEXT)
  // ══════════════════════════════════════════
  zero:    '0️⃣',
  one:     '1️⃣',
  two:     '2️⃣',
  three:   '3️⃣',
  four:    '4️⃣',
  five:    '5️⃣',
  six:     '6️⃣',
  seven:   '7️⃣',
  eight:   '8️⃣',
  nine:    '9️⃣',
  ten:     '🔟',
  number:  '#️⃣',
  count:   '🔢',
  // --- Sayılar A2 ---
  million:   '💰',
  billion:   '🏦',
  first:     '🥇',
  third:     '🥉',
  half:      '½',
  quarter:   '¼',
  double:    '✌️',
  triple:    '3️⃣',
  plus:      '➕',
  minus:     '➖',
  multiply:  '✖️',
  divide:    '➗',
  average:   '📊',
  percent:   '💯',
  fraction:  '½',
  calculate: '🧮',
  equal:     '⚖️',
  sum:       '∑',
  measure:   '📏',
  // --- Sayılar B1/B2 (soyut matematik) ---
  proportion:   '📐',
  decimal:      '🔢',
  percentage:   '💯',
  estimate:     '🤔',
  precise:      '🎯',
  approximate:  '≈',
  equation:     '🧮',
  calculation:  '🧮',
  statistic:    '📊',
  formula:      '🔬',
  ratio:        '⚖️',
  median:       '📊',
  maximum:      '⬆️',
  minimum:      '⬇️',
  exponent:     '🔺',
  denominator:  '⬇️',
  subtract:     '➖',
  negative:     '➖',
  sequence:     '🔢',
  infinite:     '♾️',
  logarithm:    '📈',
  prime:        '⭐',
  cardinal:     '🔢',
  ordinal:      '🏅',
  binary:       '01',
  numeral:      '#️⃣',

  // ══════════════════════════════════════════
  // Renkler  (her biri farklı renkli daire)
  // ══════════════════════════════════════════
  red:    '🔴',
  blue:   '🔵',
  green:  '🟢',
  yellow: '🟡',
  white:  '⬜',
  black:  '⬛',
  orange: '🟠',
  purple: '🟣',
  pink:   '🩷',
  brown:  '🟫',
  grey:   '🩶',
  gray:   '🩶',
  dark:   '🌑',
  light:  '🌕',
  colour: '🎨',
  color:  '🎨',
  bright: '✨',
  // A2
  silver:   '🪙',
  gold:     '🥇',
  navy:     '🔵',
  cream:    '🫙',
  scarlet:  '🔴',
  violet:   '🟣',
  turquoise:'🩵',
  beige:    '🟫',
  maroon:   '🍷',
  coral:    '🪸',
  khaki:    '🟡',
  ivory:    '⬜',
  crimson:  '🔴',
  sapphire: '🔵',
  emerald:  '💚',

  // ══════════════════════════════════════════
  // Aile  (her üye farklı)
  // ══════════════════════════════════════════
  mother:      '🤱',   // emziren/anne
  father:      '🧔',   // sakallı adam
  sister:      '👧',
  brother:     '👬',   // iki erkek kardeş
  son:         '👦',
  daughter:    '👧',
  grandmother: '👵',
  grandfather: '👴',
  aunt:        '👩‍🦳', // gri saçlı kadın
  uncle:       '👨‍🦱', // kıvırcık saçlı adam
  baby:        '👶',
  child:       '🧒',
  husband:     '🤵',   // damat/koca
  wife:        '👰',   // gelin/eş
  parent:      '👪',
  family:      '👨‍👩‍👧‍👦',
  cousin:      '🫂',   // sarılma
  people:      '👥',
  woman:       '👩',
  man:         '👨',

  // ══════════════════════════════════════════
  // Vücut
  // ══════════════════════════════════════════
  head:     '🗣️',
  eye:      '👁️',
  ear:      '👂',
  nose:     '👃',
  mouth:    '👄',
  hand:     '✋',
  arm:      '💪',
  leg:      '🦵',
  foot:     '🦶',
  back:     '💆',   // sırt masajı
  hair:     '💇',
  face:     '😊',
  body:     '🧍',
  finger:   '☝️',
  tooth:    '🦷',
  heart:    '❤️',
  stomach:  '🫃',
  shoulder: '🤷',   // omuz silkme — omuz belirgin
  knee:     '🧎',   // diz çökme
  neck:     '🧣',   // boyun = eşarp (boyunluk)

  // ══════════════════════════════════════════
  // Yiyecekler
  // ══════════════════════════════════════════
  bread:     '🍞',
  milk:      '🥛',
  water:     '💧',
  apple:     '🍎',
  egg:       '🥚',
  meat:      '🥩',
  chicken:   '🍗',
  fish:      '🐟',
  rice:      '🍚',
  soup:      '🍜',
  salad:     '🥗',
  fruit:     '🍇',
  vegetable: '🥦',
  tea:       '🍵',
  coffee:    '☕',
  juice:     '🧃',
  cheese:    '🧀',
  butter:    '🧈',
  sugar:     '🍬',
  salt:      '🧂',
  cake:      '🎂',
  chocolate: '🍫',
  banana:    '🍌',
  tomato:    '🍅',
  potato:    '🥔',

  // ══════════════════════════════════════════
  // Giyim
  // ══════════════════════════════════════════
  shirt:    '👕',
  trousers: '👖',
  dress:    '👗',
  shoes:    '👟',
  socks:    '🧦',
  jacket:   '🧥',
  coat:     '🥼',   // önlük/palto
  hat:      '🎩',
  bag:      '👜',
  glasses:  '👓',
  skirt:    '💃',   // dans eden kadın — etek belirgin
  jumper:   '🧶',   // yün/kazak
  boots:    '👢',
  scarf:    '🧣',
  gloves:   '🧤',
  pyjamas:  '🛌',
  uniform:  '🎽',
  size:     '📏',
  wear:     '👔',
  clothes:  '🧺',

  // ══════════════════════════════════════════
  // Sayfa 2 — eksik kelimeler
  // ══════════════════════════════════════════

  // Ev ve Mobilya — eksikler
  bedroom:    '🛏️',
  floor:      '🟫',   // ahşap zemin
  wall:       '🧱',
  television: '📺',
  stairs:     '🪜',
  cupboard:   '🗄️',

  // Hayvanlar — eksikler
  hen:    '🐔',
  mouse:  '🐭',

  // Günlük Fiiller — eksikler
  wake:   '⏰',
  take:   '✋',
  wet:    '💧',
  dry:    '🏜️',
  weather:'🌤️',

  // Aylar
  january:  '❄️',
  february: '💝',
  march:    '🌱',
  april:    '🌸',
  may:      '🌷',
  june:     '☀️',
  july:     '🏖️',
  august:   '🌻',
  september:'🍂',
  october:  '🎃',
  november: '🌧️',
  december: '🎄',

  // Zaman — eksikler
  later:     '⏳',
  early:     '🌄',
  always:    '♾️',
  never:     '🚫',
  often:     '🔄',
  sometimes: '🎲',
  age:       '🎂',

  // Ulaşım — eksikler
  bike:    '🚲',
  street:  '🏙️',
  airport: '✈️',
  travel:  '🧳',
  arrive:  '📍',
  leave:   '👋',
  near:    '📍',
  far:     '🌍',

  // ══════════════════════════════════════════
  // Sayfa 3 — eksik kelimeler
  // ══════════════════════════════════════════

  // Şehir ve Mekanlar
  town:     '🏘️',
  store:    '🏪',
  bridge:   '🌉',
  square:   '⛲',
  building: '🏢',
  address:  '📮',
  map:      '🗺️',
  office:   '💼',

  // Alışveriş
  cheap:     '💸',
  expensive: '💎',
  cost:      '💲',
  change:    '🪙',
  product:   '📦',
  brand:     '🏷️',
  offer:     '🤝',
  card:      '💳',
  queue:     '🚶',
  customer:  '🛍️',
  total:     '🧾',
  basket:    '🧺',
  spend:     '💰',

  // Meslekler
  police:     '👮',
  student:    '👨‍🎓',
  manager:    '👔',
  artist:     '🎨',
  journalist: '📰',
  soldier:    '🪖',
  waiter:     '🍽️',
  cleaner:    '🧹',
  dentist:    '🦷',
  actor:      '🎭',
  scientist:  '🔬',

  // Okul ve Eğitim
  class:      '🏫',
  lesson:     '📖',
  book:       '📚',
  pencil:     '✏️',
  paper:      '📄',
  desk:       '🗃️',
  board:      '📋',
  homework:   '📝',
  test:       '✅',
  exam:       '🖊️',
  question:   '❓',
  grade:      '📊',
  subject:    '📚',
  dictionary: '📘',
  notebook:   '📓',
  spell:      '🔤',
  topic:      '💬',

  // Sağlık
  tablet:       '💊',
  headache:     '🤕',
  stomachache:  '🫃',
  flu:          '🤒',
  cough:        '😮‍💨',
  hurt:         '😣',
  bleed:        '🩸',
  injury:       '🩹',
  allergy:      '🌿',
  appointment:  '📅',
  recover:      '💪',
  ambulance:    '🚑',
  pharmacy:     '🏥',
  emergency:    '🆘',

  // Spor
  sport:    '🏅',
  swimming: '🏊',
  cycling:  '🚴',
  kick:     '🦵',
  catch:    '🧤',
  throw:    '🤾',
  match:    '🥊',
  player:   '🏃',
  score:    '🎯',

  // Duygular
  hungry:    '🍽️',
  laugh:     '😂',
  cry:       '😭',
  smile:     '🙂',
  lonely:    '🧍',
  brave:     '🦁',

  // ══════════════════════════════════════════
  // Sayfa 4 — eksik kelimeler
  // ══════════════════════════════════════════

  // Teknoloji
  message:  '💬',
  radio:    '📻',
  battery:  '🔋',
  screen:   '🖥️',
  keyboard: '⌨️',
  download: '⬇️',
  charge:   '🔌',

  // Selamlaşma A2
  introduce:   '🤝',
  conversation:'🗣️',
  invitation:  '💌',
  nationality: '🌍',
  language:    '📣',
  repeat:      '🔁',
  polite:      '🎩',
  formal:      '👔',
  casual:      '👕',
  surname:     '🪪',
  origin:      '🏺',
  abroad:      '🌐',
  phrase:      '📜',
  accent:      '🎤',
  respond:     '↩️',
  greet:       '👋',
  culture:     '🎭',
  gesture:     '🤙',
  fluent:      '💬',
  translate:   '🔄',

  // Renkler A2
  lime:     '🟩',
  indigo:   '🫐',
  teal:     '🩵',
  magenta:  '🌺',
  olive:    '🫒',
  pastel:   '🖼️',
  shade:    '🌑',
  tint:     '🌕',
  pattern:  '🔷',
  stripe:   '🦓',

  // Aile A2
  twin:        '👯',
  nephew:      '👦',
  niece:       '👧',
  relative:    '👨‍👩‍👧',
  stepmother:  '👩‍👦',
  stepfather:  '👨‍👦',
  generation:  '🔄',
  birth:       '👶',
  adult:       '🧑',
  teenager:    '🧑‍🦱',
  toddler:     '🧒',
  married:     '💍',
  divorced:    '💔',
  widow:       '🖤',
  relationship:'❤️',
  household:   '🏠',
  grandchild:  '🧒',
  sibling:     '👫',
  partner:     '🤝',
  adopt:       '🤱',

  // Vücut A2
  thumb:  '👍',
  palm:   '🤲',
  wrist:  '⌚',
  ankle:  '👟',
  heel:   '👠',
  toe:    '🦶',
  chin:   '🤭',
  cheek:  '😳',
  jaw:    '😮',
  brow:   '🤨',
  lip:    '👄',
  tongue: '👅',
  throat: '🎤',
  chest:  '🫁',
  hip:    '💃',
  elbow:  '🦾',
  fist:   '✊',
  nail:   '💅',
  skin:   '🧴',
  bone:   '🦴',

  // Yiyecekler A2
  pasta:      '🍝',
  sandwich:   '🥪',
  pizza:      '🍕',
  burger:     '🍔',
  mushroom:   '🍄',
  carrot:     '🥕',
  onion:      '🧅',
  pepper:     '🫑',
  lemon:      '🍋',
  garlic:     '🧄',
  strawberry: '🍓',
  grape:      '🍇',
  watermelon: '🍉',
  pear:       '🍐',
  pineapple:  '🍍',
  yogurt:     '🫙',
  sauce:      '🍯',
  spice:      '🌶️',
  meal:       '🍱',
  portion:    '🍽️',

  // ══════════════════════════════════════════
  // Sayfa 5-7 — eksik kelimeler
  // ══════════════════════════════════════════

  // Giyim A2
  suit:     '🕴️',
  tie:      '👔',
  belt:     '🪢',
  pocket:   '🦘',
  button:   '🔵',
  zip:      '⛓️',
  sleeve:   '💪',
  collar:   '🎗️',
  hood:     '🧢',
  shorts:   '🩳',
  swimsuit: '🩱',
  jeans:    '👖',
  vest:     '🦺',
  cardigan: '🪡',
  blouse:   '👚',
  sandals:  '🩴',
  sneakers: '👟',
  fabric:   '🧵',
  fashion:  '💄',
  style:    '✨',

  // Ev ve Mobilya A2
  shelf:     '🗂️',
  carpet:    '🟫',
  curtain:   '🎭',
  pillow:    '😴',
  blanket:   '🛌',
  shower:    '🚿',
  toilet:    '🚽',
  sink:      '🫧',
  tap:       '💧',
  wardrobe:  '👗',
  drawer:    '📦',
  ceiling:   '⬆️',
  balcony:   '🌅',
  garage:    '🚗',
  basement:  '⬇️',
  attic:     '🪵',
  hallway:   '🚶',
  furniture: '🛋️',
  apartment: '🏗️',

  // Hayvanlar A2
  squirrel: '🐿️',
  goat:     '🐐',
  donkey:   '🫏',
  camel:    '🐪',
  bat:      '🦇',
  lobster:  '🦞',
  worm:     '🪱',

  // Günlük Fiiller A2
  wash:   '🫧',
  carry:  '💼',
  bring:  '📦',
  send:   '📤',
  return: '↩️',
  break:  '💔',
  fix:    '🔧',
  choose: '🤔',
  move:   '📦',
  forget: '💭',
  push:   '➡️',
  pull:   '⬅️',

  // Doğa ve Hava A2
  beach:     '🏖️',
  valley:    '🏔️',
  earthquake:'📳',
  thunder:   '⛈️',
  frost:     '🌨️',
  hail:      '🌧️',
  flood:     '🌊',
  drought:   '🏜️',
  soil:      '🌱',
  cliff:     '🪨',
  cave:      '🦇',

  // Günler, Aylar, Mevsimler A2
  daily:       '📅',
  weekly:      '📆',
  monthly:     '🗓️',
  annual:      '🎊',
  century:     '🏛️',
  decade:      '🔟',
  fortnight:   '2️⃣',
  semester:    '📚',
  weekend:     '🎉',
  holiday:     '🏖️',
  calendar:    '📅',
  schedule:    '📋',
  birthday:    '🎂',
  anniversary: '💍',
  deadline:    '⏰',
  occasion:    '🎊',
  period:      '⏱️',
  duration:    '⌛',
  routine:     '🔄',
  forecast:    '🌤️',

  // Zaman A2
  midnight:  '🌑',
  noon:      '🌞',
  past:      '⬅️',
  present:   '🎁',
  future:    '🔮',
  instant:   '⚡',
  moment:    '⏱️',
  recently:  '🕐',
  soon:      '⏩',
  already:   '✅',
  still:     '⏸️',
  yet:       '⏳',
  since:     '📅',
  until:     '⏰',
  before:    '⬅️',
  after:     '➡️',
  during:    '⏱️',
  meanwhile: '🔄',
  suddenly:  '💥',

  // Ulaşım A2
  metro:       '🚇',
  tram:        '🚊',
  motorbike:   '🏍️',
  lorry:       '🚚',
  ferry:       '⛴️',
  highway:     '🛣️',
  motorway:    '🛣️',
  journey:     '🗺️',
  trip:        '🧳',
  passport:    '🛂',
  luggage:     '🛄',
  platform:    '🚉',
  departure:   '🛫',
  destination: '📍',
  direction:   '🧭',
  route:       '🧭',
  fuel:        '⛽',
  parking:     '🅿️',

  // Şehir ve Mekanlar A2
  stadium:      '🏟️',
  zoo:          '🦁',
  theatre:      '🎭',
  suburb:       '🏘️',
  neighbourhood:'🏘️',
  supermarket:  '🛒',
  cafe:         '☕',
  embassy:      '🏛️',
  gallery:      '🖼️',
  university:   '🎓',
  castle:       '🏰',
  harbour:      '⛵',
  pier:         '🌊',
  fountain:     '⛲',
  intersection: '🔀',
  district:     '🗺️',
  landmark:     '📍',
  outskirts:    '🏘️',
  complex:      '🏢',

  // Alışveriş A2
  sale:     '🏷️',
  refund:   '↩️',
  exchange: '🔄',
  warranty: '📜',
  delivery: '📦',
  order:    '📋',
  item:     '🏷️',
  stock:    '📊',
  catalogue:'📖',
  barcode:  '📊',
  checkout: '✅',
  purchase: '🛍️',
  wrap:     '🎁',
  value:    '💎',
  budget:   '💰',
  invoice:  '🧾',
  label:    '🏷️',

  // Meslekler A2
  architect:    '📐',
  accountant:   '🧮',
  mechanic:     '🔧',
  plumber:      '🪠',
  electrician:  '⚡',
  photographer: '📷',
  secretary:    '📝',
  programmer:   '💻',
  firefighter:  '🚒',
  surgeon:      '💉',
  banker:       '🏦',
  translator:   '🌐',
  designer:     '🎨',
  veterinarian: '🐾',
  librarian:    '📚',
  barber:       '💈',
  coach:        '🏆',
  director:     '🎬',

  // Okul ve Eğitim A2
  certificate:  '📜',
  scholarship:  '🎓',
  course:       '📚',
  lecture:      '🎤',
  assignment:   '📝',
  project:      '📋',
  research:     '🔬',
  knowledge:    '🧠',
  skill:        '💡',
  revision:     '🔄',
  result:       '📊',
  presentation: '📊',
  graduate:     '🎓',
  degree:       '🎓',
  curriculum:   '📋',
  classroom:    '🏫',
  tutor:        '👨‍🏫',
  rule:         '📏',
  method:       '📐',
  educate:      '📚',

  // Sağlık A2
  symptom:   '🤒',
  diagnosis: '🔬',
  treatment: '💊',
  surgery:   '💉',
  blood:     '🩸',
  pressure:  '📊',
  pulse:     '💓',
  infection: '🦠',
  wound:     '🤕',
  bandage:   '🩹',
  diet:      '🥗',
  mental:    '🧠',
  stress:    '😰',
  anxiety:   '😟',
  therapy:   '🛋️',
  hygiene:   '🧼',
  disabled:  '♿',
  cure:      '💊',
  clinic:    '🏥',

  // Spor A2
  volleyball: '🏐',
  golf:       '⛳',
  boxing:     '🥊',
  wrestling:  '🤼',
  athletics:  '🏃',
  marathon:   '🏅',
  sprint:     '⚡',
  relay:      '🔄',
  tournament: '🏆',
  referee:    '🟥',
  circuit:    '🔄',
  race:       '🏁',
  fitness:    '💪',
  strength:   '💪',
  flexible:   '🤸',
  compete:    '🥇',
  defend:     '🛡️',

  // Duygular A2
  jealous:     '😒',
  confused:    '😕',
  embarrassed: '😳',
  ashamed:     '😔',
  grateful:    '🙏',
  disappointed:'😞',
  relieved:    '😅',
  hopeful:     '🌟',
  cheerful:    '😄',
  miserable:   '😩',
  anxious:     '😰',
  confident:   '💪',
  curious:     '🔍',
  frustrated:  '😤',
  content:     '😌',
  shocked:     '😱',
  homesick:    '🏠',
  envious:     '💚',
  passionate:  '❤️‍🔥',

  // Teknoloji A2
  laptop:     '💻',
  printer:    '🖨️',
  scanner:    '📡',
  microphone: '🎤',
  speaker:    '🔊',
  headphones: '🎧',
  cable:      '🔌',
  wifi:       '📶',
  bluetooth:  '🔵',
  software:   '💾',
  hardware:   '🖥️',
  virus:      '🦠',
  backup:     '💾',
  update:     '🔄',
  upload:     '⬆️',
  share:      '📤',
  stream:     '📺',
  robot:      '🤖',
  network:    '🌐',

  // Selamlaşma B1
  colleague:    '👔',
  acquaintance: '🤝',
  eloquent:     '🗣️',
  candid:       '💬',
  reputation:   '⭐',
  compliment:   '💐',
  farewell:     '🫡',
  handshake:    '🤝',
  impression:   '🤔',
  networking:   '🌐',
  acknowledge:  '👍',
  approachable: '😊',
  dialogue:     '💬',
  mutual:       '🤝',
  sincere:      '❤️',
  bond:         '🔗',
  memorable:    '⭐',
  reunion:      '🎉',
  trustworthy:  '🔒',
  community:    '👥',

  // Renkler B1
  cerulean:    '🔵',
  ecru:        '🟡',
  vermilion:   '🟠',
  cobalt:      '🔵',
  charcoal:    '⬛',
  copper:      '🟫',
  saffron:     '🌼',
  lilac:       '🪻',
  amber:       '🟡',
  vivid:       '🌈',
  subdued:     '🌫️',
  transparent: '💎',
  metallic:    '🪙',
  hue:         '🎨',
  saturated:   '🎨',
  muted:       '🔇',
  contrast:    '◑',
  blend:       '🎨',

  // Aile B1
  guardian:   '🛡️',
  inherit:    '📜',
  orphan:     '🧒',
  custody:    '👨‍👧',
  kin:        '👨‍👩‍👧',
  stepparent: '👪',
  upbringing: '🌱',
  affection:  '🤗',
  breadwinner:'💰',
  ancestor:   '👴',
  descendant: '👶',
  estranged:  '💔',
  nurture:    '🌱',
  kinship:    '🤝',
  unity:      '🤝',
  sacrifice:  '🙏',
  reconcile:  '🤝',
  heritage:   '🏛️',
  lineage:    '📜',

  // Vücut B1
  palpitation: '💓',
  tissue:      '🧻',
  artery:      '🩸',
  posture:     '🧍',
  cartilage:   '🦴',
  gland:       '💊',
  immune:      '🛡️',
  metabolism:  '🔄',
  neuron:      '⚡',
  hormone:     '💊',
  vein:        '🩸',
  spinal:      '🦴',
  respiratory: '🫁',
  reflex:      '⚡',
  cavity:      '🦷',
  bruise:      '🟣',
  circulation: '🔄',
  diagnose:    '🔬',
  affliction:  '😣',
  remedy:      '💊',

  // ══════════════════════════════════════════
  // Sayfa 8-10 — eksik kelimeler
  // ══════════════════════════════════════════

  // Yiyecekler B1
  cuisine:'🍽️', ingredient:'🧪', marinate:'🫙', serving:'🍽️', nutrition:'🥗',
  fermented:'🫙', seasoning:'🧂', garnish:'🌿', appetizer:'🥨', dessert:'🍰',
  beverage:'🥤', organic:'🌿', calorific:'🔥', texture:'🖐️', savoury:'🧂',
  bittersweet:'🍫', culinary:'👨‍🍳', staple:'🍞', fermentation:'🫧', protein:'💪',

  // Giyim B1
  attire:'👔', tailor:'✂️', wrinkle:'〰️', mend:'🪡', textile:'🧵',
  vintage:'🕰️', alteration:'✂️', bespoke:'👔', hemline:'📏', accessory:'💍',
  lining:'🧥', threadbare:'🧵', sustainable:'♻️', dye:'🎨', collection:'👗',
  sheer:'🌫️', elastic:'🔄', reversible:'🔃', trendy:'✨', embroidery:'🪡',

  // Ev ve Mobilya B1
  renovation:'🔨', landlord:'🏠', tenant:'🔑', mortgage:'💰', insulation:'🏠',
  plumbing:'🪠', decor:'🖼️', leakage:'💧', furnish:'🛋️', loft:'🏗️',
  foyer:'🚪', outlet:'🔌', threshold:'🚪', floorplan:'📐', upholstery:'🛋️',
  ventilation:'💨', detached:'🏠', faucet:'🚿', remodeling:'🔨', storage:'📦',

  // Hayvanlar B1
  predator:'🦁', prey:'🐇', habitat:'🌿', camouflage:'🦎', hibernate:'😴',
  domesticated:'🐶', endangered:'🚨', migration:'🦅', venom:'🐍', nocturnal:'🦉',
  omnivore:'🍖', herbivore:'🌿', carnivore:'🥩', extinction:'💀', sanctuary:'🏞️',
  venomous:'☠️', tame:'🐾', poaching:'🚫', mating:'🐦', camouflaged:'🦎',

  // Günlük Fiiller B1
  accomplish:'🏆', adapt:'🔄', delay:'⏳', negotiate:'🤝', motivate:'💪',
  participate:'🙋', hesitate:'🤔', prioritize:'📋', confront:'👊', evaluate:'📊',
  eliminate:'❌', establish:'🏗️', maintain:'🔧', overcome:'💪', perceive:'👁️',
  pursue:'🏃', reconsider:'🔄', resolve:'✅', tolerate:'😤', transform:'🔄',

  // Doğa ve Hava B1
  desertification:'🏜️', inundation:'🌊', glacier:'🧊', erosion:'⛰️',
  ecosystem:'🌿', precipitation:'🌧️', humidity:'💧', landslide:'⛰️',
  biodiversity:'🦋', deforestation:'🪓', altitude:'⬆️', terrain:'🗺️',
  renewable:'♻️', tidal:'🌊', temperate:'🌡️', catastrophe:'💥',
  emission:'🏭', conservation:'♻️', estuary:'🌊', gust:'💨',

  // Günler B1
  fiscal:'💰', solstice:'☀️', equinox:'⚖️', millennium:'🏛️', quarterly:'📊',
  commemoration:'🕯️', epoch:'🕰️', biannual:'2️⃣', era:'🏛️', overdue:'⏰',
  timetable:'📋', interval:'⏱️', longevity:'♾️', perpetual:'♾️',
  consecutive:'🔢', milestone:'🏁', transition:'🔄', interim:'⏳', prolonged:'⌛',

  // Zaman B1
  simultaneous:'⚡', momentary:'⏱️', elapsed:'⏰', eventual:'🔮',
  promptly:'⚡', postpone:'⏳', punctual:'✅', obsolete:'📼',
  contemporary:'🕐', foreseeable:'🔮', timely:'⏰', outdated:'📼',
  chronological:'📅', recurrent:'🔄', imminent:'⚠️', lapse:'⏱️',
  expedite:'⚡', cutoff:'✂️', linger:'⏳', retrospect:'⬅️',

  // Ulaşım B1
  commute:'🚇', infrastructure:'🏗️', exhaust:'💨', congestion:'🚦',
  carpool:'🚗', itinerary:'📋', navigation:'🧭', pedestrian:'🚶',
  cargo:'📦', transit:'🚇', overpass:'🌉', roundabout:'🔄',
  commuter:'🚇', toll:'💰', bypass:'↪️', depart:'🛫',
  terminal:'✈️', elevation:'⬆️', layover:'⏳', dispatch:'📤',

  // Şehir B1
  metropolitan:'🏙️', borough:'🏘️', precinct:'👮', municipality:'🏛️',
  gentrification:'🏗️', boulevard:'🛣️', monument:'🗿', plaza:'⛲',
  periphery:'🗺️', urban:'🏙️', rural:'🌾', civic:'🏛️',
  residential:'🏘️', commercial:'🏢', zoning:'📐', greenspace:'🌳',
  architecture:'🏛️', sewage:'🪠',

  // Alışveriş B1
  guarantee:'✅', installment:'💳', wholesale:'📦', retail:'🏪',
  reimbursement:'💰', barter:'🔄', billing:'🧾', counterfeit:'🚫',
  vendor:'🏪', auction:'🔨', surplus:'📦', consumerism:'🛒',
  transaction:'💳', bargain:'💸', subscribe:'📧', premium:'💎',
  coupon:'🏷️', expenditure:'💸', impulse:'⚡',

  // Meslekler B1
  entrepreneur:'💡', consultant:'📋', freelancer:'💻', supervisor:'👁️',
  recruiter:'🔍', intern:'📝', executive:'👔', analyst:'📊',
  mediator:'🤝', auditor:'🔍', diplomat:'🌍', craftsman:'🔨',
  paralegal:'⚖️', curator:'🖼️', pharmacist:'💊', radiologist:'🔬',
  horticulturist:'🌱', logistician:'📦', actuary:'📊',

  // Okul B1
  coursework:'📝', fellowship:'🎓', dissertation:'📜', trimester:'📅',
  syllabus:'📋', accredited:'✅', enrollment:'📝', tutoring:'👨‍🏫',
  plagiarism:'🚫', certify:'📜', elective:'✅', faculty:'👨‍🏫',
  transcript:'📄', postgraduate:'🎓', academic:'📚', internship:'💼',
  mentorship:'👨‍🏫', pedagogy:'📚', literacy:'📖', recess:'🎮',

  // Sağlık B1
  rehabilitation:'💪', chronic:'⏳', epidemic:'🦠', vaccination:'💉',
  prognosis:'🔮', sanitation:'🧼', contagious:'🦠', preventable:'🛡️',
  physiology:'🧬', malnourished:'😔', ailment:'🤒', immunity:'🛡️',
  sedentary:'🛋️', cardiologist:'❤️', dosage:'💊', ward:'🏥',
  prescription:'📝', outbreak:'⚠️', organ:'🫀',

  // Spor B1
  endurance:'💪', agility:'🤸', championship:'🏆', penalty:'🟥',
  doping:'💉', substitute:'🔄', umpire:'👮', hydration:'💧',
  stamina:'💪', playoff:'🏆', disqualified:'🚫', sportsmanship:'🤝',
  dash:'⚡', tactics:'📋', offside:'🚩', fixture:'📅',
  podium:'🥇', velocity:'⚡', physique:'💪', dehydrated:'😰',

  // Duygular B1
  ambivalent:'🤔', nostalgic:'📸', empathy:'🤗', regret:'😔',
  resentment:'😤', contentment:'😌', overwhelmed:'😵', anticipation:'⏳',
  longing:'💭', apprehensive:'😰', gratitude:'🙏', disillusioned:'😞',
  humiliation:'😳', enthusiasm:'🎉', indifferent:'😑', compassionate:'❤️',
  vulnerable:'🫂', irritable:'😠', serene:'😌', poignant:'💧',

  // Teknoloji B1
  algorithm:'🔢', bandwidth:'📡', encryption:'🔐', cache:'💾',
  server:'🖥️', firmware:'💾', interface:'🖥️', cybersecurity:'🔒',
  prototype:'🔧', autonomous:'🤖', blockchain:'⛓️', sensor:'📡',
  processor:'💻', latency:'⏱️', scalable:'📈', interoperability:'🔗',
  debugging:'🐛', iteration:'🔄', deployment:'🚀', virtualization:'☁️',

  // Selamlaşma B2
  reconciliation:'🤝', diplomacy:'🌍', protocol:'📋', charisma:'✨',
  eloquence:'🗣️', gregarious:'👥', esteem:'⭐', etiquette:'🎩',
  deference:'🙇', rapport:'🤝', pleasantry:'😊', congenial:'😊',
  sociable:'👥', intercultural:'🌍', affable:'😊', reciprocate:'🔄',
  semblance:'🎭', amicable:'🤝', convivial:'🎉', overture:'🎵',

  // Sayılar B2
  asymptote:'📈', permutation:'🔢', coefficient:'🔢', magnitude:'📊',
  cumulative:'📈', variance:'📊', interpolate:'🔢', exponential:'📈',
  quotient:'➗', divisible:'➗', tangential:'📐', scalar:'🔢',
  iterate:'🔄', rounding:'🔢',

  // Renkler B2
  iridescent:'🌈', chromatic:'🎨', luminescent:'✨', achromatic:'⬛',
  polychrome:'🌈', opalescent:'🌈', pellucid:'💎', ebony:'⬛',
  aubergine:'🟣', sienna:'🟫', monochromatic:'⬛', fluorescent:'💡',
  translucent:'🔍', variegated:'🌈', pigment:'🎨', oxidize:'🔬',
  spectrum:'🌈', bistre:'🟫', wavelength:'〰️',

  // Aile B2
  patriarchy:'👨', matriarch:'👩', consanguinity:'🩸', filial:'❤️',
  surrogate:'🤱', dynastic:'👑', bereavement:'🖤', cohabitation:'🏠',
  alimony:'💰', maternity:'🤱', paternalistic:'👨', genealogy:'📜',
  adoptive:'🤗', emancipation:'🕊️', paternal:'👨', maternal:'👩',
  primogeniture:'👑',

  // ══════════════════════════════════════════
  // Sayfa 11-13 — eksik kelimeler
  // ══════════════════════════════════════════

  // Vücut B2
  cortisol:'💊', synaptic:'⚡', mitochondria:'🔋', epithelial:'🧴',
  tendon:'💪', ligament:'🦴', platelet:'🩸', lymph:'💧',
  cochlea:'👂', retina:'👁️', diaphragm:'🫁', adrenaline:'⚡',
  marrow:'🦴', ganglion:'🧠', peristalsis:'🌀', epidermis:'🧴',
  ossification:'🦴', proprioception:'🦾', capillary:'🩸', eardrum:'👂',

  // Yiyecekler B2
  umami:'😋', emulsify:'🫙', blanch:'🫧', reduce:'🍳', caramelise:'🍬',
  infuse:'🍵', molecular:'🔬', gluten:'🍞', probiotics:'🦠', delicacy:'🍽️',
  foraging:'🌿', gastronomy:'👨‍🍳', dehydrate:'☀️', artisanal:'🏺',
  palate:'👅', cholesterol:'❤️', gelatine:'🟡', brine:'🧂',
  macerate:'🍇', epicure:'🍷',

  // Giyim B2
  couture:'👗', drape:'🧵', motif:'🎨', brocade:'🪡', silhouette:'👤',
  lapel:'👔', pilling:'🧶', mercerize:'✨', sartorial:'✂️', toile:'🧵',
  pleat:'👗', welt:'🪡', tweed:'🧥', ruche:'🪡',

  // Ev ve Mobilya B2
  ergonomic:'🪑', minimalist:'⬜', parquet:'🟫', mezzanine:'🏗️',
  eaves:'🏠', corbel:'🏛️', caulk:'🪟', joinery:'🔧', skirting:'🪵',
  cornice:'🏛️', dormer:'🏠', wainscoting:'🪵', buttress:'🏰',
  cladding:'🧱', fascia:'🏠', lintel:'🚪', glazing:'🪟',

  // Hayvanlar B2
  symbiosis:'🤝', bioluminescence:'✨', cryptic:'🎭', crepuscular:'🌅',
  scavenger:'🦅', pheromone:'🌸', phenotype:'🧬', polymorphism:'🔄',
  aestivation:'😴', echolocation:'🦇', mutualism:'🤝', arboreal:'🌳',
  obligate:'🔗', bipedal:'🚶',

  // Günlük Fiiller B2
  deliberate:'🤔', juxtapose:'⚖️', scrutinize:'🔍', mitigate:'🛡️',
  perpetuate:'🔄', relinquish:'🙌', exacerbate:'⬆️', embody:'🧍',
  circumvent:'↪️', corroborate:'✅', extrapolate:'📈', instigate:'💥',
  retaliate:'↩️', vindicate:'✅', exonerate:'🕊️', enunciate:'🗣️',
  alleviate:'😌', contravene:'🚫', synthesize:'🔬', capitulate:'🏳️',

  // Doğa B2
  permafrost:'🧊', catchment:'💧', lithosphere:'🌍', stratosphere:'☁️',
  anthropogenic:'🏭', geomorphology:'⛰️', mangrove:'🌿', aquifer:'💧',
  hydrological:'💧', sediment:'🪨', biome:'🌿', tectonic:'🌋',
  cyclone:'🌀', albedo:'☀️', sublimation:'❄️', particulate:'💨',
  vortex:'🌀', turbulence:'💨', eutrophication:'🌊', intertidal:'🌊',

  // Günler B2
  synchronize:'🔄', iterative:'🔄', circadian:'🕐', quotidian:'📅',
  phenology:'🌸', centennial:'🏛️', biennial:'2️⃣', transitory:'⏳',
  bygone:'⬅️', contemporaneous:'🕐', intercalary:'📅', meridian:'☀️',
  antediluvian:'🏛️', anachronism:'⏰', vernal:'🌱', autumnal:'🍂',
  nocturne:'🌙', recurrence:'🔄', penultimate:'2️⃣', hourly:'⏰',

  // Zaman B2
  temporal:'⏰', anachronistic:'📼', transient:'⏳', protracted:'⌛',
  inveterate:'🔄', hiatus:'⏸️', watershed:'🌊', deferred:'⏳',
  antecedent:'⬅️', lacuna:'🕳️', brevity:'⚡', perpetuity:'♾️',
  nascent:'🌱', interlude:'⏸️', stasis:'⏸️', turnaround:'🔄',
  flux:'🌊', abrupt:'💥', evanescent:'✨',

  // Ulaşım B2
  aerodynamic:'💨', propulsion:'🚀', axle:'⚙️', chassis:'🚗',
  viaduct:'🌉', embankment:'🏔️', intermodal:'🔄', turbocharge:'⚡',
  hovercraft:'🛸', deregulate:'🔓', freight:'📦', pilotage:'✈️',
  ballast:'⚓', aerofoil:'✈️', subsonic:'🔇', supersonic:'💥',
  throttle:'⚙️', catamaran:'⛵',

  // Şehir B2
  conurbation:'🏙️', megalopolis:'🌆', enclave:'🔒', sprawl:'🏘️',
  agglomeration:'🏢', tenement:'🏚️', promenade:'🚶', colosseum:'🏛️',
  slum:'🏚️', citadel:'🏰', esplanade:'🌊', almshouse:'🏠',
  colonnade:'🏛️', hinterland:'🗺️', thoroughfare:'🛣️', quay:'⛵',
  piazza:'⛲', ghetto:'🏚️', metropolis:'🏙️',

  // Alışveriş B2
  arbitrage:'💹', liquidate:'💧', procurement:'📦', solvent:'💰',
  markdown:'⬇️', consignment:'📦', aggregate:'📊', deficit:'📉',
  monopoly:'👑', oligopoly:'🏢', depreciation:'📉', remittance:'💸',
  leverage:'⚖️', dividend:'💰', solvency:'✅', hedging:'🛡️',
  embargo:'🚫', speculate:'🎲', equilibrium:'⚖️', cartel:'🤝',

  // Meslekler B2
  ombudsman:'⚖️', podiatrist:'🦶', orthodontist:'🦷', chiropractor:'💆',
  epidemiologist:'🦠', geologist:'🪨', cartographer:'🗺️', lexicographer:'📖',
  anthropologist:'🏺', toxicologist:'☠️', archivist:'📦', sommelier:'🍷',
  cryptographer:'🔐', coroner:'🔬', notary:'📜', demographer:'📊',
  neurosurgeon:'🧠', theologian:'🙏', stenographer:'📝',

  // Okul B2
  epistemology:'🧠', heuristic:'💡', didactic:'📚', accreditation:'✅',
  andragogy:'👨‍🏫', metacognition:'🧠', constructivism:'🏗️', seminar:'🎤',
  monograph:'📜', sabbatical:'🏖️', typology:'📋', remedial:'🔄',
  tenured:'📜', vocational:'💼', comprehensive:'📚', pupil:'👧',
  rote:'🔄', pedagogue:'👨‍🏫', autodidact:'📖', syllogism:'🧮',

  // Sağlık B2
  comorbidity:'🤒', iatrogenic:'💉', pharmacokinetics:'💊', aetiology:'🔬',
  immunotherapy:'🛡️', latent:'⏳', remission:'✅', contraindication:'🚫',
  thrombosis:'🩸', pathogenesis:'🦠', analgesic:'💊', benign:'✅',
  malignant:'☠️', palliative:'😌', anaphylaxis:'⚠️', cachexia:'😔',
  necrosis:'💀', suture:'🪡', haemoglobin:'🩸', neuropathy:'⚡',

  // Spor B2
  biomechanics:'🧬', decathlon:'🏅', relegation:'⬇️', concussion:'🤕',
  aerobic:'🫁', anaerobic:'💪', periodization:'📅', proprioceptive:'🦾',
  plyometric:'🤸', glycogen:'⚡', ergogenic:'💪', kinesthesia:'🦾',
  overtraining:'😫', concede:'🏳️', foul:'🟥', fortitude:'💪',
  stratagem:'♟️',

  // Duygular B2
  equanimity:'😌', schadenfreude:'😈', catharsis:'💧', trepidation:'😰',
  magnanimous:'❤️', despondent:'😞', euphoria:'🎉', anguish:'😭',
  stoic:'🗿', melancholy:'🌧️', hubris:'😤', equivocal:'🤔',
  petulant:'😤', sanguine:'😊', disconsolate:'😢', ambiguity:'❓',
  indignation:'😠', awe:'😲', mortified:'😳', rancour:'😤',

  // Teknoloji B2
  cryptography:'🔐', quantum:'⚛️', semiconductor:'💻', tokenization:'🔐',
  neural:'🧠', biometric:'👆', nanotechnology:'🔬', photovoltaic:'☀️',
  telemetry:'📡', obsolescence:'📼', haptic:'👆', overclocking:'⚡',
  microprocessor:'💻', superconductor:'⚡', hypertext:'🔗',
  transistor:'💻', metamaterial:'🔬', neuromorphic:'🧠',

  // İş ve Kariyer
  career:'💼', resume:'📄', paycheck:'💰', workplace:'🏢', shift:'🔄',
  workload:'📚', department:'🏢', headquarters:'🏢', recruit:'🔍',
  pension:'👴', vacancy:'🪑', promotion:'⬆️', employer:'👔',
  staff:'👥', interview:'🤝', contract:'📝', overtime:'⏰',
  resignation:'📝', mission:'🎯', objective:'🎯',

  // Finans ve Ekonomi
  income:'💰', profit:'📈', loss:'📉', debt:'💸', credit:'💳',
  tax:'🏛️', fee:'💲', deposit:'🏦', balance:'⚖️', invest:'📈',
  loan:'💰', interest:'💹', savings:'🏦', currency:'💵', revenue:'💰',
  expense:'💸', fund:'💼', inflation:'📈', transfer:'➡️', withdraw:'💳',

  // Hukuk ve Yargı
  law:'⚖️', court:'🏛️', crime:'🚨', prison:'⛓️', fine:'💸',
  guilty:'🔴', innocent:'🕊️', trial:'⚖️', witness:'👁️', evidence:'🔍',
  verdict:'⚖️', sentence:'📝', appeal:'📢', bail:'💰', legal:'⚖️',
  prohibit:'🚫', permit:'✅', obey:'👮', accuse:'☝️',

  // ══════════════════════════════════════════
  // Diğer yaygın kelimeler (ilerisi için)
  // ══════════════════════════════════════════
  // Hayvanlar
  cat: '🐱', dog: '🐶', bird: '🐦', horse: '🐴', cow: '🐄',
  rabbit: '🐰', lion: '🦁', elephant: '🐘', bear: '🐻', tiger: '🐯',
  wolf: '🐺', fox: '🦊', deer: '🦌', sheep: '🐑', pig: '🐷',
  duck: '🦆', eagle: '🦅', owl: '🦉', parrot: '🦜', snake: '🐍',
  turtle: '🐢', frog: '🐸', butterfly: '🦋', bee: '🐝', ant: '🐜',
  dolphin: '🐬', whale: '🐋', shark: '🦈', penguin: '🐧', monkey: '🐒',
  gorilla: '🦍', zebra: '🦓', giraffe: '🦒', crocodile: '🐊', panda: '🐼',
  // Günlük fiiller
  eat: '🍽️', drink: '🥤', sleep: '😴', walk: '🚶', run: '🏃',
  read: '📖', write: '✍️', listen: '🎧', watch: '👀', play: '🎮',
  work: '💼', study: '📚', cook: '🍳', clean: '🧹', buy: '🛍️',
  swim: '🏊', dance: '💃', sing: '🎤', draw: '🎨', drive: '🚗',
  fly: '✈️', jump: '🤸', sit: '💺', open: '🔓', close: '🔒',
  give: '🤝', go: '🚶', see: '👁️', hear: '👂', feel: '❤️',
  think: '🤔', say: '💬', tell: '📢', show: '👆', help: '🤝',
  wait: '⏳', stop: '🛑', start: '▶️', finish: '✅', learn: '📚',
  teach: '🏫', find: '🔍', lose: '😔', win: '🏆', try: '💪',
  love: '❤️', like: '👍', want: '🎯', need: '❗', make: '🔨',
  // Ulaşım
  car: '🚗', bus: '🚌', train: '🚂', plane: '✈️', bicycle: '🚲',
  taxi: '🚕', ship: '🚢', road: '🛣️', station: '🚉', ticket: '🎫',
  motorcycle: '🏍️', truck: '🚚', helicopter: '🚁', boat: '⛵',
  // Doğa
  sun: '☀️', rain: '🌧️', snow: '❄️', wind: '💨', cloud: '☁️',
  tree: '🌳', flower: '🌸', mountain: '⛰️', sea: '🌊', river: '🏞️',
  sky: '🌌', moon: '🌙', star: '⭐', storm: '⛈️', fog: '🌫️',
  forest: '🌲', desert: '🏜️', island: '🏝️', lake: '🏞️', volcano: '🌋',
  rainbow: '🌈', lightning: '⚡', leaf: '🍃', grass: '🌿', rock: '🪨',
  spring: '🌸', summer: '☀️', autumn: '🍂', winter: '❄️', season: '🌿',
  // Zaman
  time: '⏰', hour: '🕐', minute: '⏱️', second: '⚡',
  morning: '🌅', afternoon: '☀️', evening: '🌆', night: '🌙',
  clock: '⏰', today: '📌', tomorrow: '➡️', yesterday: '⬅️',
  monday: '📅', tuesday: '📅', wednesday: '📅', thursday: '📅',
  friday: '🎉', saturday: '🎮', sunday: '☀️', day: '🌞', week: '📅',
  month: '📆', year: '🗓️',
  // Şehir ve Mekanlar
  city: '🏙️', school: '🏫', hospital: '🏥', hotel: '🏨', park: '🌳',
  shop: '🏪', bank: '🏦', church: '⛪', museum: '🏛️', restaurant: '🍽️',
  market: '🛒', library: '📚', gym: '🏋️', cinema: '🎬',
  // Para / Alışveriş
  money: '💰', price: '💲', pay: '💳', gift: '🎁', sell: '🏷️',
  discount: '🏷️', receipt: '🧾', cash: '💵', wallet: '👛', cart: '🛒',
  // Ev
  house: '🏠', door: '🚪', window: '🪟', chair: '🪑', table: '🍽️',
  bed: '🛏️', kitchen: '🍳', bathroom: '🛁', garden: '🌿', key: '🗝️',
  sofa: '🛋️', lamp: '💡', mirror: '🪞', tv: '📺', fridge: '🧊',
  // Duygular
  happy: '😊', sad: '😢', angry: '😠', scared: '😨', surprised: '😲',
  tired: '😴', excited: '🎉', bored: '😑', nervous: '😰', calm: '😌',
  joy: '😄', fear: '😱', hate: '😤', worry: '😟', proud: '🏆',
  // Teknoloji
  computer: '💻', phone: '📱', internet: '🌐', email: '📧', camera: '📷',
  video: '📹', music: '🎵', app: '📲', website: '🌐', password: '🔐',
  // Sağlık / Spor
  medicine: '💊', pain: '😣', cold: '🤧', fever: '🌡️',
  exercise: '💪', healthy: '🥗', sick: '🤒',
  football: '⚽', basketball: '🏀', tennis: '🎾', game: '🎮',
  team: '👥', champion: '🥇', trophy: '🏆', medal: '🏅',
  // Meslekler
  doctor: '👨‍⚕️', teacher: '👨‍🏫', engineer: '👨‍💻', chef: '👨‍🍳',
  lawyer: '👨‍⚖️', nurse: '👩‍⚕️', driver: '🚗', farmer: '👨‍🌾', pilot: '✈️',
  // Genel sıfat/zarf
  big: '🔆', small: '🔅', long: '📏', tall: '🏗️',
  fast: '⚡', slow: '🐢', hot: '🔥', cold2: '❄️', warm: '🌡️',
  good: '👍', bad: '👎', new: '✨', clean2: '✨', dirty: '🗑️',
  safe: '🛡️', easy: '😌', hard: '💪',
  true: '✅', false: '❌',

  // ══ Küçük eksikler (pages 1-10) ══
  spider: '🕷️',
  traffic: '🚦',
  judge: '⚖️',
  vitamin: '💊',
  divorce: '💔',
  'leap year': '📅',
  pedestrianize: '🚶',
  'loyalty card': '💳',
  biomedical: '🏥',
  'mental health': '🧠',
  'sibling rivalry': '⚔️',
  'nuclear family': '👨‍👩‍👧‍👦',
  'extended family': '👨‍👩‍👧',
  gorge: '🏔️',
  'avant-garde': '🎨',
  'prêt-à-porter': '👗',
  mercantile: '🏪',
  epaulette: '🪖',
  'appliqué': '🧵',
  cantilevered: '🏗️',
  coping: '🧱',
  'load-bearing': '🏗️',
  troglodytic: '🦇',
  'apex predator': '🦁',
  molting: '🐦',
  cryptozoology: '🦄',
  parthenogenesis: '🧬',
  xenobiotic: '☣️',
  'epoch-making': '⭐',
  sanction: '🚫',
  'hydro-plane': '✈️',
  numismatist: '🪙',
  'lactic acid': '🔬',
  'stoppage time': '⏱️',
  quintathlon: '🏅',
  'neural network': '🧠',
  'edge computing': '☁️',

  // ══════════════════════════════════════════
  // Pazarlama ve Reklam
  // ══════════════════════════════════════════
  advertise: '📣', campaign: '📢', logo: '🎨', slogan: '💬',
  audience: '👥', poster: '🖼️', flyer: '📄', billboard: '🪧',
  sponsor: '💰', promote: '🚀', awareness: '💡', launch: '🚀',
  viral: '📱', strategy: '♟️', brochure: '📋', newsletter: '📰',
  catalog: '📚', publicity: '📣', reach: '🎯', publish: '📰',

  // ══════════════════════════════════════════
  // İnsan Kaynakları
  // ══════════════════════════════════════════
  employee: '👤', benefit: '🎁', absence: '🚫', attendance: '✅',
  payroll: '💰', compensation: '💳', background: '🔍', reference: '📋',
  orientation: '🧭', handbook: '📖', policy: '📜', inclusion: '🤝',
  grievance: '😤', termination: '🚪', redundancy: '📉', relocation: '🏠',
  workforce: '👥',

  // ══════════════════════════════════════════
  // İş ve Kariyer (A2)
  // ══════════════════════════════════════════
  performance: '📊', feedback: '💬', bonus: '💰', probation: '⚖️',
  freelance: '💻', remote: '🏠', turnover: '🔄', incentive: '🎯',
  onboard: '🚢', employment: '💼', dismissal: '🚪', merit: '🏅',
  appraise: '⭐', benchmark: '📏', collaborate: '🤝', delegate: '👆',
  roster: '📋', target: '🎯',

  // ══════════════════════════════════════════
  // Finans ve Ekonomi (A2)
  // ══════════════════════════════════════════
  tariff: '💰', subsidy: '💵', recession: '📉', capital: '💰',
  wealth: '💎', export: '📦', import: '📥', trade: '🤝',
  asset: '🏦', equity: '⚖️', valuation: '📊', portfolio: '💼',
  grant: '💵', allocation: '📊', repayment: '💳', borrowing: '🏦',
  wages: '💰', treasury: '🏛️', markup: '💹', overhead: '📊',

  // ══════════════════════════════════════════
  // Hukuk ve Yargı (A2)
  // ══════════════════════════════════════════
  lawsuit: '⚖️', plaintiff: '👤', defendant: '👤', statute: '📜',
  regulation: '📋', enforcement: '👮', jurisdiction: '🗺️', testimony: '🗣️',
  prosecute: '⚖️', acquit: '✅', convict: '🔒', parole: '🚶',
  complaint: '📋', allegation: '📢', breach: '💔', tort: '⚖️',
  clause: '📜', obligation: '🤝', infringe: '⚠️',

  // ══════════════════════════════════════════
  // Pazarlama ve Reklam (A2)
  // ══════════════════════════════════════════
  demographics: '👥', segmentation: '📊', positioning: '🎯',
  branding: '🏷️', identity: '🪪', engagement: '🤝', conversion: '🔄',
  analytics: '📊', keyword: '🔑', influencer: '⭐', affiliate: '🤝',
  testimonial: '💬', endorsement: '👍', niche: '🎯', persona: '🎭',
  outreach: '📣', prospecting: '🔍', referral: '📨', retention: '🔄',
  targeting: '🎯',

  // ══════════════════════════════════════════
  // İnsan Kaynakları (A2)
  // ══════════════════════════════════════════
  appraisal: '⭐', absenteeism: '🚫', burnout: '🔥', wellbeing: '💚',
  onboarding: '🚀', seniority: '👴', demotion: '📉', reinstatement: '🔄',
  whistleblower: '📣', remuneration: '💰', outplacement: '🚪',
  competency: '🎯', induction: '🎓', secondment: '🔄', headcount: '👥',
  collective: '🤝', labor: '💪', morale: '😊', motivation: '🚀',
  parental: '👨‍👩‍👧',

  // ══════════════════════════════════════════
  // İş ve Kariyer (B1)
  // ══════════════════════════════════════════
  restructuring: '🏗️', acquisition: '🤝', merger: '🔗', stakeholder: '👥',
  subsidiary: '🏢', franchising: '🏪', governance: '🏛️', audit: '🔍',
  compliance: '✅', logistics: '📦', corporate: '🏢', outsourcing: '🌐',
  liability: '⚖️', transparency: '🔍', succession: '👑', accountability: '📋',
  workflow: '🔄', mandate: '📜', hierarchy: '🏗️', probationary: '⏳',

  // ══════════════════════════════════════════
  // Finans ve Ekonomi (B1)
  // ══════════════════════════════════════════
  liquidity: '💧', volatility: '📈', hedge: '🛡️', commodity: '📦',
  derivative: '📊', austerity: '✂️', devaluation: '📉', appreciation: '📈',
  speculation: '🎲', collateral: '🏦', amortization: '📉',
  capitalization: '💰', securitization: '🔒', bankruptcy: '💸',
  microeconomics: '🔬', macroeconomics: '🌍', payable: '💳',
  receivable: '💰', monetary: '💰', quantitative: '📊',

  // ══════════════════════════════════════════
  // Hukuk ve Yargı (B1)
  // ══════════════════════════════════════════
  litigation: '⚖️', arbitration: '🤝', mediation: '🕊️', precedent: '📚',
  constitution: '📜', amendment: '✏️', sovereignty: '👑', tribunal: '⚖️',
  indictment: '📋', extradition: '✈️', subpoena: '📜', perjury: '🤥',
  injunction: '🚫', affidavit: '📋', deposition: '🗣️', negligence: '⚠️',
  malpractice: '🏥', antitrust: '🏢', infringement: '⚠️', contempt: '😤',

  // ══════════════════════════════════════════
  // Pazarlama ve Reklam (B1)
  // ══════════════════════════════════════════
  omnichannel: '🌐', programmatic: '💻', remarketing: '🔄',
  attribution: '📊', pipeline: '🔄', automation: '🤖', disruption: '💥',
  inbound: '📥', outbound: '📤', copywriting: '✍️', multimedia: '🎬',
  interactive: '👆', immersive: '🥽', personalization: '🎯',
  localization: '🗺️', monetize: '💰', rebranding: '🔄', sponsorship: '💰',
  ambassador: '👤', funnel: '🔻',

  // ══════════════════════════════════════════
  // İnsan Kaynakları (B1)
  // ══════════════════════════════════════════
  talent: '⭐', staffing: '👥', evaluation: '📊', recruitment: '🔍',
  negotiation: '🤝', disciplinary: '⚖️', severance: '💰',
  productivity: '📈', delegation: '👆', collaborative: '🤝',
  certification: '🎓', proficiency: '⭐', entitlement: '📋',
  inclusivity: '🤝', empower: '💪', formalize: '📜', harassment: '🚫',
  paternity: '👨‍👦', successor: '👑', continuity: '🔄',

  // ══════════════════════════════════════════
  // İş ve Kariyer (B2)
  // ══════════════════════════════════════════
  fiduciary: '🏦', insolvency: '💸', divestiture: '📉', synergy: '🤝',
  paradigm: '💡', retrenchment: '✂️', downsizing: '📉', offshoring: '🌍',
  monetization: '💰', intrapreneurship: '💡', crowdsourcing: '👥',
  headhunting: '🔍', micromanagement: '🔬', entrepreneurial: '🚀',
  empowerment: '💪', visionary: '🔭', meritocracy: '🏅', bureaucracy: '🏛️',
  attrition: '📉', decentralization: '🌐',

  // ══════════════════════════════════════════
  // Finans ve Ekonomi (B2)
  // ══════════════════════════════════════════
  stagflation: '📊', neoliberal: '🌍', financialization: '💰',
  cryptocurrency: '🪙', disinflation: '📉', hyperinflation: '📈',
  contagion: '🦠', bailout: '💰', regulatory: '📋', sovereign: '👑',
  actuarial: '📊', monetarism: '💰', mercantilism: '🏪',
  protectionism: '🛡️', deflation: '📉', deregulation: '🔓',
  liberalization: '🌐', globalization: '🌍', crowdfunding: '💰',
  foreclosure: '🏚️',

  // ══════════════════════════════════════════
  // Hukuk ve Yargı (B2)
  // ══════════════════════════════════════════
  jurisprudence: '⚖️', promulgation: '📢', adjudication: '⚖️',
  culpability: '🤔', recidivism: '🔄', felony: '🔒', misdemeanor: '⚠️',
  restitution: '💰', expropriation: '🏚️', codification: '📜',
  ratification: '✅', abrogation: '🚫', interlocutory: '⚖️',
  exculpatory: '✅', subrogation: '🔄', lien: '🏦', derogation: '📉',
  acquittal: '✅', habeas: '📜', writ: '📜',

  // ══════════════════════════════════════════
  // Pazarlama ve Reklam (B2)
  // ══════════════════════════════════════════
  neuromarketing: '🧠', psychographic: '🧠', gamification: '🎮',
  microtargeting: '🎯', disintermediation: '🔗', virality: '📱',
  parasocial: '📺', astroturfing: '🌱', greenwashing: '♻️',
  syndication: '🔗', curation: '🎨', aggregation: '📊', cobranding: '🤝',
  clickbait: '🎣', storyboard: '🎬', hyperlocal: '📍', transmedia: '🎬',
  subliminal: '🧠', framing: '🖼️', amplification: '📢',

  // ══════════════════════════════════════════
  // İnsan Kaynakları (B2)
  // ══════════════════════════════════════════
  psychometric: '🧠', organizational: '🏢', benchmarking: '📊',
  whistleblowing: '📣', unionization: '🤝', egalitarianism: '⚖️',
  ethnicity: '🌍', intersectionality: '🔗', neurodiversity: '🧠',
  cohesion: '🤝', autonomy: '🔓', reintegration: '🔄',
  conscientious: '💚', remunerate: '💰', calibrate: '⚖️',
  segregation: '🚫', pluralism: '🌍', nepotism: '👨‍👩‍👦', favoritism: '⭐',
  ageism: '👴',

  // ══════════════════════════════════════════
  // Medya ve Habercilik
  // ══════════════════════════════════════════
  headline: '📰', broadcast: '📡', viewer: '👁️', podcast: '🎙️',
  editor: '✏️', anchor: '⚓', newsroom: '📰', reporter: '🎤',
  press: '🖨️', channel: '📺', censor: '🚫', propaganda: '📢',
  correspondent: '✉️', cameraman: '🎥', subtitle: '💬', caption: '💬',
  coverage: '📰', exclusive: '⭐', gazette: '📰', tabloid: '📰',

  // Medya ve Habercilik (A2)
  editorial: '✍️', infographic: '📊', trending: '📈', hashtag: '#️⃣',
  paparazzi: '📸', byline: '✍️', columnist: '✍️', pundit: '🎤',
  soundbite: '🎙️', sensational: '🔥', readership: '📖', scoop: '📰',
  spin: '🌀', broadsheet: '📰', paywall: '🔒', satirical: '😄',
  bias: '⚖️', notify: '🔔', leak: '💧', expose: '📢',

  // Medya ve Habercilik (B1)
  objectivity: '⚖️', gatekeeping: '🚪', polarisation: '⚡',
  deepfake: '🎭', misinformation: '❌', stereotype: '🎭', narrative: '📖',
  rhetoric: '🗣️', censorship: '🚫', watchdog: '🐕', commentary: '💬',
  newsworthy: '📰', rating: '⭐', syndicate: '🔗', newswire: '📡',
  spokesperson: '🗣️', reputable: '✅', agenda: '📋', moratorium: '🛑',
  investigative: '🔍',

  // Medya ve Habercilik (B2)
  libel: '⚖️', defamation: '😤', plurality: '🌍', conglomerate: '🏢',
  muckraking: '🔍', sockpuppet: '🪆', partisanship: '⚡',
  sensationalism: '🔥', epistemological: '🧠', impartiality: '⚖️',
  fabricate: '🎭', misrepresent: '❌', substantiate: '✅', rebuttal: '↩️',
  retraction: '🔄', omission: '🚫', credible: '✅', verbatim: '📜',
  polarize: '⚡', subtlety: '🎭',

  // ══════════════════════════════════════════
  // Çevre ve Sürdürülebilirlik
  // ══════════════════════════════════════════
  recycle: '♻️', pollution: '🏭', solar: '☀️', waste: '🗑️',
  litter: '🗑️', compost: '🌱', smog: '🌫️', toxic: '☣️',
  landfill: '🗑️', carbon: '💨', greenhouse: '🌡️', ozone: '🌍',
  reuse: '♻️', biodegradable: '🌿', cleanup: '🧹', electricity: '⚡',
  nuclear: '☢️', windmill: '💨', ecology: '🌍', pesticide: '🐛',

  // Çevre ve Sürdürülebilirlik (A2)
  reforestation: '🌲', logging: '🪵', fossil: '🦕', turbine: '💨',
  footprint: '👣', offset: '⚖️', quota: '📊', treaty: '📜',
  convention: '🤝', summit: '🏔️', pledge: '🤝', herbicide: '🌿',
  fertilizer: '🌱', runoff: '💧', evaporation: '💨', monsoon: '🌧️',
  tributary: '🏞️', wetland: '🦆', delta: '🌊', geothermal: '🌋',

  // Çevre ve Sürdürülebilirlik (B1)
  warming: '🌡️', neutral: '⚖️', offshore: '🌊', biodegradation: '🌿',
  contaminate: '☣️', tundra: '❄️', methane: '💨', nitrogen: '💨',
  algae: '🌊', plankton: '🔬', aquatic: '🐠', species: '🦋',
  vegetation: '🌿', radiation: '☢️', acidification: '🧪', rebate: '💰',
  legislation: '📜', directive: '📋', abatement: '📉', mitigation: '🛡️',

  // Çevre ve Sürdürülebilirlik (B2)
  biotic: '🌿', precipice: '🏔️', sequestration: '🌲',
  geoengineering: '🔬', decarbonisation: '🌿', resilience: '💪',
  vulnerability: '⚠️', stewardship: '🌍', predation: '🦁',
  photosynthesis: '🌿', bioaccumulation: '🔗', biochar: '🌱',
  aerosol: '💨', monoculture: '🌾', agroforestry: '🌲',
  salinisation: '🧂', hydropower: '💧', biomass: '🌿', rewilding: '🦌',
  phytoplankton: '🔬',

  // ══════════════════════════════════════════
  // Yemek Kültürü ve Mutfak Sanatı
  // ══════════════════════════════════════════
  bake: '🍞', grill: '🥩', fry: '🍳', boil: '🫕', roast: '🍗',
  chop: '🔪', recipe: '📋', menu: '📋', oven: '♨️', plate: '🍽️',
  fork: '🍴', knife: '🔪', bowl: '🥣', pan: '🍳', tablespoon: '🥄',
  teaspoon: '🥄', platter: '🍽️', dine: '🍽️', flavor: '😋', aroma: '🌸',

  // Yemek Kültürü ve Mutfak Sanatı (A2)
  broth: '🫕', dough: '🍞', pastry: '🥐', steam: '♨️', simmer: '🫕',
  dice: '🔪', mince: '🥩', knead: '🍞', ferment: '🍺', pickle: '🥒',
  skillet: '🍳', ladle: '🥄', whisk: '🥣', spatula: '🍳', sieve: '🧁',
  saucepan: '🫕', barbecue: '🍖', brunch: '🥞', takeaway: '🥡',
  catering: '🍽️',

  // Yemek Kültürü ve Mutfak Sanatı (B1)
  vegan: '🥬', dietary: '🥗', calorie: '🔥', buffet: '🍽️',
  condiment: '🧂', herb: '🌿', plating: '🍽️', pairing: '🍷',
  sourdough: '🍞', tasting: '😋', seasonal: '🍂', artisan: '👨‍🍳',
  fusion: '🌍', gourmet: '👨‍🍳', glaze: '✨', braise: '🫕',
  deglaze: '🫕', poach: '🥚', wok: '🍳',

  // Yemek Kültürü ve Mutfak Sanatı (B2)
  michelin: '⭐', saute: '🍳', broil: '🔥', desiccate: '🌵',
  render: '🧈', flambe: '🔥', julienne: '🥕', confit: '🍖',
  terroir: '🍷', provenance: '🗺️', traceability: '🔍', signature: '✍️',
  deconstruct: '🔬', texturize: '🎨', mouthfeel: '😋', sear: '🔥',
  baste: '🍗', roux: '🫕', tempering: '🍫', zest: '🍋',

  // ══════════════════════════════════════════
  // Seyahat ve Turizm
  // ══════════════════════════════════════════
  hostel: '🏠', accommodation: '🏨', sightseeing: '👁️', souvenir: '🎁',
  tourism: '🗺️', visa: '📜', reservation: '📅', guide: '🧭',
  traveller: '🧳', customs: '🛂', boarding: '✈️', airline: '✈️',
  flight: '✈️', arrival: '🛬', excursion: '🚌', cruise: '🚢',
  resort: '🏖️', campsite: '⛺', navigator: '🧭', voucher: '🎟️',

  // Seyahat ve Turizm (A2)
  backpacker: '🎒', immigration: '🛂', quarantine: '🏥', charter: '✈️',
  trekking: '🥾', expedition: '🏔️', folklore: '🎭', carnival: '🎡',
  festival: '🎉', pilgrimage: '🕌', shrine: '⛩️', cathedral: '⛪',
  mosque: '🕌', consulate: '🏛️', courier: '📦', interpreter: '🗣️',
  safari: '🦁', fjord: '🏔️', archipelago: '🏝️', waterfall: '🌊',

  // Seyahat ve Turizm (B1)
  nomad: '🏕️', wanderlust: '✈️', cosmopolitan: '🌍', expatriate: '🌍',
  voluntourism: '🤝', ecotourism: '🌿', timezone: '🕐', jetlag: '😴',
  airfare: '💰', roundtrip: '🔄', stopover: '🛑', concierge: '🛎️',
  hospitality: '🤝', amenity: '🛁', overbooked: '📅', offseason: '📅',
  backpacking: '🎒', embark: '⚓', complimentary: '🎁',

  // Seyahat ve Turizm (B2)
  diaspora: '🌍', xenophilia: '❤️', geotourism: '🌋',
  gastrotourism: '🍽️', intrepid: '💪', reconnaissance: '🔍',
  traverse: '🗺️', circumnavigate: '🌍', sojourn: '🏠', odyssey: '🗺️',
  voyage: '🚢', ramble: '🚶', meander: '🏞️', detour: '🔄',
  itinerant: '🚶', gallivant: '✈️', travelogue: '📖',
  documentation: '📋', acclimatisation: '🌡️', vignette: '📸',

  // ══════════════════════════════════════════
  // Hobiler ve Boş Zaman
  // ══════════════════════════════════════════
  hobby: '🎨', knit: '🧶', sew: '🧵', sketch: '✏️', yoga: '🧘',
  chess: '♟️', painting: '🎨', photography: '📸', gardening: '🌱',
  collect: '🏆', reading: '📖', running: '🏃', crafts: '✂️',
  puzzle: '🧩', stamp: '📮', coin: '🪙', model: '🚗', fishing: '🎣',
  boardgame: '🎲',

  // Hobiler ve Boş Zaman (A2)
  pottery: '🏺', origami: '📄', calligraphy: '✍️', birdwatching: '🦜',
  hiking: '🥾', archery: '🏹', sailing: '⛵', surfing: '🏄',
  woodwork: '🪚', weave: '🧶', embroider: '🧵', quilt: '🛏️',
  cosplay: '🎭', gaming: '🎮', tabletop: '🎲', jigsaw: '🧩',
  crossword: '📝', sudoku: '🔢', bookclub: '📚', volunteering: '🤝',

  // Hobiler ve Boş Zaman (B1)
  sculpt: '🗿', carve: '🪚', beekeeping: '🐝', esport: '🎮',
  geocaching: '📍', journaling: '📔', scrapbooking: '📷', taxidermy: '🦌',
  leatherwork: '🧳', metalwork: '🔧', kite: '🪁', terrarium: '🌿',
  aquarium: '🐠', meditation: '🧘', parkour: '🏃', freerunning: '🏃',
  droning: '🚁', vlogging: '📹', upcycling: '♻️',

  // Hobiler ve Boş Zaman (B2)
  numismatics: '🪙', philately: '📮', viticulture: '🍷',
  horticulture: '🌺', entomology: '🦋', ornithology: '🦜',
  spelunking: '🦇', falconry: '🦅', glassblowing: '🫧', engraving: '✍️',
  luthiery: '🎸', blacksmithing: '🔨', lapidary: '💎', whittling: '🪚',
  marquetry: '🪵', macrame: '🧶', decoupage: '✂️', bookbinding: '📚',
  antiquing: '🏺', mycology: '🍄',
};

/**
 * Emoji yerine büyük rakam/metin gösterilecek kelimeler.
 * WordVisual bu listeyi kontrol ederek sayıları metin olarak render eder.
 */
export const NUMBER_TEXT = {
  eleven:   '11',
  twelve:   '12',
  thirteen: '13',
  fourteen: '14',
  fifteen:  '15',
  sixteen:  '16',
  seventeen:'17',
  eighteen: '18',
  nineteen: '19',
  twenty:   '20',
  thirty:   '30',
  forty:    '40',
  fifty:    '50',
  sixty:    '60',
  seventy:  '70',
  eighty:   '80',
  ninety:   '90',
  hundred:  '100',
  thousand: '1K',
  million:  '1M',
  billion:  '1B',
  // matematik terimleri
  binary:     '01',
  sum:        '∑',
  half:       '½',
  quarter:    '¼',
  approximate:'≈',
  equal:      '=',
  infinite:   '∞',
};
