import type { Word } from "../../data";

export const umaSupportCards: Word[] = [
  // ==========================================
  // SECTION 1 : CARTES GROUPE (5 SSR)
  // ==========================================
  {
    id: 20001,
    en: "Tsurugi Ryoka / Team Harenochi",
    fr: "[The Gathering of Stars] Team Harenochi & Tsurugi Ryoka",
    jp: "駿川たづな / チーム晴れ後晴れ",
    romaji: "Surukawa Tazuna / Chīmu Harenochi Hare",
    name: "[The Gathering of Stars] Team Harenochi",
    type: "Group",
    rarity: "SSR",
    skills: [
      { jp: "お出かけ上手", romaji: "Odekake Jouzu", effect: "Augmente les chances d'obtenir un bonus de moral lors des sorties." },
      { jp: "コンセントレーション", romaji: "Concentration", effect: "Gold Skill : Réduit considérablement le temps de réaction au départ et empêche les faux départs." },
      { jp: "集中力", romaji: "Shuujouryoku", effect: "Diminue le temps de réaction au démarrage de la course." },
      { jp: "遊びはおしまい", romaji: "Asobi wa Oshimai", effect: "Booste la vitesse si vous collez de trop près une concurrente par derrière juste avant la dernière ligne droite." },
      { jp: "尻尾上がり", romaji: "Shippo Agari", effect: "Augmente légèrement la vitesse au milieu de la course si plusieurs compétences sont activées coup sur coup." }
    ],
    events: [
      {
        titleJp: "情熱のグループワーク",
        titleRomaji: "Jounetsu no Group Work",
        choices: [
          { textFr: "Organiser un planning ultra-strict", effect: "+15 Vitesse, +15 Intelligence, Amitié +5" },
          { textFr: "Laisser chacun s'exprimer librement", effect: "Restaure 20 Énergie, Motivation au maximum" }
        ]
      },
      {
        titleJp: "みんなの笑顔のために",
        titleRomaji: "Minna no Egao no Tame ni",
        choices: [
          { textFr: "Préparer un grand banquet pour l'équipe", effect: "+20 Points de Compétence, +5 Endurance" },
          { textFr: "Faire une réunion stratégique approfondie", effect: "+15 Intelligence, Hint Skill: [Shippo Agari] Lv+1" }
        ]
      },
      {
        titleJp: "心の絆、重なる足跡",
        titleRomaji: "Kokoro no Kizuna (Chaîne Gold 1/3)",
        choices: [
          { textFr: "Accepter de superviser l'entraînement collectif", effect: "+10 Vitesse, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "重なる想い、重なる未来",
        titleRomaji: "Kasanaru Omoi (Chaîne Gold 2/3)",
        choices: [
          { textFr: "Partager les efforts sous la pluie", effect: "+10 Endurance, +10 Puissance, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "晴れ渡る空に、僕らの歌を",
        titleRomaji: "Harewataru Sora ni (Chaîne Gold 3/3)",
        choices: [
          { textFr: "Célébrer l'unité parfaite du groupe", effect: "+25 Vitesse, +25 Points de Compétence, Reçoit le Gold Skill Hint: [Concentration] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20002,
    en: "Team Sirius",
    fr: "[Our Blue Skies] Team Sirius",
    jp: "チームシリウス",
    romaji: "Chīmu Siriusu",
    name: "[Our Blue Skies] Team Sirius",
    type: "Group",
    rarity: "SSR",
    skills: [
      { jp: "日本一のウマ娘", romaji: "Nihonichi no Uma Musume", effect: "Gold Skill : Longue Distance - Augmente drastiquement la vitesse dans la dernière ligne droite si vous êtes bien positionné." },
      { jp: "不屈の心", romaji: "Fukutsu no Kokoro", effect: "Restaure de la Stamina si vous êtes bloqué ou dépassé au milieu de la course." },
      { jp: "一陣 de 風", romaji: "Ichijin no Kaze", effect: "Donne un boost d'accélération en ligne droite." },
      { jp: "追込直線◯", romaji: "Oikomi Chokusen o", effect: "Spécifique Chaser : Améliore la vitesse en ligne droite." },
      { jp: "晴れの日◯", romaji: "Hare no Hi o", effect: "Compétence Verte : Augmente la stat d'Endurance par temps ensoleillé." }
    ],
    events: [
      {
        titleJp: "放課後の熱い議論",
        titleRomaji: "Houkago no Atsui Giron",
        choices: [
          { textFr: "Proposer de faire une course amicale pour trancher", effect: "+15 Vitesse, +15 Puissance, Amitié +5" },
          { textFr: "Prendre des notes et faire une synthèse", effect: "+20 Intelligence, +10 Points de Compétence" }
        ]
      },
      {
        titleJp: "シリウス流の歓迎会",
        titleRomaji: "Sirius-ryuu no K歓迎会",
        choices: [
          { textFr: "Participer au défi de sprint", effect: "+20 Vitesse, Hint Skill: [Ichijin no Kaze] Lv+1" },
          { textFr: "S'occuper du ravitaillement en eau", effect: "Restaure 25 Énergie, +5 Endurance" }
        ]
      },
      {
        titleJp: "奔る、果てなき空を",
        titleRomaji: "Hashiru, Hatenaki Sora wo (Chaîne Gold 1/3)",
        choices: [
          { textFr: "S'aligner sur leur rythme d'enfer", effect: "+10 Vitesse, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "つなぐ、それぞれの光",
        titleRomaji: "Tsunagu, Sorezore no Hikari (Chaîne Gold 2/3)",
        choices: [
          { textFr: "Passer le témoin avec conviction", effect: "+10 Puissance, +10 Cran, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "輝け、僕らのシリウス",
        titleRomaji: "Kagayake, Bokura no Sirius (Chaîne Gold 3/3)",
        choices: [
          { textFr: "Atteindre les sommets du pays ensemble", effect: "+30 Vitesse, Hint: [Nihonichi no Uma Musume] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20003,
    en: "Three Goddesses",
    fr: "[The Ancestral Guidance] Three Goddesses",
    jp: "三女神",
    romaji: "San Megami",
    name: "[The Ancestral Guidance] Three Goddesses",
    type: "Group",
    rarity: "SSR",
    skills: [
      { jp: "神速", romaji: "Shinsoku", effect: "Gold Skill : Augmente massivement la vitesse ET restaure un peu d'endurance au milieu de la course simultanément." },
      { jp: "迅速果断", romaji: "Jinsoku Kadan", effect: "Spécifique Betwixt (Entre-deux) : Améliore grandement la vitesse lors des dépassements à mi-parcours." },
      { jp: "大局観", romaji: "Taikyokan", effect: "Spécifique Chaser : Permet de repérer facilement la trajectoire des adversaires au loin." },
      { jp: "外枠得意◯", romaji: "Sotowaku Tokui o", effect: "Compétence Verte : Augmente les stats si positionné dans les couloirs extérieurs (7-8)." }
    ],
    events: [
      {
        titleJp: "大いなる叡智の破片",
        titleRomaji: "Ooinaru Eichii no Hahen",
        choices: [
          { textFr: "Méditer devant la statue sacrée", effect: "+20 Intelligence, Restaure 15 Énergie" },
          { textFr: "Analyser les textes anciens de course", effect: "+25 Points de Compétence, Motivation augmentée" }
        ]
      },
      {
        titleJp: "女神の導き、未来の系譜",
        titleRomaji: "Megami no Michibiki (Chaîne Gold 1/3)",
        choices: [
          { textFr: "Écouter les échos du passé", effect: "+10 toutes les stats, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "試練の門、その先へ",
        titleRomaji: "Shiren no Mon (Chaîne Gold 2/3)",
        choices: [
          { textFr: "Relever le défi de l'arène antique", effect: "+15 Puissance, +15 Cran, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "継承されし神々の奇跡",
        titleRomaji: "Keishousareshi Kiseki (Chaîne Gold 3/3)",
        choices: [
          { textFr: "Recevoir la bénédiction absolue des divinités", effect: "+25 toutes les stats, Hint: [Shinsoku] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20004,
    en: "Mejiro Bright / Mezame no Tsuki",
    fr: "[The Moonlit Elegance] Mezame no Tsuki & Mejiro Family",
    jp: "メジロブライト / 目覚めの月",
    romaji: "Mejiro Buraito / Mezame no Tsuki",
    name: "[The Moonlit Elegance] Mezame no Tsuki",
    type: "Group",
    rarity: "SSR",
    skills: [
      { jp: "泰然自若", romaji: "Taizen Jijaku", effect: "Gold Skill : Spécifique Longue Distance - Permet de maintenir un calme olympien et d'ignorer les debuffs de panique adverses." },
      { jp: "別腹タンク", romaji: "Betsubara Tank", effect: "Restaure une bonne quantité d'endurance en cas d'épuisement extrême en fin de course." },
      { jp: "長距離直線◯", romaji: "Choukyori Chokusen o", effect: "Spécifique Longue Distance : Augmente la vitesse en ligne droite." },
      { jp: "京都レース場◯", romaji: "Kyoto Racejou o", effect: "Compétence Verte : Améliore la condition physique sur l'hippodrome de Kyoto." }
    ],
    events: [
      {
        titleJp: "名家の伝統とお茶会",
        titleRomaji: "Meika no Dentou to Ochakai",
        choices: [
          { textFr: "Participer à la cérémonie du thé solennelle", effect: "+20 Intelligence, +5 Endurance, Amitié +5" },
          { textFr: "Proposer des biscuits modernes occidentaux", effect: "Restaure 25 Énergie, Motivation au max" }
        ]
      },
      {
        titleJp: "優雅なる月の調べ",
        titleRomaji: "Yuuganaru Tsuki no Shirabe (Chaîne Gold 1/3)",
        choices: [
          { textFr: "Écouter la mélodie au piano dans le salon", effect: "+10 Endurance, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "切磋琢磨の令嬢たち",
        titleRomaji: "Sessatakuoma no Reijou-tachi (Chaîne Gold 2/3)",
        choices: [
          { textFr: "Suivre l'entraînement de maintien de la posture", effect: "+15 Puissance, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "メジロの誇り、不滅の月華",
        titleRomaji: "Mejiro no Hokori (Chaîne Gold 3/3)",
        choices: [
          { textFr: "Briller de mille feux sous les projecteurs", effect: "+30 Endurance, Hint: [Taizen Jijaku] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20005,
    en: "Katsuragi Ace / Team Third Generation",
    fr: "[The Pioneer Spirit] Team Third Gen",
    jp: "カツラギエース / チーム三代目",
    romaji: "Katsuragi Ēsu / Chīmu Sandaime",
    name: "[The Pioneer Spirit] Team Third Gen",
    type: "Group",
    rarity: "SSR",
    skills: [
      { jp: "遮二無二", romaji: "Shanimuni", effect: "Gold Skill : Spécifique Mile / Moyenne Distance - Augmente considérablement la vitesse lors des phases d'attaque au milieu de la course." },
      { jp: "急ぎ足", romaji: "Isogiasi", effect: "Spécifique Leader : Aide à s'installer solidement en tête à mi-course." },
      { jp: "根幹距離◯", romaji: "Konkan Kyori o", effect: "Compétence Verte : Augmente les stats sur les distances multiples de 400m (1600m, 2000m, 2400m)." },
      { jp: "ベースペース", romaji: "Base Pace", effect: "Spécifique Leader : Améliore la gestion de course en tête de peloton." }
    ],
    events: [
      {
        titleJp: "下町の熱い挑戦者たち",
        titleRomaji: "Shitamachi no Atsui Chousensha-tachi",
        choices: [
          { textFr: "Manger un repas copieux dans un restaurant populaire", effect: "Restaure 25 Énergie, +10 Puissance" },
          { textFr: "Analyser les tactiques de course des anciens champions", effect: "+20 Points de Compétence, +10 Vitesse" }
        ]
      },
      {
        titleJp: "三代目の絆と魂",
        titleRomaji: "Sandaime no Kizuna to Tamashii (Chaîne Gold 1/3)",
        choices: [
          { textFr: "Accepter de porter leur blouson fétiche", effect: "+10 Puissance, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "荒野を切り拓く足跡",
        titleRomaji: "Kouya wo Kirihiraku Ashiato (Chaîne Gold 2/3)",
        choices: [
          { textFr: "Courir sur les chemins de terre escarpés", effect: "+15 Cran, Progression de la chaîne" }
        ]
      },
      {
        titleJp: "突き抜けろ、新時代のエース！",
        titleRomaji: "Tsukinukero, Shinjidai no Ace! (Chaîne Gold 3/3)",
        choices: [
          { textFr: "Devenir le pionnier incontesté de la piste", effect: "+30 Puissance, Hint: [遮二無二] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },

  // ==========================================
  // SECTION 2 : CARTES PAL / AMIS (10 SSR)
  // ==========================================
  {
    id: 20006,
    en: "Hayakawa Tazuna",
    fr: "[Welcome to the Tracen Academy!] Hayakawa Tazuna",
    jp: "駿川たづな",
    romaji: "Hayakawa Tazuna",
    name: "[Welcome to the Tracen Academy!] Hayakawa Tazuna",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "コンセントレーション", romaji: "Concentration", effect: "Gold Skill : Réduit drastiquement le temps de réaction au départ et évite les faux départs." },
      { jp: "集中力", romaji: "Shuujouryoku", effect: "Diminue le temps de réaction au démarrage de la course." },
      { jp: "お先失礼！", romaji: "Osaki Shitsurei!", effect: "Permet de doubler proprement l'adversaire direct en ligne droite sans perdre de vitesse." }
    ],
    events: [
      {
        titleJp: "たづなさんとの出会い",
        titleRomaji: "Tazuna-san to no Deai",
        choices: [
          { textFr: "Lui demander une visite guidée complète de l'académie", effect: "+10 toutes les stats, Débloque l'accès aux sorties (Odekake)" }
        ]
      },
      {
        titleJp: "いきなりのアクシデント",
        titleRomaji: "Ikinari no Accident",
        choices: [
          { textFr: "L'aider à ramasser les dossiers éparpillés au sol", effect: "Restaure 20 Énergie, Motivation augmentée" }
        ]
      },
      {
        titleJp: "栄光のゴールへ向かって",
        titleRomaji: "Eikou no Goal e Mukatte (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "La remercier chaleureusement pour son soutien durant l'année", effect: "Restaure 30 Énergie, +15 Vitesse, Hint: [Concentration] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20007,
    en: "Anshinjazawa Sasami",
    fr: "[The Mysterious Clinician] Anshinjazawa Sasami",
    jp: "安心沢刺々美",
    romaji: "Anshinjazawa Sasami",
    name: "[The Mysterious Clinician] Anshinjazawa Sasami",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "博打打ち", romaji: "Bakuchiuchi", effect: "Gold Skill : Offre une vitesse phénoménale en fin de course, mais possède une chance de déclencher une lourde fatigue à la place." },
      { jp: "危険回避", romaji: "Kiken Kaihi", effect: "Spécifique Leader : Se décale automatiquement au départ pour esquiver le trafic." }
    ],
    events: [
      {
        titleJp: "魅惑のキマイラ注射",
        titleRomaji: "Miwaku no Chimera Chuusha",
        choices: [
          { textFr: "Prendre le risque d'accepter l'injection secrète", effect: "Si succès : +40 toutes les stats | Si échec : Motivation au minimum, Énergie -20" },
          { textFr: "Refuser catégoriquement et fuir en courant", effect: "+20 Points de Compétence, Restaure 10 Énergie" }
        ]
      },
      {
        titleJp: "お体にメスを入れちゃいます♪",
        titleRomaji: "Okada ni Mesu wo irechaimasu",
        choices: [
          { textFr: "Laisser faire son opération expérimentale", effect: "Si succès : Reçoit le Hint: [Bakuchiuchi] Lv+3 | Si échec : Toutes les stats baissent de 10" }
        ]
      }
    ]
  },
  {
    id: 20008,
    en: "Kashimoto Riko",
    fr: "[The Rational Auditor] Kashimoto Riko",
    jp: "樫本理子",
    romaji: "Kashimoto Riko",
    name: "[The Rational Auditor] Kashimoto Riko",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "一陣の風", romaji: "Ichijin no Kaze", effect: "Donne un boost d'accélération instantané lors de l'entrée dans une ligne droite." },
      { jp: "直線巧者", romaji: "Chokusen Kousha", effect: "Améliore la vitesse globale de pointe dans toutes les lignes droites." }
    ],
    events: [
      {
        titleJp: "冷徹なる管理の裏側",
        titleRomaji: "Reitetsu naru Kanri no Uragawa",
        choices: [
          { textFr: "Valider ses données statistiques d'entraînement rigoureuses", effect: "+15 Endurance, +15 Points de Compétence, Amitié +5" },
          { textFr: "Lui suggérer d'intégrer une part d'imprévu", effect: "+20 Cran, Débloque l'option de sortie" }
        ]
      },
      {
        titleJp: "鉄の規則、破れる時",
        titleRomaji: "Tetsu no Kisoku (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "Suivre son protocole parfait jusqu'au bout", effect: "+25 Endurance, +25 Cran, Hint: [Ichijin no Kaze] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20009,
    en: "Light Hello",
    fr: "[The Directing Light] Light Hello",
    jp: "ライトハロー",
    romaji: "Raito Harō",
    name: "[The Directing Light] Light Hello",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "お先に失礼っ！", romaji: "Osaki ni Shitsureitto!", effect: "Gold Skill : Spécifique Leader - Permet de se détacher brusquement en tête au milieu de la course sans effort." },
      { jp: "内枠得意◯", romaji: "Uchiwaku Tokui o", effect: "Compétence Verte : Augmente les caractéristiques physiques si placé dans les couloirs 1 à 3." }
    ],
    events: [
      {
        titleJp: "トラブルもお任seアレ！",
        titleRomaji: "Trouble mo Omakase are!",
        choices: [
          { textFr: "L'aider à calibrer la console de mixage du concert", effect: "+15 Intelligence, +15 Points de Compétence, Débloque les sorties" },
          { textFr: "Aller chercher des câbles de rechange en réserve", effect: "Restaure 25 Énergie, Amitié +5" }
        ]
      },
      {
        titleJp: "ハロー・マイ・ウェブ！",
        titleRomaji: "Hello My Web! (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "Lancer le signal de départ du show final", effect: "+30 Vitesse, +25 Points de Compétence, Hint: [Osaki ni Shitsureitto!] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20010,
    en: "Akiikawa Yayoi",
    fr: "[The Sovereign Chairperson] Akiikawa Yayoi",
    jp: "秋川理事長",
    romaji: "Akikawa Rijichou",
    name: "[The Sovereign Chairperson] Akiikawa Yayoi",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "導風", romaji: "Doufuu", effect: "Gold Skill : Augmente grandement l'accélération globale au départ et réduit l'usure de l'endurance sur mauvaise piste." },
      { jp: "良バ場◯", romaji: "Ryou Baba o", effect: "Compétence Verte : Augmente la force physique si la piste est excellente." }
    ],
    events: [
      {
        titleJp: "理事長、大いに語る！",
        titleRomaji: "Rijichou, Ooi ni Kataru!",
        choices: [
          { textFr: "Écouter son discours enflammé en brandissant son éventail", effect: "+20 toutes les stats, Débloque les sorties de la présidente" }
        ]
      },
      {
        titleJp: "破天荒な決断！",
        titleRomaji: "Hatenkou na Ketsudan! (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "Valider son plan d'infrastructure massif pour l'académie", effect: "+30 Points de Compétence, Hint: [Doufuu] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20011,
    en: "Mejiro Ramonu (Pal Version)",
    fr: "[The Theater of Grace] Mejiro Ramonu",
    jp: "メジロラモーヌ (友人)",
    romaji: "Mejiro Ramounu (Yuujin)",
    name: "[The Theater of Grace] Mejiro Ramonu",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "薫風のコンチェルト", romaji: "Kunfuu no Concerto", effect: "Gold Skill : Spécifique Mile / Moyenne Distance - Augmente drastiquement la vitesse de croisière en virage." },
      { jp: "右回り◯", romaji: "Migi Mawari o", effect: "Compétence Verte : Booste la Vitesse sur les hippodromes tournant à droite." }
    ],
    events: [
      {
        titleJp: "舞台袖の社交界",
        titleRomaji: "Butaisode no Shakoukai",
        choices: [
          { textFr: "S'incliner poliment face à son aura impériale", effect: "+20 Intelligence, Débloque l'arbre de sorties de la comtesse" }
        ]
      },
      {
        titleJp: "カーテンコールをあなたと",
        titleRomaji: "Curtain Call wo Anata to (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "Recevoir les ovations du public à ses côtés", effect: "+25 Vitesse, +25 Intelligence, Hint: [Kunfuu no Concerto] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20012,
    en: "Tsurugijo Ryoka",
    fr: "[The Directing Baton] Tsurugijo Ryoka",
    jp: "都留岐涼花",
    romaji: "Tsurugijo Ryoka",
    name: "[The Directing Baton] Tsurugijo Ryoka",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "機略縦横", romaji: "Kiryakujouou", effect: "Gold Skill : Spécifique Betwixt / Chaser - Offre une lecture parfaite du peloton permettant de se replacer sans effort à mi-course." },
      { jp: "展開察知", romaji: "Tenkai Satchi", effect: "Améliore la vision et empêche de se faire encercler par les adversaires." }
    ],
    events: [
      {
        titleJp: "ストイックな指揮官",
        titleRomaji: "Stoic na Shikikan",
        choices: [
          { textFr: "Proposer une révision complète de l'ordre de passage", effect: "+15 Vitesse, +15 Points de Compétence, Débloque les sorties" }
        ]
      },
      {
        titleJp: "完璧なるシンフォニー",
        titleRomaji: "Kanpeki naru Symphony (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "Exécuter la tactique finale au millimètre près", effect: "+30 Intelligence, Hint: [Kiryakujouou] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20013,
    en: "Otonashi Etsuko",
    fr: "[The Exclusive Scoop!] Otonashi Etsuko",
    jp: "乙名史悦子",
    romaji: "Otonashi Etsuko",
    name: "[The Exclusive Scoop!] Otonashi Etsuko",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "快進撃", romaji: "Kaishingeki", effect: "Gold Skill : Spécifique Leader - Déclenche une accélération phénoménale si vous menez la course au début du dernier tiers." },
      { jp: "直線回復◯", romaji: "Chokusen Kaifuku o", effect: "Restaure un peu de Stamina lors de la course en ligne droite." }
    ],
    events: [
      {
        titleJp: "突撃！隣のトレーニング！",
        titleRomaji: "Totsugeki! Tonari no Training!",
        choices: [
          { textFr: "Lui accorder une interview exclusive en direct", effect: "+15 toutes les stats, Motivation au maximum, Débloque ses sorties" }
        ]
      },
      {
        titleJp: "特ダネは君の背中に",
        titleRomaji: "Tokudane wa Kimi no Senaka ni (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "Faire la Une du grand journal de sport", effect: "+35 Vitesse, Hint: [Kaishingeki] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20014,
    en: "Kiryuu In",
    fr: "[The Gentle Trainer Companion] Kiryuu In Aoi",
    jp: "桐生院葵",
    romaji: "Kiryuu-in Aoi",
    name: "[The Gentle Trainer Companion] Kiryuu In Aoi",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "好転一息", romaji: "Kouten Iduiki", effect: "Gold Skill : Restaure une immense quantité de Stamina lors de la course en ligne droite à mi-parcours." },
      { jp: "直線回復◯", romaji: "Chokusen Kaifuku o", effect: "Restaure de la Stamina en ligne droite." }
    ],
    events: [
      {
        titleJp: "世間知らずのお嬢様？",
        titleRomaji: "Seken Shirazu no Ojou-sama?",
        choices: [
          { textFr: "Lui faire visiter les stands de nourriture populaires", effect: "Restaure 25 Énergie, Débloque son Odekake" }
        ]
      },
      {
        titleJp: "私の選んだ最高の道",
        titleRomaji: "Watashi no Eranda Saikou no Michi (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "Serrer sa main pour sceller une rivalité saine", effect: "+25 Endurance, +25 Points de Compétence, Hint: [Kouten Iduiki] Lv+1 ou Lv+3" }
        ]
      }
    ]
  },
  {
    id: 20015,
    en: "Shinpuku Imiko",
    fr: "[The Strategic Data Center] Shinpuku Imiko",
    jp: "神服伊美子",
    romaji: "Shinpuku Imiko",
    name: "[The Strategic Data Center] Shinpuku Imiko",
    type: "Pal",
    rarity: "SSR",
    skills: [
      { jp: "怒涛 de 追い上げ", romaji: "Dotou no Oiage", effect: "Gold Skill : Spécifique Chaser - Déclenche un enchaînement de boosts de vitesse dévastateurs lors de la remontée dans le dernier virage." },
      { jp: "仕掛け抜群", romaji: "Shikake Batsugun", effect: "Spécifique Chaser : Permet de préparer parfaitement son sprint final à l'arrière." }
    ],
    events: [
      {
        titleJp: "電脳世界の案内人",
        titleRomaji: "Denno Sekai no Annainin",
        choices: [
          { textFr: "Laisser son logiciel analyser foulée par foulée", effect: "+20 Intelligence, Débloque l'accès aux analyses/sorties" }
        ]
      },
      {
        titleJp: "計算通りの未来へ",
        titleRomaji: "Keisandouri no Mirai e (Chaîne Odekake 5/5)",
        choices: [
          { textFr: "Exécuter la simulation parfaite calculée sur PC", effect: "+30 Intelligence, Hint: [Dotou no Oiage] Lv+1 ou Lv+3" }
        ]
      }
    ]
  }
];