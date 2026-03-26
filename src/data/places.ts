import { type Word } from '../data';

export const placeWords: Word[] = [
  // --- VILLE & TRANSPORTS ---
  { id: 7001, en: "Station", fr: "Gare / Station", jp: "駅", romaji: "eki" },
  { id: 7002, en: "Airport", fr: "Aéroport", jp: "空港", romaji: "kūkō" },
  { id: 7003, en: "Bus stop", fr: "Arrêt de bus", jp: "バス停", romaji: "basutei" },
  { id: 7004, en: "Parking lot", fr: "Parking", jp: "駐車場", romaji: "chūshajō" },
  { id: 7005, en: "Harbor / Port", fr: "Port", jp: "港", romaji: "minato" },
  { id: 7006, en: "Intersection", fr: "Carrefour / Croisement", jp: "交差点", romaji: "kōsaten" },
  { id: 7007, en: "Park", fr: "Parc", jp: "公園", romaji: "kōen" },
  { id: 7008, en: "Street / Road", fr: "Rue / Route", jp: "道", romaji: "michi" },

  // --- COMMERCES & SERVICES ---
  { id: 7009, en: "Convenience store", fr: "Supérette", jp: "コンビニ", romaji: "konbini" },
  { id: 7010, en: "Supermarket", fr: "Supermarché", jp: "スーパー", romaji: "sūpā" },
  { id: 7011, en: "Department store", fr: "Grand magasin", jp: "デパート", romaji: "depāto" },
  { id: 7012, en: "Bank", fr: "Banque", jp: "銀行", romaji: "ginkō" },
  { id: 7013, en: "Post office", fr: "Poste", jp: "郵便局", romaji: "yūbinkyoku" },
  { id: 7014, en: "Library", fr: "Bibliothèque", jp: "図書館", romaji: "toshokan" },
  { id: 7015, en: "Hospital", fr: "Hôpital", jp: "病院", romaji: "byōin" },
  { id: 7016, en: "Pharmacy", fr: "Pharmacie", jp: "薬局", romaji: "yakkyoku" },
  { id: 7017, en: "Bookstore", fr: "Librairie", jp: "本屋", romaji: "hon'ya" },
  { id: 7018, en: "Flower shop", fr: "Fleuriste", jp: "花屋", romaji: "hanaya" },
  { id: 7019, en: "Bakery", fr: "Boulangerie", jp: "パン屋", romaji: "pan'ya" },
  { id: 7020, en: "Butcher shop", fr: "Boucherie", jp: "肉屋", romaji: "nikuya" },
  { id: 7021, en: "Clothing store", fr: "Magasin de vêtements", jp: "服屋", romaji: "fukuya" },
  { id: 7022, en: "Movie theater", fr: "Cinéma", jp: "映画館", romaji: "eigakan" },
  { id: 7023, en: "Museum", fr: "Musée", jp: "美術館", romaji: "bijutsukan" },
  { id: 7024, en: "Zoo", fr: "Zoo", jp: "動物園", romaji: "dōbutsuen" },
  { id: 7025, en: "Aquarium", fr: "Aquarium", jp: "水族館", romaji: "suizokukan" },
  { id: 7026, en: "Amusement park", fr: "Parc d'attractions", jp: "遊園地", romaji: "yūenchi" },

  // --- RESTAURATION & SORTIES ---
  { id: 7027, en: "Restaurant", fr: "Restaurant", jp: "レストラン", romaji: "resutoran" },
  { id: 7028, en: "Café", fr: "Café", jp: "喫茶店", romaji: "kissaten" },
  { id: 7029, en: "Izakaya", fr: "Bar japonais", jp: "居酒屋", romaji: "izakaya" },
  { id: 7030, en: "Bar", fr: "Bar", jp: "バー", romaji: "bā" },
  { id: 7031, en: "Hotel", fr: "Hôtel", jp: "ホテル", romaji: "hoteru" },
  { id: 7032, en: "Ryokan", fr: "Auberge traditionnelle", jp: "旅館", romaji: "ryokan" },
  { id: 7033, en: "Public bath", fr: "Bains publics", jp: "銭湯", romaji: "sentō" },
  { id: 7034, en: "Hot spring", fr: "Sources chaudes", jp: "温泉", romaji: "onsen" },

  // --- ÉDUCATION & TRAVAIL ---
  { id: 7035, en: "School", fr: "École", jp: "学校", romaji: "gakkō" },
  { id: 7036, en: "University", fr: "Université", jp: "大学", romaji: "daigaku" },
  { id: 7037, en: "Elementary school", fr: "École primaire", jp: "小学校", romaji: "shōgakkō" },
  { id: 7038, en: "Kindergarten", fr: "Maternelle", jp: "幼稚園", romaji: "yōchien" },
  { id: 7039, en: "Classroom", fr: "Salle de classe", jp: "教室", romaji: "kyōshitsu" },
  { id: 7040, en: "Office", fr: "Bureau (lieu)", jp: "事務所", romaji: "jimusho" },
  { id: 7041, en: "Company / Office", fr: "Entreprise", jp: "会社", romaji: "kaisha" },
  { id: 7042, en: "Factory", fr: "Usine", jp: "工場", romaji: "kōjō" },

  // --- RELIGION & TRADITION ---
  { id: 7043, en: "Shrine", fr: "Sanctuaire shinto", jp: "神社", romaji: "jinja" },
  { id: 7044, en: "Temple", fr: "Temple bouddhiste", jp: "お寺", romaji: "otera" },
  { id: 7045, en: "Church", fr: "Église", jp: "教会", romaji: "kyōkai" },
  { id: 7046, en: "Castle", fr: "Château", jp: "城", romaji: "shiro" },

  // --- LA MAISON (LIEUX) ---
  { id: 7047, en: "House", fr: "Maison", jp: "家", romaji: "ie" },
  { id: 7048, en: "Apartment", fr: "Appartement", jp: "アパート", romaji: "apāto" },
  { id: 7049, en: "Room", fr: "Chambre / Pièce", jp: "部屋", romaji: "heya" },
  { id: 7050, en: "Kitchen", fr: "Cuisine", jp: "台所", romaji: "daidokoro" },
  { id: 7051, en: "Toilet / Restroom", fr: "Toilettes", jp: "トイレ", romaji: "toire" },
  { id: 7052, en: "Bathroom", fr: "Salle de bain", jp: "お風呂", romaji: "ofuro" },
  { id: 7053, en: "Entrance", fr: "Entrée", jp: "玄関", romaji: "genkan" },
  { id: 7054, en: "Garden", fr: "Jardin", jp: "庭", romaji: "niwa" },
  { id: 7055, en: "Balcony", fr: "Balcon", jp: "ベランダ", romaji: "beranda" },
  { id: 7056, en: "Living room", fr: "Salon", jp: "居間", romaji: "ima" },

  // --- NATURE & GÉOGRAPHIE ---
  { id: 7057, en: "Mountain", fr: "Montagne", jp: "山", romaji: "yama" },
  { id: 7058, en: "Forest", fr: "Forêt", jp: "森", romaji: "mori" },
  { id: 7059, en: "River", fr: "Rivière", jp: "川", romaji: "kawa" },
  { id: 7060, en: "Sea / Ocean", fr: "Mer / Océan", jp: "海", romaji: "umi" },
  { id: 7061, en: "Beach", fr: "Plage", jp: "海岸", romaji: "kaigan" },
  { id: 7062, en: "Lake", fr: "Lac", jp: "湖", romaji: "mizuumi" },
  { id: 7063, en: "Island", fr: "Île", jp: "島", romaji: "shima" },
  { id: 7064, en: "Field / Farm", fr: "Champ / Ferme", jp: "畑", romaji: "hatake" },
  { id: 7065, en: "Pond", fr: "Étang", jp: "池", romaji: "ike" },
  { id: 7066, en: "Cave", fr: "Grotte", jp: "洞窟", romaji: "dōkutsu" },
  { id: 7067, en: "Waterfall", fr: "Cascade", jp: "滝", romaji: "taki" },
  { id: 7068, en: "Desert", fr: "Désert", jp: "砂漠", romaji: "sabaku" },

  // --- SERVICES PUBLICS & SÉCURITÉ ---
  { id: 7069, en: "Police station", fr: "Commissariat", jp: "警察署", romaji: "keisatsusho" },
  { id: 7070, en: "Police box", fr: "Poste de quartier", jp: "交番", romaji: "kōban" },
  { id: 7071, en: "Fire station", fr: "Caserne de pompiers", jp: "消防署", romaji: "shōbōsho" },
  { id: 7072, en: "City hall", fr: "Mairie", jp: "市役所", romaji: "shiyakusho" },
  { id: 7073, en: "Court", fr: "Tribunal", jp: "裁判所", romaji: "saibansho" },
  { id: 7074, en: "Embassy", fr: "Ambassade", jp: "大使館", romaji: "taishikan" },

  // --- SPORT & LOISIRS ---
  { id: 7075, en: "Gym", fr: "Salle de sport", jp: "体育館", romaji: "taiikukan" },
  { id: 7076, en: "Swimming pool", fr: "Piscine", jp: "プール", romaji: "pūru" },
  { id: 7077, en: "Stadium", fr: "Stade", jp: "競技場", romaji: "kyōgijō" },
  { id: 7078, en: "Park (small/playground)", fr: "Aire de jeux", jp: "遊び場", romaji: "asobiba" },

  // --- DIVERS ---
  { id: 7079, en: "Place", fr: "Lieu / Endroit", jp: "場所", romaji: "basho" },
  { id: 7080, en: "World", fr: "Monde", jp: "世界", romaji: "sekai" },
  { id: 7081, en: "Country", fr: "Pays", jp: "国", romaji: "kuni" },
  { id: 7082, en: "Prefecture", fr: "Préfecture", jp: "都道府県", romaji: "todōfuken" },
  { id: 7083, en: "City", fr: "Ville", jp: "市", romaji: "shi" },
  { id: 7084, en: "Town", fr: "Bourg / Ville", jp: "町", romaji: "machi" },
  { id: 7085, en: "Village", fr: "Village", jp: "村", romaji: "mura" },
  { id: 7086, en: "Neighborhood", fr: "Quartier", jp: "近所", romaji: "kinjo" },
  { id: 7087, en: "Bridge", fr: "Pont", jp: "橋", romaji: "hashi" },
  { id: 7088, en: "Tunnel", fr: "Tunnel", jp: "トンネル", romaji: "tonneru" },
  { id: 7089, en: "Building", fr: "Bâtiment / Immeuble", jp: "建物", romaji: "tatemono" },
  { id: 7090, en: "Skyscraper", fr: "Gratte-ciel", jp: "高層ビル", romaji: "kōsō biru" },
  { id: 7091, en: "Gas station", fr: "Station-service", jp: "ガソリンスタンド", romaji: "gasorin sutando" },
  { id: 7092, en: "Hair salon", fr: "Salon de coiffure", jp: "美容院", romaji: "biyōin" },
  { id: 7093, en: "Concert hall", fr: "Salle de concert", jp: "コンサートホール", romaji: "konsāto hōru" },
  { id: 7094, en: "Theater", fr: "Théâtre", jp: "劇場", romaji: "gekijō" },
  { id: 7095, en: "Entrance / Exit", fr: "Entrée / Sortie", jp: "出入り口", romaji: "deiriguchi" },
  { id: 7096, en: "Reception", fr: "Réception / Accueil", jp: "受付", romaji: "uketsuke" },
  { id: 7097, en: "Corner", fr: "Coin / Angle", jp: "角", romaji: "kado" },
  { id: 7098, en: "Top / Summit", fr: "Sommet / Haut", jp: "頂上", romaji: "chōjō" },
  { id: 7099, en: "Center", fr: "Centre", jp: "中央", romaji: "chūō" },
  { id: 7100, en: "Vicinity / Area", fr: "Alentours", jp: "辺り", romaji: "atari" }
];