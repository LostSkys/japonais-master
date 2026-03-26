import { type Word } from '../data';

export const politWords: Word[] = [
  // --- SALUTATIONS DE BASE ---
  { id: 5001, en: "Good morning", fr: "Bonjour (matin)", jp: "おはようございます", romaji: "ohayō gozaimasu" },
  { id: 5002, en: "Good day", fr: "Bonjour", jp: "こんにちは", romaji: "konnichiwa" },
  { id: 5003, en: "Good evening", fr: "Bonsoir", jp: "こんばんは", romaji: "konbanwa" },
  { id: 5004, en: "Goodbye", fr: "Au revoir", jp: "さようなら", romaji: "sayōnara" },
  { id: 5005, en: "See you later", fr: "À plus tard", jp: "またね", romaji: "mata ne" },
  { id: 5006, en: "Good night", fr: "Bonne nuit", jp: "おやすみなさい", romaji: "oyasuminasai" },

  // --- REMERCIEMENTS & RÉPONSES ---
  { id: 5007, en: "Thank you very much", fr: "Merci beaucoup", jp: "ありがとうございます", romaji: "arigatō gozaimasu" },
  { id: 5008, en: "You're welcome", fr: "De rien / Je vous en prie", jp: "どういたしまして", romaji: "dōitashimashite" },
  { id: 5009, en: "No, thank you", fr: "Non merci", jp: "いいえ、結構です", romaji: "iie, kekkō desu" },
  { id: 5010, en: "Please (offering)", fr: "Je vous en prie / tenez", jp: "どうぞ", romaji: "dōzo" },
  { id: 5011, en: "Please (asking)", fr: "S'il vous plaît", jp: "お願いします", romaji: "onegai shimasu" },

  // --- EXCUSES & POLITESSE SOCIALE ---
  { id: 5012, en: "Excuse me / Sorry", fr: "Excusez-moi / Pardon", jp: "すみません", romaji: "sumimasen" },
  { id: 5013, en: "I am sorry", fr: "Je suis désolé", jp: "ごめんなさい", romaji: "gomennasai" },
  { id: 5014, en: "Pardon me (formal)", fr: "Je vous demande pardon", jp: "申し訳ありません", romaji: "mōshiwake arimasen" },
  { id: 5015, en: "Excuse my rudeness", fr: "Excusez-moi du dérangement", jp: "失礼します", romaji: "shitsurei shimasu" },
  { id: 5016, en: "Wait a moment", fr: "Attendez un instant", jp: "ちょっと待ってください", romaji: "chotto matte kudasai" },

  // --- RITUELS DE REPAS ---
  { id: 5017, en: "Bon appétit!", fr: "Bon appétit (je reçois)", jp: "いただきます", romaji: "itadakimasu" },
  { id: 5018, en: "Thanks for the meal", fr: "Merci pour ce repas", jp: "ごちそうさまでした", romaji: "gochisōsama deshita" },
  { id: 5019, en: "Welcome (shop/resto)", fr: "Bienvenue !", jp: "いらっしゃいませ", romaji: "irasshaimase" },

  // --- À LA MAISON (DÉPART/RETOUR) ---
  { id: 5020, en: "I'm leaving", fr: "J'y vais (je pars)", jp: "行ってきます", romaji: "itte kimasu" },
  { id: 5021, en: "Have a safe trip", fr: "Bonne journée (réponse)", jp: "行ってらっしゃい", romaji: "itterasshai" },
  { id: 5022, en: "I'm home", fr: "Je suis rentré", jp: "ただいま", romaji: "tadaima" },
  { id: 5023, en: "Welcome home", fr: "Bon retour", jp: "おかえりなさい", romaji: "okaerinasai" },

  // --- PRÉSENTATIONS ---
  { id: 5024, en: "Nice to meet you", fr: "Enchanté", jp: "はじめまして", romaji: "hajimemashite" },
  { id: 5025, en: "Please be kind to me", fr: "Ravi de vous rencontrer", jp: "よろしくお願いします", romaji: "yoroshiku onegai shimasu" },
  { id: 5026, en: "I am [Name]", fr: "Je m'appelle [Nom]", jp: "[Name] と申します", romaji: "[Name] to mōshimasu" },
  { id: 5027, en: "How are you?", fr: "Comment allez-vous ?", jp: "お元気ですか？", romaji: "o-genki desu ka?" },
  { id: 5028, en: "I'm fine", fr: "Je vais bien", jp: "元気です", romaji: "genki desu" },

  // --- AU MAGASIN / RESTAURANT ---
  { id: 5029, en: "One [item], please", fr: "Un [objet], s'il vous plaît", jp: "[Object] を一つお願いします", romaji: "[Object] o hitotsu onegai shimasu" },
  { id: 5030, en: "This one, please", fr: "Celu-ci, s'il vous plaît", jp: "これをください", romaji: "kore o kudasai" },
  { id: 5031, en: "Where is [place]?", fr: "Où est [lieu] ?", jp: "[Place] はどこですか？", romaji: "[Place] wa doko desu ka?" },
  { id: 5032, en: "How much is it?", fr: "C'est combien ?", jp: "いくらですか？", romaji: "ikura desu ka?" },
  { id: 5033, en: "Do you have [item]?", fr: "Avez-vous [objet] ?", jp: "[Object] はありますか？", romaji: "[Object] wa arimasu ka?" },
  { id: 5034, en: "Check, please", fr: "L'addition, s'il vous plaît", jp: "お会計お願いします", romaji: "o-kaikei onegai shimasu" },
  { id: 5035, en: "No plastic bag", fr: "Pas de sac plastique", jp: "袋はいりません", romaji: "fukuro wa irimasen" },

  // --- TRAVAIL & EFFORT ---
  { id: 5036, en: "Good job / Well done", fr: "Bravo pour ton travail", jp: "お疲れ様です", romaji: "otsukaresama desu" },
  { id: 5037, en: "I'm leaving before you", fr: "Je pars avant vous", jp: "お先に失礼します", romaji: "osaki ni shitsurei shimasu" },
  { id: 5038, en: "Good luck / Do your best", fr: "Bon courage !", jp: "頑張ってください", romaji: "ganbatte kudasai" },
  { id: 5039, en: "Congratulations", fr: "Félicitations", jp: "おめでとうございます", romaji: "omedetō gozaimasu" },

  // --- DEMANDES D'AIDE ---
  { id: 5040, en: "Can you help me?", fr: "Pouvez-vous m'aider ?", jp: "助けていただけますか？", romaji: "tasukete itadakemasu ka?" },
  { id: 5041, en: "I don't understand", fr: "Je ne comprends pas", jp: "わかりません", romaji: "wakarimasen" },
  { id: 5042, en: "Speak slowly, please", fr: "Parlez doucement svp", jp: "ゆっくり話してください", romaji: "yukkuri hanashite kudasai" },
  { id: 5043, en: "One more time, please", fr: "Encore une fois svp", jp: "もう一度お願いします", romaji: "mō ichido onegai shimasu" },
  { id: 5044, en: "Do you speak English?", fr: "Parlez-vous anglais ?", jp: "英語を話せますか？", romaji: "eigo o hanasemasu ka?" },
  { id: 5045, en: "It's okay / No problem", fr: "C'est bon / Pas de souci", jp: "大丈夫です", romaji: "daijōbu desu" },

  // --- SOUHAITS ---
  { id: 5046, en: "Take care", fr: "Prenez soin de vous", jp: "お大事に", romaji: "odaiji ni" },
  { id: 5047, en: "Happy New Year", fr: "Bonne année", jp: "あけましておめでとう", romaji: "akemashite omedetō" },
  { id: 5048, en: "Enjoy your trip", fr: "Bon voyage", jp: "良い旅を", romaji: "yoi tabi o" },

  // --- PHRASES DE FIN ---
  { id: 5049, en: "Is it okay?", fr: "Est-ce que ça va ?", jp: "いいですか？", romaji: "ii desu ka?" },
  { id: 5050, en: "Yes, it is", fr: "C'est parfait / C'est bon", jp: "はい、そうです", romaji: "hai, sō desu" },
// --- INTERACTIONS SOCIALES & INVITATIONS ---
  { id: 5051, en: "Come in, please", fr: "Entrez, je vous en prie", jp: "お上がりください", romaji: "o-agari kudasai" },
  { id: 5052, en: "Excuse me for intruding", fr: "Désolé de vous déranger (en entrant)", jp: "お邪魔します", romaji: "ojama shimasu" },
  { id: 5053, en: "I'm leaving now", fr: "Je m'en vais (en partant de chez qqun)", jp: "お邪魔しました", romaji: "ojama shimashita" },
  { id: 5054, en: "Long time no see", fr: "Ça faisait longtemps", jp: "お久しぶりです", romaji: "o-hisashiburi desu" },
  { id: 5055, en: "Thanks for the gift", fr: "Merci pour le cadeau", jp: "贈り物をありがとうございます", romaji: "okurimono o arigatō gozaimasu" },
  { id: 5056, en: "It's a small gift", fr: "C'est un petit rien (humble)", jp: "つまらないものですが", romaji: "tsumaranai mono desu ga" },

  // --- POLITESSE AU TÉLÉPHONE ---
  { id: 5057, en: "Hello? (phone)", fr: "Allô ?", jp: "もしもし", romaji: "moshi moshi" },
  { id: 5058, en: "Is [Name] there?", fr: "Est-ce que [Nom] est là ?", jp: "[Name] さんはいらっしゃいますか？", romaji: "[Name]-san wa irasshaimasu ka?" },
  { id: 5059, en: "I'll call again later", fr: "Je rappellerai plus tard", jp: "また後で電話します", romaji: "mata ato de denwa shimasu" },

  // --- AU TRAVAIL / BUSINESS (PLUS FORMEL) ---
  { id: 5060, en: "I understand (formal)", fr: "Bien reçu / J'ai compris", jp: "承知いたしました", romaji: "shōchi itashimashita" },
  { id: 5061, en: "Thank you for your hard work", fr: "Merci pour vos efforts (boss à employé)", jp: "ご苦労様です", romaji: "gokurōsama desu" },
  { id: 5062, en: "Please wait (very formal)", fr: "Veuillez patienter svp", jp: "少々お待ちください", romaji: "shōshō omachi kudasai" },
  { id: 5063, en: "Sorry to keep you waiting", fr: "Désolé de vous avoir fait attendre", jp: "お待たせいたしました", romaji: "omatase itashimashita" },
  { id: 5064, en: "Thank you for coming", fr: "Merci d'être venu", jp: "お越しいただきありがとうございます", romaji: "okoshi itadaki arigatō gozaimasu" },

  // --- DEMANDER UNE PERMISSION ---
  { id: 5065, en: "May I...?", fr: "Puis-je... ?", jp: "〜してもいいですか？", romaji: "...shite mo ii desu ka?" },
  { id: 5066, en: "May I take a photo?", fr: "Puis-je prendre une photo ?", jp: "写真を撮ってもいいですか？", romaji: "shashin o totte mo ii desu ka?" },
  { id: 5067, en: "May I sit here?", fr: "Puis-je m'asseoir ici ?", jp: "ここに座ってもいいですか？", romaji: "koko ni suwatte mo ii desu ka?" },
  { id: 5068, en: "May I enter?", fr: "Puis-je entrer ?", jp: "入ってもいいですか？", romaji: "haitte mo ii desu ka?" },

  // --- RÉPONSES POLIES ---
  { id: 5069, en: "Certainly / Of course", fr: "Certainement / Bien sûr", jp: "かしこまりました", romaji: "kashikomarimashita" },
  { id: 5070, en: "I'm looking forward to it", fr: "J'ai hâte", jp: "楽しみにしています", romaji: "tanoshimi ni shite imasu" },
  { id: 5071, en: "Don't worry about it", fr: "Ne vous en faites pas", jp: "気にしないでください", romaji: "ki ni shinaide kudasai" },
  { id: 5072, en: "It's my pleasure", fr: "C'est un plaisir", jp: "こちらこそ", romaji: "kochira koso" },

  // --- SANTÉ & BIEN-ÊTRE ---
  { id: 5073, en: "Are you okay?", fr: "Est-ce que ça va ?", jp: "大丈夫ですか？", romaji: "daijōbu desu ka?" },
  { id: 5074, en: "Please take care of yourself", fr: "Prenez soin de vous (formel)", jp: "お体をお大事にしてください", romaji: "o-karada o odaiji ni shite kudasai" },
  { id: 5075, en: "I've recovered", fr: "Je me suis rétabli", jp: "おかげさまで良くなりました", romaji: "okagesama de yoku narimashita" },

  // --- OPINIONS POLIES ---
  { id: 5076, en: "I think so too", fr: "Je le pense aussi", jp: "私もそう思います", romaji: "watashi mo sō omoimasu" },
  { id: 5077, en: "I'm not sure", fr: "Je n'en suis pas sûr", jp: "ちょっとわかりかねます", romaji: "chotto wakarikanemasu" },
  { id: 5078, en: "That's a bit...", fr: "C'est un peu... (refus poli)", jp: "それはちょっと...", romaji: "sore wa chotto..." },

  // --- SALUTATIONS SAISONNIÈRES / OCCASIONS ---
  { id: 5079, en: "Merry Christmas", fr: "Joyeux Noël", jp: "メリークリスマス", romaji: "merī kurisumasu" },
  { id: 5080, en: "Happy Birthday", fr: "Joyeux anniversaire", jp: "お誕生日おめでとうございます", romaji: "otanjōbi omedetō gozaimasu" },
  { id: 5081, en: "Cheers!", fr: "Santé !", jp: "乾杯！", romaji: "kanpai!" },

  // --- DEMANDER SON CHEMIN (POLI) ---
  { id: 5082, en: "I'm lost", fr: "Je suis perdu", jp: "道に迷いました", romaji: "michi ni mayoimashita" },
  { id: 5083, en: "Is it far?", fr: "Est-ce que c'est loin ?", jp: "遠いですか？", romaji: "tooi desu ka?" },
  { id: 5084, en: "Is it near?", fr: "Est-ce que c'est proche ?", jp: "近いですか？", romaji: "chikai desu ka?" },
  { id: 5085, en: "Could you write it down?", fr: "Pourriez-vous l'écrire ?", jp: "書いていただけますか？", romaji: "kaite itadakemasu ka?" },

  // --- DIVERS ---
  { id: 5086, en: "Please come again", fr: "Revenez quand vous voulez", jp: "またお越しください", romaji: "mata okoshi kudasai" },
  { id: 5087, en: "After you", fr: "Après vous", jp: "お先にどうぞ", romaji: "osaki ni dōzo" },
  { id: 5088, en: "I'll do my best", fr: "Je ferai de mon mieux", jp: "精一杯頑張ります", romaji: "seiippai ganbarimasu" },
  { id: 5089, en: "Safe travels", fr: "Bon voyage / Rentrée", jp: "お気をつけて", romaji: "o-ki o tsukete" },
  { id: 5090, en: "Excuse me (to get past)", fr: "Pardon (pour passer)", jp: "通してください", romaji: "tooshite kudasai" },

  // --- RECONNAISSANCE & HUMILITÉ ---
  { id: 5091, en: "Thanks for your help", fr: "Merci pour votre aide", jp: "お世話になりました", romaji: "osewa ni narimashita" },
  { id: 5092, en: "It's nothing special", fr: "Ce n'est rien", jp: "大したことではありません", romaji: "taishita koto de wa arimasen" },
  { id: 5093, en: "I'm sorry to bother you", fr: "Désolé de vous déranger", jp: "お忙しいところすみません", romaji: "oisogashii tokoro sumimasen" },
  { id: 5094, en: "I appreciate it", fr: "Je vous en suis reconnaissant", jp: "感謝しています", romaji: "kansha shite imasu" },

  // --- PHRASES DE CLÔTURE ---
  { id: 5095, en: "Understood", fr: "C'est compris", jp: "わかりました", romaji: "wakarimashita" },
  { id: 5096, en: "Exactly", fr: "Exactement", jp: "その通りです", romaji: "sono toori desu" },
  { id: 5097, en: "I see / I get it", fr: "Je vois / Ah d'accord", jp: "なるほど", romaji: "naruhodo" },
  { id: 5098, en: "Please", fr: "S'il vous plaît (formel)", jp: "お願いいたします", romaji: "onegai itashimasu" },
  { id: 5099, en: "See you tomorrow", fr: "À demain", jp: "また明日", romaji: "mata ashita" },
  { id: 5100, en: "Take care (informal)", fr: "Salut / Fais attention", jp: "じゃあね", romaji: "jaa ne" }
];