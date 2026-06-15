export interface TravelTip {
  title: string;
  desc: string;
  type: 'do' | 'dont' | 'info';
}

export interface TravelSection {
  id: string;
  title: string;
  icon: string;
  intro: string;
  tips: TravelTip[];
}

export const travelGuideData: TravelSection[] = [
  {
    id: 'savoir_vivre',
    title: 'Dans la Rue & Transports',
    icon: '🚶',
    intro: 'Les règles d\'or pour se fondre dans la masse en extérieur et dans le réseau de transport.',
    tips: [
      { title: "Pas de pourboire", desc: "Ne laissez JAMAIS de pourboire. C'est considéré comme insultant. Si vous oubliez des pièces sur la table, le serveur va courir dans la rue derrière vous pour vous les rendre.", type: 'dont' },
      { title: "Marcher en mangeant", desc: "C'est jugé très impoli. Si vous achetez un snack au combiné (Konbini) ou à un stand de festival, consommez-le sur place devant la boutique ou trouvez un banc.", type: 'dont' },
      { title: "Le silence dans le train", desc: "Dans le métro ou le Shinkansen, passez votre téléphone en mode silencieux (appelé 'Manner Mode'). Il est interdit d'y passer des appels ou de parler à voix haute.", type: 'dont' },
      { title: "Gestion des poubelles", desc: "Il n'y a quasiment AUCUNE poubelle publique dans les rues (mesure de sécurité historique). Gardez un petit sac plastique sur vous pour stocker vos déchets de la journée et les jeter le soir à votre hôtel.", type: 'info' },
      { title: "Fumer à l'extérieur", desc: "Il est strictement interdit de fumer en marchant dans la rue sous peine d'amende. Il existe des cabines ou zones de fumage extérieures dédiées ('Smoking Areas').", type: 'dont' },
      { title: "Faire la queue", desc: "Que ce soit pour monter dans le métro, le bus, ou attendre devant un restaurant, respectez scrupuleusement les lignes tracées au sol et attendez votre tour sans doubler.", type: 'do' },
      { title: "Le sens de circulation", desc: "Les piétons circulent généralement à gauche (comme les voitures), que ce soit sur les trottoirs, dans les couloirs du métro ou dans les escalators à Tokyo (à Osaka, on se met à droite !).", type: 'info' },
      { title: "Se moucher en public", desc: "Se moucher bruyamment en public est considéré comme dégoûtant. Reniflez discrètement ou isolez-vous dans des toilettes si vous n'avez pas le choix.", type: 'dont' }
    ]
  },
  {
    id: 'manger',
    title: 'Au Restaurant & Bar',
    icon: '🍱',
    intro: 'L\'art de la table, les Izakaya et les pièges à éviter lors des repas.',
    tips: [
      { title: "Les tickets de commande", desc: "Dans beaucoup de petits restos de Ramen, Soba ou Gyudon, vous devez choisir et payer votre plat sur une borne automatique à l'entrée, puis donner le ticket imprimé au cuisinier.", type: 'info' },
      { title: "Oshibori (La serviette)", desc: "En arrivant, on vous donnera une petite serviette humide (chaude en hiver, fraîche en été). Elle sert exclusivement à vous nettoyer les mains avant de manger, ne vous essuyez pas le visage avec !", type: 'do' },
      { title: "Faire du bruit avec les nouilles", desc: "Aspirer bruyamment ses Ramen ou ses Soba ('Slurper') n'est pas impoli. Au contraire, cela permet de refroidir les nouilles sans se brûler et prouve au chef que c'est délicieux.", type: 'do' },
      { title: "Le drame des baguettes", desc: "Ne plantez jamais vos baguettes verticalement dans votre bol de riz (cela rappelle le rite funéraire du Hashivataschi). Ne vous passez pas non plus de nourriture de baguettes à baguettes.", type: 'dont' },
      { title: "Otoshi (Le couvert payant)", desc: "Dans les Izakaya (bars/pubs japonais), on vous servira d'office une petite coupelle d'amuse-bouche payante (entre 300 et 500 yens) faisant office de frais de table non négociables.", type: 'info' },
      { title: "Servir les boissons", desc: "Si vous buvez en groupe (bière, saké), ne vous servez jamais vous-même. Servez les verres de vos voisins, et attendez que quelqu'un serve le vôtre en retour avant de trinquer en disant 'Kanpai !'.", type: 'do' },
      { title: "Verser la sauce soja", desc: "Ne versez jamais la sauce soja directement sur votre riz blanc. Versez-en un peu dans la petite coupelle prévue à cet effet, et trempez-y délicatement vos aliments (côté poisson pour les sushis).", type: 'dont' }
    ]
  },
  {
    id: 'magasins',
    title: 'Magasins & Shopping',
    icon: '🛒',
    intro: 'Passer à la caisse, essayer des vêtements et acheter ses souvenirs sans faux pas.',
    tips: [
      { title: "Le plateau pour l'argent", desc: "Ne donnez pas votre argent ou votre carte bancaire directement de main à main au caissier. Déposez-les sur le petit plateau en plastique posé sur le comptoir.", type: 'do' },
      { title: "Manipuler les produits", desc: "Évitez d'ouvrir les emballages ou de manipuler excessivement les produits fragiles ou les vêtements pliés. Les employés aiment que tout reste parfaitement ordonné.", type: 'dont' },
      { title: "Cabines d'essayage", desc: "Avant d'entrer en cabine, vous devez retirer vos chaussures. Les femmes reçoivent souvent un voile transparent jetable à mettre sur la tête pour éviter de tacher les vêtements avec du maquillage.", type: 'info' },
      { title: "Le rituel du rendu de monnaie", desc: "Le caissier va systématiquement compter les billets devant vous à haute voix et vous rendre la monnaie des deux mains en s'inclinant légèrement. C'est la norme de politesse.", type: 'info' },
      { title: "Sacs de course", desc: "Depuis quelques années, les sacs plastiques sont payants au Japon. Pensez à avoir un sac réutilisable ou préparez quelques yens de plus au Konbini.", type: 'info' }
    ]
  },
  {
    id: 'chez_les_gens',
    title: 'Chez l\'Habitant & Logement',
    icon: '🏠',
    intro: 'Les règles strictes d\'hygiène et de respect à la maison ou au Ryokan.',
    tips: [
      { title: "La frontière des chaussures", desc: "Dès l'entrée (Genkan), une marche délimite l'intérieur. Retirez obligatoirement vos chaussures et enfilez les chaussons d'intérieur fournis. Ne marchez JAMAIS sur le tatami avec vos chaussures.", type: 'do' },
      { title: "Les chaussons des toilettes", desc: "Il y a des chaussons spécifiques posés devant la porte des toilettes. Enfilez-les pour y entrer, mais n'oubliez SOURTOUT pas de les enlever en sortant pour remettre vos chaussons de maison !", type: 'do' },
      { title: "Les tatamis", desc: "Les pièces en tatami (paille de riz tressée) se piétinent exclusivement en chaussettes ou pieds nus. On y retire même ses chaussons de maison classiques pour ne pas abîmer le sol.", type: 'info' },
      { title: "Le rituel du Onsen / Bain", desc: "Que ce soit chez l'habitant ou aux bains publics, on se lave et on se rince intégralement sur les petits tabourets à côté de la baignoire AVANT de se glisser dans l'eau chaude. L'eau du bain doit rester pure pour les suivants.", type: 'do' },
      { title: "Les tatouages aux Onsen", desc: "Historiquement liés aux Yakuzas, les tatouages sont encore interdits dans beaucoup de bains. Achetez des stickers étanches de couleur peau pour les camoufler si vous en avez des petits.", type: 'info' },
      { title: "Cadeau d'invité (Omiyage)", desc: "Si vous êtes invité chez un Japonais, n'arrivez jamais les mains vides. Offrez un petit cadeau, idéalement une spécialité comestible emballée de votre pays ou région d'origine.", type: 'do' }
    ]
  }
];