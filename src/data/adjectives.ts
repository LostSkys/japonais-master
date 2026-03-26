import { type Word } from '../data';

export const adjectiveWords: Word[] = [
  // --- TAILLE & DIMENSIONS ---
  { id: 6001, en: "Big", fr: "Grand", jp: "大きい", romaji: "ōkii" },
  { id: 6002, en: "Small", fr: "Petit", jp: "小さい", romaji: "chiisai" },
  { id: 6003, en: "Long", fr: "Long", jp: "長い", romaji: "nagai" },
  { id: 6004, en: "Short", fr: "Court", jp: "短い", romaji: "mijikai" },
  { id: 6005, en: "Wide / Spacious", fr: "Large / Spacieux", jp: "広い", romaji: "hiroi" },
  { id: 6006, en: "Narrow / Tight", fr: "Étroit / Serré", jp: "狭い", romaji: "semai" },
  { id: 6007, en: "Thick", fr: "Épais", jp: "厚い", romaji: "atsui" },
  { id: 6008, en: "Thin", fr: "Mince / Fin", jp: "薄い", romaji: "usui" },
  { id: 6009, en: "High / Tall / Expensive", fr: "Haut / Grand / Cher", jp: "高い", romaji: "takai" },
  { id: 6010, en: "Low", fr: "Bas", jp: "低い", romaji: "hikui" },

  // --- TEMPÉRATURE & MÉTÉO ---
  { id: 6011, en: "Hot (weather)", fr: "Chaud (météo)", jp: "暑い", romaji: "atsui" },
  { id: 6012, en: "Cold (weather)", fr: "Froid (météo)", jp: "寒い", romaji: "samui" },
  { id: 6013, en: "Warm", fr: "Tiède / Doux", jp: "暖かい", romaji: "atatakai" },
  { id: 6014, en: "Cool", fr: "Frais", jp: "涼しい", romaji: "suzushii" },
  { id: 6015, en: "Hot (to touch)", fr: "Chaud (objet)", jp: "熱い", romaji: "atsui" },
  { id: 6016, en: "Cold (to touch)", fr: "Froid (objet)", jp: "冷たい", romaji: "tsumetai" },

  // --- ÉVALUATION & QUALITÉ ---
  { id: 6017, en: "Good", fr: "Bien / Bon", jp: "良い", romaji: "yoi / ii" },
  { id: 6018, en: "Bad", fr: "Mauvais", jp: "悪い", romaji: "warui" },
  { id: 6019, en: "New", fr: "Nouveau", jp: "新しい", romaji: "atarashii" },
  { id: 6020, en: "Old", fr: "Vieux", jp: "古い", romaji: "furui" },
  { id: 6021, en: "Beautiful / Clean", fr: "Beau / Propre", jp: "綺麗", romaji: "kirei" },
  { id: 6022, en: "Dirty", fr: "Sale", jp: "汚い", romaji: "kitanai" },
  { id: 6023, en: "Famous", fr: "Célèbre", jp: "有名", romaji: "yūmei" },
  { id: 6024, en: "Important", fr: "Important", jp: "大切", romaji: "taisetsu" },
  { id: 6025, en: "Wonderful", fr: "Merveilleux", jp: "素晴らしい", romaji: "subarashii" },

  // --- ÉMOTIONS & SENTIMENTS ---
  { id: 6026, en: "Happy", fr: "Heureux", jp: "嬉しい", romaji: "ureshii" },
  { id: 6027, en: "Sad", fr: "Triste", jp: "悲しい", romaji: "kanashii" },
  { id: 6028, en: "Enjoyable / Fun", fr: "Amusant", jp: "楽しい", romaji: "tanoshii" },
  { id: 6029, en: "Interesting / Funny", fr: "Intéressant", jp: "面白い", romaji: "omoshiroi" },
  { id: 6030, en: "Boring", fr: "Ennuyeux", jp: "退屈", romaji: "taikutsu" },
  { id: 6031, en: "Lonely", fr: "Seul / Solitaire", jp: "寂しい", romaji: "sabishii" },
  { id: 6032, en: "Scary", fr: "Effrayant", jp: "怖い", romaji: "kowai" },
  { id: 6033, en: "Envied / Jealous", fr: "Jaloux", jp: "羨ましい", romaji: "urayamashii" },
  { id: 6034, en: "Shy", fr: "Timide", jp: "恥ずかしい", romaji: "hazukashii" },
  { id: 6035, en: "Painful", fr: "Douloureux", jp: "痛い", romaji: "itai" },

  // --- DIFFICULTÉ & VITESSE ---
  { id: 6036, en: "Difficult", fr: "Difficile", jp: "難しい", romaji: "muzukashii" },
  { id: 6037, en: "Easy", fr: "Facile", jp: "簡単", romaji: "kantan" },
  { id: 6038, en: "Fast / Early", fr: "Rapide / Tôt", jp: "早い", romaji: "hayai" },
  { id: 6039, en: "Slow / Late", fr: "Lent / Tard", jp: "遅い", romaji: "osoi" },
  { id: 6040, en: "Strong", fr: "Fort", jp: "強い", romaji: "tsuyoi" },
  { id: 6041, en: "Weak", fr: "Faible", jp: "弱い", romaji: "yowai" },

  // --- SENSATIONS ALIMENTAIRES ---
  { id: 6042, en: "Delicious", fr: "Délicieux", jp: "美味しい", romaji: "oishii" },
  { id: 6043, en: "Tastes bad", fr: "Mauvais goût", jp: "まずい", romaji: "mazui" },
  { id: 6044, en: "Sweet", fr: "Sucré", jp: "甘い", romaji: "amai" },
  { id: 6045, en: "Spicy", fr: "Épicé", jp: "辛い", romaji: "karai" },
  { id: 6046, en: "Salty", fr: "Salé", jp: "塩辛い", romaji: "shiokarai" },
  { id: 6047, en: "Sour", fr: "Acide", jp: "酸っぱい", romaji: "suppai" },
  { id: 6048, en: "Bitter", fr: "Amer", jp: "苦い", romaji: "nigai" },

  // --- APPARENCE PHYSIQUE ---
  { id: 6049, en: "Cute", fr: "Mignon", jp: "可愛い", romaji: "kawaii" },
  { id: 6050, en: "Cool / Handsome", fr: "Stylé / Beau", jp: "格好いい", romaji: "kakkoii" },
  { id: 6051, en: "Ugly", fr: "Laid / Moche", jp: "不細工", romaji: "busaiku" },
  { id: 6052, en: "Fat", fr: "Gros", jp: "太った", romaji: "futotta" },
  { id: 6053, en: "Thin / Skinny", fr: "Mince", jp: "痩せた", romaji: "yaseta" },
  { id: 6054, en: "Young", fr: "Jeune", jp: "若い", romaji: "wakai" },

  // --- ÉTATS PERSONNELS ---
  { id: 6055, en: "Busy", fr: "Occupé", jp: "忙しい", romaji: "isogashii" },
  { id: 6056, en: "Free (time)", fr: "Libre (temps)", jp: "暇", romaji: "hima" },
  { id: 6057, en: "Healthy / Energetic", fr: "En forme", jp: "元気", romaji: "genki" },
  { id: 6058, en: "Polite", fr: "Poli", jp: "丁寧", romaji: "teinei" },
  { id: 6059, en: "Kind", fr: "Gentil", jp: "優しい", romaji: "yasashii" },
  { id: 6060, en: "Mean / Strict", fr: "Sévère / Méchant", jp: "厳しい", romaji: "kibishii" },

  // --- COULEURS (EN ADJECTIF) ---
  { id: 6061, en: "Red", fr: "Rouge", jp: "赤い", romaji: "akai" },
  { id: 6062, en: "Blue", fr: "Bleu", jp: "青い", romaji: "aoi" },
  { id: 6063, en: "Black", fr: "Noir", jp: "黒い", romaji: "kuroi" },
  { id: 6064, en: "White", fr: "Blanc", jp: "白い", romaji: "shiroi" },
  { id: 6065, en: "Yellow", fr: "Jaune", jp: "黄色い", romaji: "kiiroi" },
  { id: 6066, en: "Brown", fr: "Marron", jp: "茶色い", romaji: "chairoi" },

  // --- POIDS & PRESSION ---
  { id: 6067, en: "Heavy", fr: "Lourd", jp: "重い", romaji: "omoi" },
  { id: 6068, en: "Light (weight)", fr: "Léger", jp: "軽い", romaji: "karui" },
  { id: 6069, en: "Hard / Tough", fr: "Dur", jp: "硬い", romaji: "katai" },
  { id: 6070, en: "Soft", fr: "Mou / Doux", jp: "柔らかい", romaji: "yawarakai" },

  // --- DISTANCE & QUANTITÉ ---
  { id: 6071, en: "Far", fr: "Loin", jp: "遠い", romaji: "tooi" },
  { id: 6072, en: "Near / Close", fr: "Proche", jp: "近い", romaji: "chikai" },
  { id: 6073, en: "Many / Much", fr: "Beaucoup", jp: "多い", romaji: "ooi" },
  { id: 6074, en: "Few / Little", fr: "Peu", jp: "少ない", romaji: "sukunai" },

  // --- LUMINOSITÉ ---
  { id: 6075, en: "Bright", fr: "Lumineux", jp: "明るい", romaji: "akarui" },
  { id: 6076, en: "Dark", fr: "Sombre", jp: "暗い", romaji: "kurai" },

  // --- DIVERS & UTILES ---
  { id: 6077, en: "Noisy", fr: "Bruyant", jp: "うるさい", romaji: "urusai" },
  { id: 6078, en: "Quiet", fr: "Calme", jp: "静か", romaji: "shizuka" },
  { id: 6079, en: "Dangerous", fr: "Dangereux", jp: "危ない", romaji: "abunai" },
  { id: 6080, en: "Safe", fr: "Sûr / En sécurité", jp: "安全", romaji: "anzen" },
  { id: 6081, en: "Inconvenient", fr: "Peu commode", jp: "不便", romaji: "fuben" },
  { id: 6082, en: "Convenient", fr: "Pratique", jp: "便利", romaji: "benri" },
  { id: 6083, en: "Strange", fr: "Bizarre", jp: "変", romaji: "hen" },
  { id: 6084, en: "Great / Amazing", fr: "Génial / Énorme", jp: "凄い", romaji: "sugoi" },
  { id: 6085, en: "Scary / Dreadful", fr: "Terrible", jp: "恐ろしい", romaji: "osoroshii" },
  { id: 6086, en: "Poor", fr: "Pauvre", jp: "貧しい", romaji: "mazushii" },
  { id: 6087, en: "Rich", fr: "Riche", jp: "金持ち", romaji: "kanemochi" },
  { id: 6088, en: "Rare", fr: "Rare", jp: "珍しい", romaji: "mezurashii" },
  { id: 6089, en: "Thirsty", fr: "Assoiffé", jp: "喉が渇いた", romaji: "nodo ga kawaita" },
  { id: 6090, en: "Hungry", fr: "Affamé", jp: "お腹が空いた", romaji: "onaka ga suita" },

  // --- ÉTATS DIVERS ---
  { id: 6091, en: "Full (stomach)", fr: "Rassasié", jp: "お腹がいっぱい", romaji: "onaka ga ippai" },
  { id: 6092, en: "Sleepy", fr: "Fatigué (sommeil)", jp: "眠い", romaji: "nemui" },
  { id: 6093, en: "Strict", fr: "Strict", jp: "厳しい", romaji: "kibishii" },
  { id: 6094, en: "Deep", fr: "Profond", jp: "深い", romaji: "fukai" },
  { id: 6095, en: "Shallow", fr: "Peu profond", jp: "浅い", romaji: "asai" },
  { id: 6096, en: "Correct", fr: "Correct", jp: "正しい", romaji: "tadashii" },
  { id: 6097, en: "Rare / Unusual", fr: "Inhabituel", jp: "稀", romaji: "mare" },
  { id: 6098, en: "Free / Random", fr: "Libre / Arbitre", jp: "自由", romaji: "jiyū" },
  { id: 6099, en: "Wasteful", fr: "Gaspillage", jp: "勿体ない", romaji: "mottainai" },
  { id: 6100, en: "Various", fr: "Divers", jp: "色々", romaji: "iroiro" },
  // --- PERSONNALITÉ & CARACTÈRE ---
  { id: 6101, en: "Honest", fr: "Honnête", jp: "正直", romaji: "shōjiki" },
  { id: 6102, en: "Selfish", fr: "Égoïste", jp: "わがまま", romaji: "wagamama" },
  { id: 6103, en: "Serious / Diligent", fr: "Sérieux", jp: "真面目", romaji: "majime" },
  { id: 6104, en: "Lazy", fr: "Paresseux", jp: "怠惰", romaji: "taida" },
  { id: 6105, en: "Nervous / Anxious", fr: "Anxieux", jp: "不安", romaji: "fuan" },
  { id: 6106, en: "Confident", fr: "Confiant", jp: "自信がある", romaji: "jishin ga aru" },
  { id: 6107, en: "Smart / Intelligent", fr: "Intelligent", jp: "頭がいい", romaji: "atama ga ii" },
  { id: 6108, en: "Stupid / Silly", fr: "Bête / Idiot", jp: "馬鹿", romaji: "baka" },
  { id: 6109, en: "Active / Lively", fr: "Vif / Actif", jp: "活発", romaji: "kappatsu" },
  { id: 6110, en: "Calm / Composed", fr: "Calme / Posé", jp: "冷静", romaji: "reisei" },

  // --- ÉTATS MENTAUX & RESSENTIS ---
  { id: 6111, en: "Refreshing", fr: "Rafraîchissant", jp: "爽やか", romaji: "sayayaka" },
  { id: 6112, en: "Nostalgic", fr: "Nostalgique", jp: "懐かしい", romaji: "natsukashii" },
  { id: 6113, en: "Regretful", fr: "Regrettable", jp: "惜しい", romaji: "oshii" },
  { id: 6114, en: "Troublesome / Annoying", fr: "Ennuyeux / Pénible", jp: "面倒くさい", romaji: "mendōkusai" },
  { id: 6115, en: "Wonderful / Splendid", fr: "Magnifique", jp: "見事", romaji: "migoto" },
  { id: 6116, en: "Miserable / Pitiful", fr: "Misérable", jp: "惨め", romaji: "mijime" },
  { id: 6117, en: "Nasty / Gross", fr: "Dégoûtant / Désagréable", jp: "嫌", romaji: "iya" },

  // --- TEXTURES & ÉTATS PHYSIQUES ---
  { id: 6118, en: "Smooth / Silky", fr: "Lisse", jp: "滑らか", romaji: "nameraka" },
  { id: 6119, en: "Sticky", fr: "Collant / Gluant", jp: "粘り強い", romaji: "nebarizuyoi" },
  { id: 6120, en: "Rough (surface)", fr: "Rêche / Rugueux", jp: "ざらざら", romaji: "zarazara" },
  { id: 6121, en: "Fluffy", fr: "Moelleux / Duveteux", jp: "ふわふわ", romaji: "fuwafuwa" },
  { id: 6122, en: "Dry", fr: "Sec", jp: "乾いた", romaji: "kawaita" },
  { id: 6123, en: "Wet", fr: "Mouillé", jp: "濡れた", romaji: "nureta" },
  { id: 6124, en: "Fragile", fr: "Fragile", jp: "脆い", romaji: "moroi" },
  { id: 6125, en: "Sharp", fr: "Tranchant / Pointu", jp: "鋭い", romaji: "surudoi" },
  { id: 6126, en: "Dull (blade)", fr: "Émoussé", jp: "鈍い", romaji: "nibui" },

  // --- VALEURS & COMPARAISONS ---
  { id: 6127, en: "Perfect", fr: "Parfait", jp: "完璧", romaji: "kanpeki" },
  { id: 6128, en: "Sufficient / Enough", fr: "Suffisant", jp: "十分", romaji: "jūbun" },
  { id: 6129, en: "Insufficient", fr: "Insuffisant", jp: "不十分", romaji: "fujūbun" },
  { id: 6130, en: "Necessary", fr: "Nécessaire", jp: "必要", romaji: "hitsuyō" },
  { id: 6131, en: "Unnecessary", fr: "Inutile", jp: "不要", romaji: "fuyō" },
  { id: 6132, en: "Ordinary / Normal", fr: "Ordinaire / Normal", jp: "普通", romaji: "futsū" },
  { id: 6133, en: "Special", fr: "Spécial", jp: "特別", romaji: "tokubetsu" },
  { id: 6134, en: "Ideal", fr: "Idéal", jp: "理想的", romaji: "risōteki" },

  // --- CLIMAT & ENVIRONNEMENT ---
  { id: 6135, en: "Humid", fr: "Humide", jp: "蒸し暑い", romaji: "mushiatsui" },
  { id: 6136, en: "Windy", fr: "Venteux", jp: "風が強い", romaji: "kaze ga tsuyoi" },
  { id: 6137, en: "Clear (weather)", fr: "Clair / Ensoleillé", jp: "晴天", romaji: "seiten" },
  { id: 6138, en: "Cloudy", fr: "Nuageux", jp: "曇り", romaji: "kumori" },
  { id: 6139, en: "Dangerous / Risky", fr: "Risqué", jp: "物騒", romaji: "bussō" },
  { id: 6140, en: "Lively (place)", fr: "Animé / Vivant", jp: "賑やか", romaji: "nigiyaka" },

  // --- NUANCES DE COULEURS & APPARENCE ---
  { id: 6141, en: "Bright / Vivid", fr: "Vif / Éclatant", jp: "鮮やか", romaji: "azayaka" },
  { id: 6142, en: "Pale / Light", fr: "Pâle", jp: "淡い", romaji: "awai" },
  { id: 6143, en: "Transparent", fr: "Transparent", jp: "透明", romaji: "tōmei" },
  { id: 6144, en: "Colorful", fr: "Coloré", jp: "カラフル", romaji: "kara furu" },
  { id: 6145, en: "Fancy / Flashy", fr: "Voyant / Luxueux", jp: "派手", romaji: "hade" },
  { id: 6146, en: "Simple / Plain", fr: "Simple / Sobre", jp: "地味", romaji: "jimi" },

  // --- TEMPS & DURÉE ---
  { id: 6147, en: "Frequent", fr: "Fréquent", jp: "頻繁", romaji: "hinpan" },
  { id: 6148, en: "Sudden", fr: "Soudain", jp: "急", romaji: "kyū" },
  { id: 6149, en: "Temporary", fr: "Temporaire", jp: "一時的", romaji: "ichijiteki" },
  { id: 6150, en: "Eternal", fr: "Éternel", jp: "永遠", romaji: "eien" },

  // --- SENSATIONS ---
  { id: 6151, en: "Itchy", fr: "Qui gratte", jp: "痒い", romaji: "kayui" },
  { id: 6152, en: "Stinky", fr: "Qui pue", jp: "臭い", romaji: "kusai" },
  { id: 6153, en: "Dazzling / Bright", fr: "Éblouissant", jp: "眩しい", romaji: "mabushii" },
  { id: 6154, en: "Heavy (air/feeling)", fr: "Pesant / Lourd", jp: "重苦しい", romaji: "omokurushii" },

  // --- DIVERS & PRÉCIS ---
  { id: 6155, en: "Skilled / Good at", fr: "Doué / Adroit", jp: "上手", romaji: "jōzu" },
  { id: 6156, en: "Unskilled / Poor at", fr: "Maladroit", jp: "下手", romaji: "heta" },
  { id: 6157, en: "Tough / Hard (life)", fr: "Dur / Pénible", jp: "辛い", romaji: "tsurai" },
  { id: 6158, en: "Lucky", fr: "Chanceux", jp: "運がいい", romaji: "un ga ii" },
  { id: 6159, en: "Unlucky", fr: "Malchanceux", jp: "運が悪い", romaji: "un ga warui" },
  { id: 6160, en: "Pitiable / Poor thing", fr: "Pauvre (compatissant)", jp: "可哀想", romaji: "kawaisō" },

  // --- [On complète jusqu'à 200 avec des variantes et précisions] ---
  { id: 6161, en: "Rich (flavor)", fr: "Riche (goût)", jp: "濃厚", romaji: "nōkō" },
  { id: 6162, en: "Light (flavor)", fr: "Léger (goût)", jp: "あっさり", romaji: "assari" },
  { id: 6163, en: "Round", fr: "Rond", jp: "丸い", romaji: "marui" },
  { id: 6164, en: "Square (shape)", fr: "Carré", jp: "四角い", romaji: "shikakui" },
  { id: 6165, en: "True / Real", fr: "Vrai / Réel", jp: "本当", romaji: "hontō" },
  { id: 6166, en: "Fake", fr: "Faux", jp: "偽物", romaji: "nisemono" },
  { id: 6167, en: "Innocent", fr: "Innocent", jp: "無実", romaji: "mujitsu" },
  { id: 6168, en: "Guilty", fr: "Coupable", jp: "有罪", romaji: "yūzai" },
  { id: 6169, en: "Possible", fr: "Possible", jp: "可能", romaji: "kanō" },
  { id: 6170, en: "Impossible", fr: "Impossible", jp: "不可能", romaji: "fukanō" },
  { id: 6171, en: "Active", fr: "Actif", jp: "積極的", romaji: "sekkyokuteki" },
  { id: 6172, en: "Passive", fr: "Passif", jp: "消極的", romaji: "shōkyokuteki" },
  { id: 6173, en: "Formal", fr: "Formel", jp: "公式", romaji: "kōshiki" },
  { id: 6174, en: "Informal", fr: "Informel", jp: "非公式", romaji: "hikōshiki" },
  { id: 6175, en: "Detailed", fr: "Détaillé", jp: "詳しい", romaji: "kuwashii" },
  { id: 6176, en: "Vague / Ambiguous", fr: "Vague / Flou", jp: "曖昧", romaji: "aimai" },
  { id: 6177, en: "Great / Noble", fr: "Grand / Noble", jp: "偉い", romaji: "erai" },
  { id: 6178, en: "Loud (voice)", fr: "Fort (voix)", jp: "大きい声", romaji: "ōkii koe" },
  { id: 6179, en: "Tiny", fr: "Minuscule", jp: "ちっちゃい", romaji: "chicchai" },
  { id: 6180, en: "Huge", fr: "Géant / Immense", jp: "巨大", romaji: "kyodai" },
  { id: 6181, en: "Circular", fr: "Circulaire", jp: "円形", romaji: "enkei" },
  { id: 6182, en: "Flat", fr: "Plat", jp: "平ら", romaji: "taira" },
  { id: 6183, en: "Slippery", fr: "Glissant", jp: "滑りやすい", romaji: "suberiyasui" },
  { id: 6184, en: "Pure", fr: "Pur", jp: "純粋", romaji: "junsui" },
  { id: 6185, en: "Healthy (food/lifestyle)", fr: "Sain", jp: "健康的", romaji: "kenkōteki" },
  { id: 6186, en: "Toxic / Poisonous", fr: "Toxique", jp: "有毒", romaji: "yūdoku" },
  { id: 6187, en: "Automatic", fr: "Automatique", jp: "自動", romaji: "jidō" },
  { id: 6188, en: "Manual", fr: "Manuel", jp: "手動", romaji: "shudō" },
  { id: 6189, en: "Modern", fr: "Moderne", jp: "現代的", romaji: "gendaiteki" },
  { id: 6190, en: "Traditional", fr: "Traditionnel", jp: "伝統的", romaji: "dentōteki" },
  { id: 6191, en: "Democratic", fr: "Démocratique", jp: "民主的", romaji: "minshuteki" },
  { id: 6192, en: "Global", fr: "Mondial", jp: "世界的", romaji: "sekaiteki" },
  { id: 6193, en: "Unique", fr: "Unique", jp: "独特", romaji: "dokutoku" },
  { id: 6194, en: "Universal", fr: "Universel", jp: "普遍的", romaji: "fuhenteki" },
  { id: 6195, en: "Legal", fr: "Légal", jp: "合法", romaji: "gōhō" },
  { id: 6196, en: "Illegal", fr: "Illégal", jp: "違法", romaji: "ihō" },
  { id: 6197, en: "Private", fr: "Privé", jp: "私的", romaji: "shiteki" },
  { id: 6198, en: "Public", fr: "Public", jp: "公的", romaji: "kōteki" },
  { id: 6199, en: "Optimal", fr: "Optimal", jp: "最適", romaji: "saiteki" },
  { id: 6200, en: "Final", fr: "Final / Dernier", jp: "最後", romaji: "saigo" }
];