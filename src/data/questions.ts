import { type Word } from '../data';

export const questionWords: Word[] = [
  // --- LES ESSENTIELS (QUI, QUOI, OÙ...) ---
  { id: 8001, en: "What is it?", fr: "Qu'est-ce que c'est ?", jp: "これは何ですか？", romaji: "kore wa nan desu ka?" },
  { id: 8002, en: "Who is it?", fr: "Qui est-ce ?", jp: "誰ですか？", romaji: "dare desu ka?" },
  { id: 8003, en: "Where is it?", fr: "Où est-ce ?", jp: "どこですか？", romaji: "doko desu ka?" },
  { id: 8004, en: "When is it?", fr: "C'est quand ?", jp: "いつですか？", romaji: "itsu desu ka?" },
  { id: 8005, en: "Why?", fr: "Pourquoi ?", jp: "なぜですか？", romaji: "naze desu ka?" },
  { id: 8006, en: "How?", fr: "Comment ?", jp: "どうやって？", romaji: "dō yatte?" },
  { id: 8007, en: "Which one?", fr: "Lequel ?", jp: "どれですか？", romaji: "dore desu ka?" },

  // --- SE REPÉRER & TRANSPORTS ---
  { id: 8008, en: "Where is the station?", fr: "Où est la gare ?", jp: "駅はどこですか？", romaji: "eki wa doko desu ka?" },
  { id: 8009, en: "Where is the toilet?", fr: "Où sont les toilettes ?", jp: "トイレはどこですか？", romaji: "toire wa doko desu ka?" },
  { id: 8010, en: "Is it far from here?", fr: "Est-ce que c'est loin d'ici ?", jp: "ここから遠いですか？", romaji: "koko kara tooi desu ka?" },
  { id: 8011, en: "Is it near?", fr: "Est-ce que c'est proche ?", jp: "近いですか？", romaji: "chikai desu ka?" },
  { id: 8012, en: "How long does it take?", fr: "Ça prend combien de temps ?", jp: "どのくらい時間がかかりますか？", romaji: "dono kurai jikan ga kakarimasu ka?" },
  { id: 8013, en: "Where is the bus stop?", fr: "Où est l'arrêt de bus ?", jp: "バス停はどこですか？", romaji: "basutei wa doko desu ka?" },
  { id: 8014, en: "Where am I?", fr: "Où suis-je ?", jp: "ここはどこですか？", romaji: "koko wa doko desu ka?" },
  { id: 8015, en: "Can I go by foot?", fr: "Puis-je y aller à pied ?", jp: "歩いて行けますか？", romaji: "aruite ikemasu ka?" },

  // --- RESTAURATION & SORTIES ---
  { id: 8016, en: "Do you have a menu?", fr: "Avez-vous un menu ?", jp: "メニューはありますか？", romaji: "menyū wa arimasu ka?" },
  { id: 8017, en: "What do you recommend?", fr: "Que recommandez-vous ?", jp: "おすすめは何ですか？", romaji: "osusume wa nan desu ka?" },
  { id: 8018, en: "Is it spicy?", fr: "Est-ce que c'est épicé ?", jp: "辛いですか？", romaji: "karai desu ka?" },
  { id: 8019, en: "Does it contain meat?", fr: "Est-ce qu'il y a de la viande ?", jp: "肉が入っていますか？", romaji: "niku ga haitte imasu ka?" },
  { id: 8020, en: "Can I have some water?", fr: "Puis-je avoir de l'eau ?", jp: "お水をいただけますか？", romaji: "o-mizu o itadakemasu ka?" },
  { id: 8021, en: "Is there Wi-Fi?", fr: "Y a-t-il du Wi-Fi ?", jp: "ワイファイはありますか？", romaji: "waifai wa arimasu ka?" },
  { id: 8022, en: "Is it open?", fr: "Est-ce que c'est ouvert ?", jp: "開いていますか？", romaji: "aite imasu ka?" },
  { id: 8023, en: "What time do you close?", fr: "À quelle heure fermez-vous ?", jp: "何時に閉まりますか？", romaji: "nanji ni shimarimasu ka?" },

  // --- SHOPPING ---
  { id: 8024, en: "How much is this?", fr: "Combien ça coûte ?", jp: "これはいくらですか？", romaji: "kore wa ikura desu ka?" },
  { id: 8025, en: "Can I pay by card?", fr: "Puis-je payer par carte ?", jp: "カードで払えますか？", romaji: "kādo de haraemasu ka?" },
  { id: 8026, en: "Do you have other colors?", fr: "Avez-vous d'autres couleurs ?", jp: "他の色はありますか？", romaji: "hoka no iro wa arimasu ka?" },
  { id: 8027, en: "Can I try this on?", fr: "Puis-je essayer ceci ?", jp: "試着してもいいですか？", romaji: "shichaku shite mo ii desu ka?" },
  { id: 8028, en: "Is there a smaller size?", fr: "Y a-t-il une taille plus petite ?", jp: "もっと小さいサイズはありますか？", romaji: "motto chiisai saizu wa arimasu ka?" },

  // --- CONVERSATION & VIE SOCIALE ---
  { id: 8029, en: "How are you?", fr: "Comment vas-tu ?", jp: "お元気ですか？", romaji: "o-genki desu ka?" },
  { id: 8030, en: "What is your name?", fr: "Comment t'appelles-tu ?", jp: "お名前は何ですか？", romaji: "o-namae wa nan desu ka?" },
  { id: 8031, en: "Where do you come from?", fr: "D'où viens-tu ?", jp: "出身はどこですか？", romaji: "shusshin wa doko desu ka?" },
  { id: 8032, en: "What is your job?", fr: "Quel est ton travail ?", jp: "お仕事は何ですか？", romaji: "o-shigoto wa nan desu ka?" },
  { id: 8033, en: "What is your hobby?", fr: "Quel est ton hobby ?", jp: "趣味は何ですか？", romaji: "shumi wa nan desu ka?" },
  { id: 8034, en: "Do you like Japanese food?", fr: "Aimes-tu la cuisine japonaise ?", jp: "日本料理は好きですか？", romaji: "nihon ryōri wa suki desu ka?" },
  { id: 8035, en: "Have you been to France?", fr: "Es-tu déjà allé en France ?", jp: "フランスに行ったことがありますか？", romaji: "furansu ni itta koto ga arimasu ka?" },

  // --- COMPRÉHENSION & LANGUE ---
  { id: 8036, en: "What does this mean?", fr: "Que veut dire ceci ?", jp: "これはどういう意味ですか？", romaji: "kore wa dōiu imi desu ka?" },
  { id: 8037, en: "How do you say [X] in Japanese?", fr: "Comment dit-on [X] en japonais ?", jp: "[X] は日本語で何と言いますか？", romaji: "[X] wa nihongo de nan to iimasu ka?" },
  { id: 8038, en: "Can you speak more slowly?", fr: "Peux-tu parler plus doucement ?", jp: "もっとゆっくり話してくれますか？", romaji: "motto yukkuri hanashite kuremasu ka?" },
  { id: 8039, en: "Can you write it down?", fr: "Peux-tu l'écrire ?", jp: "書いてもらえますか？", romaji: "kaite moraemasu ka?" },
  { id: 8040, en: "Do you understand?", fr: "Comprenez-vous ?", jp: "わかりますか？", romaji: "wakarimasu ka?" },

  // --- TEMPS & MÉTÉO ---
  { id: 8041, en: "What time is it now?", fr: "Quelle heure est-il ?", jp: "今、何時ですか？", romaji: "ima, nanji desu ka?" },
  { id: 8042, en: "What is the weather today?", fr: "Quel temps fait-il aujourd'hui ?", jp: "今日の天気は何ですか？", romaji: "kyō no tenki wa nan desu ka?" },
  { id: 8043, en: "Will it rain tomorrow?", fr: "Pleuvra-t-il demain ?", jp: "明日は雨が降りますか？", romaji: "ashita wa ame ga furimasu ka?" },

  // --- SANTÉ & URGENCE ---
  { id: 8044, en: "Are you okay?", fr: "Ça va ? / Es-tu blessé ?", jp: "大丈夫ですか？", romaji: "daijōbu desu ka?" },
  { id: 8045, en: "Where is the hospital?", fr: "Où est l'hôpital ?", jp: "病院はどこですか？", romaji: "byōin wa doko desu ka?" },
  { id: 8046, en: "Can you call a doctor?", fr: "Pouvez-vous appeler un médecin ?", jp: "医者を呼んでくれますか？", romaji: "isha o yonde kuremasu ka?" },
  { id: 8047, en: "Do you have medicine?", fr: "Avez-vous des médicaments ?", jp: "薬はありますか？", romaji: "yakuru wa arimasu ka?" },

  // --- PRÉFÉRENCES & OPINIONS ---
  { id: 8048, en: "What do you think?", fr: "Qu'en penses-tu ?", jp: "どう思いますか？", romaji: "dō omoimasu ka?" },
  { id: 8049, en: "Which do you prefer?", fr: "Lequel préfères-tu ?", jp: "どっちが好きですか？", romaji: "docchi ga suki desu ka?" },
  { id: 8050, en: "Is it interesting?", fr: "Est-ce intéressant ?", jp: "面白いですか？", romaji: "omoshiroi desu ka?" },

  // --- TEMPS & PLANIFICATION ---
  { id: 8051, en: "What time does it start?", fr: "À quelle heure ça commence ?", jp: "何時に始まりますか？", romaji: "nanji ni hajimarimasu ka?" },
  { id: 8052, en: "What time does it end?", fr: "À quelle heure ça finit ?", jp: "何時に終わりますか？", romaji: "nanji ni owarimasu ka?" },
  { id: 8053, en: "Is it still open?", fr: "Est-ce encore ouvert ?", jp: "まだ開いていますか？", romaji: "mada aite imasu ka?" },
  { id: 8054, en: "How many hours?", fr: "Combien d'heures ?", jp: "何時間ですか？", romaji: "nan jikan desu ka?" },
  { id: 8055, en: "Which day of the week?", fr: "Quel jour de la semaine ?", jp: "何曜日ですか？", romaji: "nan yōbi desu ka?" },
  { id: 8056, en: "What is the date today?", fr: "Quelle est la date d'aujourd'hui ?", jp: "今日は何日ですか？", romaji: "kyō wa nannichi desu ka?" },
  { id: 8057, en: "When is your birthday?", fr: "C'est quand ton anniversaire ?", jp: "誕生日はいつですか？", romaji: "tanjōbi wa itsu desu ka?" },
  { id: 8058, en: "How long will you stay?", fr: "Combien de temps resterez-vous ?", jp: "どのくらい滞在しますか？", romaji: "dono kurai taizai shimasu ka?" },

  // --- LOGISTIQUE & TRANSPORT (PRÉCIS) ---
  { id: 8059, en: "Where is the ticket machine?", fr: "Où est le distributeur de billets ?", jp: "券売機はどこですか？", romaji: "kenbaiki wa doko desu ka?" },
  { id: 8060, en: "Which train goes to [Place]?", fr: "Quel train va à [Lieu] ?", jp: "[Place] 行きの電車はどれですか？", romaji: "[Place] iki no densha wa dore desu ka?" },
  { id: 8061, en: "Is this the right platform?", fr: "Est-ce le bon quai ?", jp: "このホームで合っていますか？", romaji: "kono hōmu de atte imasu ka?" },
  { id: 8062, en: "Does this bus stop at [Place]?", fr: "Est-ce que ce bus s'arrête à [Lieu] ?", jp: "このバスは [Place] に止まりますか？", romaji: "kono basu wa [Place] ni tomarimasu ka?" },
  { id: 8063, en: "Where can I buy a SIM card?", fr: "Où puis-je acheter une carte SIM ?", jp: "シムカードはどこで買えますか？", romaji: "shimu kādo wa doko de kaemasu ka?" },
  { id: 8064, en: "Is there an ATM nearby?", fr: "Y a-t-il un distributeur à proximité ?", jp: "近くにATMはありますか？", romaji: "chikaku ni ATM wa arimasu ka?" },
  { id: 8065, en: "Can I park here?", fr: "Puis-je me garer ici ?", jp: "ここに駐車してもいいですか？", romaji: "koko ni chūsha shite mo ii desu ka?" },
  { id: 8066, en: "Where is the elevator?", fr: "Où est l'ascenseur ?", jp: "エレベーターはどこですか？", romaji: "erebētā wa doko desu ka?" },

  // --- RESTAURANT (DÉTAILS) ---
  { id: 8067, en: "Do I need a reservation?", fr: "Faut-il une réservation ?", jp: "予約が必要ですか？", romaji: "yoyaku ga hitsuyō desu ka?" },
  { id: 8068, en: "How many people?", fr: "Combien de personnes ?", jp: "何名様ですか？", romaji: "nanmei-sama desu ka?" },
  { id: 8069, en: "Is there a non-smoking seat?", fr: "Y a-t-il une place non-fumeur ?", jp: "禁煙席はありますか？", romaji: "kin'enseki wa arimasu ka?" },
  { id: 8070, en: "Can I take this away?", fr: "Puis-je l'emporter ?", jp: "持ち帰りできますか？", romaji: "mochikaeri dekimasu ka?" },
  { id: 8071, en: "Is the tap water drinkable?", fr: "L'eau du robinet est-elle potable ?", jp: "水道水は飲めますか？", romaji: "suidōsui wa nomemasu ka?" },
  { id: 8072, en: "Can I have a refill?", fr: "Puis-je avoir un autre verre ?", jp: "お代わりいただけますか？", romaji: "okawari itadakemasu ka?" },
  { id: 8073, en: "Is this beef?", fr: "Est-ce du bœuf ?", jp: "これは牛肉ですか？", romaji: "kore wa gyūniku desu ka?" },
  { id: 8074, en: "Do you have a fork?", fr: "Avez-vous une fourchette ?", jp: "フォークはありますか？", romaji: "fōku wa arimasu ka?" },
  { id: 8075, en: "Is service included?", fr: "Le service est-il inclus ?", jp: "サービス料は含まれていますか？", romaji: "sābisu-ryō wa fukumarete imasu ka?" },

  // --- SHOPPING (PRÉCIS) ---
  { id: 8076, en: "What is this made of?", fr: "En quoi est-ce fait ?", jp: "これは何でできていますか？", romaji: "kore wa nan de dekite imasu ka?" },
  { id: 8077, en: "Is this handmade?", fr: "Est-ce fait main ?", jp: "これは手作りですか？", romaji: "kore wa tezukuri desu ka?" },
  { id: 8078, en: "Can I get a discount?", fr: "Puis-je avoir une réduction ?", jp: "安くしてもらえますか？", romaji: "yasuku shite moraemasu ka?" },
  { id: 8079, en: "Is it tax-free?", fr: "Est-ce détaxé ?", jp: "免税ですか？", romaji: "menzei desu ka?" },
  { id: 8080, en: "Do you have it in stock?", fr: "L'avez-vous en stock ?", jp: "在庫はありますか？", romaji: "zaiko wa arimasu ka?" },
  { id: 8081, en: "Can you wrap it for a gift?", fr: "Pouvez-vous faire un paquet cadeau ?", jp: "プレゼント用に包んでもらえますか？", romaji: "purezento-yō ni tsutsunde moraemasu ka?" },
  { id: 8082, en: "Can I return this?", fr: "Puis-je rendre ceci ?", jp: "返品できますか？", romaji: "henpin dekimasu ka?" },

  // --- GOÛTS ET OPINIONS ---
  { id: 8083, en: "Do you like [Topic]?", fr: "Aimes-tu [Sujet] ?", jp: "[Topic] は好きですか？", romaji: "[Topic] wa suki desu ka?" },
  { id: 8084, en: "What is your favorite food?", fr: "Quel est ton plat préféré ?", jp: "好きな食べ物は何ですか？", romaji: "suki na tabemono wa nan desu ka?" },
  { id: 8085, en: "Do you have any recommendations?", fr: "As-tu des recommandations ?", jp: "何かおすすめはありますか？", romaji: "nanika osusume wa arimasu ka?" },
  { id: 8086, en: "Is it difficult?", fr: "Est-ce difficile ?", jp: "難しいですか？", romaji: "muzukashii desu ka?" },
  { id: 8087, en: "Is it fun?", fr: "Est-ce amusant ?", jp: "楽しいですか？", romaji: "tanoshii desu ka?" },
  { id: 8088, en: "Which color do you like?", fr: "Quelle couleur aimes-tu ?", jp: "何色が好きですか？", romaji: "nani iro ga suki desu ka?" },
  { id: 8089, en: "Are you interested in art?", fr: "Es-tu intéressé par l'art ?", jp: "アートに興味がありますか？", romaji: "āto ni kyōmi ga arimasu ka?" },

  // --- QUESTIONS SUR LA LANGUE ---
  { id: 8090, en: "Is my Japanese okay?", fr: "Mon japonais est-il correct ?", jp: "私の日本語は大丈夫ですか？", romaji: "watashi no nihongo wa daijōbu desu ka?" },
  { id: 8091, en: "How do you read this kanji?", fr: "Comment lit-on ce kanji ?", jp: "この漢字は何と読みますか？", romaji: "kono kanji wa nan to yomimasu ka?" },
  { id: 8092, en: "Is there an English translation?", fr: "Y a-t-il une traduction anglaise ?", jp: "英語の翻訳はありますか？", romaji: "eigo no hon'yaku wa arimasu ka?" },
  { id: 8093, en: "Was I rude?", fr: "Ai-je été impoli ?", jp: "失礼でしたか？", romaji: "shitsurei deshita ka?" },

  // --- SANTÉ ET SÉCURITÉ ---
  { id: 8094, en: "Do you have an allergy?", fr: "As-tu une allergie ?", jp: "アレルギーはありますか？", romaji: "arerugī wa arimasu ka?" },
  { id: 8095, en: "Does it hurt?", fr: "Est-ce que ça fait mal ?", jp: "痛いですか？", romaji: "itai desu ka?" },
  { id: 8096, en: "Do you have a fever?", fr: "As-tu de la fièvre ?", jp: "熱がありますか？", romaji: "netsu ga arimasu ka?" },
  { id: 8097, en: "Is it dangerous?", fr: "Est-ce dangereux ?", jp: "危ないですか？", romaji: "abunai desu ka?" },
  { id: 8098, en: "Can I use this medicine?", fr: "Puis-je utiliser ce médicament ?", jp: "この薬を使ってもいいですか？", romaji: "kono kusuri o tsukatte mo ii desu ka?" },

  // --- TRAVAIL ET ÉTUDES ---
  { id: 8099, en: "Where is your office?", fr: "Où est ton bureau ?", jp: "事務所はどこですか？", romaji: "jimusho wa doko desu ka?" },
  { id: 8100, en: "Are you busy now?", fr: "Es-tu occupé maintenant ?", jp: "今、忙しいですか？", romaji: "ima, isogashii desu ka?" },
  { id: 8101, en: "What are you studying?", fr: "Qu'est-ce que tu étudies ?", jp: "何を勉強していますか？", romaji: "nani o benkyō shite imasu ka?" },
  { id: 8102, en: "Is your job hard?", fr: "Ton travail est-il dur ?", jp: "仕事は大変ですか？", romaji: "shigoto wa taihen desu ka?" },

  // --- VIE QUOTIDIENNE ---
  { id: 8103, en: "Do you have a pet?", fr: "As-tu un animal ?", jp: "ペットを飼っていますか？", romaji: "petto o katte imasu ka?" },
  { id: 8104, en: "Do you smoke?", fr: "Fumes-tu ?", jp: "タバコを吸いますか？", romaji: "tabako o suimasu ka?" },
  { id: 8105, en: "Where do you live?", fr: "Où habites-tu ?", jp: "どこに住んでいますか？", romaji: "doko ni sunde imasu ka?" },
  { id: 8106, en: "Do you live alone?", fr: "Habites-tu seul ?", jp: "一人暮らしですか？", romaji: "hitori gurashi desu ka?" },
  { id: 8107, en: "What did you do yesterday?", fr: "Qu'as-tu fait hier ?", jp: "昨日は何をしましたか？", romaji: "kinō wa nani o shimashita ka?" },
  { id: 8108, en: "What will you do tomorrow?", fr: "Que feras-tu demain ?", jp: "明日は何をしますか？", romaji: "ashita wa nani o shimasu ka?" },
  { id: 8109, en: "Are you married?", fr: "Es-tu marié ?", jp: "結婚していますか？", romaji: "kekkon shite imasu ka?" },
  { id: 8110, en: "Do you have children?", fr: "As-tu des enfants ?", jp: "子供がいますか？", romaji: "kodomo ga imasu ka?" },

  // --- QUESTIONS "POURQUOI" ET "COMMENT" ---
  { id: 8111, en: "Why are you late?", fr: "Pourquoi es-tu en retard ?", jp: "なぜ遅れたのですか？", romaji: "naze okureta no desu ka?" },
  { id: 8112, en: "How do I use this?", fr: "Comment j'utilise ça ?", jp: "これをどうやって使いますか？", romaji: "kore o dō yatte tsukaimasu ka?" },
  { id: 8113, en: "How do I get there?", fr: "Comment j'y vais ?", jp: "どうやって行きますか？", romaji: "dō yatte ikimasu ka?" },
  { id: 8114, en: "Why is it closed?", fr: "Pourquoi est-ce fermé ?", jp: "なぜ閉まっているのですか？", romaji: "naze shimatte iru no desu ka?" },

  // --- QUANTITÉ ET MESURE ---
  { id: 8115, en: "How many?", fr: "Combien (quantité) ?", jp: "いくつですか？", romaji: "ikutsu desu ka?" },
  { id: 8116, en: "How many people?", fr: "Combien de personnes ?", jp: "何人ですか？", romaji: "nan nin desu ka?" },
  { id: 8117, en: "Is it enough?", fr: "Est-ce suffisant ?", jp: "十分ですか？", romaji: "jūbun desu ka?" },
  { id: 8118, en: "How far is it?", fr: "À quelle distance est-ce ?", jp: "どのくらい遠いですか？", romaji: "dono kurai tooi desu ka?" },
  { id: 8119, en: "What is the size?", fr: "Quelle est la taille ?", jp: "サイズは何ですか？", romaji: "saizu wa nan desu ka?" },

  // --- ACCÈS ET PERMISSION ---
  { id: 8120, en: "Is it free (price)?", fr: "Est-ce gratuit ?", jp: "無料ですか？", romaji: "muryō desu ka?" },
  { id: 8121, en: "Is it free (available)?", fr: "Est-ce libre ?", jp: "空いていますか？", romaji: "aite imasu ka?" },
  { id: 8122, en: "Can I enter?", fr: "Puis-je entrer ?", jp: "入ってもいいですか？", romaji: "haitte mo ii desu ka?" },
  { id: 8123, en: "Can I use my phone?", fr: "Puis-je utiliser mon téléphone ?", jp: "電話を使ってもいいですか？", romaji: "denwa o tsukatte mo ii desu ka?" },
  { id: 8124, en: "Is photography allowed?", fr: "Les photos sont-elles autorisées ?", jp: "写真はいいですか？", romaji: "shashin wa ii desu ka?" },

  // --- QUESTIONS DE COMPARAISON ---
  { id: 8125, en: "Which one is better?", fr: "Lequel est le mieux ?", jp: "どちらがいいですか？", romaji: "dochira ga ii desu ka?" },
  { id: 8126, en: "Is there a cheaper one?", fr: "Y en a-t-il un moins cher ?", jp: "もっと安いのはありますか？", romaji: "motto yasui no wa arimasu ka?" },
  { id: 8127, en: "Is it the same?", fr: "Est-ce la même chose ?", jp: "同じですか？", romaji: "onaji desu ka?" },
  { id: 8128, en: "Is it different?", fr: "Est-ce différent ?", jp: "違いますか？", romaji: "chigaimasu ka?" },

  // --- [ON ACCÉLÈRE JUSQU'À 200] ---
  { id: 8129, en: "Do you have a light?", fr: "As-tu du feu ?", jp: "ライターはありますか？", romaji: "raitā wa arimasu ka?" },
  { id: 8130, en: "Are you hungry?", fr: "As-tu faim ?", jp: "お腹が空いていますか？", romaji: "onaka ga suite imasu ka?" },
  { id: 8131, en: "Are you thirsty?", fr: "As-tu soif ?", jp: "喉が渇いていますか？", romaji: "nodo ga kawaite imasu ka?" },
  { id: 8132, en: "Are you tired?", fr: "Es-tu fatigué ?", jp: "疲れていますか？", romaji: "tsukarete imasu ka?" },
  { id: 8133, en: "Are you sleepy?", fr: "As-tu sommeil ?", jp: "眠いですか？", romaji: "nemui desu ka?" },
  { id: 8134, en: "Do you need help?", fr: "As-tu besoin d'aide ?", jp: "助けが必要ですか？", romaji: "tasuke ga hitsuyō desu ka?" },
  { id: 8135, en: "What's wrong?", fr: "Qu'est-ce qui ne va pas ?", jp: "どうしましたか？", romaji: "dō shimashita ka?" },
  { id: 8136, en: "Really?", fr: "Vraiment ?", jp: "本当ですか？", romaji: "hontō desu ka?" },
  { id: 8137, en: "Are you sure?", fr: "En es-tu sûr ?", jp: "確かですか？", romaji: "tashika desu ka?" },
  { id: 8138, en: "Since when?", fr: "Depuis quand ?", jp: "いつからですか？", romaji: "itsu kara desu ka?" },
  { id: 8139, en: "Until when?", fr: "Jusqu'à quand ?", jp: "いつまでですか？", romaji: "itsu made desu ka?" },
  { id: 8140, en: "Is it possible?", fr: "Est-ce possible ?", jp: "可能ですか？", romaji: "kanō desu ka?" },
  { id: 8141, en: "Is it impossible?", fr: "Est-ce impossible ?", jp: "無理ですか？", romaji: "muri desu ka?" },
  { id: 8142, en: "Do you have time?", fr: "As-tu du temps ?", jp: "時間がありますか？", romaji: "jikan ga arimasu ka?" },
  { id: 8143, en: "Can we meet?", fr: "Peut-on se voir ?", jp: "会えますか？", romaji: "aemasu ka?" },
  { id: 8144, en: "Where shall we meet?", fr: "Où se voit-on ?", jp: "どこで会いましょうか？", romaji: "doko de aimashō ka?" },
  { id: 8145, en: "What is your phone number?", fr: "Quel est ton numéro ?", jp: "電話番号は何ですか？", romaji: "denwa bangō wa nan desu ka?" },
  { id: 8146, en: "Can I have your Line?", fr: "Puis-je avoir ton Line ?", jp: "ラインを教えてくれますか？", romaji: "rain o oshiete kuremasu ka?" },
  { id: 8147, en: "Do you use Instagram?", fr: "Utilises-tu Instagram ?", jp: "インスタをしていますか？", romaji: "insuta o shite imasu ka?" },
  { id: 8148, en: "Is there a charging port?", fr: "Y a-t-il une prise de charge ?", jp: "充電器はありますか？", romaji: "jūdenki wa arimasu ka?" },
  { id: 8149, en: "Can I borrow this?", fr: "Puis-je emprunter ceci ?", jp: "これを借りてもいいですか？", romaji: "kore o karite mo ii desu ka?" },
  { id: 8150, en: "Did you hear that?", fr: "As-tu entendu ?", jp: "聞こえましたか？", romaji: "kikoemashita ka?" },
  { id: 8151, en: "Did you see that?", fr: "As-tu vu ?", jp: "見ましたか？", romaji: "mimashita ka?" },
  { id: 8152, en: "Do you know [Person]?", fr: "Connais-tu [Personne] ?", jp: "[Person] さんを知っていますか？", romaji: "[Person]-san o shitte imasu ka?" },
  { id: 8153, en: "How was your day?", fr: "C'était comment ta journée ?", jp: "今日はどうでしたか？", romaji: "kyō wa dō deshita ka?" },
  { id: 8154, en: "What's the matter?", fr: "Quel est le problème ?", jp: "どうしたの？", romaji: "dō shitano?" },
  { id: 8155, en: "Are you ready?", fr: "Es-tu prêt ?", jp: "準備はいいですか？", romaji: "junbi wa ii desu ka?" },
  { id: 8156, en: "Shall we go?", fr: "On y va ?", jp: "行きましょうか？", romaji: "ikimashō ka?" },
  { id: 8157, en: "Is it okay to sit here?", fr: "Puis-je m'asseoir ici ?", jp: "ここに座ってもいいですか？", romaji: "koko ni suwatte mo ii desu ka?" },
  { id: 8158, en: "May I have your name?", fr: "Puis-je avoir votre nom ?", jp: "お名前を伺ってもよろしいですか？", romaji: "onamae o ukagatte mo yoroshii desu ka?" },
  { id: 8159, en: "What is the purpose of your visit?", fr: "Quel est le but de votre visite ?", jp: "入国の目的は何ですか？", romaji: "nyūkoku no mokuteki wa nan desu ka?" },
  { id: 8160, en: "How old are you?", fr: "Quel âge as-tu ?", jp: "何歳ですか？", romaji: "nansai desu ka?" },
  { id: 8161, en: "Do you have brothers or sisters?", fr: "As-tu des frères et sœurs ?", jp: "兄弟がいますか？", romaji: "kyōdai ga imasu ka?" },
  { id: 8162, en: "What kind of music do you like?", fr: "Quelle musique aimes-tu ?", jp: "どんな音楽が好きですか？", romaji: "donna ongaku ga suki desu ka?" },
  { id: 8163, en: "Can you play the piano?", fr: "Sais-tu jouer du piano ?", jp: "ピアノが弾けますか？", romaji: "piano ga hikemasu ka?" },
  { id: 8164, en: "Do you like sports?", fr: "Aimes-tu le sport ?", jp: "スポーツは好きですか？", romaji: "supōtsu wa suki desu ka?" },
  { id: 8165, en: "Which team do you support?", fr: "Quelle équipe soutiens-tu ?", jp: "どのチームを応援していますか？", romaji: "dono chīmu o ōen shite imasu ka?" },
  { id: 8166, en: "What is your blood type?", fr: "Quel est ton groupe sanguin ?", jp: "血液型は何ですか？", romaji: "ketsuekigata wa nan desu ka?" },
  { id: 8167, en: "Do you believe in ghosts?", fr: "Crois-tu aux fantômes ?", jp: "幽霊を信じますか？", romaji: "yūrei o shinjimasu ka?" },
  { id: 8168, en: "What is your dream?", fr: "Quel est ton rêve ?", jp: "夢は何ですか？", romaji: "yume wa nan desu ka?" },
  { id: 8169, en: "Are you a student?", fr: "Es-tu étudiant ?", jp: "学生ですか？", romaji: "gakusei desu ka?" },
  { id: 8170, en: "Where is the police box?", fr: "Où est le poste de police ?", jp: "交番はどこですか？", romaji: "kōban wa doko desu ka?" },
  { id: 8171, en: "Did you lose something?", fr: "As-tu perdu quelque chose ?", jp: "何かを失くしましたか？", romaji: "nanika o nakushimashita ka?" },
  { id: 8172, en: "Can you hear me?", fr: "M'entendez-vous ?", jp: "聞こえますか？", romaji: "kikoemasu ka?" },
  { id: 8173, en: "Is it cold outside?", fr: "Fait-il froid dehors ?", jp: "外は寒いですか？", romaji: "soto wa samui desu ka?" },
  { id: 8174, en: "Is it hot outside?", fr: "Fait-il chaud dehors ?", jp: "外は暑いですか？", romaji: "soto wa atsui desu ka?" },
  { id: 8175, en: "Do you have an umbrella?", fr: "As-tu un parapluie ?", jp: "傘を持っていますか？", romaji: "kasa o motte imasu ka?" },
  { id: 8176, en: "Can I use the Wi-Fi for free?", fr: "Puis-je utiliser le Wi-Fi gratuitement ?", jp: "ワイファイを無料で使えますか？", romaji: "waifai o muryō de tsukaemasu ka?" },
  { id: 8177, en: "What is the password?", fr: "Quel est le mot de passe ?", jp: "パスワードは何ですか？", romaji: "pasuwādo wa nan desu ka?" },
  { id: 8178, en: "Is there a convenience store nearby?", fr: "Y a-t-il un konbini proche ?", jp: "近くにコンビニはありますか？", romaji: "chikaku ni konbini wa arimasu ka?" },
  { id: 8179, en: "Do you sell stamps?", fr: "Vendez-vous des timbres ?", jp: "切手は売っていますか？", romaji: "kitte wa utte imasu ka?" },
  { id: 8180, en: "Can I send a parcel?", fr: "Puis-je envoyer un colis ?", jp: "小包を送れますか？", romaji: "kodutsumi o okuremasu ka?" },
  { id: 8181, en: "How much is the postage?", fr: "Combien coûtent les frais de port ?", jp: "送料はいくらですか？", romaji: "sōryō wa ikura desu ka?" },
  { id: 8182, en: "Can I have a bag, please?", fr: "Puis-je avoir un sac svp ?", jp: "袋をいただけますか？", romaji: "fukuro o itadakemasu ka?" },
  { id: 8183, en: "Is this a tax-free shop?", fr: "Est-ce un magasin détaxé ?", jp: "ここは免税店ですか？", romaji: "koko wa menzeiten desu ka?" },
  { id: 8184, en: "Do you have a map?", fr: "Avez-vous une carte ?", jp: "地図はありますか？", romaji: "chizu wa arimasu ka?" },
  { id: 8185, en: "Can you show me on the map?", fr: "Pouvez-vous me montrer sur la carte ?", jp: "地図で教えてくれますか？", romaji: "chizu de oshiete kuremasu ka?" },
  { id: 8186, en: "What is this building?", fr: "Quel est ce bâtiment ?", jp: "この建物は何ですか？", romaji: "kono tatemono wa nan desu ka?" },
  { id: 8187, en: "Are there any famous places nearby?", fr: "Y a-t-il des lieux célèbres proches ?", jp: "近くに有名な場所はありますか？", romaji: "chikaku ni yūmei na basho wa arimasu ka?" },
  { id: 8188, en: "Is it a historic site?", fr: "Est-ce un site historique ?", jp: "ここは史跡ですか？", romaji: "koko wa shiseki desu ka?" },
  { id: 8189, en: "Can I take a break?", fr: "Puis-je faire une pause ?", jp: "休憩してもいいですか？", romaji: "kyūkei shite mo ii desu ka?" },
  { id: 8190, en: "Are you alone?", fr: "Es-tu seul ?", jp: "一人ですか？", romaji: "hitori desu ka?" },
  { id: 8191, en: "Wait, what?", fr: "Attends, quoi ?", jp: "ちょっと、何？", romaji: "chotto, nani?" },
  { id: 8192, en: "Can I trust you?", fr: "Puis-je te faire confiance ?", jp: "信じてもいいですか？", romaji: "shinjite mo ii desu ka?" },
  { id: 8193, en: "Do you have a boyfriend/girlfriend?", fr: "As-tu un petit ami / petite amie ?", jp: "恋人はいますか？", romaji: "koibito wa imasu ka?" },
  { id: 8194, en: "What are you looking for?", fr: "Que cherches-tu ?", jp: "何を探していますか？", romaji: "nani o sagashite imasu ka?" },
  { id: 8195, en: "Can you help me find [Object]?", fr: "Aide-moi à trouver [Objet] ?", jp: "[Object] を探すのを手伝ってくれますか？", romaji: "[Object] o sagasu no o tetsudatte kuremasu ka?" },
  { id: 8196, en: "Is it a secret?", fr: "Est-ce un secret ?", jp: "秘密ですか？", romaji: "himitsu desu ka?" },
  { id: 8197, en: "Can you keep a secret?", fr: "Peux-tu garder un secret ?", jp: "秘密を守れますか？", romaji: "himitsu o mamoremasu ka?" },
  { id: 8198, en: "What's the news?", fr: "Quelles sont les nouvelles ?", jp: "ニュースは何ですか？", romaji: "nyūsu wa nan desu ka?" },
  { id: 8199, en: "Everything okay?", fr: "Tout va bien ?", jp: "全部大丈夫ですか？", romaji: "zenbu daijōbu desu ka?" },
  { id: 8200, en: "Shall we finish?", fr: "On termine ?", jp: "終わりましょうか？", romaji: "owarimashō ka?" }
];