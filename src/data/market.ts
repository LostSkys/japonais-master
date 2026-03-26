import { type Word } from '../data';

export const marketWords: Word[] = [
  // --- TYPES DE MAGASINS ---
  { id: 3001, en: "Convenience store", fr: "Combini", jp: "コンビニ", romaji: "konbini" },
  { id: 3002, en: "Supermarket", fr: "Supermarché", jp: "スーパー", romaji: "sūpā" },
  { id: 3003, en: "Department store", fr: "Grand magasin", jp: "デパート", romaji: "depāto" },
  { id: 3004, en: "100 Yen shop", fr: "Magasin à 100 yens", jp: "百円ショップ", romaji: "hyakuen shoppu" },
  { id: 3005, en: "Drugstore", fr: "Pharmacie / Droguerie", jp: "ドラッグストア", romaji: "doraggusutoa" },
  { id: 3006, en: "Bookstore", fr: "Librairie", jp: "本屋", romaji: "hon'ya" },
  { id: 3007, en: "Electronics store", fr: "Magasin d'électronique", jp: "家電量販店", romaji: "kaden ryōhanten" },
  { id: 3008, en: "Clothing store", fr: "Magasin de vêtements", jp: "服屋", romaji: "fukuya" },
  { id: 3009, en: "Bakery", fr: "Boulangerie", jp: "パン屋", romaji: "pan'ya" },
  { id: 3010, en: "Market", fr: "Marché", jp: "市場", romaji: "ichiba" },

  // --- À LA CAISSE (PAIEMENT & REÇU) ---
  { id: 3011, en: "Cash", fr: "Espèces", jp: "現金", romaji: "genkin" },
  { id: 3012, en: "Credit card", fr: "Carte bancaire", jp: "クレジットカード", romaji: "kurejitto kādo" },
  { id: 3013, en: "Receipt", fr: "Ticket de caisse", jp: "レシート", romaji: "reshīto" },
  { id: 3014, en: "Change (money)", fr: "Monnaie (rendue)", jp: "お釣り", romaji: "otsuri" },
  { id: 3015, en: "Wallet", fr: "Portefeuille", jp: "財布", romaji: "saifu" },
  { id: 3016, en: "Point card", fr: "Carte de fidélité", jp: "ポイントカード", romaji: "pointo kādo" },
  { id: 3017, en: "Plastic bag", fr: "Sac plastique", jp: "レジ袋", romaji: "rejibukuro" },
  { id: 3018, en: "IC Card (Suica/Pasmo)", fr: "Carte de transport", jp: "交通系ICカード", romaji: "kōtsūkei IC kādo" },
  { id: 3019, en: "Self-checkout", fr: "Caisse automatique", jp: "セルフレジ", romaji: "serufureji" },

  // --- PRIX & PROMOTIONS ---
  { id: 3020, en: "Cheap", fr: "Pas cher", jp: "安い", romaji: "yasui" },
  { id: 3021, en: "Expensive", fr: "Cher", jp: "高い", romaji: "takai" },
  { id: 3022, en: "Sale", fr: "Soldes / Promo", jp: "セール", romaji: "sēru" },
  { id: 3023, en: "Discount", fr: "Réduction", jp: "値引き", romaji: "nebiki" },
  { id: 3024, en: "Half price", fr: "Moitié prix", jp: "半額", romaji: "hangaku" },
  { id: 3025, en: "Free", fr: "Gratuit", jp: "無料", romaji: "muryō" },
  { id: 3026, en: "Tax included", fr: "Taxes incluses", jp: "税込", romaji: "zeikomi" },

  // --- OBJETS DU QUOTIDIEN (COMBINI/SUPERMARCHÉ) ---
  { id: 3027, en: "Bento", fr: "Panier repas", jp: "お弁当", romaji: "obentō" },
  { id: 3028, en: "Drink", fr: "Boisson", jp: "飲み物", romaji: "nomimono" },
  { id: 3029, en: "Alcohol", fr: "Alcool", jp: "お酒", romaji: "osake" },
  { id: 3030, en: "Tobacco / Cigarettes", fr: "Tabac", jp: "たばこ", romaji: "tabako" },
  { id: 3031, en: "Magazine", fr: "Magazine", jp: "雑誌", romaji: "zasshi" },
  { id: 3032, en: "Manga", fr: "Manga", jp: "漫画", romaji: "manga" },
  { id: 3033, en: "Newspaper", fr: "Journal", jp: "新聞", romaji: "shinbun" },
  { id: 3034, en: "Umbrella", fr: "Parapluie", jp: "傘", romaji: "kasa" },
  { id: 3035, en: "Battery", fr: "Pile / Batterie", jp: "電池", romaji: "denchi" },
  { id: 3036, en: "Tissue", fr: "Mouchoir", jp: "ティッシュ", romaji: "tisshu" },
  { id: 3037, en: "Mask", fr: "Masque", jp: "マスク", romaji: "masuku" },
  { id: 3038, en: "Eco-bag", fr: "Sac réutilisable", jp: "エコバッグ", romaji: "ekobaggu" },

  // --- LIBRAIRIE & PAPETERIE ---
  { id: 3039, en: "Book", fr: "Livre", jp: "本", romaji: "hon" },
  { id: 3040, en: "Notebook", fr: "Cahier", jp: "ノート", romaji: "nōto" },
  { id: 3041, en: "Pen", fr: "Stylo", jp: "ペン", romaji: "pen" },
  { id: 3042, en: "Pencil", fr: "Crayon", jp: "鉛筆", romaji: "enpitsu" },
  { id: 3043, en: "Eraser", fr: "Gomme", jp: "消しゴム", romaji: "keshigomu" },
  { id: 3044, en: "Sticker", fr: "Autocollant", jp: "シール", romaji: "shīru" },
  { id: 3045, en: "Postcard", fr: "Carte postale", jp: "ハガキ", romaji: "hagaki" },
  { id: 3046, en: "Stamp", fr: "Timbre", jp: "切手", romaji: "kitte" },
  { id: 3047, en: "Map", fr: "Carte / Plan", jp: "地図", romaji: "chizu" },

  // --- ÉLECTRONIQUE ---
  { id: 3048, en: "Smartphone", fr: "Smartphone", jp: "スマホ", romaji: "sumaho" },
  { id: 3049, en: "Charger", fr: "Chargeur", jp: "充電器", romaji: "jūdenki" },
  { id: 3050, en: "Earphones", fr: "Écouteurs", jp: "イヤホン", romaji: "iyahon" },
  { id: 3051, en: "Computer", fr: "Ordinateur", jp: "パソコン", romaji: "pasokon" },
  { id: 3052, en: "Camera", fr: "Appareil photo", jp: "カメラ", romaji: "kamera" },

  // --- VÊTEMENTS & ACCESSOIRES ---
  { id: 3053, en: "Clothes", fr: "Vêtements", jp: "服", romaji: "fuku" },
  { id: 3054, en: "Shoes", fr: "Chaussures", jp: "靴", romaji: "kutsu" },
  { id: 3055, en: "Socks", fr: "Chaussettes", jp: "靴下", romaji: "kutsushita" },
  { id: 3056, en: "Bag", fr: "Sac", jp: "カバン", romaji: "kaban" },
  { id: 3057, en: "Hat", fr: "Chapeau / Casquette", jp: "帽子", romaji: "bōshi" },
  { id: 3058, en: "Glasses", fr: "Lunettes", jp: "眼鏡", romaji: "megane" },
  { id: 3059, en: "Watch", fr: "Montre", jp: "時計", romaji: "tokei" },

  // --- PHARMACIE / HYGIÈNE ---
  { id: 3060, en: "Medicine", fr: "Médicament", jp: "薬", romaji: "kusuri" },
  { id: 3061, en: "Sunscreen", fr: "Crème solaire", jp: "日焼け止め", romaji: "hiyakedome" },
  { id: 3062, en: "Soap", fr: "Savon", jp: "石鹸", romaji: "sekken" },
  { id: 3063, en: "Shampoo", fr: "Shampooing", jp: "シャンプー", romaji: "shanpū" },
  { id: 3064, en: "Toothbrush", fr: "Brosse à dents", jp: "歯ブラシ", romaji: "haburashi" },
  { id: 3065, en: "Towel", fr: "Serviette", jp: "タオル", romaji: "taoru" },

  // --- AU SUPERMARCHÉ (RAYONS) ---
  { id: 3066, en: "Shopping basket", fr: "Panier de course", jp: "買い物かご", romaji: "kaimonokago" },
  { id: 3067, en: "Shopping cart", fr: "Chariot", jp: "カート", romaji: "kāto" },
  { id: 3068, en: "Entrance", fr: "Entrée", jp: "入口", romaji: "iriguchi" },
  { id: 3069, en: "Exit", fr: "Sortie", jp: "出口", romaji: "deguchi" },
  { id: 3070, en: "Cashier", fr: "Caisse / Caissier", jp: "レジ", romaji: "reji" },
  { id: 3071, en: "Stairs", fr: "Escaliers", jp: "階段", romaji: "kaidan" },
  { id: 3072, en: "Elevator", fr: "Ascenseur", jp: "エレベーター", romaji: "erebētā" },
  { id: 3073, en: "Escalator", fr: "Escalier mécanique", jp: "エスカレーター", romaji: "esukarētā" },

  // --- DIVERS & PRATIQUE ---
  { id: 3074, en: "New product", fr: "Nouveauté", jp: "新商品", romaji: "shinshōhin" },
  { id: 3075, en: "Recommended", fr: "Recommandé", jp: "おすすめ", romaji: "osusume" },
  { id: 3076, en: "Gift / Souvenir", fr: "Cadeau / Souvenir", jp: "お土産", romaji: "omiyage" },
  { id: 3077, en: "Wrapping", fr: "Emballage cadeau", jp: "ラッピング", romaji: "rappingu" },
  { id: 3078, en: "Box", fr: "Boîte", jp: "箱", romaji: "hako" },
  { id: 3079, en: "Size", fr: "Taille", jp: "サイズ", romaji: "saizu" },
  { id: 3080, en: "Small", fr: "Petit", jp: "小さい", romaji: "chiisai" },
  { id: 3081, en: "Medium", fr: "Moyen", jp: "中くらい", romaji: "chūkurai" },
  { id: 3082, en: "Large", fr: "Grand", jp: "大きい", romaji: "ōkii" },
  { id: 3083, en: "Looking for", fr: "Chercher", jp: "探している", romaji: "sagashite iru" },
  { id: 3084, en: "Trial / Fitting", fr: "Essayage", jp: "試着", romaji: "shichaku" },

  // --- SERVICES COMBINI ---
  { id: 3085, en: "ATM", fr: "Distributeur de billets", jp: "エーティーエム", romaji: "ētīemu" },
  { id: 3086, en: "Copy machine", fr: "Photocopieuse", jp: "コピー機", romaji: "kopīki" },
  { id: 3087, en: "Ticket", fr: "Billet / Ticket", jp: "チケット", romaji: "chiketto" },
  { id: 3088, en: "Post box", fr: "Boîte aux lettres", jp: "郵便ポスト", romaji: "yūbin posuto" },
  { id: 3089, en: "Home delivery", fr: "Livraison à domicile", jp: "宅配便", romaji: "takuhaibin" },

  // --- ADJECTIFS DE SHOPPING ---
  { id: 3090, en: "New", fr: "Nouveau", jp: "新しい", romaji: "atarashii" },
  { id: 3091, en: "Old", fr: "Vieux", jp: "古い", romaji: "furui" },
  { id: 3092, en: "Pretty / Clean", fr: "Joli / Propre", jp: "綺麗", romaji: "kirei" },
  { id: 3093, en: "Dirty", fr: "Sale", jp: "汚い", romaji: "kitanai" },
  { id: 3094, en: "Convenient", fr: "Pratique", jp: "便利", romaji: "benri" },
  { id: 3095, en: "Inconvenient", fr: "Pas pratique", jp: "不便", romaji: "fuben" },
  { id: 3096, en: "Various", fr: "Divers / Varié", jp: "色々", romaji: "iroiro" },

  // --- FIN ---
  { id: 3097, en: "Shopping", fr: "Courses / Shopping", jp: "買い物", romaji: "kaimono" },
  { id: 3098, en: "Store / Shop", fr: "Magasin", jp: "店", romaji: "mise" },
  { id: 3099, en: "Customer", fr: "Client", jp: "お客さん", romaji: "okakusan" },
  { id: 3100, en: "Open (shop)", fr: "Ouvert", jp: "営業中", romaji: "eigyōchū" }
];