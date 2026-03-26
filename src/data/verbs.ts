import { type Word } from '../data';

export const verbWords: Word[] = [
  // --- ACTIONS DE BASE (MOUVEMENT) ---
  { id: 10001, en: "To go", fr: "Aller", jp: "行きます", romaji: "ikimasu" },
  { id: 10002, en: "To come", fr: "Venir", jp: "来ます", romaji: "kimasu" },
  { id: 10003, en: "To return (home)", fr: "Rentrer", jp: "帰ります", romaji: "kaerimasu" },
  { id: 10004, en: "To walk", fr: "Marcher", jp: "歩きます", romaji: "arukimasu" },
  { id: 10005, en: "To run", fr: "Courir", jp: "走ります", romaji: "hashirimasu" },
  { id: 10006, en: "To swim", fr: "Nager", jp: "泳ぎます", romaji: "oyogimasu" },
  { id: 10007, en: "To fly", fr: "Voler (air)", jp: "飛びます", romaji: "tobimasu" },
  { id: 10008, en: "To go out", fr: "Sortir", jp: "出かけます", romaji: "dekakemasu" },

  // --- ACTIONS QUOTIDIENNES ---
  { id: 10009, en: "To eat", fr: "Manger", jp: "食べます", romaji: "tabemasu" },
  { id: 10010, en: "To drink", fr: "Boire", jp: "飲みます", romaji: "nomimasu" },
  { id: 10011, en: "To sleep", fr: "Dormir", jp: "寝ます", romaji: "nemuimasu" },
  { id: 10012, en: "To wake up", fr: "Se réveiller", jp: "起きます", romaji: "okimasu" },
  { id: 10013, en: "To wash", fr: "Laver", jp: "洗います", romaji: "araimasu" },
  { id: 10014, en: "To brush (teeth)", fr: "Brosser", jp: "磨きます", romaji: "migakimasu" },
  { id: 10015, en: "To take a shower", fr: "Prendre une douche", jp: "浴びます", romaji: "abimasu" },
  { id: 10016, en: "To cook", fr: "Cuisiner", jp: "料理します", romaji: "ryōri shimasu" },

  // --- COMMUNICATION ---
  { id: 10017, en: "To speak / talk", fr: "Parler", jp: "話します", romaji: "hanashimasu" },
  { id: 10018, en: "To say", fr: "Dire", jp: "言います", romaji: "iimasu" },
  { id: 10019, en: "To listen / hear / ask", fr: "Écouter / Entendre / Demander", jp: "聞きます", romaji: "kikimasu" },
  { id: 10020, en: "To read", fr: "Lire", jp: "読みます", romaji: "yomimasu" },
  { id: 10021, en: "To write", fr: "Écrire", jp: "書きます", romaji: "kakimasu" },
  { id: 10022, en: "To call (phone)", fr: "Appeler", jp: "電話します", romaji: "denwa shimasu" },
  { id: 10023, en: "To show", fr: "Montrer", jp: "見せます", romaji: "misemasu" },
  { id: 10024, en: "To teach", fr: "Enseigner", jp: "教えます", romaji: "oshiemasu" },
  { id: 10025, en: "To learn", fr: "Apprendre", jp: "習います", romaji: "naraimasu" },

  // --- TRAVAIL & ÉTUDES ---
  { id: 10026, en: "To work", fr: "Travailler", jp: "働きます", romaji: "hatarakimasu" },
  { id: 10027, en: "To study", fr: "Étudier", jp: "勉強します", romaji: "benkyō shimasu" },
  { id: 10028, en: "To make / create", fr: "Fabriquer / Faire", jp: "作ります", romaji: "tsukurimasu" },
  { id: 10029, en: "To use", fr: "Utiliser", jp: "使います", romaji: "tsukaimasu" },
  { id: 10030, en: "To help", fr: "Aider", jp: "手伝います", romaji: "tetsudaimasu" },
  { id: 10031, en: "To rest", fr: "Se reposer", jp: "休みます", romaji: "yasumimasu" },
  { id: 10032, en: "To finish", fr: "Finir", jp: "終わります", romaji: "owarimasu" },
  { id: 10033, en: "To start", fr: "Commencer", jp: "始まります", romaji: "hajimarimasu" },

  // --- PERCEPTION & MENTAL ---
  { id: 10034, en: "To see / watch / look", fr: "Voir / Regarder", jp: "見ます", romaji: "mimasu" },
  { id: 10035, en: "To know", fr: "Savoir / Connaître", jp: "知ります", romaji: "shirimasu" },
  { id: 10036, en: "To understand", fr: "Comprendre", jp: "わかります", romaji: "wakarimasu" },
  { id: 10037, en: "To think", fr: "Penser", jp: "思います", romaji: "omoimasu" },
  { id: 10038, en: "To remember", fr: "Se souvenir", jp: "覚えています", romaji: "oboete imasu" },
  { id: 10039, en: "To forget", fr: "Oublier", jp: "忘れます", romaji: "wasuremasu" },
  { id: 10040, en: "To search / look for", fr: "Chercher", jp: "探します", romaji: "sagashimasu" },

  // --- POSSESSION & EXISTENCE ---
  { id: 10041, en: "To exist (animate)", fr: "Être là / Exister (vivant)", jp: "います", romaji: "imasu" },
  { id: 10042, en: "To exist / have (inanimate)", fr: "Avoir / Exister (objet)", jp: "あります", romaji: "arimasu" },
  { id: 10043, en: "To have / hold", fr: "Tenir / Posséder", jp: "持ちます", romaji: "mochimasu" },
  { id: 10044, en: "To want", fr: "Vouloir", jp: "欲しいです", romaji: "hoshii desu" },

  // --- ÉCHANGES ---
  { id: 10045, en: "To buy", fr: "Acheter", jp: "買います", romaji: "kaimasu" },
  { id: 10046, en: "To sell", fr: "Vendre", jp: "売ります", romaji: "urimasu" },
  { id: 10047, en: "To give", fr: "Donner", jp: "あげます", romaji: "agemasu" },
  { id: 10048, en: "To receive", fr: "Recevoir", jp: "もらいます", romaji: "moraimasu" },
  { id: 10049, en: "To borrow", fr: "Emprunter", jp: "借ります", romaji: "karimasu" },
  { id: 10050, en: "To lend", fr: "Prêter", jp: "貸します", romaji: "kashimasu" },
  { id: 10051, en: "To pay", fr: "Payer", jp: "払います", romaji: "haraimasu" },

  // --- INTERACTIONS SOCIALES ---
  { id: 10052, en: "To meet", fr: "Rencontrer", jp: "会います", romaji: "aimasu" },
  { id: 10053, en: "To play", fr: "Jouer / S'amuser", jp: "遊びます", romaji: "asobimasu" },
  { id: 10054, en: "To wait", fr: "Attendre", jp: "待ちます", romaji: "machimasu" },
  { id: 10055, en: "To hurry", fr: "Se dépêcher", jp: "急ぎます", romaji: "isogimasu" },
  { id: 10056, en: "To call out", fr: "Appeler (quelqu'un)", jp: "呼びます", romaji: "yobimasu" },
  { id: 10057, en: "To marry", fr: "Se marier", jp: "結婚します", romaji: "kekkon shimasu" },

  // --- MOUVEMENTS D'OBJETS ---
  { id: 10058, en: "To put / place", fr: "Poser / Mettre", jp: "置きます", romaji: "okimasu" },
  { id: 10059, en: "To take", fr: "Prendre", jp: "取ります", romaji: "torimasu" },
  { id: 10060, en: "To put in", fr: "Insérer / Mettre dans", jp: "入れます", romaji: "iremasu" },
  { id: 10061, en: "To take out", fr: "Sortir (un objet)", jp: "出します", romaji: "dashimasu" },
  { id: 10062, en: "To open", fr: "Ouvrir", jp: "開けます", romaji: "akemasu" },
  { id: 10063, en: "To close", fr: "Fermer", jp: "閉めます", romaji: "shimemasu" },

  // --- ÉTATS ---
  { id: 10064, en: "To become", fr: "Devenir", jp: "なります", romaji: "narimasu" },
  { id: 10065, en: "To be different", fr: "Être différent / Se tromper", jp: "違います", romaji: "chigaimasu" },
  { id: 10066, en: "To stop (motion)", fr: "S'arrêter", jp: "止まります", romaji: "tomarimasu" },
  { id: 10067, en: "To continue", fr: "Continuer", jp: "続けます", romaji: "tsuzukemasu" },

  // --- ACTIONS PHYSIQUES ---
  { id: 10068, en: "To sit", fr: "S'asseoir", jp: "座ります", romaji: "suwarimasu" },
  { id: 10069, en: "To stand up", fr: "Se lever", jp: "立ちます", romaji: "tachimasu" },
  { id: 10070, en: "To turn (left/right)", fr: "Tourner", jp: "曲がります", romaji: "magarimasu" },
  { id: 10071, en: "To climb", fr: "Grimper / Monter", jp: "登ります", romaji: "noborimasu" },
  { id: 10072, en: "To descend", fr: "Descendre", jp: "降ります", romaji: "orimasu" },
  { id: 10073, en: "To throw", fr: "Jeter / Lancé", jp: "投げます", romaji: "nagemasu" },
  { id: 10074, en: "To push", fr: "Pousser", jp: "押します", romaji: "oshimasu" },
  { id: 10075, en: "To pull", fr: "Tirer", jp: "引きます", romaji: "hikimasu" },

  // --- LOISIRS & SPORT ---
  { id: 10076, en: "To take a photo", fr: "Prendre une photo", jp: "撮ります", romaji: "torimasu" },
  { id: 10077, en: "To sing", fr: "Chanter", jp: "歌います", romaji: "utaimasu" },
  { id: 10078, en: "To dance", fr: "Danser", jp: "踊ります", romaji: "odorimasu" },
  { id: 10079, en: "To draw / paint", fr: "Dessiner", jp: "描きます", romaji: "kakimasu" },
  { id: 10080, en: "To smoke", fr: "Fumer", jp: "吸います", romaji: "suimasu" },

  // --- VÊTEMENTS ---
  { id: 10081, en: "To wear (upper body)", fr: "Porter (haut)", jp: "着ます", romaji: "kimasu" },
  { id: 10082, en: "To wear (lower body)", fr: "Porter (bas/chaussures)", jp: "履きます", romaji: "hakimasu" },
  { id: 10083, en: "To wear (head)", fr: "Porter (chapeau)", jp: "被ります", romaji: "kaburimasu" },
  { id: 10084, en: "To take off (clothes)", fr: "Enlever (vêtements)", jp: "脱ぎます", romaji: "nugimasu" },

  // --- SANTÉ ---
  { id: 10085, en: "To die", fr: "Mourir", jp: "死にます", romaji: "shinimasu" },
  { id: 10086, en: "To live / reside", fr: "Habiter", jp: "住んでいます", romaji: "sunde imasu" },
  { id: 10087, en: "To get tired", fr: "Se fatiguer", jp: "疲れます", romaji: "tsukaremasu" },
  { id: 10088, en: "To get sick", fr: "Tomber malade", jp: "病気になる", romaji: "byōki ni naru" },

  // --- DIVERS ---
  { id: 10089, en: "To do", fr: "Faire", jp: "します", romaji: "shimasu" },
  { id: 10090, en: "To strive / do one's best", fr: "Faire de son mieux", jp: "頑張ります", romaji: "ganbarimasu" },
  { id: 10091, en: "To check", fr: "Vérifier", jp: "確認します", romaji: "kakunin shimasu" },
  { id: 10092, en: "To search (internet)", fr: "Rechercher", jp: "検索します", romaji: "kensaku shimasu" },
  { id: 10093, en: "To send", fr: "Envoyer", jp: "送ります", romaji: "okurimasu" },
  { id: 10094, en: "To arrive", fr: "Arriver", jp: "着きます", romaji: "tsukimasu" },
  { id: 10095, en: "To carry", fr: "Transporter", jp: "運びます", romaji: "hakobimasu" },
  { id: 10096, en: "To help / save", fr: "Sauver / Aider", jp: "助けます", romaji: "tasukemasu" },
  { id: 10097, en: "To lose", fr: "Perdre", jp: "失くします", romaji: "nakushimasu" },
  { id: 10098, en: "To fix / repair", fr: "Réparer", jp: "直します", romaji: "naoshimasu" },
  { id: 10099, en: "To decide", fr: "Décider", jp: "決めます", romaji: "kimemasu" },
  { id: 10100, en: "To be useful", fr: "Être utile", jp: "役に立ちます", romaji: "yaku ni tachimasu" },
  // --- SENTIMENTS & ÉMOTIONS ---
  { id: 10101, en: "To love", fr: "Aimer (fort)", jp: "愛します", romaji: "aishimasu" },
  { id: 10102, en: "To enjoy", fr: "Apprécier / S'amuser", jp: "楽しみます", romaji: "tanoshimimasu" },
  { id: 10103, en: "To get angry", fr: "Se mettre en colère", jp: "怒ります", romaji: "okorimasu" },
  { id: 10104, en: "To cry", fr: "Pleurer", jp: "泣きます", romaji: "nakimasu" },
  { id: 10105, en: "To laugh", fr: "Rire", jp: "笑います", romaji: "waraimasu" },
  { id: 10106, en: "To be surprised", fr: "Être surpris", jp: "驚きます", romaji: "odorokimasu" },
  { id: 10107, en: "To be troubled", fr: "Être en difficulté", jp: "困ります", romaji: "komarimasu" },
  { id: 10108, en: "To worry", fr: "S'inquiéter", jp: "心配します", romaji: "shinpai shimasu" },
  { id: 10109, en: "To believe / trust", fr: "Croire / Faire confiance", jp: "信じます", romaji: "shinjimasu" },
  { id: 10110, en: "To hope / wish", fr: "Souhaiter / Espérer", jp: "願います", romaji: "negaimasu" },

  // --- VIE SOCIALE & POLITESSE ---
  { id: 10111, en: "To introduce", fr: "Présenter", jp: "紹介します", romaji: "shōkai shimasu" },
  { id: 10112, en: "To promise", fr: "Promettre", jp: "約束します", romaji: "yakusoku shimasu" },
  { id: 10113, en: "To invite", fr: "Inviter", jp: "誘います", romaji: "sasoimasu" },
  { id: 10114, en: "To visit", fr: "Visiter (lieu/personne)", jp: "訪ねます", romaji: "tazunemasu" },
  { id: 10115, en: "To consult / discuss", fr: "Consulter / Discuter", jp: "相談します", romaji: "sōdan shimasu" },
  { id: 10116, en: "To apologize", fr: "S'excuser", jp: "謝ります", romaji: "ayamarimasu" },
  { id: 10117, en: "To praise", fr: "Complimenter", jp: "褒めます", romaji: "homemasu" },
  { id: 10118, en: "To scold", fr: "Gronder", jp: "叱ります", romaji: "shikarimasu" },

  // --- NATURE & MÉTÉO ---
  { id: 10119, en: "To rain", fr: "Pleuvoir", jp: "雨が降ります", romaji: "ame ga furimasu" },
  { id: 10120, en: "To snow", fr: "Neiger", jp: "雪が降ります", romaji: "yuki ga furimasu" },
  { id: 10121, en: "To blow (wind)", fr: "Souffler (vent)", jp: "吹きます", romaji: "fukimasu" },
  { id: 10122, en: "To shine (sun)", fr: "Briller (soleil)", jp: "照ります", romaji: "terimasu" },
  { id: 10123, en: "To bloom", fr: "Fleurir", jp: "咲きます", romaji: "sakimasu" },
  { id: 10124, en: "To clear up (weather)", fr: "S'éclaircir", jp: "晴れます", romaji: "haremasu" },

  // --- TECHNOLOGIE & QUOTIDIEN ---
  { id: 10125, en: "To turn on (light/switch)", fr: "Allumer", jp: "つけます", romaji: "tsukemasu" },
  { id: 10126, en: "To turn off", fr: "Éteindre", jp: "消します", romaji: "keshimasu" },
  { id: 10127, en: "To charge (battery)", fr: "Charger", jp: "充電します", romaji: "jūden shimasu" },
  { id: 10128, en: "To push (button)", fr: "Appuyer", jp: "押します", romaji: "oshimasu" },
  { id: 10129, en: "To type", fr: "Taper (clavier)", jp: "打ちます", romaji: "uchimasu" },
  { id: 10130, en: "To copy", fr: "Copier", jp: "コピーします", romaji: "kopī shimasu" },
  { id: 10131, en: "To print", fr: "Imprimer", jp: "印刷します", romaji: "insatsu shimasu" },

  // --- DÉPLACEMENTS & TRANSPORT ---
  { id: 10132, en: "To get on (train/bus)", fr: "Monter (véhicule)", jp: "乗ります", romaji: "norimasu" },
  { id: 10133, en: "To get off", fr: "Descendre (véhicule)", jp: "降ります", romaji: "orimasu" },
  { id: 10134, en: "To transfer (trains)", fr: "Changer (correspondance)", jp: "乗り換えます", romaji: "norikaemasu" },
  { id: 10135, en: "To drive", fr: "Conduire", jp: "運転します", romaji: "unten shimasu" },
  { id: 10136, en: "To reserve", fr: "Réserver", jp: "予約します", romaji: "yoyaku shimasu" },
  { id: 10137, en: "To pass (by)", fr: "Passer (devant)", jp: "通ります", romaji: "tōrimasu" },
  { id: 10138, en: "To cross (bridge/street)", fr: "Traverser", jp: "渡ります", romaji: "watarimasu" },

  // --- ACTIONS PHYSIQUES PRÉCISES ---
  { id: 10139, en: "To cut", fr: "Couper", jp: "切ります", romaji: "kirimasu" },
  { id: 10140, en: "To hit / strike", fr: "Frapper", jp: "叩きます", romaji: "tatakimasu" },
  { id: 10141, en: "To touch", fr: "Toucher", jp: "触ります", romaji: "sawarimasu" },
  { id: 10142, en: "To drop", fr: "Faire tomber", jp: "落とします", romaji: "otoshimasu" },
  { id: 10143, en: "To pick up", fr: "Ramasser", jp: "拾います", romaji: "hiroimasu" },
  { id: 10144, en: "To break", fr: "Casser", jp: "壊します", romaji: "kowashimasu" },
  { id: 10145, en: "To hide", fr: "Cacher", jp: "隠します", romaji: "kakushimasu" },
  { id: 10146, en: "To tie / bind", fr: "Attacher / Nouer", jp: "結びます", romaji: "musubimasu" },

  // --- ÉTUDES & CONNAISSANCE ---
  { id: 10147, en: "To answer", fr: "Répondre", jp: "答えます", romaji: "kotaemasu" },
  { id: 10148, en: "To ask a question", fr: "Poser une question", jp: "質問します", romaji: "shitsumon shimasu" },
  { id: 10149, en: "To translate", fr: "Traduire", jp: "翻訳します", romaji: "hon'yaku shimasu" },
  { id: 10150, en: "To explain", fr: "Expliquer", jp: "説明します", romaji: "setsumei shimasu" },
  { id: 10151, en: "To memo / take note", fr: "Noter", jp: "メモします", romaji: "memo shimasu" },
  { id: 10152, en: "To examine / investigate", fr: "Examiner / Rechercher", jp: "調べます", romaji: "shirabemasu" },

  // --- VIE QUOTIDIENNE (SUITE) ---
  { id: 10153, en: "To clean (room)", fr: "Nettoyer", jp: "掃除します", romaji: "sōji shimasu" },
  { id: 10154, en: "To do laundry", fr: "Faire la lessive", jp: "洗濯します", romaji: "sentaku shimasu" },
  { id: 10155, en: "To take a bath", fr: "Prendre un bain", jp: "お風呂に入ります", romaji: "ofuro ni hairimasu" },
  { id: 10156, en: "To go to bed", fr: "Se coucher", jp: "就寝します", romaji: "shūshin shimasu" },
  { id: 10157, en: "To move (house)", fr: "Déménager", jp: "引っ越します", romaji: "hikkoshimasu" },
  { id: 10158, en: "To help (general)", fr: "Aider", jp: "手伝います", romaji: "tetsudaimasu" },

  // --- BUSINESS & ARGENT ---
  { id: 10159, en: "To earn (money)", fr: "Gagner (argent)", jp: "稼ぎます", romaji: "kasegimasu" },
  { id: 10160, en: "To save (money)", fr: "Économiser", jp: "貯金します", romaji: "chokin shimasu" },
  { id: 10161, en: "To spend (money)", fr: "Dépenser", jp: "使います", romaji: "tsukaimasu" },
  { id: 10162, en: "To succeed", fr: "Réussir", jp: "成功します", romaji: "seikō shimasu" },
  { id: 10163, en: "To fail", fr: "Échouer", jp: "失敗します", romaji: "shippai shimasu" },
  { id: 10164, en: "To attend / participate", fr: "Participer", jp: "参加します", romaji: "sanka shimasu" },

  // --- ACTIONS VARIÉES ---
  { id: 10165, en: "To choose", fr: "Choisir", jp: "選びます", romaji: "erabimasu" },
  { id: 10166, en: "To compare", fr: "Comparer", jp: "比べます", romaji: "kurabemasu" },
  { id: 10167, en: "To prepare", fr: "Préparer", jp: "準備します", romaji: "junbi shimasu" },
  { id: 10168, en: "To change (something)", fr: "Changer", jp: "変えます", romaji: "kaemasu" },
  { id: 10169, en: "To increase", fr: "Augmenter", jp: "増えます", romaji: "fuemasu" },
  { id: 10170, en: "To decrease", fr: "Diminuer", jp: "減ります", romaji: "herimasu" },
  { id: 10171, en: "To win", fr: "Gagner (match)", jp: "勝ちます", romaji: "kachimasu" },
  { id: 10172, en: "To lose (match)", fr: "Perdre (match)", jp: "負けます", romaji: "makemasu" },
  { id: 10173, en: "To quit / stop (action)", fr: "Arrêter / Démissionner", jp: "やめます", romaji: "yamemasu" },

  // --- SENS & PERCEPTION ---
  { id: 10174, en: "To smell", fr: "Sentir (odeur)", jp: "匂います", romaji: "nioimasu" },
  { id: 10175, en: "To taste", fr: "Goûter", jp: "味わいます", romaji: "ajiwaimasu" },
  { id: 10176, en: "To feel", fr: "Ressentir", jp: "感じます", romaji: "kanjimasu" },
  { id: 10177, en: "To watch out / be careful", fr: "Faire attention", jp: "注意します", romaji: "chūi shimasu" },

  // --- AUTRES ---
  { id: 10178, en: "To be enough", fr: "Suffire", jp: "足ります", romaji: "tarimasu" },
  { id: 10179, en: "To stay (overnight)", fr: "Loger / Passer la nuit", jp: "泊まります", romaji: "tomarimasu" },
  { id: 10180, en: "To be late", fr: "Être en retard", jp: "遅れます", romaji: "okuremasu" },
  { id: 10181, en: "To be in time", fr: "Être à l'heure", jp: "間に合います", romaji: "maniaimasu" },
  { id: 10182, en: "To line up", fr: "Faire la queue", jp: "並びます", romaji: "narabimasu" },
  { id: 10183, en: "To live (be alive)", fr: "Vivre", jp: "生きます", romaji: "ikimasu" },
  { id: 10184, en: "To pray", fr: "Prier", jp: "祈ります", romaji: "inorimasu" },
  { id: 10185, en: "To wish (demand)", fr: "Demander / Prier de", jp: "お願いします", romaji: "onegaishimasu" },
  { id: 10186, en: "To breathe", fr: "Respirer", jp: "呼吸します", romaji: "kokyū shimasu" },
  { id: 10187, en: "To dance", fr: "Danser", jp: "踊ります", romaji: "odorimasu" },
  { id: 10188, en: "To burn", fr: "Brûler", jp: "焼けます", romaji: "yakemasu" },
  { id: 10189, en: "To build", fr: "Construire", jp: "建てます", romaji: "tatemasu" },
  { id: 10190, en: "To get used to", fr: "S'habituer", jp: "慣れます", romaji: "naremasu" },
  { id: 10191, en: "To wrap", fr: "Emballer", jp: "包みます", romaji: "tsutsumimasu" },
  { id: 10192, en: "To boil (water)", fr: "Bouillir", jp: "沸かします", romaji: "wakashimasu" },
  { id: 10193, en: "To mix", fr: "Mélanger", jp: "混ぜます", romaji: "mazemasu" },
  { id: 10194, en: "To calculate", fr: "Calculer", jp: "計算します", romaji: "keisan shimasu" },
  { id: 10195, en: "To record (video)", fr: "Enregistrer", jp: "録画します", romaji: "rokuga shimasu" },
  { id: 10196, en: "To plan", fr: "Planifier", jp: "計画します", romaji: "keikaku shimasu" },
  { id: 10197, en: "To support", fr: "Soutenir", jp: "応援します", romaji: "ōen shimasu" },
  { id: 10198, en: "To report", fr: "Rapporter / Informer", jp: "報告します", romaji: "hōkoku shimasu" },
  { id: 10199, en: "To return (an object)", fr: "Rendre (objet)", jp: "返します", romaji: "kaeshimasu" },
  { id: 10200, en: "To complete", fr: "Compléter / Finir", jp: "完成します", romaji: "kansei shimasu" },
  // --- SANTÉ & CORPS ---
  { id: 10201, en: "To cough", fr: "Tousser", jp: "咳が出ます", romaji: "seki ga demasu" },
  { id: 10202, en: "To sneeze", fr: "Éternuer", jp: "くしゃみをします", romaji: "kushami o shimasu" },
  { id: 10203, en: "To bleed", fr: "Saigner", jp: "血が出ます", romaji: "chi ga demasu" },
  { id: 10204, en: "To vomit", fr: "Vomir", jp: "吐きます", romaji: "hakimasu" },
  { id: 10205, en: "To be injured", fr: "Se blesser", jp: "怪我をします", romaji: "kega o shimasu" },
  { id: 10206, en: "To take medicine", fr: "Prendre un médicament", jp: "薬を飲みます", romaji: "kusuri o nomimasu" },
  { id: 10207, en: "To recover", fr: "Guérir", jp: "治ります", romaji: "naorimasu" },
  { id: 10208, en: "To be hospitalized", fr: "Être hospitalisé", jp: "入院します", romaji: "nyūin shimasu" },
  { id: 10209, en: "To exercise", fr: "Faire de l'exercice", jp: "運動します", romaji: "undō shimasu" },

  // --- ACTIONS MÉNAGÈRES & QUOTIDIEN ---
  { id: 10210, en: "To hang (laundry)", fr: "Étendre (le linge)", jp: "干します", romaji: "hoshimasu" },
  { id: 10211, en: "To wipe", fr: "Essuyer", jp: "拭きます", romaji: "fukimasu" },
  { id: 10212, en: "To sweep", fr: "Balayer", jp: "掃きます", romaji: "hakimasu" },
  { id: 10213, en: "To polish", fr: "Polir / Cirer", jp: "磨きます", romaji: "migakimasu" },
  { id: 10214, en: "To tidy up", fr: "Ranger", jp: "片付けます", romaji: "katazukemasu" },
  { id: 10215, en: "To decorate", fr: "Décorer", jp: "飾ります", romaji: "kazarimasu" },
  { id: 10216, en: "To water (plants)", fr: "Arroser", jp: "水をやります", romaji: "mizu o yarimasu" },
  { id: 10217, en: "To wake someone up", fr: "Réveiller quelqu'un", jp: "起こします", romaji: "okoshimasu" },
  { id: 10218, en: "To shave", fr: "Se raser", jp: "剃ります", romaji: "sorimasu" },
  { id: 10219, en: "To comb", fr: "Peigner", jp: "とかします", romaji: "tokashimasu" },

  // --- MOUVEMENTS PRÉCIS ---
  { id: 10220, en: "To go up", fr: "Monter (escalier)", jp: "上がります", romaji: "agarimasu" },
  { id: 10221, en: "To go down", fr: "Descendre (escalier)", jp: "下がります", romaji: "sagarimasu" },
  { id: 10222, en: "To turn around", fr: "Se retourner", jp: "振り向きます", romaji: "furimukimasu" },
  { id: 10223, en: "To jump", fr: "Sauter", jp: "跳びます", romaji: "tobimasu" },
  { id: 10224, en: "To shake / swing", fr: "Secouer", jp: "振ります", romaji: "furimasu" },
  { id: 10225, en: "To crawl", fr: "Ramper", jp: "這います", romaji: "haimasu" },
  { id: 10226, en: "To carry on shoulder", fr: "Porter sur l'épaule", jp: "担ぎます", romaji: "katsugimasu" },
  { id: 10227, en: "To carry under arm", fr: "Porter sous le bras", jp: "抱えます", romaji: "kakaemasu" },

  // --- OPINION & PENSÉE ---
  { id: 10228, en: "To agree", fr: "Être d'accord", jp: "賛成します", romaji: "sansei shimasu" },
  { id: 10229, en: "To disagree", fr: "Ne pas être d'accord", jp: "反対します", romaji: "hantai shimasu" },
  { id: 10230, en: "To doubt", fr: "Douter", jp: "疑います", romaji: "utagaimasu" },
  { id: 10231, en: "To wonder", fr: "Se demander", jp: "かしらと思います", romaji: "kashira to omoimasu" },
  { id: 10232, en: "To compare", fr: "Comparer", jp: "比較します", romaji: "hikaku shimasu" },
  { id: 10233, en: "To criticize", fr: "Critiquer", jp: "批判します", romaji: "hihan shimasu" },
  { id: 10234, en: "To judge", fr: "Juger", jp: "判断します", romaji: "handan shimasu" },

  // --- RELATIONS & INTERACTION ---
  { id: 10235, en: "To hug", fr: "Serrer dans ses bras", jp: "抱きしめます", romaji: "dakishimemasu" },
  { id: 10236, en: "To kiss", fr: "Embrasser", jp: "キスをします", romaji: "kisu o shimasu" },
  { id: 10237, en: "To fight", fr: "Se battre / Se disputer", jp: "喧嘩します", romaji: "kenka shimasu" },
  { id: 10238, en: "To reconcile", fr: "Se réconcilier", jp: "仲直りします", romaji: "nakanaori shimasu" },
  { id: 10239, en: "To respect", fr: "Respecter", jp: "尊敬します", romaji: "sonkei shimasu" },
  { id: 10240, en: "To trust", fr: "Faire confiance", jp: "信頼します", romaji: "shinrai shimasu" },
  { id: 10241, en: "To betray", fr: "Trahir", jp: "裏切ります", romaji: "uragirimasu" },
  { id: 10242, en: "To help (save life)", fr: "Secourir", jp: "救います", romaji: "sukuimasu" },

  // --- NATURE & PHÉNOMÈNES ---
  { id: 10243, en: "To freeze", fr: "Geler", jp: "凍ります", romaji: "koorimasu" },
  { id: 10244, en: "To melt", fr: "Fondre", jp: "溶けます", romaji: "tokemasu" },
  { id: 10245, en: "To dry", fr: "Sécher", jp: "乾きます", romaji: "kawakimasu" },
  { id: 10246, en: "To get wet", fr: "Se mouiller", jp: "濡れます", romaji: "nuremasu" },
  { id: 10247, en: "To shine / sparkle", fr: "Briller / Scintiller", jp: "輝きます", romaji: "kagayakimasu" },
  { id: 10248, en: "To flow", fr: "Couler (rivière)", jp: "流れます", romaji: "nagaremasu" },

  // --- ACTIONS CULINAIRES PRÉCISES ---
  { id: 10249, en: "To bake / grill", fr: "Griller / Cuire au four", jp: "焼きます", romaji: "yakimasu" },
  { id: 10250, en: "To boil", fr: "Bouillir", jp: "茹でます", romaji: "yudemasu" },
  { id: 10251, en: "To fry (stir-fry)", fr: "Sauter (poêle)", jp: "炒めます", romaji: "itame masu" },
  { id: 10252, en: "To deep-fry", fr: "Frire", jp: "揚げます", romaji: "agemasu" },
  { id: 10253, en: "To peel", fr: "Éplucher", jp: "剥きます", romaji: "mukimasu" },
  { id: 10254, en: "To steam", fr: "Cuire à la vapeur", jp: "蒸します", romaji: "mushimasu" },
  { id: 10255, en: "To pour", fr: "Verser", jp: "注ぎます", romaji: "tsugimasu" },

  // --- ÉTATS D'OBJETS ---
  { id: 10256, en: "To bend", fr: "Plier / Courber", jp: "曲げます", romaji: "magemasu" },
  { id: 10257, en: "To stretch", fr: "Étirer", jp: "伸ばします", romaji: "nobashimasu" },
  { id: 10258, en: "To twist", fr: "Tordre", jp: "ねじります", romaji: "nejirimasu" },
  { id: 10259, en: "To tear", fr: "Déchirer", jp: "破ります", romaji: "yaburimasu" },
  { id: 10260, en: "To tie a knot", fr: "Faire un nœud", jp: "結びます", romaji: "musubimasu" },
  { id: 10261, en: "To loosen", fr: "Desserrer", jp: "緩めます", romaji: "yurumemasu" },

  // --- PERCEPTION (PRÉCIS) ---
  { id: 10262, en: "To stare", fr: "Fixer du regard", jp: "見つめます", romaji: "mitsumemasu" },
  { id: 10263, en: "To glance", fr: "Jeter un coup d'œil", jp: "ちらっと見ます", romaji: "chiratto mimasu" },
  { id: 10264, en: "To overhear", fr: "Entendre par hasard", jp: "小耳に挟みます", romaji: "komimi ni hasamimasu" },
  { id: 10265, en: "To sniff", fr: "Renifler", jp: "嗅ぎます", romaji: "kagimasu" },

  // --- TRAVAIL & ADMINISTRATION ---
  { id: 10266, en: "To hire", fr: "Embaucher", jp: "雇います", romaji: "yatoimasu" },
  { id: 10267, en: "To resign", fr: "Démissionner", jp: "辞職します", romaji: "jishoku shimasu" },
  { id: 10268, en: "To develop", fr: "Développer", jp: "開発します", romaji: "kaihatsu shimasu" },
  { id: 10269, en: "To manage", fr: "Gérer", jp: "管理します", romaji: "kanri shimasu" },
  { id: 10270, en: "To sign", fr: "Signer", jp: "署名します", romaji: "shomei shimasu" },
  { id: 10271, en: "To stamp (hanko)", fr: "Tamponner", jp: "印鑑を押します", romaji: "inkan o oshimasu" },
  { id: 10272, en: "To negotiate", fr: "Négocier", jp: "交渉します", romaji: "kōshō shimasu" },
  { id: 10273, en: "To progress", fr: "Progresser", jp: "進歩します", romaji: "shinpō shimasu" },

  // --- SPORTS & COMPÉTITION ---
  { id: 10274, en: "To compete", fr: "Concourir", jp: "競います", romaji: "kisōimasu" },
  { id: 10275, en: "To practice", fr: "S'entraîner", jp: "練習します", romaji: "renshū shimasu" },
  { id: 10276, en: "To pass (ball)", fr: "Passer (ballon)", jp: "パスします", romaji: "pasu shimasu" },
  { id: 10277, en: "To score", fr: "Marquer un point", jp: "得点します", romaji: "tokuten shimasu" },
  { id: 10278, en: "To defend", fr: "Défendre", jp: "守ります", romaji: "mamorimasu" },
  { id: 10279, en: "To attack", fr: "Attaquer", jp: "攻撃します", romaji: "kōgeki shimasu" },

  // --- VERBES COMPOSÉS & EXPRESSIONS ---
  { id: 10280, en: "To remember / Recall", fr: "Se rappeler", jp: "思い出します", romaji: "omoidashimasu" },
  { id: 10281, en: "To find", fr: "Trouver", jp: "見つけます", romaji: "mitsukemasu" },
  { id: 10282, en: "To find out", fr: "Découvrir", jp: "見つけ出します", romaji: "mitsukedashimasu" },
  { id: 10283, en: "To pick up (someone)", fr: "Chercher (quelqu'un)", jp: "迎えに行きます", romaji: "mukae ni ikimasu" },
  { id: 10284, en: "To take (someone)", fr: "Emmener", jp: "連れて行きます", romaji: "tsurete ikimasu" },
  { id: 10285, en: "To bring (someone)", fr: "Amener", jp: "連れて来ます", romaji: "tsurete kimasu" },
  { id: 10286, en: "To bring (something)", fr: "Apporter", jp: "持って来ます", romaji: "motte kimasu" },
  { id: 10287, en: "To take (something)", fr: "Emporter", jp: "持って行きます", romaji: "motte ikimasu" },
  { id: 10288, en: "To re-do", fr: "Refaire", jp: "やり直します", romaji: "yarinaoshimasu" },
  { id: 10289, en: "To oversleep", fr: "Faire la grasse matinée", jp: "寝坊します", romaji: "nebō shimasu" },

  // --- AUTRES ---
  { id: 10290, en: "To continue", fr: "Continuer", jp: "続けます", romaji: "tsuzukemasu" },
  { id: 10291, en: "To stop (habit)", fr: "Arrêter (habitude)", jp: "やめます", romaji: "yamemasu" },
  { id: 10292, en: "To change (mind)", fr: "Changer d'avis", jp: "考えを変えます", romaji: "kangae o kaemasu" },
  { id: 10293, en: "To succeed (inherit)", fr: "Hériter", jp: "継ぎます", romaji: "tsugimasu" },
  { id: 10294, en: "To travel", fr: "Voyager", jp: "旅行します", romaji: "ryokō shimasu" },
  { id: 10295, en: "To stay (at home)", fr: "Rester (chez soi)", jp: "留守にします", romaji: "rusu ni shimasu" },
  { id: 10296, en: "To prepare (food)", fr: "Préparer (repas)", jp: "用意します", romaji: "yōi shimasu" },
  { id: 10297, en: "To survive", fr: "Survivre", jp: "生き残ります", romaji: "ikinocorimasu" },
  { id: 10298, en: "To vanish", fr: "Disparaître", jp: "消えます", romaji: "kiemasu" },
  { id: 10299, en: "To increase (population)", fr: "S'accroître", jp: "増加します", romaji: "zōka shimasu" },
  { id: 10300, en: "To decrease (amount)", fr: "Réduire", jp: "減少します", romaji: "genshō shimasu" },
  // --- NUANCES DE COMMUNICATION ---
  { id: 10301, en: "To shout", fr: "Crier", jp: "叫びます", romaji: "sakebimasu" },
  { id: 10302, en: "To whisper", fr: "Chuchoter", jp: "囁きます", romaji: "sasayakimasu" },
  { id: 10303, en: "To interrupt", fr: "Interrompre", jp: "邪魔します", romaji: "jama shimasu" },
  { id: 10304, en: "To keep a secret", fr: "Garder un secret", jp: "秘密を守ります", romaji: "himitsu o mamorimasu" },
  { id: 10305, en: "To advise", fr: "Conseiller", jp: "助言します", romaji: "jogen shimasu" },
  { id: 10306, en: "To complain", fr: "Se plaindre", jp: "文句を言います", romaji: "monku o iimasu" },
  { id: 10307, en: "To warn", fr: "Avertir", jp: "警告します", romaji: "keikoku shimasu" },
  { id: 10308, en: "To suggest", fr: "Suggérer", jp: "提案します", romaji: "teian shimasu" },
  { id: 10309, en: "To praise", fr: "Féliciter", jp: "祝います", romaji: "iwaimasu" },

  // --- ACTIONS PHYSIQUES ET OBJETS ---
  { id: 10310, en: "To hang (on a hook)", fr: "Accrocher", jp: "掛けます", romaji: "kakemasu" },
  { id: 10311, en: "To fold", fr: "Plier (vêtement/papier)", jp: "折ります", romaji: "orimasu" },
  { id: 10312, en: "To glue / stick", fr: "Coller", jp: "貼ります", romaji: "harimasu" },
  { id: 10313, en: "To dig", fr: "Creuser", jp: "掘ります", romaji: "horimasu" },
  { id: 10314, en: "To fill", fr: "Remplir", jp: "満たします", romaji: "mitashimasu" },
  { id: 10315, en: "To empty", fr: "Vider", jp: "空けます", romaji: "akemasu" },
  { id: 10316, en: "To knock", fr: "Frapper (porte)", jp: "ノックします", romaji: "nokku shimasu" },
  { id: 10317, en: "To lock", fr: "Verrouiller", jp: "鍵をかけます", romaji: "kagi o kakemasu" },
  { id: 10318, en: "To unlock", fr: "Déverrouiller", jp: "鍵を開けます", romaji: "kagi o akemasu" },

  // --- VOYAGE ET LOGEMENT ---
  { id: 10319, en: "To check in", fr: "S'enregistrer (hôtel)", jp: "チェックインします", romaji: "chekku-in shimasu" },
  { id: 10320, en: "To check out", fr: "Rendre la chambre", jp: "チェックアウトします", romaji: "chekku-auto shimasu" },
  { id: 10321, en: "To unpack", fr: "Défaire ses valises", jp: "荷物を解きます", romaji: "nimotsu o tokimasu" },
  { id: 10322, en: "To guide", fr: "Guider", jp: "案内します", romaji: "annai shimasu" },
  { id: 10323, en: "To go sightseeing", fr: "Faire du tourisme", jp: "観光します", romaji: "kankō shimasu" },
  { id: 10324, en: "To rent (car/room)", fr: "Louer", jp: "借ります", romaji: "karimasu" },
  { id: 10325, en: "To return (rented item)", fr: "Rendre (location)", jp: "返却します", romaji: "henkyaku shimasu" },

  // --- ÉMOTIONS ET ÉTATS MENTAUX ---
  { id: 10326, en: "To get used to", fr: "S'habituer", jp: "慣れます", romaji: "naremasu" },
  { id: 10327, en: "To give up", fr: "Abandonner", jp: "諦めます", romaji: "akiramemasu" },
  { id: 10328, en: "To endure", fr: "Endurer / Supporter", jp: "我慢します", romaji: "gaman shimasu" },
  { id: 10329, en: "To regret", fr: "Regretter", jp: "後悔します", romaji: "kōkai shimasu" },
  { id: 10330, en: "To be moved (emotionally)", fr: "Être ému", jp: "感動します", romaji: "kandō shimasu" },
  { id: 10331, en: "To relax", fr: "Se détendre", jp: "リラックスします", romaji: "rirakkusu shimasu" },
  { id: 10332, en: "To be nervous", fr: "Être nerveux", jp: "緊張します", romaji: "kinchō shimasu" },
  { id: 10333, en: "To feel relieved", fr: "Être soulagé", jp: "安心します", romaji: "anshin shimasu" },

  // --- ACTIONS SOCIALES ---
  { id: 10334, en: "To support / assist", fr: "Soutenir", jp: "支えます", romaji: "sazaemasu" },
  { id: 10335, en: "To protect", fr: "Protéger", jp: "守ります", romaji: "mamorimasu" },
  { id: 10336, en: "To avoid", fr: "Éviter", jp: "避けます", romaji: "sokemasu" },
  { id: 10337, en: "To exchange", fr: "Échanger", jp: "交換します", romaji: "kōkan shimasu" },
  { id: 10338, en: "To share", fr: "Partager", jp: "共有します", romaji: "kyōyū shimasu" },
  { id: 10339, en: "To compete", fr: "Faire la compétition", jp: "競争します", romaji: "kyōsō shimasu" },
  { id: 10340, en: "To cooperate", fr: "Coopérer", jp: "協力します", romaji: "kyōryoku shimasu" },

  // --- MÉTÉO ET ENVIRONNEMENT ---
  { id: 10341, en: "To get dark", fr: "S'assombrir", jp: "暗くなります", romaji: "kuraku narimasu" },
  { id: 10342, en: "To get bright", fr: "S'éclaircir (lumière)", jp: "明るくなります", romaji: "akaruku narimasu" },
  { id: 10343, en: "To shake (earthquake)", fr: "Trembler", jp: "揺れます", romaji: "yuremasu" },
  { id: 10344, en: "To pollute", fr: "Polluer", jp: "汚染します", romaji: "osen shimasu" },
  { id: 10345, en: "To protect (environment)", fr: "Protéger (nature)", jp: "保護します", romaji: "hogo shimasu" },

  // --- FINANCE ET VALEUR ---
  { id: 10346, en: "To cost", fr: "Coûter", jp: "費用がかかります", romaji: "hiyō ga kakarimasu" },
  { id: 10347, en: "To waste", fr: "Gaspiller", jp: "無駄にします", romaji: "muda ni shimasu" },
  { id: 10348, en: "To donate", fr: "Faire un don", jp: "寄付します", romaji: "kifu shimasu" },
  { id: 10349, en: "To invest", fr: "Investir", jp: "投資します", romaji: "tōshi shimasu" },
  { id: 10350, en: "To lend money", fr: "Prêter de l'argent", jp: "お金を貸します", romaji: "okane o kashimasu" },

  // --- ACTIONS PRÉCISES DU QUOTIDIEN ---
  { id: 10351, en: "To set (alarm)", fr: "Régler (réveil)", jp: "セットします", romaji: "setto shimasu" },
  { id: 10352, en: "To plug in", fr: "Brancher", jp: "差し込みます", romaji: "sashikomimasu" },
  { id: 10353, en: "To unplug", fr: "Débrancher", jp: "抜きます", romaji: "nukimasu" },
  { id: 10354, en: "To type", fr: "Saisir au clavier", jp: "入力します", romaji: "nyūryoku shimasu" },
  { id: 10355, en: "To download", fr: "Télécharger", jp: "ダウンロードします", romaji: "daunrōdo shimasu" },
  { id: 10356, en: "To upload", fr: "Mettre en ligne", jp: "アップロードします", romaji: "appurōdo shimasu" },

  // --- VERBES D'ÉTAT ---
  { id: 10357, en: "To remain", fr: "Rester / Rester en surplus", jp: "残ります", romaji: "nokorimasu" },
  { id: 10358, en: "To be missing", fr: "Manquer", jp: "欠けています", romaji: "kakete imasu" },
  { id: 10359, en: "To be enough", fr: "Être suffisant", jp: "足ります", romaji: "tarimasu" },
  { id: 10360, en: "To be visible", fr: "Être visible", jp: "見えます", romaji: "miemasu" },
  { id: 10361, en: "To be audible", fr: "Être audible", jp: "聞こえます", romaji: "kikoemasu" },

  // --- ACTIONS PHYSIQUES COMPLÉMENTAIRES ---
  { id: 10362, en: "To stir", fr: "Remuer", jp: "かき混ぜます", romaji: "kakimazemasu" },
  { id: 10363, en: "To squeeze", fr: "Presser / Essorer", jp: "絞ります", romaji: "shiborimasu" },
  { id: 10364, en: "To rub", fr: "Frotter", jp: "こすります", romaji: "kosurimasu" },
  { id: 10365, en: "To knock down", fr: "Renverser", jp: "倒します", romaji: "taoshimasu" },
  { id: 10366, en: "To spread (butter/jam)", fr: "Étaler", jp: "塗ります", romaji: "nurimasu" },
  { id: 10367, en: "To stack", fr: "Empiler", jp: "重ねます", romaji: "kasanemasu" },
  { id: 10368, en: "To scatter", fr: "Éparpiller", jp: "撒きます", romaji: "makimasu" },

  // --- GESTION DU TEMPS ---
  { id: 10369, en: "To postpone", fr: "Reporter", jp: "延期します", romaji: "enki shimasu" },
  { id: 10370, en: "To cancel", fr: "Annuler", jp: "中止します", romaji: "chūshi shimasu" },
  { id: 10371, en: "To be in time", fr: "Arriver à temps", jp: "間に合います", romaji: "maniaimasu" },
  { id: 10372, en: "To take time", fr: "Prendre du temps", jp: "時間がかかります", romaji: "jikan ga kakarimasu" },
  { id: 10373, en: "To pass (time)", fr: "Passer (le temps)", jp: "過ぎます", romaji: "sugimasu" },

  // --- COMPORTEMENT ---
  { id: 10374, en: "To behave", fr: "Se comporter", jp: "振る舞います", romaji: "furumaimasu" },
  { id: 10375, en: "To obey", fr: "Obéir", jp: "従います", romaji: "shitagaimasu" },
  { id: 10376, en: "To resist", fr: "Résister", jp: "抵抗します", romaji: "teikō shimasu" },
  { id: 10377, en: "To lie", fr: "Mentir", jp: "嘘をつきます", romaji: "uso o tsukimasu" },
  { id: 10378, en: "To cheat", fr: "Tricher", jp: "カンニングします", romaji: "kanningu shimasu" },

  // --- SANTÉ (AVANCÉ) ---
  { id: 10379, en: "To breathe", fr: "Respirer", jp: "呼吸します", romaji: "kokyū shimasu" },
  { id: 10380, en: "To faint", fr: "S'évanouir", jp: "気絶します", romaji: "kizetsu shimasu" },
  { id: 10381, en: "To itch", fr: "Démanger", jp: "痒くなります", romaji: "kayuku narimasu" },
  { id: 10382, en: "To swell", fr: "Enfler", jp: "腫れます", romaji: "haremasu" },

  // --- DIVERS ---
  { id: 10383, en: "To belong to", fr: "Appartenir à", jp: "所属します", romaji: "shozoku shimasu" },
  { id: 10384, en: "To represent", fr: "Représenter", jp: "代表します", romaji: "daihyō shimasu" },
  { id: 10385, en: "To symbolize", fr: "Symboliser", jp: "象徴します", romaji: "shōchō shimasu" },
  { id: 10386, en: "To develop (film)", fr: "Développer (photo)", jp: "現像します", romaji: "genzō shimasu" },
  { id: 10387, en: "To recycle", fr: "Recycler", jp: "リサイクルします", romaji: "risaikuru shimasu" },
  { id: 10388, en: "To save (life)", fr: "Sauver", jp: "助けます", romaji: "tasukemasu" },
  { id: 10389, en: "To win (prize)", fr: "Gagner (un prix)", jp: "受賞します", romaji: "jushō shimasu" },
  { id: 10390, en: "To dream", fr: "Rêver", jp: "夢を見ます", romaji: "yume o mimasu" },
  { id: 10391, en: "To wake up (fully)", fr: "Se réveiller (conscience)", jp: "目が覚めます", romaji: "me ga samemasu" },
  { id: 10392, en: "To be born", fr: "Naître", jp: "生まれます", romaji: "umaremasu" },
  { id: 10393, en: "To grow up", fr: "Grandir", jp: "育ちます", romaji: "sodachimasu" },
  { id: 10394, en: "To age", fr: "Vieillir", jp: "年を取ります", romaji: "toshi o torimasu" },
  { id: 10395, en: "To pass away", fr: "Décéder (poli)", jp: "亡くなります", romaji: "nakunarimasu" },
  { id: 10396, en: "To expect / anticipate", fr: "S'attendre à", jp: "期待します", romaji: "kitai shimasu" },
  { id: 10397, en: "To achieve", fr: "Atteindre / Accomplir", jp: "達成します", romaji: "tassei shimasu" },
  { id: 10398, en: "To imagine", fr: "Imaginer", jp: "想像します", romaji: "sōzō shimasu" },
  { id: 10399, en: "To respect (deeply)", fr: "Vénérer", jp: "敬います", romaji: "uyamaimasu" },
  { id: 10400, en: "To finish / Complete", fr: "Terminer", jp: "完了します", romaji: "kanryō shimasu" }
];