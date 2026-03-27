export interface CameleonChallenge {
  id: string;
  basePhrase: string;
  target: "Ami" | "Boss" | "Inconnu";
  fr: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const cameleonChallenges: CameleonChallenge[] = [
  // --- SALUTATIONS (1-5) ---
  { id: "1", basePhrase: "Bonjour", target: "Boss", fr: "Bonjour (matin)", options: ["Ohayou", "Ohayou gozaimasu", "Yaa"], answer: "Ohayou gozaimasu", explanation: "On ajoute toujours 'gozaimasu' avec un supérieur." },
  { id: "2", basePhrase: "Au revoir", target: "Ami", fr: "Salut !", options: ["Sayounara", "Ja ne", "Shitsurei shimasu"], answer: "Ja ne", explanation: "'Ja ne' est la forme décontractée standard." },
  { id: "3", basePhrase: "Bonne nuit", target: "Ami", fr: "Bonne nuit", options: ["Oyasumi", "Oyasumi nasai", "Neru yo"], answer: "Oyasumi", explanation: "Entre proches, on utilise la version courte." },
  { id: "4", basePhrase: "Je rentre", target: "Ami", fr: "Je rentre (chez moi)", options: ["Kaerimasu", "Kaeru ne", "O-saki ni shitsurei shimasu"], answer: "Kaeru ne", explanation: "Le 'ne' à la fin rend la phrase plus amicale." },
  { id: "5", basePhrase: "Enchanté", target: "Inconnu", fr: "Ravi de vous rencontrer", options: ["Yoroshiku", "Yoroshiku onegaishimasu", "Doumo"], answer: "Yoroshiku onegaishimasu", explanation: "Formule de politesse indispensable lors d'une rencontre." },

  // --- ACTIONS : MANGER / BOIRE (6-10) ---
  { id: "6", basePhrase: "Manger", target: "Boss", fr: "Bon appétit (humble)", options: ["Taberu", "Tabemasu", "Itadakimasu"], answer: "Itadakimasu", explanation: "C'est la forme humble pour exprimer la gratitude avant de manger." },
  { id: "7", basePhrase: "Boire", target: "Inconnu", fr: "Voulez-vous boire ?", options: ["Nomu?", "Nomimasu ka?", "Nomanai?"], answer: "Nomimasu ka?", explanation: "Utilisation du suffixe poli -MASU." },
  { id: "8", basePhrase: "Manger", target: "Ami", fr: "Tu manges ?", options: ["Meshiagarimasu ka?", "Taberu?", "Tabemasu ka?"], answer: "Taberu?", explanation: "Forme dictionnaire pour les amis." },
  { id: "9", basePhrase: "Fin de repas", target: "Boss", fr: "Merci pour ce repas", options: ["Gochisousama", "Gochisousama deshita", "Oishikatta"], answer: "Gochisousama deshita", explanation: "Version formelle pour remercier le cuisinier ou l'hôte." },
  { id: "10", basePhrase: "Eau", target: "Inconnu", fr: "De l'eau s'il vous plaît", options: ["Mizu koudai", "Mizu o kudasai", "Mizu hoshii"], answer: "Mizu o kudasai", explanation: "'Kudasai' est la forme de demande polie standard." },

  // --- TRAVAIL & BUREAU (11-20) ---
  { id: "11", basePhrase: "Aller", target: "Boss", fr: "J'y vais (humble)", options: ["Ikimasu", "Mairimasu", "Iku yo"], answer: "Mairimasu", explanation: "Mairimasu est le Kenjougo (humble) de Iku." },
  { id: "12", basePhrase: "Comprendre", target: "Boss", fr: "J'ai bien compris", options: ["Wakatta", "Wakarimashita", "Shouchi itashimashita"], answer: "Shouchi itashimashita", explanation: "Terme pro utilisé pour confirmer une consigne." },
  { id: "13", basePhrase: "Regarder", target: "Boss", fr: "Veuillez regarder", options: ["Mite kudasai", "Goranninatte kudasai", "Mite"], answer: "Goranninatte kudasai", explanation: "Forme honorifique (Sonkeigo) pour un supérieur." },
  { id: "14", basePhrase: "Entrer", target: "Boss", fr: "Puis-je entrer ? (Excusez-moi)", options: ["Hairu yo", "Shitsurei shimasu", "O-jama shimasu"], answer: "Shitsurei shimasu", explanation: "Formule standard pour entrer dans un bureau." },
  { id: "15", basePhrase: "Savoir", target: "Boss", fr: "Je ne sais pas (humble)", options: ["Shirimasen", "Shiranai", "Zonjiagemasen"], answer: "Zonjiagemasen", explanation: "Version humble utilisée dans le business." },
  { id: "16", basePhrase: "Attendre", target: "Inconnu", fr: "Attendez un peu s'il vous plaît", options: ["Matte", "Chotto matte", "Shoushou omachi kudasai"], answer: "Shoushou omachi kudasai", explanation: "Formule polie au téléphone ou en boutique." },
  { id: "17", basePhrase: "S'asseoir", target: "Inconnu", fr: "Asseyez-vous", options: ["Suwatte", "Suwaru?", "O-kake kudasai"], answer: "O-kake kudasai", explanation: "Plus poli que 'Suwatte kudasai'." },
  { id: "18", basePhrase: "Dire", target: "Boss", fr: "Comment s'appelle-t-il ?", options: ["Nante itta?", "Nan to iimasu ka?", "Nan to osshaimashita ka?"], answer: "Nan to osshaimashita ka?", explanation: "Utilisation du verbe honorifique 'ossharu'." },
  { id: "19", basePhrase: "Aider", target: "Boss", fr: "Puis-je vous aider ?", options: ["Tetsudau?", "O-tetsudai shimashou ka?", "Tetsudatte"], answer: "O-tetsudai shimashou ka?", explanation: "Structure humble pour proposer son aide." },
  { id: "20", basePhrase: "Partir", target: "Boss", fr: "Je pars avant vous", options: ["Kaeru ne", "Sayounara", "O-saki ni shitsurei shimasu"], answer: "O-saki ni shitsurei shimasu", explanation: "Indispensable quand on quitte le bureau avant les autres." },

  // --- AMITIÉ & LOISIRS (21-30) ---
  { id: "21", basePhrase: "Quoi ?", target: "Ami", fr: "Qu'est-ce que c'est ?", options: ["Nandesuka?", "Nani?", "Nan deshou ka?"], answer: "Nani?", explanation: "Simple et direct entre amis." },
  { id: "22", basePhrase: "Vouloir", target: "Ami", fr: "Tu en veux ?", options: ["Hoshii?", "Hoshikunai?", "Irashaimasu ka?"], answer: "Hoshii?", explanation: "Forme adjectivale directe." },
  { id: "23", basePhrase: "Faire", target: "Ami", fr: "Tu fais quoi ?", options: ["Nani shiteru no?", "Nani o shimasu ka?", "Nani o nasaimasu ka?"], answer: "Nani shiteru no?", explanation: "Contracté pour la fluidité amicale." },
  { id: "24", basePhrase: "Venir", target: "Ami", fr: "Tu viens ?", options: ["Kimasu ka?", "Kuru?", "Irashaimasu ka?"], answer: "Kuru?", explanation: "Verbe à la forme neutre." },
  { id: "25", basePhrase: "Super", target: "Ami", fr: "C'est génial !", options: ["Sugoi desu ne", "Sugoi!", "Subarashii desu"], answer: "Sugoi!", explanation: "Exclamation amicale." },
  { id: "26", basePhrase: "Regarder", target: "Ami", fr: "Regarde !", options: ["Mite!", "Mite kudasai", "Gorannatte"], answer: "Mite!", explanation: "Impératif poli-amical." },
  { id: "27", basePhrase: "Acheter", target: "Ami", fr: "Je vais l'acheter", options: ["Kaou kana", "Kaimasu", "O-kaiage kudasai"], answer: "Kaou kana", explanation: "Forme volitive (penser à faire)." },
  { id: "28", basePhrase: "Attendre", target: "Ami", fr: "Attends-moi", options: ["Matte!", "Machinasai", "Omachi kudasai"], answer: "Matte!", explanation: "Forme en -TE familière." },
  { id: "29", basePhrase: "Désolé", target: "Ami", fr: "Désolé !", options: ["Moushiwake gozaimasen", "Sumimasen", "Gomen!"], answer: "Gomen!", explanation: "L'excuse de base entre potes." },
  { id: "30", basePhrase: "Merci", target: "Ami", fr: "Merci (cool)", options: ["Arigatou gozaimasu", "Sankyuu", "Doumo"], answer: "Sankyuu", explanation: "L'anglicisme est très courant chez les jeunes." },

  // --- POLITESSE & ÉTRANGERS (31-40) ---
  { id: "31", basePhrase: "Excusez-moi", target: "Inconnu", fr: "Pardon (interpeller)", options: ["Anoo, sumimasen", "Oi!", "Chotto!"], answer: "Anoo, sumimasen", explanation: "La façon la plus douce d'aborder quelqu'un." },
  { id: "32", basePhrase: "Nom", target: "Inconnu", fr: "Comment vous appelez-vous ?", options: ["Namae wa?", "O-namae wa?", "Namae nani?"], answer: "O-namae wa?", explanation: "Le 'O' de politesse est crucial ici." },
  { id: "33", basePhrase: "Comprendre", target: "Inconnu", fr: "Avez-vous compris ?", options: ["Wakatta?", "Wakarimashita ka?", "Wakaranai?"], answer: "Wakarimashita ka?", explanation: "Forme interrogative polie standard." },
  { id: "34", basePhrase: "Aide", target: "Inconnu", fr: "Aidez-moi s'il vous plaît", options: ["Tetsudatte!", "Tetsudatte kudasai", "O-tetsudai kudasai"], answer: "Tetsudatte kudasai", explanation: "Demande d'aide polie." },
  { id: "35", basePhrase: "Où ?", target: "Inconnu", fr: "Où sont les toilettes ?", options: ["Toire doko?", "Toire wa doko desu ka?", "Toire wa doko da?"], answer: "Toire wa doko desu ka?", explanation: "Structure de question polie." },
  { id: "36", basePhrase: "Prix", target: "Inconnu", fr: "C'est combien ?", options: ["Ikura?", "Ikura desu ka?", "Ikura da yo"], answer: "Ikura desu ka?", explanation: "Essentiel pour faire du shopping." },
  { id: "37", basePhrase: "Français", target: "Inconnu", fr: "Êtes-vous Français ?", options: ["Furansujin?", "Furansujin desu ka?", "Furansujin da yo ne"], answer: "Furansujin desu ka?", explanation: "Question de base polie." },
  { id: "38", basePhrase: "Heure", target: "Inconnu", fr: "Quelle heure est-il ?", options: ["Nan-ji?", "Nan-ji desu ka?", "Ima nan-ji?"], answer: "Nan-ji desu ka?", explanation: "Politesse temporelle." },
  { id: "39", basePhrase: "Interdit", target: "Inconnu", fr: "C'est interdit", options: ["Dame!", "Dame desu yo", "Ikenai"], answer: "Dame desu yo", explanation: "Rappel à l'ordre poli mais ferme." },
  { id: "40", basePhrase: "Bien", target: "Inconnu", fr: "C'est très bien", options: ["Ii ne", "Ii desu ne", "Yoi"], answer: "Ii desu ne", explanation: "Approbation polie." },

  // --- SITUATIONS COMPLEXES / BOSS (41-50) ---
  { id: "41", basePhrase: "Rencontrer", target: "Boss", fr: "Je l'ai rencontré", options: ["Aimashita", "O-ai shimashita", "Atta yo"], answer: "O-ai shimashita", explanation: "Forme humble du verbe rencontrer." },
  { id: "42", basePhrase: "Donner", target: "Boss", fr: "Je vous le donne", options: ["Agemasu", "Sashiagemasu", "Yaru yo"], answer: "Sashiagemasu", explanation: "Humble : donner vers un supérieur." },
  { id: "43", basePhrase: "Recevoir", target: "Boss", fr: "Je le reçois (cadeau)", options: ["Moraimasu", "Itadakimasu", "Morau"], answer: "Itadakimasu", explanation: "Humble : recevoir d'un supérieur." },
  { id: "44", basePhrase: "Être", target: "Boss", fr: "Je suis au bureau", options: ["Imasu", "Orimasu", "Iru yo"], answer: "Orimasu", explanation: "Humble : exister/être présent." },
  { id: "45", basePhrase: "Demander", target: "Boss", fr: "Puis-je vous demander ?", options: ["Kiite ii?", "O-kiki shite mo yoroshii desu ka?", "Kikimasu ka?"], answer: "O-kiki shite mo yoroshii desu ka?", explanation: "Niveau de politesse maximal." },
  { id: "46", basePhrase: "Savoir", target: "Boss", fr: "Le savez-vous ?", options: ["Shitteru?", "Go-zonji desu ka?", "Shirimasu ka?"], answer: "Go-zonji desu ka?", explanation: "Honorifique (Sonkeigo) pour le savoir du boss." },
  { id: "47", basePhrase: "Désolé", target: "Boss", fr: "Pardon pour le dérangement", options: ["Sumimasen", "Gomen nasai", "O-jama itashimashita"], answer: "O-jama itashimashita", explanation: "Utilisé en quittant une pièce après une réunion." },
  { id: "48", basePhrase: "Penser", target: "Boss", fr: "Je pense que...", options: ["Omoimasu", "Zonjimasu", "Omou"], answer: "Zonjimasu", explanation: "Version humble de penser." },
  { id: "49", basePhrase: "Venir", target: "Boss", fr: "Veuillez venir", options: ["Kite kudasai", "O-koshi kudasai", "Kite"], answer: "O-koshi kudasai", explanation: "Honorifique pour inviter à venir." },
  { id: "50", basePhrase: "Travail fini", target: "Boss", fr: "Merci pour votre travail", options: ["Otsukaresama deshita", "Gokurousama", "Bye bye"], answer: "Otsukaresama deshita", explanation: "La phrase sacrée en fin de journée de travail." }
];