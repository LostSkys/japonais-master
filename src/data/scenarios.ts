// Définition des types pour une sécurité maximale
export interface Step {
  role: "IA" | "USER";
  text: string;
  romaji: string;
  fr: string;
  type: "listen" | "write" | "speak";
  options?: string[];
  answer?: string;
}

export interface Scenario {
  id: string;
  title: string;
  icon: string;
  steps: Step[];
}

export const scenarios = [
  {
    id: "restaurant",
    title: "Au Restaurant",
    icon: "🍱",
    steps: [
      { role: "IA", text: "いらっしゃいませ！メニューをどうぞ。", romaji: "Irasshaimase! Menyuu o douzo.", fr: "Bienvenue ! Voici le menu.", type: "listen" },
      { role: "USER", text: "____ を お願いします。", options: ["コーヒー", "お茶", "水"], answer: "コーヒー", romaji: "Koohii o onegaishimasu.", fr: "Un café s'il vous plaît.", type: "write" },
      { role: "IA", text: "はい、かしこまりました。", romaji: "Hai, kashikomarimashita.", fr: "C'est entendu.", type: "listen" },
      { role: "USER", text: "ありがとうございます", romaji: "Arigatou gozaimasu", fr: "Merci beaucoup", type: "speak" }
    ]
  },
  {
    id: "meeting",
    title: "Rencontre",
    icon: "🤝",
    steps: [
      { role: "IA", text: "はじめまして！お名前は？", romaji: "Hajimemashite! O-namae wa?", fr: "Enchanté ! Quel est ton nom ?", type: "listen" },
      { role: "USER", text: "____ です。よろしくお願いします。", options: ["田中", "ルフィ", "ナルト"], answer: "田中", romaji: "Tanaka desu. Yoroshiku onegaishimasu.", fr: "Je suis Tanaka. Ravi de vous rencontrer.", type: "write" },
      { role: "IA", text: "フランス人ですか？", romaji: "Furansujin desu ka?", fr: "Es-tu Français ?", type: "listen" },
      { role: "USER", text: "はい、そうです。", romaji: "Hai, sou desu.", fr: "Oui, c'est ça.", type: "speak" }
    ]
  },
  {
    id: "train",
    title: "À la Gare",
    icon: "🚄",
    steps: [
      { role: "IA", text: "どこへ行きますか？", romaji: "Doko e ikimasu ka?", fr: "Où allez-vous ?", type: "listen" },
      { role: "USER", text: "____ まで お願いします。", options: ["東京", "大阪", "京都"], answer: "東京", romaji: "Toukyou made onegaishimasu.", fr: "Jusqu'à Tokyo s'il vous plaît.", type: "write" },
      { role: "IA", text: "切符をどうぞ。", romaji: "Kippu o douzo.", fr: "Voici votre ticket.", type: "listen" },
      { role: "USER", text: "いくらですか？", romaji: "Ikura desu ka?", fr: "C'est combien ?", type: "speak" }
    ]
  },
  {
    id: "school",
    title: "À l'École",
    icon: "🎒",
    steps: [
      { role: "IA", text: "おはようございます！", romaji: "Ohayou gozaimasu!", fr: "Bonjour (matin) !", type: "listen" },
      { role: "USER", text: "____ 先生、おはようございます。", options: ["佐藤", "カカシ", "斎藤"], answer: "佐藤", romaji: "Satou sensei, ohayou gozaimasu.", fr: "Professeur Sato, bonjour.", type: "write" },
      { role: "IA", text: "宿題を 出してください。", romaji: "Shukudai o dashite kudasai.", fr: "Rendez vos devoirs s'il vous plaît.", type: "listen" },
      { role: "USER", text: "すみません、忘れました。", romaji: "Sumimasen, wasuremashita.", fr: "Désolé, j'ai oublié.", type: "speak" }
    ]
  },
  {
    id: "doctor",
    title: "Chez le Médecin",
    icon: "🏥",
    steps: [
      { role: "IA", text: "どうしましたか？", romaji: "Dou shimashita ka?", fr: "Qu'est-ce qui ne va pas ?", type: "listen" },
      { role: "USER", text: "____ が 痛いです。", options: ["頭", "お腹", "足"], answer: "頭", romaji: "Atama ga itai desu.", fr: "J'ai mal à la tête.", type: "write" },
      { role: "IA", text: "お大事に。", romaji: "O-daiji ni.", fr: "Soignez-vous bien / Bon rétablissement.", type: "listen" },
      { role: "USER", text: "わかりました. ありがとう。", romaji: "Wakarimashita. Arigatou.", fr: "J'ai compris. Merci.", type: "speak" }
    ]
  },
  {
    id: "hobbies",
    title: "Parler de ses passions",
    icon: "🎮",
    steps: [
      { role: "IA", text: "趣味は何ですか？", romaji: "Shumi wa nan desu ka?", fr: "Quels sont tes hobbies ?", type: "listen" },
      { role: "USER", text: "____ が大好きです。", options: ["ゲーム", "アニメ", "スポーツ"], answer: "ゲーム", romaji: "Geemu ga daisuki desu.", fr: "J'adore les jeux vidéo.", type: "write" },
      { role: "IA", text: "そうですか！どんなゲームをしますか？", romaji: "Sou desu ka! Donna geemu o shimasu ka?", fr: "Ah bon ! À quel genre de jeux joues-tu ?", type: "listen" },
      { role: "USER", text: "RPG を よくします。", romaji: "Aaru pii jii o yoku shimasu.", fr: "Je joue souvent à des RPG.", type: "speak" },
      { role: "IA", text: "面白いですね。最近の新作は見ましたか？", romaji: "Omoshiroi desu ne. Saikin no shinsaku wa mimashita ka?", fr: "C'est intéressant. As-tu vu les nouveautés récentes ?", type: "listen" },
      { role: "USER", text: "はい、____ を 買いました。", options: ["新作", "中古", "限定版"], answer: "新作", romaji: "Hai, shinsaku o kaimashita.", fr: "Oui, j'ai acheté la nouveauté.", type: "write" },
      { role: "IA", text: "今度一緒に遊びましょう！", romaji: "Kondo issho ni asobimashou!", fr: "Jouons ensemble la prochaine fois !", type: "listen" },
      { role: "USER", text: "はい、ぜひ！", romaji: "Hai, zehi!", fr: "Oui, avec plaisir !", type: "speak" }
    ]
  },
  {
    id: "airport",
    title: "Contrôle à l'Aéroport",
    icon: "✈️",
    steps: [
      { role: "IA", text: "パスポートを見せてください。", romaji: "Pasupooto o misete kudasai.", fr: "Montrez-moi votre passeport s'il vous plaît.", type: "listen" },
      { role: "USER", text: "はい、どうぞ。", romaji: "Hai, douzo.", fr: "Oui, le voici.", type: "speak" },
      { role: "IA", text: "入国の目的は何ですか？", romaji: "Nyuukoku no mokuteki wa nan desu ka?", fr: "Quel est le but de votre séjour ?", type: "listen" },
      { role: "USER", text: "____ です。", options: ["観光", "仕事", "留学"], answer: "観光", romaji: "Kankou desu.", fr: "C'est du tourisme.", type: "write" },
      { role: "IA", text: "どこに泊まりますか？", romaji: "Doko ni tomarimasu ka?", fr: "Où allez-vous loger ?", type: "listen" },
      { role: "USER", text: "____ の ホテルです。", options: ["新宿", "渋谷", "秋葉原"], answer: "新宿", romaji: "Shinjuku no hoteru desu.", fr: "Un hôtel à Shinjuku.", type: "write" },
      { role: "IA", text: "日本にどのくらい滞在しますか？", romaji: "Nihon ni dono kurai taizai shimasu ka?", fr: "Combien de temps restez-vous au Japon ?", type: "listen" },
      { role: "USER", text: "二週間です。", romaji: "Nishuukan desu.", fr: "Deux semaines.", type: "speak" },
      { role: "IA", text: "良い旅を！", romaji: "Yoi tabi o!", fr: "Bon voyage !", type: "listen" },
      { role: "USER", text: "ありがとうございます。", romaji: "Arigatou gozaimasu.", fr: "Merci beaucoup.", type: "speak" }
    ]
  },
  {
    id: "interview",
    title: "L'Entretien d'Embauche",
    icon: "👔",
    steps: [
      { role: "IA", text: "自己紹介をお願いします。", romaji: "Jiko shoukai o onegaishimasu.", fr: "Présentez-vous s'il vous plaît.", type: "listen" },
      { role: "USER", text: "私は ____ です. フランスから来ました。", options: ["エンジニア", "デザイナー", "学生"], answer: "エンジニア", romaji: "Watashi wa enjinia desu. Furansu kara kimashita.", fr: "Je suis ingénieur. Je viens de France.", type: "write" },
      { role: "IA", text: "なぜこの会社で働きたいのですか？", romaji: "Naze kono kaisha de hatarakitai no desu ka?", fr: "Pourquoi voulez-vous travailler dans cette entreprise ?", type: "listen" },
      { role: "USER", text: "日本の技術に興味があります。", romaji: "Nihon no gijutsu ni kyoumi ga arimasu.", fr: "Je m'intéresse à la technologie japonaise.", type: "speak" },
      { role: "IA", text: "日本語はどのくらい話せますか？", romaji: "Nihongo wa dono kurai hanasemasu ka?", fr: "Jusqu'à quel point parlez-vous japonais ?", type: "listen" },
      { role: "USER", text: "____ くらいです。", options: ["日常会話", "少し", "ペラペラ"], answer: "日常会話", romaji: "Nichijou kaiwa kurai desu.", fr: "Niveau conversation courante.", type: "write" },
      { role: "IA", text: "あなたの長所は何ですか？", romaji: "Anata no chousho wa nan desu ka?", fr: "Quelle est votre plus grande qualité ?", type: "listen" },
      { role: "USER", text: "真面目なところです。", romaji: "Majime na tokoro desu.", fr: "C'est mon sérieux.", type: "speak" },
      { role: "IA", text: "残業は大丈夫ですか？", romaji: "Zangyou wa daijoubu desu ka?", fr: "Est-ce que les heures supplémentaires vous dérangent ?", type: "listen" },
      { role: "USER", text: "はい、____ です。", options: ["大丈夫", "少し無理", "頑張ります"], answer: "頑張ります", romaji: "Hai, ganbarimasu desu.", fr: "Oui, je ferai de mon mieux.", type: "write" },
      { role: "IA", text: "結果は来週連絡します. お疲れ様でした。", romaji: "Kekka wa raishuu renraku shimasu. Otsukaresama deshita.", fr: "On vous contactera la semaine prochaine. Merci pour votre temps.", type: "listen" },
      { role: "USER", text: "よろしくお願いします. 失礼します。", romaji: "Yoroshiku onegaishimasu. Shitsurei shimasu.", fr: "Je compte sur vous. Au revoir (poli).", type: "speak" }
    ]
  }
];