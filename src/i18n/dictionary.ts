export type Locale = "en" | "fr";

export const dict = {
  en: {
    nav: { home: "Home", classes: "Classes", pricing: "Pricing", contact: "Contact" },
    hero: { title: "Azu Yoga & Pilates", subtitle: "Move. Breathe. Restore." },
    classes: {
      heading: "our classes",
      sub: "Explore our range of yoga & Pilates classes designed to move, balance, and strengthen your body and mind.",
      flowTitle: "Yoga Flow",
      flowDesc:
        "A smooth, breath-centered practice combining strength, balance, and flexibility.",
      vinyasaTitle: "Vinyasa",
      vinyasaDesc:
        "Dynamic, breath-linked sequences that build heat and focus.",
      meditationTitle: "Meditation",
      meditationDesc:
        "Guided mindfulness and breath practices to reduce stress and cultivate calm.",
      matTitle: "Mat Pilates",
      matDesc:
        "Classical Pilates on the mat for core, posture, and control.",
      reformerTitle: "Reformer Pilates",
      reformerDesc:
        "Full-body, resistance-based training on the reformer machine.",
      coming: "Coming in December"
    },
    footer: { rights: "All rights reserved." }
  },
  fr: {
    nav: { home: "Accueil", classes: "Cours", pricing: "Tarifs", contact: "Contact" },
    hero: { title: "Azu Yoga & Pilates", subtitle: "Bouger. Respirer. Se restaurer." },
    classes: {
      heading: "nos cours",
      sub: "Découvrez notre gamme de cours de yoga et de Pilates conçus pour équilibrer et renforcer le corps et l’esprit.",
      flowTitle: "Yoga Flow",
      flowDesc:
        "Une pratique fluide centrée sur la respiration, alliant force, équilibre et souplesse.",
      vinyasaTitle: "Vinyasa",
      vinyasaDesc:
        "Des séquences dynamiques liées à la respiration qui font monter la chaleur et la concentration.",
      meditationTitle: "Méditation",
      meditationDesc:
        "Des pratiques guidées pour réduire le stress et cultiver le calme.",
      matTitle: "Pilates au sol",
      matDesc:
        "Pilates classique sur tapis pour le centre, la posture et le contrôle.",
      reformerTitle: "Pilates sur Reformer",
      reformerDesc:
        "Entraînement complet avec résistance sur reformer.",
      coming: "En décembre"
    },
    footer: { rights: "Tous droits réservés." }
  }
} as const;


