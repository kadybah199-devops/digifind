export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "digitalisation-processus",
    title: "Pourquoi la digitalisation commence par les processus",
    category: "Transformation",
    excerpt: "Avant de choisir un outil, comprendre le travail réel aide à bâtir une transformation utile et durable.",
    publishedAt: "14 novembre 2026",
    readingTime: 4,
    content: [
      "La transformation numérique ne commence pas toujours par l’achat d’un logiciel. Elle commence souvent par une réflexion sur les processus, la manière dont les équipes travaillent, les points de blocage et le niveau de traçabilité des activités.",
      "Avant d’automatiser, il faut comprendre ce qui doit être simplifié. Ce diagnostic permet ensuite de choisir les bons outils, d’éviter les erreurs coûteuses et de rendre la technologie réellement utile.",
      "Les organisations les plus performantes alignent stratégie, organisation et outils. La digitalisation devient alors un levier de performance et non un simple projet technique.",
    ],
  },
  {
    slug: "mesurer-gain-productivite",
    title: "Comment mesurer le gain de productivité d’une structure",
    category: "Performance",
    excerpt: "Quelques repères pour suivre les effets réels d’un changement de méthode, d’outil ou de workflow.",
    publishedAt: "8 novembre 2026",
    readingTime: 5,
    content: [
      "Un projet de transformation produit des résultats mesurables lorsqu’il part d’une situation de référence. Temps de traitement, taux d’erreur et volume de tâches en attente donnent une première lecture concrète.",
      "Les indicateurs doivent rester liés au quotidien des équipes. Un tableau de bord utile aide à décider, repère les blocages et accompagne les ajustements sans ajouter de lourdeur administrative.",
      "Comparer régulièrement les mêmes mesures permet de distinguer les gains durables des effets ponctuels et de réorienter les efforts si nécessaire.",
    ],
  },
  {
    slug: "ia-donnees-pme",
    title: "IA et données : trois leviers pour mieux piloter l’activité",
    category: "Data",
    excerpt: "Comment les données internes et les outils d’IA peuvent éclairer les décisions opérationnelles.",
    publishedAt: "2 novembre 2026",
    readingTime: 6,
    content: [
      "Les données que les organisations produisent déjà peuvent révéler des tendances utiles : évolution de la demande, délais, qualité de service ou charge de travail.",
      "L’intelligence artificielle peut aider à classer des informations, repérer des motifs ou accélérer certaines tâches. Ces usages demandent des objectifs clairs, des données maîtrisées et une validation humaine adaptée.",
      "Commencer par un besoin précis et mesurer le résultat permet d’adopter les outils avec discernement et de construire la confiance des équipes.",
    ],
  },
];
