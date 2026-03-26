import { type Word  } from '../data';

export const sentencesV2: Word[] = [
  // --- SALUTATIONS & POLITESSE ---
  { id: 6001, en: "Nice to meet you.", fr: "Enchanté.", jp: "はじめまして。", romaji: "Hajimemashite." },
  { id: 6002, en: "Please be kind to me.", fr: "Ravi de faire votre connaissance.", jp: "よろしくお願いします。", romaji: "Yoroshiku onegaishimasu." },
  { id: 6003, en: "Excuse me / I'm sorry.", fr: "Excusez-moi / Pardon.", jp: "すみません。", romaji: "Sumimasen." },
  { id: 6004, en: "Thank you very much.", fr: "Merci beaucoup.", jp: "ありがとうございます。", romaji: "Arigatō gozaimasu." },
  { id: 6005, en: "You're welcome.", fr: "De rien.", jp: "どういたしまして。", romaji: "Dōitashimashite." },
  { id: 6006, en: "Good morning.", fr: "Bonjour (matin).", jp: "おはようございます。", romaji: "Ohayō gozaimasu." },
  { id: 6007, en: "Good evening.", fr: "Bonsoir.", jp: "こんばんは。", romaji: "Konbanwa." },
  { id: 6008, en: "Good night.", fr: "Bonne nuit.", jp: "おやすみなさい。", romaji: "Oyasuminasai." },
  { id: 6009, en: "Goodbye.", fr: "Au revoir.", jp: "さようなら。", romaji: "Sayōnara." },
  { id: 6010, en: "Excuse me for disturbing.", fr: "Excusez-moi du dérangement.", jp: "お邪魔します。", romaji: "Ojamashimasu." },

  // --- QUESTIONS DE BASE ---
  { id: 6011, en: "What is your name?", fr: "Comment vous appelez-vous ?", jp: "お名前は何ですか？", romaji: "O-namae wa nan desu ka?" },
  { id: 6012, en: "How are you?", fr: "Comment ça va ?", jp: "お元気ですか？", romaji: "O-genki desu ka?" },
  { id: 6013, en: "Where is the toilet?", fr: "Où sont les toilettes ?", jp: "トイレはどこですか？", romaji: "Toire wa doko desu ka?" },
  { id: 6014, en: "What time is it?", fr: "Quelle heure est-il ?", jp: "何時ですか？", romaji: "Nan-ji desu ka?" },
  { id: 6015, en: "How much is this?", fr: "Combien ça coûte ?", jp: "これはいくらですか？", romaji: "Kore wa ikura desu ka?" },
  { id: 6016, en: "Where is the station?", fr: "Où est la gare ?", jp: "駅はどこですか？", romaji: "Eki wa doko desu ka?" },
  { id: 6017, en: "Can you speak English?", fr: "Parlez-vous anglais ?", jp: "英語を話せますか？", romaji: "Eigo o hanasemasu ka?" },
  { id: 6018, en: "What is this?", fr: "Qu'est-ce que c'est ?", jp: "これは何ですか？", romaji: "Kore wa nan desu ka?" },
  { id: 6019, en: "Do you understand?", fr: "Comprenez-vous ?", jp: "わかりますか？", romaji: "Wakarimasu ka?" },
  { id: 6020, en: "Is it okay?", fr: "C'est bon ? / Ça va ?", jp: "大丈夫ですか？", romaji: "Daijōbu desu ka?" },

  // --- AU RESTAURANT / MAGASIN ---
  { id: 6021, en: "Please give me this.", fr: "S'il vous plaît, donnez-moi ça.", jp: "これをください。", romaji: "Kore o kudasai." },
  { id: 6022, en: "Two people, please.", fr: "Deux personnes, s'il vous plaît.", jp: "二人です。", romaji: "Futari desu." },
  { id: 6023, en: "Menu, please.", fr: "Le menu, s'il vous plaît.", jp: "メニューをお願いします。", romaji: "Menyū o onegaishimasu." },
  { id: 6024, en: "Check, please.", fr: "L'addition, s'il vous plaît.", jp: "お会計をお願いします。", romaji: "O-kaikei o onegaishimasu." },
  { id: 6025, en: "Is it delicious?", fr: "C'est délicieux ?", jp: "美味しいですか？", romaji: "Oishii desu ka?" },
  { id: 6026, en: "I don't need a bag.", fr: "Je n'ai pas besoin de sac.", jp: "袋はいりません。", romaji: "Fukuro wa irimasen." },
  { id: 6027, en: "I have an allergy.", fr: "J'ai une allergie.", jp: "アレルギーがあります。", romaji: "Arerugī ga arimasu." },
  { id: 6028, en: "One more, please.", fr: "Encore un, s'il vous plaît.", jp: "もう一つお願いします。", romaji: "Mō hitotsu onegaishimasu." },
  { id: 6029, en: "Water, please.", fr: "De l'eau, s'il vous plaît.", jp: "お水をお願いします。", romaji: "O-mizu o onegaishimasu." },
  { id: 6030, en: "Welcome (shop).", fr: "Bienvenue (magasin).", jp: "いらっしゃいませ。", romaji: "Irasshaimase." },

  // --- DÉPLACEMENTS / VILLE ---
  { id: 6031, en: "Where am I?", fr: "Où suis-je ?", jp: "ここはどこですか？", romaji: "Koko wa doko desu ka?" },
  { id: 6032, en: "I am lost.", fr: "Je suis perdu.", jp: "道に迷いました。", romaji: "Michi ni mayoimashita." },
  { id: 6033, en: "Wait a moment, please.", fr: "Attendez un instant, s'il vous plaît.", jp: "ちょっと待ってください。", romaji: "Chotto matte kudasai." },
  { id: 6034, en: "Is it far?", fr: "Est-ce loin ?", jp: "遠いですか？", romaji: "Tōi desu ka?" },
  { id: 6035, en: "Is it near?", fr: "Est-ce proche ?", jp: "近いですか？", romaji: "Chikai desu ka?" },
  { id: 6036, en: "Straight ahead.", fr: "Tout droit.", jp: "真っ直ぐです。", romaji: "Massugu desu." },
  { id: 6037, en: "Turn right.", fr: "Tournez à droite.", jp: "右に曲がります。", romaji: "Migi ni magarimasu." },
  { id: 6038, en: "Turn left.", fr: "Tournez à gauche.", jp: "左に曲がります。", romaji: "Hidari ni magarimasu." },
  { id: 6039, en: "I want to go to Tokyo.", fr: "Je veux aller à Tokyo.", jp: "東京へ行きたいです。", romaji: "Tōkyō e ikitai desu." },
  { id: 6040, en: "The train is coming.", fr: "Le train arrive.", jp: "電車が来ます。", romaji: "Densha ga kimasu." },

  // --- TRAVAIL / QUOTIDIEN ---
  { id: 6041, en: "I'm busy now.", fr: "Je suis occupé maintenant.", jp: "今忙しいです。", romaji: "Ima isogashii desu." },
  { id: 6042, en: "I understand.", fr: "J'ai compris.", jp: "わかりました。", romaji: "Wakarimashita." },
  { id: 6043, en: "I don't know.", fr: "Je ne sais pas.", jp: "知りません。", romaji: "Shirimasen." },
  { id: 6044, en: "Help me.", fr: "Aidez-moi.", jp: "手伝ってください。", romaji: "Tetsudatte kudasai." },
  { id: 6045, en: "It's difficult.", fr: "C'est difficile.", jp: "難しいです。", romaji: "Muzukashii desu." },
  { id: 6046, en: "It's easy.", fr: "C'est facile.", jp: "簡単です。", romaji: "Kantan desu." },
  { id: 6047, en: "Just a little.", fr: "Juste un peu.", jp: "少しだけです。", romaji: "Sukoshi dake desu." },
  { id: 6048, en: "Slowly, please.", fr: "Lentement, s'il vous plaît.", jp: "ゆっくりお願いします。", romaji: "Yukkuri onegaishimasu." },
  { id: 6049, en: "One more time, please.", fr: "Encore une fois, s'il vous plaît.", jp: "もう一度お願いします。", romaji: "Mō ichido onegaishimasu." },
  { id: 6050, en: "Good job.", fr: "Bon travail.", jp: "お疲れ様です。", romaji: "Otsukaresama desu." },

  // --- SENTIMENTS & OPINIONS ---
  { id: 6051, en: "I like it.", fr: "J'aime bien.", jp: "好きです。", romaji: "Suki desu." },
  { id: 6052, en: "I don't like it.", fr: "Je n'aime pas ça.", jp: "好きじゃないです。", romaji: "Suki janai desu." },
  { id: 6053, en: "It's interesting.", fr: "C'est intéressant.", jp: "面白いですね。", romaji: "Omoshiroi desu ne." },
  { id: 6054, en: "I'm happy.", fr: "Je suis heureux.", jp: "嬉しいです。", romaji: "Ureshii desu." },
  { id: 6055, en: "I'm sad.", fr: "Je suis triste.", jp: "悲しいです。", romaji: "Kanashii desu." },
  { id: 6056, en: "I'm surprised.", fr: "Je suis surpris.", jp: "びっくりしました。", romaji: "Bikkuri shimashita." },
  { id: 6057, en: "I don't care.", fr: "Ça m'est égal.", jp: "どちらでもいいです。", romaji: "Dochira demo ii desu." },
  { id: 6058, en: "It's a beautiful view.", fr: "C'est une belle vue.", jp: "景色が綺麗ですね。", romaji: "Keshiki ga kirei desu ne." },
  { id: 6059, en: "I think so too.", fr: "Je le pense aussi.", jp: "私もそう思います。", romaji: "Watashi mo sō omoimasu." },
  { id: 6060, en: "That's a good idea.", fr: "C'est une bonne idée.", jp: "いい考えですね。", romaji: "Ii kangae desu ne." },

  // --- MÉTÉO & TEMPS ---
  { id: 6061, en: "It's hot today.", fr: "Il fait chaud aujourd'hui.", jp: "今日は暑いですね。", romaji: "Kyō wa atsui desu ne." },
  { id: 6062, en: "It's cold, isn't it?", fr: "Il fait froid, non ?", jp: "寒いですね。", romaji: "Samui desu ne." },
  { id: 6063, en: "It's raining.", fr: "Il pleut.", jp: "雨が降っています。", romaji: "Ame ga futte imasu." },
  { id: 6064, en: "The weather is nice.", fr: "Il fait beau.", jp: "いい天気ですね。", romaji: "Ii tenki desu ne." },
  { id: 6065, en: "It's humid.", fr: "C'est humide.", jp: "蒸し暑いです。", romaji: "Mushiatsui desu." },

  // --- SANTÉ & BESOINS ---
  { id: 6066, en: "I'm hungry.", fr: "J'ai faim.", jp: "お腹が空きました。", romaji: "Onaka ga sukimashita." },
  { id: 6067, en: "I'm thirsty.", fr: "J'ai soif.", jp: "喉が渇きました。", romaji: "Nodo ga kawakimashita." },
  { id: 6068, en: "I'm tired.", fr: "Je suis fatigué.", jp: "疲れました。", romaji: "Tsukaremashita." },
  { id: 6069, en: "I feel sick.", fr: "Je me sens mal (santé).", jp: "気分が悪いです。", romaji: "Kibun ga warui desu." },
  { id: 6070, en: "My head hurts.", fr: "J'ai mal à la tête.", jp: "頭が痛いです。", romaji: "Atama ga itai desu." },
  { id: 6071, en: "I'm sleepy.", fr: "J'ai sommeil.", jp: "眠いです。", romaji: "Nemui desu." },
  { id: 6072, en: "Is there a hospital?", fr: "Y a-t-il un hôpital ?", jp: "病院はありますか？", romaji: "Byōin wa arimasu ka?" },
  { id: 6073, en: "I need medicine.", fr: "J'ai besoin de médicaments.", jp: "薬がいります。", romaji: "Kusuri ga irimasu." },

  // --- LOISIRS & SORTIES ---
  { id: 6074, en: "I have a hobby.", fr: "J'ai un passe-temps.", jp: "趣味があります。", romaji: "Shumi ga arimasu." },
  { id: 6075, en: "I'm going shopping.", fr: "Je vais faire du shopping.", jp: "買い物をします。", romaji: "Kaimono o shimasu." },
  { id: 6076, en: "I want to watch a movie.", fr: "Je veux voir un film.", jp: "映画を見たいです。", romaji: "Eiga o mitai desu." },
  { id: 6077, en: "Let's go together.", fr: "Allons-y ensemble.", jp: "一緒に行きましょう。", romaji: "Issho ni ikimashō." },
  { id: 6078, en: "I'm looking forward to it.", fr: "J'ai hâte.", jp: "楽しみにしています。", romaji: "Tanoshimi ni shite imasu." },
  { id: 6079, en: "I'm free tomorrow.", fr: "Je suis libre demain.", jp: "明日は暇です。", romaji: "Ashita wa hima desu." },
  { id: 6080, en: "I'm busy on Sunday.", fr: "Je suis occupé dimanche.", jp: "日曜日は忙しいです。", romaji: "Nichiyōbi wa isogashii desu." },

  // --- DANS LA RUE / PRATIQUE ---
  { id: 6081, en: "Could you take a photo?", fr: "Pourriez-vous prendre une photo ?", jp: "写真を撮ってもらえますか？", romaji: "Shashin o totte moraemasu ka?" },
  { id: 6082, en: "I forgot my phone.", fr: "J'ai oublié mon téléphone.", jp: "電話を忘れました。", romaji: "Denwa o wasuremashita." },
  { id: 6083, en: "Is there Wi-Fi?", fr: "Y a-t-il du Wi-Fi ?", jp: "ワイファイはありますか？", romaji: "Waifai wa arimasu ka?" },
  { id: 6084, en: "I'll pay with credit card.", fr: "Je vais payer par carte.", jp: "カードで払います。", romaji: "Kādo de haraimasu." },
  { id: 6085, en: "Where is the convenience store?", fr: "Où est le combiné ?", jp: "コンビニはどこですか？", romaji: "Konbini wa doko desu ka?" },

  // --- EXPRESSIONS UTILES ---
  { id: 6086, en: "Just a moment.", fr: "Un instant.", jp: "少々お待ちください。", romaji: "Shōshō omachi kudasai." },
  { id: 6087, en: "It's no good.", fr: "Ce n'est pas bon / Ça ne va pas.", jp: "だめです。", romaji: "Dame desu." },
  { id: 6088, en: "Maybe.", fr: "Peut-être.", jp: "たぶん。", romaji: "Tabun." },
  { id: 6089, en: "Really?", fr: "Vraiment ?", jp: "本当ですか？", romaji: "Hontō desu ka?" },
  { id: 6090, en: "I see.", fr: "Je vois / D'accord.", jp: "なるほど。", romaji: "Naruhodo." },
  { id: 6091, en: "Wait!", fr: "Attends !", jp: "待って！", romaji: "Matte!" },
  { id: 6092, en: "Watch out!", fr: "Attention !", jp: "気をつけて！", romaji: "Ki o tsukete!" },
  { id: 6093, en: "No way!", fr: "C'est pas vrai !", jp: "うそ！", romaji: "Uso!" },
  { id: 6094, en: "Cheers!", fr: "Santé !", jp: "乾杯！", romaji: "Kanpai!" },
  { id: 6095, en: "Congratulations!", fr: "Félicitations !", jp: "おめでとう！", romaji: "Omedetō!" },
  { id: 6096, en: "What's happened?", fr: "Qu'est-ce qu'il s'est passé ?", jp: "どうしたんですか？", romaji: "Dō shitan desu ka?" },
  { id: 6097, en: "Good luck.", fr: "Bonne chance / Fais de ton mieux.", jp: "頑張ってください。", romaji: "Ganbatte kudasai." },
  { id: 6098, en: "I'm nervous.", fr: "Je suis nerveux.", jp: "緊張しています。", romaji: "Kinchō shite imasu." },
  { id: 6099, en: "That's enough.", fr: "C'est suffisant.", jp: "もういいです。", romaji: "Mō ii desu." },
  { id: 6100, en: "See you later.", fr: "À plus tard.", jp: "またね。", romaji: "Mata ne." }
];