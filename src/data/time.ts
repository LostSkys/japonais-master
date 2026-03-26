import { type Word } from '../data';

export const timeWords: Word[] = [
  // --- LES UNITÉS DE BASE ---
  { id: 9001, en: "Time", fr: "Temps / Heure", jp: "時間", romaji: "jikan" },
  { id: 9002, en: "Hour", fr: "Heure (unité)", jp: "時", romaji: "ji" },
  { id: 9003, en: "Minute", fr: "Minute", jp: "分", romaji: "fun / pun" },
  { id: 9004, en: "Second", fr: "Seconde", jp: "秒", romaji: "byō" },
  { id: 9005, en: "Half (past)", fr: "Et demi", jp: "半", romaji: "han" },
  { id: 9006, en: "AM", fr: "Matin (AM)", jp: "午前", romaji: "gozen" },
  { id: 9007, en: "PM", fr: "Après-midi (PM)", jp: "午後", romaji: "gogo" },

  // --- LES MOMENTS DE LA JOURNÉE ---
  { id: 9008, en: "Morning", fr: "Matin", jp: "朝", romaji: "asa" },
  { id: 9009, en: "Noon", fr: "Midi", jp: "昼", romaji: "hiru" },
  { id: 9010, en: "Evening", fr: "Soir", jp: "晩", romaji: "ban" },
  { id: 9011, en: "Night", fr: "Nuit", jp: "夜", romaji: "yoru" },
  { id: 9012, en: "Midnight", fr: "Minuit", jp: "真夜中", romaji: "mayonaka" },
  { id: 9013, en: "Dawn", fr: "Aube", jp: "夜明け", romaji: "yoake" },
  { id: 9014, en: "Sunset", fr: "Coucher du soleil", jp: "日没", romaji: "nichibotsu" },

  // --- LES JOURS RELATIFS ---
  { id: 9015, en: "Today", fr: "Aujourd'hui", jp: "今日", romaji: "kyō" },
  { id: 9016, en: "Tomorrow", fr: "Demain", jp: "明日", romaji: "ashita" },
  { id: 9017, en: "Day after tomorrow", fr: "Après-demain", jp: "明後日", romaji: "asatte" },
  { id: 9018, en: "Yesterday", fr: "Hier", jp: "昨日", romaji: "kinō" },
  { id: 9019, en: "Day before yesterday", fr: "Avant-hier", jp: "一昨日", romaji: "ototoi" },
  { id: 9020, en: "Every day", fr: "Chaque jour", jp: "毎日", romaji: "mainichi" },
  { id: 9021, en: "Holiday", fr: "Jour férié / Vacances", jp: "休み", romaji: "yasumi" },
  { id: 9022, en: "Weekday", fr: "Jour de semaine", jp: "平日", romaji: "heijitsu" },
  { id: 9023, en: "Weekend", fr: "Weekend", jp: "週末", romaji: "shūmatsu" },

  // --- LES JOURS DE LA SEMAINE ---
  { id: 9024, en: "Monday", fr: "Lundi", jp: "月曜日", romaji: "getsu-yōbi" },
  { id: 9025, en: "Tuesday", fr: "Mardi", jp: "火曜日", romaji: "ka-yōbi" },
  { id: 9026, en: "Wednesday", fr: "Mercredi", jp: "水曜日", romaji: "sui-yōbi" },
  { id: 9027, en: "Thursday", fr: "Jeudi", jp: "木曜日", romaji: "moku-yōbi" },
  { id: 9028, en: "Friday", fr: "Vendredi", jp: "金曜日", romaji: "kin-yōbi" },
  { id: 9029, en: "Saturday", fr: "Samedi", jp: "土曜日", romaji: "do-yōbi" },
  { id: 9030, en: "Sunday", fr: "Dimanche", jp: "日曜日", romaji: "nichi-yōbi" },

  // --- SEMAINES, MOIS, ANNÉES ---
  { id: 9031, en: "Week", fr: "Semaine", jp: "週", romaji: "shū" },
  { id: 9032, en: "This week", fr: "Cette semaine", jp: "今週", romaji: "konshū" },
  { id: 9033, en: "Next week", fr: "La semaine prochaine", jp: "来週", romaji: "raishū" },
  { id: 9034, en: "Last week", fr: "La semaine dernière", jp: "先週", romaji: "senshū" },
  { id: 9035, en: "Month", fr: "Mois", jp: "月", romaji: "tsuki" },
  { id: 9036, en: "This month", fr: "Ce mois-ci", jp: "今月", romaji: "kongetsu" },
  { id: 9037, en: "Next month", fr: "Le mois prochain", jp: "来月", romaji: "raigetsu" },
  { id: 9038, en: "Last month", fr: "Le mois dernier", jp: "先月", romaji: "sengetsu" },
  { id: 9039, en: "Year", fr: "Année", jp: "年", romaji: "toshi / nen" },
  { id: 9040, en: "This year", fr: "Cette année", jp: "今年", romaji: "kotoshi" },
  { id: 9041, en: "Next year", fr: "L'année prochaine", jp: "来年", romaji: "rainen" },
  { id: 9042, en: "Last year", fr: "L'année dernière", jp: "去年", romaji: "kyonen" },
  { id: 9043, en: "Every year", fr: "Chaque année", jp: "毎年", romaji: "mainen / maitoshi" },

  // --- LES MOIS DE L'ANNÉE ---
  { id: 9044, en: "January", fr: "Janvier", jp: "一月", romaji: "ichi-gatsu" },
  { id: 9045, en: "February", fr: "Février", jp: "二月", romaji: "ni-gatsu" },
  { id: 9046, en: "March", fr: "Mars", jp: "三月", romaji: "san-gatsu" },
  { id: 9047, en: "April", fr: "Avril", jp: "四月", romaji: "shi-gatsu" },
  { id: 9048, en: "May", fr: "Mai", jp: "五月", romaji: "go-gatsu" },
  { id: 9049, en: "June", fr: "Juin", jp: "六月", romaji: "roku-gatsu" },
  { id: 9050, en: "July", fr: "Juillet", jp: "七月", romaji: "shichi-gatsu" },
  { id: 9051, en: "August", fr: "Août", jp: "八月", romaji: "hachi-gatsu" },
  { id: 9052, en: "September", fr: "Septembre", jp: "九月", romaji: "ku-gatsu" },
  { id: 9053, en: "October", fr: "Octobre", jp: "十月", romaji: "jū-gatsu" },
  { id: 9054, en: "November", fr: "Novembre", jp: "十一月", romaji: "jūichi-gatsu" },
  { id: 9055, en: "December", fr: "Décembre", jp: "十二月", romaji: "jūni-gatsu" },

  // --- SAISONS ---
  { id: 9056, en: "Season", fr: "Saison", jp: "季節", romaji: "kisetsu" },
  { id: 9057, en: "Spring", fr: "Printemps", jp: "春", romaji: "haru" },
  { id: 9058, en: "Summer", fr: "Été", jp: "夏", romaji: "natsu" },
  { id: 9059, en: "Autumn", fr: "Automne", jp: "秋", romaji: "aki" },
  { id: 9060, en: "Winter", fr: "Hiver", jp: "冬", romaji: "fuyu" },

  // --- DURÉE & FRÉQUENCE ---
  { id: 9061, en: "Always", fr: "Toujours", jp: "いつも", romaji: "itsumo" },
  { id: 9062, en: "Often", fr: "Souvent", jp: "よく", romaji: "yoku" },
  { id: 9063, en: "Sometimes", fr: "Parfois", jp: "時々", romaji: "tokidoki" },
  { id: 9064, en: "Rarely", fr: "Rarement", jp: "たまに", romaji: "tamani" },
  { id: 9065, en: "Never", fr: "Jamais", jp: "全然...ない", romaji: "zenzen...nai" },
  { id: 9066, en: "Usually", fr: "D'habitude", jp: "たいてい", romaji: "taitei" },
  { id: 9067, en: "Soon", fr: "Bientôt", jp: "すぐ", romaji: "sugu" },
  { id: 9068, en: "Early", fr: "Tôt", jp: "早く", romaji: "hayaku" },
  { id: 9069, en: "Late", fr: "Tard", jp: "遅く", romaji: "osoku" },
  { id: 9070, en: "Suddenly", fr: "Soudainement", jp: "急に", romaji: "kyū ni" },

  // --- ADVERBES DE TEMPS ---
  { id: 9071, en: "Now", fr: "Maintenant", jp: "今", romaji: "ima" },
  { id: 9072, en: "Already", fr: "Déjà", jp: "もう", romaji: "mō" },
  { id: 9073, en: "Not yet", fr: "Pas encore", jp: "まだ", romaji: "mada" },
  { id: 9074, en: "Recently", fr: "Récemment", jp: "最近", romaji: "saikin" },
  { id: 9075, en: "A long time ago", fr: "Il y a longtemps", jp: "ずっと前に", romaji: "zutto mae ni" },
  { id: 9076, en: "First", fr: "D'abord / Premier", jp: "最初", romaji: "saisho" },
  { id: 9077, en: "Finally", fr: "Enfin / Finalement", jp: "最後に", romaji: "saigo ni" },
  { id: 9078, en: "Before", fr: "Avant", jp: "前", romaji: "mae" },
  { id: 9079, en: "After", fr: "Après", jp: "後", romaji: "ato" },
  { id: 9080, en: "In the future", fr: "À l'avenir", jp: "将来", romaji: "shōrai" },

  // --- PRÉCISIONS & QUANTITÉS ---
  { id: 9081, en: "Just now", fr: "À l'instant", jp: "たった今", romaji: "tatta ima" },
  { id: 9082, en: "A moment", fr: "Un instant", jp: "ちょっと", romaji: "chotto" },
  { id: 9083, en: "Interval", fr: "Intervalle", jp: "間", romaji: "aida" },
  { id: 9084, en: "For [Time]", fr: "Pendant [Durée]", jp: "〜間", romaji: "...kan" },
  { id: 9085, en: "About / Around", fr: "Environ (heure)", jp: "〜ごろ", romaji: "...goro" },
  { id: 9086, en: "Approximately", fr: "Environ (quantité)", jp: "〜ぐらい", romaji: "...gurai" },
  { id: 9087, en: "At the same time", fr: "En même temps", jp: "同時に", romaji: "dōji ni" },
  { id: 9088, en: "Punctually", fr: "À l'heure", jp: "時間通り", romaji: "jikan dōri" },
  { id: 9089, en: "Short time", fr: "Peu de temps", jp: "短期間", romaji: "tankikan" },
  { id: 9090, en: "Long time", fr: "Longtemps", jp: "長い間", romaji: "nagai aida" },

  // --- DIVERS ---
  { id: 9091, en: "Daytime", fr: "Journée", jp: "日中", romaji: "nicchū" },
  { id: 9092, en: "Break / Recess", fr: "La pause", jp: "休憩", romaji: "kyūkei" },
  { id: 9093, en: "Schedule", fr: "Emploi du temps", jp: "予定", romaji: "yotei" },
  { id: 9094, en: "Deadline", fr: "Date limite", jp: "締め切り", romaji: "shimekiri" },
  { id: 9095, en: "Century", fr: "Siècle", jp: "世紀", romaji: "seiki" },
  { id: 9096, en: "Era", fr: "Ère", jp: "時代", romaji: "jidai" },
  { id: 9097, en: "Past", fr: "Passé", jp: "過去", romaji: "kako" },
  { id: 9098, en: "Present", fr: "Présent", jp: "現在", romaji: "genzai" },
  { id: 9099, en: "Once more", fr: "Encore une fois", jp: "もう一度", romaji: "mō ichido" },
  { id: 9100, en: "Slowly", fr: "Lentement", jp: "ゆっくり", romaji: "yukkuri" }
];